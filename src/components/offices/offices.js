import React from 'react';

const cities = [
    {
        image: 'https://www.docplanner.com/images/warsaw.png',
        city: 'Warsaw'
    },
    {
        image: "https://www.docplanner.com/images/barcelona.png",
        city: 'Barcelona'
    },
    {
        image: "https://www.docplanner.com/images/istanbul.png",
        city: 'Istanbul'
    },
    {
        image: "https://www.docplanner.com/images/rome.png",
        city: 'Rome'
    },
    {
        image: "https://www.docplanner.com/images/mexico-city.png",
        city:'Mexico City'
    },
    {
        image: "https://www.docplanner.com/images/curitiba.png",
        city: 'Curitiba'
    }
]

const Cities = (props) =>
    props.citiesList.map((city,i)=>
    <a href="#">
    <img src={city.image} alt={city.city} />
    <div>
        <p>{city.city}</p>
        <button href="#">SEE OPENINGS</button>
    </div>
</a>
    )

const Offices = () =>
<section className="offices">
    <section className="office-header">
        <h2>Improve the lives of millions. Change yours forever</h2>
        <p>More than 500 team mates share our same vision, goals and passion. With offices in Warsaw, Barcelona,
            Istanbul, Rome, Czech Republic, Mexico City, Colombia and Curitiba, our search for great talent
            never stops.</p>
    </section>
    <section className="locations">
        <Cities citiesList = {cities}/>
    </section>
</section>

export default Offices;