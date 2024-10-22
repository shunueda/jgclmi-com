export function getClosestSunday(): Date {
  const today = new Date()
  const day = today.getDay()
  const dist = day === 0 ? 0 : day > 3 ? 7 - day : -day
  const resut = new Date(today)
  resut.setDate(today.getDate() + dist)
  return resut
}

export function formatDate(date: Date) {
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
}
