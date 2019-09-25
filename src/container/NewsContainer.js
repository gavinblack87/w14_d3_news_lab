import React from 'react';
import ArticleSelector from '../component/ArticleSelector.js'
import Article from '../component/Article.js'


class NewsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      value: ''
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

  handleChange = event => {
    const value = event.target.value;
    this.setState({ value: value });
  };

  render(){
    return(
      <>
        <h1>Articles</h1>
        <ArticleSelector articles={this.state.articles} onArticleSelected={this.handleChange.bind(this)}/>
        <Article article={this.state.currentArticle}/>
      </>
    )
  }








//
//     const article = this.state.articles.filter(article => {
//       return article.score
//     })
// return
//         <div>
//          Article
//           <select value={this.state.value} onChange={this.handleChange.bind(this)}>
//             {this.state.articles.map((article, index) => {
//               return <option> {article.title} </option>
//               })
//             }
//           </select>
//       </div>
//
//
//   }
}





export default NewsContainer;
