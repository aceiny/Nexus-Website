export const NavBarNavs = () => [
    {
        name : "Home" ,
        link : "" 
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
import facebook from '../assets/social/facebook.svg'
import instagram from '../assets/social/instagram.svg'
import linkedin from '../assets/social/linkedin.svg'
export const socialMedia = [
    {
        name : "facebook" ,
        link : "https://www.facebook.com/profile.php?id=61551649420493",
        icon : facebook
    },
    {
        name : "instagram" ,
        link : "https://www.instagram.com/nexus.estin/",
        icon : instagram
    },
    {
        name : "linkedin" ,
        link : "https://www.linkedin.com/company/nexus-security-club/",
        icon : linkedin
    },
]

import educationImage from '../assets/vision/education.png'
import mentorshipImage from '../assets/vision/mentorship.png'
import competitionsImage from '../assets/vision/competitions.png'
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
export const commands = {
    whoami : "nexuser",
    ls : "nexus.txt nextrace.txt",
    id : "id = 1337",
    "cat nexus.txt" : "nexus is a cybersecurity club in estin", 
    "cat nextrace.txt" : "nextrace is a ctf event organized by nexus see yall in 28/10/2023",
    "hostname" : "estin",
    "facebook" : "https://www.facebook.com/profile.php?id=61551649420493",
    "instagram" : "https://www.instagram.com/nexus.estin/",
    "linkedin" : "https://www.linkedin.com/company/nexus-security-club/",

    
}

import roumi from '../assets/core-team/roumi.png'
import amine from '../assets/core-team/amine.png'
import abdo from '../assets/core-team/abdo.png'
export const coreTeam = [
    {
        name : "ROUMI abdelghafour" ,
        image : roumi ,
        color : '#C8BFA2',
        position : "Council" ,
        socialMedia : {
            facebook : "https://www.facebook.com/roumi.roumi.908",
            instagram : "https://www.instagram.com/roumi_roumi_/",
            linkedin : "https://www.linkedin.com/in/roumi-roumi-1b4a1a1b4/"
        }
    },
    {
        name : 'DJEMMAL mohamedamine' ,
        image : amine ,
        color : '#76E494',
        position : "Council" ,
        socialMedia : {
            facebook : "https://www.facebook.com/amine.benmoussa.524",
            instagram : "https://www.instagram.com/amine_benmoussa_/",
            linkedin : "https://www.linkedin.com/in/amine-ben-moussa-2a7b371b4/"
        }
    },
    {
        name : 'BELALMI abdessamie' ,
        image : abdo ,
        color : '#8393A0',
        position : "Council" ,
        socialMedia : {
            facebook : "https://www.facebook.com/abdo.oueslati.5",
            instagram : "https://www.instagram.com/abdo.oueslati/",
            linkedin : "https://www.linkedin.com/in/abdo-oueslati-1a5a1b1b4/"
        }
    }
]