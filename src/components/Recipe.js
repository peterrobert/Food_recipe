import React, { Component } from 'react';


class Recipe extends Component {

    componentDidMount() {
        const {
            match: { params },
          } = this.props;

          console.log(params)
    }

    render() {
        return (
            <div>

                <h1>this is the component</h1>

            </div>
        );
    }
}

Recipe.propTypes = {

};

export default Recipe;