import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Style from './style';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
    return (
        <Fragment>
            <Style.GlobalStyle />
            <BrowserRouter>
                <Header />
                <Route exact path="/" component={Home} />
                <Footer />
            </BrowserRouter>
        </Fragment>
    );
};

export default App;
