import { useContext } from 'react';
import styled from 'styled-components';


import ArticleCard from './ArticleCard';
import { SavedArticleContext } from '../context/SavedArticleContext'; 

const ReadingList = () => {

    const { savedArticles, removeFromReadingList } = useContext(SavedArticleContext); 

    //Lets us a standard drop down for setting rank 
    // Get it working with component state first - inpmort saved articles as a local state component 
        // get it working then look to move functionality to API (Update then re render )
    return ( 
        <>
            <h2>Reading List:</h2>
            <StyledArticleWrapper>
                {savedArticles.map(article => (
                    <CardWrapper>
                        <ArticleCard article={article} />
                        <button onClick={() => removeFromReadingList(article.id)}>Remove From Rading List</button>
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
