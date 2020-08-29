const graphql = require("graphql");

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

const MovieType = new GraphQLObjectType({
  name: "Movie",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  }),
});

const Query = new GraphQLObjectType({
  name: "Query",
  movie: {
    type: MovieType,
    arqs: { id: { type: GraphQLString }},
    resolve( parent, arqs ) {

    }
  }
});

module.exports = new GraphQLSchema({
  query: Query,
})