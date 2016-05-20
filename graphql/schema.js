var graphql = require('graphql');
var data = require('./data.json');

const drinkType = new graphql.GraphQLObjectType({
  name: 'Drink',
  fields: {
    id: { type: new graphql.GraphQLNonNull(graphql.GraphQLInt) },
    name: { type: graphql.GraphQLString },
    count: { type: graphql.GraphQLInt }
  }
});

const queryType = new graphql.GraphQLObjectType({
  name: 'Query',
  fields: {
    drink: {
      type: drinkType,
      args: {
        id: { type: new graphql.GraphQLNonNull(graphql.GraphQLInt) }
      },
      resolve: function (root, args) {
        return data[args.id];
      }
    }
  }
});

const schema = new graphql.GraphQLSchema({
  query: queryType,
  types: [ drinkType ]
});

module.exports = schema;
