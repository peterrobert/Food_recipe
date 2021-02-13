import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dataRecipe } from '../redux/Actions/varietyAction';
import RecipeDisplay from './presentationComponents/RecipeDisplay';

class Recipe extends Component {
  componentDidMount() {
    const {
      match: { params },
    } = this.props;

    this.props.fetchRecipe(params.name);
  }

  render() {
    const { loading } = this.props.recipes.recipe;
    const spinners = (
      <div className="spinner-border text-success" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );

    return (
      <>
        {loading === true ? (
          spinners
        ) : (
          <RecipeDisplay items={this.props.recipes.recipe.data.meals} />
        )}
      </>
    );
  }
}

Recipe.propTypes = {
  fetchRecipe: PropTypes.func,
  recipes: PropTypes.shape({
    recipe: PropTypes.shape({
      data: PropTypes.shape({
        meals: PropTypes.any,
      }),
      loading: PropTypes.bool,
    }),
  }),
};

const mapStateToProps = state => ({
  recipes: state,
});

const mapDispatchToProps = dispatch => ({
  fetchRecipe: title => dispatch(dataRecipe(title)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
