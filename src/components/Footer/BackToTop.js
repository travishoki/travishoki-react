import React, { Component } from 'react';

import { scrollWindow } from './Footer.helpers';

class BackToTop extends Component {
    constructor(props) {
        super(props);

        this.scrollToTop = this.scrollToTop.bind(this);
    }

    scrollStep(){
        const scrollStepInPx = 50;

        if (window.pageYOffset === 0) {
            clearInterval(this.state.intervalId);
        }

        scrollWindow(0, window.pageYOffset - scrollStepInPx);
    }

    scrollToTop(){
        const delayInMs = 16.66;
        let intervalId = setInterval(this.scrollStep.bind(this), delayInMs);

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
