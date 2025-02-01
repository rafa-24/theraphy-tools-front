export interface ResetPasswordPayload {
    email: string;
    codeVerification: string;
    pass: string;
}