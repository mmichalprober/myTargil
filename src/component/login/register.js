import { connect } from "react-redux";
import userName from '../../redux/reducers/userName'
import React, { useEffect, useState } from 'react'
import './login.css'
import { useHistory } from 'react-router-dom'
import { actionsStore } from '../../redux/actions/actions'

function mapStateToProps(state) {
  return {
    user: state.user
  }
}
const mapDispatchToProps = (dispatch) => ({
  setUserName: (value) => dispatch(actionsStore.setUserName(value)),
  setUserEmail: (value) => dispatch(actionsStore.setUserEmail(value))

})

export default connect(mapStateToProps, mapDispatchToProps)(function Register(props) {
  const history = useHistory()
  const { setUserName, setUserEmail, user } = props;
  const [name, setName] = useState({ name: "" })
  const [useremail, setUseremail] = useState({ useremail: "email" })
  const [userPassward, setUserPassward] = useState({ userPassward: "" })
  const [MessagEmail, setMessagEmail] = useState()
  const [MessagName, setMessagName] = useState()
  const [Messagpassward, setMessagpassward] = useState()

  const showmessage = (m) => {
    alert(m)
  }

  const validate = () => {
    console.log(useremail)
    let fail = true;
    // check password minimal length
    if (userPassward.length < 6) {
      setMessagpassward('password too short');
      fail = false;
    }
    // check mail
    if (useremail.useremail === "email" || useremail.indexOf("@") <= 0) {
      setMessagEmail("not valid email address");
      fail = false;
    }
    // check name
    if (name.length < 1) {
      setMessagName("name not valid");
      fail = false;
    }
    if (fail) {
      submitRegister()
    }
  }

  const submitRegister = () => {
    console.log(name, useremail, userPassward)
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "name": name,
      "mail": useremail,
      "password": userPassward
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:3001/api/createUser", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        if (result.isIn == true) {
          showmessage(" the user is exiest")
        }
        else {
          document.cookie = "jwt" + "=" + result.token + ';'
          showmessage("User created")
          setUserName(name)
          setUserEmail(useremail)
          history.push('loginP')
        }
      })
      .catch(error => console.log('error', error));
  }

  return (
    <>
    <div className="inner-container">
      <div className="header">
        <p style={{ display: 'inline-block', borderBottom: "2px solid" }}> Sign up</p>
        <p style={{ display: 'inline-block', paddingLeft: "20px" }} onClick={() => history.push('/login')}> Log in</p>
      </div>
      <div className="box">

        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" className="login-input" onChange={(e) => setName(e.target.value)} placeholder="Username" />
        </div>
        <p className="message">{MessagName}</p>

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" className="login-input" onChange={(e) => setUseremail(e.target.value)} placeholder="Email" />
        </div>
        <p className="message">{MessagEmail}</p>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" className="login-input" onChange={(e) => setUserPassward(e.target.value)} placeholder="Password" />
        </div>
        <p className="message">{Messagpassward}</p>
        <button type="button"className="login-btn"onClick={validate}>Sign In</button>
      </div>
    </div>

    </>
  )
})

