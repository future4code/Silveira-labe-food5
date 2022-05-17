
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../Pages/Home/HomePage';;
// import LoginPage from '../Pages/Login/LoginPage';

export const Router = () => {


    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    );
}