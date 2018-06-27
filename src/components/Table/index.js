import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import 'line-awesome/dist/css/line-awesome.css';
import './Table.css';
import Row from './Row';
import Switch from '../Switch';
import Checkbox from '../Checkbox';
import Select from '../Select';

const Table = ({
  data: { list, categories },
  displayCount,
}) => {
  const displayedList = list.filter((item, i) => i < displayCount);

  return (
    <div className="table">
      <div className="table-header">
        <div className="table-title">
          Items Table
        </div>
        <button type="button">
          <i className="la la-gear" />
          {' '}
          Table Customize
        </button>
      </div>
      <div className="table-body">
        <Switch
          options={[
            'No img',
            '1st img',
            'All img',
          ]}
        />
        <div className="table-wrapper">
          <div className="table-left">
            <table>
              <thead>
                <tr>
                  <td>
                    <Checkbox />
                    Actions
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td />
                </tr>
                {displayedList.map(row => (
                  <tr key={row.id}>
                    <td>
                      <Checkbox id={`checkbox-${row.id}`} />
                      <i className="la la-ellipsis-h" />
                      <i className="la la-map-pin" />
                      <i className="la la-comment" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="table-right">
            <table>
              <thead>
                <Row row={categories} />
              </thead>
              <tbody>
                <Row row={categories}>
                  <input className="table-search" placeholder="Search" />
                </Row>
                {displayedList.map(row => (
                  <Row key={row.id} row={row} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <Select value={displayCount} count={list.length} />
      </div>
    </div>
  );
};

const EntryType = PropTypes.objectOf(PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.arrayOf(PropTypes.string),
]));
Table.propTypes = {
  data: PropTypes.shape({
    categories: PropTypes.objectOf(PropTypes.string),
    list: PropTypes.arrayOf(EntryType),
  }),
  displayCount: PropTypes.number.isRequired,
};
Table.defaultProps = {
  data: {
    categories: {},
    list: [],
  },
};

const mapStateToProps = ({ tableParams: { displayCount } }) => ({
  displayCount,
});

export default connect(mapStateToProps, null)(Table);
