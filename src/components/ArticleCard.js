import { useContext } from 'react';
import styled from 'styled-components';

import { SavedArticleContext } from '../context/SavedArticleContext';

const ArticleCard = ({ article }) => {

    const { addToReadingList } = useContext(SavedArticleContext);


    return (
        <StyledCard key={article.id}>
            <h3>{article.title}</h3>
            <img src={article.image} alt="Cool Shot"/>
            <p>{article.summary}</p>
            <button onClick={() => addToReadingList(article)}>Add To Reading List</button>
        </StyledCard>
    )
}

const StyledCard = styled.div`
    display: flex; 
    flex-flow: column nowrap;
    border: 4px solid dodgerblue;
    width: 20rem;

    img {
        width: 100%;
        max-height: 20rem;
        object-fit: cover;

    }

`;

export default ArticleCard; 