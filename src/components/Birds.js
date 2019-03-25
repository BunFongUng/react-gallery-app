import React, {Component} from 'react';

import PhotoContainer from './PhotoContainer';
import SearchForm from './SearchForm';
import NavLinks from './NavLinks';

export default class Brids extends Component {
    componentDidMount() {
        console.log('Hello');
        this.props.handleSearch('birds');
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