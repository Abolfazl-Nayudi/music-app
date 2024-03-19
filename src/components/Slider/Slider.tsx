import { useState } from 'react';
import './Slider.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Circle from './Circle/Circle';
import banner1 from '../../assets/images/banner/banner1.jpg';
import banner2 from '../../assets/images/banner/banner2.jpg';
import banner3 from '../../assets/images/banner/banner7.png';
import Description from './Description/Description';
// import car4 from '../../assets/images/car-4.jpg';
// import car5 from '../../assets/images/car-5.jpg';

type ImageSliderProps = {
  url: string;
  alt: string;
}[];

const images: ImageSliderProps = [
  { url: banner1, alt: 'car one' },
  { url: banner2, alt: 'car two' },
  { url: banner3, alt: 'car three' },
];

const artistNames = ['Billie Eilish', 'Harry Styles', 'Beyoncé '];

function Slider() {
  const [imageIndex, setImageIndex] = useState<number>(0);
  console.log(imageIndex);
  const showNextImage = () => {
    setImageIndex((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  };

  const showPrevIamge = () => {
    setImageIndex((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  };

  return (
    <section className="slider">
      <div>
        <section
          aria-label="Image Slider"
          style={{ width: '100%', height: '100%', position: 'relative' }}
        >
          <Description name={artistNames[imageIndex]} />
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              overflow: 'hidden',
            }}
          >
            {images.map(({ url, alt }, index) => (
              <img
                key={url}
                src={url}
                className="img-slider-img"
                alt={alt}
                aria-hidden={imageIndex !== index}
                style={{
                  translate: `${-100 * imageIndex}%`,
                  objectPosition: `${index === 1 ? 'right' : ''}`,
                }}
              />
            ))}
          </div>
          <button
            onClick={showPrevIamge}
            className="img-slider-btn"
            style={{ left: '-80px' }}
            aria-label="View Previous Image"
          >
            <span className="prev-btn">
              <ChevronLeft />
              {/* <FontAwesomeIcon icon={faAngleLeft} /> */}
            </span>
          </button>
          <button
            onClick={showNextImage}
            className="img-slider-btn"
            style={{ right: '-80px' }}
            aria-label="View Next Image"
          >
            <span className="next-btn">
              <ChevronRight />
              {/* <FontAwesomeIcon icon={faAngleRight} /> */}
            </span>
          </button>
        </section>
        <div
          style={{
            position: 'absolute',
            bottom: '.5rem',
            left: '50%',
            translate: '-50%',
            display: 'flex',
            justifyContent: 'center',
            gap: '.25rem',
          }}
        >
          {images.map((_, index) => (
            <button
              key={index}
              className="img-slider-dot-btn"
              aria-label={`View Image ${index + 1}`}
              onClick={() => setImageIndex(index)}
            >
              {index === imageIndex ? (
                // <CircleDot aria-hidden />
                <Circle current={true} />
              ) : (
                <Circle current={false} />
              )}{' '}
            </button>
          ))}
        </div>
      </div>
    </section>
  );

  // return <div className="carousel"></div>;
}

export default Slider;
