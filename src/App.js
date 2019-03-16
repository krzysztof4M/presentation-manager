import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Presentations from './components/Presentations';
import PresenterMode from './components/PresenterMode';
import PresentationDetails from './components/PresentationDetails';
import AddPresentation from './components/AddPresentation';
import Menu from './components/Menu';
import Home from './Home';

export default function App() {
  return (
    <div>
      <Menu />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/presentations" component={Presentations} />
          <Route exact path="/presentations/new" component={AddPresentation} />
          <Route exact path="/presentations/:id" component={PresentationDetails} />
          <Route exact path="/presentations/:id/mode" component={PresenterMode} />
        </Switch>
      </div>
  </div>
  );
}
