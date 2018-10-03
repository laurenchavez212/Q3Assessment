import React, { Component } from 'react';
import { Input } from 'reactstrap'

class SearchBar extends Component {
    
    searchCameras() {
        console.log('searchCameras: ', this.state.term);
    }

    render() {
        return <div>
            <Input value={this.props.term} type="text" onChange={event => this.props.updateTerm(event.target.value)} placeholder="Filter for what you're looking for here..." autoFocus />
          </div>;
    }
}

export default SearchBar;