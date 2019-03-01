import React from 'react';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: '',
            currentlyDisplayed: this.props.users
        };

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
    }

    render() {}
}

export default Search;