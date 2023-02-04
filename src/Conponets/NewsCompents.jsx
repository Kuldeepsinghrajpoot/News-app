import React, { Component } from "react";
import News from "./News";
import Spinner from "./Spinner";
import '../App.css';
import InfiniteScroll from "react-infinite-scroll-component";

import PropTypes from 'prop-types'


export default class NewsCompents extends Component {

  static propTypes = {
    country: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    pageSize: PropTypes.number.isRequired

  }
  static propTypesdefault = {
    country: 'in',
    category: 'general',
    pageSize: 5

  }
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      loading: true,
      page: 1
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - ${'News'}`;
  }

  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b75bbbbb112943b7a061d709e59e4364&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let newsData = await data.json();

    this.setState({
      totalResults: this.state.articles.concat(newsData.totalResults),
      articles: newsData.articles,
     loading: false
    })
  }

  async componentDidMount() {
    this.fetchMoreData();

  }
  fetchMoreData = async() => {

    this.setState({ page: this.state.page + 1 })
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b75bbbbb112943b7a061d709e59e4364&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
   this.setState({ loading: true })
    let data = await fetch(url);
    let newsData = await data.json();

    this.setState({
      totalResults: newsData.totalResults,
      articles: this.state.articles.concat(newsData.articles),
    loading: false
    })
  };

  render() {
    return (
      <div className="container my-3">
        <h3 className="text-center"> HomeNews -{this.capitalizeFirstLetter(this.props.category)} Top HeadLines</h3>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={"!this.state.loader&&<Spinner/>"}>

          <div className="container row">
            {this.state.articles.map((e) => {
              return (
                <div className="col-md-3 my-2" key={e.url}>
                  <News
                    title={e.title}
                    decription={e.description}
                    //imageurl={e.urlToImage}
                    imageurl={!e.urlToImage ? "https://t3.ftcdn.net/jpg/04/34/72/82/240_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg" : e.urlToImage}
                    url={e.url} author={e.author ? e.author : "Unknown"} published={e.publishedAt}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
       
      </div>
    );
  }
}
