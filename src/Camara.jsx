import {useRef, useEffect, useCallback} from 'react';

function Camara(){
	const vid = useRef(null);
	const openCamera = useCallback(async () => {
		const stream = await navigator.mediaDevices.getUserMedia({video : true});
		vid.current.srcObject = stream;
	},[vid]);
	
	useEffect(() => {
		openCamera();
	});

	return(
		<>
			<div className="row">
				<div className="col-md-6">
					<video autoPlay ref={vid}/>
				</div>
				<div className="col-md-6">
					<h2>Latas en buen estado: #</h2><br/>
					<h2>Latas en mal estado: #</h2><br/>
					<h2>Latas totales: #</h2><br/>
				</div>
			</div>
		</>
	);
}

export default Camara;