import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import bulma from 'bulma/css/bulma.css'
import {Details} from '../pages/details'
import {Home} from '../pages/home'
import {NotFound} from '../pages/notfound'

export class Control extends Component {

    render(){
        return(
            <div className="App">
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/detail/:id' component={Details} />
                    <Route component={NotFound}/>
                </Switch>
            </div>
        )
    }
    
}