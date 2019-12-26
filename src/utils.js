export const toDate = dateStr => {
    const dateParts = dateStr.split('-');
    console.log(dateParts)
    return new Date(dateParts[0], dateParts[1]-1, dateParts[2]);
}