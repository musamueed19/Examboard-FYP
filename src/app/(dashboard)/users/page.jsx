// "use client";
import AddBtn from "@/components/common/AddBtn";
import BulkDelete from "@/components/common/BulkDelete";
import FormModal from "@/components/common/FormModal";
import MessageStrip from "@/components/common/MessageStrip";
import Pagination from "@/components/common/Pagination";
import Searchbar from "@/components/common/Searchbar";
import Table from "@/components/common/Table";
import TitleHeader from "@/components/common/TitleHeader";
import axios from "axios";
// import { useEffect, useState } from "react";

const columns = ["Name", "Email", "Role", "Status", "Designation"];
const actions = {
  actions: "true",
  all: "true",
  update: "true",
  view: "true",
  edit: "true",
};

export default async function UserManagementPage() {
  // const [records, setRecords] = useState([]);
  let records = [];

  try {
    const response = await axios.get("http://192.168.50.219:3000/users");
    records = response.data.map((item) => ({
      name: item.name,
      email: item.email,
      role: item.UserRole_id[0]?.name || "N/A",
      status: item.is_active ? "Active" : "Inactive",
      designation: item.designation.name,
      designationId: item.designation.id,
      id: item.id,
      roleId: item.UserRole_id[0]?.id || null,
      contact: item.contact_number,
      location: item.location.name,
      locationId: item.location.id,
      statusId: item.is_active,
    }));
  } catch (error) {
    console.error("Error fetching users:", error);
  }

  return (
    <div className="container">
      <TitleHeader title="Users Management" />


      <Table
        columns={columns}
        records={records}
        actions={actions}
        count={5}
        table="users"
        label="User name"
      />

      <Pagination />
    </div>
  );
}


// const records = [
//   {
//     name: "Asim Mehmood",
//     email: "asimmehmood@vu.edu.pk",
//     role: "Admin",
//     status: "Active",
//     designation: "Associate Professor",
//     contact: "+92-257897-98",
//     location: "Lawrence Road Campus",
//   },
//   {
//     name: "Warda Faiz",
//     email: "warda.faiz@vu.edu.pk",
//     role: "Admin",
//     status: "Active",
//     designation: "Associate Professor",
//     contact: "+92-257897-98",
//     location: "Lawrence Road Campus",
//   },
//   {
//     name: "Muhammad Rehan",
//     email: "rehan@vu.edu.pk",
//     role: "Faculty Member",
//     status: "Active",
//     designation: "Associate Professor",
//     contact: "+92-257897-98",
//     location: "Lawrence Road Campus",
//   },
//   {
//     name: "Neelam Alam",
//     email: "neelam.alam@vu.edu.pk",
//     role: "Faculty Member",
//     status: "Active",
//     designation: "Associate Professor",
//     contact: "+92-257897-98",
//     location: "Lawrence Road Campus",
//   },
//   {
//     name: "Saeed Nasir",
//     email: "saeednasir@vu.edu.pk",
//     role: "Faculty Member",
//     status: "Active",
//     designation: "Assistant Professor",
//     contact: "+92-257897-98",
//     location: "Lawrence Road Campus",
//   },
//   {
//     name: "Adnan Asif",
//     email: "adnanasif@vu.edu.pk",
//     role: "HoD",
//     status: "Active",
//     designation: "Assistant Professor",
//     contact: "+92-257897-98",
//     location: "Lawrence Road Campus",
//   },
//   {
//     name: "Muhammad Qamar",
//     email: "qamar@vu.edu.pk",
//     role: "HoD",
//     status: "Active",
//     designation: "Lecturer",
//     contact: "+92-257897-98",
//     location: "Lawrence Road Campus",
//   },
//   {
//     name: "Tahir Jan",
//     email: "tahir.jan@vu.edu.pk",
//     role: "HoD",
//     status: "Active",
//     designation: "Tutor/Instructor",
//     contact: "+92-257897-98",
//     location: "Lawrence Road Campus",
//   },
//   {
//     name: "Miss Noureen",
//     email: "noureen@vu.edu.pk",
//     role: "HoD",
//     status: "Active",
//     designation: "Tutor/Instructor",
//     contact: "+92-257897-98",
//     location: "Lawrence Road Campus",
//   },
//   {
//     name: "Faiz Tahir",
//     email: "faiztahir@vu.edu.pk",
//     role: "HoD",
//     status: "Inactive",
//     designation: "Tutor/Instructor",
//     contact: "+92-257897-98",
//     location: "Lawrence Road Campus",
//   },
// ];
