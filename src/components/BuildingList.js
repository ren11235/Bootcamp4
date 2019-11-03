import React from 'react';

class BuilingList extends React.Component {
	render() {
		//console.log('This is my directory file', this.props.data);
		const {data} = this.props;

		const buildingList = data
		.filter(name => {
			//console.log(this.props.filterText);
			return name.name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) >= 0
			
		})
		.map(directory => {
			return (
				<p
					className = "button3"
					onClick={()=>this.props.selectedUpdate(directory.id)}
				>
					<b>({directory.code}) {directory.name}</b>
				</p>

			);
		});

		return <div>{buildingList}</div>;
	}
}
export default BuilingList;
