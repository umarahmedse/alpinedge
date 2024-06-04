const WhatSetsApart = () => {
  return (
    <div className="w-full ">
      <video controls={false} preload="auto" muted autoPlay>
        <source src="video2.webm" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default WhatSetsApart;
