
export default function Table({ table, title }) {
    if (!table || !table.length) {
        return [];
    }

    return <div className="table">
        <div className="table_header title">
            <span>{title}</span>
        </div>
        <div>
            <div className="table_header">
                <span>Month</span>
                <span>Profit/Loss</span>
                <span>Assets Value</span>
            </div>
            {
                table.map((val) => (
                    <div key={`${val.profitOrLoss}-${val.assetsValue}`}className="row">
                        <span>{val.month}</span>
                        <span>{val.profitOrLoss}</span>
                        <span>{val.assetsValue}</span>
                    </div>
                ))
            }
        </div>
    </div>;
};