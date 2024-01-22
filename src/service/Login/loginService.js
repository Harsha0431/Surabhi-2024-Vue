import axios from 'axios'

const URI = import.meta.env.VITE_URI

export async function loginService(data) {
    try {
      return await axios
        .post(`${URI}/api/login`, data)
        .then((res) => {
          return res.data
        })
        .catch((e) => {
          return { code: -1, message: e.message }
        })
    } catch (e) {
      return { code: -1, message: 'Unable to connect to our server. Check your network' }
    }
}

export async function verifyTokenService(token) {
  try {
    return await axios
      .post(`${URI}/api/verify_token`, { token: token })
      .then((res) => {
        return res.data
      })
      .catch((e) => {
        return { code: -1, message: e.message }
      })
  } catch (e) {
    return { code: -1, message: 'Unable to connect to our server. Check your network' }
  }
}

export async function registerService(data) {
    try {
        return await axios.post(`${URI}/api/register`, data)
            .then((res) => {
                return res.data
            })
            .catch((e) => {
                return { code: -1, message: e.message }
            })
    }
    catch (e) {
        return { code: -1, message: 'Unable to connect to our server. Check your network' }
    }
}
