import { lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import MainLayout from './layouts/MainLayout';
// views
const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const Product = lazy(() => import('./pages/Product'));
const Search = lazy(() => import('./pages/Search'));
const NotFound = lazy(() => import('./pages/Page404'));

// ----------------------------------------------------------------------

export default function Router() {
    return useRoutes([
        {
            path: '/',
            element: <MainLayout />,
            children: [
                { path: 'home', element: <Home /> },
                { path: 'products', element: <Products /> },
                { path: 'products/:filter', element: <Products /> },
                { path: 'product/:productId', element: <Product /> },
                { path: ':search', element: <Search /> },
                { path: '404', element: <NotFound /> },
                { path: '/', element: <Navigate to="/home" replace /> },
                { path: '*', element: <Navigate to="/404" /> },
            ],
        },

        { path: '*', element: <Navigate to="/404" replace /> },
    ]);
}
