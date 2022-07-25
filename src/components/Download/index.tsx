import styles from './index.module.scss';

import classNames from 'classnames/bind';

import DownloadContent from '../DownloadContent';
import DownloadIllustration from '../DownloadIllustration';

const cx = classNames.bind(styles);

function Download() {
	return (
		<section className={cx('download')}>
			<div className={cx('container')}>
				<DownloadContent />

				<DownloadIllustration />
			</div>
		</section>
	);
}

export default Download;
