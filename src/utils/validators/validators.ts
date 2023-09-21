export const required = (value: string) => {
    if(value) return undefined;
    return 'Field is required'
}

export const maxLength = (max: number) => {
    return (value: string) => {
        if(value.length > max){
            return `Max length is ${max} symbol`
        }
        return undefined;
    }
}