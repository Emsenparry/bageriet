import axios from "axios";
import { useEffect, useState } from "react";
import { FaRegComments } from 'react-icons/fa';
import './BreadSection.scss';

const Bread = () => {
  const url = "https://api.mediehuset.net/bakeonline/products";
  const [bread, setBread] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setBread(response.data.items.slice(0, 8));
    });
  }, []);

  return (
    <div className="breadContainer">
      {bread.map((data) => {
        return (
          <section className="breadSection" key={data.id}>
            <div className="breadDiv">
              <div className="comments">
                <p>{data.num_comments}</p>
                <FaRegComments />
              </div>
              <img src={data.image.fullpath} alt="bread_image" />
              <h5>{data.title}</h5>
              <p>{data.teaser}</p>
            </div>
            <div className="seeMoreBtn">
              <button>Se Mere</button>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Bread;
