import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Auxilliary';
import classes from './WithErrorHandler.module.css';

const WithErrorHandler = (WrappedComponent) => {
	return class extends Component {
		constructor(props) {
			super(props);
			this.state = {
				error: null,
				errorInfo: null,
			};
		}

		componentDidCatch(error, errorInfo) {
			this.setState({ error: error, errorInfo: errorInfo });
		}

		errorConfirmedHandler = () => {
			this.setState({ error: null, errorInfo: null });
		};

		render() {
			let error = null;
			if (this.state.error) {
				error = (
					<div className={classes.Error}>
						{this.state.error && this.state.error.toString()}
						<br />
						{this.state.errorInfo.componentStack};
					</div>
				);
			}
			return (
				<Aux>
					<Modal
						show={this.state.error}
						modalClosed={this.errorConfirmedHandler}
					>
						{this.state.error ? error : null}
					</Modal>
					<WrappedComponent {...this.props} />;
				</Aux>
			);
		}
	};
};

export default WithErrorHandler;
