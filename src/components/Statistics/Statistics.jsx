import PropTypes from 'prop-types';
import cl from "./Statistics.module.css";

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

const Statistics = ({ title, stats }) => {
    return (
        <section className={cl.statistics}>
            <h2 className={cl.title}>{title}</h2>
            <ul className={cl.statList}>
                {stats.map(({ id, label, percentage }) => {
                    return (<li className={cl.item}
                         key={id}>
                        <span className={cl.label}>{label}</span>
                        <span className={cl.percentage}>{percentage}%</span>
                    </li>)
                })}</ul>
        </section>
    )
};

export default Statistics;

Statistics.propTypes = {
    id: PropTypes.number,
    label: PropTypes.string,
    percentage: PropTypes.number,
}
