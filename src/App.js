import { BrowserRouter as Router, Route } from 'react-router-dom';


import Nav from './components/Nav';
import Authorization from './pages/Authorization';
import ArticleDash from './components/ArticleDash'; 
import { PrivateRoute } from './components/PrivateRoute';
import GlobalStyle from './components/GlobalStyle'; 

function App() {
  return (
    <Router>
      <GlobalStyle />
      <div className="App">
        <Nav />
        <PrivateRoute exact path="/" component={ArticleDash} />
        <Route path="/authorization" component={Authorization} />
      </div>
    </Router>
  );
}

export default App;
