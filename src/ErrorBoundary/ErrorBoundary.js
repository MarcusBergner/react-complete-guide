import React, { Component } from "react";



// only use error boundary for cases, if you have some code you know that it may fail !!
class ErrorBoundary extends Component{

    state={
        hasError: false,
        errorMessage: ""
    }
    componentDidCatch = (error, info)=>{
        this.setState({hasError:true, errorMessage:error});
    }
    render() {
        if(this.state.hasError){
            return <h1>{this.state.errorMessage}</h1>;
        }else{
            return this.props.children;
        }
    }
}
export default ErrorBoundary;