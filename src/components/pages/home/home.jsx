import React, {Component} from 'react';
import r4rlogo from '../../../images/r4r logo.png';
import { changePage } from '../../..';

class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <h1>
                    Are you ready4ransome?
                </h1>
                <div id="content">
                    <h2>
                        The correct answer was yes, everyone should be ready4ransome.com
                    </h2>
                    <div className="contentSection"></div>
                    <img src={r4rlogo} />
                    <div className="contentSection"></div>
                    <p>
                        We're Ready4Ransome. The next up and coming prime minister's official site is right here!
                    </p>
                    <div className="contentSection"></div>
                    <button type="button" onClick={function() {changePage('Shop')}}>
                        <p>
                            Mr Ransome will one day own your land, your buisiness and most likley you. Better start getting friendly with 
                            him then. Best way to do that: <h3 style={{display: 'inline'}}><u>buy something from the shop</u></h3>
                        </p>
                    </button>
                    <button type="button" onClick={function() {changePage('PoliticalCompass')}}>
                        <h3>
                            Click here to take the new ready4ransome political compass test!
                        </h3>
                    </button>
                </div>
            </React.Fragment>
        );
    };
};

export default Home;