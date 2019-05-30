import React from 'react';
import App from 'App';

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