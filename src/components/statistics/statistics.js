import React from 'react';

const statistics = [
    {
        image: 'https://www.docplanner.com/img/flag.png',
        alt: 'flag',
        title: 'Leader in 10 countries',
        text: 'Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile'
    },
    {
        image: "https://www.docplanner.com/img/visits.png",
        alt: 'visits',
        title: '1 million appointments',
        text: 'booked last month'
    },
    {
        image: "https://www.docplanner.com/img/patients.png",
        alt: 'patients',
        title: '30 million unique patients',
        text: 'visit us every month'
    },
    {
        image: "https://www.docplanner.com/img/doctors.png",
        alt: 'doctors',
        title: '2 million active doctors',
        text: 'trust in our solutions'
    }
]

const StatisticsList = (props) =>
    props.statisticsList.map((statistic, i) =>
    <div key={i}>
        <img src={statistic.image} alt={statistic.alt}/>
        <h2>{statistic.title}</h2>
        <p>{statistic.text}</p>
    </div>
    )

const Statistics = () => 
<section className="statistics">
    <div className="statistics-content">
        <div className="stat-text">
            <h2>The world's
                <br/> biggest healthcare platform</h2>
            <p>We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20
                countries.</p>
        </div>
        <div className="stat-numbers">
            <StatisticsList statisticsList={statistics}/>
        </div>
    </div>
</section>

export default Statistics ;