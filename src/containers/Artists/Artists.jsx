import { useState, useEffect } from "react"

import List from "../../components/Artists/List/List"


const fakeElements = [
    {
        name: "Prince"
    },
    {
        name: "King Gizzard & The Lizard Wizard"
    },
    {
        name: "Taylor Swift"
    },
]

const Artists = () => {

    const [ elements, setElements ] = useState([])

    useEffect(()=>{

        const getArtists = async () => {

            const request = await fetch("http://localhost:3000/api/v1/artists")

            const result = await request.json()

            setElements( result )

        }


        getArtists()

    })

    return <List elements={ elements }/>

}

export default Artists