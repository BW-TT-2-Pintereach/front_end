import { Route, Switch } from 'react-router-dom';
import { useState } from 'react';


import Nav from './components/Nav';
import Authorization from './pages/Authorization';
import ArticleDash from './components/ArticleDash'; 
import ReadingList from './components/ReadingList';
import { PrivateRoute } from './components/PrivateRoute';

import { SavedArticleContext } from './context/SavedArticleContext'
import GlobalStyle from './components/Styles/GlobalStyle'; 

function App() {

  //context/ global state set up 
  const [savedArticles, setSavedArticles] = useState([]);

  const addToReadingList = article => {
    setSavedArticles([...savedArticles, article]); 
  }

  const removeFromReadingList = articleID => {
    setSavedArticles(
      savedArticles.filter(article => article.id !== articleID)
    )
  }

  const updateArticleRank = (id, rank) => {
    setSavedArticles(
      savedArticles.map(article => { 
        if ( article.id === id){
          return {...article, rank: rank};
        }
        return article;
      })
    );
  }

  return (
    <div className="App">
      <SavedArticleContext.Provider value={{ 
        savedArticles, 
        addToReadingList, 
        removeFromReadingList, 
        updateArticleRank }}>
        <GlobalStyle />
        <Nav />
        <Switch>
          <PrivateRoute exact path="/" component={ArticleDash} />
          <PrivateRoute path="/readinglist" component={ReadingList} />
          <Route path="/authorization" component={Authorization} />
        </Switch>
      </SavedArticleContext.Provider>
    </div>
  );
}

export default App;
