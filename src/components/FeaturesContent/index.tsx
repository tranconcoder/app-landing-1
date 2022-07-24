import styles from './index.module.scss';
import speedIcon from '../../assets/images/speed-icon.png';
import prototypingIcon from '../../assets/images/prototyping-icon.png';
import vectorEditingIcon from '../../assets/images/vector-editing-icon.png';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function FeaturesContent() {
	return (
		<div className={cx('features-content')}>
			<h3 className={cx('title')}>Awesome apps features</h3>

			<p className={cx('description')}>
				Increase productivity with a simple to-do app. app for managing
				your personal budgets.
			</p>

			<ul className={cx('feature-list')}>
				<li>
					<img
						className={cx('icon')}
						src={speedIcon}
						alt="speed-icon"
					/>

					<div>
						<h4>Fast Performance</h4>
						<p>
							Get your blood tests delivered at home collect a
							sample from the news your blood tests.
						</p>
					</div>
				</li>
				<li>
					<img
						className={cx('icon')}
						src={prototypingIcon}
						alt="prototyping-icon"
					/>

					<div>
						<h4>Prototyping</h4>
						<p>
							Get your blood tests delivered at home collect a
							sample from the news your blood tests.
						</p>
					</div>
				</li>
				<li>
					<img
						className={cx('icon')}
						src={vectorEditingIcon}
						alt="vector-editing-icon"
					/>

					<div>
						<h4>Vector Editing</h4>
						<p>
							Get your blood tests delivered at home collect a
							sample from the news your blood tests.
						</p>
					</div>
				</li>
			</ul>
		</div>
	);
}

export default FeaturesContent;
