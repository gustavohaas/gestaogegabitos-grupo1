import styled from "styled-components";

export const Overlay = styled.div`
  visibility: hidden;
  opacity: 0;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
`;

export const Popup = styled.div`
  margin: 70px auto;
  background: linear-gradient( 
90deg, #fc466b 0%, #5c5ae5 103.5%, rgba(63,94,251,0) 104.96% );
  border-radius: 5px;
  width: 99%;
  position: relative;
  transition: all 5s ease-in-out;
  @media screen and (max-width: 479px) {
    width: 96%;
  }
  @media screen and (min-width: 480px) and (max-width: 639px) {
    width: 75%;
  }
  @media screen and (min-width: 640px) and (max-width: 767px) {
    width: 64%;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 42%;
  }
  @media screen and (min-width: 1024px) {
    width: 36%;
}
`;

export const Title = styled.h3`
  margin-top: 0;
  color: #fff;
  font-size: 20px;
  margin-left: 20px;
  text-align: left;
  text-shadow: 1px 1px 1px #333;
  transform: translateY(21px);
`;

export const CloseBtn = styled.span`
  position: absolute;
  top: 10px;
  right: 30px;
  transition: all 200ms;
  font-size: 32px;
  font-weight: bold;
  text-decoration: none;
  color: #fc466b;
  &:hover {
    cursor: pointer;
    filter: brightness(75%);
    transition: 0.5s;
  }
`;

export const Content = styled.div`
  max-height: 30%;
  overflow: auto;
  display: flex;
`;