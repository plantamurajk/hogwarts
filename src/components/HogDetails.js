import React from 'react';


export default class HogDetails extends React.Component {

    constructor(){
        super();
      
    }
    render () {
        let { name, specialty, greased, weight } = this.props.hog;
        let highestMedalAchieved = this.props.hog['highest medal achieved'];


        return (
            <div className='ui card eight wide column pigTile' onClick={this.props.flipTile}>
                    <h3>{name}</h3>
                    <ul>Specialty: {specialty}</ul>
                    <ul>Greased: {greased ? 'Yes' : 'No'}</ul>
                    <ul>Weight: {weight}</ul>
                    <ul>Highest Medal Achieved: {highestMedalAchieved}</ul>
                </div>
        )

    }

}

        