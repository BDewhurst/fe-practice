import axios from "axios"

const takeawayApi = axios.create ({
    baseURL: "https://be-takeaway.onrender.com/api"
})

export const getAllCuisines = () => {
    return takeawayApi.get(`/cuisines`).then((res) => {
        return res.data
    })
}

export const getAllRestaurants = () => {
    return takeawayApi.get(`/restaurants`).then((res) => {

        return res.data
    })
}

export const getRestaurantById = (restaurantId) => {
    return takeawayApi.get(`/restaurants/${restaurantId}`).then((res) => {
        return res.data
    })
}

export const getItemById = (restaurantId) => {
    return takeawayApi.get(`/items/${restaurantId}`).then((res) => {
        return res.data
    })
}

export const changeRating = (restaurantId, rating) => {
    return takeawayApi.patch(`restaurants/${restaurantId}`, {'inc_vote': rating}).then((res)=> {
        
        return res.data
    })
}

export const findUser = (username) => {
    return takeawayApi.get(`users/${username}`).then((res)=> {
       
        return res.data
    })
}

export const getCommentsById = (restaurantId) => {
    return takeawayApi.get(`comments/${restaurantId}`).then((res)=> {

        return res.data
    })
}   

export const getRestaurantByCuisine = (cuisine) => {
    return takeawayApi.get(`cuisines/${cuisine}`).then((res) => {
        return res.data
    })
}

export const postComment = (comment, restaurantId) => {
    return takeawayApi.post(`comments/${restaurantId}`, comment).then((res) => {
        return res.data
    })
}

export const deleteComment = (commentId) => {

    return takeawayApi.delete(`comments/${commentId}`).then((res) => {
        return res.data
    })
}
