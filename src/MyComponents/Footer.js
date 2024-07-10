import React from 'react'

export default function Footer() {
  let footerstyle={
    position: "relative",
    top: "28vh",
    width: "100%",
    fontSize: "large",
    border: "0.9px solid black"
  }
  return (
    <footer style={footerstyle}>
      <p className="text-center">Copyright &copy; TaskTracker.com</p>
      </footer> 
    
  )
}
