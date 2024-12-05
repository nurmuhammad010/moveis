import TrellerTwo from "./trellerTwo.json";
import Treller from "./treller";
import './trellers.css';
export default function Trellers() {
  return (
    <div className="Trellerss">
     <input type="search" name="" id="" />
      <div className="cards4">
        {TrellerTwo.map((b) => (
          <Treller key={b.id} {...b}/>
        ))}
        </div>
    </div>
  );
}