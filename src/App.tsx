import "./App.css";
import LeftCounter from "./components/LeftCounter";
import RightCounter from "./components/RightCounter";

function App() {
  return (
    <div className="countWrapper">
      <LeftCounter />
      <RightCounter />
    </div>
  );
}

export default App;
