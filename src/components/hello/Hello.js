import React from 'react'

export default function Hello({ name, big }) {
  if (big) {
    return <h1>Hi</h1>
  }
  return <p>Hello</p>
}
