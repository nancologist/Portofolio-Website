import React from "react"
import {
    TransitionGroup,
    Transition as ReactTransition,
} from "react-transition-group"

const timeout = 500;
const getTransitionStyles = {
    entering: {
        position: `absolute`,
        opacity: 0,
    },
    entered: {
        transition: `opacity ${timeout}ms ease-in-out`,
        opacity: 1,
    },
    exiting: {
        transition: `opacity ${timeout}ms ease-in-out`,
        opacity: 0,
    },
};

class Transition extends React.PureComponent {
    state = {
        pathname: '',
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.location && prevState.pathname !== this.props.location.pathname) {
            this.setState({pathname: this.props.location.pathname})
        }
    }

    componentWillUnmount() {
        this.setState({pathname: ''})
    }

    render() {
        console.log(this.props.children);
        return (
            <TransitionGroup>
                <ReactTransition
                    key={this.state.pathname}
                    timeout={{
                        enter: timeout,
                        exit: timeout,
                    }}
                >
                    {status => (
                        <div
                            style={{
                                ...getTransitionStyles[status],
                            }}
                        >
                            {this.props.children}
                        </div>
                    )}
                </ReactTransition>
            </TransitionGroup>
        )
    }
}
export default Transition