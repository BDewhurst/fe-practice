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
