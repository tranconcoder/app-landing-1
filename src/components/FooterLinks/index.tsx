import styles from './index.module.scss';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function FooterLinks() {
	const handleClickLink = (e: any) => e.preventDefault();

	return (
		<div className={cx('footer-links')}>
			<ul className={cx('link-list')}>
				<li>
					<a href="" onClick={handleClickLink}>
						Home
					</a>
				</li>
				<li>
					<a href="" onClick={handleClickLink}>
						Key Features
					</a>
				</li>
				<li>
					<a href="" onClick={handleClickLink}>
						Pricing
					</a>
				</li>
				<li>
					<a href="" onClick={handleClickLink}>
						Testiminial
					</a>
				</li>
				<li>
					<a href="" onClick={handleClickLink}>
						FAQ
					</a>
				</li>
			</ul>
		</div>
	);
}

export default FooterLinks;
