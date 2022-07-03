import { Table } from "./styled";

const TableSpecs = ({ specs }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Spec</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {specs.map((spec) => (
          <tr key={spec.spec_name}>
            <td>{spec.spec_name}</td>
            <td>{spec.spec_value}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableSpecs;
