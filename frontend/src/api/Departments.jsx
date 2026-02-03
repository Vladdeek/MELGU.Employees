import api, { API } from '../API'

export const GetAllDepartment = async () => {
	const res = await api.get(`${API}/departments/`)
	return res.data
}
export const GetDepartmentByID = async id => {
	const res = await api.get(`${API}/department/by/id/${id}`)
	return res.data
}
export const GetDepartmentByFacultyID = async id => {
	const res = await api.get(`${API}/department/by/faculty/${id}`)
	return res.data
}
