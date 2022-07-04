import { Table } from "./styled";
import PropTypes from "prop-types";

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

TableSpecs.propTypes = {
  specs: PropTypes.array,
};

export default TableSpecs;
