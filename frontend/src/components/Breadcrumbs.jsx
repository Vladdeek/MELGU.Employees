import { useLocation } from 'react-router-dom'

const NavTrail = () => {
	const { pathname } = useLocation()
	return <div>{pathname}</div>
}
export { NavTrail }
