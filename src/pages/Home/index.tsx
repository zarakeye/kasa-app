import Header from "../../components/Header"
import { useState, useEffect } from "react"
import Spinner from "../../utils/Spinner"
import Card from "../../components/Card"

export interface Location {
  id: string;
  title: string;
  cover: string;
  pictures: string[];
  description: string;
  host: {
    name: string;
    picture: string;
  };
  rating: string;
  location: string;
  equipments: string[];
  tags: string[];
}

const Home = (): JSX.Element => {
  const [isDataLoading, setDataLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [locationsData, setLocationsData] = useState<Location[]>([])


  useEffect((): void => {
    async function fetchLocations() {
      setDataLoading(true)
      try {
        const response = await fetch('http://localhost:8000/locations')
        const locationsData: Location[] = await response.json()
        setLocationsData(locationsData)
      } catch (error) {
        console.log(error)
        if (error instanceof Error) {
          setError(error.message)
        }
      } finally {
        setDataLoading(false)
      }
    }
    fetchLocations()
  }, [])

  if (error) {
    return <div>Une erreur ${error} est survenue durant le chargement des données</div>
  }

  return (
    <>
      <Header />
      <h1>Home</h1>
      {isDataLoading ? (
        <div>
          <Spinner />
        </div>
      ) : (
        <div className="cards_container">
          {locationsData.map((location: Location) => (
            <Card
              key={location.id} location={location}
            />
          ))}
        </div>
      )
      }
    </>
  )
}

export default Home