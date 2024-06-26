import { INewUser } from '@/types';
import { account, appwriteConfig, avatars, databases } from './config';
import { ID, Query } from 'appwrite';

const createUserAccount = async (user: INewUser) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      user.email,
      user.password,
      user.name
    );

    if (!newAccount) {
      throw Error;
    }

    const avatarUrl = avatars.getInitials(user.name);

    const newUser = await saveUserToDB({
      accountId: newAccount.$id,
      email: newAccount.email,
      name: newAccount.name,
      username: user.username,
      imageUrl: avatarUrl,
    });

    return newUser;
  } catch (error) {
    console.log(error);
  }
};

const saveUserToDB = async (user: {
  accountId: string;
  email: string;
  name: string;
  imageUrl: URL | string;
  username?: string;
}) => {
  try {
    const newUser = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollection,
      ID.unique(),
      user
    );

    return newUser;
  } catch (error) {
    console.log(error);
  }
};

const signInAccount = async (user: { email: string; password: string }) => {
  try {
    const session = await account.createEmailPasswordSession(
      user.email,
      user.password
    );

    return session;
  } catch (error) {
    console.log(error);
  }
};

const getCurrentUser = async () => {
  try {
    const currentAccount = await account.get();

    if (!currentAccount) throw Error;

    const currentUser = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.userCollection,
      [Query.equal('accountId', currentAccount.$id)]
    );

    if (!currentUser) throw Error;

    return currentUser.documents[0];
  } catch (error) {
    console.log(error);
    return null;
  }
};

export { createUserAccount, saveUserToDB, signInAccount, getCurrentUser };
