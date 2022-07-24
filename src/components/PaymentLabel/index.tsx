import styles from './index.module.scss';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function PaymentLabel() {
	return (
		<div className={cx('payment-label')}>
			<h3>
				Get awesome features, without <br /> extra charges
			</h3>
			<p>
				The rise of mobile devices transforms the way we consume
				information <br /> entirely and the world's most elevant
				channels such as Facebook.
			</p>
		</div>
	);
}

export default PaymentLabel;
