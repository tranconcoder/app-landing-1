import type { CSSProperties } from 'react';
import type { ButtonProps } from '../../types/props';

import styles from './index.module.scss';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Button({ children, width, height, ...allAttribute }: ButtonProps) {
	const styles: CSSProperties = {
		...allAttribute.style,
		width,
		height: height || 60,
	};

	return (
		<button
			{...allAttribute}
			style={styles}
			className={`${cx('button')} ${allAttribute.className}`}
		>
			<p>{children}</p>
		</button>
	);
}

export default Button;
