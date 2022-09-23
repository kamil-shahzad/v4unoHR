import React from 'react'

export default function Forms() {
  return (
    <div>
    <form>
        <div className="form-group">
                <label for="exampleInputEmail1">Your Name</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Your Email</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Comments</label>
                <textarea  className="form-control" id="exampleInputPassword1" placeholder="Your Message"/>
            </div>
                < button type="submit" className="btn btn-primary">Send Message</button>
        </form>


    </div>
  )
}
