import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const Card = (props) => {
    return (
        <div className="timeline__item">
            <i className={props.icon}></i>
            <span className="timeline_date">{props.year}</span>
            <h3 className="timeline__title">{props.title}</h3>
            <p className="timeline__text">{props.description}</p>
        </div>
    );
}

// Mendefinisikan tipe data untuk props
Card.propTypes = {
    icon: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

// Menetapkan nilai default untuk props
Card.defaultProps = {
    icon: 'icon-default', // Ganti dengan nama kelas ikon default yang sesuai
    year: 'Unknown',
    title: 'No Title',
    description: 'No Description'
};

export default Card;
