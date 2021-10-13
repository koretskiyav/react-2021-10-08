import styles from './tabs.module.css';

export default function Tabs({ tabs, onChange }) {
  return (
    <div className={styles.wrapper}>
      {tabs.map(({ id, label }) => (
        <button key={id} onClick={() => onChange(id)}>
          {label}
        </button>
      ))}
    </div>
  );
}
