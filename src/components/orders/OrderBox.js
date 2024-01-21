import { Link } from "react-router-dom";
import "./OrderBox.css";
import ProceedButton from "../buttons/ProceedButton.js";

const OrderBox = ({ title, number, to }) => (
    <div className="col m-2">
        <div className="card">
            <div className="card-body text-center">
                <Link to={to} className="d-flex justify-content-center align-items-center">
                    <h5 className="card-title box-title">{title}</h5>
                    <ProceedButton />
                </Link>
                <p className="card-text box-number">{number}</p>
            </div>
        </div>
    </div>
);

export default OrderBox;
