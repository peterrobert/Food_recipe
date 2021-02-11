import React, { Component } from 'react';

class Group extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        const { match: { params } } = this.props;
        console.log(params.title)

    }

    render() {
        return (
            <div>
               This is the variety page
            </div>
        );
    }
}



export default Group;