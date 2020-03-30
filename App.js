import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {

    state = {images: []};

    onSearchSubmit = async (term) => {
        const response = await axios.get("https://api.unsplash.com/photos/",{
            headers: {
                params: {'query' : term},
                Authorization: 'Client-ID L2Hqc5CdfTtywwxoKNiuOQ1TFgcZPwm6NjmgvIMVrFU'
            }
        })

        this.setState({images : response.data.results});





    }
    render = () => {
        return(
            <div className = "ui container" style = {{marginTop: '10px'}}>
                <SearchBar onSubmit = {this.onSearchSubmit}>
                    Found: {this.state.images.length} images
                </SearchBar>
            </div>
        )
    };
}

export default App;