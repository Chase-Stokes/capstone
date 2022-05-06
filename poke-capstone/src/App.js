import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Splash from "./Pages/Splash";

function App() {

  return ( 
    <Router>
      <Container>
        <Splash/>
        {/* <Routes>
          <Route exact path='/' component={Splash}/>  
        </Routes> */}
      </Container>
    </Router>    
  );
}

export default App;
