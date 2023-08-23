export const formatDate = (date: Date) => {
    let currentDay = String(date.getDate()).padStart(2, '0');
    let currentMonth = String(date.getMonth()+1).padStart(2,"0");
    let currentYear = date.getFullYear();
    let currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
    return currentDate
}

export const getTomorrow = (today: Date) => {
    const tomorrow = new Date(today)
    tomorrow.setDate(today.getDate() + 1) 
    return tomorrow
}

export const getTomorrowString = (today: string) => {
    const todayDate = new Date(today)
    const tomorrow = new Date(todayDate)
    tomorrow.setDate(todayDate.getDate() + 1) 
    return tomorrow
}