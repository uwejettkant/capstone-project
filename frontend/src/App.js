import React, { useState, useEffect } from 'react'
import GlobalStyles from './GlobalStyles'
import Header from './Header'
import Home from './Home'
import TaskList from './TaskList'
import IndividualNotes from './IndividualNotes'
import CreateShipment from './CreateShipment'
import MyShipments from './MyShipments'
import Footer from './Footer'
import { Switch, Route } from 'react-router-dom'
import { db } from './firebase'
// import swal from 'sweetalert'

export default function App() {
  const [shipment, setShipment] = useState([])

  useEffect(() => {
    db.collection('my-shipments').onSnapshot((snapshot) => {
      const getShipments = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setShipment(getShipments)
    })
  }, [])

  // function deleteShipment(index) {
  //   const discardShipment = [...shipment]
  //   discardShipment.splice(index, 1)
  //   setShipment(discardShipment)
  // }

  function deleteShipment(shipment) {
    // const selectedShipment = shipment.Bl
    // swal({
    //   title: 'Bist du dir sicher?',
    //   text:
    //     'Wenn die Daten gelöscht sind, können sie nicht wieder hergestellt werden.',
    //   icon: 'warning',
    //   buttons: true,
    //   dangerMode: true,
    // }).then((willDelete) => {
    //   if (willDelete) {
    //     db.collection('my-shipments')
    //       .doc(shipment.Bl)
    //       .delete(shipment.Bl)
    //       .then(
    //         swal('Ok. Deine Sendung wurde gelöscht!', {
    //           icon: 'success',
    //         })
    //       )
    //       .catch((error) =>
    //         alert(
    //           'Oops etwas ist schief gelaufen. Bitte versuche es später noch einmal.',
    //           error
    //         )
    //       )
    //     shipment.Bl !== '' &&
    //       selectedShipment
    //         .delete()
    //         .then(() => console.log('shipment successfully deleted!'))
    //         .catch((error) => console.log('shipment delete failed', error))
    //   } else {
    //     swal('Löschvorgang Abgebrochen')
    //   }
    // })
    db.collection('my-shipments')
      .doc()
      .delete()
      .then(() => console.log('New event added'))
      .catch((error) =>
        alert(
          'Oops, etwas ist schief gelaufen. Bitte versuche es später erneut.',
          error
        )
      )
  }

  return (
    <>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/task/:taskId">
          <TaskList />
        </Route>
        <Route path="/individual-notes">
          <IndividualNotes />
        </Route>
        <Route path="/create-shipment">
          <CreateShipment />
        </Route>
        <Route path="/my-shipments">
          <MyShipments deleteShipment={deleteShipment} shipment={shipment} />
        </Route>
      </Switch>
      <Footer />
    </>
  )
}
