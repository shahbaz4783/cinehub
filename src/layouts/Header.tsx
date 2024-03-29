import { ModeToggle } from '@/components/mode-toggle';
import { NavLink } from 'react-router-dom';

export const Header = () => {
	return (
		<header className='border-b'>
			<section className='py-4 flex justify-between w-11/12 m-auto'>
				<div>
					<h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl font-sans'>
						CineHub
					</h1>
				</div>
				<nav className='flex gap-4 justify-between items-center fixed bottom-0 left-0 py-2 px-2 border-t w-full md:static md:border-none md:w-min'>
					<NavLink to='/'>Home</NavLink>
					<NavLink to='/movies'>Movies</NavLink>
					<NavLink to='/shows'>Shows</NavLink>
					<NavLink to='/profile'>Profile</NavLink>
				</nav>
					<ModeToggle />
			</section>
		</header>
	);
};
