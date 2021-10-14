import styles from './product.module.css';

export default function Tabs({ tabs, onChange }) {
  return (
    <div>
      {tabs.map(({ id, label }) => (
        <button className={styles.button} key={id} onClick={() => onChange(id)}>
          {label}
        </button>
      ))}
    </div>
  );
}
