function Opciones(){
	return(
		<>
			<div className="mb-3 mx-auto" style={{ width: '50%' }}>
				<center>
					<h2 className="mx-auto">Opciones</h2><br/>
					<a className="mx-auto mb-4 btn btn-success" href="/manager">Verificador</a><br/>
					<a className="mx-auto btn btn-success" href="/trabajadores">Administrar trabajadores</a>
				</center>
			</div>
		</>
	);
}

export default Opciones;