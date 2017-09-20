import React, {Component} from 'react';
import {getPins} from '../../services/axiosCalls.js';


export default class Pins extends Component{

componentDidMount(){
    getPins().then( res => {
        this.SetState({
            pins : res
        })
    })
}
        render(){
            return(
                <div>
                    
                </div>
            )
        }
}