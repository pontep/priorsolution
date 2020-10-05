import { db } from '@/services/firebase'
const collection = 'bookings'
export async function getAllBookings() {
  var data = await db
    .collection(collection)
    .get()
    .then((querySnapshot) => {
      var tmp = []
      querySnapshot.forEach((doc) => {
        tmp.push(doc.data())
        // console.log(`${doc.id} => ${doc.data()}`)
      })
      return tmp
    })
    .catch((error) => {
      console.log(error)
    })
  return data
}
export async function fetchBookingDate(date) {
  var bookingRef = db.collection(collection)
  // Create a query against the collection
  var query = bookingRef.where('date', '==', date)
  var data = await query
    .get()
    .then((querySnapshot) => {
      var tmp = []
      querySnapshot.forEach((doc) => {
        tmp.push(doc.data())
        // console.log(`${doc.id} => ${doc.data()}`)
      })
      return tmp
    })
    .catch((error) => {
      console.log(error)
    })
  return data
}
