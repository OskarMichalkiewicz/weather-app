import { AxiosResponse } from 'axios'
import { Weather } from './interfaces'

export function getDayFromText(date: string): number {
  return +date.slice(8, 10)
}
export function getDateFromText(date: string): string {
  return date.slice(5, 10)
}
export function getHourFromText(date: string): number {
  return +date.slice(11, 13)
}
export function isBetween(hour: number, between: [number, number]): boolean {
  return hour >= between[0] && hour <= between[1]
}
export function summary(data: any[]) {
  return Array.from(
    data.reduce(
      (acc, obj) =>
        Object.keys(obj).reduce(
          (acc, key) =>
            typeof obj[key] == 'number'
              ? acc.set(
                  key,
                  (([sum, count]) => [sum + obj[key], count + 1])(
                    acc.get(key) || [0, 0]
                  )
                )
              : acc,
          acc
        ),
      new Map()
    ),
    ([name, [sum, count]]) => ({ [name]: sum / count })
  )
}
export function sortResponse(response: AxiosResponse<Weather>) {
  const days = [
    ...new Set([
      ...response.data.list.map((item) => getDayFromText(item.dt_txt)),
    ]),
  ]
  const dates = [
    ...new Set([
      ...response.data.list.map((item) => getDateFromText(item.dt_txt)),
    ]),
  ]
  const sortedByDays = []
  const sortedByDaysAndTime = [] as any
  for (let i = 0; i < days.length; i++) {
    sortedByDays.push(
      response.data.list.filter(
        (item) => getDayFromText(item.dt_txt) === days[i]
      )
    )
  }
  for (let i = 0; i < sortedByDays.length; i++) {
    sortedByDaysAndTime.push({
      morning: Object.assign(
        {},
        ...summary(
          sortedByDays[i]
            .filter((day) => {
              return isBetween(getHourFromText(day.dt_txt), [0, 9])
            })
            .map((item) => item.main)
        )
      ),
      day: Object.assign(
        {},
        ...summary(
          sortedByDays[i]
            .filter((day) => {
              return isBetween(getHourFromText(day.dt_txt), [12, 15])
            })
            .map((item) => item.main)
        )
      ),
      night: Object.assign(
        {},
        ...summary(
          sortedByDays[i]
            .filter((day) => {
              return isBetween(getHourFromText(day.dt_txt), [18, 21])
            })
            .map((item) => item.main)
        )
      ),
    })
  }
  return [sortedByDaysAndTime, dates]
}
