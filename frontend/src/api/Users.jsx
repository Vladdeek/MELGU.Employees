import api, { API } from '../API'

export const GetAllUsers = async () => {
	const res = await api.get(`${API}/users/`)
	return res.data
}
export const GetUserByID = async id => {
	const res = await api.get(`${API}/users/${id}`)
	return res.data
}
