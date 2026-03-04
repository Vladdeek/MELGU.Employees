import api, { API } from '../API'

export const TextSearch = async term => {
	const res = await api.get(`${API}/search?term=${term}`)
	return res.data
}
