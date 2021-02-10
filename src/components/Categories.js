import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dataFetch } from '../redux/Actions/categoriesAction';

class Categories extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {

        this.props.fetchRequest();

    }

    render() {
       console.log(this.props)
        return (
            <div>
             hey this is the categories page
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        categories: state
    }
}

const mapDispatchToProps = (dispatch) => {
   return{
       fetchRequest: () => (dispatch(dataFetch()))
   }
}



export default connect(mapStateToProps, mapDispatchToProps)(Categories);