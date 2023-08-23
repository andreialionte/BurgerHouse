import './App.scss';
import React from 'react';
import Header from "./components/Header";
import Banner from "./components/Banner";
import Show from "./components/Show";
import Meals from "./components/Meals";
import DataMeals from './components/DataMeals';

function App() {
  return (
    <React.Fragment>
      <Header />  
      <Banner />
      <Show />
      <DataMeals />
    </React.Fragment>
  );
}

export default App;
