import React from 'react';
import ArticleSelector from '../component/ArticleSelector.js'
import Article from '../component/Article.js'
import ScoreInput from '../component/ScoreInput.js'




class NewsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      filteredArticles: [],
      currentArticle: null
    };
    this.handleArticleSelected = this.handleArticleSelected.bind(this);
    this.handleScoresSelected = this.handleScoresSelected.bind(this);
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
      .then(articles => this.setState({ articles: articles, filteredArticles: articles }))
      .catch(err => console.error);
  }

  handleArticleSelected(index){
    const selectedArticle = this.state.articles[index];
    this.setState({currentArticle: selectedArticle})
  }

  handleScoresSelected(score){
    const filteredArticles = this.state.articles.filter(article => article.score >= score);
    this.setState({filteredArticles: filteredArticles })
  }


  render(){
    return(
      <>
        <h1>The News!</h1>

        <ScoreInput onScoreSelected={this.handleScoresSelected}/>
        <br/>
        <ArticleSelector articles={this.state.filteredArticles} onArticleSelected={this.handleArticleSelected}/>
        <Article article={this.state.currentArticle}/>
      </>
    )
  }

}





export default NewsContainer;
