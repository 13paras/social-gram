import { useMutation } from '@tanstack/react-query';
import { createUserAccount, signInAccount } from '../appwrite/api';
import { INewUser } from '@/types';

const useCreateUserAccountMutation = () => {
  return useMutation({
    mutationFn: (user: INewUser) => createUserAccount(user),
  });
};

const useSignInAccountMutation = () => {
  return useMutation({
    mutationFn: (user: { email: string; password: string}) => signInAccount(user)
  })
};

export { useCreateUserAccountMutation, useSignInAccountMutation };
