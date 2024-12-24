import React from "react";
import img1 from "./img/img1.png"; 
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.png";
function Blog() {
  return (
    <>
      <div className="MainCard" style={{display: "flex",}}>
        <div className="Card1 col-mg-4">
          <img src={img1} alt="Image 1"  style={{height:"100px",}} />
          <h1>Title</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex aspernatur sunt, explicabo nihil eveniet beatae, doloremque adipisci recusandae eum maiores distinctio velit exercitationem optio dicta laborum, atque voluptatibus? Rerum, dolores!</p>
        </div>
        <div className="Card2 col-mg-4">
          <img src={img2} alt="Image 2" style={{height:"100px",}}/>
          <h1>title</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eligendi quam accusantium dignissimos sequi modi quas blanditiis inventore minima ex! Fugiat, hic illum maxime quia fugit velit at? Quia, porro!</p>
        </div>
        <div className="Card3 col-mg-4">
        <img src={img3} alt="Image 2"  style={{height:"100px",}} />
        <h1>title</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eligendi quam accusantium dignissimos sequi modi quas blanditiis inventore minima ex! Fugiat, hic illum maxime quia fugit velit at? Quia, porro!</p>
          
        </div>
       
      </div>
    </>
  );
}
export default Blog;
