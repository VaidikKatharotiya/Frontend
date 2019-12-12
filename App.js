import React, { Component } from 'react';
import Dashbord from'./components/Dashboard'
import Navbar from'./components/Navbar'
import Footer from'./components/Footer'
class App extends Component
{
  render()
  {
    return(
      <div>
        <Navbar></Navbar>
        <Dashbord></Dashbord>
        <Footer></Footer>
      
      </div>
    );
  }
}
// import { format } from 'path';

export default App;

