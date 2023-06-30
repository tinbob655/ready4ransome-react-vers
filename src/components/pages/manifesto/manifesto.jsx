import React, {Component} from 'react';
import { getManifestoBullets } from './getManifestoBullets';

class Manifesto extends Component {

    render() {
        return (
            <React.Fragment>
                <h1>
                    The Ransome party manifesto:
                </h1>
                <div id="content">
                    <h2>
                        Obey the manifesto or talk to the cruel fist of Mr Ransome
                    </h2>
                    {getManifestoBullets()}
                </div>
            </React.Fragment>
        );
    };
};

export default Manifesto;