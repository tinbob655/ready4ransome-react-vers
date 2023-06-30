import React from "react";

const state = {
    manifestoBullets: [
        '• Tuesday means give Mr Ransome money day',
        '• Buid London a second eye (for seeing)',
        '• Subscribe to NewRinaldi on any streaming service',
        '• Vote Ransome',
        '• Anyone caught not abding by the manifesto will be removed (violently)',
    ],
};

export function getManifestoBullets() {
    let manifestoHTML = [];
    for (let i = 0 ; i < state.manifestoBullets.length; i++) {
        manifestoHTML.push(
            <React.Fragment>
                <div className="contentSection"></div>
                <p>
                    {state.manifestoBullets[i]}
                </p>
            </React.Fragment>
        );
    };
    return manifestoHTML;
};