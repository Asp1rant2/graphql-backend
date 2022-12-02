import {ApolloServer, gql} from 'apollo-server'

const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
    price: Float    
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
  }
`;

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
    price: 10.8,
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
    price: 6.99,
  },
  {
    title: 'City of Glass II',
    author: 'Paul Auster',
    price: 7.99,
  },
  {
    title: 'City of Glass III',
    author: 'Paul Auster',
    price: 9.99,
  },
];

const resolvers = {
  Query: {
    books: () => {
      return books;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
