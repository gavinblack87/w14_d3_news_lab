import React from 'react';
import ArticleSelector from '../component/ArticleSelector.js'


class NewsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      currentArticle: null
    };
  }

  componentDidMount(){
    const url = "https://hacker-news.firebaseio.com/v0/topstories.json";

    fetch(url)
    .then(res => res.json())
    .then(articles => this.setState({articles: articles}))
    .catch(err => console.error);
  }

  render(){
    return(
      <>
        <h1>Articles</h1>

      </>
    )
  }

}





export default NewsContainer;
