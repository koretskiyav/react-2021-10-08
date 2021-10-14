import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

export default function Tabs({ tabs, onChange }) {
  return (
    <div style={{ textAlign: 'center' }}>
      {tabs.map(({ id, label }) => (
        <Button
          className="m-1"
          gap={10}
          variant="outline-primary"
          key={id}
          onClick={() => onChange(id)}
        >
          {label}
        </Button>
      ))}
    </div>
  );
}
