import "./common.css";
import { useStore } from "../zustand/Store";

const LeftCounter = () => {
  //storeからデータを受け取る
  const happys = useStore((state) => state.happys);
  const happysUp = useStore((state) => state.happysUp);
  const showhappys = useStore((state) => state.showhappys);

  return (
    <div className="Counter">
      <h2 className="Icon">😃:{happys}</h2>
      <button className="PlusButton" onClick={happysUp}>
        +
      </button>
      <button onClick={showhappys} className="alertButton">
        Alert
      </button>
    </div>
  );
};

export default LeftCounter;
