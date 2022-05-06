import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Splash from "./Pages/Splash";
import PokeDetails from './Pages/PokeDetails';

function App() {

  return ( 
    <Router>
      <Container>
        {/* <Splash/> */}
        <Switch>
          <Route path='/' element={<Splash/>} exact/>
          <Route path='/pokemon/:id' element={<PokeDetails/>} exact/>
        </Switch>
      </Container>
    </Router>    
  );
}

export default App;
