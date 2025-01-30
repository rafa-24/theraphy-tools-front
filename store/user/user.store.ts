import type { UserPatientPayload, UserTherapistPayload } from "./types/User.interface";

export default function useAuthApi() {
    const {$axios} = useNuxtApp();

    const registerUserPatient = async (data: UserPatientPayload ) => {
        const response = await $axios.post('/user/patient/registration', data);
        return response.data;
    }

    const registerUserTherapist = async (data: UserTherapistPayload ) => {
        const response = await $axios.post('/user/therapist/registration', data);
        return response.data;
    }

    const getListCountries = async () => {
        const response = await $axios.get('/user/countries');
        return response.data;
    }

    return { registerUserPatient, registerUserTherapist, getListCountries }

}