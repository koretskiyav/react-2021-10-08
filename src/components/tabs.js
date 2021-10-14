
export default function Tabs({ tabs, onChange }) {
  return (
    <div className="tabs">
      {tabs.map(({ id, label }) => (
        <button key={id} onClick={() => onChange(id)}>
          {label}
        </button>
      ))}
    </div>
  );
}
