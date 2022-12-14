import PropTypes from 'prop-types';

import "./ArtistList.css"


import ArtistPreview from "../ArtistPreview/ArtistPreview"


const ArtistList = ({
    elements
}) => {


    const elementsList = elements.map( (element, i) => (
        <ArtistPreview {...element} key={ "element_" + i }/>
    ))


    return <ul className="ArtistList">
        {
            Array.isArray( elements ) && elements.length > 0
            
            ? elementsList
            
            : (
                <p>
                    No hay elementos
                </p>
            )
        }
    </ul>


}


ArtistList.propTypes = {
    elements: PropTypes.array
}

ArtistList.defaultProps = {
    elements: []
}

export default ArtistList