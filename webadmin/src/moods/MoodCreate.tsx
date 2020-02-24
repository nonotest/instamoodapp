import React from 'react'
import { Create, SimpleForm, TextInput } from 'react-admin'

const MoodCreate = (props: any) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput autoFocus source="name" />
        <TextInput source="emoji" />
        <TextInput
          source="linearGradient"
          parse={(v: string) => JSON.parse(v)}
          format={(v: Object) => JSON.stringify(v)}
        />
      </SimpleForm>
    </Create>
  )
}

export default MoodCreate
