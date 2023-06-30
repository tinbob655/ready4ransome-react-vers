import React, {Component} from 'react';
import '../hamburger.css';

class HeaderButton extends Component {

    render() {
        return (
            <React.Fragment>
                <button id="menu-button" className={'hamburger hamburger--spring menu'} type="button" onClick={function() {
                    document.getElementById('menu-button').classList.toggle('is-active');
                    document.getElementById('header').classList.toggle('shown');
                }}>
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
            </React.Fragment>
        );
    };
};

export default HeaderButton;