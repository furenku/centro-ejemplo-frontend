import { useState, useEffect } from "react"

import ArtistList from "../../components/Artists/ArtistList/ArtistList"


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

    return <ArtistList elements={ elements }/>

}

export default Artists