import type { LoginPayload } from "./types/Login.interface";
import type { ResetPasswordPayload } from "./types/reset-password.interface";

export default function useAuthApi() {
    const {$axios} = useNuxtApp();

    const signIn = async (data: LoginPayload) => {
        const response = await $axios.post('/auth/login', data);
        return response.data;
    }

    const sendCodeVerification = async (data: any) => {
        const response = await $axios.post('/auth/reset-password', data);
        return response.data;
    }

    const changePassword = async (data: ResetPasswordPayload) => {
        const response = await $axios.put('/auth/change-password', data);
        return response.data;
    }

    return {signIn, sendCodeVerification, changePassword};

}