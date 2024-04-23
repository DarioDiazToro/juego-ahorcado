import imge0 from '../assets/0.png';
import imge1 from '../assets/1.png';
import imge2 from '../assets/2.png';
import imge3 from '../assets/3.png';
import imge4 from '../assets/4.png';
import imge5 from '../assets/5.png';
import imge6 from '../assets/6.png';
import imge7 from '../assets/7.png';
import imge8 from '../assets/8.png';
import imge9 from '../assets/9.png';

const images: string[] = [
    imge0,
    imge1,
    imge2,
    imge3,
    imge4,
    imge5,
    imge6,
    imge7,
    imge8,
    imge9
];

interface Props {
    imageNumber:number
}

export const HangImage =({imageNumber}:Props)=>{

     if(imageNumber >=9){
        imageNumber = 9;
     }else if(imageNumber<=0){
        imageNumber = 0;
     }
    return (
        <img src={ images[imageNumber]} 
        alt="Hang image" 
        style={{width:250}}
        />  
    );
};