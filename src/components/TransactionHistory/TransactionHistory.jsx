import PropTypes from 'prop-types';
import cl from "./Transactions.module.css";

const Transactions = ({ items }) => {
    return (
        <table className={cl.transactionHistory}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(({ id, type, amount, currency }) => {
                    return (<tr key={id}>
                        <td>{type}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
                    </tr>)
                })}
    
            </tbody>
        </table>
    )
};

export default Transactions;

Transactions.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string
}