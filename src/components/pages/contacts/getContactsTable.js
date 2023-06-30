import React from 'react';
//import streaming service logos
import spotify from '../../../images/logos/spotify logo.svg';
import reddit from '../../../images/logos/reddit logo.svg';
import twitter from '../../../images/logos/twitter logo.svg';
import youTube from '../../../images/logos/youtube logo.svg';
import twitch from '../../../images/logos/twitch logo.svg';
import payPal from '../../../images/logos/paypal logo.svg';
import xbox from '../../../images/logos/xbox logo.svg';

const state = {
    streamingServiesImages: [spotify, reddit, twitter, youTube, twitch, payPal, xbox],
    streamingServicesDescriptions: [
        "Mr Ransome's Spotify",
        "Mr Ransome's Reddit",
        "Mr Ransome's Twitter",
        "Mr Ransome's YouTube",
        "Mr Ransome's Twitch",
        "Just search 'Hayden Ransome' on PayPal",
        "Just search 'Vinyl5five' on Xbox",
    ],
    streamingServiceLinks: [
        'https://open.spotify.com/artist/1dBbc3XltRauSX0dRpRUE6',
        'https://www.reddit.com/user/Vinyl5five/',
        'https://twitter.com/ItzVinyl5five',
        'https://youtube.com/@Vinyl5five',
        'https://www.twitch.tv/vinyl5five',
        'https://www.paypal.com/signin',
        'https://www.xbox.com/en-GB/live',
    ],
};

export function getContactsTable() {
    let tableHTML = [];
    for (let row = 0; row < state.streamingServicesDescriptions.length; row++) {
        tableHTML.push(<React.Fragment>
            <tr>
                <td colSpan="2">
                    <div className="contentSection"></div>
                </td>
            </tr>
            <tr>
                {getTableRow(row)}
            </tr>
        </React.Fragment>);
    };

    return tableHTML;
};

function getStreamingServiceDescription(row) {
    return (
        <a target="_blank" href={state.streamingServiceLinks[row]}>
            <h3>
                {state.streamingServicesDescriptions[row]}
            </h3>
        </a>
    );
};

function getStreamingServiceImage(row) {
    return (
        <img src={state.streamingServiesImages[row]} class="growOnHover"/>
    )
}

function getTableRow(row) {
    return (
        <React.Fragment>
            <td>
                {row%2 == 1 ? (
                    getStreamingServiceDescription(row)
                ) : (
                    getStreamingServiceImage(row)
                )}
            </td>
            <td>
                {row%2 == 1 ? (
                    getStreamingServiceImage(row)
                ) : (
                    getStreamingServiceDescription(row)
                )}
            </td>
        </React.Fragment>
    )
};