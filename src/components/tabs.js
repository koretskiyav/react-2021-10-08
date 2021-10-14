
import Rate from "./Rate";

export default function Tabs({ tabs, onChange }) {
  return (
    <div>
      {tabs.map(({ id, label }) => (
        <>
          <button key={id} onClick={() => onChange(id)}>
            {label}
          </button>
          <Rate value={3.5} />
        </>
      ))}
    </div>
  );
}
