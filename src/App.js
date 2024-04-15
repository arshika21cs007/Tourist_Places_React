import './App.css';
//importing all the components to the app
import Body from './components/Body';
import Header from './components/Header';
import data from './components/data';
import React  from 'react';

function App() {
  return (
   <div>
    {/* Rendering the Components */}
     <Header/>
     {/* It passes a prop named veri to the Body component, with the value of the data imported.
This allows the Body component to receive and use the data passed down as props. */}
     <Body veri = {data}/>
   </div>
   
  );
}

export default App;