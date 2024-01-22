import axios from "axios"

const URI = import.meta.env.VITE_URI

export const getRegisterList = async () => {
    try {
        return await axios.get(`${URI}/api/list/login_all`)
            .then((res) => {
                return res.data
            })
    }
    catch (e) {
        return {code:-1, message:'Unable to connect to our server.Try again'}
    }
}