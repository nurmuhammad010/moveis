import MultikOne from "./Multifilim.json";
import Multik from "./Multik";
import './Multiks.css';
export default function Multiks() {
  return (
    <div className="Multikss">
      <input type="text" />
      <div className="cards2">
        {MultikOne.map((e) => (
          <Multik key={e.id} {...e}/>
        ))}
        </div>
    </div>
  );
}