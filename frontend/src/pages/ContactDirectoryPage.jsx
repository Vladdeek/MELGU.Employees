import { useState } from 'react'

const ContactDirectoryPage = () => {
	const options = [
		{ id: 1, title: 'МелГУ' },
		{ id: 2, title: 'Управление цифровых решений' },
		{
			id: 3,
			title: 'Управление информационно-телекоммуникационной инфраструктуры',
		},
		{ id: 4, title: 'Управление информационной политики' },
		{ id: 5, title: 'Планово-финансовое управление' },
		{ id: 6, title: 'Управление бухгалтерского учета и контроля' },
	]
	const [active, setActive] = useState(1)
	return (
		<div className='flex-col items-center mt-6'>
			<p className='uppercase text-center font-medium text-2xl text-[var(--text)] mb-6'>
				телефонный справочник
			</p>
			<div className='grid grid-cols-3 gap-5'>
				<div className='col-span-1 flex flex-col items-center w-full gap-1'>
					{options.map(item => (
						<p
							onClick={() => setActive(item.id)}
							className={`group relative text-center flex flex-col items-center ${
								active === item.id
									? 'text-white w-full'
									: 'text-[var(--subtext)] hover:text-[var(--hero)] cursor-pointer w-fit'
							}  text-sm py-2 rounded-md overflow-hidden font-normal transition-all delay-25 duration-200`}
						>
							{item.title}
							<div
								className={`h-[1px] w-0 ${
									active === item.id
										? 'w-0 bg-transparent'
										: 'group-hover:w-full bg-[var(--hero)]'
								} transition-all`}
							></div>
							<div
								className={`${
									active === item.id
										? 'w-full -z-1 bg-[var(--hero)]'
										: 'w-0 bg-transparent'
								} absolute  h-full transition-all rounded-md top-0`}
							></div>
						</p>
					))}
				</div>
				<div className='col-span-2 flex flex-col w-full gap-5'>
					<ContactList title='Контакты' contacts={[]} />
					<ContactList
						title='Контакты'
						contacts={[
							{
								fullname: 'Иванов Иван Иванович',
								phone: '8-800-555-35-35',
								email: 'ivanov@melgu.ru',
								location: '2 корпус, 412 аудитория',
								position: 'Директор',
							},
							{
								fullname: 'Иванов Иван Иванович',
								phone: '8-800-555-35-35',
								email: 'ivanov@melgu.ru',
								location: '2 корпус, 412 аудитория',
								position: 'Директор',
							},
							{
								fullname: 'Иванов Иван Иванович',
								phone: '8-800-555-35-35',
								email: 'ivanov@melgu.ru',
								location: '2 корпус, 412 аудитория',
								position: 'Директор',
							},
						]}
					/>
					<SubordinateUnits
						title='Подчиненные подразделения'
						departments={[]}
					/>
					<SubordinateUnits
						title='Подчиненные подразделения'
						departments={options}
					/>
				</div>
			</div>
		</div>
	)
}

const ContactList = ({ title, contacts }) => {
	return (
		<div className='flex flex-col overflow-hidden rounded-md bg-[var(--bg)] border border-[var(--border)] shadow-[var(--shadow)]'>
			<p className='px-4 py-2 text-lg border-b-2 border-[var(--hero)] shadow-[var(--shadow)] text-[var(--text)]'>
				{title}
			</p>
			<div className={`${contacts.length === 0 && 'p-2'} flex flex-col gap-2`}>
				{contacts.length === 0 ? (
					<p className='text-sm bg-[var(--bg-second)] rounded-sm shadow-sm border-t-4 border-[var(--hero)] text-[var(--hero)] px-5 py-3'>
						Контакты отсутствуют
					</p>
				) : (
					contacts.map((item, idx) => (
						<div
							key={idx}
							className={` px-4 py-2 text-sm text-[var(--text)] ${
								idx % 2 === 0 ? 'bg-[var(--bg-second)]' : 'bg-[var(--bg)]'
							}`}
						>
							<p className='text-[var(--text)]'>{item.fullname}</p>
							<p className='text-[var(--gray)]'>
								Должность - <span>{item.position}</span>
							</p>
							<p className='text-[var(--gray)]'>
								Email -{' '}
								<span className=' text-[var(--hero)]'>
									<a className='hover:underline hover:brightness-75' href=''>
										{item.email}
									</a>
								</span>
							</p>

							<p className='text-[var(--gray)]'>
								Телефон - <span>{item.phone}</span>
							</p>
							<p className='text-[var(--gray)]'>
								Расположение - <span>{item.location}</span>
							</p>
						</div>
					))
				)}
			</div>
		</div>
	)
}

const SubordinateUnits = ({ title, departments }) => {
	return (
		<div className='flex flex-col overflow-hidden  rounded-md bg-[var(--bg)] border border-[var(--border)] shadow-[var(--shadow)]'>
			<p className='px-4 py-2 text-lg border-b-2 border-[var(--hero)] shadow-[var(--shadow)] text-[var(--text)]'>
				{title}
			</p>
			<div
				className={`${departments.length === 0 && 'p-2'} flex flex-col gap-2`}
			>
				{departments.length === 0 ? (
					<p className='text-sm bg-[var(--bg-second)] rounded-sm shadow-sm border-t-3 border-[var(--hero)] text-[var(--hero)] px-5 py-3'>
						Подчиненные подразделения отсутствуют
					</p>
				) : (
					departments.map((department, idx) => (
						<p
							key={idx}
							className={` px-4 py-2 text-sm text-[var(--text)] hover:bg-[var(--hero)] hover:text-white cursor-pointer ${
								idx % 2 === 0 ? 'bg-[var(--bg-second)]' : 'bg-[var(--bg)]'
							}`}
						>
							{department.title}
						</p>
					))
				)}
			</div>
		</div>
	)
}

export default ContactDirectoryPage
