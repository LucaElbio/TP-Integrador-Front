import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Categories, Movies, Platforms } from '../pages';


export const PublicRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/movies" element={<Movies />} />
            <Route path="/platforms" element={<Platforms />} />
            <Route path="/categories" element={<Categories />} />
        </Routes>
    </BrowserRouter>
);