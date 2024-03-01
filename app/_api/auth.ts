import { supabase } from '../_supabase/supabaseClient';
import { SignInData } from '../_types/inputType';

export const SignIn = async (signInData: SignInData) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: signInData.email,
      password: signInData.password,
    });
    if (error) console.error(error);
    return { data, error };
  } catch (error) {
    console.error(error);
  }
};
