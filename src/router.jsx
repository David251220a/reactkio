import { createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/Layout'
import Principal from './views/Principal'
import AuthLayout from './layouts/AuthLayout'
import Ingresar from './views/Ingresar'
import Registro from './views/Registro'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Principal />
            }
        ]
    },
    {
        path:'/auth',
        element: <AuthLayout />,
        children:[
            {
                path: '/auth/login',
                element: <Ingresar />
            },
            {
                path: '/auth/registro',
                element: <Registro />
            }
        ]
    }
])

export default router