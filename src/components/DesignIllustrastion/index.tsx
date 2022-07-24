import styles from './index.module.scss';
import designIllustration from '../../assets/images/design-illustration.png';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function DesignIllustration() {
	return (
		<div className={cx('design-illustration')}>
			<img src={designIllustration} alt="design-illustration" />
		</div>
	);
}

export default DesignIllustration;
