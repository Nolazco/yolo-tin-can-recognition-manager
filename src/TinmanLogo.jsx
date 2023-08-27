import Tinman from './img/gitfish.png';

function TinmanLogo({size = 55, center = false}){
	return(
		<img src={Tinman} alt="lata feliz"
		 style={{
		 	width: size,
		 	height: size,
		 	maxWidth: '100%',
		 	maxHeight: '100%',
		 	display: 'block',
		 	objectFit: 'cover',
		 	objectPosition: 'center',
		 	margin: center?'auto':'',
		 	borderRadius: '50%',
		 	vertialAlign: "middle"
		 }}/>
	);
}

export default TinmanLogo;