// import AddBtn from "@/components/common/AddBtn";
// import BulkDelete from "@/components/common/BulkDelete";
// import Pagination from "@/components/common/Pagination";
// import Searchbar from "@/components/common/Searchbar";
import AddBtn from "@/components/common/AddBtn";
import BulkDelete from "@/components/common/BulkDelete";
import FormModal from "@/components/common/FormModal";
import Pagination from "@/components/common/Pagination";
import Searchbar from "@/components/common/Searchbar";
import Table from "@/components/common/Table";
import TitleHeader from "@/components/common/TitleHeader";
import axios from "axios";

const columns = ["Course", "Course Type", "Title"];


const actions = {
  actions: "true",
  all: "true",
};

export default async function CoursesManagementPage() {
  let records = [];

  try {
    const response = await axios.get("http://192.168.50.219:3000/courses");
    records = response.data.map((item) => ({
      course: item.id,
      courseType: item.type,
      title: item.title,
      studentEnrollment: item.student_enrollment,
    }));
  } catch (error) {
    console.error("Error fetching courses:", error);
  }
  return (
    // { children }

    <div className="container">
      <TitleHeader title="Courses Management" />

      <Table
        columns={columns}
        actions={actions}
        records={records}
        table="courses"
        count={3}
        label="Course"
      />
      <Pagination />
    </div>
  );
}



// const records = [
//   {
//     course: "CS001",
//     courseType: "Regular",
//     title: "VU-Computer Proficiency License",
//     studentEnrollment: 100
//   },
//   {
//     course: "CS101",
//     courseType: "Regular",
//     title: "Introduction to Computing",
//     studentEnrollment: 100
//   },
//   {
//     course: "CS201",
//     courseType: "Regular",
//     title: "Introduction to Programming",
//     studentEnrollment: 100
//   },
//   {
//     course: "CS201P",
//     courseType: "Practical",
//     title: "Introduction to Programming (Practical)",
//     studentEnrollment: 100
//   },
//   {
//     course: "CS301",
//     courseType: "Regular",
//     title: "Data Structures",
//     studentEnrollment: 100
//   },
//   {
//     course: "CS301P",
//     courseType: "Practical",
//     title: "Data Structures (Practical)",
//     studentEnrollment: 100
//   },
//   {
//     course: "CS302",
//     courseType: "Regular",
//     title: "Digital Logic Design",
//     studentEnrollment: 100
//   },
//   {
//     course: "CS302P",
//     courseType: "Practical",
//     title: "Digital Logic Design (Practical)",
//     studentEnrollment: 100
//   },
//   {
//     course: "CS304",
//     courseType: "Regular",
//     title: "Object Oriented Programming",
//     studentEnrollment: 100
//   },
//   {
//     course: "CS304P",
//     courseType: "Practical",
//     title: "Object Oriented Programming (Practical)",
//     studentEnrollment: 100
//   },
// ];
