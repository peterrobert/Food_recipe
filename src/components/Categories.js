import React, { Component } from "react";
import { connect } from "react-redux";
import { dataFetch } from "../redux/Actions/categoriesAction";
import Category from "./presentationComponents/Category";

class Categories extends Component {
  componentDidMount() {
    this.props.fetchRequest();
  }

  handleDisplay = () => {
    const { data } = this.props.categories;
    let displayCategory = data.categories.map((item) => {
      return (
        <Category
          key={item.idCategory}
          title={item.strCategory}
          img={item.strCategoryThumb}
          description={item.strCategoryDescription}
        />
      );
    });

    return displayCategory;
  };

  render() {
    const { loading } = this.props.categories;
    let spinners = (
      <div className="spinner-border text-success" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );

    return (
      <div className="container">
        <div className="row">
          {loading === true ? spinners : this.handleDisplay()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRequest: () => dispatch(dataFetch()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
