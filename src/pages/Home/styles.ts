import styled from 'styled-components';
import { responsive } from 'styles/global';

export const Container = styled.section`
  display: block;

  padding: 10px 20rem;

  @media (max-width: ${responsive.laptop}) {
    padding: 10px 4rem;
  }

  @media (max-width: ${responsive.tablet}) {
    padding: 10px 4rem;
  }

  @media (max-width: ${responsive.mobileLarge}) {
    padding: 10px 3rem;
  }

  @media (max-width: ${responsive.mobileSmall}) {
    padding: 10px 2rem;
  }
`;

export const Content = styled.div`
  img {
    display: flex;
    margin: 5rem auto;
    width: 30%;
  }

  .start {
    margin: 2.8rem auto;
    display: flex;
    max-width: 12rem;

    svg {
      position: relative;
      top: -1px;
    }
  }

  .terms {
    display: flex;

    & > div > label {
      margin: -0.6rem auto;
    }
  }

  @media (max-width: ${responsive.laptop}) {
    img {
      width: 40%;
      margin: 2rem auto;
    }
  }

  @media (max-width: ${responsive.tablet}) {
    img {
      width: 80%;
      margin: 2rem auto;
    }
  }

  @media (max-width: ${responsive.mobileLarge}) {
    img {
      width: 70%;
      margin: 2rem auto;
    }
  }

  @media (max-width: ${responsive.mobileSmall}) {
    img {
      width: 70%;
      margin: 1rem auto;
    }
  }
`;

export const ContentInfo = styled.div`
  margin-top: 5rem;

  h1 {
    text-align: center;
  }

  p {
    padding-top: 1rem;
    font-size: 21px;
  }

  @media (max-width: ${responsive.mobileLarge}) {
    p {
      font-size: 18px;
    }

    li {
      font-size: 16px;
    }
  }

  @media (max-width: ${responsive.mobileSmall}) {
    margin-top: 2rem;
  }
`;
