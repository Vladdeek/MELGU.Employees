import api, { API } from '../API'

export const GetEmployeeProfileByID = async id => {
	const res = await api.get(`${API}/employee-profiles/${id}`)
	return res.data
}
export const GetSearchEmployeeProfilesByFullname = async () => {
	const res = await api.get(`${API}/employee-profiles/`)
	return res.data
}
