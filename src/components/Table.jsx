import styling from "./styling.css";
import satData from "./satData";

  const Table = ({sat}) => {
    return (
    <>

    <table>
      <thead>
        <tr>

          <th scope="col">Name</th>
          <th scope="col">Type of Satellite</th>
          <th scope="col">Launch Date</th>
          <th scope="col">Status</th>

        </tr>
      </thead>
      <tbody>

        {sat.map((data) => (
          <tr key={data.id}>
            <td>{data.name}</td>
            <td>{data.type}</td>
            <td>{data.launchDate}</td>
            <td>{data.operational === true ? "Active" : "Inactive"}</td>

          </tr>
        ))};

      </tbody>
    </table>
    
   </>
);
};

export default Table;