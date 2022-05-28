import { useState } from "react";

const detailPage = () => {
  const [openDetail, setOpenDetail] = useState(false);

  return openDetail ? (
    <div className="detail-page">
      <div className="section-left">
        <h3>{item.perName}</h3>
        <p>Profile</p>
        <button>Save</button>
        <p>description</p>
        <h5>location</h5>
        <button>Message</button>
      </div>
      <div className="section-left">
        <button onClick={setOpenDetail(false)}>Exit Post</button>
        <img src={item.prodPic} />
      </div>
    </div>
  ) : (
    ""
  );
};

export default detailPage;
