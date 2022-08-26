import Menu from './components/menu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Welcome from './components/Welcome';
import Naruto from './components/naruto';
import Sasuke from './components/sasuke';
import { Component } from 'react';
import Todo from './components/Todo';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      naruto : 100,
      sasuke : 100
    }
  }

  reduceLife=(param)=>{
    if(param === 'Naruto'){
      this.setState({
        sasuke: this.state.sasuke - 10
      })
    }else{
      this.setState({
        naruto: this.state.naruto - 10
      })
    }
  }
  render(){
    return (
      <div className="container text-center">
        <BrowserRouter>
          <Menu></Menu>
          <Routes>
            <Route path="/" element={<Welcome />}/>
            <Route path="/naruto" element={
              <div className="row">
                <h1 className='mt-3'>Naruto <span className='text-danger'>Vs</span>  Sasuke</h1>
                <hr />
                <div className="row">
                  <Naruto name="Naruto" life={this.state.naruto} reduce={this.reduceLife}/>
                  <Sasuke name="Sasuke" life={this.state.sasuke} reduce={this.reduceLife}/>
                </div>
               </div>
              }/>
            <Route path="/todo" element={<Todo />}/>
          </Routes>
        </BrowserRouter>
        
      </div>
    );
  }
 
}

export default App;
