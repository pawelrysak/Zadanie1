import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route, Redirect} from 'react-router-dom';
import DocumentationPage from './DocumentationPage';
import CalculatorPage from './CalculatorPage';
import WelcomePage from './WelcomePage';

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <Link to="/welcome">Home</Link>
                    <div className="Sub-menu">
                        <Link to="/documentationpage">Documentation</Link>
                        <Link to="/calculatorpage">Fib Calc</Link>
                    </div>
                </header>
                <div>
                    <Redirect from="/" to="welcome" />
                    <Route path="/welcome" component={WelcomePage}/>
                    <Route path="/documentationpage" component={DocumentationPage}/>
                    <Route path="/calculatorpage" component={CalculatorPage}/>
                </div>
            </div>
        </Router>
    );
}

export default App;
