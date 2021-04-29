import React, { useEffect } from 'react'

export default function Menu1_1() {
  useEffect(() => {
    console.log('被渲染menu1')
    return () => {
      console.log('被渲染menu1asdasdasd')
    }
  })
  return (
    <div>
      <h1>menu1-1</h1>
    </div>
  )
}
