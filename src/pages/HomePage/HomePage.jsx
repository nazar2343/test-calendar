import React from 'react';
import { ReactComponent as CalendarIcon } from '../../assets/calendar-icon.svg';
import { Calendar } from '../../components/Calendar/Calendar';

import './HomePage.scss';

export const HomePage = () => {
	return (
		<div className='main-section__wrapper'>
			<div className='header'>
				<div className='header__title'>Calendar App</div>
				<CalendarIcon width='26px' height='26px' fill='#2a1ecc' />
			</div>
			<Calendar />
		</div>
	);
};
