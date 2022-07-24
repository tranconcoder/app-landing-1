import styles from './index.module.scss';

import classNames from 'classnames/bind';
import CustomerIllustration from '../CustomerIllustration';
import CustomerContentBox from '../CustomerContentBox';

const cx = classNames.bind(styles);

function Customer() {
	return (
		<section className={cx('customer')}>
			<div className={cx('container')}>
				<CustomerIllustration />

				<CustomerContentBox />
			</div>
		</section>
	);
}

export default Customer;
