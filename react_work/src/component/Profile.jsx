import React from 'react'
import './profile.css';

export default function Profile({ name, branch, section, college }) {
  return (
    <div className='container'>
      <h3>This is my profile page</h3>
      <h2>Name: {name}</h2>
      <h2>Branch: {branch}</h2>
      <h2>Section: {section}</h2>
      <h2>College: {college}</h2>
    </div>
  )
}