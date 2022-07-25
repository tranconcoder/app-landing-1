import styles from './index.module.scss';
import { ReactComponent as PlusIcon } from '../../assets/images/question/plus-icon.svg';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function QuestionList() {
	return (
		<div className={cx('question-list-container')}>
			<ul className={cx('question-list')}>
				<li className={cx('active')}>
					<h4>How to contact with riders emergency?</h4>
					<p>
						Leverage agile frameworks to provide a robust synopsis
						for high level overviews. Iterative approaches to
						corporate strategy foster collaborative thinking to
						further the overall value proposition. Organically grow
						the holistic world view of disruptive innovation via
						workplace diversity and empowerment.
					</p>
				</li>

				<li>
					<h4>
						App installation failed, how to update system
						information?
					</h4>
					<PlusIcon />
				</li>

				<li>
					<h4>Website reponse taking time, how to improve?</h4>
					<PlusIcon />
				</li>

				<li>
					<h4>New update fixed all bug and issues</h4>
					<PlusIcon />
				</li>

				<li>
					<h4>How to contact with riders emergency?</h4>
					<PlusIcon />
				</li>
			</ul>
		</div>
	);
}

export default QuestionList;
