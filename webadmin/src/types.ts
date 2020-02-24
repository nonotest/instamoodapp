import { ReduxState, Record, Identifier } from 'ra-core'

export type ThemeName = 'light' | 'dark'

export interface AppState extends ReduxState {
  theme: ThemeName
}

export interface Forum extends Record {
  id: Identifier
  ticker: string
  name: string
  nameTicker: string
  slug: string
  threadCount: number
  postCount: number
  viewCount: string
  CompanyId: Identifier
  UserId: Identifier
  oldId: Identifier
  createdAt: string
  updatdAt: string
  deletedAt: string
}

export interface Company extends Record {
  id: Identifier
  ticker: string
  name: string
  exchange: string
  about: string
  category: string
  stats: string
  createdAt: string
  updatdAt: string
  deletedAt: string
}

/**
 * Types to eventually add in react-admin
 */
export interface FieldProps<T extends Record = Record> {
  addLabel?: boolean
  label?: string
  record?: T
  source?: string
}
