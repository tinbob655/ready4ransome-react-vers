import React, {Component} from 'react';
import footerImage from '../images/r4r alt.jpg';

class Footer extends Component {

    render() {
        return (
            <div id="footer">
                <br/>Created with Will R's brain
                <br/>Ready4Ransome is not responsible for any eliminating of opposing parties or removal of opposing party members.
                <br/>All rights reserved ready4ransome®©™.ltd.inc.org.net.co.uk
                <br/>ready4ransome®©™.ltd.inc.org.net.co.uk is a credit broker not a lender
                <br/>Music from NewRinaldi by Alex P and Will R
                <img src={footerImage} className="footerImage centered"/>
            </div>
        );
    };
};

export default Footer;