import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { GlobalContex } from './GlobalContex';

export default function Global() {
    const [isAuthorization, setIsAuthorization] = useState(false);
    function handleAuthorization(bool) {
        setIsAuthorization(bool);
    }
    return (
        <GlobalContex.Provider value={{ isAuthorization, handleAuthorization }}>
            <Header />
            <Outlet />
            <Footer />
        </GlobalContex.Provider>
    );
}
