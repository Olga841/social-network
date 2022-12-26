import axios from "axios";


export const usersAPI = {
    getAllUsers(currentPage: number, pageSize: number) {
        return axios.get<any>(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true
        }).then(response => {
            return response
        })
    },
    getUsersForPage(page: number, pageSize: number) {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${pageSize}`, {
            withCredentials: true
        }).then(response => {
            return response
        })
    },
    followUser(userId: number) {
        return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {}, {
            withCredentials: true,
            headers: {
                'API-KEY': 'cf66b916-fda5-47ac-9f68-3fafeff56e6d'
            }
        }).then(response => {
            return response
        })
    },
    unfollowUser(userId: number) {
        return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
            withCredentials: true,
            headers: {
                'API-KEY': 'cf66b916-fda5-47ac-9f68-3fafeff56e6d'
            }
        }).then(response => {
            return response
        })
    }
}

export const profileAPI = {
    getUserProfile(userId: string | undefined) {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`, {
            withCredentials: true,
            headers: {
                'API-KEY': 'cf66b916-fda5-47ac-9f68-3fafeff56e6d'
            }
        }).then(response => {
            return response
        })
    }
}

export const authAPI = {
    getAuth() {
        return axios.get(`https://social-network.samuraijs.com/api/1.1/auth/me`, {
            withCredentials: true,
            headers: {
                'API-KEY': 'cf66b916-fda5-47ac-9f68-3fafeff56e6d'
            }
        }).then(response => {
            return response
        })
    }
}
