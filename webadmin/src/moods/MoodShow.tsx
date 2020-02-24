// in src/posts.js
import React from 'react'
import { Show, SimpleShowLayout, TextField, DateField } from 'react-admin'

const MoodShow = (props: any) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="linearGradient" />
      <DateField label="Publication date" source="createdate" />
    </SimpleShowLayout>
  </Show>
)

export default MoodShow
