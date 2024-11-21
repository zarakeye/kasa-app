import Card from "../../components/Card"
import useFlatsData from "../../hooks/useFlatsData"
import Spinner from "../../utils/Spinner"
import landscape from '../../assets/pictures/landscape.png'
import style from './Home.module.scss'
import { Link } from "react-router-dom"

const Home = (): JSX.Element => {
  const { flatsData, isDataLoading, error } = useFlatsData();

  if (error) {
    return <div>Une erreur ${error} est survenue durant le chargement des données</div>
  }

  return (
    <>
      <div className={style.slogan}>
        <div className={style.slogan_img_container}>
          <img src={landscape} alt="slogan" className={style.slogan_img} />
        </div>

        <div className={style.slogan_img_filter}></div>
        <p className={style.slogan_text}>Chez vous, partout et ailleurs</p>
      </div>
      {isDataLoading ? (
        <div className={style.spinner_container}>
          <Spinner />
        </div>
      ) : (
        <>
          <h1 className={style.sr_only}>Accueil - Liste des appartements</h1>
          <div className={style.cards_container}>
            {flatsData.map((flat) => (
              <Link to={`/flat/${flat.id}`} key={flat.id}>
                <Card
                  key={flat.id}
                  flat={flat}
                />
              </Link>
            ))}
          </div>
        </>
      )}
    </>
  )
}

export default Home