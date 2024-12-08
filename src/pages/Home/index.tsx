import Card from "../../components/Card"
import Spinner from "../../utils/Spinner"
import landscape from '../../assets/pictures/landscape.png'
import style from './Home.module.scss'
import { useFetchContext } from "../../hooks/useFetchContext"

/**
 * Home
 *
 * The Home component is the first page displayed by the application.
 * It displays a slogan with a background image and a list of cards
 * representing the available flats.
 *
 * @returns {JSX.Element} The Home component.
 */
const Home = (): JSX.Element => {
  const fetchedContext = useFetchContext();

  const { flatsData, isDataLoading, error } = fetchedContext || {};


  if (error) {
    return <div>Une erreur ${error} est survenue durant le chargement des données</div>
  }


  return (
    <main className={style.main}>
      <div className={style.slogan}>
        <div className={style.slogan_img_container}>
          <img src={landscape} alt="slogan" className={style.slogan_img} />
          <div className={style.slogan_img_filter}></div>
          <p className={style.slogan_text}>Chez vous, partout et ailleurs</p>
        </div>
      </div>
      {isDataLoading ? (
        <div className={style.spinner_container}>
          <Spinner />
        </div>
      ) : (
        <>
          <h1 className={style.sr_only}>Accueil - Liste des appartements</h1>
          <div className={style.cards_container}>
            {flatsData?.map((currentFlat) => {
              return (
                <Card
                  key={currentFlat.id}
                  flat={currentFlat}
                />
              )
            })}
          </div>
        </>
      )}
    </main>
  )
}

export default Home