import styles from './index.module.scss';
import payoutIcon from '../../assets/images/payout-icon.png';
import networkIcon from '../../assets/images/network-icon.png';
import rewardsIcon from '../../assets/images/rewards-icon.png';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function AdvantageList() {
	return (
		<div className={cx('advantage-list-container')}>
			<ul className={cx('advantage-list')}>
				<li className={cx('payout')}>
					<img src={payoutIcon} alt="" />
					<h4>Automatic Payouts</h4>
					<p>
						Get your blood tests delivered at home collect a sample
						from the news your blood tests.
					</p>
				</li>

				<li className={cx('network')}>
					<img src={networkIcon} alt="" />
					<h4>Network Effect</h4>
					<p>
						Get your blood tests delivered at home collect a sample
						from the news your blood tests.
					</p>
				</li>

				<li className={cx('rewards')}>
					<img src={rewardsIcon} alt="" />
					<h4>Bigger Rewards Method</h4>
					<p>
						Get your blood tests delivered at home collect a sample
						from the news your blood tests.
					</p>
				</li>
			</ul>
		</div>
	);
}

export default AdvantageList;
