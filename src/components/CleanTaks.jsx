export const CleanTaks = ({SetshowCompeted, CleanTasks, isChecked}) => {
   const handleDelete = () =>{
      if(window.confirm("¿ Seguro que quieres eliminar las tareas ?")){
        CleanTasks()
      }
    }
  return (
    <div className="clean">
      <div>
      <input 
      checked={isChecked}
      type="checkbox" 
      onChange={(e) => SetshowCompeted(e.target.checked)} />
      <label>Show completed tasks</label>
      </div>
      <button onClick={handleDelete}>Clear</button>
    </div>
  );
};
