const express = require('./config/express.js')
const Recipe = require('./models/recipe.model');
const recipeRouter = require('./routes/recipe.routes');
const User = require('./models/user.model');
const userRouter = require('./routes/user.routes');


// Database setup (Dallas)
// const uri = "mongodb+srv://dallas:Elisha0924@cluster0.xaiwm.mongodb.net/RecipeExchange?retryWrites=true&w=majority"
// mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});

// const connection = mongoose.connection;
// connection.once('open', () => {
//     console.log("MongoDB database connection established successfully");
// })
 
// Use env port or default
const port = process.env.PORT || 5000;

const app = express.init()
app.listen(port, () => console.log(`Server now running on port ${port}!`));
