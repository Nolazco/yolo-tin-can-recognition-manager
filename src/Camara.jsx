import * as React from 'react';
import {useRef, useEffect, useCallback} from 'react';

/************* Declaración de la camara*/

function Camara() {
  const vid = useRef(null);

  const openCamera = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (vid.current) {
        vid.current.srcObject = stream;
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  }, []);

  useEffect(() => {
    openCamera();
  }, [openCamera]);

  return (
    <>
      <div className='rowCam'>
        <video className="bSlate" autoPlay ref={vid} />
      </div>
    </>
  );
}

export default Camara;