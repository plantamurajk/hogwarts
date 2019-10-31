import React from 'react';
import HogPhoto from './HogPhoto';
import HogDetails from './HogDetails';


export default class HogTile extends React.Component {

    constructor(){
        super();

        this.state = {
            detailsView: false
        }
    
    }


    flipTile = () => {
        this.setState({ detailsView: !this.state.detailsView })
    }


    render () {


        if (!this.state.detailsView){
            return (
                <HogPhoto hog={this.props.hog} flipTile={this.flipTile}/>
        )} else {
            return (
                <HogDetails hog={this.props.hog} flipTile={this.flipTile}/>
            )
        }

    }

}