import React from 'react';
import Students from './Components/Students/Students';
import CounterOne from './Components/Reducer/CounterOne';
import CounterTwo from './Components/Reducer/CounterTwo';
import CounterThree from './Components/Reducer/CounterThree';
import IndexCrud1 from './Components/Crud/IndexCrud1';
import IndexCrud2 from './Components/Crud/IndexCrud2';
import './App.css';

const App = () => {

  return (
    <div className="App">
      {/* <Students/>
      <hr/>
      <CounterOne/>
      <hr/>
      <CounterTwo/>
      <hr/>
      <CounterThree/>
      <hr/> */}
      {/* <IndexCrud1/> */}
      <IndexCrud2/>
    </div>
  );
}

export default App;