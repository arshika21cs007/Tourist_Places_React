import React from 'react'; //imports the React module from the 'react' package.
 import ReactDOM from 'react-dom'; //ReactDOM is used to render React components into the DOM
import App from './App'; //App component is the root component of a React application, containing the entire application structure.

ReactDOM.render( //starts the process of rendering React components into the DOM.
//tool for highlighting potential problems in an application.
    <React.StrictMode> 
    {/* App component represents the entire application and contains all the other components. */}
    <App />
  </React.StrictMode>, //closes the <React.StrictMode>
  document.getElementById('root') //This specifies the target DOM element where the React application will be rendered.
);