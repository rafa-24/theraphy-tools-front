import type { LoginPayload } from "./types/Login.interface";

export default function useAuthApi() {
    const {$axios} = useNuxtApp();

    const signIn = async (data: LoginPayload) => {
        const response = await $axios.post('/auth/login', data);
        return response.data;
    }

    return {signIn};

}