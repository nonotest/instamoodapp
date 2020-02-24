import React from 'react'
import {
  Datagrid,
  DateField,
  Filter,
  List,
  ShowButton,
  TextField,
  SearchInput
} from 'react-admin'

const MediaFilter = (props: any) => (
  <Filter {...props}>
    <SearchInput alwaysOn allowEmpty source="q" />
  </Filter>
)

const MediaList = (props: any) => {
  return (
    <List
      {...props}
      filters={<MediaFilter />}
      sort={{ field: 'createdAt', order: 'DESC' }}
      perPage={25}
    >
      <Datagrid optimized rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        <DateField source="createdate" showTime />
        <ShowButton />
      </Datagrid>
    </List>
  )
}

export default MediaList
