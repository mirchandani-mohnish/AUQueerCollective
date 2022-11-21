import React from 'react';
import Data from './Eventdata';
import Pin from './Pin';

function Gallery(props) {
  return (
    <div className='mainContainer flex-1 relative grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 justify-center col-start-auto grid-flow-row-dense '>
        {Data &&
            Data.map((data) => (
              <Pin
                key={data.id}
                pinSize={data.size}
                imgSrc={data.imgSrc}
                name={data.name}
                link={data.link}
              />
            ))}
    </div>
  )
}

export default Gallery;