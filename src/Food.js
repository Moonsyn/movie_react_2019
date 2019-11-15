import React from 'react';
import PropTypes from "prop-types";

const foodILike = [
  {
    id:0,
    image: "https://www.platingsandpairings.com/wp-content/uploads/2014/12/Kimchi-5.jpg",
    name: "Kimchi",
    description : "Spicy",
    rating: 4.1
  },
  {
    id:1,
    image: "https://pds.joins.com/news/component/htmlphoto_mmdata/201702/27/117f5b49-1d09-4550-8ab7-87c0d82614de.jpg",
    name: "Samgyeopsal",
    description : "Meat",
    rating: 4.7
  },
  {
    id:2,
    image: "https://www.budgetbytes.com/wp-content/uploads/2017/01/Bibimbap-break-yolk.jpg",
    name: "Bibimbap",
    description : "Delicious",
    rating: 5.0
  },
  {
    id:3,
    image: "https://www.lifegetsbetter.ph/uploads/recipes/featured/Pork-Tonkatsu.jpg",
    name: "Tonkatsu",
    description : "Sweet!",
    rating: 4.8
  },
  {
    id:4,
    image: "https://i.ytimg.com/vi/2G5SAC3UI3M/maxresdefault.jpg",
    name: "Kimbap",
    description : "fantastic",
    rating: 3.7
  }
];

function Food({ image, name, description, rating }){
  return <div>
    <img src={image} alt={name}/>
    <h1>I like {name}</h1>
    <h3>It is {description}</h3>
    <h4>{rating}/5.0</h4>
  </div>
}

Food.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number
};

function Food() {
  return (
    <div className="Food">
      <h1>Hello!</h1>
      {foodILike.map(dish => 
        <Food 
          key={dish.id} 
          image={dish.image}
          name={dish.name} 
          description={dish.description}
          rating={dish.rating}
        />
      )}
    </div>
  );
}

export default Food;
