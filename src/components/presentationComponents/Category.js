import React from "react";
import { useHistory } from "react-router-dom";

const Category = (props) => {
  const history = useHistory();

  const handleClick = () => {
    let itemRoute = props.title
     history.push(`/groups/${itemRoute}`)
  }
  return (
    <div className="col-md-3 food_types">
      <div className="card">
        <img className="card-img-top" src={props.img} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <button className="btn btn-success btn-sm" onClick = {handleClick}>
          Foods in this category
          </button>
        </div>
      </div>
    </div>
  );
};

export default Category;
