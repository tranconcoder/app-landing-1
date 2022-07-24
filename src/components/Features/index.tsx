import { useState } from 'react';

import classNames from 'classnames/bind';
import styles from './index.module.scss';
import FeaturesPhone from '../FeaturesPhone';
import FeaturesContent from '../FeaturesContent';

const cx = classNames.bind(styles);

function Features() {
	return (
		<section className={cx('features')}>
			<div className={cx('container')}>
				<FeaturesPhone />

				<FeaturesContent />
			</div>
		</section>
	);
}

export default Features;
