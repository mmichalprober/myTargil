import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { setState, useState, useEffect } from 'react'
import { actionsStore } from '../redux/actions/actions'
import { connect } from "react-redux";


function mapStateToProps(state) {
    return {
      users: state.users
    }
  }
  const mapDispatchToProps = (dispatch) => ({
    setUserName: (value) => dispatch(actionsStore.setUserName(value)),
    setUserEmail: (value) => dispatch(actionsStore.setUserEmail(value))
  
  })
  
  export default connect(mapStateToProps,mapDispatchToProps)(function ComponentName(props) {
    
    const { setUserName, setUserEmail, users } = props;
    const [todaypic, settodaypic] = useState([,,])
    const [mypic, setmypic] = useState([,,])
   
    
    var myHeaders = new Headers();
    myHeaders.append("Authorization", document.cookie?document.cookie.split(";").filter(x=>x.includes("jwt"))[0].split("=").pop():null);
    myHeaders.append("Content-Type", "application/json");
    useEffect(() => {
        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        console.log(users.email)
        fetch(`http://localhost:3001/getPicturs/${users.email}`, requestOptions)
            .then(response => response.json())
            .then(result => settodaypic(result))
            .catch(error => console.log('error', error));

        fetch(`http://localhost:3001/getPictursUser/${users.email}`, requestOptions)
            .then(response => response.json())
            .then(result => setmypic(result))
            .catch(error => console.log('error', error));
    }, [])
 
    const imgstyle={
    border: "1px solid grey",
    borderRadius: "4px",
    padding: "5px",
    }

    return (
        <div>
            <div id="daypics">
            <h1 style={{textAlign:"center"}}>The pics of the days</h1>
            {todaypic.map((x, key) => {
                return (<div key={key} style={{display: 'inline-block' ,padding:"25px"}} >   
                   <p>{x.date}</p>
                    <p>{x.title}</p>
                     {x.media_type ==="video"&&  <iframe src={x.url}  style={imgstyle} width="200" height="100" controls="controls" autoplay="autoplay"></iframe>}
                     {x.media_type ==="image"&&  <img src={x.url}  style={imgstyle} width="200" height="100"  className="card-img-top" alt="img" />}
                     {/* <img src={x.url} style={imgstyle} width="200" height="100" controls="controls" autoplay="autoplay" ></img> */}
                    <p>number of watchings:{x.num}</p>
                </div>)
            })}</div>
            <div id="mypics">
                <h1 style={{textAlign:"center"}}>my pics</h1>
                {mypic.map((x, key) => {
                    return (<div key={key} style={{display: 'inline-block' ,padding:"25px"}}>
                        <p>{x.date}</p>
                        <p>{x.title}</p>
                        <img src={x.url} style={imgstyle}width="200" height="100" controls="controls" autoplay="autoplay"></img>
                        <p>number of addings:{x.num}</p>
                        {/* <label>{caunt}:</label> */}
                    </div>)
                })}
            </div>
        </div>
    )
})
 

