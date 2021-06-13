import React from 'react';
import { connect } from 'react-redux';
// import { actions } from './actions'
// import React, { Component } from 'react'
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
        // window.scrollTo(0, 0);
        // var requestOptions = {
        //     method: 'GET',
        //     redirect: 'follow'
        // };
        // fetch("http://localhost:3001/api/getAllUsers", requestOptions)
        fetch("http://localhost:3001/api/getAllUsers")
            .then(response => response.json())
            .then(result => { console.log(result); setAbcd(result) })
        // debugger
        // console.log(aa)


        // {
        // console.log('result', result)
        // setaa(result)
        // .then(result => setmypic(result))

        // setaa(result, () => { console.log(aa); });

        // setaa(result).then(()=>{console.log('myp',aa)})
        // console.log('myp', aa)
        //   aa.map((x, key) => { console.log('x', x) })
        // })

        // .catch(error => console.log('error', error));

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
        //  <>
        // <div style={{ marginLeft: "30%" }}  ><h1 style={{ color: "green" }}>Picture Of The Day</h1>
        //     <div className="card" className="apod" style={{ width: "25rem" }}>

        //             <h1>hiiiiiiiiiiiiiiiiii</h1>
        //             {/* aa&&aa.map((a)... */}

        //          <div>
        //             { aa&&aa.map((x, key) => {
        //                 return (<div key={key} style={{ display: 'inline-block', padding: "25px" }}>
        //                     <p>{x.name}</p>
        //                 </div>)
        //             })}
        //         </div> 




        //     </div>
        // </div>
        // </>
//     )
// }
// )
/////////////////////////////////////////////////////////////////////////////////////////////////

 //    <div>
        //         <h1>hiiiiiiii</h1>
        //       {
        //          aa.map((x, key) => {
        //          <div key={key} >
        //              <p>{x}</p> 
        //         </div> 
        //          })
        //     } 
        //     </div> 














// import React from 'react';
// import { connect } from 'react-redux';
// // import { actions } from './actions'
// // import React, { Component } from 'react'
// import { actionsStore } from '../redux/actions/actions'
// import { setState, useState, useEffect } from 'react'


// function mapStateToProps(state) {
//     return {
//         users: state.users
//     }
// }
// // const mapDispatchToProps = (dispatch) => ({
// //     setUserName: (value) => dispatch(actionsStore.setUserName(value)),
// //     setUserEmail: (value) => dispatch(actionsStore.setUserEmail(value)),

// // })
// export default connect(mapStateToProps)(function AllUser(props) {
//     const { users } = props;
//     const [pictureUrl, setpictureUrl] = useState();
//     // const [aa, setaa] = useState([, ,]);
//     const [aa, setaa] = useState([{}]);

//     const [picture, setPicture] = useState([]);

//     // function add(picture) {

//     //     setPicture(picture)
//     //     console.log("current user    " , users)

//     //     var myHeaders = new Headers();
//     //     myHeaders.append("Authorization", document.cookie ? document.cookie.split(";").filter(x => x.includes("jwt"))[0].split("=").pop() : null);
//     //     myHeaders.append("Content-Type", "application/json");
//     //     // myHeaders.append("authorization", user);
//     //     var requestOptions = {
//     //         method: 'POST',
//     //         headers: myHeaders,
//     //         body: JSON.stringify(picture),
//     //     };


//     //     fetch(`http://localhost:3001/createPicture/${users.email}`, requestOptions)
//     //         .then(response => response.json())
//     //         .then(res => console.log(res))
//     //         .catch(error => console.log('error', error));
//     // }

//     useEffect(() => {
//         // console.log("loginPPPPPPPp:::", users)
//         window.scrollTo(0, 0);
//     //     var requestOptions = {
//     //         method: 'GET',
//     //         redirect: 'follow'
//     //     };
//     //     fetch(`http://localhost:3001/api/getAllUsers`, {
//     //         method: 'GET',
//     //     }).then(response => response.json())
//     //         .then(data => {
//     //             console.log('data is:', data)
//     //             setmypic(data)
//     //             console.log('my', mypic)
//     //             // data.map((a,key)=>{
//     //             //     console.log('map',a)
//     //             // })
//     //         })
//     //         .catch(error => console.log('error', error));
//     // }, [])

// var requestOptions = {
//   method: 'GET',
//   redirect: 'follow'
// };

// fetch("http://localhost:3001/api/getAllUsers", requestOptions)
//   .then(response => response.json())
//   .then(result => {
//       console.log('result',result)
//       setaa(result)
// console.log('myp',aa)
// })

//   .catch(error => console.log('error', error));
//   }, [])
//     // const submitLogin1 = () => {
//     //     // console.log('email:', email)
//     //     fetch(`http://localhost:3001/api/getAllUsers`, {
//     //       method: 'GET',
//     //     }).then(response => response.json()).then(data => {
//     //       console.log('data is:', data)
//     //       if (data) { // console.log(passward)
//     //         if (!data.user) {
//     //           setMessage()
//     //         }
//     //         else {
//     //           document.cookie = "jwt" + "=" + data.token + ';'
//     //           // setUserName(data.user.name)
//     //           // console.log(data.user.mail)

//     //           // setUserEmail(data.user.mail)
//     //           // console.log("users.email", user.email)
//     //           history.push('All')
//     //         }
//     //       }
//     //       else setMessage()
//     //     }

//     //       )
//     //   }

//     return (
//         <>
//         <div style={{ marginLeft: "30%" }}  ><h1 style={{ color: "green" }}>Picture Of The Day</h1>
//             <div className="card" className="apod" style={{ width: "25rem" }}>
//                 <h1>hello to:</h1>
//                 {/* <h1>hello to:{users.name}</h1>   */}


//             </div>
//         </div>
//         </>
//     )
// }
// )