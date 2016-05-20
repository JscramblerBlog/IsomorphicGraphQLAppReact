var schema = require('../../graphql/schema');
var graphql = require('graphql');
var should = require('should');

describe('A bar tab schema', function () {
  it('queries for a drink', function (done) {
    const query = `
      query GetDrinkTabQuery {
        drink(id: 1) {
          count
        }
      }
    `;

    graphql.graphql(schema, query).then(function (drinkTab) {
      should(drinkTab.data.drink.count).be.above(0);

      done();
    });
  });
});
