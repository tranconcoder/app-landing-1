import styles from './index.module.scss';
import appDevIcon from '../../assets/images/ultimate-features/app-dev-icon.png';
import uxIcon from '../../assets/images/ultimate-features/ux-icon.png';
import cloudIcon from '../../assets/images/ultimate-features/cloud-icon.png';
import supportIcon from '../../assets/images/ultimate-features/support-icon.png';

import classNames from 'classnames/bind';
import Button from '../Button';

const cx = classNames.bind(styles);

function UltimateFeaturesContent() {
	return (
		<div className={cx('ultimate-features-content')}>
			<div className={cx('description-container')}>
				<h3>
					Ultimate features <br /> that we built
				</h3>
				<p>
					The rise of mobile devices transforms the way we <br />
					consume information entirely.
				</p>
			</div>

			<div className={cx('features-list-container')}>
				<ul className={cx('features-list')}>
					<li>
						<img src={appDevIcon} alt="" />
						<h4>App Development</h4>
						<p>
							Get your blood tests delivered at home collect a
							sample from the news your blood tests.
						</p>
					</li>
					<li>
						<img src={uxIcon} alt="" />
						<h4>UX Planing</h4>
						<p>
							Get your blood tests delivered at home collect a
							sample from the news your blood tests.
						</p>
					</li>
					<li>
						<img src={cloudIcon} alt="" />
						<h4>Cloud Storage</h4>
						<p>
							Get your blood tests delivered at home collect a
							sample from the news your blood tests.
						</p>
					</li>
					<li>
						<img src={supportIcon} alt="" />
						<h4>Customer support</h4>
						<p>
							Get your blood tests delivered at home collect a
							sample from the news your blood tests.
						</p>
					</li>
				</ul>
			</div>

			<Button className={cx('see-all-button')} width={170} height={57}>
				See all
			</Button>
		</div>
	);
}

export default UltimateFeaturesContent;
