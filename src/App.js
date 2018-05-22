import React from 'react';

import router from './utilities/router';
import './styles/App.css';

class App extends React.Component {
	render() {
		return (
			<div>
				{router}
			</div>
		);
	}
}

export default App;
