import styles from './index.module.scss';
import { ReactComponent as FacebookIcon } from '../../assets/images/footer/facebook.svg';
import { ReactComponent as GithubIcon } from '../../assets/images/footer/github.svg';
import { ReactComponent as TwitterIcon } from '../../assets/images/footer/twitter.svg';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function FooterContact() {
	return (
		<div className={cx('footer-contact')}>
			<ul className={cx('footer-contact__list')}>
				<li className={cx('facebook')}>
					<FacebookIcon />
				</li>
				<li className={cx('twitter')}>
					<TwitterIcon />
				</li>
				<li className={cx('github')}>
					<GithubIcon />
				</li>
			</ul>
		</div>
	);
}

export default FooterContact;
