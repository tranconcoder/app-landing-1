import styles from './index.module.scss';
import starIcon from '../../assets/images/customer/star.png';
import customerAvatar from '../../assets/images/customer/customer-avatar.png';
import { ReactComponent as ArrowRightIcon } from '../../assets/images/customer/arrow-right.svg';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function CustomerContentBox() {
	return (
		<div className={cx('customer-content-box-wrapper')}>
			<div className={cx('customer-content-box')}>
				<h3 className={cx('main-title')}>
					Meet Client Satisfaction <br /> by using product
				</h3>

				<p className={cx('main-description')}>
					The rise of mobile devices transforms the way we consume.
					<br />
					elevant channels such as Facebook.
				</p>

				<img className={cx('star')} src={starIcon} alt="star" />

				<h4 className={cx('title')}>User friendly & Customizable</h4>

				<p className={cx('description')}>
					Bring to the table win-win survival strategies to ensure
					proactive domination. At the end of the day, going forward,
					a new normal that has evolved from generation X is on the
					runway heading towards a streamlined cloud solution. User
					generated content in real-time will have multiple
					touchpoints for offshoring.
				</p>

				<div className={cx('customer')}>
					<img
						className={cx('customer-avatar')}
						src={customerAvatar}
						alt="customer-avatar"
					/>

					<div className={cx('customer-info')}>
						<h4 className={cx('name')}>Zoltan Nemeth</h4>
						<p className={cx('position')}>CEO of Pixler Lab</p>
					</div>

					<div className={cx('action-container')}>
						<button className={cx('previous-button')}>
							<ArrowRightIcon />
						</button>

						<div className={cx('separate')}></div>

						<button className={cx('next-button', 'active')}>
							<ArrowRightIcon />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CustomerContentBox;
