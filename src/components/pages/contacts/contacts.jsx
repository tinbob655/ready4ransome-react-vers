import React, {Component} from 'react';
//import functions
import { getContactsTable } from './getContactsTable';


class Contacts extends Component {

    render() {
        return (
            <React.Fragment>
                <h1>
                    Mr Ransome can be contacted, don't expect a half decent responce tho
                </h1>
                <div id="content">
                    <h2>
                        Links to approx. several of Mr Ransome's contacts:
                    </h2>
                    <table>
                        <thead>
                            {getContactsTable()}
                        </thead>
                    </table>
                </div>
            </React.Fragment>
        );
    };
};

export default Contacts;