import React from 'react';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import About from './pages/About';
import Store from './pages/Store';
import Gmail from './pages/Gmail';
import Images from './pages/Images';
import {Switch,Route} from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar/>
      
      <Switch>
        <Route path="/"       exact component={Home} >
          <Home words={['Argentina','Argelia','Alemania','Albania','Brasil','Brazo mecanico', 'mecatronica', 'java', 'java script', 'espacio','espacial', 'joaquin','jota','medicina','something','sobrero','wholesome','randson','apple','recact' ]}/>
        </Route>
        <Route path="/about"  exact component={About}/>
        <Route path="/store"  exact component={Store}/>
        <Route path="/gmail"  exact component={Gmail}/>
        <Route path="/images" exact component={Images}/>
      </Switch> 
    </>
  );
}

export default App;

//Switch es un enrutador de react al que le pasamos nuestra ruta(Route)