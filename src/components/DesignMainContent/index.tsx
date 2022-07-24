import classNames from 'classnames/bind';
import Button from '../Button';
import styles from './index.module.scss';

const cx = classNames.bind(styles);

function DesignMainContent() {
	return (
		<div className={cx('design-main-content')}>
			<h3>Designed & built by the latest code integration</h3>

			<p>
				The rise of mobile devices transforms the way we consume
				information entirely and the world's most elevant channels such
				as Facebook.
			</p>

			<Button width={170} height={57}>
				Learn more
			</Button>
		</div>
	);
}

export default DesignMainContent;
