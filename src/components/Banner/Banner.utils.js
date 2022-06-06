const shouldShowBanner = (date = new Date()) => {
  const lastDayDate = new Date("2022-07-11") // end of holidays 11/07/2022
  const lastYear = lastDayDate.getFullYear()
  const lastMonth = lastDayDate.getMonth()
  const lastDay = lastDayDate.getDay()

  return !(
    date.getFullYear() >= lastYear &&
    date.getMonth() >= lastMonth &&
    date.getDay() >= lastDay
  )
}
