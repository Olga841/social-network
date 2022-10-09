import React from "react";
import axios from "axios";
import {Header} from "./Header";
import {AuthType, setAuthData, toggleIsFetching} from "./redux/auth-reducer";
import {connect} from "react-redux";
import {AppStateType} from "./redux/redux-store";

export type AuthPropsType = {
    data: {
        id: number | null
        email: string | null
        login: string | null
    }
    isFetching: boolean
    setAuthData: (data: AuthType) => void
    toggleIsFetching: (isFetching: boolean) => void
}

class HeaderContainer extends React.Component <AuthPropsType> {
    componentDidMount() {
        debugger
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(response => {
            debugger
            if (response.data.resultCode === 0) {
                this.props.setAuthData(response.data.data)
            }
        })
    }

    render() {
        return <Header {...this.props}/>
    }

}

const mapStateToProps = (state: AppStateType): AuthType => {
    return {
        data: {
            id: state.auth.data.id,
            email: state.auth.data.email,
            login: state.auth.data.login
        },
        isFetching: state.auth.isFetching
    }
}

export default connect(mapStateToProps, {setAuthData, toggleIsFetching})(HeaderContainer)