import React , { Component } from 'react';
 import Profile from './Components/Profile/Profile';
 import './App.css'
 import myPhoto from './image.jpg';
 class App extends Component{
  constructor(){
    super()
    this.state={
    inVisible :false,
  };
  } 
    toggleVisibility=() =>{
      this.setState({
      inVisible:!this.state.inVisible,
     })
    }
       render(){
         return(
               <div className="App">
               <button onClick={this.toggleVisibility}> ClickMe </button> 
               {this.state.inVisible ? ( <Profile
                   FullName="  Samira Aloui"
                   Age="20"
                   profisson="  GoMyCode-Student"
                   bio=" 💫 Full-Stack Javascript  💫 ">
                     <img src={myPhoto} alt ="myPhoto" />
               </Profile>):null}
               
                </div>
         );
         }
    } 
 
 export default App