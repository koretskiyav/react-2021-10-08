import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './tabs.module.css';

function Tabs({ tabs }) {
  return (
    <div className={styles.tabs}>
      {tabs.map(({ label, url }) => (
        <NavLink
          to={url}
          key={label}
          className={styles.tab}
          activeClassName={styles.active}
        >
          {label}
        </NavLink>
      ))}
    </div>
  );
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      label: PropTypes.string,
    }).isRequired
  ).isRequired,
};

export default Tabs;
