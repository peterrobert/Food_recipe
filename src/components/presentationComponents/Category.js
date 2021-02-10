import React from "react";

const Category = (props) => {
  return (
    <div className="col-md-3 food_types">
      <div className="card">
        <img className="card-img-top" src={props.img} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <a href="#" className="btn btn-success btn-sm">
            Foods in this category
          </a>
        </div>
      </div>
    </div>
  );
};

export default Category;
