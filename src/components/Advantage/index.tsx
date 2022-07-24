import { useState } from 'react';

import classNames from 'classnames/bind';
import styles from './index.module.scss';
import AdvantageDesc from '../AdvantageDesc';
import AdvantageList from '../AdvantageList';

const cx = classNames.bind(styles);

function Advantage() {
	return (
		<section className={cx('advantage')}>
			<div className={cx('container')}>
				<AdvantageDesc />

				<AdvantageList />
			</div>
		</section>
	);
}

export default Advantage;
