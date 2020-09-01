
const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const shema = require("../shema/shema")

const app = express();
const PORT = 3005;

app.use('/graphql', graphqlHTTP({
  shema, 
  graphiql: true,
}));

app.listen(PORT, err => {
  err ? console.log(err) : console.log('Server started!');
});