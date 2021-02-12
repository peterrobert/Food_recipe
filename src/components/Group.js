import React, { Component } from "react";
import { connect } from "react-redux";
import { dataGroup } from "../redux/Actions/groupAction";
import Variety from "./presentationComponents/Variety";

class Group extends Component {
  componentDidMount() {
    const {
      match: { params },
    } = this.props;
    let titl = params.title;
    this.props.fetchRequestGroups(titl);
  }

  handleDisplay = () => {
    const { data } = this.props.groups.grp;
    const { params } = this.props.match;
    let displayCategory = data.meals.map((item) => {
      return (
        <Variety
          key={item.idMeal}
          title={item.strMeal}
          img={item.strMealThumb}
          urlParams={params}
        />
      );
    });

    return displayCategory;
  };

  render() {
    const { loading } = this.props.groups.grp;
    let spinners = (
      <div className="spinner-border text-success" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
    return (
      <div className="container">
        <div className="row top-bar">
          <div className="col-md-3">
            <img
              src="https://live.staticflickr.com/65535/50930935963_af690b40a0_b.jpg"
              alt="logo"
            />
            <span className="logo">food Recipe</span>
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
    groups: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRequestGroups: (title) => dispatch(dataGroup(title)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Group);