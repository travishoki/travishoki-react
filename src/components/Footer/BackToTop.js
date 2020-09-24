import React, { Component } from 'react';

import { scrollWindow } from './Footer.helpers';

const DELAY_IN_MS = 16.66;
const SCROLL_STEPS_IN_PX = 50;

class BackToTop extends Component {
    constructor(props) {
        super(props);

		this.state = {
			intervalId: null,
		};

        this.scrollToTop = this.scrollToTop.bind(this);
    }

    scrollStep(){
        if (window.pageYOffset === 0) {
            clearInterval(this.state.intervalId);
        }

		const yPosition = window.pageYOffset - SCROLL_STEPS_IN_PX;

        scrollWindow(0, yPosition);
    }

    scrollToTop(){
        const intervalId = setInterval(() => {
			this.scrollStep();
		}, DELAY_IN_MS);

        this.setState({ intervalId });
    }

    render() {
        return (
            <i
				className="circ-sm fa fa-angle-up back-to-top"
				onClick={this.scrollToTop}
			/>
        );
    }
}

export default BackToTop;
