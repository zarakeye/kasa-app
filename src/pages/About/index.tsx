import landscape from '../../assets/pictures/landscape.png'
import Dropdown from '../../components/Dropdown'
import style from './About.module.scss'

/**
 * "À propos" is the "About" page of the Kasa application.
 *
 * This page contains information about Kasa company, as well as details about the
 * company's values and commitments.
 *
 * The page is composed of a landscape image and several dropdowns that contain
 * information about the reliability, respect, service and security of the company.
 */
const About = (): JSX.Element => {
  const fiabilityContent: string = 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont verifiables par nos soins.'
  
  
  const respectContent: string = 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.'

  const serviceContent: string = 'La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.'

  const securityContent: string = "La securité est la priorité de Kasa. Aussi bien pour nos hôtes que pour nos équipes, chaque logement correspond aux critères de securité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."

  return (
    <main className={style.about}>
      <h1 className={style.sr_only}>À propos</h1>
      <div className={style.about_image_container}>
        <img src={landscape} alt="paysage" className={style.about_image} />
        <div className={style.about_image_filter}></div>
      </div>

      <div className={style.about_text_container}>

        <Dropdown title='Fiabilité' content={fiabilityContent ?? ''} />
        <Dropdown title='Respect' content={respectContent ?? ''} />
        <Dropdown title='Service' content={serviceContent ?? ''} />
        <Dropdown title='Sécurité' content={securityContent ?? ''} />
      </div>
    </main>
  )
}

export default About