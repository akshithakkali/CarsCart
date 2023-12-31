import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

const HeroSection = ({ myData }) => {
  const { name } = myData;

  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">

        <div className="hero-section-data">
            <p className="intro-data">Welcome to </p>
            <h1> {name} </h1>
            {/* <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              atque temporibus veniam doloribus libero ad error omnis voluptates
              animi! Suscipit sapiente.
            </p> */}
            {/* <video src='http://surl.li/fmgca'className="vid-style" autoPlay loop muted /> */}
            <video src='videos/carhome.mp4' className="vid-style" autoPlay loop muted />
            <NavLink className="show-btn-style">
              <Button>show now</Button>
            </NavLink>
          </div> 
          {/* our homepage image  */}
          <div className="hero-section-image">
            <figure>
              <img
                src="images/hero2.jpg"
                alt="hero-section-photo"
                className="img-style"
              />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 8rem 0;

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }

    .intro-data {
      margin-bottom: 0;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  figure {
    position: relative;

    &::after {
      content: "";
      width: 100%;
      height: 100%;
      background-color: #FF6F91;
      position: absolute;
      right: 32%;
      top: -5rem;
      z-index: -1;
      border-radius:360px;
    }
  }
  .img-style {
    width: 120%;
    height: auto;
    border-radius:20px;
  }
  .vid-style {
    width: 100%;
    border-radius:40px;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default HeroSection;

         