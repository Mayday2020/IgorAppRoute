import React, {useState} from 'react';
import styles from "./components/Site.module.css";
import {Adidas} from "./components/pages/Adidas";
import {Puma} from "./components/pages/Puma";
import {Abibas} from "./components/pages/Abibas";
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import {Error404} from "./components/pages/Error404";
import Model from "./components/pages/Model";

export const PATH = {
    PAGE1: '/adidas',
    PAGE2: '/puma',
    PAGE3: '/abibas',
    ERROR: '/error404'
} as const


function App() {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <div><NavLink to={PATH.PAGE1} className={
                        ({isActive}) => isActive ? styles.active : styles.navLink
                    }>Adidas</NavLink></div>
                    <div><NavLink to={PATH.PAGE2} className={
                        ({isActive}) => isActive ? styles.active : styles.navLink
                    }>Puma</NavLink></div>
                    <div><NavLink to={PATH.PAGE3} className={
                        ({isActive}) => isActive ? styles.active : styles.navLink
                    }>Abibas</NavLink></div>
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path={PATH.PAGE1} element={<Adidas/>}> </Route>
                        <Route path={'/'} element={<Navigate to={PATH.PAGE1}/>}> </Route>
                        <Route path={PATH.PAGE2} element={<Puma/>}> </Route>
                        <Route path={PATH.PAGE3} element={<Abibas/>}> </Route>
                        <Route path={PATH.ERROR} element={<Error404/>}> </Route>
                        <Route path={`${PATH.PAGE1 + '/:id'}`} element={<Model/>}> </Route>
                        <Route path={'/*'} element={<Navigate to={PATH.ERROR}/>}> </Route>
                    </Routes>
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}


export default App;
