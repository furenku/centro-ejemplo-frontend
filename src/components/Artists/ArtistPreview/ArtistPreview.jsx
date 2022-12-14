import "./ArtistPreview.css"

import PropTypes from 'prop-types';

const ArtistPreview = ({
    name,
    image
}) => {

    return <article className="ArtistPreview">

        <img src={ image }/>

        <h1>
            { name }
        </h1>

    </article>

}

ArtistPreview.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
}

ArtistPreview.defaultProps = {
    name: "Artist Preview",
    image: "https://fakeimg.pl/300x600",
}


export default ArtistPreview