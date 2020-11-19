import styled from 'styled-components';

import { Card } from 'antd';



const ArticleCard = ({ article }) => {

    
    return (
        <StyledCard key={article.id} >
            <h3>{article.title}</h3>
            <img alt="shot" src={article.image} />
            {/* <img src={article.image} alt="Cool Shot"/> */}
            <p>{article.summary}</p>
            <h4>Rank: {article.rank}</h4>
        </StyledCard>

        // <StyledCard key={article.id}>
        //     <h3>{article.title}</h3>
        //     <img src={article.image} alt="Cool Shot"/>
        //     <p>{article.summary}</p>
        //     <p>Rank: {article.rank}</p>
        // </StyledCard>
    )
}

const StyledCard = styled.div`
    display: flex; 
    flex-flow: column nowrap;
    border: 4px solid dodgerblue;
    width: 20rem;
    background: whitesmoke;
    padding: 2%;

    h3 {
        text-align: center;
        margin-bottom: 2%;
    }

    img {
        width: 100%;
        height: 20rem;
        object-fit: cover;
        margin-bottom: 1rem;
    }

    p {
        font-style: italic;
        margin: 1% auto;
        line-height: 1.25rem;
    }

`;

const cardStyle = {
    // height: "30vh", 
    width: "20rem", 
    border: "4px solid dodgerblue",
}

const imgStyle = {
    width: "100%", 
    objectFit: "cover"
}

export default ArticleCard; 