import api, { API } from '../API'

export const TextSearch = async () => {
	const res = await api.get(`${API}/search/`)
	return res.data
}
