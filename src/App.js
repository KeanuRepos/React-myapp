import React,{Component} from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';
//function App()
class App extends Component {
  state = {
    ninjas:[
      {name: "Keanu" ,age: "19",belt:'black',id:1},
      {name: "Yoshi" ,age: "21",belt:'green',id:2},
      {name: "Crystal" ,age: "28",belt:'pink',id:3}
    ]
  }
  addNinja = (ninja) => {
    console.log(ninja);

    // ninja.id = Math.random();
    // let ninjas = [...this.state.ninjas, ninja]
    // this.setState({
    //   ninjas: ninjas
    // })
  }
  render(){
    return (
      <div className="App">
            <h1>My first react app!</h1>
            <p>Welcome:)</p>
            <Ninjas ninjas={this.state.ninjas}/>
            <AddNinja AddNinja={this.addNinja}/>
      </div>
    );
  }
  
}

export default App;
 