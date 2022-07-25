import classNames from 'classnames/bind';
import styles from './index.module.scss';

const cx = classNames.bind(styles);

function QuestionLabel() {
	return (
		<div className={cx('question-label')}>
			<h3>Frequently asked questions</h3>
			<p>
				The rise of mobile devices transforms the way we consume
				information entirely
				<br />
				and the world's most elevant channels such as Facebook.
			</p>
		</div>
	);
}

export default QuestionLabel;
