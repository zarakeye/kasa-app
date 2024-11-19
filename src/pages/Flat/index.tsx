import React from "react"
import { useParams } from "react-router-dom"
import starEmpty from '../../assets/pictures/star_empty.svg'
import starFull from '../../assets/pictures/star_full.svg'
import Dropdown from "../../components/Dropdown"
import useLocationsData from "../../hooks/useFlatsData"
import Spinner from "../../utils/Spinner"
import style from './Flat.module.scss'
import Carousel from "../../components/Carousel"

const Flat: React.FC = (): JSX.Element => {
  const { flatId } = useParams();
  const { flatsData, isDataLoading, error } = useLocationsData();
  // const [localPictures, setLocalPictures] = useState<string[]>([]);

  if (error) {
    return <div>Une erreur ${error} est survenue durant le chargement des données</div>
  }

  const data = flatsData.find((flat) => flat.id === flatId);

  const { title, pictures, description, host, rating, location, equipments, tags } = data || {};

  const parsedRating = rating && parseInt(rating, 10);
  console.log(parsedRating)
  const stars: JSX.Element[] = [];
  for (let i = 0; i < 5; i++) {
    if (rating && i < parseInt(rating, 10)) {
      stars.push(
        <div key={i}>
          <img key={i} src={starFull} alt="étoile pleine" className={style.flat_rate} />
        </div>
      )
    } else {
      stars.push(
        <div key={i}>
          <img key={i} src={starEmpty} alt="étoile vide"  className={style.flat_rate} />
        </div>
      )
    }
  }

  const [firstName, lastName] = host?.name?.split(' ') || [];

  return (
    <>
      {isDataLoading ? (
        <div className={style.spinner_container}>
          <Spinner />
        </div>
      ) : (
        <>
          {pictures && <Carousel pictures={pictures} />}
          
          <div className={style.flat_resume}>
            <h2 className={style.flat_title}>{title}</h2>
            <p className={style.flat_location}>{location}</p>
            <div className={style.flat_tags}>
              {tags && tags.map((tag: string, index: number) => (
                <span key={index} className="flat_tag">{tag}</span>
              ))}
            </div>
          </div>

          <div className={style.flat_host_eval}>
            <div className={style.flat_rating}>
              {stars}
            </div>
            <div className={style.flat_host}>
              <div className={style.flat_host_name}>
                <p>{firstName}</p>
                <p>{lastName}</p>
              </div>
              <div className={style.flat_host_portrait_wrapper}>
                <img src={host && host.picture} alt={host && host.name} className={style.flat_host_portrait}/>
              </div>
            </div>
          </div>

          <div className={style.flat_desc}>
            <Dropdown title="Description" content={<p>{description}</p>} />
            <Dropdown title="Équipements" content={<ul>{equipments && equipments.map((equipment: string, index: number) => <li key={index}>{equipment}</li>)}</ul>} />
          </div>
        </>
      )}
    </>
  )
}

export default Flat