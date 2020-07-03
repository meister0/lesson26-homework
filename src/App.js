import React, { Component } from 'react';
import ContactData from './containers/ContactData/ContactData';
import WithErrorHandler from './hoc/WithErrorHandler/WithErrorHandler';

class App extends Component {
	render() {
		return <ContactData />;
	}
}

export default WithErrorHandler(App);
