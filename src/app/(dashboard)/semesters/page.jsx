
import Pagination from '@/components/common/Pagination';
import Table from '@/components/common/Table';
import TitleHeader from '@/components/common/TitleHeader';
import Loading from './loading';

const columns = [
  "Semester",
  "Start Date",
  "End Date",
  "Active"
];

const actions = {
  actions: "true",
  all: "true",
};

export default async function SemesterManagementPage() {
  let records = [];

  try {
    const response = await fetch('http://localhost:3000/semesters', {cache: 'no-store'}, { next: { tags: ['semesters'] } });
    if (!response.ok) {
      throw new Error('Failed to fetch semesters');
    }
    const data = await response.json();

    records = data.map(item => ({
      title: item.title,
      start_date: item.start_date,
      end_date: item.end_date,
      status: item.is_Active === true ? "Active" : "InActive",
      id: item.id,
      mid_start_date: item.mid_term_date,
      mid_end_date: item.mid_term_end_date,
      final_start_date: item.final_term_date,
      final_end_date: item.final_term_end_date,
    }));
  } catch (error) {
    console.error('Error fetching semesters:', error);
    records = []; 
  }


  return (
    <div className="container">
      <TitleHeader title="Semesters Management" />
      <Table columns={columns} records={records} actions={actions} table="semesters" count={4} label="Semester" />

      {records.length === 0 ||
        <Pagination /> }
    </div>
  );
}
