import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { axiosDev } from '../utils/axiosDev'; 
import ArticleCard from './ArticleCard';


const ArticleDash = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axiosDev().get('/articles')
            .then(res => {
                setArticles(res.data.data);
            })
            .catch(err => console.log(err));
    }, [])


    return (
        <>
            <h2>Articles !</h2>
            <StyledArticleWrapper>
                {articles.map(article => <ArticleCard article={article} />)}
            </StyledArticleWrapper>
        </>
    )
};

const StyledArticleWrapper = styled.div`
    display: flex; 
    justify-content: space-around; 
    flex-flow: row wrap;

`;

export default ArticleDash; 