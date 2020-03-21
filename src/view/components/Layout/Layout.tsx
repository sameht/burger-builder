import React,{ Component } from "react";
import './Layout.css';
import { Toolbar } from "../Navigation/Toolbar/Toolbar";
import { SideDrawer } from "../Navigation/SideDrawer/SideDrawer";
interface Props{

}

interface State{
    showSideDrawer : boolean
}

export class Layout extends Component<Props, State>{

    constructor(props:Props){
        super(props)
        this.state={
            showSideDrawer:true
        }
    }

    render(){
        return(
            <div>
                <Toolbar DrawerToogleClicked={this.sideDrawerToogleHandler}></Toolbar>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}></SideDrawer>
                <div>toolBar SideDrawer backdrop</div>
                <main className="Layout-Content">
                    {this.props.children}
                </main>
            </div>
        );
    }

    sideDrawerClosedHandler=()=>{
        this.setState({showSideDrawer: false})
    }

    sideDrawerToogleHandler=()=>{
        this.setState((prevState)=>{
            return{showSideDrawer: !prevState.showSideDrawer}
        })
    }

}