import React, {
    Component
} from 'react';

import PhotoList from './PhotoList';
import NotFound from './NotFound';

export default class PhotoContainer extends Component {
    render() {
        return (
            <div className="photo-container">
                { this.props.data.length > 0 ? <PhotoList data={this.props.data}/> : <NotFound /> }
            </div>
        );
    }
}