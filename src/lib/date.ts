export const { format } = Intl.DateTimeFormat()

export function getClosestSunday(): Date {
  const today = new Date()
  const day = today.getDay()
  const dist = day === 0 ? 0 : day > 3 ? 7 - day : -day
  const result = new Date(today)
  result.setDate(today.getDate() + dist)
  return result
}
