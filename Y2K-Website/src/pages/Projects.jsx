import React from "react";

const Projects = () => {
  // const projects = [
  //   {
  //     image1:
  //       "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
  //       "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
  //     image2:
  //       "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg",
  //   },
  //   {
  //     image1:
  //       "https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg",
  //     image2:
  //       "https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg",
  //   },
  //   {
  //     image1:
  //       "https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg",
  //     image2:
  //       "https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg",
  //   },
  // ];

  return (
    <div className="p-4">
      <div className="pt-[40vh]">
        <h2 className="font-[font2] text-[23vh] uppercase">Projects</h2>
      </div>
      <div className="-mt-15">
        <div className="w-full h-[500px] flex mb-4 gap-4">
          <div className="w-1/2 transition-all rounded-none hover:rounded-[40px] overflow-hidden h-full">
            <img
              className="h-full w-full object-cover"
              src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg"
              alt=""
            />
            <div>
              <h2></h2>
            </div>
          </div>
          {/* <div className="w-1/2 hover:rounded-4xl overflow-hidden h-full">
            <img
              className="h-full w-full object-cover"
              src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg"
              alt=""
            />
          </div> */}
        </div>
        {/* <div className="w-full h-[700px] flex mb-4 gap-4 bg-amber-600 -mt-15">
          <div className="w-1/2 h-full bg-green-500"></div>
          <div className="w-1/2 h-full bg-blue-500"></div>
        </div> */}
      </div>
    </div>
  );
};

export default Projects;
