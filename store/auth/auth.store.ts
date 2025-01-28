import type { LoginPayload } from "./types/Login.interface";

export default function useAuthApi() {
    const {$axios} = useNuxtApp();

    const signIn = async (data: LoginPayload) => {
        const response = await $axios.post('http://localhost:5000/auth/login', data);
        return response.data;
    }

    return {signIn};

}