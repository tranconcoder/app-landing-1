import styles from './index.module.scss';
import customerIllustration from '../../assets/images/customer/illustration.png';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function CustomerIllustration() {
	return (
		<div className={cx('customer-illustration')}>
			<img src={customerIllustration} alt="" />
		</div>
	);
}

export default CustomerIllustration;
