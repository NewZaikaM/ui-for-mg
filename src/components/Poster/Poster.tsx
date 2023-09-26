import React, { FC } from 'react';
import Button from '@mui/material/Button';

import styles from './Poster.module.css';

const Poster: FC = () => {
	return (
		<div className={styles.poster}>
			<Button className={styles.btn} size='large' variant="contained" color="primary">
				Find Game
			</Button>
		</div>
	);
};

export default Poster;
