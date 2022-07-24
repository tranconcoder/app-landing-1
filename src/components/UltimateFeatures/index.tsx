import styles from './index.module.scss';

import classNames from 'classnames/bind';
import UltimateFeaturesContent from '../UltimateFeaturesContent';
import UltimateFeaturesIllustration from '../UltimateFeaturesIllustration';

const cx = classNames.bind(styles);

function UltimateFeatures() {
	return (
		<section className={cx('ultimate-features')}>
			<div className={cx('container')} data-container>
				<UltimateFeaturesContent />

				<UltimateFeaturesIllustration />
			</div>
		</section>
	);
}

export default UltimateFeatures;
