import BulkDelete from "@/components/common/BulkDelete";
import FormModal from "@/components/common/FormModal";
import Pagination from "@/components/common/Pagination";
import Searchbar from "@/components/common/Searchbar";
import Table from "@/components/common/Table";
import TitleHeader from "@/components/common/TitleHeader";

export default function ExamPaper({ type }) {
  const columns = ["Exam Type", "Marks", "No. of Questions", "Course Type"];

  const records = [
    { examType: "Midterm", marks: 5, questions: 5, courseType: "Regular" },
    { examType: "FinalTerm", marks: 5, questions: 3, courseType: "Practical" },
    { examType: "MidTerm", marks: 3, questions: 4, courseType: "Regular" },
  ];
  const actions =
    type === "update"
      ? { actions: true, all: true }
      : { actions: true, all: false, view: true, edit: false, delete: false };

  return (
    <div className="container">
      <TitleHeader
        fontSize="xl"
        alignment="start"
        margin="ml-8"
        title="Manage Exam Paper Settings"
      />
      <div className="tableTopNav">
        <div className="filtersGroup">
          <Searchbar label="Exam Type" />
        </div>

        <div className="actionsGroup">
          <BulkDelete />
          <FormModal title="Add" type="create" table="examPaper" />
        </div>
      </div>
      <Table
        columns={columns}
        records={records}
        actions={actions}
        table="examType"
        count={4}
      />
      <Pagination />
    </div>
  );
}
