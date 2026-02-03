import { Info } from 'lucide-react'
import { NavLink, Outlet, useParams } from 'react-router-dom'

const NotFound = () => {
	return (
		<div className='w-full bg-[var(--bg)] rounded-md border border-[var(--border)] border-t-3 border-t-[var(--hero)] h-fit'>
			<p className='text-sm px-5 py-3 font-normal text-[var(--hero)] shadow-[var(--shadow)]'>
				Нет данных
			</p>
		</div>
	)
}

const MiniTablesDisplayOption = ({ title = 'Заголовок', option }) => {
	return (
		<div className='text-sm rounded-md border-1 border-[var(--light-gray)] font-normal text-[var(--hero)] shadow-[var(--shadow)]'>
			<p className='w-full border-b border-[var(--hero)] px-4 py-3 text-[var(--text)]'>
				{title}
			</p>
			{option?.map((item, index) => (
				<div
					className={`grid grid-cols-4 px-4 py-2 ${index > 0 ? 'border-t border-[var(--border)]' : ''}`}
				>
					<p className='col-span-1 text-[var(--text)]'>{item?.title}</p>
					<p className='col-span-3 text-[var(--text)]'>{item?.info}</p>
				</div>
			))}
		</div>
	)
}

const PartOfTheTable = ({ index, title, toDetails }) => {
	const { employeeid, achievements } = useParams()
	return (
		<div
			className={`flex items-center justify-between font-normal ${index > 0 ? 'border-t border-[var(--border)]' : ''} px-5 py-3`}
		>
			<p className='w-7 text-[var(--text)] text-lg'>{index + 1}</p>
			<p className='w-full text-[var(--text)]'>{title}</p>
			<NavLink
				className='w-5 text-[var(--hero)] flex items-center'
				to={`/employee/${employeeid}/${achievements}/${toDetails}`}
			>
				<Info />
			</NavLink>
		</div>
	)
}

const FullTableDisplayOption = ({ option }) => {
	return (
		<div className='rounded-md border-1 border-[var(--light-gray)] shadow-[var(--shadow)]'>
			{option?.map((item, index) => (
				<PartOfTheTable index={index} title={item.title} toDetails={item.id} />
			))}
		</div>
	)
}

const AchievmentsSection = () => {
	const mass1 = [
		{
			title: 'Загаловок 1',
			info: [
				{ title: '1', info: 'info1' },
				{ title: '2', info: 'info2' },
				{ title: '3', info: 'info3' },
			],
		},
		{
			title: 'Загаловок 2',
			info: [
				{ title: '1', info: 'info1' },
				{ title: '2', info: 'info2' },
				{ title: '3', info: 'info3' },
			],
		},
		{
			title: 'Загаловок 3',
			info: [
				{ title: '1', info: 'info1' },
				{ title: '2', info: 'info2' },
				{ title: '3', info: 'info3' },
			],
		},
	]

	const mass2 = [
		{ id: 0, title: 'title1' },
		{ id: 1, title: 'title2' },
		{ id: 2, title: 'title3' },
		{ id: 3, title: 'title4' },
	]

	const { employeeid, achievements, achievementid } = useParams()

	return (
		<div className='col-span-3 flex flex-col gap-3'>
			{achievementid ? (
				<Outlet />
			) : (
				<>
					{achievements === 'teaching-materials' ? (
						mass1?.map(item => (
							<MiniTablesDisplayOption
								option={item?.info}
								title={item?.title}
							/>
						))
					) : achievements === 'professional-development' ? (
						<FullTableDisplayOption option={mass2} />
					) : (
						<otFound />
					)}
				</>
			)}
		</div>
	)
}

export const AchievmentInfo = () => {
	const { employeeid, achievements, achievementid } = useParams()
	const title = `сотрудник ${employeeid}, деятельность ${achievements}, id поста ${achievementid}`
	const mass = [
		{ title: 'заголовок1', info: 'информация1' },
		{ title: 'заголовок2', info: 'информация2' },
		{ title: 'заголовок3', info: 'информация3' },
		{ title: 'заголовок4', info: 'информация4' },
		{ title: 'заголовок5', info: 'информация5' },
		{ title: 'заголовок6', info: 'информация6' },
	]
	return (
		<div className='col-span-3 flex flex-col gap-3'>
			<p className='text-3xl font-semibold text-[var(--text)]'>{title}</p>
			<div className='rounded-md border-1 border-[var(--light-gray)] shadow-[var(--shadow)]'>
				{mass?.map((item, index) => (
					<div
						className={`grid grid-cols-4 text-[var(--text)] px-4 py-2 ${index > 0 && 'border-t border-[var(--border)]'}`}
					>
						<p className='col-span-1'>{item?.title}</p>
						<p className='col-span-3'>{item?.info}</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default AchievmentsSection
