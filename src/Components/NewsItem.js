import React,{Component} from 'react';

export default class NewsItem extends Component{
    render(){
        return(
            <div>
              <div className="card mx-auto my-2" style={{width: '18rem'}}>
                  <img src={this.props.urlToImage} className="card-img-top" alt="Image Not Found" />
                  <div className="card-body">
                    <h5 className="card-title">{this.props.title?this.props.title:"Title For This Article is Not Available"}</h5>
                    <p className="card-text">{this.props.content?this.props.content:"Content For This Article is Not Available"}</p>
                    <a href={this.props.url} className="btn btn-primary">Read More</a>
                   </div>
               </div>
            </div>
        )
    }
}