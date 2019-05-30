import React from 'react';
import { render } from 'react-dom';
import Clicker from './Clicker';
import Display from './Display';

class App extends React.Component {
	state = {
		number = 0
	}

	ChangeNumber = () => {
		this.setState(number = this.state.number +1 );
	}
	render() {
		return (
			<div>
				<Clicker ChangeNumber={this.ChangeNumber} />
				<Display num={this.state.number} />
			</div>
			);
	}
}
render(<App />, document.getElementById('root'));