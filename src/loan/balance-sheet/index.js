import Table from './../../components/table';

export default function BalanceSheet({ sheets }) {
  if (!sheets || !sheets.length) {
      return [];
  }
  
  return <div>
      {sheets.map((sheet, idx) => (
        <Table key={sheet[0].year} table={sheet} title={sheet[0].year}/>
      ))}
  </div>
};