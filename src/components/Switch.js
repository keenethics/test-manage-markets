import React from 'react';
import { connect } from 'react-redux';
import { switchImages } from '../actions';

const Switch = ({ options, switchChecked = 0, switchImages }) => (
  <div className="switch-buttons">
    {options.map((item, i) => (
      <button
        type="button"
        key={i}
        className={i === switchChecked ? 'switch-checked' : ''}
        onClick={switchImages(i)}
      >
        {item}
      </button>
    ))}
  </div>
);

const mapStateToProps = ({ tableParams: { switchChecked } }) => ({
  switchChecked,
});

const mapDispatchToProps = dispatch => ({
  switchImages: checked => () => dispatch(switchImages(checked)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Switch);
