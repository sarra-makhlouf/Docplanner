import React from 'react';

const serviceItems = [
    {
        target: 'For patients',
        text: 'Find a doctor, book a visit and solve any health-related doubt',
        image:'https://www.docplanner.com/img/screen-marketplace@2x.png',
        class: 'for-patients',
        menu: true
    },
    {
        target: 'For doctors',
        text: 'Save time managing visits and cut no-shows by half',
        image:'https://www.docplanner.com/img/screen-saas@2x.png',
        class: 'for-doctors',
        menu: false
    }
]

const Items = (props) => {
    const itemList = props.serviceItem 
    let serviceList = []
    for (let i=0; i<itemList.length; i++) {
     let item = itemList[i]
     serviceList.push(
        <div key ={i} className={`item ${item.class}`}>
            <h3>{item.target}</h3>
            <p>{item.text}</p>
            <div className="select-menu">{item.menu && <select>
                <option value="0">CHOOSE COUNTRY</option>
                <option value="1">Argentina</option>
                <option value="2">Australia</option>
                <option value="3">Brazil</option>
                <option value="4">Chile</option>
                <option value="5">Colombia</option>
                <option value="6">Czech</option>
                <option value="7">France</option>
                <option value="8">Italy</option>
                <option value="9">Mexico</option>
                <option value="10">Peru</option>
                <option value="11">Poland</option>
                <option value="12">Portugal</option>
                <option value="13">Spain</option>
                <option value="14">Turkey</option>
                <option value="15">UK</option>
            </select>}
            </div>
            <img style={(!item.menu)?{marginTop:'auto'}:{}} src={item.image} />
        </div>
     )
    }
    return serviceList
}
const Service = () => 
    <div className="service-items">
        <Items serviceItem={serviceItems} />
    </div>

export default Service;