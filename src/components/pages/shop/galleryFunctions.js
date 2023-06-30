import image0 from '../../../images/Merch/R4R hoodie.webp';
import image1 from '../../../images/Merch/black long sleeve t-shirt.webp';
import image2 from '../../../images/Merch/Black t-shirt.webp';
import image3 from '../../../images/Merch/blue t-shirt.webp';
import image4 from '../../../images/Merch/black hoodie.webp';
import image5 from '../../../images/Merch/Todd is bad at golf t-shirt.webp';
import image6 from '../../../images/Merch/tote bag.webp';
import image7 from '../../../images/Merch/White Hoodie.webp';
import image8 from '../../../images/Merch/white long sleeve t-shirt.webp';
import image9 from '../../../images/Merch/white t-shirt.webp';

const merchImages = [image0, image1, image2, image3, image4, image5, image6, image7, image8, image9];
var galleryNum = 0;

export function moveGallery() {

    function isInBounds(lower, upper, input) {
        let difference = 0;
        if (input > upper) {
            difference = input - upper -1;
            return (lower + difference);
        }
        else if (input < lower) {
            difference = lower - input -1;
            return (upper - difference);
        }
        else return input;
    };

    const gallery = document.getElementById('imagesWrapper');
   gallery.style.opacity = 0.0;
    setTimeout(() => {
        for (let i = 0; i < 3; i++) {
            document.getElementById('image'+i).src = merchImages[isInBounds(0, 9, (galleryNum%10) +i)];
        };
       gallery.style.opacity = 1.0;
    }, 1010);
    galleryNum++;
};

export function refreshGallery() {
    if (galleryNum%10 != 0) {   //only activate if the gallery is not in default position
        const gallery = document.getElementById('imagesWrapper');
        gallery.style.opacity = 0.0;
        setTimeout(() => {
            for (let i = 0; i < 3; i++) {
                document.getElementById('image'+i).src = merchImages[i];
            };
            setTimeout(() => {
                gallery.style.opacity = 1.0;
            }, 50);
        }, 1010);
        galleryNum = 0;
    };
};