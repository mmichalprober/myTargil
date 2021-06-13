import React from 'react';
import { connect } from 'react-redux';
import { actionsStore } from '../redux/actions/actions'
import { setState, useState, useEffect } from 'react'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


function mapStateToProps(state) {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(function AllUser(props) {
    const { users } = props;
    const [pictureUrl, setpictureUrl] = useState();
    const [abcde, setAbcd] = useState([{}]);

    const [picture, setPicture] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        fetch("http://localhost:3001/api/getAllUsers", requestOptions)
            .then(response => response.json())
            .then(result => { console.log(result); setAbcd(result) })
    }, [])

    return (

        <div>
            {abcde.map((x, key) => {
                return (<div key={key} style={{ display: 'inline-block', padding: "25px" }}>
                    {x}
                </div>)
            })}
        </div>
    )
}
)





















<div className='listPosts' style={{
        //  width:"600px",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "LightBlue", alignItems: "center", justifyContent: "center",

      }}>
        <p style={{ textAlign: "center" }}> <button className="btn col-2" > <Link to="/views">views</Link></button></p>

        <br></br>
        <button class="addp" onClick={() => { setShow(true) }} >add post</button>
        {show ?
          <Postdetail setShow={setShow}></Postdetail>

          : ""
        }
        <br></br>
        {console.log("posts" + listPosts)}
        {listPosts ?
          <div >
            <div>

              <table style={{

                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "DarkTurquoise", alignItems: "center", justifyContent: "center"
              }} className="table table-bordered table-hover" style={{ direction: 'rtl' }}>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>



                </tr>
                {listPosts.map((item, index) => (

                  <tr key={item} style={{ backgroundColor: "LightPink", alignItems: "center", justifyContent: "center" }}>

                    <td className="col-3">
                      <Card className={classes.root}>
                        <CardContent>
                          <h1>Title</h1>
                          <Typography variant="h5" component="h2">
                            <input type="text" value={listPosts[index].title}
                              onChange={(e) => setTitle(e.target.value, index)}></input>
                          </Typography>
                          <h1>Body</h1>
                          <Typography className={classes.pos} color="textSecondary">
                            <input type="text" value={listPosts[index].body}
                              onChange={(e) => setBody(e.target.value, index)}>

                            </input>
                          </Typography>
                        </CardContent>
                        Delete
                      <Checkbox
                          defaultChecked
                          indeterminate
                          onChange={(e) => { handleChange(e.target.value, item) }}
                          // onClick={handleChange((e) => e.target.value, item)}

                          inputProps={{ 'aria-label': 'indeterminate checkbox' }}

                        />
                        <br></br>
                        Update
                      <Checkbox
                          defaultChecked
                          indeterminate
                          onChange={(e) => { handleupdate(e.target.value, item) }}
                          // onClick={handleupdate((e) => e.target.value, item)}

                          inputProps={{ 'aria-label': 'indeterminate checkbox' }}

                        />
                      </Card>
                    </td>

                  </tr>
                ))}
              </table>
            </div>

          </div> : "no posts"}

      </div>‏
