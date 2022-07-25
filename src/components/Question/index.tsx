import classNames from 'classnames/bind';
import QuestionLabel from '../QuestionLabel';
import QuestionList from '../QuestionList';
import styles from './index.module.scss';

const cx = classNames.bind(styles);

function Question() {
	return (
		<section className={cx('question')}>
			<div className={cx('container')} data-container>
				<QuestionLabel />

				<QuestionList />
			</div>

			<div className={cx('separate')}></div>
		</section>
	);
}

export default Question;
