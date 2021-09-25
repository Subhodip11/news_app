import React,{Component} from 'react';
import NewsItem from './NewsItem';


export default class NewsSection extends Component{
        constructor(){
            super();
            this.state={
                articles: [],
                page: 1,
                pageCounter: 1
            }
        }
       async componentDidMount(){
          //Normal promise return way to fetch the data
            /*fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=6ba9ffac334145829148831217513680')
          .then((data)=>
          data.json().then(data=>console.log(data))
          .catch(err=>console.log(err))
          )
          .catch(err=>console.log(err))*/    
          //using async await to resolve the promise returned by fetch
          let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=9`;
          let response=await fetch(url);
          let data=await response.json();
          console.log(data,url);
          this.setState({
              articles: data.articles
          })
          this.totalPages=Math.ceil(data.totalResults/9);
        }

       previousPage=async ()=>{
            let response=await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page-1}&pageSize=9`);
            let data=await response.json();
            console.log(data);
            this.setState({
                articles: data.articles,
                page: this.state.page-1,
                pageCounter: this.state.pageCounter-1
            })
        }
       nextPage=async ()=>{
            let response=await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=9`);
            let data=await response.json();
            this.setState({
                articles: data.articles,
                page: this.state.page+1,
                pageCounter: this.state.pageCounter+1
            })
        }
    render(){
        return (
            <div className="container">
                <h2 className='text-center my-2'>News Section-Top HeadLines</h2>
            <div className="row">
            {this.state.articles.map((element)=>{
                return  <div className='col-md-4' key={element.url}> 
                <NewsItem title={element.title} content={element.description} urlToImage={element.urlToImage} url={element.url}/>
                </div>
            })}
            </div>
              <div className="container my-3 d-flex justify-content-between">
                <button className="btn btn-dark" onClick={this.previousPage} disabled={this.state.page<=1}>&larr;Previous</button>
                <button className="btn btn-dark" onClick={this.nextPage} disabled={this.state.pageCounter>=this.totalPages}>Next&rarr;</button>
              </div>
            </div>
        )
    }
}