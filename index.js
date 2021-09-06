const mongoose = require("mongoose");

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require("./models/Recipe.model");
// Import of the data from './data.json'
const data = require("./data");

const MONGODB_URI = "mongodb://localhost:27017/recipe-app";

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((self) => {
    console.log(`Connected to the database: "${self.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany();
  })
  .then(() => {
    // Run your code here, after you have insured that the connection was made
  })
  .catch((error) => {
    console.error("Error connecting to the database", error);
  });

const recipe = {
  title: "Arroz con huevo",
  level: "recien casado",
  ingredient: ["rice", "eggs", "salt", "oil"],
  cuisine: "South American",
  dishType: "any time",
  image:
    "https://cdn1.celebritax.com/sites/default/files/styles/watermark_100/public/1574121389-arroz-huevo-frito-ubica-100-platos-populares-sudamerica.jpg",
  duration: 5,
  creator: "lazy man",
  created: 10 - 12 - 2021,
};

const recipe2 = {
  title: "Paella",
  level: "Jodido",
  ingredient: ["rice", "camarones", "chorizon", "carne", "pulpo"],
  cuisine: "Spanish",
  dishType: "Dinner",
  image:
    "https://tastesbetterfromscratch.com/wp-content/uploads/2020/04/Paella-7.jpg",
  duration: 3.3,
  creator: "Spanish",
  created: 10 - 12 - 2021,
};

const recipe3 = {
  title: "Sopa de Pollo",
  level: "recien casado",
  ingredient: ["Chicken", "Water", "salt", "oil", "peppers", "noodles"],
  cuisine: "South American",
  dishType: "any time",
  image:
    "https://cocina-casera.com/wp-content/uploads/2017/12/Sopa-de-pollo.jpg",
  duration: 1,
  creator: "Abuelita",
  created: 10 - 12 - 2021,
};

const arr = [recipe2, recipe3];

// Recipe.insertMany(arr)
//   .then((user) => console.log("The value save", user))
//   .catch((error) =>
//     console.log("An error happened while saving a new user:", error)
//   );

const res = Recipe.updateOne({ title: "Sopa de Pollo" }, { duration: 200 })
  .then("successCallback")
  .catch("errorCallback");

res.n;
