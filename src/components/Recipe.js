import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dataRecipe } from '../redux/Actions/varietyAction';


class Recipe extends Component {

    componentDidMount() {
        const {
            match: { params },
          } = this.props;

         this.props.fetchRecipe(params.name)
    }

    render() {
        return (
            <div>

                <h1>this is the component</h1>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      recipes: state,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      fetchRecipe: (title) => dispatch(dataRecipe(title)),
    };
  };

  
export default connect(mapStateToProps, mapDispatchToProps) (Recipe);