import React,{Component} from 'react';

export default class Form extends Component {

    categoryRef = React.createRef();

    searchCategories = (e) =>{

        e.preventDefault();

        this.props.getNews(this.categoryRef.current.value);

    }
    render() {
        return (
            <div className="buscador row">
                <div className="col s12 m8 offset-2">
                    <form onSubmit={this.searchCategories}>
                        <h2>News per categories</h2>
                        <div className="input-field col s12 m8">
                            <select ref={this.categoryRef}>
                                <option value="general" defaultValue>General</option>
                                <option value="business" defaultValue>Business</option>
                                <option value="entertaiment" defaultValue>Entertaiment</option>
                                <option value="health" defaultValue>Health</option>
                                <option value="science" defaultValue>Science</option>
                                <option value="sports" defaultValue>Sports</option>
                                <option value="tecnology" defaultValue>Tecnology</option>
                            </select>
                        </div>
                        <div className="input-field col s12 m4 enviar">
                            <input className="btn amber darken-3" type="submit" value="Search!"/>
                        </div>


                    </form>
                </div>
                
            </div>
        );
    }
}