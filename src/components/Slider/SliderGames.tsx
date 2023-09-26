import React, { FC } from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import { CardActionArea } from '@mui/material';

import styles from './SliderGames.module.css';

const data = [
	{
		src: 'https://images.unsplash.com/photo-1502657877623-f66bf489d236',
		title: 'Night view',
		description: '4.21M views',
	},
	{
		src: 'https://images.unsplash.com/photo-1527549993586-dff825b37782',
		title: 'Lake view',
		description: '4.74M views',
	},
	{
		src: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36',
		title: 'Mountain view',
		description: '3.98M views',
	},
	{
		src: 'https://images.unsplash.com/photo-1502657877623-f66bf489d236',
		title: 'Night view',
		description: '10.21M views',
	},
	{
		src: 'https://images.unsplash.com/photo-1527549993586-dff825b37782',
		title: 'Lake view',
		description: '11.74M views',
	},
	{
		src: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36',
		title: 'Mountain view',
		description: '13.98M views',
	},
	{
		src: 'https://images.unsplash.com/photo-1502657877623-f66bf489d236',
		title: 'Night view',
		description: '4.2M views',
	},
	{
		src: 'https://images.unsplash.com/photo-1527549993586-dff825b37782',
		title: 'Lake view',
		description: '4.7M views',
	},
	{
		src: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36',
		title: 'Mountain view',
		description: '3.9M views',
	},
	{
		src: 'https://images.unsplash.com/photo-1502657877623-f66bf489d236',
		title: 'Night view',
		description: '2.21M views',
	},
	{
		src: 'https://images.unsplash.com/photo-1527549993586-dff825b37782',
		title: 'Lake view',
		description: '5.74M views',
	},
	{
		src: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36',
		title: 'Mountain view',
		description: '6.98M views',
	},
	{
		src: 'https://images.unsplash.com/photo-1502657877623-f66bf489d236',
		title: 'Night view',
		description: '7.21M views',
	},
	{
		src: 'https://images.unsplash.com/photo-1527549993586-dff825b37782',
		title: 'Lake view',
		description: '8.74M views',
	},
	{
		src: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36',
		title: 'Mountain view',
		description: '9.98M views',
	},
	{
		src: 'https://images.unsplash.com/photo-1502657877623-f66bf489d236',
		title: 'Night view',
		description: '15.2M views',
	},
	{
		src: 'https://images.unsplash.com/photo-1527549993586-dff825b37782',
		title: 'Lake view',
		description: '16.7M views',
	},
	{
		src: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36',
		title: 'Mountain view',
		description: '17.9M views',
	},
];

const Slider: FC = () => {
	return (
		<Box className={styles.slider}>
			{data.map((item) => (
				<CardActionArea key={item.description}>
					<Card orientation="vertical" variant="plain">
						<AspectRatio ratio="1" sx={{ minWidth: '24rem', mb: '1.4rem' }}>
							<img
								srcSet={`${item.src}?h=140&fit=crop&auto=format&dpr=2 2x`}
								src={`${item.src}?h=140&fit=crop&auto=format`}
								alt={item.title}
							/>
						</AspectRatio>
						<div className={styles.content}>
							<div className={styles.schedule}>
								<img src="#" alt="#" />
								<time>хх.хх.хх</time>
								<time>00:00</time>
							</div>
							<h3 className={styles.company}>Campaign’s name</h3>
							<h4 className={styles.price}>Price</h4>
							<div className={styles.tags}>
								<button>tags</button>
								<button>tags</button>
								<button>tags</button>
								<button>tags</button>
								<button>tags</button>
							</div>
							<p className={styles.seats}>Available seats</p>
						</div>
					</Card>
				</CardActionArea>
			))}
		</Box>
	);
};

export default Slider;
