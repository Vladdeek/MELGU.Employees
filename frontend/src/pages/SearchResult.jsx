import { NavLink, useParams, useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { GetAllDepartment } from '../api/Departments'
import { GetAllStructuralUnits } from '../api/StructuralUnits'
import { Loading } from '../components/Breadcrumbs'
import { TextSearch } from '../api/ComplexTextSearch'
import { API, FILE_API } from '../API'

const SearchResult = () => {
	const [searchResult, setSearchResult] = useState([])
	const [loading, setLoading] = useState(true)

	const [searchParams] = useSearchParams()
	const term = searchParams.get('term')

	useEffect(() => {
		const load = async () => {
			try {
				const res = await TextSearch(term)
				setSearchResult(res)
			} finally {
				setLoading(false)
			}
		}

		load()
	}, [term])

	if (loading) return <Loading className={'text-[var(--gray)]'} />

	const pluralize = word => {
		if (word === 'Сотрудник') return 'Сотрудники'
		return word + 'ы'
	}

	return (
		<div className='w-full flex flex-col gap-5'>
			{searchResult &&
				Object.entries(searchResult).map(([key, value]) => (
					<div key={key}>
						<div className='flex items-center gap-1 ml-1'>
							<p className='text-xl font-semibold text-[var(--text)]'>
								{pluralize(key)}
							</p>
							<p className='text-md font-thin text-[var(--gray)]'>
								{value.length}
							</p>
						</div>

						<div className='rounded-md border border-[var(--border)] h-full overflow-hidden shadow-[var(--shadow)]'>
							{value.map((item, idx) => {
								return (
									<NavLink
										key={idx}
										to={`../${key === 'Сотрудник' ? 'employee' : 'departments'}/${item.entity_id}`}
										className='block'
									>
										<motion.div
											initial={{ opacity: 0, x: -8 }}
											animate={{ opacity: 1, x: 0 }}
											exit={{ opacity: 0, x: -8 }}
											transition={{ duration: 0.2, delay: idx * 0.04 }}
											className={`px-3 w-full whitespace-nowrap py-3 text-[var(--text)] text-sm hover:bg-[var(--hero)] hover:text-white transition-colors cursor-pointer ${
												idx % 2 === 0
													? 'bg-[var(--bg-second)]'
													: 'bg-[var(--bg)]'
											}`}
										>
											{item.name.trim()}
										</motion.div>
									</NavLink>
								)
							})}
						</div>
					</div>
				))}
		</div>
	)
}

export default SearchResult
