import React from 'react';
import PropTypes from "prop-types";

//react는 자동적으로 class component의 render method를 실행하려고 한다.
class App extends React.Component{
  state ={
    count: 0  
  };
  // state를 직접 변경해서는 안된다. setState()를 사용해야함.
  plus = () => {
    console.log("add");
    this.setState({
      count : this.state.count + 1
    });
  };
  minus = () => {
    console.log("minus");
    this.setState({
      count : this.state.count - 1
    });
  };
  render(){
    return (<div>
      <h1>The number is: {this.state.count}</h1>
      <button onClick={this.plus}>Plus</button>
      <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}
export default App;
