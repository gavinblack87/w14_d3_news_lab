import React from 'react';
// import ArticleSelector from '../component/ArticleSelector.js'


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
      .then((ids) => {
        return ids.map((id) => {
          return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
            .then(res => res.json());
        });
      })
      .then((promises) => Promise.all(promises))
      .then(articles => this.setState({ articles: articles }))
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
