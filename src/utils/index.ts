export function formatDatetime(datetime: string | undefined){
    if (datetime == undefined || datetime == '')
        return datetime
    
    const date = datetime.split('T')[0]
    const hour = datetime.split('T')[1].split(':')[0]
    const minute = datetime.split('T')[1].split(':')[1]
    return `${date} ${hour}:${minute}`
}