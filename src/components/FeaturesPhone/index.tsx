import styles from './index.module.scss';
import featuresPhoneImage from '../../assets/images/features-phone.png';
import featuresPhoneBackgroundImage from '../../assets/images/features-phone-background.png';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function FeaturesPhone() {
	return (
		<div className={cx('features-phone')}>
			<img className={cx('phone')} src={featuresPhoneImage} alt="phone" />

			<img
				className={cx('background')}
				src={featuresPhoneBackgroundImage}
				alt="background"
			/>
		</div>
	);
}

export default FeaturesPhone;
