"use client";

import { useState } from "react";
import FormModal from "./FormModal";
import Searchbar from "./Searchbar";
import BulkDelete from "./BulkDelete";

export default function Table({ columns, actions, records, table, count, label }) {
  let i = 1;

  const [isAllChecked, setIsAllChecked] = useState(false);
  const [checkedRecords, setCheckedRecords] = useState(
    new Array(records.length).fill(false)
  );
  const [selectedIds, setSelectedIds] = useState([]); 

  const handleHeaderCheckboxChange = () => {
    const newValue = !isAllChecked;
    setIsAllChecked(newValue);
    setCheckedRecords(new Array(records.length).fill(newValue));

    if (newValue) {
      const allIds = records.map((record) => record.id);
      setSelectedIds(allIds);
      console.log("All selected IDs:", allIds);
    } else {
      setSelectedIds([]); 
    }
  };

  const handleRowCheckboxChange = (index) => {
    const updatedCheckedRecords = [...checkedRecords];
    updatedCheckedRecords[index] = !updatedCheckedRecords[index];
    setCheckedRecords(updatedCheckedRecords);

    const updatedSelectedIds = [...selectedIds];
    if (updatedCheckedRecords[index]) {
      updatedSelectedIds.push(records[index].id);
    } else {
      const recordId = records[index].id;
      const idIndex = updatedSelectedIds.indexOf(recordId);
      if (idIndex > -1) {
        updatedSelectedIds.splice(idIndex, 1);
      }
    }
    setSelectedIds(updatedSelectedIds);
    console.log("Selected IDs:", updatedSelectedIds);

    setIsAllChecked(updatedCheckedRecords.every((checked) => checked));
  };

  return (
    <>
      <div className="tableTopNav">
        <div className="filtersGroup">
          <Searchbar label={label} />
        </div>

        <div className="actionsGroup">
          <BulkDelete ids={selectedIds} label={label} records={records}/>
          <FormModal title="Add" type="create" table={table}  />
        </div>
      </div>
    {records.length === 0 ? 
    <div className="flex justify-center font-bold items-center h-64"> 
        <p>No record found.</p>
      </div> :
    <table className="w-[94%] mx-auto overflow-hidden shadow-sm mt-2 rounded-md border-[1.5px] border-gray-300">
      <thead>
        <tr className="bg-slate-300">
          <th className="hidden md:table-cell h-full py-2 px-[0.2rem]">
            <div className="flex items-center justify-center">
              <input
                type="checkbox"
                className="cursor-pointer scale-150"
                checked={isAllChecked}
                onChange={handleHeaderCheckboxChange}
              />
            </div>
          </th>
          <th className="border-y-2 pl-2 py-2 rounded-sm text-left">Sr. #</th>
          {columns.map((th) => (
            <th key={th} className="border-y-2 pl-2 py-2 rounded-sm text-left">
              {th}
            </th>
          ))}
          {actions.actions && (
            <th className="border-y-2 pl-2 py-2 rounded-sm">Actions</th>
          )}
        </tr>
      </thead>

      <tbody>
        {records.map((record, index) => (
          <tr
            key={i}
            className="border-y-2 hover:bg-gray-200/80 hover:cursor-pointer odd:bg-[#f2f2f2]"
          >
            <td className="hidden md:table-cell border-y-2 py-2 px-1 rounded-sm text-center">
              <div className="flex items-center justify-center">
                <input
                  type="checkbox"
                  className="text-center cursor-pointer scale-150"
                  checked={checkedRecords[index]}
                  onChange={() => handleRowCheckboxChange(index)}
                />
              </div>
            </td>
            <td className="border-y-2 pl-2 py-2 rounded-sm">{i++}</td>
            {Object.values(record).map(
              (value, index) =>
                index < count && (
                  <td
                    key={index}
                    className="border-y-2 pl-2 py-2 rounded-sm text-ellipsis text-nowrap overflow-hidden text-[0.8rem] lg:text-[0.95rem]"
                  >
                    {value}
                  </td>
                )
            )}
            {actions.actions && (
              <td className="py-2 flex items-center justify-center rounded-sm">
                <div
                  className={`${
                    actions.all
                      ? "gap-[0.45rem] lg:gap-[0.8rem]"
                      : "gap-[0.7rem] lg:gap-[3rem]"
                  } flex items-center justify-evenly`}
                >
                  {(actions.update || actions.all) && (
                    <FormModal
                      type="update"
                      table={table}
                      id={i}
                      data={record}
                    />
                  )}
                  {(actions.view || actions.all) && (
                    <FormModal type="view" table={table} id={i} data={record} />
                  )}
                  {(actions.delete || actions.all) && (
                    <FormModal
                      type="delete"
                      table={table}
                      id={i}
                      data={record}
                    />
                  )}
                </div>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
}
    </>
  );
}
