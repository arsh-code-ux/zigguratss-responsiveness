import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BlogSection from './components/BlogSection';
import ArticlePage from './components/ArticlePage';
import Footer from './components/Footer';
import './App.css';

function HomePage() {
    return (
        <>
            <HeroSection />
            <BlogSection />
            <Footer />
        </>
    );
}

function App() {
    return (
        <Router>
            <div className="app">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/article/:id" element={<ArticlePage />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
