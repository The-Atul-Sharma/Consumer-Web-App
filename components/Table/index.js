import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default function Table(props) {
  const { tableHeader, tableData } = props;

  return (
    <table className="table">
      <thead>
        <tr>
          {
            tableHeader.map(header => (<th key={header.key}>{header.displayName}</th>))
          }
        </tr>
      </thead>
      <tbody>
        {
          tableData.map(column => props.renderTableColumn(column))
        }
      </tbody>
    </table>
  );
}

Table.propTypes = {
  tableHeader: PropTypes.array,
  tableData: PropTypes.array,
  renderTableColumn: PropTypes.func,
};
