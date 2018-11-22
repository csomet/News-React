import React,{Component} from 'react';
import NewsItem from './NewsItem';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

export default class News extends Component {

    render() {
        return (
            <div className="row">
                <TransitionGroup>
                    {this.props.news.map(n => (
                        //We have to put key in CSSTransition to work
                    <CSSTransition key={n.url} classNames="fade" timeout={500}>
                        <NewsItem item={n}/>
                    </CSSTransition>
                    
                    ))}


                </TransitionGroup>
               
              
               
            </div>
        );
    }
}