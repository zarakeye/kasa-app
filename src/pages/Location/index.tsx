import React from "react"
import { useParams } from "react-router-dom"
import starEmpty from '../../assets/pictures/star_empty.svg'
import starFull from '../../assets/pictures/star_full.svg'
import Dropdown from "../../components/Dropdown"
import useLocationsData from "../../hooks/useLocationsData"
import Spinner from "../../utils/Spinner"
import './location.scss'

const Location: React.FC = (): JSX.Element => {
  const { locationId } = useParams();
  const { locationsData, isDataLoading, error } = useLocationsData();
  console.log(locationsData)

  if (error) {
    return <div>Une erreur ${error} est survenue durant le chargement des données</div>
  }

  const data = locationsData.find((location) => location.id === locationId);

  const { title, pictures, description, host, rating, location, equipments, tags } = data || {};

  const parsedRating = rating && parseInt(rating, 10);
  console.log(parsedRating)
  const stars: JSX.Element[] = [];
  for (let i = 0; i < 5; i++) {
    if (rating && i < parseInt(rating, 10)) {
      stars.push(
        <div key={i}>
          <img key={i} src={starFull} alt="étoile pleine" className="location_rate" />
        </div>
      )
    } else {
      stars.push(
        <div key={i}>
          <img key={i} src={starEmpty} alt="étoile vide"  className="location_rate" />
        </div>
      )
    }
  }

  const [firstName, lastName] = host?.name?.split(' ') || [];

  return (
    <>
      {isDataLoading ? (
        <div className="spinner_container">
          <Spinner />
        </div>
      ) : (
        <>
          <div className="location_carrousel">
            <img src={pictures && pictures[0]} alt={title} className="location_carrousel_img"/>
          </div>

          <div className="location_resume">
            <h2 className="location_title">{title}</h2>
            <p className="location_location">{location}</p>
            <div className="location_tags">
              {tags && tags.map((tag: string, index: number) => (
                <span key={index} className="location_tag">{tag}</span>
              ))}
            </div>
          </div>

          <div className="location_host_eval">
            <div className="location_rating">
              {stars}
            </div>
            <div className="location_host">
              <div className="location_host_name">
                <p>{firstName}</p>
                <p>{lastName}</p>
              </div>
              <div className="location_host_portrait_wrapper">
                <img src={host && host.picture} alt={host && host.name} className="location_host_portrait"/>
              </div>
            </div>
          </div>

          <div className="location_desc">
            <Dropdown title="Description" content={<p>{description}</p>} />
            <Dropdown title="Équipements" content={<ul>{equipments && equipments.map((equipment: string, index: number) => <li key={index}>{equipment}</li>)}</ul>} />
          </div>
        </>
      )}
    </>
  )
}

export default Location