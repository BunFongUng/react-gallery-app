import React, {Component} from 'react';

export default class Photo extends Component {
    render() {
        return (
            <li>
                <img src={`https://farm${this.props.farm}.staticflickr.com/${this.props.server}/${this.props.id}_${this.props.secret}.jpg`} alt="" />
            </li>
        );
    }
}