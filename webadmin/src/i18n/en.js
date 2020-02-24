import englishMessages from 'ra-language-english'

export default {
  ...englishMessages,
  ts: {
    search: 'Search',
    configuration: 'Configuration',
    language: 'Language',
    theme: {
      name: 'Theme',
      light: 'Light',
      dark: 'Dark'
    },
    welcome: {
      title: 'Welcome to InstaMood admin',
      subtitle: 'This is InstaMood admin site.'
    },
    menu: {
      medias: 'Medias'
    }
  },
  resources: {
    medias: {
      name: 'Media |||| Medias',
      fields: {
        name: 'Name'
      },
      fieldGroups: {},
      page: {
        delete: 'Delete Media'
      },
      errors: {}
    },
    mediaSources: {
      name: 'Media Source |||| Media Sources',
      fields: {
        name: 'Name'
      },
      fieldGroups: {},
      page: {
        delete: 'Delete Media Source'
      },
      errors: {}
    },
    moods: {
      name: 'Moods |||| Mood',
      fields: {
        name: 'Name'
      },
      fieldGroups: {},
      page: {
        delete: 'Delete Mood'
      },
      errors: {}
    }
  }
}
