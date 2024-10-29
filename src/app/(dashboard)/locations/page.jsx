import AddBtn from "@/components/common/AddBtn";
import BulkDelete from "@/components/common/BulkDelete";
import FormModal from "@/components/common/FormModal";
import Pagination from "@/components/common/Pagination";
import Searchbar from "@/components/common/Searchbar";
import Table from "@/components/common/Table";
import TitleHeader from "@/components/common/TitleHeader";
import axios from "axios";

const columns = ["Location"];
//   {
//     id: "8hfhf-f5fhf-hfhh02",
//     location: "Islamabad Campus",
//   },
//   {
//     id: "8hfhf-f5fhf-hfhh02",
//     location: "Lawrence Road Office",
//   },
//   {
//     id: "8hfhf-f5fhf-hfhh02",
//     location: "Karachi Campus (I)" },
//   {
//     id: "8hfhf-f5fhf-hfhh02",
//     location: "Faisal Town Campus, Lahore" },
//   {
//     id: "8hfhf-f5fhf-hfhh02",
//     location: "Gujranwala Campus" },
//   {
//     id: "8hfhf-f5fhf-hfhh02",
//     location: "Faisalabad Campus" },
//   {
//     id: "8hfhf-f5fhf-hfhh02",
//     location: "Karachi Campus (II)" },
//   {
//     id: "8hfhf-f5fhf-hfhh02",
//     location: "Abbotabad Campus" },
//   {
//     id: "8hfhf-f5fhf-hfhh02",
//     location: "Hyderabad Campus" },
//   {
//     id: "8hfhf-f5fhf-hfhh02",
//     location: "Peshawar Campus" },
// ];
const actions = {
  actions: true,
  update: true,
  view: false,
  delete: true,
  all: false,
};

export default async function LocationManagementPage() {
  let records = [];

  try {
    const response = await axios.get("http://192.168.50.219:3000/locations");
    records = response.data.map((item) => ({
      location: item.location,
      id: item.id,
    }));
  } catch (error) {
    console.error("Error fetching locations:", error);
  }

  return (
    <div className="container">
      <TitleHeader title="Locations Management" />

      {/* <div className="tableTopNav">
        <div className="filtersGroup">
          <Searchbar label="Location" />
        </div>

        <div className="actionsGroup">
          <BulkDelete />
          <FormModal title="Add" type="create" table="locations" />
        </div>
      </div> */}

      <Table
        columns={columns}
        records={records}
        actions={actions}
        table="locations"
        label="locations"
        count={1}
      />
      <Pagination />
    </div>
  );
}



// const records = [