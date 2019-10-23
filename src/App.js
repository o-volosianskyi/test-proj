import React from 'react';
import {Route,BrowserRouter, Switch } from 'react-router-dom'
import './App.css';
import { MainView } from './pages/MainView';
import { CreateInvoiceView } from './pages/CreateInvoiceView';
import {ServerState} from './context/server/ServerState'
function App() {
  return (
      <ServerState>
    <BrowserRouter>
    <div className="container">
     <Switch>
       <Route path={'/'} exact component={MainView}/>
       <Route path={'/create'}  component={CreateInvoiceView}/>
     </Switch>
    </div>
    </BrowserRouter>
      </ServerState>
  );
}

export default App;
