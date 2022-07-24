import styles from './index.module.scss';
import appDevIcon from '../../assets/images/reason-choose/app-dev-icon.png';
import awardIcon from '../../assets/images/reason-choose/award-icon.png';
import cloudIcon from '../../assets/images/reason-choose/cloud-icon.png';
import customizeIcon from '../../assets/images/reason-choose/customize-icon.png';
import uxIcon from '../../assets/images/reason-choose/ux-icon.png';
import supportIcon from '../../assets/images/reason-choose/support-icon.png';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function ReasonChooseList() {
	return (
		<div className={cx('reason-choose-list-container')}>
			<ul className={cx('reason-choose-list')}>
				<li>
					<img src={appDevIcon} alt="" />
					<h4>App Development</h4>
					<p>
						Get your blood tests delivered at home collect a sample
						from the news your blood tests.
					</p>
				</li>

				<li>
					<img src={awardIcon} alt="" />
					<h4>10 Times Award</h4>
					<p>
						Get your blood tests delivered at home collect a sample
						from the news your blood tests.
					</p>
				</li>

				<li>
					<img src={cloudIcon} alt="" />
					<h4>Cloud Storage</h4>
					<p>
						Get your blood tests delivered at home collect a sample
						from the news your blood tests.
					</p>
				</li>

				<li>
					<img src={customizeIcon} alt="" />
					<h4>Customization</h4>
					<p>
						Get your blood tests delivered at home collect a sample
						from the news your blood tests.
					</p>
				</li>

				<li>
					<img src={uxIcon} alt="" />
					<h4>UX Planning</h4>
					<p>
						Get your blood tests delivered at home collect a sample
						from the news your blood tests.
					</p>
				</li>

				<li>
					<img src={supportIcon} alt="" />
					<h4>Customer Support</h4>
					<p>
						Get your blood tests delivered at home collect a sample
						from the news your blood tests.
					</p>
				</li>
			</ul>
		</div>
	);
}

export default ReasonChooseList;
