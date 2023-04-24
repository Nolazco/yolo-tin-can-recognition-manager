function TunaLogo({size = 32, center = false}){
	return(
		<img src="https://2.bp.blogspot.com/-Nx12FaAGIUg/Wx5kZWbliHI/AAAAAAAAhaU/5ZkmnXVmf_AqLQHtEfg3Kv16Rbh1JcKXgCLcBGAs/s1600/personaje-de-dibujos-animados-de-atun_11460-3818.jpg" alt="atun feliz"
		 style={{
		 	width: size,
		 	maxWidth: '100%',
		 	maxHeight: '100%',
		 	display: 'block',
		 	objectFit: 'cover',
		 	objectPosition: 'center',
		 	margin: center?'auto':''
		 }}/>
	);
}

export default TunaLogo;