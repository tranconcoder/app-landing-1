import styles from './index.module.scss';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function PaymentOptionList() {
	return (
		<div className={cx('payment-option-list')}>
			<ul className={cx('option-button-list')}>
				<li className={cx('selected')}>
					<p>Monthly</p>
				</li>

				<li>
					<p>Annually</p>
				</li>
			</ul>
		</div>
	);
}

export default PaymentOptionList;
