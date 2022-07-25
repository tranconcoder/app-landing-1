import styles from './index.module.scss';

import classNames from 'classnames/bind';

import Logo from '../Logo';
import FooterLinks from '../FooterLinks';
import FooterContact from '../FooterContact';

const cx = classNames.bind(styles);

function Footer() {
	return (
		<footer className={cx('footer')}>
			<Logo />

			<FooterLinks />

			<FooterContact />

			<p className={cx('copyright')}>
				Copyright© Arifur Rahman Tushar 2019. All rights reserved
			</p>
		</footer>
	);
}

export default Footer;
