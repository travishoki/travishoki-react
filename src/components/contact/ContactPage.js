import React from 'react';
import {Link} from 'react-router';

const img_profile_pic = require('../../../images/global/travis-hoki-2.jpg');

class ContactPage extends React.Component {
  render() {
    return (
        <div className="boxed">
            <h1>Contact Me</h1>
            <div className="row">
                <div className="col-sm-6">
                    <img src={img_profile_pic}/>
                </div>
                <div className="col-sm-6">
                    <p>Needing full-time or contract work</p>
                    <p>Contact me with comments or critiques</p>
                    <p>801-691-2373</p>
                    <p>travis.hoki@gmail.com</p>
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Name"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Email"/>
                        </div>
                        <div className="form-group">
                            <textarea  className="form-control" placeholder="Comment"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
  }
}

export default ContactPage;
