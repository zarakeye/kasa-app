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

const Carousel: React.FC<CarouselProps> = ({pictures}): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [previousIndex, setPreviousIndex] = useState<number>(pictures.length - 1);
  const [nextIndex, setNextIndex] = useState<number>(1);

  const showPreviousImage = () => {
    setActiveIndex(previousIndex);
    setPreviousIndex((previousIndex - 1 + pictures.length) % pictures.length);
    setNextIndex((previousIndex + 1) % pictures.length);
  }

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
      <img className={style.carousel_image} src={pictures[activeIndex]} alt="image" />
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