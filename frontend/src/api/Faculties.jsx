import api, { API } from '../API'

export const GetAllFaculties = async () => {
	const res = await api.get(`${API}/faculties/`)
	return res.data
}
export const GetFacultiesByID = async id => {
	const res = await api.get(`${API}/faculties/by/id/${id}`)
	return res.data
}
export const GetFacultiesByInstituteID = async id => {
	const res = await api.get(`${API}/faculties/by/institute/${id}`)
	return res.data
}
