import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home';
import CadastroVideo from '../pages/Cadastro/Video'
import CadastroCategoria from '../pages/Cadastro/Categoria'
import NotFound from '../pages/NotFound';

const Routes = () => (
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/cadastro/video" component={CadastroVideo} />
    <Route path="/cadastro/categoria" component={CadastroCategoria} />
    <Route component={NotFound} />
  </Switch>
)

export default Routes
