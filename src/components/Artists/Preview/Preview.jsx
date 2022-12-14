import "./Preview.css"

import PropTypes from 'prop-types';

const Preview = ({
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

Preview.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
}

Preview.defaultProps = {
    name: "Artist Preview",
    image: "https://fakeimg.pl/300x600",
}


export default Preview