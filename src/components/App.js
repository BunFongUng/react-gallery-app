import React, {Component} from 'react';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';

// import components
import {api_key, api_url} from '../config';
import Home from './Home';
import Cats from './Cats';
import Dogs from './Dogs';
import Birds from './Birds';
import NotFound from './NotFound';


export default class App extends Component {

    state = {
        photos: []
    };

    performSearch = (query) => {
        let limit = 30;

        axios.get(`${api_url}&api_key=${api_key}&text=${query}&per_page=${limit}=&format=json&nojsoncallback=1`)
            .then(response => {
                const photos = response.data.photos.photo;
                this.setState({
                    photos
                });
                console.log(this.state.photos);
            }).catch(error => {
                console.log('error of fetching data from api: ', error);
            });
    }
    render() {
        return (
            <div className="container">
                <Switch>
                    <Route exact path='/' render={ () => <Home data={this.state.photos} handleSearch={this.performSearch} /> } />
                    <Route path='/cats' render={ (props) => <Cats data={this.state.photos} handleSearch={this.performSearch} /> } />
                    <Route path='/dogs' render={ (props) => <Dogs data={this.state.photos} handleSearch={this.performSearch} /> } />
                    <Route path='/birds' render={ (props) => <Birds data={this.state.photos} handleSearch={this.performSearch} /> } />
                    <Route component={NotFound} />
                </Switch>
            </div>
        );
    }
}