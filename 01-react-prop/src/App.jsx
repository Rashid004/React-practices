/** @format */

import Card from "./Card";
import "./index.css";

function App() {
  return (
    <div className="">
      <Card
        imageSrc={
          "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/fdded470-0ac5-4bd7-b41b-1bb63e161438/custom-nike-air-force-1-mid-by-you-shoes.png"
        }
        ShoesName={"Nike jordan"}
      />
      <Card
        imageSrc={
          "https://images.unsplash.com/photo-1588099768523-f4e6a5679d88?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxMTM4MTU1NXx8ZW58MHx8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
        }
        ShoesName={" Nike Airmax v2"}
      />
    </div>
  );
}

export default App;
