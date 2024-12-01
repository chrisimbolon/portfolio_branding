import admin from 'firebase-admin'
import { readFile } from 'fs/promises'

// Load service account credentials
const serviceAccount = JSON.parse(
  await readFile(new URL('./serviceAccountKey.json', import.meta.url)),
)

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
})

// Function to add admin claim
const setAdminClaim = async (email) => {
  try {
    const user = await admin.auth().getUserByEmail(email)
    await admin.auth().setCustomUserClaims(user.uid, { isAdmin: true })
    console.log(`Admin claim added to user: ${email}`)
  } catch (error) {
    console.error(`Error adding admin claim to ${email}:`, error.message)
    throw error
  }
}

// Get email from command-line arguments
const adminEmail = process.argv[2]
if (!adminEmail) {
  console.error('Please provide an admin email as an argument.')
  process.exit(1)
}

// Execute the admin claim function
setAdminClaim(adminEmail)
  .then(() => process.exit(0))
  .catch(() => process.exit(1))
