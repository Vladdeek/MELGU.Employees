import { MenuIcon, Moon, SearchIcon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export const HeaderHeight = '56px'

export const Search = () => {
	return (
		<div className='w-full bg-[#ffffff40] h-10 focus-within:bg-[var(--bg)] focus-within:ring-3 ring-[var(--glow)] rounded-sm pl-3 flex items-center transition-all overflow-hidden'>
			<input
				type='text'
				placeholder='Поиск...'
				className='w-full outline-none placeholder:text-[#ffffff75] focus:text-[var(--text)] focus:placeholder:text-[var(--subtext)] bg-transparent text-white '
			/>
			<SearchIcon className='text-[#ffffff75] group-focus:text-[var(--text)] border-l border-[#ffffff45] flex items-center justify-center h-full aspect-square w-10 p-2.5 hover:bg-[#ffffff45] active:bg-[#ffffff75]active:text-white transition-all cursor-pointer' />
		</div>
	)
}
export const SearchMobile = ({}) => {
	const [searchIsActive, setSearchIsActive] = useState(false)
	return (
		<div
			className={`${
				searchIsActive && 'w-full pl-3 bg-[#ffffff40]'
			}  h-10 focus-within:bg-[var(--bg)] focus-within:ring-3 ring-[var(--glow)] rounded-sm flex items-center transition-all overflow-hidden`}
		>
			<input
				type='text'
				placeholder='Поиск...'
				className={`${
					searchIsActive ? 'w-full' : 'hidden'
				} outline-none placeholder:text-[#ffffff75] focus:text-[var(--text)] focus:placeholder:text-[var(--subtext)] bg-transparent text-white transition-all`}
			/>
			<SearchIcon
				onClick={() => setSearchIsActive(prev => !prev)}
				className={`${
					searchIsActive
						? 'text-[#ffffff75] group-focus:text-[var(--text)] border-l border-[#ffffff45] hover:bg-[#ffffff45] active:bg-[#ffffff75] active:text-white'
						: 'text-white hover:bg-[var(--dark-hero)]'
				}  flex items-center justify-center h-full aspect-square w-10 p-2.5  transition-all cursor-pointer`}
			/>
		</div>
	)
}

export const ToggleTheme = () => {
	const [isLight, setIsLight] = useState(() => {
		const savedTheme = localStorage.getItem('theme')
		if (savedTheme) {
			return savedTheme === 'light'
		}
		return document.documentElement.dataset.theme === 'light'
	})

	useEffect(() => {
		const theme = isLight ? 'light' : 'dark'
		document.documentElement.dataset.theme = theme
		localStorage.setItem('theme', theme)
	}, [isLight])

	const toggleTheme = () => {
		setIsLight(prev => !prev)
	}

	return (
		<button
			onClick={toggleTheme}
			className={`relative rounded-lg p-[14px] hover:bg-[var(--hero)] hover:text-white text-white transition-all flex items-center justify-center cursor-pointer `}
		>
			{!isLight ? <Sun size={20} /> : <Moon size={20} />}
		</button>
	)
}

const Header = ({ onChange, isMobile }) => {
	const [showSideBar, setShowSideBar] = useState(false)

	useEffect(() => {
		onChange?.(showSideBar)
	}, [showSideBar])

	return (
		<header
			className={`sticky w-full items-center max-md:justify-between flex gap-3 top-0 bg-[var(--hero)] py-[10px] px-[34px] shadow-[var(--shadow)] z-10`}
			style={{ height: HeaderHeight }}
		>
			<MenuIcon
				onClick={() => setShowSideBar(prev => !prev)}
				className='text-white md:hidden h-full w-auto aspect-square rounded-md hover:bg-[var(--dark-hero)] cursor-pointer transition-all p-1'
			/>
			{isMobile ? (
				<div className='flex gap-3 items-center w-full justify-end'>
					<SearchMobile />

					<ToggleTheme />
					<p className='text-white cursor-pointer select-none'>Войти</p>
				</div>
			) : (
				<>
					<Search />

					<ToggleTheme />
					<p className='text-white cursor-pointer select-none'>Войти</p>
				</>
			)}
		</header>
	)
}

export default Header
