import React from "react"
import { useParams } from "react-router-dom"
import starEmpty from '../../assets/pictures/star_empty.svg'
import starFull from '../../assets/pictures/star_full.svg'
import Container from "../../components/Container"
import Dropdown from "../../components/Dropdown"
import Layout from "../../components/Layout"
import useLocationsData from "../../hooks/useLocationsData"
import Spinner from "../../utils/Spinner"

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
          <img key={i} src={starFull} alt="étoile pleine" />
        </div>
      )
    } else {
      stars.push(
        <div key={i}>
          <img key={i} src={starEmpty} alt="étoile vide" />
        </div>
      )
    }
  }

  return (
    <Container>
      <Layout>
        {isDataLoading ? (
          <div className="spinner_container">
            <Spinner />
          </div>
        ) : (
          <>
            <div className="location_carrousel">
              <img src={pictures && pictures[0]} alt={title} />
            </div>

            <div className="location_resume">
              <h2 className="location_title">{title}</h2>
              <p className="location_location">{location}</p>
              <div className="location_tags">
                {tags && tags.map((tag: string, index: number) => (
                  <div key={index} className="location_tag">{tag}</div>
                ))}
              </div>
            </div>

            <div className="location_host_eval">
              <div className="location_host">
                <div className="location_host_picture">
                  <img src={host && host.picture} alt={host && host.name} />
                </div>
                <div className="location_host_name">{host && host.name}</div>
              </div>

              <div className="location_rating">
                {stars}
              </div>
            </div>

            <div className="location_desc">
              <Dropdown title="Description">
                <p>{description}</p>
              </Dropdown>

              <Dropdown title="Équipements">
                <ul>
                  {equipments && equipments.map((equipment: string, index: number) => (
                    <li key={index}>{equipment}</li>
                  ))}
                </ul>
              </Dropdown>
            </div>
          </>
        )}
      </Layout>
    </Container>
  )
}

export default Location