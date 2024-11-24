import landscape from '../../assets/pictures/landscape_2.png'
import Dropdown from '../../components/Dropdown'
import Layout from '../../components/Layout'
import style from './About.module.scss'

const About = (): JSX.Element => {
  const fiabilityContent: JSX.Element = (
    <p>
      Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont verifiables par nos soins.
    </p>
  )
  
  const respectContent: JSX.Element = (
    <p>
      La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.
    </p>
  )

  const serviceContent: JSX.Element = (
    <p>
      La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.
    </p>
  )

  const securityContent: JSX.Element = (
    <p>
      La securité est la priorité de Kasa. Aussi bien pour nos hôtes que pour nos équipes, chaque logement correspond aux critères de securité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
    </p>
  )

  return (
    <Layout>
      <main>
        <h1 className={style.sr_only}>À propos</h1>
        <div className={style.about_image_container}>
          <img src={landscape} alt="paysage" className={style.about_image} />
          <div className={style.about_image_filter}></div>
        </div>

        <div className={style.values_container}>
          <Dropdown title='Fiabilité' content={fiabilityContent} />
          <Dropdown title='Respect' content={respectContent} />
          <Dropdown title='Service' content={serviceContent} />
          <Dropdown title='Sécurité' content={securityContent} />
        </div>
      </main>
    </Layout>
  )
}

export default About