import React, { useEffect, useState } from "react";
import style from './Carousel.module.scss'
import arrowLeft from '../../assets/pictures/arrow_left.svg'
import arrowRight from '../../assets/pictures/arrow_right.svg'

interface CarouselProps {
  pictures: string[]
}

interface ImageInfo {
  width: number;
  height: number;
}

  /**
   * Carousel component to display a list of images.
   *
   * @param {{pictures: string[]}} props
   * @prop {string[]} pictures List of image URLs to display in the carousel.
   * @returns {JSX.Element} JSX element representing a carousel of images.
   */
const Carousel: React.FC<CarouselProps> = ({pictures}): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [previousIndex, setPreviousIndex] = useState<number>(pictures.length - 1);
  const [nextIndex, setNextIndex] = useState<number>(1);

  const showPreviousImage = () => {
    setActiveIndex(previousIndex);
    setPreviousIndex((previousIndex - 1 + pictures.length) % pictures.length);
    setNextIndex((previousIndex + 1) % pictures.length);
  }

  /**
   * Set the activeIndex state to the value of nextIndex, and updates the values of
   * previousIndex and nextIndex accordingly.
   */
  const showNextImage = () => {
    setActiveIndex(nextIndex);
    setPreviousIndex((nextIndex - 1 + pictures.length) % pictures.length);
    setNextIndex((nextIndex + 1) % pictures.length);
  }

  const [currentImageInfo, setCurrentImageInfo] = useState<ImageInfo | null>(null);

  useEffect(() => {
    const image = new Image();
    image.src = pictures[activeIndex];
    image.onload = () => setCurrentImageInfo({
      width: image.width,
      height: image.height,
    });
    image.onerror = () => console.error('Failed to load image');
  }, [activeIndex, pictures, currentImageInfo]);

  return (
    <div className={style.carousel}>
      <img className={style.carousel_image} src={pictures[activeIndex]} alt="Photo actuelle" />
      {pictures.length > 1 && (
        <>
          <button type="button" className={style.carousel_button_previous} onClick={() => showPreviousImage()}>
            <img className={style.carousel_button_previous_arrow} src={arrowLeft} alt="flèche bouton image précédente" />
          </button>
          <button type="button" className={style.carousel_button_next} onClick={() => showNextImage()}>
            <img className={style.carousel_button_next_arrow} src={arrowRight} alt="flèche bouton image suivante" />
          </button>
          <div className={style.carousel_image_counter}>{activeIndex + 1}/{pictures.length}</div>
        </>
      )}
      
    </div>
  )
}

export default Carousel