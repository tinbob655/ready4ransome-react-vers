import React, {Component} from 'react';
import HeaderButton from './headerButton';
import { changePage } from '..';

class Header extends Component {

    state = {
        pageTitles: ['Home', 'Contacts', 'Manifesto', 'Shop'],
    };

    getHeader() {
        let headerHTML = [];
        for (let i = 0; i < this.state.pageTitles.length; i++) {
            let pageTitle = this.state.pageTitles[i];
            if (pageTitle != sessionStorage.getItem('currentPage')) {
                headerHTML.push (
                    <td>
                        <button type="button" onClick={function() {changePage(pageTitle)}}>
                            <h3>
                                {pageTitle}
                            </h3>
                        </button>
                    </td>
                )
            }
        };
        return headerHTML
    };

    render() {
        return (
            <React.Fragment>
                <HeaderButton/>
                <div id="header">
                    <table>
                        <thead>
                            <tr>
                                {this.getHeader()}
                            </tr>
                        </thead>
                    </table>
                </div>
            </React.Fragment>
        );
    };
};

export default Header;