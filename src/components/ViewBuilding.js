import React from 'react';

class ViewBuilding extends React.Component {
	
	render() {
		const building = this.props.data
		.filter(name=>{
            return name.id === this.props.selectedBuilding
        })
		.map(id=>{
			if(id.coordinates){
				return(
					<div>
						<p>Building name: {id.name}</p>
						<ul>
							<li>Code: {id.code}</li>
							<li>Address: {id.address}</li>
							<li>Latitude: {id.coordinates.latitude}</li>
							<li>Longitude: {id.coordinates.longitude}</li>

						</ul>
					</div>
				)
			}
			else{
				return(
					<div>
						<p>Building name: {id.name}</p>
						<ul>
							<li>Code: {id.code}</li>
						</ul>
					</div>
				)
			}
		})
		console.log(this.props.selectedBuilding)
		return (
			<div>
				<p>
					{' '}
					<h2>Click on a name to view more information</h2>
					{building}	
					
				</p>
			</div>
		);
	}
}
export default ViewBuilding;
