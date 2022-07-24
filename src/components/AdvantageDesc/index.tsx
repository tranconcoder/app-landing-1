import styles from './index.module.scss';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function AdvantageDesc() {
	return (
		<div className={cx('advantage-desc')}>
			<h3 className={cx('title')}>
				Smart jackpots that you may love this anytime & anywhere
			</h3>

			<div className={cx('separate')}></div>

			<p className={cx('desc')}>
				The rise of mobile devices transforms the way we consume
				information entirely and the world's most elevant channels such
				as Facebook.
			</p>
		</div>
	);
}

export default AdvantageDesc;
