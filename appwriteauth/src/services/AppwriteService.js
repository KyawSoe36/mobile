import { ID, Account, Client } from 'appwrite'

const appwriteClient = new Client()

const APPWRITE_ENDPOINT = 'https://cloud.appwrite.io/v1';
const APPWRITE_PROJECT_ID = '6541af31a2baaee2a0ad';

const AppwriteService = () => {


  appwriteClient
    .setEndpoint(APPWRITE_ENDPOINT)
    .setProject(APPWRITE_PROJECT_ID)



  const account = new Account(appwriteClient)

  console.log("From the service appwirte show account",account);


  //create a new record of user inside appwrite

  const createAccount = async ({ email, password, name })  => {
    console.log("called create account method constructor");
    try {
      const userAccount = await account.create(
        ID.unique(),
        email,
        password,
        name
      )
      if (userAccount) {
        //TODO: create login feature
        return login({ email, password })
      } else {
        return userAccount
      }
    } catch (error) {
      console.log("Appwrite service :: createAccount() :: " + error);

    }
  }

  const login = async ({ email, password }) => {
    try {
      return await account.createEmailSession(email, password)
    } catch (error) {
      console.log("Appwrite service :: loginAccount() :: " + error);

    }
  }

  const getCurrentUser = async () => {
    try {
      return await account.get()
    } catch (error) {
      console.log("Appwrite service :: getCurrentAccount() :: " + error);
    }
  }

  const logout = async () => {
    try {
      return await account.deleteSession('current')
    } catch (error) {
      console.log("Appwrite service :: getCurrentAccount() :: " + error);
    }
  }

  return {
    createAccount,
    login,
    getCurrentUser,
    logout
  }

}

export default AppwriteService