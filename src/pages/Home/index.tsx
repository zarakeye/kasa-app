import Card from "../../components/Card"
import useLocationsData from "../../hooks/useLocationsData"
import Spinner from "../../utils/Spinner"
import landscape from '../../assets/pictures/landscape.png'
import './home.scss'
import { Link } from "react-router-dom"

const Home = (): JSX.Element => {
  const { locationsData, isDataLoading, error } = useLocationsData();

  if (error) {
    return <div>Une erreur ${error} est survenue durant le chargement des données</div>
  }

  return (
    <>
      <div className='slogan'>
        <div className='slogan_img_container'>
          <img src={landscape} alt="slogan" className="slogan_img" />
        </div>

        <div className='slogan_img_filter'></div>
        <p className="slogan_text">Chez vous, partout et ailleurs</p>
      </div>
      {isDataLoading ? (
        <div className="spinner_container">
          <Spinner />
        </div>
      ) : (
        <>
          <h1 className="sr-only">Liste de locations</h1>
          <div className="cards_container">
            {locationsData.map((location) => (
              <Link to={`/location/${location.id}`} key={location.id}>
                <Card
                  key={location.id}
                  location={location}
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