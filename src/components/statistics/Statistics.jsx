import data from '../data.json';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import { getRandomHexColor } from './random';


const Statistics = ({ title, stats = data, condition }) => {
    return (<section>
        {condition ? <h2 className={styles.title}>{title}</h2> : ""}
        <ul className={styles.statList}>
            {stats.map((stat, id) => {
                return <li className={styles.stat} key={id} style={{ backgroundColor: getRandomHexColor() }}>
                    <span className={styles.label}>{stat.label}<br></br></span>
                    <span className={styles.percentage}>{stat.percentage}%</span>
                </li>
            })}
 
        </ul>

    </section>
    )
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ),
};

export default Statistics;