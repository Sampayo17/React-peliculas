
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import rutas from './RouteConfig';
import Menu from './peliculas/utils/Menu';

function App() {

  return (
    <>

<BrowserRouter>
      <Menu />
      <div className='container'>

          <Switch>
            {rutas.map( ruta => <Route key={ruta.path} path={ruta.path}
             exact={ruta.exact}>
              <ruta.componente></ruta.componente>
             </Route>
             )}
          </Switch>
   
      </div>
      </BrowserRouter>
    </>

  )

}

export default App;
function Useeffect(arg0: () => () => void) {
  throw new Error('Function not implemented.');
}

