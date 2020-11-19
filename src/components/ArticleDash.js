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

    //Going to manage rating through context as I have allredy set it up - more efficent route would have been to use the API for evertyhign, would only need component state for remaining functionality

    return (
        <>
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
    margin-top: 3rem;

`;

const CardWrapper = styled.div`
    display: flex; 
    flex-flow: column nowrap;
    margin-bottom: 3rem;

    button {
        width: 15rem;
        margin: auto;
        padding: 2%;
        font-weight: bold;
        font-size: 1rem;
        background: white; 
        border: 3px solid #2f2f3a;
        transition: 1s;

        &:hover {
            color: white; 
            background-color: #2f2f3a;
            border-color: dodgerblue;
        }
    }
`;

export default ArticleDash; 