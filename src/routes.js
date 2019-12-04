import {BrowserRouter, Route} from 'react-router-dom';

export default function Routes(){
    return(
        <BrowserRouter>
            <Route  path="/" exact component={login}/>
            
        </BrowserRouter>
    )
}