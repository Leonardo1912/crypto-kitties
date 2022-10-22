import axios from "axios";

const instance = axios.create({
    baseURL: "https://ftl-cryptokitties.fly.dev/api/"
})

export const GetCats = (page, count = 50, currentSort, directionSort) => {
    return instance.get(`/crypto_kitties?page=${page}&per_page=${count}&sort_by=${currentSort}&sort_dir=${directionSort ? "asc" : "desc"}`).then(response => response.data)
}