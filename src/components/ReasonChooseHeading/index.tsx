import { useState } from 'react';

import classNames from 'classnames/bind';
import styles from './index.module.scss';

const cx = classNames.bind(styles);

function ReasonChooseHeading() {
	return (
		<div>
			<h3 className={cx('reason-choose-heading')}>
				Why you should choose <br /> our app
			</h3>

			<p className={cx('reason-choose-description')}>
				The rise of mobile devices transforms the way we consume
				information entirely and the world's most elevant channels such
				as Facebook.
			</p>
		</div>
	);
}

export default ReasonChooseHeading;
