export function validatePassword(password: string, confirmPassword: string): boolean {
    return password === confirmPassword ? true : false;
}