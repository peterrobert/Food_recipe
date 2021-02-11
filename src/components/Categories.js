import React, { Component } from "react";
import { connect } from "react-redux";
import { dataFetch } from "../redux/Actions/categoriesAction";
import Category from "./presentationComponents/Category";

class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: "",
    };
  }

  componentDidMount() {
    this.props.fetchRequest();
  }

  handleChange = (e) => {
    const { filterCategory } = e.target.value;
    this.setState({
      filter: filterCategory,
    });
  };

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

  displayList = () => {
    const { data } = this.props.categories;

    let categoryList = data.categories.map((item) => {
      return <option key={item.idCategory}>{item.strCategory}</option>;
    });

    return categoryList;
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
        <div className="row top-bar">
          <div className="col-md-3">
          <img src="https://live.staticflickr.com/65535/50930935963_af690b40a0_b.jpg" alt="logo" />
          <span className='logo'>food Recipe</span>
          </div>
          <div className="col-md-9">
            <select name="filterCategory" onChange={this.handleChange}>
              {loading === true ? 'loading...' : this.displayList()}
            </select>
          </div>
        </div>

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
