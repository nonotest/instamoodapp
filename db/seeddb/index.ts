const admin = require('firebase-admin')
const fbTest = require('@firebase/testing')
const fs = require('fs')

async function seedTest() {
  Promise.all(fbTest.apps().map(app => app.delete()))

  // Initialize firebase-admin.
  const app = fbTest.initializeAdminApp({
    projectId: 'instamooddev'
  })

  const db = app.firestore()

  const medias = require('./medias.json')

  // Add data before apply rules
  for (let i = 0; i < medias.medias.length; ++i) {
    const key = `medias/${medias.medias[i].id}`
    console.log({ key })
    const ref = db.doc(key)
    await ref.set(medias.medias[i])
  }

  let docRef = db.collection('medias')
  // check if there is data
  let users = await docRef.get()
  users.forEach(user => {
    console.warn('User:', user.data())
  })
  console.log('DONE')
}

seedTest()
