import React from 'react'
import ReactDOM from 'react-dom'
import './sass/main.scss'
import Person from './components/Person'
import ExampleReactComponent from './components/ExampleReactComponent'

const person1 = new Person("Stephen")
ReactDOM.render(<ExampleReactComponent />, document.querySelector("#render-react-example-here"))