import SerialThree from "./SerialThree.json";
import Serial from "./serial";
import './serials.css'
export default function Serials() {
  return (
    <div className="Serialss">
      <input type="text" />
      <div className="cards3">
        {SerialThree.map((b) => (
          <Serial key={b.id} {...b}/>
        ))}
        </div>
    </div>
  );
}