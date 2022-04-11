import React, { useState, useEffect } from 'react';
import { string } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Android from './assets/android.svg';
import CPPIcon from './assets/cpp.svg';
import CSharpIcon from './assets/csharp.svg';
import CSSIcon from './assets/css.svg';
import CypressIcon from './assets/cypress.svg';
import DockerIcon from './assets/docker.svg';
import Electron from './assets/electron.svg';
import FigmaIcon from './assets/figma.svg';
import FirebaseIcon from './assets/firebase.svg';
import GatsbyIcon from './assets/gatsby.svg';
import GCPIcon from './assets/gcp.svg';
import GitIcon from './assets/git.svg';
import GodotIcon from './assets/godot.svg';
import GraphQLIcon from './assets/graphql.svg';
import HerokuIcon from './assets/heroku.svg';
import HTMLIcon from './assets/html.svg';
import I18NIcon from './assets/i18n.svg';
import IonicIcon from './assets/ionic.svg';
import JavaIcon from './assets/java.svg';
import JavascriptIcon from './assets/javascript.svg';
import Jest from './assets/jest.svg';
import MarkdownIcon from './assets/markdown.svg';
import MongoDBIcon from './assets/mongodb.svg';
import NetlifyIcon from './assets/netlify.svg';
import NextJS from './assets/next.svg';
import NodeJsIcon from './assets/nodejs.svg';
import NPMIcon from './assets/npm.svg';
import Parcel from './assets/parcel.svg';
import PHPIcon from './assets/php.svg';
import ReactIcon from './assets/react.svg';
import ReactNative from './assets/react-native.svg';
import RedisIcon from './assets/redis.svg';
import ReduxIcon from './assets/redux-action.svg';
import SASSIcon from './assets/sass.svg';
import SQLIcon from './assets/database.svg';
import StorybookIcon from './assets/storybook.svg';
import StyledComponents from './assets/styled-components.png';
import TailWindCSSIcon from './assets/tailwindcss.svg';
import TypeScriptIcon from './assets/typescript.svg';
import VSCodeIcon from './assets/vscode.svg';
import WebpackIcon from './assets/webpack.svg';
import WordpressIcon from './assets/wordpress.png';
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
        element = <FontAwesomeIcon icon={['fab', 'github']} />;
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
        element = <Parcel />;
        break;
      case 'php':
        element = <PHPIcon />;
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
        element = (
          <img
            src={StyledComponents}
            alt="styled-components"
            style={{ maxHeight: '70px', maxWidth: '70px' }}
          />
        );
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
      case 'wordpress':
        element = <img src={WordpressIcon} alt="wordpress" />;
        break;
      case 'yarn':
        element = <YarnIcon />;
        break;
      case 'csharp':
        element = <CSharpIcon />;
        break;
      case 'mongodb':
        element = <MongoDBIcon />;
        break;
      case 'markdown':
        element = <MarkdownIcon />;
        break;
      case 'sass':
        element = <SASSIcon />;
        break;
      case 'gcp':
        element = <GCPIcon />;
        break;
      case 'aws':
        element = <FontAwesomeIcon icon={['fab', 'aws']} color="orange" />;
        break;
      case 'unity':
        element = <FontAwesomeIcon icon={['fab', 'unity']} />;
        break;
      case 'cypress':
        element = <CypressIcon />;
        break;
      case 'redis':
        element = <RedisIcon />;
        break;
      case 'sql':
        element = <SQLIcon />;
        break;
      case 'docker':
        element = <DockerIcon />;
        break;
      case 'figma':
        element = <FigmaIcon />;
        break;
      case 'i18n':
        element = <I18NIcon />;
        break;
      case 'sass':
        element = <SASSIcon />;
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
  caption: string,
};

IconsBase.defaultProps = {
  name: '',
  captions: '',
};

export default IconsBase;
