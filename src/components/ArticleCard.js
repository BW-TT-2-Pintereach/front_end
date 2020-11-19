import styled from 'styled-components';

import { Card } from 'antd';



const ArticleCard = ({ article }) => {

    
    return (
        <Card key={article.id} style={cardStyle} cover={ <img style={imgStyle} alt="shot" src={article.image} />}>
            <h3>{article.title}</h3>
            {/* <img src={article.image} alt="Cool Shot"/> */}
            <p>{article.summary}</p>
            <p>Rank: {article.rank}</p>
        </Card>

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

    img {
        width: 100%;
        max-height: 20rem;
        object-fit: cover;

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