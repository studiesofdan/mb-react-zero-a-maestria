import React from 'react'

export default function Fragment({ propFragment }) {
  return (
    <>
        <h2>Primeiro título</h2>
        <h3>Segundo título</h3>
        <h4>{ propFragment }</h4>
    </>
  )
}