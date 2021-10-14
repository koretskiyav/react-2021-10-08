export default function Tabs({ tabs, onChange }) {
  return (
    <div>
      {tabs.map(({ id, label }) => (
        <button variant="Primary" key={id} onClick={() => onChange(id)}>
          {label}
        </button>
      ))}
    </div>
  );
}
