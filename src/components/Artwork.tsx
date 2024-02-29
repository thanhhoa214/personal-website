import { SectionId } from "../constants/data";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const images = [
  "IMG_5224.jpg",
  "IMG_0012.jpg",
  "IMG_2076.jpg",
  "IMG_2561.JPG",
  "IMG_0094.jpg",
  "sketch.jpg",
  "20180824_014359820_iOS.JPG",
  "IMG_0169.JPG",
  "IMG_0522.JPG",
  "20180825_133955753_iOS.JPG",
  "20180825_134616963_iOS.JPG",
  "IMG_0624.JPG",
  "20180827_025044422_iOS.JPG",
  "IMG_1098.JPG",
  "IMG_1667.JPG",
  "IMG_0014.JPG",
  "IMG_1778.JPG",
  "IMG_0034.JPG",
  "IMG_1800.JPG",
  "IMG_2354.JPG",
  "IMG_0316.JPG",
  "IMG_0322.JPG",
  "IMG_3698.JPG",
  "IMG_0335.JPG ",
  "IMG_0602.JPG",
  "IMG_0519.JPG",
];

export default function ArtworkSection() {
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{
    url: string;
    top: number;
    left: number;
    width: number;
    height: number;
  } | null>(null);

  const openModal = (
    imageUrl: string,
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const imgElement = event.currentTarget.querySelector("img");
    if (!imgElement) return;
    const { top, left, width, height } = imgElement.getBoundingClientRect();

    setSelectedImage({ url: imageUrl, top, left, width, height });
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "visible";
  };

  return (
    <section id={SectionId.Artwork} className="px-4 md:px-12 mx-auto">
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.45 }}
        viewport={{ once: true }}
        className="flex items-center gap-3 mb-8 max-w-2xl"
      >
        <div className="w-6 md:w-20 h-0.5 bg-gray-600"></div>
        <a href={"#" + SectionId.Artwork} className="animated-border-bottom">
          <strong className="font-ubuntu text-3xl text-neon-500 mr-2">
            04.
          </strong>
          <strong className="text-2xl md:text-4xl text-gray-100">
            My Artworks
          </strong>
        </a>
        <div className="flex-grow h-0.5 bg-gray-600"></div>
      </motion.header>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.45 }}
        viewport={{ once: true }}
        className={`transition-all flex flex-col ${!showAll && "h-[85vh]"}`}
      >
        <div className={showAll ? "" : "overflow-scroll relative"}>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1600: 4 }}
          >
            <Masonry>
              {images.map((url) => (
                <div
                  key={url}
                  className="rounded-md mx-auto my-2 overflow-hidden relative cursor-pointer"
                  title="Click to expand"
                  style={{ width: "calc(100% - 1rem)" }}
                  onClick={(event) => openModal(url, event)}
                >
                  <img src={`./images/artworks/${url}`} alt="Artwork" />
                </div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
        {!showAll && (
          <div className="-mt-8 w-full h-8 shrink-0 z-40 bg-gradient-to-t from-navy-500 to-transparent" />
        )}
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-4 py-2 self-center inline-flex flex-col items-center"
        >
          {showAll && <FaAngleUp />}
          <span>{showAll ? "Collapse images" : "Expand images"}</span>
          {!showAll && <FaAngleDown />}
        </button>
      </motion.div>

      {selectedImage && (
        <div
          className="z-40 fixed top-0 left-0 w-full h-screen bg-black bg-opacity-60"
          onClick={() => closeModal()}
        />
      )}
      <AnimatePresence mode="wait">
        {selectedImage && (
          <motion.div
            initial={selectedImage}
            animate={{ top: "2.5%", left: "2.5%", width: "95%", height: "95%" }}
            exit={selectedImage}
            className="fixed rounded-md mx-auto my-2 overflow-hidden z-50"
            title="Click to collapse"
            onClick={() => closeModal()}
          >
            <img
              src={`./images/artworks/${selectedImage.url}`}
              alt="selected artwork"
              className="w-full h-full object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
