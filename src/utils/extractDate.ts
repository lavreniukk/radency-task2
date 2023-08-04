export default function extractDateFromContent(content: string): string {
    const regex = /\b\d{1,2}\/\d{1,2}\/\d{4}\b/g;
    const dates = content.match(regex)?.join(', ');
    return dates || '';
}