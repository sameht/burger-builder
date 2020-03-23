import React, { Component, ComponentType } from "react";
import { Modal } from "../../components/UI/Modal/Modal";
import axios from '../../../service/AxiosOrder'

interface WithErrorHandlerProps {
 
}

interface State {
    error: {
        message: string | null
    } | null
}

const withErrorHandler = <P extends object>(WrappedComponent: ComponentType<P>) =>

    class WithErrorHandler extends React.Component<P & WithErrorHandlerProps, State> {
        private reqInterceptors :  number
        private resInterceptors :  number
        constructor(props: P & WithErrorHandlerProps) {
            super(props)
            this.state = {
                error: null
            };
           
            this.reqInterceptors= axios.interceptors.request.use(req => {
                console.log("no error")
                this.setState({error: null});
                return req;
            });
            this.resInterceptors= axios.interceptors.response.use(res => res, error => {
                this.setState({error: error});
            });
        }

        componentWillUnmount(){
            console.log(this.reqInterceptors, this.resInterceptors)
            axios.interceptors.request.eject(this.reqInterceptors)
            axios.interceptors.response.eject(this.resInterceptors)
        }
        render() {
            return (
                <div>
                    <Modal
                        show={this.state.error ? true : false}
                        modalClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props as P} />
                </div>
            );
        }

        errorConfirmedHandler = () => {
            this.setState({ error: null })
        }
    };

    export default withErrorHandler;