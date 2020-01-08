import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom';

import Navbar from './pages/navbar'
import Header from './pages/header'
import Login from './pages/login'
import FormulaOpUm from './pages/FormulaOpUm'
import FormulaOpDois from './pages/FormulaOpDois'
import Main from './pages/main'
import Calc from './pages/calculadora'

import './pages/navbar.css'

export default function Routes() {
    return (
        <BrowserRouter>
            
                <div className="App">
                    <Route exact path="/" render={() => <Login />} />

                    <Route  path='/main'> 
                     <Navbar />
                     <Header />
                     <Main/>
                      </Route>
                    {/* <Route  path='/main' render={() => } /> */}
                    <Route  path='/calculadora/' render={() => <Navbar />} />
                    <Route  path='/calculadora/' render={() => <Header />} />

                    {/* <Route exact path='/main' component={Main} /> */}
                    <Route exact path='/calculadora' render={() => <Calc />} />
                    <Route exact path='/calculadora/AdmIndividual' render={() => <FormulaOpUm />} />
                    <Route exact path='/calculadora/AdmPorAtoDeOficio' render={() => <FormulaOpDois />} />
                </div>
        </BrowserRouter>
    )
}