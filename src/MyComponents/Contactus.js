import "./Contactus.css"
import React, { useState } from 'react';
// import { HttpRequest } from "./FirebaseApi/HttpRequest";



const Contactus = () => {
  const [query, setQuery] = useState({ Name: "", Email: "", ContactNo: "", Description: "" });




  const handleChange = e => {
    const { name, value } = e.target;
    setQuery(prevState => ({
      ...prevState,
      [name]: value

    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log()
    if (query.Name.length === 0 || query.Email.length === 0 || query.ContactNo.length === 0 || query.Description.length === 0) {
      alert("Each fields are mandatory to fill.")
    }
    else {
      const FIREBASE_DOMAIN = 'https://mytodolist-e06a2-default-rtdb.firebaseio.com/'
      fetch(`${FIREBASE_DOMAIN}/Contact-Us .json`, {
        method: "POST",
        body: JSON.stringify(query),
        headers: {
          "Content-Type": "application/json",
        },
      });
      alert("Details submitted successfully. We will contact you soon.")
      setQuery({ Name: "", Email: "", ContactNo: "", Description: "" });
    }
  }

  return (
    <div className="box" >
      <h3 style={{ textAlign: "center", textDecoration: "underline", color: "black", fontFamily: "italic" }}><b> Feel free to ask us anything!</b></h3>
      <p style={{ textAlign: "center", fontSize: "20px", color: "grey", fontFamily: "italic" }}>Have doubt or suggestion to make? Feel free to ask anything. If you have any suggestions, please let me know. Your suggestions are highly appreciated. I appreciate your time and try hard to reply to every single message posted here! Keep dropping your priceless opinions.</p>
      <form className="contact" onSubmit={submitHandler}>
        <div className="form-group input ">
          <input type="Name" className="form-control field" value={query.Name} onChange={handleChange} name="Name" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Name" />
        </div>
        <div className="form-group input">
          <input type="maill" className="form-control field" onInvalid={e => e.target.setCustomValidity('Please Enter Valid E-mail Address ( Example- test@domain.com)')}
            onInput={e => e.target.setCustomValidity('')} value={query.Email} onChange={handleChange} name="Email"  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" placeholder="Enter your Email" />
        </div>

        <div className="form-group input">
          <input type="Contact-no" className="form-control field" value={query.ContactNo} onChange={handleChange} name="ContactNo" onInvalid={e => e.target.setCustomValidity('Please Enter 10 Digit Mobile No.')}
            onInput={e => e.target.setCustomValidity('')}  pattern="[6-9]{1}[0-9]{9}" id="exampleInputPassword1" placeholder="Enter your contact no." />
        </div>
        <div className="form-group input">
          <textarea className="form-control field" value={query.Description} onChange={handleChange} name="Description" id="exampleFormControlTextarea1" rows="3" placeholder="Mention your query here"></textarea>
        </div>

        <div className="button">
          <button type="submit" className="btn btn-success ">Submit</button>
        </div>
      </form>

    </div>

  );

}
export default Contactus;