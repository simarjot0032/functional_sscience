import { useState } from "react";
import "../styles/Form.css";
import { MdClass, MdDriveFileRenameOutline } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";
import Supabase from "./Supabase";
let name = document.querySelector("#name")?.innerHTML;
let classs = document.querySelector("#class")?.innerHTML;
let phonenumber = document.querySelector("#number")?.innerHTML;
let query = document.querySelector("#feedback")?.innerHTML;
let email = document.querySelector("#email")?.innerHTML;

async function callfor() {
  const { data } = await Supabase.from("Contactform")
    .insert([
      {
        Name: name,
        Email: email,
        Class: classs,
        Phonenumber: phonenumber,
        Feedback: query,
      },
    ])
    .select();
  console.log(data);
}
callfor();

export default function Contactform() {
  const [currentbtn, setbtn] = useState("btnsub");

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
        <form className="form" method="post">
          <label htmlFor="name" className="lable">
            <MdDriveFileRenameOutline
              size="25"
              color="dodgerblue"
              fill="dodgerblue"
            ></MdDriveFileRenameOutline>
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
            <MdClass size="25" color="dodgerblue" fill="dodgerblue"></MdClass>
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
            <AiOutlineMail
              size="25"
              color="dodgerblue"
              fill="dodgerblue"
            ></AiOutlineMail>
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
            <BsFillTelephoneFill
              size="25"
              color="dodgerblue"
              fill="dodgerblue"
            ></BsFillTelephoneFill>
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
            <BiMessageDetail
              size="25"
              color="dodgerblue"
              fill="dodgerblue"
            ></BiMessageDetail>
            Your Query:
          </label>
          <textarea
            id="feedback"
            rows={5}
            placeholder="Enter your feedback or Query"
          ></textarea>
          <br></br>
          <button
            type="submit"
            className={" btndisable " + " " + `${currentbtn}`}
            onClick={callfor}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
