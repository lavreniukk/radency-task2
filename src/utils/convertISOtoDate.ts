export default function convertISOtoDate(isoString: string): string {
    const date = new Date(isoString);
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric'};
    return date.toLocaleString(undefined, options);
};