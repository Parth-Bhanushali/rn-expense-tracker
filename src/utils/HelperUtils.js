export function convertMillisToDateText (millis) {
    const dateObj = new Date(millis)
  
    let date = String(dateObj.getDate())
    let month = String(dateObj.getMonth() + 1)
    let year = String(dateObj.getFullYear())
  
    date = date.padStart(2, "0")
    month = month.padStart(2, "0")
  
    const dateText = date + "/" + month + "/" + year
    return dateText
}