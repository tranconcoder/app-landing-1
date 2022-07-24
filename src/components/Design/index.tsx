import classNames from 'classnames/bind';
import DesignIllustration from '../DesignIllustrastion';
import DesignMainContent from '../DesignMainContent';
import styles from './index.module.scss';

const cx = classNames.bind(styles);

function Design() {
	return (
		<section className={cx('design')}>
			<div className={cx('container')}>
				<DesignIllustration />

				<DesignMainContent />
			</div>
		</section>
	);
}

export default Design;
