export const NavBarNavs = () => [
    {
        name : "Home" ,
        link : "/" 
    },
    {
        name : "About Us" ,
        link : "#about-us" 
    },
    {
        name : "Events" ,
        link : "#events" 
    },
    {
        name : "Blogs" ,
        link : "#blogs" 
    },
    {
        name : "Our Team" ,
        link : "#our-team" 
    },
    {
        name : "Contact Us" ,
        link : "#contact-us" 
    },
]
import educationImage from '../assets/vision/education.svg'
import mentorshipImage from '../assets/vision/mentorship.svg'
import competitionsImage from '../assets/vision/competitions.svg'
export const OurVisions = [
    {
        title : "education" , 
        description : "Our primary focus is on guiding and educating. We are here to share the knowledge that empowers the next generation of cybersecurity experts." ,
        image : educationImage ,
        flip : false
    },
    {
        title : "Mentorship" , 
        description : "Our seasoned members are more than just peers; they are your mentors. They offer valuable insights and guidance to help you not only survive but thrive in the ever-evolving realm of cybersecurity." ,
        image : mentorshipImage ,
        flip : true
    },
    {
        title : "Competitions" , 
        description : "We revel in the thrill of cybersecurity challenges. Our goal is to create an environment where you can test your skills, push your limits, and grow in your expertise.        " ,
        image : competitionsImage ,
        flip : false
    },
]

export const events = [
    {
        date : "Nov 4th, 2023",
        title : "Nexus Mini Ctf",
        fill : true
    },
    {
        date : "Nov 4th, 2023",
        title : "The Welcome Day",
        fill : true
    },
    {
        date : "...",
        title : "Upcoming Soon",
        fill : false
    }
    
]