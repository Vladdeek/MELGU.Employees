import { Moon, SearchIcon, Sun } from 'lucide-react'
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

const Header = () => {
	return (
		<header
			className={`sticky w-full items-center flex gap-3 top-0 bg-[var(--hero)] py-[10px] px-[34px] shadow-[var(--shadow)] z-10`}
			style={{ height: HeaderHeight }}
		>
			<Search />
			<ToggleTheme />
			<p className='text-white cursor-pointer select-none'>Войти</p>
		</header>
	)
}

export default Header
