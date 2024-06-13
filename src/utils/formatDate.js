export default function formatDate (dateString, options = {}) {
    const date = new Date(dateString);
    
    const defaultOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    };

    const formatOptions = { ...defaultOptions, ...options };

    return new Intl.DateTimeFormat('pt-BR', formatOptions).format(date);
}