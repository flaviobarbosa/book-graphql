import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { BookProvider } from './context/bookContext.jsx';
import './index.css';
import AppRouter from './routes.jsx';

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BookProvider>
        <RouterProvider router={AppRouter} />
      </BookProvider>
    </ApolloProvider>
  </React.StrictMode>
);
