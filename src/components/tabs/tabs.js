import PropTypes from 'prop-types';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

import styles from './tabs.module.css';

function Tabs({ tabs, activeId }) {
  return (
    <div className={styles.tabs}>
      {tabs.map(({ id, label, route }) => (
        <NavLink
          key={id}
          to={route}
          className={styles.tab}
          activeClassName={cn(styles.tab, { [styles.active]: id === activeId })}
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
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      route: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  activeId: PropTypes.string,
};

export default Tabs;
