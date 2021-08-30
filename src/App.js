import { useEffect } from 'react'
import './App.css';
import HomePage from './Pages/Home';
import AddLinkPage from './Pages/AddLink';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useUrlLayerValue } from './Context/UrlContext';

function App() {
  // eslint-disable-next-line
  const [{ }, dispatch] = useUrlLayerValue();

  useEffect(() => {
    const datas = JSON.parse(localStorage.getItem('data'))
    if (datas) {
      dispatch({
        type: 'SET_URL',
        payload: datas
      })
    }
  },
    // eslint-disable-next-line
    [])

  return (
    <>
      <Router>
        <Switch>
          <Route path='/add' exact component={AddLinkPage} />
          <Route path='/' component={HomePage} />

        </Switch>
      </Router>
    </>
  );
}

export default App;
