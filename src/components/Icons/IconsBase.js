import React, { useState, useEffect } from 'react';
import { string } from 'prop-types';

import Android from './assets/android.svg';
import CPPIcon from './assets/cpp.svg';
import CSSIcon from './assets/css.svg';
import Electron from './assets/electron.svg';
import FirebaseIcon from './assets/firebase.svg';
import GatsbyIcon from './assets/gatsby.svg';
import GitIcon from './assets/git.svg';
import Github from './assets/github.svg';
import GodotIcon from './assets/godot.svg';
import GraphQLIcon from './assets/graphql.svg';
import HerokuIcon from './assets/heroku.svg';
import HTMLIcon from './assets/html.svg';
import IonicIcon from './assets/ionic.svg';
import JavaIcon from './assets/java.svg';
import JavascriptIcon from './assets/javascript.svg';
import Jest from './assets/jest.svg';
import NetlifyIcon from './assets/netlify.svg';
import NextJS from './assets/nextjs.svg';
import NodeJsIcon from './assets/nodejs.svg';
import NPMIcon from './assets/npm.svg';
import Parcel from './assets/parcel.png';
import PHPIcon from './assets/php.svg';
import PythonIcon from './assets/python.svg';
import ReactIcon from './assets/react.svg';
import ReactNative from './assets/react-native.svg';
import ReduxIcon from './assets/redux-action.svg';
import StorybookIcon from './assets/storybook.svg';
import StyledComponents from './assets/styled-components.png';
import TailWindCSSIcon from './assets/tailwindcss.svg';
import TypeScriptIcon from './assets/typescript.svg';
import VSCodeIcon from './assets/vscode.svg';
import WebpackIcon from './assets/webpack.svg';
import YarnIcon from './assets/yarn.svg';

const IconsBase = ({ className, name, caption }) => {
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    let element = null;

    switch (name) {
      case 'android':
        element = <Android />;
        break;
      case 'cpp':
        element = <CPPIcon />;
        break;
      case 'css':
        element = <CSSIcon />;
        break;
      case 'electron':
        element = <Electron />;
        break;
      case 'firebase':
        element = <FirebaseIcon />;
        break;
      case 'gatsby':
        element = <GatsbyIcon />;
        break;
      case 'git':
        element = <GitIcon />;
        break;
      case 'github':
        element = <Github />;
        break;
      case 'godot':
        element = <GodotIcon />;
        break;
      case 'graphql':
        element = <GraphQLIcon />;
        break;
      case 'heroku':
        element = <HerokuIcon />;
        break;
      case 'html':
        element = <HTMLIcon />;
        break;
      case 'ionic':
        element = <IonicIcon />;
        break;
      case 'java':
        element = <JavaIcon />;
        break;
      case 'javascript':
        element = <JavascriptIcon />;
        break;
      case 'jest':
        element = <Jest />;
        break;
      case 'netlify':
        element = <NetlifyIcon />;
        break;
      case 'nextjs':
        element = <NextJS />;
        break;
      case 'nodejs':
        element = <NodeJsIcon />;
        break;
      case 'npm':
        element = <NPMIcon />;
        break;
      case 'parcel':
        element = <img src={Parcel} alt="parcel" />;
        break;
      case 'php':
        element = <PHPIcon />;
        break;
      case 'python':
        element = <PythonIcon />;
        break;
      case 'react':
        element = <ReactIcon />;
        break;
      case 'react-native':
        element = <ReactNative />;
        break;
      case 'redux':
        element = <ReduxIcon />;
        break;
      case 'storybook':
        element = <StorybookIcon />;
        break;
      case 'styled-components':
        element = <img src={StyledComponents} alt="styled-components" />;
        break;
      case 'tailwindcss':
        element = <TailWindCSSIcon />;
        break;
      case 'typescript':
        element = <TypeScriptIcon />;
        break;
      case 'vscode':
        element = <VSCodeIcon />;
        break;
      case 'webpack':
        element = <WebpackIcon />;
        break;
      case 'yarn':
        element = <YarnIcon />;
        break;
      default:
        element = null;
        break;
    }

    setIcon(element);
  }, []);

  return (
    <div className={className}>
      <div className="icon-capsule">{icon}</div>
      <span className="caption">{caption}</span>
    </div>
  );
};

IconsBase.propTypes = {
  className: string.isRequired,
  name: string,
  caption: string
};

IconsBase.defaultProps = {
  name: '',
  captions: ''
};

export default IconsBase;
