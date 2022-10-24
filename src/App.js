import "./App.css";
import { useState, useEffect } from "react";
import { TaksCreator } from "./components/TaksCreator";
import { TaksTable } from "./components/TaksTable";
function App() {
  const [TaksItem, SetTaksItem] = useState([]);
  function createNewTaks(newTaks) {
    if (!TaksItem.find((task) => task.name === newTaks)) {
      SetTaksItem([...TaksItem, { name: newTaks, done: false }]);
    } else {
      alert("Ya Existe esta tarea");
    }
  }
  const toggleTask = (Taks) => {
    SetTaksItem(
      TaksItem.map((t) => (t.name == Taks.name ? { ...t, done: !t.done } : t))
    );
  };
  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      SetTaksItem(JSON.parse(data));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(TaksItem));
  }, [TaksItem]);

  return (
    <div className="App">
      <TaksCreator createNewTaks={createNewTaks} />
      <TaksTable Tasks={TaksItem} toggleTask={toggleTask} />
      <TaksTable Tasks={TaksItem} toggleTask={toggleTask} showCompeted={true}/>
    </div>
  );
}

export default App;
