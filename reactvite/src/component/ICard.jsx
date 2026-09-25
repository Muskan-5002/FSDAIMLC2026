import React from 'react'

function ICard() {
  return (
    <div style={{
      border: '3px solid red',
      height: '250px',
      width: '450px',
      marginLeft: '200px',
      borderRadius: '10px',
      overflow: 'hidden',
      backgroundColor: 'white'
    }}>

      <h2 style={{
        backgroundColor: 'brown',
        color: 'white',
        margin: '0',
        padding: '10px',
        textAlign: 'center'
      }}>
        ABES ENGINEERING COLLEGE
      </h2>
      <img src=''></img>
      <h3>Roll:{props.roll}</h3>
      <h3>Name:{props.name}</h3>
      <h3>Branch::{props.branch}</h3>
      <h3 style={{
        textAlign: 'center',
        color: 'darkblue'
      }}>
        STUDENT ID CARD
      </h3>

      <div style={{ paddingLeft: '25px' }}>

        <p><b>Name:</b> Muskan Jaiswal</p>

        <p><b>Course:</b> B.Tech </p>

        <p><b>Roll No:</b> 2400321530130</p>

        <p><b>Branch:</b> Computer Science & Engineering - AIML</p>

        <p><b>Year:</b> 3rd Year</p>

        <p><b>Email:</b> jaiswalmussu02@gmail.com</p>

      </div>

    </div>
  )
}

export default ICard