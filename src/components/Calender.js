import React from 'react'
import KideApp from './KideApp'
import Ruokalista from './Ruokalista'
import './css/components.css'


const Calender = ({ handleDayClick, events, selectedDay, foodListPasila,
     foodListMalmi, foodListHaaga, selectedLocation, handleLocationClick,
     isFoodListVisible, setVisible }) => {
   

    // lets find out what campus is clicked and render the state needed
    // to show right foodlist

    const listToShow = () => {
        switch(selectedLocation) {
            case 'Malmi':
                return foodListMalmi
            case 'Pasila':
                return foodListPasila
            case 'Haaga':
                return foodListHaaga
            default:
                return foodListPasila
        }
    }

        return (
            <div className="calenderContainer">
                
                <Ruokalista 
                selectedDay={selectedDay}
                foodList={listToShow()}
                selectedLocation={selectedLocation}
                handleDayClick={handleDayClick}
                handleLocationClick={handleLocationClick}
                isFoodListVisible={isFoodListVisible}
                setVisible={setVisible}
                />

                <KideApp 
                selectedDay={selectedDay}
                props={events} />
            </div>
        )
    }
export default Calender