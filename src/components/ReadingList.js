import { useContext, useState } from 'react';
import styled from 'styled-components';


import ArticleCard from './ArticleCard';
import { SavedArticleContext } from '../context/SavedArticleContext'; 

const ReadingList = () => {

    const { savedArticles, removeFromReadingList, updateArticleRank } = useContext(SavedArticleContext); 

    const [ userRank, setUserRank ] = useState(null)
    //Lets us a standard drop down for setting rank 
    // Get it working with component state first - inpmort saved articles as a local state component 
        // get it working then look to move functionality to API (Update then re render )

    const handleChange = e => {
        setUserRank(e.target.value); 
    }


    return ( 
        <>
            <h2>Reading List:</h2>
            <StyledArticleWrapper>
                {savedArticles.map(article => (
                    <CardWrapper>
                        <ArticleCard article={article} />
                        <button onClick={() => removeFromReadingList(article.id)}>
                            Remove From Reading List
                        </button>
                        <form>
                            <label>Rank this article:
                                <select value={userRank} onChange={handleChange}>
                                    <option value={1}>One</option>
                                    <option value={2}>Two</option>
                                    <option value={3}>Three</option>
                                    <option value={4}>Four</option>
                                    <option value={5}>Five</option>
                                </select>
                            </label>
                            <button onClick={e => {
                                e.preventDefault();
                                updateArticleRank(article.id, userRank)}}>
                                Submit
                                </button>
                        </form>

                    </CardWrapper>
                ))}
            </StyledArticleWrapper>
        </>
    )

}


const StyledArticleWrapper = styled.div`
    display: flex; 
    justify-content: space-around; 
    flex-flow: row wrap;

`;

const CardWrapper = styled.div`
    display: flex; 
    flex-flow: column nowrap;
`;

export default ReadingList; 
