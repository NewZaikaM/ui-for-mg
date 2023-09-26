import React, { FC } from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import { CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';

import styles from './TableMasters.module.css';

const data = [
	{
		src: 'https://images.unsplash.com/photo-1502657877623-f66bf489d236',
		title: 'Night view',
		description: '421M views',
	},
	{
		src: 'https://images.unsplash.com/photo-1527549993586-dff825b37782',
		title: 'Lake view',
		description: '474M views',
	},
	{
		src: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36',
		title: 'Mountain view',
		description: '398M views',
	},
	{
		src: 'https://images.unsplash.com/photo-1502657877623-f66bf489d236',
		title: 'Night view',
		description: '1021M views',
	},
	{
		src: 'https://images.unsplash.com/photo-1527549993586-dff825b37782',
		title: 'Lake view',
		description: '1174M views',
	},
	{
		src: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36',
		title: 'Mountain view',
		description: '1398M views',
	},
];
const TablesMaster: FC = () => {
	return (
		<Box className={styles.table}>
			{data.map((item) => {
				return (
					<CardActionArea key={item.description}>
						<Card
							className={styles.card}
							orientation="horizontal"
							variant="plain"
						>
							<AspectRatio
								ratio="1"
								sx={{ minWidth: '5rem', minHeight: '5rem', borderRadius: "50%" }}
							>
								<img
									srcSet={`${item.src}?h=50&fit=crop&auto=format&dpr=2 2x`}
									src={`${item.src}?h=50&fit=crop&auto=format`}
									alt={item.title}
								/>
							</AspectRatio>
							<CardContent>
								<div className={styles.content}>
									<h3 className={styles.name}>GM’s name</h3>
									<h3 className={styles.rating}>GM’s rating</h3>
									<h3 className={styles.experience}>
										numbers of games experience
									</h3>
								</div>
							</CardContent>
						</Card>
					</CardActionArea>
				);
			})}
		</Box>
	);
};

export default TablesMaster;
