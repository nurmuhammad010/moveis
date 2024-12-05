import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import About from '../About'
import Movies from '../Movies'
import Series from '../Series'
import TvShows from '../TvShows'

export default function Router() {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
            <Route path="/tv-shows" element={<TvShows />} />
        </Routes>
    )
}
