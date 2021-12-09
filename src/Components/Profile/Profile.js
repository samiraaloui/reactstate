import React,{Component} from 'react';

class Profile extends Component{
    constructor(props){
      console.log(props)
        super(props);
        this.state={ 
          interval:null,
            counter:0,
        };
    }
componentDidMount(){
    this.setState({
      intervall : setInterval(()=>{
        this.setState({
          counter: this.state.counter +1
        })
      },1000)
    })
    }

            componentDidUpdate(){
            };
            componentWillUnmount(){
             clearInterval(this.state.interval)
            };
            
           
        render(){
        return (
          <div>
            {this.props.children}
            <h1>{this.props.FullName}</h1>
            <h1>{this.props.Age}</h1>
            <h1>{this.props.profisson}</h1> 
            <h1>{this.props.bio}</h1>
            <h2>{this.state.counter} </h2>


            
          </div>
        );
      }
}

export default Profile
