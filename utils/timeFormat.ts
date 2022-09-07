export const formatTime = (time: string): string => new Date(time).toLocaleTimeString('nl-nl', { hour: '2-digit', minute: '2-digit' })
export const formatDate = (date: string): string =>
  new Date(date).toLocaleDateString('nl-nl', { day: '2-digit', month: '2-digit', year: 'numeric' })
export const formatDayMonth = (date: string): string =>
  new Date(date).toLocaleDateString('nl-nl', { day: '2-digit', month: '2-digit' })
export const formatDateTime = (date: string): string =>
  new Date(date).toLocaleDateString('nl-nl', {  day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })
