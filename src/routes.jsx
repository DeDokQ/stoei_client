import register from "./pages/Registration/reg"
import auth from './pages/Authorization/authtest'
import newOrder from './pages/Order/NewOrder'
import myOrders from './pages/Order/myOrders'
import React, {useEffect, useState} from "react";
import {getOrders} from "./http/OrderApi";
import {Spinner} from "react-bootstrap";
import mainPage from './pages/main'
import NewPage from "./pages/News/NewPages";

// export const authRoutes = [
//     {
//         path: ADMIN_ROUTE,
//         Component: Admin
//     }
// ]
export const publicRoutes = [
    {
        path: '/registration',
        Component: register
    },
    {
        path: '/authorization',
        Component: auth
    },
    {
        path: '/orders/newOrder',
        Component: newOrder
    },
    {
        path: '/orders/myOrders',
        Component: myOrders
    },
    {
        path: '/',
        Component: mainPage
    },
    {
        path: '/news/:id',
        Component: NewPage
    }

]