import { TimeSlot } from "../types"


export const sortTimeSlots = (timeSlots: TimeSlot[]): TimeSlot[] => {
  const today = new Date(Date.now())
  timeSlots.sort((a, b)=>{
    const timeA = new Date(
      today.getFullYear(), today.getMonth(), today.getDate(), new Date(a.startTime).getHours(), new Date(a.startTime).getMinutes())
    const timeB = new Date(
      today.getFullYear(), today.getMonth(), today.getDate(), new Date(b.startTime).getHours(), new Date(b.startTime).getMinutes())
    return timeA.valueOf() - timeB.valueOf()
  })

  return timeSlots
}
