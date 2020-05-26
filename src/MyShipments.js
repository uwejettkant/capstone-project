import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import pallets from './images/pallets.jpg'
import Search from './images/search-icon.png'
import Filter from './Filter'
import { db } from './firebase'
import swal from 'sweetalert'

export default function MyShipments() {
  const [shipment, setShipment] = useState([])
  const [search, setSearch] = useState('')
  const [filteredShipments, setFilteredShipments] = useState([])

  useEffect(() => {
    setFilteredShipments(
      shipment.filter((shipment) => {
        return (
          shipment.Warenbeschreibung.toLowerCase().includes(
            search.toLowerCase()
          ) ||
          shipment.Bl.toLowerCase().includes(search.toLowerCase()) ||
          shipment.Lieferant.toLowerCase().includes(search.toLowerCase())
        )
      })
    )
  }, [search, shipment])

  useEffect(() => {
    db.collection('my-shipments').onSnapshot((snapshot) => {
      const getShipments = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setShipment(getShipments)
    })
  }, [])

  function deleteShipment(shipment) {
    swal({
      title: 'Bist du dir sicher?',
      text:
        'Wenn die Daten gelöscht sind, können sie nicht wieder hergestellt werden.',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        db.collection('my-shipments')
          .doc(shipment.id)
          .delete()
          .then(
            swal('Ok. Deine Sendung wurde gelöscht!', {
              icon: 'success',
            })
          )
          .catch((error) =>
            alert(
              'Oops etwas ist schief gelaufen. Bitte versuche es später noch einmal.',
              error
            )
          )
      } else {
        swal('Löschvorgang Abgebrochen')
      }
    })
  }
  return (
    <main>
      <BackgroundWrapperTop>
        <h3>Manage Deine Shipments</h3>
        <Filter onChange={(e) => setSearch(e.target.value)} />
        <img className="search-icon" src={Search} alt="" />
      </BackgroundWrapperTop>
      <Wrapper>
        {filteredShipments.map((shipment, index) => (
          <CardContainer key={index} index={index} shipment={shipment}>
            <FlexWrapper>
              <Imagewrapper>
                <img className="card_image" src={pallets} alt="pallets" />
              </Imagewrapper>
              <DataWrapper>
                <p className="bl_no">BL Nr:</p>
                <p className="bl_prop prop_global">{shipment.Bl}</p>
                <p className="pallets">Paletten:</p>{' '}
                <p className="pllets_prop prop_global">
                  {shipment.Palettenanzahl}
                </p>
                <p className="supplier">Lieferant:</p>{' '}
                <p className="supplier_prop prop_global">
                  {' '}
                  {shipment.Lieferant}
                </p>
                <p className="desc">Ware:</p>{' '}
                <p className="desc_prop prop_global">
                  {' '}
                  {shipment.Warenbeschreibung}
                </p>
              </DataWrapper>
            </FlexWrapper>
            <DateWrapper>
              <p className="departure">Abfahrt:</p>
              <p className="departure_prop date_props">{shipment.etd}</p>
              <p className="arrival">Ankunft:</p>
              <p className="arrival_prop date_props">{shipment.eta}</p>
              <DeleteButton
                classsName="delete_button"
                onClick={() => deleteShipment(shipment)}
              >
                <i className="fas fa-trash-alt"></i>
              </DeleteButton>
            </DateWrapper>
          </CardContainer>
        ))}
      </Wrapper>
    </main>
  )
}

const BackgroundWrapperTop = styled.div`
  width: 375px;
  height: 359px;
  background-image: linear-gradient(115deg, #2156e7 6%, #1345d0 93%);

  h3 {
    color: var(--blured-blue);
    text-align: center;
    margin: 0;
    padding-top: 0.5em;
  }

  .search-icon {
    position: absolute;
    top: 117px;
    left: 20px;
  }
`

const Wrapper = styled.section`
  width: 350px;
  height: 450px;
  object-fit: contain;
  border-radius: 4px;
  background: transparent;
  overflow: scroll;
  position: relative;
  top: -250px;
  left: 12px;
  border: none;
`

const CardContainer = styled.section`
  grid-gap: 1em;
  width: 350px;
  height: 167px;
  border-radius: 4px;
  box-shadow: 0 1px 4px 0 rgba(168, 164, 164, 0.5);
  background-color: #fff;
  margin-bottom: 1em;
  padding: 0.5em;
`

const FlexWrapper = styled.div`
  display: flex;
`
const Imagewrapper = styled.div`
  grid-column: 1/2;
  width: 145px;
  height: 125px;
  border-radius: 4px;
  margin-bottom: 0.25em;
  margin-right: 0.5em;

  .card_image {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`

const DataWrapper = styled.section`
  display: grid;
  grid-template-columns: 60px 140px;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-column: 2/5;
  grid-row: 1/4;
  font-weight: bold;
  font-size: 1.15em;
  justify-content: space-between;
  height: 17px;
  font-size: 0.8em;
  font-weight: 500;
  line-height: 1.42;
  color: #acb5be;

  p {
    margin: 0.5em;
  }

  .prop_global {
    text-align: end;
    font-size: 0.75rem;
    font-weight: 500;
    line-height: 1.42;
    color: var(--dark-text);
  }

  .bl-no {
    grid-column: 1/2;
    grid-row: 1/2;
  }

  .bl_prop {
    grid-column: 2/3;
    grid-row: 1/2;
  }

  .pallets {
    grid-column: 1/2;
    grid-row: 2/3;
  }

  .pallets_prop {
    grid-column: 2/3;
    grid-row: 2/3;
  }

  .supplier {
    grid-column: 1/2;
    grid-row: 4/5;
  }

  .supplier_prop {
    grid-column: 2/3;
    grid-row: 4/5;
    text-align: end;
  }

  .desc {
    grid-column: 1/2;
    grid-row: 5/6;
  }

  .desc_prop {
    grid-column: 2/3;
    grid-row: 5/6;
  }
`

const DateWrapper = styled.div`
  display: grid;
  grid-template-columns: 75px 75px 80px 80px 25px;
  grid-template-rows: 25px;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  font-size: 0.8em;
  font-weight: 500;
  line-height: 1.42;
  color: #acb5be;

  .date_props {
    text-align: start;
    font-family: 'Roboto', sans-serif;
    font-size: 0.75rem;
    font-weight: 500;
    line-height: 1.42;
    color: var(--dark-text);
  }

  .departure {
    grid-column: 1/2;
    grid-row: 1/-1;
  }

  .departure_prop {
    grid-column: 2/3;
    grid-row: 1/-1;
  }

  .arrival {
    grid-column: 3/4;
    grid-row: 1/-1;
  }

  .arrival_prop {
    grid-column: 4/5;
    grid-row: 1/-1;
  }

  p {
    margin: 0;
  }
`
const DeleteButton = styled.button`
  grid-column: 5/6;
  grid-row: 1/-1;
  background: transparent;
  color: var(--delete-button);
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  height: 25px;
  margin: 0;
  padding: 0;
`
