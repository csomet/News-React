import React from 'react';
import PropTypes from 'prop-types';

const NewsItem = (props) => {
    
    const {urlToImage, source, url, title, description} = props.item;
    
    //Check if image exist. If it is null we dont show it below.
    const image = (urlToImage) ? 
        <div className="card-image">
            <img src={urlToImage} alt={title} />
            <span className="card-title">{source.name}</span>
        </div>
     : '';   

    return (
        <div className="col s12 m6 l4">
            <div className="card">
                {image}
                <div className="card-content">
                   <h3>{title}</h3>
                   <p>{description}</p>
                   <div className="card-action">
                        <a href={url} target='_blank' className="waves-effect waves-light btn">Read more...</a>
                   </div>
                </div>
            </div>
            
        </div>
    );
};

NewsItem.propTypes = {
    item : PropTypes.shape({
        urlToImage : PropTypes.string,
        url : PropTypes.string,
        title : PropTypes.string,
        description : PropTypes.string 
    })
}

export default NewsItem;

