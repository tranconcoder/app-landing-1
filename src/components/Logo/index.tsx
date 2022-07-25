import styles from './index.module.scss';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Logo() {
	return (
		<p className={cx('logo')}>
			<span className={cx('app')}>App</span>
			<span className={cx('lab')}>Lab</span>
		</p>
	);
}

export default Logo;
