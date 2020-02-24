import React from 'react'
import { Admin, Resource } from 'react-admin'
import polyglotI18nProvider from 'ra-i18n-polyglot'
import {
  FirebaseAuthProvider,
  FirebaseDataProvider
} from 'react-admin-firebase'

import './App.css'

import themeReducer from './themeReducer'
import { Login, Layout } from './layout'
import customRoutes from './routes'
import englishMessages from './i18n/en'

import medias from './medias'
import mediaSources from './mediaSources'
import moods from './moods'

// TODO: Env config

const config = {
  apiKey: process.env.REACT_FB_API_KEY,
  databaseURL: 'https://instamooddev.firebaseio.com',
  projectId: 'instamooddev',
  storageBucket: 'instamooddev.appspot.com',
  messagingSenderId: process.env.REACT_FB_MESSAGING_SENDER_ID
}

// All options are optional
const options = {
  logging: true,
  watch: [],
  // Resources you explicitly dont want realtime updates for
  dontwatch: []
}

const dataProvider = FirebaseDataProvider(config, options)
const authProvider = FirebaseAuthProvider(config, options)

const i18nProvider = polyglotI18nProvider(locale => {
  // Always fallback on english
  return englishMessages
}, 'en')

const App = () => {
  return (
    <Admin
      title="Instamood Admin"
      dataProvider={dataProvider}
      customReducers={{ theme: themeReducer }}
      customRoutes={customRoutes}
      authProvider={authProvider}
      loginPage={Login}
      layout={Layout}
      i18nProvider={i18nProvider}
    >
      <Resource name="medias" {...medias} />
      <Resource name="mediaSources" {...mediaSources} />
      <Resource name="moods" {...moods} />
    </Admin>
  )
}

export default App
