/* eslint-disable max-len, jsx-a11y/img-redundant-alt
, react/require-default-props, react/destructuring-assignment, react/button-has-type, react/forbid-prop-types */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { dataGroup } from '../../redux/Actions/groupAction';
import Variety from '../presentationComponents/Variety';

class Group extends Component {
  componentDidMount() {
    const {
      match: { params },
    } = this.props;
    const titl = params.title;
    this.props.fetchRequestGroups(titl);
  }

  handleDisplay = () => {
    const { data } = this.props.groups.grp;
    const { params } = this.props.match;
    const displayCategory = data.meals.map(item => (
      <Variety
        key={item.idMeal}
        title={item.strMeal}
        img={item.strMealThumb}
        urlParams={params}
      />
    ));

    return displayCategory;
  };

  displayList = () => {};

  render() {
    const { loading } = this.props.groups.grp;
    const spinners = (
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
          <div className="col-md-9 text-right">
            <Link to="/">Home </Link>
          </div>
        </div>
        <div className="row">
          {loading === true ? spinners : this.handleDisplay()}
        </div>
      </div>
    );
  }
}

Group.propTypes = {
  groups: PropTypes.any,
  fetchRequestGroups: PropTypes.func,
  loading: PropTypes.bool,
  match: PropTypes.shape({
    params: PropTypes.any,
  }),
};

const mapStateToProps = state => ({
  groups: state,
});

const mapDispatchToProps = dispatch => ({
  fetchRequestGroups: title => dispatch(dataGroup(title)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Group);
