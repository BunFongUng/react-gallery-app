import React, {Component} from 'react';

import SearchForm from './SearchForm';
import NavLinks from './NavLinks';
import PhotoContainer from './PhotoContainer';

export default class Home extends Component {
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