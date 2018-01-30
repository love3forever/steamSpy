import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Container } from 'native-base'
import {doLogin} from './action'

class Login extends Component {
    componentDidMount = () => {
        const {dispatch} = this.props
        dispatch(doLogin("wangmeng","abc@123"))
    }
    

    render() {
        return (
            <Container></Container>
        )
    }
}

export default connect()(Login)  
