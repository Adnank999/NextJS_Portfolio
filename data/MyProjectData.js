import ajiya1 from "../public/projects/my_projects/ajiya1.png"
import ajiya2 from "../public/projects/my_projects/ajiya2.png"
import ajiya3 from "../public/projects/my_projects/ajiya3.png"
import Lee1 from "../public/projects/my_projects/Lee1.png"
import lee2 from "../public/projects/my_projects/lee2.png"
import lee3 from "../public/projects/my_projects/lee3.png"
import lee4 from "../public/projects/my_projects/lee4.png"
import Mabuhay1 from "../public/projects/my_projects/Mabuhay1.png"
import Mabuhay2 from "../public/projects/my_projects/Mabuhay2.png"
import Mabuhay3 from "../public/projects/my_projects/Mabuhay3.png"
import Mabuhay4 from "../public/projects/my_projects/Mabuhay4.png"
import Mabuhay5 from "../public/projects/my_projects/Mabuhay5.png"
import Thai1 from "../public/projects/my_projects/Thai1.png"
import Thai2 from "../public/projects/my_projects/Thai2.png"
import Thai3 from "../public/projects/my_projects/Thai3.png"
import Multilocation from "../public/projects/my_projects/Multilocation.png"

const MyProjectData = [
    {
        id: 1,
        title: "Lee house Restaurant",
        image: Lee1,
        description: "",
        link: "https://order.chatchefs.com/lees-house-restaurant-782c15ff/3994-shelbourne-street-victoria-namer-v8n-3e2-1c72dd04/menu",
        otherImages: [
            {
                id:1,
                image: lee2
            },
            {
                id:2,
                image: lee3
            },{
                id:3,
                image: lee4
            }
        ]
    },
    {
        id: 2,
        title: "Ajiya Shushi Restaurant",
        image: ajiya1,
        description: "",
        link: "https://order.chatchefs.com/ajiya-sushi-675b3650/1822-west-4th-ave-vancouver-canada-a7f044ba/menu",
        otherImages: [
            {
                id:1,
                image: ajiya2
            },
            {
                id:2,
                image: ajiya3
            }
        ]
    },
    {
        id: 3,
        title: "Mabuhay Shushi Restaurant",
        image: Mabuhay1,
        description: "",
        link: "https://www.mabuhayfoods.ca/",
        otherImages: [
            {
                id:1,
                image: Mabuhay2
            },
            {
                id:2,
                image: Mabuhay3
            },{
                id:3,
                image: Mabuhay4
            },
            {
                id:3,
                image: Mabuhay5
            }
        ]
    },
    {
        id: 4,
        title: "Thai Box Shushi Restaurant",
        image: Thai1,
        description: "",
        link: "https://thai-box-domain.vercel.app",
        otherImages: [
            {
                id:1,
                image: Thai2
            },
            {
                id:2,
                image: Thai3
            }
        ]
    },
    {
        id: 5,
        title: "MultiLocation Google map",
        image: Multilocation,
        description: "",
        link: "https://direct-order-multilocation.vercel.app/location/bubble-world-1-37818578",
        otherImages: [{
            id: 1,
            image: Multilocation
        }]
    }
];

export default MyProjectData;
