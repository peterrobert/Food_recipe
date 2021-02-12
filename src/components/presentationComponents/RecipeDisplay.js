import React from "react";

const RecipeDisplay = (props) => {
  const [item] = props.items;
  console.log(item);
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
          </div>
          <div className="row details_row">
            <div className="col-md-12 text-center">
              <h1>{item.strMeal}</h1>
              <span>{item.strArea}</span>
              <span> meal</span>
              {/* <img src={item.strMealThumb} alt={item.strCategory}/> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDisplay;
