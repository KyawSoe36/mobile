import { ID, Account, Client } from 'appwrite'
import Config from 'react-native-config'

import Snackbar from 'react-native-snackbar'
import { useEffect, useState } from 'react'

const appwriteClient = new Client()

const API_ENDPOINT = Config.API_ENDPOINT
const PROJECT_ID = Config.PROJECT_ID

function AppwriteService() {
  const [account, setAccount] = useState(null)

  useEffect(() => {
    appwriteClient
      .setEndpoint(API_ENDPOINT)
      .setProject(PROJECT_ID)

    setAccount(new Account(appwriteClient))
  }, [])

  async function createAccount({ email, password, name }) {
    try {
      const userAccount = await account.create(
        ID.unique(),
        email,
        password,
        name
      )
      if (userAccount) {
        // TODO: create login feature
        return login({ email, password })
      } else {
        return userAccount
      }
    } catch (error) {
      Snackbar.show({
        text: String(error),
        duration: Snackbar.LENGTH_LONG
      })
      console.log("Appwrite service :: createAccount() :: " + error)
    }
  }

  async function login({ email, password }) {
    try {
      return await account.createEmailSession(email, password)
    } catch (error) {
      Snackbar.show({
        text: String(error),
        duration: Snackbar.LENGTH_LONG
      })
      console.log("Appwrite service :: loginAccount() :: " + error)
    }
  }

  async function getCurrentUser() {
    try {
      return await account.get()
    } catch (error) {
      console.log("Appwrite service :: getCurrentAccount() :: " + error)
    }
  }

  async function logout() {
    try {
      return await account.deleteSession('current')
    } catch (error) {
      console.log("Appwrite service :: getCurrentAccount() :: " + error)
    }
  }

  return {
    createAccount,
    login,
    getCurrentUser,
    logout,
  }
}

export default AppwriteService