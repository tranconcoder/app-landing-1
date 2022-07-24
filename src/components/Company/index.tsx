import styles from './index.module.scss';
import southWestLogo from '../../assets/images/company-logo/company-1.png';
import anubisLogo from '../../assets/images/company-logo/company-2.png';
import alonzoLogo from '../../assets/images/company-logo/company-3.png';
import expressLogo from '../../assets/images/company-logo/company-4.png';
import maniacLogo from '../../assets/images/company-logo/company-5.png';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Company() {
	return (
		<section className={cx('company')}>
			<div className={cx('container')} data-container>
				<p className={cx('title')}>Trusted by companies like</p>

				<ul className={cx('company-list')}>
					<li>
						<img src={southWestLogo} alt="" />
					</li>
					<li>
						<img src={anubisLogo} alt="" />
					</li>
					<li>
						<img src={alonzoLogo} alt="" />
					</li>
					<li>
						<img src={expressLogo} alt="" />
					</li>
					<li className={cx('maniac')}>
						<img src={maniacLogo} alt="" />
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Company;
