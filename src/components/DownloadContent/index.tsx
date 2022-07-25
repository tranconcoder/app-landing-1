import styles from './index.module.scss';
import googlePlayImage from '../../assets/images/download/google-play.png';
import appStoreImage from '../../assets/images/download/app-store.png';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function DownloadContent() {
	const handleClickLink = (e: any) => e.preventDefault();

	return (
		<div className={cx('download-content')}>
			<div className={cx('content-container')}>
				<h3>Download our App now !</h3>
				<p>
					The rise of mobile devices transforms the way we consume
					information entirely and the world's most elevant channels
					such as Facebook.
				</p>

				<div className={cx('download-links')}>
					<a className={cx('google-play')} onClick={handleClickLink}>
						<img src={googlePlayImage} alt="google-play-store" />
					</a>

					<a className={cx('app-store')} onClick={handleClickLink}>
						<img src={appStoreImage} alt="app-store" />
					</a>
				</div>
			</div>
		</div>
	);
}

export default DownloadContent;
