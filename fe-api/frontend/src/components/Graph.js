import React from 'react';

class Graph extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            array_of_words: [],
            array_of_whales: [],
            start_time: 0,
            duration: 0
        }
    }

    // handleChange = (e) => {
    //     const {array_of_words, value} = e.target;
    //     this.setState(prevState => ({
    //         ...prevState,
    //         [array_of_words]: target
    //     }))
    // }

    render() {
        return (
           <h1>graph</h1>
        )
    }

}

export default Graph