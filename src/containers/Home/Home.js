import React, { Fragment } from 'react'

import HeroCanvas from '../../components/HeroCanvas/HeroCanvas'

import styles from './Home.css'

const home = () => (
  <Fragment>
    <div className={styles.pageContainer}>
      <h1>Keenan Staffieri</h1>
      <h3>Frontend Developer</h3>
      <p>My name is Keenan Staffieri.</p>
      <p>Always Learning.</p>
    </div>
    <HeroCanvas />
  </Fragment>
)

export default home
