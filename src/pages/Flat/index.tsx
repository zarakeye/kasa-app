import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import starEmpty from '../../assets/pictures/star_empty.svg'
import starFull from '../../assets/pictures/star_full.svg'
import Dropdown from "../../components/Dropdown"
import style from './Flat.module.scss'
import Carousel from "../../components/Carousel"
import Error404 from "../Error404"
import { useFetchContext } from "../../hooks/useFetchContext"
import { Flat as FlatType } from "../../hooks/useFlatsData"
import Spinner from "../../utils/Spinner"

const Flat: React.FC = (): JSX.Element => {
  const { flatId } = useParams();
  const { flatsData } = useFetchContext();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState(false);
  const [foundFlat, setFoundFlat] = useState<FlatType | undefined | null >(null);
  
  useEffect(() => {
    setIsLoading(true);
    const result = flatsData.find((flat) => flat.id === flatId);
    setFoundFlat(result);
    
    if (result === undefined) {
      setIsLoading(false);
      setError(true);
    }
  }, [flatsData, flatId]);

  // useEffect(() => {
  //   // if (typeof foundFlat === 'object' && !isObjectEmpty(foundFlat)) {
  //   if (foundFlat === undefined || ) {
  //     setIsLoading(false);
  //     setError(true);
  //   // } else if (typeof foundFlat === 'object' && isObjectEmpty(foundFlat)) {
  //   } else if (foundFlat !== null) {
  //     setIsLoading(false);
  //     setError(false);
  //   }
  // }, [foundFlat])

  const { title, pictures, description, host, rating, location, equipments, tags } = foundFlat || {};

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
      {( /*typeof foundFlat === 'object' && !isObjectEmpty(foundFlat) && */ foundFlat === null && isLoading === true) && (
        <div className={style.spinner_container}>
          <Spinner />
        </div>
      )}

      {( foundFlat === undefined && error === true) && (
        <Error404 message="Oups ! La référence d'appartement que vous demandez n'existe pas" />
      )}

      {foundFlat !== undefined && foundFlat !== null && (
        <main>
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
            <Dropdown title="Description" content={description ?? ''} />
            <Dropdown title="Équipements" content={equipments ?? []} />
          </div>
        </main>
      )}
    </>
  )
}

export default Flat