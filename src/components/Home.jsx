import { Fragment } from "react"
import { AiFillGoogleCircle, AiFillYoutube, AiFillInstagram,AiFillAmazonCircle } from "react-icons/ai"
import vg from "../assets/2.webp"

const Home = () => {
  return (
    <>

      {/* /////////div one////// */}
      <div className='home' id="home">
        <main>
          <h1>Star</h1>
          <p>Problam Slove</p>
        </main>
      </div>

      {/* /////////div tow////// */}
      <div className="home2">
        <img src={vg} alt="Gfx" />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore id, ut nesciunt modi incidunt necessitatibus vitae porro dolorum nulla fugiat placeat asperiores deleniti.
          </p>
        </div>
      </div>

        {/* /////////div three About////// */}
      <div className="home3" id="about">
        <div>
          <h1>Who We are?</h1>

          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, id facilis! Odit eveniet dignissimos perspiciatis error. Suscipit doloribus Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, iste tenetur? Hic nostrum eligendi repellat, natus, libero rerum non voluptatem mollitia neque, ut eveniet. Facilis quas quisquam laudantium libero optio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nesciunt dolores laboriosam, repellat nobis, deserunt repellendus temporibus deleniti quas sit, asperiores sed iure iste explicabo impedit voluptate earum fuga iusto? </p>

        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{
              animationDelay:"0.3s"
            }}>
              <AiFillGoogleCircle/>
              <p>Google</p>
            </div>
            <div style={{
              animationDelay:"0.5s"
            }}>
              <AiFillYoutube/>
              <p>Youtube</p>
            </div>
            <div style={{
              animationDelay:"0.7s"
            }}>
              <AiFillInstagram/>
              <p>Instagram</p>
            </div>
            <div style={{
              animationDelay:"0.7s"
            }}>
              <AiFillAmazonCircle/>
              <p>Amazon</p>
            </div>
          </article>
        </div>
      </div>
  </>
  )
}

export default Home