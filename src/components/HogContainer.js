import React from 'react';
import HogTile from './HogTile';
import hogs from '../porkers_data';

export default class HogContainer extends React.Component {

    constructor(props){
        super(props);
        
    }

    // flipTile = (event) => {
    //     let targetHog = event.target.id
    //     console.log(targetHog)
    //     this.setState(previousState => {
    //         previousState.hogs.map(hog => {
    //             if (hog.name == targetHog){
    //                 console.log(hog.name)
    //                 return {...hog, detailsView: !hog.detailsView}
    //             } else {
    //                 return hog
    //             }
    //         })
    //     })
    // }


    createHogTiles = () => {
       return this.props.hogs.map((hog, i) => {
            return <HogTile hog={hog} key={i}/>
        })
    }




    render () {
      
        return (
            <div className='fourteen wide column centered'>{this.createHogTiles()}</div>
        )

    }

}