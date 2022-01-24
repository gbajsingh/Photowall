import React,{Component} from 'react'
import ReactDom from 'react-dom'
import App from './Components/App'
import './styles/stylesheet.css'
import {BrowserRouter} from 'react-router-dom'
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './redux/reducer'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {database} from './database/config'

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDom.render(<Provider store = {store}><BrowserRouter><App/></BrowserRouter></Provider>, document.getElementById('root'))
// Provider passes store as a prop to App