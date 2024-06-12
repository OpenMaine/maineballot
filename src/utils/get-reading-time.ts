import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import readingTime from 'reading-time'

dayjs.extend(duration)

export function getReadingTime(content: string) {
  const milliseconds = readingTime(content).time
  const wholeMinutes = Math.ceil(dayjs.duration(milliseconds).asMinutes())
  return `${wholeMinutes} minute read`
}
