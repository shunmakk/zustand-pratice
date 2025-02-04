import "./common.css";
import { useStore } from "../assets/zustand/Store";

const LeftCounter = () => {
  //storeからデータを受け取る
  const happys = useStore((state) => state.happys);
  const happysUp = useStore((state) => state.happysUp);

  return (
    <div className="Counter">
      <h2 className="Icon">😃:{happys}</h2>
      <button className="PlusButton" onClick={happysUp}>
        +
      </button>
    </div>
  );
};

export default LeftCounter;
