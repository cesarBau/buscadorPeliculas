import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {REACT_APP_API_KEY} from '../components/const'
import {ButtonBack} from '../components/buttonBack'

const API_KEY=REACT_APP_API_KEY

export class Details extends Component {

    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    }

    state= {
        movie: {}
    }

    componentDidMount(){
        const {id} = this.props.match.params
        this._fetchApi({id})
    }

    _fetchApi({id}){
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
        .then(res => res.json())
        .then(movie => {
            console.log({movie})
            this.setState({
                movie
            })
        })
    }

    _GoBack(){
        window.history.back()
    }

    render(){
        const {Title, Poster, Actors, Metascore, Plot} = this.state.movie
        return(
            <div>
                <ButtonBack/>
                <h1>{Title}</h1>
                <img src={Poster}/>
                <h3>Actores: {Actors}</h3>
                <span>{Metascore}</span>
                <p>{Plot}</p>
            </div>
        )
    }
}