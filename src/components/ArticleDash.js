import { useState, useEffect } from 'react';

import { axiosDev } from '../utils/axiosDev'; 

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
            {
            articles.map(article => (
                    <div key={article.id} className="articleCard">
                        <h3>{article.title}</h3>
                        <img src={article.image} alt="Cool Shot"/>
                        <p>{article.summary}</p>
                    </div>
                )
            )
            }
        </>
    )
};

export default ArticleDash; 