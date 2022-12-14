import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Anwar', 'jafor', 'alomgir', 'Salman']
  const products = [
    {name: 'Photoshop', price: '$90.99'},
    {name:'Illustrator', price: '$60.99'},
    {name:'PDF Reader', price: '$6.99'},
    {name:'Premier EI', price: '$600.99'}
  ]
  const friends = [
    {name: 'Rahim', age:20},
    {name: 'Karim', age:25},
    {name: 'Jarim', age:22}
  ]
  return (
    
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <Counter></Counter>
        <Users></Users>
        <Friends name={friends[0].name} age={friends[0].age}></Friends>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          <li>{nayoks[0]}</li>
          {
            products.map(product => <li> {product.name} </li>)
          }
        </ul>
        {
          products.map(product => <Product product={product}></Product>)
        }
        <Product product={products[0]}></Product>
        <Product product = {products[1]}></Product>
        <Person name = {nayoks[0]} nayika = "Moushumi"></Person>
        <Person name = "Jasim" nayika = "Sabana"></Person>
        <Person name = "Tanvir" nayika = "Nobody"></Person>
      </header>
    </div>
  );
}
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}
function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}
function Friends(props){
  const friendsStyle = {
    border: '2px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'

  }
  return(
    <div style={friendsStyle}>
       <h1>{props.name}</h1>
       <h2>{props.age}</h2>
       <button>Let's Play</button>
    </div>
  )
}
function Product(props){
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '250px',
    width: '200px',
    float: 'left'

  }
  const {name, price} = props.product;
  return(
    <div style={productStyle}>
    <h2>{name}</h2>
    <h1>{price}</h1>
    <button>Buy Now</button>

    </div>
  )
}
function Person(props){ 
  const personStyle={
    border:'2px solid red',
    margin:'10px' 
  }
  console.log(props)
  return (<div style={personStyle}>
    <h1>Name: {props.name}</h1>
    <h3>Hero of {props.nayika}</h3>
  </div>
  
  )
}

export default App;
