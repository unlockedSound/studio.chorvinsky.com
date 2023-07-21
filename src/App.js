import './App.css';
import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import PhotoData from "./components/PhotoData";

const App = () => {
    return (
        <BrowserRouter>
            <div className="bg-white dark:bg-gray-900">
                <Header/>
                <main>
                    <div className="">
                        <div
                            className="bg-gradient-to-b from-white to-white dark:from-gray-900 dark:to-black overflow-auto">
                            <Routes>
                                <Route exact path="/" element={Gallery}/>
                            </Routes>
                        </div>
                    </div>
                </main>
                <Footer/>
            </div>
        </BrowserRouter>
    );
};

export default App;
