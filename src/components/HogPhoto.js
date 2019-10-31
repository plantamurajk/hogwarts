import React from 'react';
import augustus_gloop from '../hog-imgs/augustus_gloop.jpg'
import bay_of_pigs from '../hog-imgs/bay_of_pigs.jpg'
import cherub from '../hog-imgs/cherub.jpg'
import galaxy_note from '../hog-imgs/galaxy_note.jpg'
import leggo_my_eggo from '../hog-imgs/leggo_my_eggo.jpg'
import mudblood from '../hog-imgs/mudblood.jpg'
import piggy_smalls from '../hog-imgs/piggy_smalls.jpg'
import porkchop from '../hog-imgs/porkchop.jpg'
import rainbowdash from '../hog-imgs/rainbowdash.jpg'
import sobriety from '../hog-imgs/sobriety.jpg'
import the_prosciutto_concern from '../hog-imgs/the_prosciutto_concern.jpg'
import trouble from '../hog-imgs/trouble.jpg'
import truffleshuffle from '../hog-imgs/truffleshuffle.jpg'


export default class HogPhoto extends React.Component {

    constructor(){
        super();
    }


    getImage = () => {
        switch (this.props.hog.name){
            case 'Mudblood':
                 return mudblood
            case 'Porkchop':
                return porkchop;
            case 'Cherub':
                 return cherub;
            case 'Piggy smalls':
                  return piggy_smalls;
            case 'Trouble':
                 return trouble
            case 'Sobriety':
                return sobriety;
            case 'Rainbowdash':
                return rainbowdash;
            case 'TruffleShuffle':
             return truffleshuffle;
            case 'Bay of Pigs':
                 return bay_of_pigs;
            case 'The Prosciutto Concern':
                 return the_prosciutto_concern;
            case 'Galaxy Note':
                 return galaxy_note;
            case 'Leggo My Eggo':
                  return leggo_my_eggo;
            case 'Augustus Gloop':
                 return augustus_gloop;
            default:
                null
        }
    }
   
    render () {
        let { name } = this.props.hog;
 


        return (
            <div className='image' onClick={this.props.flipTile}>
                 <img src={this.getImage()}/>
                <h3>{name}</h3>
            </div>
        )
    }

}
