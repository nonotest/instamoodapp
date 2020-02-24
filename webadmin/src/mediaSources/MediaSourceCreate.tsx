import React from 'react'
import { Create, SimpleForm, TextInput } from 'react-admin'

const MediaSourceCreate = (props: any) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput autoFocus source="name" />
      </SimpleForm>
    </Create>
  )
}

export default MediaSourceCreate
