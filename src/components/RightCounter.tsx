import "./common.css";
import { useStore } from "../assets/zustand/Store";

const RightCounter = () => {
  //storeからデータを受け取る
  const happys = useStore((state) => state.happys);
  const happysUp = useStore((state) => state.happysUp);
  return (
    <div>
      <div className="Counter">
        <h2 className="Icon">😃:{happys}</h2>
        <button className="PlusButton" onClick={happysUp}>
          +
        </button>
      </div>
    </div>
  );
};

export default RightCounter;
