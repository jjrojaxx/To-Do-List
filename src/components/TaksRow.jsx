export const TaksRow = ({ taks, toggleTask }) => {
  return (
    <tr key={taks.name}>
      <td>
        <input
          type="checkbox"
          checked={taks.done}
          onChange={() => {
            toggleTask(taks);
          }}
        />
        {taks.name}
      </td>
    </tr>
  );
};
