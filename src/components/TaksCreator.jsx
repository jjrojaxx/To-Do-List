import { useState } from "react";
export const TaksCreator = (props) => {
  const [newTaks, setNewTaks] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createNewTaks(newTaks);
    setNewTaks("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTaks}
        placeholder="Enter new taks"
        onChange={(e) => setNewTaks(e.target.value)}
      />
    </form>
  );
};
