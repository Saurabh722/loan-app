import { Link } from 'react-router-dom';

export default function LoanStatus({ status }) {
    return (
        <div className="loan-status-view center">
            <h3>{status}</h3>
            <div>
                <Link to="/home" className="btn">
                    Home
                </Link>
            </div>
        </div>
    )
}