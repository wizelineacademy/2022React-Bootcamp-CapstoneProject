import React, { useState } from 'react';
import './components/css/navbar.css';
import './components/css/body.css';
import './components/css/grid.css';
import './components/css/footer.css';


import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';
import { NavBar } from './components/navbar';
import { BodyDiv } from './components/body/body';
import { FootDiv } from './components/footer';


function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  const [route, setRoute] = useState('/');
  const onChangeRoute = (newRoute) =>{
    console.log(newRoute);
    setRoute(newRoute);
  };

  return (
    <div className="App">
      <NavBar route={route} onchange={onChangeRoute}/>
      <BodyDiv route={route} onchange={onChangeRoute}/>
      <FootDiv /> 
    </div>
  );
}

export default App;

