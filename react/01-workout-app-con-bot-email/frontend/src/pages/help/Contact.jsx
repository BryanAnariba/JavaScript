import React from 'react';

export const Contact = () => {
  return (
    <div className="contact">
        <div className="row mt-5">
            <div className="col-lg-6 col-sm-12 text-center mx-auto">
                <div className="card">
                    <div className="card-header text-white text-center bg-dark">
                        <h3>Contact Us!</h3>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="emailInput" placeholder="name@example.com" />
                                <label className='text-dark' htmlFor="emailInput">Email: </label>
                            </div>
                            <div className="form-floating">
                                <input type="text" className="form-control" id="messageInput" placeholder="Message" />
                                <label className='text-dark' htmlFor="messageInput">Message: </label>
                            </div>
                            <div className="mt-3">
                                <button type="submit" className='btn btn-block btn-background-primary text-white'>
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
