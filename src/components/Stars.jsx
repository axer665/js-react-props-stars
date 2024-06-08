import PropTypes from "prop-types";
import Star from "./Star";

function Stars(props) {

    const { count } = props
    const isHaveRating = count >= 1 && count <= 5;

    return (
        <>
            {isHaveRating ? (
                <ul className="card-body-stars">
                    {Array.from({ length: count }, (v, k) => (
                        <Star key={k} />
                    ))}
                </ul>
            ) : 'No rating'}
        </>
    );
}

Stars.defaultProps = {
    count: 0,
};

Stars.propTypes = {
    count: PropTypes.number,
};

export default Stars;