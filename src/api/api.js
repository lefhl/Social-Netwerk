import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  SameSite: 'lax',
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "0c3287c5-1208-4757-a404-f7921547b398"
  }
})

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
      withCredentials: true
    }).then(response => response.data)
  },
  deleteFriend(userId) {
    return instance.delete(`follow/${userId}`).then(response => response.data)
  },
  addFriend(userId) {
    return instance.post(`follow/${userId}`).then(response => response.data)
  }
}

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/` + userId).then(response => response.data)
  },
  getStatus(userId) {
    return instance.get(`profile/status/` + userId)
  },
  updateStatus(newStatus) {
    return instance.put(`profile/status/`, {
      status: newStatus
    })
  }
}

export const headerAPI = {
  auth() {
    return instance.get(`auth/me`)
  }
}
