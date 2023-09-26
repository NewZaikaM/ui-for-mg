import React, {FC} from 'react'
import { Button } from '@mui/material'

import Slider from '../Slider/SliderGames'
import TablesMaster from '../TableMasters/TableMasters'

import styles from './Content.module.css'

const Content: FC = () => {
  return (
    <main>
      <div className={styles.games}>
        <h3 className={styles.title}>Upcoming games</h3>
        <Button variant='contained' size='large' className={styles.allGames}>{`See all >`}</Button>
        <Slider />
        <h3 className={styles.title}>Our GameMasters</h3>
        <Button variant='contained' size='large' className={styles.allGames}>{`See all >`}</Button>
        <TablesMaster />
      </div>
    </main>
  )
}

export default Content