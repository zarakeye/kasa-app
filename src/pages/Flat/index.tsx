import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import starEmpty from '../../assets/pictures/star_empty.svg'
import starFull from '../../assets/pictures/star_full.svg'
import Dropdown from "../../components/Dropdown"
import useFlatsData, { Flat as FlatData} from "../../hooks/useFlatsData"
import Spinner from "../../utils/Spinner"
import style from './Flat.module.scss'
import Carousel from "../../components/Carousel"
import Error404 from "../Error404"

const Flat: React.FC = (): JSX.Element => {
  const { flatId } = useParams();
  const { flatsData, isDataLoading, error } = useFlatsData();
  const [flatData, setFlatData] = useState<FlatData | null>(null);
  const [flatDataLoading, setFlatDataLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  
  // const data = useMemo(() => {
  //   return flatsData.find((flat) => flat.id === flatId);
  // }, [flatsData, flatId]);

  useEffect(() => {
    const fetchFlatData = async () => {
      setFlatDataLoading(true);
      setIsError(false);

      try {
        const foundFlat = flatsData.find((flat) => flat.id === flatId);
        const foundData: FlatData | null = foundFlat ? foundFlat : null;
        setFlatData(foundData);
      } catch (err) {
        console.log(err);
        setIsError(true);
      } finally {
        setFlatDataLoading(false);
      }
    };

    fetchFlatData();
  }, [flatsData, flatId]);

  if (error) {
    return <div>Une erreur ${error} est survenue durant le chargement des données</div>
  }

  const { title, pictures, description, host, rating, location, equipments, tags } = flatData || {};
  // const { title, pictures, description, host, rating, location, equipments, tags } = flatData || {};

  const parsedRating = rating && parseInt(rating, 10);
  const stars: JSX.Element[] = [];
  for (let i = 0; i < 5; i++) {
    if (parsedRating && i < parsedRating) {
      stars.push(
        <div key={i} className={style.flat_rate_container}>
          <img key={i} src={starFull} alt="étoile pleine" className={style.flat_rate} />
        </div>
      )
    } else {
      stars.push(
        <div key={i} className={style.flat_rate_container}>
          <img key={i} src={starEmpty} alt="étoile vide"  className={style.flat_rate} />
        </div>
      )
    }
  }

  const [firstName, lastName] = host?.name?.split(' ') || [];

  return (
    <>
      {flatDataLoading && (
        <div className={style.spinner_container}>
          <Spinner />
        </div>
      )}
      {(!flatDataLoading && flatData === null) && (
        <Error404 message="Oups ! La référence d'appartement que vous demandez n'existe pas" />
      )}
      {flatData !== null && !isError && !flatDataLoading && 
        <>
          <h1 className={style.sr_only}>Fiche de l'appartement</h1>
          {pictures && <Carousel pictures={pictures} />}
            
          <div className={style.flat_info}>
            <div className={style.flat_resume}>
              <h2 className={style.flat_title}>{title}</h2>
              <p className={style.flat_location}>{location}</p>
              <div className={style.flat_tags}>
                {tags && tags.map((tag: string, index: number) => (
                  <span key={index} className={style.flat_tag}>{tag}</span>
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
          </div>

          <div className={style.flat_desc}>
            <Dropdown title="Description" content={<p>{description}</p>} />
            <Dropdown title="Équipements" content={<ul>{equipments && equipments.map((equipment: string, index: number) => <li key={index}>{equipment}</li>)}</ul>} />
          </div>
        </>
      }
    </>
  )
}

export default Flat