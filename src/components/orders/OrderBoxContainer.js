import OrderBox from './OrderBox';

const OrderBoxContainer = () => (
    <div className="row">
        <OrderBox title="Paid" number={2137} to="/orders/paid"/>
        <OrderBox title="Unpaid" number={420} to="/orders/unpaid"/>
        <OrderBox title="Returned" number={3} to="/orders/returned"/>
    </div>
);

export default OrderBoxContainer;
