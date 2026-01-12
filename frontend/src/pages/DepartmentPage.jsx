import { useParams } from 'react-router-dom'

const DepartmentPage = () => {
	const { departmentName } = useParams()
	return <div>Departments Page / {departmentName}</div>
}

export default DepartmentPage
