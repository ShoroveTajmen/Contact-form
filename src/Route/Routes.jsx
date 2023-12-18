
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';

const myCreatedRoutes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>
    }
])

export default myCreatedRoutes;