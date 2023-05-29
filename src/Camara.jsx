import * as React from 'react';
import {useRef, useEffect, useCallback} from 'react';
import TinmanLogo from './TinmanLogo';

/************* Declaración de la camara*/

function Camara(){
	const vid = useRef(null);
	const openCamera = useCallback(async () => {
		const stream = await navigator.mediaDevices.getUserMedia({video : true});
		vid.current.srcObject = stream;
	},[vid]);
	
	useEffect(() => {
		openCamera();
	});

	return( /************* Cuerpo del programa */
	<>

	<div className='rowCam'>
			{/*<video class="esp-cam" autoPlay ref={vid}/>*/}
			<img className="esp-cam" src="http://localhost:8080"/>
  </div>
 
	</>

	);

}
export default Camara;