export interface UserPatientPayload {
    patientName: string;
    paternalSurname: string;
    telephoneNumber: string;
    country: number;
    email: string;
    password: string;
}

export interface UserTherapistPayload {
    name: string;
    paternalSurname: string;
    telephoneNumber: string;
    country: number;
    email: string;
    universityDegree: string;
    workExperience: number;
    password: string;
}