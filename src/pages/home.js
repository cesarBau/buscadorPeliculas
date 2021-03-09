import React, { Component } from 'react'
import {Title} from '../components/title'
import {SearchForm} from '../components/searchform'
import {MoviesList} from '../components/moviesList'

export class Home extends Component{

    state= {
        results: [],
        useSearch: false
    }

    _handleResults = (results) => {
        this.setState({
            results,
            useSearch: true
        })
    }

    _renderResults() {
        return typeof this.state.results === 'undefined'
            ? <p> Sin Resultados</p>
            : <MoviesList movies={this.state.results}/>
    }

    render(){
        return(
            <div>
                <Title>Buscador de Peliculas</Title>
                    <div className='SearchForm-wrapper'>
                        <SearchForm onResults={this._handleResults} />
                    </div>
                    {this.state.useSearch
                    ? this._renderResults()
                    : <small>Listo para buscar</small>
                    }
            </div>
        )
    }
}