import React  from 'react';
import "../App.css";
function Body({ veri }) { //props named veri
  // console.log(dataList);
  return (
    <section>
      {/* veri.map() is being used to iterate over each item in the veri array. */}
      {veri.map(({ title, desc, id, image }) => {
        return (
          <div className="card" key={id}>
            <h1>{title}</h1>
            <nav>
              <img src={image} alt="" />
              <div className="overlay">
                <div>{desc}</div>
              </div>
            </nav>
          </div>
        );
      })}
    </section>
  );
}

export default Body;