import "../styles/Form.css";
export default function Contactform() {
  return (
    <>
      <div
        style={{
          padding: "2rem",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        }}
      >
        <div className="headingdiv">
          <h2 className="contact-heading">Contact Us!</h2>
        </div>
        <form className="form">
          <label htmlFor="name" className="lable">
            Name:
          </label>

          <input
            type="text"
            name="user"
            id="name"
            placeholder="Enter yourname"
          />
          <br></br>

          {/* elemaent 2 */}
          <label htmlFor="class" className="lable">
            Class:
          </label>

          <input
            type="text"
            name="userclass"
            id="class"
            placeholder="Enter Your Class"
          />
          <br></br>

          {/* elemnet 3 */}
          <label htmlFor="class" className="lable">
            Email:
          </label>

          <input
            type="text"
            name="useremail"
            id="class"
            placeholder="Enter Your Email"
          />
          <br></br>

          {/* element4 */}
          <label htmlFor="number" className="lable">
            Phone Number:
          </label>

          <input
            type="tel"
            name="userphonenumber"
            id="number"
            className="phonenumber"
            placeholder="Enter your phonenumber"
          />
          <br></br>

          {/* element 5 */}
          <label htmlFor="feedback" className="lable">
            Your Query:
          </label>

          <textarea
            id="feedback"
            rows={5}
            placeholder="Entery your feedbak or Query"
          ></textarea>
          <br></br>
          <button type="submit" className="btnsub">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
