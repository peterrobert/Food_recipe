import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const RecipeDisplay = props => {
  const [item] = props.items;

  return (
    <div>
      <div className="jumbotron">
        <div className="container-fluid">
          <div className="row top-bar">
            <div className="col-md-3">
              <img
                src="https://live.staticflickr.com/65535/50930935963_af690b40a0_b.jpg"
                alt="logo"
              />
              <span className="logo">food Recipe</span>
            </div>
            <div className="col-md-9 text-right">
              <Link to="/">Home </Link>

            </div>

          </div>
          <div className="row details_row">
            <div className="col-md-12 text-center">
              <span>{item.strCategory}</span>
              <span>category</span>
              <h1>{item.strMeal}</h1>
              <span>{item.strArea}</span>
              <span> meal</span>
              <div />
              <img src={item.strMealThumb} alt={item.strCategory} />
            </div>
          </div>
        </div>
      </div>
      {/*= = jumbotron end === */}
      <div className="container recipe-section">
        <div className="row">
          <div className="col-md-12">
            <div className="text-left">
              <h1>Recipe</h1>
            </div>
            <div className="recipe">
              <p>{item.strInstructions}</p>
            </div>
            <div className="you_tube_video text-center">
              <button
                className="btn-success btn-sm"
                onClick={() => {
                  window.location.href = item.strYoutube;
                }}
              >
                Watch you tube video
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

RecipeDisplay.propTypes = {
  items: PropTypes.any,
};

export default RecipeDisplay;
