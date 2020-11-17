import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';

import { SavedArticleContext } from '../context/SavedArticleContext';
import { axiosDev } from '../utils/axiosDev'; 
import ArticleCard from './ArticleCard';


const ArticleDash = () => {

    const [articles, setArticles] = useState([]);

    const { addToReadingList } = useContext(SavedArticleContext);

    useEffect(() => {
        axiosDev().get('/articles')
            .then(res => {
                setArticles(res.data.data);
            })
            .catch(err => console.log(err));
    }, [])

    //Need Loading Page - Make a default one and resuse 

    return (
        <>
            <h2>Articles !</h2>
            <StyledArticleWrapper>
                {articles.map(article => (
                    <CardWrapper> 
                        <ArticleCard article={article} />
                        <button onClick={() => addToReadingList(article)}> Add To Reading List </button>
                    </CardWrapper >
                    ))
                }
            </StyledArticleWrapper>
        </>
    )
};

const StyledArticleWrapper = styled.div`
    display: flex; 
    justify-content: space-around; 
    flex-flow: row wrap;

`;

const CardWrapper = styled.div`
    display: flex; 
    flex-flow: column nowrap;
`;

export default ArticleDash; 