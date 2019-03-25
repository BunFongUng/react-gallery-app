import React, {Component} from 'react';

import Photo from './Photo';

export default class PhotoList extends Component {
    render() {
        return (
            <div className="photo-container">
                <h2>Results</h2>
                <ul>
                    
                    { this.props.data.map( photo => 
                        <Photo
                            key={photo.id}
                            farm={photo.farm}
                            server={photo.server}
                            id={photo.id}
                            secret={photo.secret}
                        />
                    )}
                </ul>
            </div>
        );
    }
}