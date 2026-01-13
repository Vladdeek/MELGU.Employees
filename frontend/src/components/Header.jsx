import { SearchIcon } from 'lucide-react'

export const HeaderHeight = '56px'

export const Search = () => {
	return (
		<div className='w-full bg-[#ffffff45] focus-within:bg-[var(--bg)] focus-within:ring-3 ring-[var(--glow)] rounded-sm px-3 h-full flex items-center transition-all'>
			<input
				type='text'
				placeholder='Поиск'
				className='w-full outline-none placeholder:text-[#ffffff75] focus:text-[var(--text)] focus:placeholder:text-[var(--subtext)] bg-transparent text-white'
			/>
			<SearchIcon className='text-white group-focus:text-[var(--text)]' />
		</div>
	)
}

const Header = () => {
	return (
		<header
			className={`sticky w-full items-center flex gap-3 top-0 bg-[var(--hero)] py-[10px] px-[34px]`}
			style={{ height: HeaderHeight }}
		>
			<Search />
			<p className='text-white'>Войти</p>
		</header>
	)
}

export default Header
