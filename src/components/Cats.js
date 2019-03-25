import React, { Component } from 'react';

import PhotoContainer from './PhotoContainer';
import SearchForm from './SearchForm';
import NavLinks from './NavLinks';

export default class Cats extends Component {
    componentDidMount() {
        this.props.handleSearch('cats');
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