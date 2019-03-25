import React, { Component } from 'react';

import PhotoContainer from './PhotoContainer';
import SearchForm from './SearchForm';
import NavLinks from './NavLinks';


export default class Dogs extends Component {
    componentDidMount() {
        this.props.handleSearch('dogs');
    }

    render() {
        return (
            <div>
                <SearchForm handleSearch={this.props.handleSearch}/>
                <NavLinks />
                <PhotoContainer data={this.props.data} />
            </div>
        );
    }
}