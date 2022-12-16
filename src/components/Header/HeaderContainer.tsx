import React from "react";
import axios from "axios";
import {Header} from "./Header";
import {AuthType, ResponseDataType, setAuthData, toggleIsFetching} from "../redux/auth-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";

export type AuthPropsType = {
    response: ResponseDataType
    isFetching: boolean
    setAuthData: (data: ResponseDataType) => void
    toggleIsFetching: (isFetching: boolean) => void
}

class HeaderContainer extends React.Component <AuthPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.1/auth/me`, {withCredentials: true}).then(response => {
            if (response.data.resultCode === 0) {
                this.props.setAuthData(response.data.data)
                this.props.response.data = response.data.data
            }
        })
    }

    render() {
        return <Header data={this.props.response.data}/>
    }

}

const mapStateToProps = (state: AppStateType): AuthType => {
    return {
        response: state.auth.response,
        isFetching: state.auth.isFetching
    }
}

export default connect(mapStateToProps, {setAuthData, toggleIsFetching})(HeaderContainer)