import React from 'react';
import leftimg from '../../assets/images/inner/inner-left-img.jpg'
import rightimg from '../../assets/images/inner/inner-bg.jpg'


const PageTitle = ({ 
  title, 
  breadcrumbs = [], 
  leftImage = leftimg,
  rightImage = rightimg,
  animationDelay = 0
}) => {
  return (
    <section className="top-space-margin inner_page overflow-hidden p-0 bg-very-light-gray page-title-big-typography">
      <div className="container-fluid p-0">
        <div className="row justify-content-center small-screen sm-h-400px g-0">
          {/* Left Section with Title and Breadcrumbs */}
          <div 
            className="col-md-6 d-flex justify-content-center flex-column ps-7 pe-15px sm-ps-15px cover-background text-white text-md-start text-center page-title-large" 
            style={{ backgroundImage: `url('${leftImage}')` }}
            data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 200, "easing": "easeOutQuad" }'
          >
            <h1 
              className="fw-600 mb-10px ls-minus-2px"
              data-fancy-text={`{ "opacity": [0, 1], "translateY": [50, 0], "filter": ["blur(20px)", "blur(0px)"], "string": ["${title}"], "duration": 400, "delay": ${animationDelay}, "speed": 50, "easing": "easeOutQuad" }`}
            >
              {title}
            </h1>
            <Breadcrumbs items={breadcrumbs} />
          </div>
          
          {/* Right Section with Background Image */}
          <div className="col-md-6">
            <div 
              className="h-100 position-relative cover-background sm-pt-50px" 
              style={{ backgroundImage: `url('${rightImage}')` }}
              data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 200, "easing": "easeOutQuad" }'
            >
              {/* Optional content can be added here */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper component for breadcrumbs
const Breadcrumbs = ({ items }) => {
  if (!items || items.length === 0) return null;
  
  return (
    <h2 className="opacity-8 mb-0 fw-400 text-white">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && ' | '}
          {item.link ? (
            <a className="text-white" href={item.link}>{item.label}</a>
          ) : (
            <span>{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </h2>
  );
};

export default PageTitle;