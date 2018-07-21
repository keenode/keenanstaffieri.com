import React from 'react'

import HeadingCanvas from '../../components/HeadingCanvas/HeadingCanvas'
import WorkItem from '../../components/WorkItem/WorkItem'

import styles from './Work.css'

const work = () => (
  <div className={styles.pageContainer}>
    <HeadingCanvas text="My Work" />
    <WorkItem
      title="Project: Space Shooter"
      buttons={[{
        url: 'https://www.vizio.com/',
        text: 'Visit Site'
      }]} />

    <WorkItem
      title="Project: Roguelike"
      buttons={[{
        url: 'https://www.weareenvoy.com/',
        text: 'Visit Site'
      }]}
      alignLeft />

    <WorkItem
      title="VIZIO.com"
      buttons={[{
        url: 'https://www.vizio.com/',
        text: 'Visit Site'
      }]} />

      <WorkItem
      title="We Are ENVOY"
      buttons={[{
        url: 'https://www.weareenvoy.com/',
        text: 'Visit Site'
      }]}
      alignLeft />
      
      <WorkItem
        title="The Honest Kitchen"
        buttons={[{
          url: 'https://www.thehonestkitchen.com/',
          text: 'Visit Site'
        }]} />

      <WorkItem
        title="Mitchell &amp; Ness"
        buttons={[{
          url: 'https://www.mitchellandness.com/',
          text: 'Visit Site'
        }]}
        alignLeft />

        <WorkItem
          title="Elo Touch"
          buttons={[{
            url: 'https://www.elotouch.com/',
            text: 'Visit Site'
          }]} />
        <WorkItem

          title="Ascensus"
          buttons={[{
            url: 'https://www.ascensusspecialties.com/',
            text: 'Visit Site'
          }]}
          alignLeft />
  </div>
)

export default work
