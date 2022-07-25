import styles from './index.module.scss';
import downloadIllustration from '../../assets/images/download/illustration.png';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function DownloadIllustration() {
	return (
		<div className={cx('download-illustration')}>
			<img src={downloadIllustration} alt="" />
		</div>
	);
}

export default DownloadIllustration;
