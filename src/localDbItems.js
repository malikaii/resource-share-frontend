import furniture from "./Assets/furniture.jpg"
import music from "./Assets/music.jpg"
import books from "./Assets/books.jpg";
import clothing from "./Assets/backgroundclothing.png"
export const categoriesWithAttributes = [
  {
    title: "Art",
    
    imgSrc: ""  
  },
  {
    title: "Music",
    imgSrc: music  
  },
  {
    title: "Clothing",
    imgSrc: clothing
  },
  {
    title: "Furniture",
    imgSrc: furniture  
  },
  {
    title: "Textbooks",
    imgSrc: books
  },
];

export const categories = ["Art", "Music", "Clothing", "Furniture", "Textbooks"]

export const listing = [
  { 
    id: 0,
    imgSrc: "holder.js/100px180",
    title: "Bottle of Mtn. Dew",
    description: "Just a bottle of mountain dew I got from the vending machine",
    category: "Miscellaneous",
    price: "4.50",
  },
  {
    id: 1,
    imgSrc: "holder.js/100px180",
    title: "Org Chem Textbook",
    description: "Texbook from organic chemistry, used",
    category: "Textbooks",
    price: "35",
  },
  {
    id: 2,
    imgSrc: "holder.js/100px180",
    title: "Lazboy set",
    description: "Couch set, not in use anymore",
    category: "Furniture",
    price: "250",
  },
  { 
    id: 3, 
    imgSrc: "holder.js/100px180",
    title: "AF1",
    description: "Recently bought, shoes not the right size",
    category: "Clothing",
    price: "90",
  },
];
