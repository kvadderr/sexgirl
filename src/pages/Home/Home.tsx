import ImageSlider from "react-image-comparison-slider";
import s from './Home.module.scss'
import { advantagesItem } from "../../constants/advantagesItem";
import Advantages from "./Advantages/Advantages";
import CustomButton from "../../components/Button/CustomButton";
import GenerateButton from "../../components/Button/GenerateButton";
import { useState } from "react";
import axios from 'axios';

const Home = () => {

  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState(null);

  const Slider = () => {
    return (
      <ImageSlider
        image1="https://nueasy.ai/examples/4.webp?w=560"
        image2="https://nueasy.ai/examples/4-4.webp?w=560"
        animate
        sliderColor="#4CFF7F"
        showHandle={false}
        animationCycleDuration={5000} />
    )
  };

  const Image = () => {
    return (
      <img src={selectedFile || undefined} width={310} />
    )
  }

  const GeneratedImage = () => {
    return (
      <img src={"data:image/png;base64," + generatedImage} width={310} />
    )
  }

  const Render = () => {
    if (isLoading) {
      return <span className={s.loader} />
    } else if (generatedImage) {
      return <GeneratedImage />
    } else if (selectedFile) {
      return <Image />
    } else {
      return <Slider />
    }
  }

  const generate = () => {
    setIsLoading(true);
    const url = 'http://62.68.146.39:4000/gen/createNude';
    const data = {
      "mask": selectedFile
    };
    axios.post(url, data)
      .then(response => {
        setIsLoading(false);
        setGeneratedImage(response.data);
      })
      .catch(error => {
        setIsLoading(false);
        console.error('POST error:', error);
        // Handle errors if any
      });
  }

  return (
    <div className={s.container}>
      <div className={s.leftContainer}>
        <div>
          <p className={s.logo}>SexGirl</p>
          <p className={s.description}>Dreams sometimes come true</p>
        </div>
        <div className={s.advantages}>
          {
            advantagesItem.map(item => (
              <Advantages icon={item.icon} text={item.name} key={item.id} />
            ))
          }
        </div>
        <div className={s.smallContainer}>
          <CustomButton setSelectedFile={setSelectedFile} />
          {selectedFile && <GenerateButton onClick={generate} />}
        </div>
      </div>
      <div style={{ width: 310, height: 450, borderRadius: 30 }}>
        <Render />
      </div>
    </div>
  )
}

export default Home