import styles from './index.module.scss';
import starIcon from '../../assets/images/customer/star.png';
import customerAvatar from '../../assets/images/customer/customer-avatar.png';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function CustomerContentBox() {
	return (
		<div className={cx('customer-content-box')}>
			<h3 className={cx('main-title')}>
				Meet Client Satisfaction by using product
			</h3>

			<p className={cx('main-description')}>
				The rise of mobile devices transforms the way we consume.
				elevant channels such as Facebook.
			</p>

			<img className={cx('star')} src={starIcon} alt="star" />

			<h4 className={cx('title')}>User friendly & Customizable</h4>

			<p>
				Bring to the table win-win survival strategies to ensure
				proactive domination. At the end of the day, going forward, a
				new normal that has evolved from generation X is on the runway
				heading towards a streamlined cloud solution. User generated
				content in real-time will have multiple touchpoints for
				offshoring.
			</p>

			<div>
				<img src={customerAvatar} alt="customer-avatar" />

				<div className={cx('customer-info')}>
					<span className={cx('name')}></span>
					<span className={cx('position')}></span>
				</div>

				<button className={cx('previous-button')}></button>
				<button className={cx('next-button')}>
					<svg
						width="24px"
						height="24px"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M17 12L7 12M17 12L13 16M17 12L13 8"
							stroke="#001A72"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</button>
			</div>
		</div>
	);
}

export default CustomerContentBox;
