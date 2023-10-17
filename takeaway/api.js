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
        console.log(res.data)
        return res.data
    })
}

