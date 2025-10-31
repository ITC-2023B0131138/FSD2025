import React from 'react'
import './profile.css';

export default function Profile({ name, branch, section, college }) {
  return (
    <div className='container'>
      <h3>This is my profile page</h3>
      <img src="img1.webp" alt="Profile Picture" height={100} width={150}/>
      <h2>Name: {name}</h2>
      <h2>Branch: {branch}</h2>
      <h2>Section: {section}</h2>
      <h2>College: {college}</h2>
    </div>
  )
}