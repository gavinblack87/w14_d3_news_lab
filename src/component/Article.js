import React from 'react';

const Article = (props) => {
  if (!props.article) return null;
  return(
    <div className="article">
    <h2>{props.article.title}</h2>

    <a href={props.article.url}>Link </a>
    </div>
  )

}

export default Article;
