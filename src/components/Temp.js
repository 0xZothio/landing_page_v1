import { useLayoutEffect, useState } from "react";
import classnames from "classnames";
import "../styles/styles.css";

const images = [0, 1, 2, 3, 4];

const Temp = () => {
  const [visibleImagesMap, setVisibleImagesMap] = useState(
    images.reduce((map, image) => {
      map[image] = false;
      return map;
    }, {})
  );

  useLayoutEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const viewportHeight = window.innerHeight;

      const newVisibleImagesMap = images.reduce((map, image) => {
        map[image] = scrollTop >= image * viewportHeight;
        return map;
      }, {});

      setVisibleImagesMap(newVisibleImagesMap);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      <div className="sticky">
        <div className="frame">
          {images.map((image) => (
            <div
              className={classnames("image", `image_${image}`, {
                image_visible: visibleImagesMap[image],
              })}
              key={image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Temp;