//This file holds any configuration variables we may need
//'config.js' is usually ignored by git to protect sensitive information, such as your database's username and password

module.exports = {
    db: {
        uri: 'mongodb+srv://dbUser:dbUserPassword@cluster0.qri3r.mongodb.net/RecipeExchangeDB?retryWrites=true&w=majority',
    }
};
