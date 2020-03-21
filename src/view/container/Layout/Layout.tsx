import React, { Component } from "react";
import './Layout.css';
import { Toolbar } from "../../components/Navigation/Toolbar/Toolbar";
import { SideDrawer } from "../../components/Navigation/SideDrawer/SideDrawer";
interface Props {

}

interface State {
    showSideDrawer: boolean
}

export class Layout extends Component<Props, State>{

    constructor(props: Props) {
        super(props)
        this.state = {
            showSideDrawer: false
        }
    }

    render() {
        return (
            <div>
                <Toolbar DrawerToogleClicked={this.sideDrawerToogleHandler}></Toolbar>
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}></SideDrawer>
                <main className="Layout-Content">
                    {this.props.children}
                </main>
            </div>
        );
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false })
    }

    sideDrawerToogleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }
        })
    }

}