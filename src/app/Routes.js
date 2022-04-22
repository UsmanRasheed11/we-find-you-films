/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import BasePage from "./BasePage";
import { Logout, AuthPage } from "./modules/Auth";
import { LandingPage } from "./pages/LandingPage";
import { LoginPage } from "./modules/Auth/pages/LoginPage";
import { SignUpPage } from "./modules/Auth/pages/SignUpPage";
import { MovieDetailsPage } from "./modules/Movies/pages/MovieDetailsPage";

export function MyRoutes() {
    const {isAuthorized} = useSelector(
        ({auth}) => ({
            isAuthorized: auth.user != null,
        }),
        shallowEqual
    );

    return (
        <Routes>
            {!isAuthorized ? (
                <>
                <Route exact path="/auth/*" element={<AuthPage />}>
                <Route path="login" element={<LoginPage />} />
                <Route path="register" element={<SignUpPage />} />
                
                </Route>
                <Route path="/auth" element={<Navigate from="/auth" to="/auth/login" />}/>
                </>
            ) : (
                /*Otherwise redirect to root page (`/`)*/
                <Route from="/auth" element={<Navigate to="/" />}/>
            )}

            <Route path="/logout" element={<Logout />}/>
            <Route exact path="/*" element={<BasePage />}>
                <Route exact path="" element={<LandingPage />}/>
                <Route exact path="movies/:id" element={<MovieDetailsPage />}/>
            </Route>
        </Routes>
    );
}
