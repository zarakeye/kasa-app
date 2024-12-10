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

  /**
   * Render the flat page.
   * 
   * It fetches the flat data from the context and render the page.
   * If the flat is not found, it renders an Error404 component.
   * If the flat is loading, it renders a Spinner component.
   * 
   * @returns {JSX.Element} The flat page component
   */
const Flat: React.FC = (): JSX.Element => {
  const { flatId } = useParams();
  const { flatsData } = useFetchContext();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState(false);
  const [foundFlat, setFoundFlat] = useState<FlatType | undefined | null >(null);
  
  useEffect(() => {
  
  /**
   * Fetches the flat data from the context and updates the state.
   * 
   * It sets the loading state to true at the start of the fetch and resets any existing error state.
   * 
   * If the fetch is successful, it updates the `foundFlat` state with the retrieved data.
   * If the response is not ok or the content is not valid JSON, it throws an error and sets the `error` state.
   * 
   * Finally, it sets the loading state to false after the fetch attempt is complete, regardless of success or failure.
   */

    const fetchData = () => {
      setIsLoading(true);

      try {
        const result = flatsData.find((flat) => flat.id === flatId);
        setFoundFlat(result);

        if (!result) {
          throw new Error('Flat not found');
        }
      } catch (error) {
        console.error(error);
        setError(true); 
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [flatsData, flatId, foundFlat]);

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

  console.log('error', error)

  return (
    <>
      <main className={style.flat_container}>

      { isLoading === true && (
        <div className={style.spinner_container}>
          <Spinner />
        </div>
      )}

      { error === true && (
        <Error404 message="Oups ! La référence d'appartement que vous demandez n'existe pas" />
      )}

      {foundFlat && (
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
            <Dropdown title="Description" content={description ?? ''} />
            <Dropdown title="Équipements" content={equipments ?? []} />
          </div>
        </>
      )}
      </main>
    </>
  )
}

export default Flat