import React from 'react'
import {Link} from 'react-router-dom'

export const ButtonBack = () => {
    return (<Link 
    className='button is-info'
    to='/'>
        Regresar
    </Link>)
}