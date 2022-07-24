import styles from './index.module.scss';

import classNames from 'classnames/bind';
import Button from '../Button';

const cx = classNames.bind(styles);

function PaymentOptionsCard() {
	return (
		<div className={cx('payment-option-card-container')}>
			<ul className={cx('option-card-list')}>
				<li className={cx('free')}>
					<header className={cx('card-header')}>
						<span className={cx('price')}>
							<h4>$0</h4>
							<p>/ month</p>
						</span>

						<h4 className={cx('title')}>Business Class</h4>

						<p className={cx('description')}>
							For small teams or office
						</p>
					</header>

					<div className={cx('card-body')}>
						<ul className={cx('permission-list')}>
							<li>Drag & Drop Builder</li>
							<li>1,000's of Templates</li>
							<li>Blog Support Tools</li>
							<li>eCommerce Store</li>
						</ul>
					</div>

					<footer className={cx('card-footer')}>
						<Button width={210} height={56}>
							Start free trial
						</Button>
					</footer>
				</li>
				<li className={cx('premium')}>
					<header className={cx('card-header')}>
						<span className={cx('price')}>
							<h4>$99</h4>
							<p>/ month</p>
						</span>

						<h4 className={cx('title')}>Pro Master</h4>

						<p className={cx('description')}>
							For Best opportunities
						</p>
					</header>

					<div className={cx('card-body')}>
						<ul className={cx('permission-list')}>
							<li>Drag & Drop Builder</li>
							<li>1,000's of Templates</li>
							<li>Blog Support Tools</li>
							<li>eCommerce Store</li>
						</ul>
					</div>

					<footer className={cx('card-footer')}>
						<Button width={210} height={56}>
							Subscribe Now
						</Button>

						<button className={cx('start-trial-button')}>
							<p>Or Start 14 days trail</p>
						</button>
					</footer>
				</li>
			</ul>
		</div>
	);
}

export default PaymentOptionsCard;
