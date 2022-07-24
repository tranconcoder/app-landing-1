import classNames from 'classnames/bind';
import ReasonChooseHeading from '../ReasonChooseHeading';
import ReasonChooseList from '../ReasonChooseList';
import styles from './index.module.scss';

const cx = classNames.bind(styles);

function ReasonChoose() {
	return (
		<section className={cx('reason-choose')}>
			<div className={cx('separate')}></div>

			<div className={cx('container')} data-container>
				<ReasonChooseHeading />

				<ReasonChooseList />
			</div>
		</section>
	);
}

export default ReasonChoose;
