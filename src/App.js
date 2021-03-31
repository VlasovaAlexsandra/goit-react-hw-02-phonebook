import React, { Component } from 'react';
import Form from './components/Form';
// import PropTypes from 'prop-types';



class App extends Component {
    state = {
        // contacts: [],
        // name: ''
    }

    formSubmitHandler = data => {
        console.log(data)
    }
    render() {

        return (
            <>
                <Form onSubmit={this.formSubmitHandler} />
            </>

        )
    }
}

export default App;
