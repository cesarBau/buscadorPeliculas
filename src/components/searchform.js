import React, { Component } from 'react'
import {REACT_APP_API_KEY} from './const'

const API_KEY=REACT_APP_API_KEY

export class SearchForm extends Component {
    
    state={
        inputMovie: ''
    }

    _handleChange = (e) => {
        this.setState({inputMovie: e.target.value})
    }

    _handleSubmit = (e) => {
        e.preventDefault()
        const {inputMovie} = this.state
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
            .then(res => res.json())
            .then(data => {
                const {Search = [], totalResults = "0"} = data
                console.log({Search,totalResults})
                this.props.onResults(Search)
            })
    }

    render(){
        return(
            <form onSubmit={this._handleSubmit}>
                <div className="field has-addons">
                <div className="control">
                    <input 
                    className="input" 
                    type="text" 
                    placeholder="Busca tu pelicula!"
                    onChange={this._handleChange}/>
                </div>
                <div className="control">
                    <button className="button is-info">
                    Search
                    </button>
                </div>
            </div>
            </form>
        )
    }
    
}