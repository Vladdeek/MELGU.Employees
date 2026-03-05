import api, { API } from '../API'

export const GetAllUsers = async (limit, page) => {
	const res = await api.get(`${API}/users/?limit=${limit}&offset=${page}`)
	return res.data
}
export const GetUserByID = async id => {
	const res = await api.get(`${API}/users/${id}`)
	return res.data
}
