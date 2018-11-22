import React, { Component } from 'react';
import Header from './components/Header';
import News from './components/News';
import Form from './components/Form';

class App extends Component {

  state = {
    news : []
  }


  componentDidMount(){
    this.getNews();
  }

  //param by defult value in funciton: 
  getNews = (category = 'general') => {

    let URL = `https://newsapi.org/v2/top-headlines?country=jp&category=${category}&apiKey=fe4ee14f3b17495594cea43b30f5abf4`

    //Fecth

    fetch(URL)
    .then( response => {
      return response.json();
    })
      .then(news => {
        this.setState({
          news : news.articles
        })
      })
  }

  render() {
    return (
      <div className="contenedor-app">
        <Header title='React News'/>

        <div className="container white contenedor-noticias">
            <Form getNews={this.getNews}/>
            <News news={this.state.news}/>
        </div>
        
      </div>
    );
  }
}

export default App;
