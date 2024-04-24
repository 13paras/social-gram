import { Account, Avatars, Client, Databases, Storage } from 'appwrite';

const appwriteConfig = {
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  url: import.meta.env.VITE_APPWRITE_URL,
  databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
  storageId: import.meta.env.VITE_APPWRITE_STORAGE_ID,
  userCollection: import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID,
  postCollection: import.meta.env.VITE_APPWRITE_POST_COLLECTION_ID,
  savesCollection: import.meta.env.VITE_APPWRITE_SAVES_COLLECTION_ID,
};

const client = new Client();

client.setProject(appwriteConfig.projectId);
client.setProject(appwriteConfig.url);

const account = new Account(client);
const databases = new Databases(client);
const storage = new Storage(client);
const avatars = new Avatars(client);

export { appwriteConfig, client, account, databases, storage, avatars };
