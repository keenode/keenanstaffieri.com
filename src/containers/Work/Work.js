import React from 'react'

import WorkItem from '../../components/WorkItem/WorkItem'

import styles from './Work.css'

/*
 * Space Shooter
 * Roguelike
 * VIZIO.com
 * WeAreEnvoy
 * The Honest Kitchen
 * Mitchell & Ness
 * Elo Touch
 * Ascensus
 */

const work = () => (
  <div className={styles.pageContainer}>
    <h1>My Work</h1>
    <WorkItem
      title="VIZIO.com"
      buttons={[{
        url: 'https://www.vizio.com/',
        text: "Visit Site"
      }]} />
      <WorkItem
      title="We Are ENVOY"
      buttons={[{
        url: 'https://www.weareenvoy.com/',
        text: "Visit Site"
      }]}
      alignLeft />
  </div>
)

export default work
