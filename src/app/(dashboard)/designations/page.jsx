import AddBtn from "@/components/common/AddBtn";
import BulkDelete from "@/components/common/BulkDelete";
import FormModal from "@/components/common/FormModal";
import Pagination from "@/components/common/Pagination";
import Searchbar from "@/components/common/Searchbar";
import Table from "@/components/common/Table";
import TitleHeader from "@/components/common/TitleHeader";
import axios from "axios";

const columns = ["Designation"];

const actions = {
  actions: true,
  update: true,
  view: false,
  delete: true,
  all: false,
};

export default async function DesignationManagementPage() {
  let records = [];

  try {
    const response = await axios.get("http://192.168.50.219:3000/designations");
    records = response.data.map((item) => ({
      designation: item.designation,
      id: item.id,
    }));
  } catch (error) {
    console.error("Error fetching designations:", error);
  }
  return (
    <div className="container">
      <TitleHeader title="Designations Management" />

      <Table
        columns={columns}
        records={records}
        actions={actions}
        table="designations"
        count={1}
        label="Designation"
      />
      <Pagination />
    </div>
  );
}

/*const records = [
  {
    id: "8hfhf-f5fhf-hfhh02",
    designation: "Associate Professor"},
  {
    id: "8hfhf-f5fhf-hfhh02",
    designation: "Assistant Professor"},
  {
    id: "8hfhf-f5fhf-hfhh02",
    designation: "Lecturer"},
  {
    id: "8hfhf-f5fhf-hfhh02",
    designation: "HoD"},
] */
