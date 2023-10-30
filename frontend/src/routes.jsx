import { createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import AddBook from './components/AddBook.jsx';
import EditBook from './components/EditBook.jsx';

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/add',
    element: <AddBook />,
  },
  {
    path: '/edit/:bookId',
    element: <EditBook />,
  },
]);

export default AppRouter;
