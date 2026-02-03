import api, { API } from '../API'

export const GetAllStructuralUnits = async () => {
	const res = await api.get(`${API}/structural-units/`)
	return res.data
}
export const GetStructuralUnitsByID = async id => {
	const res = await api.get(`${API}/structural-units/${id}`)
	return res.data
}
export const GetStructuralUnitsEmployees = async id => {
	const res = await api.get(`${API}/structural-units/employees/${id}`)
	return res.data
}
export const GetSubStructuralUnitsByID = async id => {
	const res = await api.get(`${API}/structural-units/sub/${id}`)
	return res.data
}
