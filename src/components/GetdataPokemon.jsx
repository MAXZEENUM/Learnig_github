import './Pokemon.css'
import PropTypes from 'prop-types';


function GetdataPokemon(props) {
  return (
    <li className='card--list'>
      <div className='card'>
        <span className='card--id'>#{props.id_pokemon}</span>
        <img className= 'card--image' src={props.image} alt={props.name} />
        <h1 className='card--name'>{props.name}</h1>
        <span className='card--details'>{props.type}</span>
      </div>
    </li>
  )
}

GetdataPokemon.propTypes = {
  id_pokemon: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default GetdataPokemon