import React from 'react';

class Clicker extends React.Component {
	render() {
		return (
			<div >
				<button className="btn btn-warning" onClick={this.props.ChangeNumber}>click</button>
			</div>
		);
	}
}
export default Clicker;