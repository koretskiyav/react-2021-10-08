import cn from 'classnames';

import styles from './tabs.module.css';
import { Link } from 'react-router-dom';

function Tabs({ match }) {
  const restId = match.params.restId;
  const activeId = match.params.activeId;

  const tabs = [
    { id: 'menu', label: 'Menu' },
    { id: 'reviews', label: 'Reviews' },
  ];

  return (
    <div className={styles.tabs}>
      {tabs.map(({ id, label }) => (
        <Link to={`/restaurants/${restId}/${id}`} key={id}>
          <span
            className={cn(styles.tab, { [styles.active]: id === activeId })}
          >
            {label}
          </span>
        </Link>
      ))}
    </div>
  );
}

export default Tabs;
