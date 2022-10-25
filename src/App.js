import "./App.css";
import { useState, useEffect } from "react";
import { TaksCreator } from "./components/TaksCreator";
import { TaksTable } from "./components/TaksTable";
import { CleanTaks } from "./components/CleanTaks";
function App() {
  const [showCompeted, SetshowCompeted] = useState(false);
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
      TaksItem.map((t) => (t.name === Taks.name ? { ...t, done: !t.done } : t))
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

  const CleanTasks = () => {
    //Eliminando las Tareas 🤮
    SetTaksItem(TaksItem.filter((taks) => !taks.done));
    SetshowCompeted(false);
  };

  return (
    <div className="App">
      <div className="contenedor">
        <h1>📚Things to do📚</h1>
        <TaksCreator createNewTaks={createNewTaks} />
        <TaksTable Tasks={TaksItem} toggleTask={toggleTask} />
        <CleanTaks
          isChecked={showCompeted}
          SetshowCompeted={(checked) => SetshowCompeted(checked)}
          CleanTasks={CleanTasks}
        />
        {showCompeted === true && (
          <TaksTable
            Tasks={TaksItem}
            toggleTask={toggleTask}
            showCompeted={true}
          />
        )}
      </div>
    </div>
  );
}

export default App;
