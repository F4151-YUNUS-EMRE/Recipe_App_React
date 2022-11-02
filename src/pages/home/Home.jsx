import axios from 'axios';
import React, { useState } from 'react'
import Header from '../../components/header/Header';
import Cards from "../../components/cards/Cards";
import homesvg from "../../assets/home.svg";
import { HeaderText, HomeImg, ImgDiv } from './Home.style';

const Home = () => {
  const [query, setQuery] = useState("egg")
  const [selectedMeal, setSelectedMeal] = useState("breakfast")
  const [recipes, setRecipes] = useState(null)

  const mealType = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"]; 

  const APP_ID = process.env.REACT_APP_APP_ID;
  const APP_KEY = process.env.REACT_APP_APP_KEY;

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;

  const getData=async()=>{
    if(query){
      try {
        const { data } = await axios(url);
        console.log(data);
        setRecipes(data.hits);
      } catch (error) {
        console.log(error);
      }
    }else{
      alert("Fill the form")
    }
  }

console.log(recipes);
  // useEffect(() => {
    // getData()
  // }, [])
  

  return (
    <div>
      <Header
        setQuery={setQuery}
        setSelectedMeal={setSelectedMeal}
        mealType={mealType}
        getData={getData}
      />
      {!recipes && (
        <ImgDiv>
          <HomeImg src={homesvg} />
        </ImgDiv>
      )}

      {recipes?.length === 0 && (
        <HeaderText>The Food can not be found</HeaderText>
      )}

      {recipes?.length > 0 && <Cards recipes={recipes} />}
    </div>
  );
}

export default Home
