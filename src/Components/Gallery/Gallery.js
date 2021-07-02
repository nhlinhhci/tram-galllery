import React, { useState } from 'react';
import './Gallery.scss';
import CloseIcon from '@material-ui/icons/Close';

import Img1 from '../../img/image0.jpeg';
import Img2 from '../../img/image1.jpeg';
import Img3 from '../../img/image2.jpeg';
import Img4 from '../../img/image3.jpeg';
import Img5 from '../../img/image4.jpeg';
import Img6 from '../../img/image5.jpeg';

export default function Gallery() {
  let data = [
    {
      id: 1,
      src: Img1,
    },
    {
      id: 2,
      src: Img2,
    },
    {
      id: 3,
      src: Img3,
    },
    {
      id: 4,
      src: Img4,
    },
    {
      id: 5,
      src: Img5,
    },
    {
      id: 6,
      src: Img6,
    },
  ];

  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState('');

  const getImg = (src) => {
    setTempImgSrc(src);
    setModel(true);
  };

  return (
    <>
      <div className={model ? 'model open' : 'model'}>
        <img src={tempImgSrc} alt='none' />
        <CloseIcon onClick={() => setModel(false)} />
      </div>

      <div className='gallery p-10 flex-1'>
        {data.map((item, index) => {
          return (
            <div className='pics' key={index} onClick={() => getImg(item.src)}>
              <img
                src={item.src}
                alt={'failed to load'}
                style={{ width: '100%' }}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
