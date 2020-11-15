import { BrowserRouter as Router, Route } from 'react-router-dom'

import ArticleDash from './components/ArticleDash'; 

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Pintereach</h1>
        <Route exact path="/" component={ArticleDash} />
      </div>
    </Router>
  );
}

export default App;
