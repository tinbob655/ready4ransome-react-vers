import React, {Component} from 'react';
//import button images
import refreshButton from '../../../images/interactive elements/refresh.png';
import moveButton from '../../../images/interactive elements/right arrow.png';
//import merch images
import image0 from '../../../images/Merch/R4R hoodie.webp';
import image1 from '../../../images/Merch/black long sleeve t-shirt.webp';
import image2 from '../../../images/Merch/Black t-shirt.webp';
//import functions
import {moveGallery, refreshGallery} from './galleryFunctions.js';

const merchImages = [image0, image1, image2];

for (let i = 0; i < merchImages.length; i++) {  //preloads all images to make gallery transitions smoother
    let img = new Image();
    img.src = merchImages[i];
};

class Shop extends Component {

    state  = {
        styles: {
            galleryWrapper: {
                backgroundColor: '#676768',
                borderRadius: '50px',
                boxShadow: '0 0 10px 0 #676768',
                padding: '0 20px',
                width: '90%',
                display: 'block',
                margin: '10px auto 0 auto',
            },
            galleryImage: {
                width: 'min-content',
                height: 'auto',
            },
            buttonImage: {
                width: '75px',
                height: '75px',
            },
            imagesWrapper: {
                transitionProperty: 'opacity',
                transitionDuration: '0.5s',
                width: '100%',
                display: 'block',
                margin: 'auto',
            },
        },
    };

    render() {
        return (
            <React.Fragment>
                <h1>
                    Big merch (some say too big)
                </h1>
                <div id="content">
                    <h2>
                        Buy the merch, or suffer the consequences
                    </h2>
                    <div id="galleryWrapper" style={this.state.styles.galleryWrapper}>
                        <p>
                        Ready4Ransome have partenered up with NewRinaldi. This is 100% absolutley not because they were made by the same
                        2 people its a different reason
                        </p>
                        <div className="contentSection"></div>.
                        <table style={{tableLayout: 'unset'}}>
                            <thead>
                                <tr>
                                    <td style={{width: '10%'}}>        {/* refresh button */}
                                        <button type="button" onClick={function() {refreshGallery()}}>
                                            <img src={refreshButton} style={this.state.styles.buttonImage}/>
                                        </button>
                                    </td>
                                    <td style={{width: '80%'}}>
                                        <div id="imagesWrapper" style={this.state.styles.imagesWrapper}>
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <td style={{width: '27.5%'}}>        {/* image 0 */}
                                                            <img src={merchImages[0]} style={this.state.styles.galleryImage} id="image0"/>
                                                        </td>

                                                        <td style={{width: '45%'}}>        {/* image 1 */}
                                                            <img src={merchImages[1]} style={this.state.styles.galleryImage} id="image1"/>
                                                        </td>
                                                        
                                                        <td style={{width: '27.5%'}}>        {/* image 2 */}
                                                            <img src={merchImages[2]} style={this.state.styles.galleryImage} id="image2"/>
                                                        </td>
                                                    </tr>
                                                </thead>
                                            </table>
                                        </div>
                                    </td>
                                    <td style={{width: '10%'}}>        {/* navigate button */}
                                        <button type="button" onClick={function() {moveGallery()}}>
                                            <img src={moveButton} style={this.state.styles.buttonImage}/>
                                        </button>
                                    </td>
                                </tr>
                            </thead>
                        </table>
                    </div>
                    <a href="https://www.newrinaldi.site/site/pages/desktop/merch.html" target="_blank">
                        <h3>
                            Get ya merch here <br/> (and other NewRinaldi stuff)
                        </h3>
                    </a>
                </div>
            </React.Fragment>
        );
    };
};

export default Shop;