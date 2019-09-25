import React from 'react';

const ArticleSelector = (props) => {
  const options = props.articles.map((article, index) => {
    return <option value={index} key={index}>
    {article.title}
    </option>
  })

  function handleChange(event){
    props.onArticleSelected(event.target.value)
  }

  return (
    <select id="article-selector" defaultValue="default" onChange={handleChange}>
    <option disabled value="default">Choose a Story</option>
    {options}
    </select>
  )
}

export default ArticleSelector;
