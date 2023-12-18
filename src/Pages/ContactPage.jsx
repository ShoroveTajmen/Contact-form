/* eslint-disable react/no-unknown-property */
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div>
      <h1 className="title">Contact Us</h1>
      {/* contact-container div */}
      <div className="contact-container">
        {/* contact-info div */}
        <div className="conatct-info">
          <img
            src="https://i.ibb.co/WPTXf1B/403618078-832254351918496-6604911288925960510-n.png"
            alt=""
          />
          <h1 className="c-name">BITSS</h1>

          <div className="c-info">
            <p>BITSS BFIN SASU, B RUE DUBLIN 34200 SETE FRANCE</p>
            <p>+003366100010</p>
            <p>support@bobosohomail.com</p>
          </div>
          {/* Map */}
          <div className="mt-[50px]">
            {" "}
            <iframe
              className=""
              src="https://maps.google.com/maps?q=dhaka&amp;t=&amp;z=9&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
              frameBorder="0"
              scrolling="no"
              // style={{ width: "400px", height: "400px", borderRadius:"30px" }}
            ></iframe>
          </div>
        </div>
        {/* contact-form div */}
        {/* name */}
        <div className="contact-form">
          <form>
            {/* name */}
            <div className="name">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <br />
              <input type="text" name="name" className="name" required />
            </div>
            {/* email */}
            <div>
              <div className="email">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <br />
                <input type="email" name="email" className="email" required />
              </div>
            </div>
            {/* Phone */}
            <div className="phone">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <br />
              <select name="brand" className="option">
                <option disabled selected>
                  Andarra(+376)
                </option>
                <option>Bangladesh(+008)</option>
                <option>US(+1)</option>
                <option>UK(+44)</option>
                <option>Australia(+61)</option>
              </select>
              <input type="text" className="number" />
            </div>
            {/* Known From */}
            <div className="s-option">
              <label className="label">
                <span className="label-text">How do you hear about us?</span>
              </label>
              <br />
              <select name="brand" className="c-name">
                <option disabled selected>
                  Please select option
                </option>
                <option>Bangladesh(+008)</option>
                <option>Facebook</option>
                <option>LinkedIn</option>
                <option>Friends</option>
                <option>Others</option>
              </select>
            </div>
            {/* skype */}
            <div>
              <div className="skype">
                <label className="label">
                  <span className="label-text">
                    Skype (For Contact Purpose)
                  </span>
                </label>
                <br />
                <input type="text" name="skype" className="skype" required />
              </div>
            </div>
            {/* query */}
            <div>
              <div className="query">
                <label className="label">
                  <span className="label-text">Subject/Query for</span>
                </label>
                <br />
                <input type="text" name="skype" className="skype" required />
              </div>
            </div>
            {/* message */}
            <div className="message">
              <label for="myTextarea">Message</label> <br />
              <textarea
                id="myTextarea"
                name="myTextarea"
                rows="13"
                cols="71"
              ></textarea>
            </div>
            <p className="note">
              Note Before submit, please make sure that you fill/select all
              required field
            </p>
            <button className="note">marked by start(*)</button>
            {/* captcha */}
            <div>
              <p className="note">CAPTCHA MATH: *</p>
              <input type="text" className="captcha" />
            </div>
            <div className="">
              <button className="submitButton">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
