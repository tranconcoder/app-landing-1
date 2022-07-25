import { useState } from 'react';

import classNames from 'classnames/bind';
import styles from './index.module.scss';
import Button from '../Button';
import Logo from '../Logo';

const cx = classNames.bind(styles);

function Header() {
	return (
		<header className={cx('header')}>
			<div className={cx('container')}>
				<Logo />

				<div className={cx('nav-container')}>
					<ul className={cx('nav-list')}>
						<li>Home</li>
						<li>key Features</li>
						<li>Pricing</li>
						<li>Testiminial</li>
						<li>FAQ</li>
					</ul>
				</div>
				<Button width={170} height={60}>
					Try for free
				</Button>
			</div>
		</header>
	);
}

export default Header;
