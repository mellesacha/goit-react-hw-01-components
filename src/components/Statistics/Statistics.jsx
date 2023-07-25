import PropTypes from 'prop-types';
import cl from "./Statistics.module.css";

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
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
    })).isRequired
}
