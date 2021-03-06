/* eslint-disable max-len, jsx-a11y/img-redundant-alt
, react/require-default-props, react/destructuring-assignment, react/button-has-type, react/forbid-prop-types */
import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';

const Variety = props => {
  const history = useHistory();
  const handleClick = () => {
    const groupRoute = props.urlParams.title;
    const recipeRoute = props.title;
    history.push(`/groups/${groupRoute}/${recipeRoute}`);
  };

  return (
    <div className="col-md-3 food_types">
      <div className="card">
        <img className="card-img-top" src={props.img} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <button className="btn btn-success btn-sm" onClick={handleClick}>
            View Recipe
          </button>
        </div>
      </div>
    </div>
  );
};

Variety.propTypes = {
  img: PropTypes.any,
  title: PropTypes.string,
  urlParams: PropTypes.shape({
    title: PropTypes.string,
  }),
};

export default Variety;
