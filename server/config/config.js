//This file holds any configuration variables we may need
//'config.js' is usually ignored by git to protect sensitive information, such as your database's username and password

module.exports = {
    db: {
        uri: 'mongodb+srv://dbUser:dbUserPassword@cluster0.qri3r.mongodb.net/RecipeExchangeDB?retryWrites=true&w=majority',
    },
    auth: {
        domain: 'dev-om66vq6u.us.auth0.com',
        clientId: 'Q2eGwB4n3T9Sv84Um613hCYBmueER1I6',
        audience: 'https://dev-om66vq6u.us.auth0.com/api/v2/'
    }
};
