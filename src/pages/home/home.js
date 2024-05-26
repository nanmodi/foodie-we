import React from 'react'
import './home.css'
import Header from '../../components/header/header.js'
import Menu from '../../components/menu/menu.js'
import FoodDisplay from '../../components/Food_display/FoodDisplay.js'
const Home = () => {
  const [variety,explore_variety]=React.useState('All')
  return (
    <div>
      <Header/>
    <Menu variety={variety} explore_variety={explore_variety}/>
    <FoodDisplay variety={variety}></FoodDisplay>
    </div>
  )
}

export default Home
