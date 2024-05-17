import { Routes, Route, Redirect, Navigate} from 'react-router-dom'
import {observer} from 'mobx-react-lite'
import React, { Component, useCallback, useContext } from 'react';
import {authRoutes, publicRoutes} from "../routes";

const AppRouter = observer( () => {
    return (
        <Routes>
            {localStorage.getItem("role") === "ADMIN" && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component />} exact />
            )}

            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component />} exact/>
            )}
            <Route path="*" element={<Navigate to ="/" />} />
        </Routes>
    );
});

export default AppRouter;