import React, {Component} from 'react';
import Home from './pages/home/home';
import Contacts from './pages/contacts/contacts';
import Manifesto from './pages/manifesto/manifesto';
import PoliticalCompass from './pages/politicalCompass/politicalCompass.tsx';
import Shop from './pages/shop/shop';

class Content extends Component {

    state = {
        pages: {
            Home: <Home/>,
            Contacts: <Contacts/>,
            Manifesto: <Manifesto/>,
            PoliticalCompass: <PoliticalCompass/>,
            Shop: <Shop/>,
        },
    };

    render() {
        return (
            <div id="contentWrapper">
                {this.getContent()}
            </div>
        );
    };

    getContent() {
        const currentPage = sessionStorage.getItem('currentPage');
        let page = this.state.pages[currentPage];
        return page;
    }
};

export default Content;