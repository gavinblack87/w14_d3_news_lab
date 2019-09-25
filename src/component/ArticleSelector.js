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
    <div className="article">
    <select id="article-selector" defaultValue="default" onChange={handleChange}>
    <option disabled value="default">Choose a Story</option>
    {options}
    </select>
    </div>
  )
}

export default ArticleSelector;
