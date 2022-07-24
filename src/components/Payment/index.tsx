import styles from './index.module.scss';

import classNames from 'classnames/bind';
import PaymentLabel from '../PaymentLabel';
import PaymentOptionList from '../PaymentOptionList';
import PaymentOptionsCard from '../PaymentOptionCard';

const cx = classNames.bind(styles);

function Payment() {
	return (
		<section className={cx('payment')}>
			<div className={cx('container')} data-container>
				<PaymentLabel />

				<PaymentOptionList />

				<PaymentOptionsCard />
			</div>

			<div className={cx('separate')}></div>
		</section>
	);
}

export default Payment;
