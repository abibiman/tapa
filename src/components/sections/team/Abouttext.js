    import React, { Component } from 'react';
    import Modal from 'react-modal';


    import { Link } from 'react-router-dom';
    import about from "../../../data/about.json";
    import Stella from '../../../assets/images/team/stella.jpeg'
    import Christine from '../../../assets/images/team/christine.jpeg'
    import Fredoline from '../../../assets/images/team/fredoline.jpeg'
    import Olvie from '../../../assets/images/team/olive.jpeg'
    import Patience from '../../../assets/images/team/patience.jpeg'
    import Stephanie from '../../../assets/images/team/stephanie.jpeg'
    import Zynnell from '../../../assets/images/team/zynell.jpeg'
    import Remigius from '../../../assets/images/team/Remigius.jpeg'
    import Steph from '../../../assets/images/team/stpp.jpeg'
    import Basil from '../../../assets/images/team/Basil.jpeg'

    

    const teaminfo = [




        {
            "id": 4,
            "name": "Dr. Stella Nunga",
            "role": "Director, Diversity, Equity, and Inclusion ",
            "image": Stella,
            "description": "Jane is a leading expert in..."
        },
        {
            "id": 5,
            "name": "Fredoline Anunobi, Ph.D. ",
            "role": "Vice President Research, Academic Affairs & Sponsor Programs ",
            "image": Fredoline,
            "description": "Jane is a leading expert in..."
        },

        {
            "id": 116,
            "name": "Remigius Udenwoke",
            "role": "Director, African and African American Human Relations",
            "image": Remigius,
            "description": "Jane is a leading expert in..."
        },
        {
            "id": 7,
            "name": "Basil Ibenyenwa ",
            "role": "Director, Project Management ",
            "image": Basil,
            "description": "Jane is a leading expert in..."
        },
        {
            "id": 8,
            "name": "Olive Elechi  ",
            "role": "Coordinator, Feasibility Studies & New Business Development ",
            "image": Olvie,
            "description": "Jane is a leading expert in..."
        },
        {
            "id": 18,
            "name": "Patience Alifo  ",
            "role": "",
            "image": Patience,
            "description": "Jane is a leading expert in..."
        },
        {
            "id": 9,
            "name": "Zynnell Zuh, LLM ",
            "role": "Director, Film Production & Global Outreach ",
            "image": Zynnell,
            "description": "Jane is a leading expert in..."
        },
        {
            "id": 10,
            "name": "Amber Reid, Ph.D.",
            "role": "Director, African and African American Human Relations ",
            "image": "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
            "description": "Jane is a leading expert in..."
        },
        {
            "id": 11,
            "name": "Christine Tapu, MA  ",
            "role": "Director, African and African American Human Relations ",
            "image": Christine,
            "description": "Jane is a leading expert in..."
        },
        {
            "id": 12,
            "name": "Stephanie Boswell ",
            "role": "Director, African and African American Human Relations ",
            "image": Steph,
            "description": "Jane is a leading expert in..."
        },
        {
            "id": 1,
            "name": "Sheila T. Gregory, Ph.D.",
            "role": "Director, Educational Leadership & Administration ",
            "image": "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
            "description": "Dr. Gregory has served in various faculty and administrative positions over the years"
        },
        {
            "id": 2,
            "name": "Ms. Yvonne White",
            "role": "",
            "image": "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
            "description": "Jane is a leading expert in..."
        },
        {
            "id": 3,
            "name": "Michael E. Orok, Ph.D.",
            "role": "Associate Vice President for Research and Academic Affairs",
            "image": "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
            "description": "Jane is a leading expert in..."
        },
        {
            "id": 6,
            "name": "Shaaban Fundi, Ph.D. ",
            "role": "Director, Curriculum and Instructions ",
            "image": "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
            "description": "Jane is a leading expert in..."
        },
    ]

    class Abouttext extends Component {
        render() {
            const cardStyle = {
                width: '300px',
                height: '350px',
                marginTop: '20px',
                marginBottom: '30px', // Increased bottom margin
                padding: '15px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                border: '1px solid #ddd',
                backgroundColor: 'white',
                borderRadius: '8px',
                margin: '20',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                overflow: 'hidden'
            };
    
            const imageStyle = {
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                objectFit: 'cover',
                marginBottom: '10px',
                display: 'block', // ensures the image is treated as a block-level element
                marginLeft: 'auto', // automatically adjusts left margin
                marginRight: 'auto' // automatically adjusts right margin
            };
    
            const buttonStyle = {
                width: '100%', // Makes the button take the full width of the card
                padding: '10px 0', // Increased padding for better clickability
                color: 'white',
                backgroundColor: '#007BFF',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                outline: 'none',
                marginTop: '10px'
            };

            
            return (
                <section className="section-padding about-us">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 align-self-center">
                            <div className="about-left-side p-relative">
                                <div className="section-header">
                                    <div className="section-heading">
                                        <h5 className="text-custom-blue">Our Team</h5>
                                        <h3 className="text-theme fw-700">Meet Our Capable Team</h3>
                                    </div>
                                </div>
                                <div className="row">
                                    {teaminfo.map(member => (
                                        <div key={member.id} className="col-md-4 col-sm-6">
                                            <div className="team-card text-center" style={cardStyle}>
                                                <img src={member.image} alt={member.name} style={imageStyle}/>
                                                <h4 className="mt-3">{member.name}</h4>
                                                <p className="role">{member.role}</p>
                                                <button style={buttonStyle} onClick={() => alert("More info about " + member.name)}>More</button>
                                    

                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            );
        }
    }

    export default Abouttext;