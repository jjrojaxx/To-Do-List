import { TaksRow } from "./TaksRow";
export const TaksTable = ({ Tasks, toggleTask, showCompeted = false }) => {
  const TaksTablesRows = (doneValue) => {
    return Tasks
    .filter(taks => taks.done === doneValue)
    .map((taks) => (
      <TaksRow taks={taks} key={taks.name} toggleTask={toggleTask} />
    ));
  };
  return (
    <table>
      <thead>
        <tr>
          <th>Taks</th>
        </tr>
      </thead>
      <tbody>{TaksTablesRows(showCompeted)}</tbody>
    </table>
  );
};
