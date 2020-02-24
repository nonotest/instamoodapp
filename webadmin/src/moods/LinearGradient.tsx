import React from 'react'
import { FunctionField } from 'react-admin'

function LinearGradientField() {
  return (
    <FunctionField
      source="linearGradient"
      render={(record: any) => {
        return <div>{JSON.stringify(record.linearGradient)}</div>
      }}
    />
  )
}

export default LinearGradientField
