import styles from './index.module.scss';
import bannerImage from '../../assets/images/banner.png';
import achievementIcon from '../../assets/images/achievement-icon.png';
import bannerBackground from '../../assets/images/banner-background.png';
import bannerBackgroundBottom from '../../assets/images/banner-background-bottom.png';
import bannerTextBoxBackground from '../../assets/images/text-box-background.png';

import classNames from 'classnames/bind';
import Button from '../Button';

const cx = classNames.bind(styles);

function Banner() {
	return (
		<section className={cx('banner')}>
			<div className={cx('container')} data-container>
				<div className={cx('text-box')}>
					<p className={cx('achievement')}>
						<span className={cx('icon')}>
							<img src={achievementIcon} alt="achievement-icon" />
						</span>

						<span className={cx('content')}>
							#1 Editiors Choice App of 2020
						</span>
					</p>

					<h2 className={cx('title')}>
						Best app for your modern lifestyle
					</h2>

					<p className={cx('desc')}>
						Increase productivity with a simple to-do app. app for
						managing your personal budgets.
					</p>

					<div className={cx('button-list')}>
						<Button width={170} height={60}>
							Try for free
						</Button>

						<button className={cx('watch-demo-video-button')}>
							Watch demo video
						</button>
					</div>
				</div>

				<img
					className={cx('banner-img')}
					src={bannerImage}
					alt="banner"
				/>
			</div>

			<img
				className={cx('background')}
				src={bannerBackground}
				alt="background"
			/>
			<img
				className={cx('background-left')}
				src={bannerTextBoxBackground}
				alt="text-box-background"
			/>
			<img
				className={cx('background-bottom')}
				src={bannerBackgroundBottom}
				alt="background-bottom"
			/>
		</section>
	);
}

export default Banner;
