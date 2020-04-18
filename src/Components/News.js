    import React, { Component } from 'react'
   

    export default class News extends Component {
        constructor(props) {
            super(props);
        
            this.state = {
            articles: [],
            };
        }

        componentDidMount() {
            this.GetNews();
        }
    GetNews = () => {
        let endpoint = 'http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=da4833c16fa6470cabae28985f23476d';
        let lookupOptions = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        },
        };
        fetch(endpoint, lookupOptions)
        .then(response => response.json())
        .then(data => {
            console.log(data.articles)
        
            this.setState({
            articles:data.articles,
            });
        })
        .catch(function(error) {
            throw error;
        });
    };
    formatDate(date) {
        var time = new Date(date);
        var year = time.getFullYear();
        var day = time.getDate();
        var hour = time.getHours();
        var minute = time.getMinutes();
        var month = time.getMonth() + 1;
        var composedTime = day + '/' + month + '/' + year + ' | ' + hour + ':' + (minute < 10 ? '0' + minute : minute);
        return composedTime;
      }

        render() {
            return (
                <div >
               <div className="cardsContainer">
        {this.state.articles.map((news, i) => {
          return (
            <div className="card" key={i}>
              <div className="content">
                <h3>
                  <a href={news.url} target="_blank" rel="noopener noreferrer">
                    {news.title}
                  </a>
                </h3>
                <p>{news.description}</p>
                <div className="author">
                  <p>
                    By <i>{news.author ? news.author : this.props.default}</i>
                  </p>
                  <p>{this.formatDate(news.publishedAt)}</p>
                </div>
              </div>
              <div className="image"> 
                <img src={news.urlToImage} alt="" width="200" height="100"/>
              </div>
            </div>
          );
        })}
      </div>
    </div>

  )
    }
}

