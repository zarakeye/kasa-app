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

  // const imageStyle: React.CSSProperties = currentImageInfo ? {
  //   width: currentImageInfo.width,
  //   height: currentImageInfo.height,
  // } : {};

  // let imageWidth: string = '';
  // let imageWidth768: string = '';
  // let imageWidth1024: string = '';
  // let imageHeight: string = '';
  // let imageHeight768: string = '';
  // let imageHeight1024: string = '';

  // if (currentImageInfo && currentImageInfo.width > currentImageInfo.height) {
  //   imageHeight = `255px`;
  //   imageWidth = 'auto';
  //   imageHeight768 = `415px`;
  //   imageWidth768 = 'auto';
  //   imageHeight1024 = `724px`;
  //   imageWidth1024 = 'auto';
  // } else if (currentImageInfo && currentImageInfo.width < currentImageInfo.height) {
  //   imageWidth = `335px`;
  //   imageHeight = 'auto';
  //   imageWidth768 = `468px`;
  //   imageHeight768 = 'auto';
  //   imageWidth1024 = `468px`;
  // } else if (currentImageInfo && currentImageInfo.width === currentImageInfo.height) {
  //   imageWidth = `335px`;
  //   imageHeight = 'auto';
  //   imageWidth768 = `468px`;
  //   imageHeight768 = 'auto';
  //   imageWidth1024 = `468px`;
  // }

  // const carouselStyle = {
  //   width: imageWidth,
  //   height: imageHeight,

  //   @media (min-width: 768px) {
  //     width: imageWidth768,
  //     height: imageHeight768
  //   },

  //   @media (min-width: 1024px) {
  //     width: imageWidth1024,
  //     height: imageHeight1024
  //   }
  // }; // Add this style

  return (
    <div className={style.carousel}>
      <img className={style.carousel_image} src={pictures[activeIndex]} alt="image" />
      <button type="button" className={style.carousel_button_previous} onClick={() => showPreviousImage()}>
        <img className={style.carousel_button_previous_arrow} src={arrowLeft} alt="flèche bouton image précédente" />
      </button>
      <button type="button" className={style.carousel_button_next} onClick={() => showNextImage()}>
        <img className={style.carousel_button_next_arrow} src={arrowRight} alt="flèche bouton image suivante" />
      </button>
    </div>
  )
}

export default Carousel