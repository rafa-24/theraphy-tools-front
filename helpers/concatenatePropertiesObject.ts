export function concatenatePropertiesObject<T extends Record<string, string>>(obj: T): string {
    return Object.values(obj).join('');
}