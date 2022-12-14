import PropTypes from 'prop-types';

import "./List.css"


import Preview from "../Preview/Preview"


const List = ({
    elements
}) => {


    const elementsList = elements.map( (element, i) => (
        <Preview {...element} key={ "element_" + i }/>
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


List.propTypes = {
    elements: PropTypes.array
}

List.defaultProps = {
    elements: []
}

export default List