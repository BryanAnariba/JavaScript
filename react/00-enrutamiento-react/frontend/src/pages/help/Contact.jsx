import React from 'react'

export const Contact = () => {
  return (
    <div className="contact">
        <h3>Contact Us!</h3>
        <form>
            <label htmlFor="email">
                <span>Your Email: </span>
                <input type="email" name="email" id="email" required />
            </label>
            <label htmlFor="message">
                <span>Your Email: </span>
                <textarea name="message" id="message" required></textarea>
            </label>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}
