import Tinman from './img/tinCanManInc.png';

function TinmanLogo({size = 32, center = false}){
	return(
		<img src={Tinman} alt="lata feliz"
		 style={{
		 	width: size,
		 	maxWidth: '100%',
		 	maxHeight: '100%',
		 	display: 'block',
		 	objectFit: 'cover',
		 	objectPosition: 'center',
		 	margin: center?'auto':'',
		 	borderRadius: '50%'
		 }}/>
	);
}

export default TinmanLogo;