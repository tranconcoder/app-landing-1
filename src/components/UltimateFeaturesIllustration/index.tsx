import styles from './index.module.scss';
import ultimateFeaturesIllustration from '../../assets/images/ultimate-features/illustration.png';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function UltimateFeaturesIllustration() {
	return (
		<div className={cx('ultimate-features-illustration')}>
			<img src={ultimateFeaturesIllustration} alt="" />
		</div>
	);
}

export default UltimateFeaturesIllustration;
