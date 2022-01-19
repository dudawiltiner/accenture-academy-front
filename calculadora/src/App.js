import React, { Component } from 'react';
import './App.css';

class ButtonOperator extends Component {
  constructor(props){
    super(props);
    this.state= {value: '0'}
  }
  render() {
    const {funcOperator, funcReset} = this.props;
    
    return(
      <div>
        <button onClick={() => funcOperator('+')}>+</button>
        <button onClick={() => funcOperator('-')}>-</button>
        <button onClick={() => funcOperator('*')}>*</button>
        <button onClick={() => funcOperator('/')}>/</button>
        <button onClick={() => funcOperator('=')}>=</button>
        <button onClick={funcReset}>LIMPAR</button>
      </div>
    )
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state= {value: '0'}

  }

  changeValue = (item) => {
    this.setState((prevState) => ({
      value: prevState.value === '0' ? item  : prevState.value + ' ' + item
    }))
  }

  operationNumber = (operation) =>{
    if(operation !== '='){
      this.setState((prevState) => ({
        value: prevState.value + ' ' + operation
      }))
    }

    // https://pt.stackoverflow.com/questions/3021/como-posso-checar-se-uma-string-cont%C3%A9m-outra-em-javascript
    else{
      const {value} = this.state;
      console.log(value)
      if(value.indexOf("+") !== -1){
        const array = value.split("+");
        let result = 0;
        
        array.forEach((item) => {
          result += parseInt(item);
        })

        this.setState(({
          value: result
        }))
      }

      if(value.indexOf("-") !== -1){
        const array = value.split("-");
        let result = 0;
        
        array.forEach((item) => {
          result = result - parseInt(item);
        })

        this.setState(({
          value: result
        }))
      }

      if(value.indexOf("*") !== -1){
        const array = value.split("*");
        console.log(array)
        let result = 1;
        
        array.forEach((item) => {
          result *= parseInt(item);
        })

        this.setState(({
          value: result
        }))
      }

      if(value.indexOf("/") !== -1){
        const array = value.split("/");
        let result = parseInt(array[0]) /  parseInt(array[1]);
      

        this.setState(({
          value: result
        }))
      }
    }
  }

  reset = () => {
    this.setState(({
      value: '0'
    }))
  }


  render() {
    const numbers = ['1','2','3','4','5', '6','7','8','9']
    const {value} = this.state
    return (
      <div className="container">
        <p>{value}</p>

        {numbers.map((item) =>
          <button onClick={() => this.changeValue(item)}>{item}</button>
        )}
        
        <ButtonOperator funcOperator={this.operationNumber} funcReset={this.reset} />
      </div>
    );
  }
}
export default App;
