import styled from 'styled-components';

const ArticleCard = ({ article }) => {

    return (
        <StyledCard key={article.id}>
            <h3>{article.title}</h3>
            <img src={article.image} alt="Cool Shot"/>
            <p>{article.summary}</p>
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