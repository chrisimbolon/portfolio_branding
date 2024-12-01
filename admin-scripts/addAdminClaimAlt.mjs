import admin from 'firebase-admin'
import { readFile } from 'fs/promises'

const serviceAccount = JSON.parse(
  await readFile(new URL('./serviceAccountKey.json', import.meta.url)),
)

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
})

// Add an admin claim to a user
const setAdminClaim = async (email) => {
  try {
    const user = await admin.auth().getUserByEmail(email)
    await admin.auth().setCustomUserClaims(user.uid, { isAdmin: true })
    console.log(`Admin claim added to user: ${email}`)
  } catch (error) {
    console.error('Error adding admin claim:', error)
  }
}

// Replace with the admin user's email
const adminEmail = 'sambungdata@gmail.com'
setAdminClaim(adminEmail)
