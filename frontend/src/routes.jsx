import { createBrowserRouter } from 'react-router-dom'
import App from "./App.jsx";
import AddBook from "./components/AddBook.jsx";

const AppRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/add-book',
        element: <AddBook />
    }
])

export default AppRouter;