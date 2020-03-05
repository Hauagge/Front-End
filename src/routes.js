import React from 'react'
import { BrowserRouter, Route, Redirect,Switch} from 'react-router-dom';

import Navbar from './pages/navbar'
import Header from './pages/header'
import Login from './pages/login'
import FormulaOpUm from './pages/FormulaOpUm'
import FormulaOpDois from './pages/FormulaOpDois'
import Main from './pages/main'
import Calc from './pages/calculadora'


import './pages/navbar.css'

const { isLogged } = Login;
const  PrivateRoute =  ({component: Component, ...rest})=>(
<Route {...rest} render={props => (
    isLogged ? (
        <Component{...props} />):(
            <Redirect to={{pathname:'/', state:{from:props.location}}}/>
        )
    )
} />
 )

export default function Routes() {

   


    return (
        <div className="App">
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={() => <Login />} />
                <>
                        <Navbar />
                        <Header />
                        <Route path='/main' render={() => <Main />} />
                        <Route exact path='/calculadora' render={() => <Calc />} />
                        <Route exact path='/calculadora/AdmIndividual' render={() => <FormulaOpUm />} />
                        <Route exact path='/calculadora/AdmPorAtoDeOficio' render={() => <FormulaOpDois />} />
                    
              </>
            </Switch>
        </BrowserRouter>
    </div>
    )
}