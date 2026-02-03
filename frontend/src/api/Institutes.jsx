import api, { API } from '../API'

export const GetAllInstitutes = async () => {
	const res = await api.get(`${API}/institutes/`)
	return res.data
}
export const GetInstituteByID = async id => {
	const res = await api.get(`${API}/institutes/${id}`)
	return res.data
}
