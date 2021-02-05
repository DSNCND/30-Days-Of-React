import React from 'react'
import ReactDOM from 'react-dom'
import logo from './images/dogTribal.jpg'
import technologies from './images/frontend_technologies.png'

const user =
(
  <div>
    <img src={logo} alt='logo'></img>
  </div>
)
const tecnologias =
(
  <img src={technologies}></img>
)

//styles
const headerStyles =
{
  backgroundColor: '#61DBFB',
  fontFamily: 'Helvetica Neue',
  padding: 25,
  lineHeight: 1.5
}

const welcome = 'Bienvenido a 30 dias de React'
const title = 'Arrancando con React'
const subtitle = 'Libreria JavaScript'
const author =
{
  firstName: 'Edson',
  lastName: 'Condori'
}

const date = 'Febrero 5, 2021'


/*
const jsxElement = <h1>Este es un elemento JSX </h1>
const title = <h2>Arrancando con React</h2>
*/

//JSX element, header
const header = 
(
  <header style={headerStyles}>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Instructor: {author.firstName} {author.lastName}
      </p>
      <small>Fecha: {date}</small>
    </div>  
  </header>
)

//JSX element, main
const mainStyles =
{
  backgroundColor: '#F3F0F5',
}

const numOne = 3
const numTwo = 2

const result =
(
  <p>
    {numOne} + {numTwo} = {numOne+numTwo}
  </p>
)

const yearBorn = 1820
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn
const personAge =
(
  <div>
    
  <p>
    {' '}
    {author.firstName} {author.lastName} is {age} years old
    {user}

  </p>
  </div>
)

const techs = ['HTML','CSS','JavaScript']
const techsFormatted = techs.map((tech)=><li>{tech}</li>)


const main =
(
  <main style={mainStyles}>
    <div className='main-wrapper'>
      <p>Prerequisitos para comenzar{' '} con<br></br> 
        <strong>
          <em>react.js:</em>
        </strong>
      </p>
      <ul>
        {techsFormatted}
        {tecnologias}
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        {result}{personAge}
      </ul>
    </div>
  </main>
)

//section suscripcion
const registro = 'registrate con tu email y recibi actualizaciones y noticias'

const sectionStyles =
{
  backgroundColor: '#f9f7f7',
  height: '50vh',
  
  
}
const formStyles =
{
  position: 'relative',
  backgroundColor: '#c2e6f4',
  height: '90%',
  width:'auto',
  margin:'20px',
  marginTop: '15px',
  top: '20px',
  textAlign:'center',
  borderRadius:'20px'
  
}
const centrado =
{
  width: '100%',
  height: '100%',
  padding: '20px',
  textAlign: 'center',

}

const texto =
{
  fontSize:'11px',
  color:'gray',
  paddingLeft:'20px',
  borderRadius: '7px',
  border: 'none',
  height: '35px',
  fontFamily:'verdana',
  marginTop:'10px'
}

const boton =
{
  fontSize:'11px',
  textAlign:'center',
  border:'none',
  borderRadius:'7px',
  color:'white',
  backgroundColor:'#f37474',
  width:'300px',
  height:'35px',
  marginTop:'35px',
  fontFamily:'verdana',
}

const section =
(
  <section style={sectionStyles}>
    <form style={formStyles}>
      <div style={centrado}>
      <h1>SUSCRIBITE</h1>
      <p>{registro}</p>
      <input name='input' style={texto} type='text' placeholder='First name'></input>    <input name='input' style={texto} type='text' placeholder='Last name'></input>    <input name='input' style={texto} type='email' placeholder='Email'></input>
      <br></br>
      <input type='button' style={boton} name='button' value='Subscribe'></input>
      </div>
    </form>
  </section>
)


//JSX element, footer
const footerStyles=
{
  backgroundColor: '#61DBFB'
}
const copyright = 'Copyright 2020'

const footer =
(
  <footer style={footerStyles}>
    <div className='footer-wrapper'>
      <p>{copyright}</p>
    </div>
  </footer>
)


//styles body



const app =
(
  <div className='app'>
    {header}
    {main}
    {section}
    {footer}
  </div>
)

//const rootElement = document.getElementById('root')
const rootElement = document.querySelector('#root')

ReactDOM.render(app,rootElement)


/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/