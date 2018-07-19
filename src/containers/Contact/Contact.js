import React, { Component } from 'react'

import styles from './Contact.css'

class Contact extends Component {
  submitHandler(e) {
    e.preventDefault()
    console.log('[submitHandler]')
  }

  render() {
    return (
      <div className={styles.pageContainer}>
        <h1>Contact</h1>
        <form className={styles.contactForm} onSubmit={this.submitHandler}>
          <div className={styles.contactForm_Row}>
            <input name="your-name" placeholder="Your Name" />
          </div>
          <div className={styles.contactForm_Row}>
            <input name="your-email" placeholder="Your Email" />
          </div>
          <div className={styles.contactForm_Row}>
            <textarea name="your-message" placeholder="Your Message" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Contact
