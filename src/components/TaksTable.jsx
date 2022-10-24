export const TaksTable = ({Tasks}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Taks</th>
        </tr>
      </thead>
      <tbody>
        {Tasks.map((taks) => (
          <tr key={taks.name}>
            <input type="checkbox" checked={taks.done}/>
            <td>{taks.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
