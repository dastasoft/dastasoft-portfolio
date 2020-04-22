import styled from 'styled-components';
import { string } from 'prop-types';

import SpinnerBase from './SpinnerBase';

const Spinner = styled(SpinnerBase)`
  border: 1px solid transparent;
  width: 100%;
  height: 100%;
  padding: 8px;

  .circle-acceleration,
  .circle-acceleration:before,
  .circle-acceleration:after {
    border-radius: 50%;
  }
  .circle-acceleration {
    color: ${({ foreground }) => foreground};
    font-size: 11px;
    text-indent: -99999em;
    margin: 55px auto;
    position: relative;
    width: 10em;
    height: 10em;
    box-shadow: inset 0 0 0 1em;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
  }
  .circle-acceleration:before,
  .circle-acceleration:after {
    position: absolute;
    content: '';
  }
  .circle-acceleration:before {
    width: 5.2em;
    height: 10.2em;
    background: ${({ background }) => background};
    border-radius: 10.2em 0 0 10.2em;
    top: -0.1em;
    left: -0.1em;
    -webkit-transform-origin: 5.1em 5.1em;
    transform-origin: 5.1em 5.1em;
    -webkit-animation: load2 2s infinite ease 1.5s;
    animation: load2 2s infinite ease 1.5s;
  }
  .circle-acceleration:after {
    width: 5.2em;
    height: 10.2em;
    background: ${({ background }) => background};
    border-radius: 0 10.2em 10.2em 0;
    top: -0.1em;
    left: 4.9em;
    -webkit-transform-origin: 0.1em 5.1em;
    transform-origin: 0.1em 5.1em;
    -webkit-animation: load2 2s infinite ease;
    animation: load2 2s infinite ease;
  }
  @-webkit-keyframes load2 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load2 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  .circle {
    font-size: 10px;
    margin: 50px auto;
    text-indent: -9999em;
    width: 11em;
    height: 11em;
    border-radius: 50%;
    background: ${({ foreground }) => foreground};
    background: -moz-linear-gradient(
      left,
      ${({ foreground }) => foreground} 10%,
      rgba(255, 255, 255, 0) 42%
    );
    background: -webkit-linear-gradient(
      left,
      ${({ foreground }) => foreground} 10%,
      rgba(255, 255, 255, 0) 42%
    );
    background: -o-linear-gradient(
      left,
      ${({ foreground }) => foreground} 10%,
      rgba(255, 255, 255, 0) 42%
    );
    background: -ms-linear-gradient(
      left,
      ${({ foreground }) => foreground} 10%,
      rgba(255, 255, 255, 0) 42%
    );
    background: linear-gradient(
      to right,
      ${({ foreground }) => foreground} 10%,
      rgba(255, 255, 255, 0) 42%
    );
    position: relative;
    -webkit-animation: load3 1.4s infinite linear;
    animation: load3 1.4s infinite linear;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
  }
  .circle:before {
    width: 50%;
    height: 50%;
    background: ${({ foreground }) => foreground};
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
  }
  .circle:after {
    background: ${({ background }) => background};
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: '';
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  @-webkit-keyframes load3 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load3 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  .circle-pop-dots {
    color: ${({ foreground }) => foreground};
    font-size: 20px;
    margin: 100px auto;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    position: relative;
    text-indent: -9999em;
    -webkit-animation: load4 1.3s infinite linear;
    animation: load4 1.3s infinite linear;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
  }
  @-webkit-keyframes load4 {
    0%,
    100% {
      box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em,
        0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;
    }
    12.5% {
      box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em,
        0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
    }
    25% {
      box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0,
        0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
    }
    37.5% {
      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em,
        0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;
    }
    50% {
      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em,
        0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;
    }
    62.5% {
      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,
        0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;
    }
    75% {
      box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em,
        2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em,
        -2em -2em 0 0;
    }
    87.5% {
      box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,
        0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;
    }
  }
  @keyframes load4 {
    0%,
    100% {
      box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em,
        0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;
    }
    12.5% {
      box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em,
        0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
    }
    25% {
      box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0,
        0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
    }
    37.5% {
      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em,
        0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;
    }
    50% {
      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em,
        0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;
    }
    62.5% {
      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,
        0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;
    }
    75% {
      box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em,
        2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em,
        -2em -2em 0 0;
    }
    87.5% {
      box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,
        0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;
    }
  }

  .circle-dots {
    margin: 100px auto;
    font-size: 25px;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    position: relative;
    text-indent: -9999em;
    -webkit-animation: load5 1.1s infinite ease;
    animation: load5 1.1s infinite ease;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
  }
  @-webkit-keyframes load5 {
    0%,
    100% {
      box-shadow: 0em -2.6em 0em 0em ${({ foreground }) => foreground},
        1.8em -1.8em 0 0em ${({ background }) => background},
        2.5em 0em 0 0em ${({ background }) => background},
        1.75em 1.75em 0 0em ${({ background }) => background},
        0em 2.5em 0 0em ${({ background }) => background},
        -1.8em 1.8em 0 0em ${({ background }) => background},
        -2.6em 0em 0 0em rgba(255, 255, 255, 0.5),
        -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7);
    }
    12.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.7),
        1.8em -1.8em 0 0em ${({ foreground }) => foreground},
        2.5em 0em 0 0em ${({ background }) => background},
        1.75em 1.75em 0 0em ${({ background }) => background},
        0em 2.5em 0 0em ${({ background }) => background},
        -1.8em 1.8em 0 0em ${({ background }) => background},
        -2.6em 0em 0 0em ${({ background }) => background},
        -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5);
    }
    25% {
      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.5),
        1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7),
        2.5em 0em 0 0em ${({ foreground }) => foreground},
        1.75em 1.75em 0 0em ${({ background }) => background},
        0em 2.5em 0 0em ${({ background }) => background},
        -1.8em 1.8em 0 0em ${({ background }) => background},
        -2.6em 0em 0 0em ${({ background }) => background},
        -1.8em -1.8em 0 0em ${({ background }) => background};
    }
    37.5% {
      box-shadow: 0em -2.6em 0em 0em ${({ background }) => background},
        1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5),
        2.5em 0em 0 0em rgba(255, 255, 255, 0.7),
        1.75em 1.75em 0 0em ${({ foreground }) => foreground},
        0em 2.5em 0 0em ${({ background }) => background},
        -1.8em 1.8em 0 0em ${({ background }) => background},
        -2.6em 0em 0 0em ${({ background }) => background},
        -1.8em -1.8em 0 0em ${({ background }) => background};
    }
    50% {
      box-shadow: 0em -2.6em 0em 0em ${({ background }) => background},
        1.8em -1.8em 0 0em ${({ background }) => background},
        2.5em 0em 0 0em rgba(255, 255, 255, 0.5),
        1.75em 1.75em 0 0em rgba(255, 255, 255, 0.7),
        0em 2.5em 0 0em ${({ foreground }) => foreground},
        -1.8em 1.8em 0 0em ${({ background }) => background},
        -2.6em 0em 0 0em ${({ background }) => background},
        -1.8em -1.8em 0 0em ${({ background }) => background};
    }
    62.5% {
      box-shadow: 0em -2.6em 0em 0em ${({ background }) => background},
        1.8em -1.8em 0 0em ${({ background }) => background},
        2.5em 0em 0 0em ${({ background }) => background},
        1.75em 1.75em 0 0em rgba(255, 255, 255, 0.5),
        0em 2.5em 0 0em rgba(255, 255, 255, 0.7),
        -1.8em 1.8em 0 0em ${({ foreground }) => foreground},
        -2.6em 0em 0 0em ${({ background }) => background},
        -1.8em -1.8em 0 0em ${({ background }) => background};
    }
    75% {
      box-shadow: 0em -2.6em 0em 0em ${({ background }) => background},
        1.8em -1.8em 0 0em ${({ background }) => background},
        2.5em 0em 0 0em ${({ background }) => background},
        1.75em 1.75em 0 0em ${({ background }) => background},
        0em 2.5em 0 0em rgba(255, 255, 255, 0.5),
        -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.7),
        -2.6em 0em 0 0em ${({ foreground }) => foreground},
        -1.8em -1.8em 0 0em ${({ background }) => background};
    }
    87.5% {
      box-shadow: 0em -2.6em 0em 0em ${({ background }) => background},
        1.8em -1.8em 0 0em ${({ background }) => background},
        2.5em 0em 0 0em ${({ background }) => background},
        1.75em 1.75em 0 0em ${({ background }) => background},
        0em 2.5em 0 0em ${({ background }) => background},
        -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.5),
        -2.6em 0em 0 0em rgba(255, 255, 255, 0.7),
        -1.8em -1.8em 0 0em ${({ foreground }) => foreground};
    }
  }
  @keyframes load5 {
    0%,
    100% {
      box-shadow: 0em -2.6em 0em 0em ${({ foreground }) => foreground},
        1.8em -1.8em 0 0em ${({ background }) => background},
        2.5em 0em 0 0em ${({ background }) => background},
        1.75em 1.75em 0 0em ${({ background }) => background},
        0em 2.5em 0 0em ${({ background }) => background},
        -1.8em 1.8em 0 0em ${({ background }) => background},
        -2.6em 0em 0 0em rgba(255, 255, 255, 0.5),
        -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7);
    }
    12.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.7),
        1.8em -1.8em 0 0em ${({ foreground }) => foreground},
        2.5em 0em 0 0em ${({ background }) => background},
        1.75em 1.75em 0 0em ${({ background }) => background},
        0em 2.5em 0 0em ${({ background }) => background},
        -1.8em 1.8em 0 0em ${({ background }) => background},
        -2.6em 0em 0 0em ${({ background }) => background},
        -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5);
    }
    25% {
      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.5),
        1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7),
        2.5em 0em 0 0em ${({ foreground }) => foreground},
        1.75em 1.75em 0 0em ${({ background }) => background},
        0em 2.5em 0 0em ${({ background }) => background},
        -1.8em 1.8em 0 0em ${({ background }) => background},
        -2.6em 0em 0 0em ${({ background }) => background},
        -1.8em -1.8em 0 0em ${({ background }) => background};
    }
    37.5% {
      box-shadow: 0em -2.6em 0em 0em ${({ background }) => background},
        1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5),
        2.5em 0em 0 0em rgba(255, 255, 255, 0.7),
        1.75em 1.75em 0 0em ${({ foreground }) => foreground},
        0em 2.5em 0 0em ${({ background }) => background},
        -1.8em 1.8em 0 0em ${({ background }) => background},
        -2.6em 0em 0 0em ${({ background }) => background},
        -1.8em -1.8em 0 0em ${({ background }) => background};
    }
    50% {
      box-shadow: 0em -2.6em 0em 0em ${({ background }) => background},
        1.8em -1.8em 0 0em ${({ background }) => background},
        2.5em 0em 0 0em rgba(255, 255, 255, 0.5),
        1.75em 1.75em 0 0em rgba(255, 255, 255, 0.7),
        0em 2.5em 0 0em ${({ foreground }) => foreground},
        -1.8em 1.8em 0 0em ${({ background }) => background},
        -2.6em 0em 0 0em ${({ background }) => background},
        -1.8em -1.8em 0 0em ${({ background }) => background};
    }
    62.5% {
      box-shadow: 0em -2.6em 0em 0em ${({ background }) => background},
        1.8em -1.8em 0 0em ${({ background }) => background},
        2.5em 0em 0 0em ${({ background }) => background},
        1.75em 1.75em 0 0em rgba(255, 255, 255, 0.5),
        0em 2.5em 0 0em rgba(255, 255, 255, 0.7),
        -1.8em 1.8em 0 0em ${({ foreground }) => foreground},
        -2.6em 0em 0 0em ${({ background }) => background},
        -1.8em -1.8em 0 0em ${({ background }) => background};
    }
    75% {
      box-shadow: 0em -2.6em 0em 0em ${({ background }) => background},
        1.8em -1.8em 0 0em ${({ background }) => background},
        2.5em 0em 0 0em ${({ background }) => background},
        1.75em 1.75em 0 0em ${({ background }) => background},
        0em 2.5em 0 0em rgba(255, 255, 255, 0.5),
        -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.7),
        -2.6em 0em 0 0em ${({ foreground }) => foreground},
        -1.8em -1.8em 0 0em ${({ background }) => background};
    }
    87.5% {
      box-shadow: 0em -2.6em 0em 0em ${({ background }) => background},
        1.8em -1.8em 0 0em ${({ background }) => background},
        2.5em 0em 0 0em ${({ background }) => background},
        1.75em 1.75em 0 0em ${({ background }) => background},
        0em 2.5em 0 0em ${({ background }) => background},
        -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.5),
        -2.6em 0em 0 0em rgba(255, 255, 255, 0.7),
        -1.8em -1.8em 0 0em ${({ foreground }) => foreground};
    }
  }

  .circle-dots-acceleration {
    color: ${({ foreground }) => foreground};
    font-size: 90px;
    text-indent: -9999em;
    overflow: hidden;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    margin: 72px auto;
    position: relative;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: load6 1.7s infinite ease, round 1.7s infinite ease;
    animation: load6 1.7s infinite ease, round 1.7s infinite ease;
  }
  @-webkit-keyframes load6 {
    0% {
      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
        0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
    5%,
    95% {
      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
        0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
    10%,
    59% {
      box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em,
        -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em,
        -0.297em -0.775em 0 -0.477em;
    }
    20% {
      box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em,
        -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em,
        -0.749em -0.34em 0 -0.477em;
    }
    38% {
      box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em,
        -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em,
        -0.82em -0.09em 0 -0.477em;
    }
    100% {
      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
        0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
  }
  @keyframes load6 {
    0% {
      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
        0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
    5%,
    95% {
      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
        0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
    10%,
    59% {
      box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em,
        -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em,
        -0.297em -0.775em 0 -0.477em;
    }
    20% {
      box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em,
        -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em,
        -0.749em -0.34em 0 -0.477em;
    }
    38% {
      box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em,
        -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em,
        -0.82em -0.09em 0 -0.477em;
    }
    100% {
      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
        0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
  }
  @-webkit-keyframes round {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes round {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  .dots,
  .dots:before,
  .dots:after {
    border-radius: 50%;
    width: 2.5em;
    height: 2.5em;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation: load7 1.8s infinite ease-in-out;
    animation: load7 1.8s infinite ease-in-out;
  }
  .dots {
    color: ${({ foreground }) => foreground};
    font-size: 10px;
    margin: 80px auto;
    position: relative;
    text-indent: -9999em;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }
  .dots:before,
  .dots:after {
    content: '';
    position: absolute;
    top: 0;
  }
  .dots:before {
    left: -3.5em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }
  .dots:after {
    left: 3.5em;
  }
  @-webkit-keyframes load7 {
    0%,
    80%,
    100% {
      box-shadow: 0 2.5em 0 -1.3em;
    }
    40% {
      box-shadow: 0 2.5em 0 0;
    }
  }
  @keyframes load7 {
    0%,
    80%,
    100% {
      box-shadow: 0 2.5em 0 -1.3em;
    }
    40% {
      box-shadow: 0 2.5em 0 0;
    }
  }

  .circle-trail,
  .circle-trail:after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }
  .circle-trail {
    margin: 60px auto;
    font-size: 10px;
    position: relative;
    text-indent: -9999em;
    border-top: 1.1em solid ${({ background }) => background};
    border-right: 1.1em solid ${({ background }) => background};
    border-bottom: 1.1em solid ${({ background }) => background};
    border-left: 1.1em solid ${({ foreground }) => foreground};
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: load8 1.1s infinite linear;
    animation: load8 1.1s infinite linear;
  }
  @-webkit-keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

Spinner.propTypes = {
  background: string,
  foreground: string
};

Spinner.defaultProps = {
  background: 'white',
  foreground: 'black'
};

export default Spinner;
