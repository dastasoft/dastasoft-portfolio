import React, { useState, useEffect } from 'react';
import { string, arrayOf } from 'prop-types';

import CPPIcon from './assets/cpp.svg';
import CSSIcon from './assets/css.svg';
import FirebaseIcon from './assets/firebase.svg';
import GatsbyIcon from './assets/gatsby.svg';
import GitIcon from './assets/git.svg';
import GodotIcon from './assets/godot.svg';
import GraphQLIcon from './assets/graphql.svg';
import HerokuIcon from './assets/heroku.svg';
import HTMLIcon from './assets/html.svg';
import IonicIcon from './assets/ionic.svg';
import JavaIcon from './assets/java.svg';
import JavascriptIcon from './assets/javascript.svg';
import NetlifyIcon from './assets/netlify.svg';
import NodeJsIcon from './assets/nodejs.svg';
import NPMIcon from './assets/npm.svg';
import PythonIcon from './assets/python.svg';
import ReactIcon from './assets/react.svg';
import ReduxIcon from './assets/redux-action.svg';
import StorybookIcon from './assets/storybook.svg';
import TailWindCSSIcon from './assets/tailwindcss.svg';
import TypeScriptIcon from './assets/typescript.svg';
import VSCodeIcon from './assets/vscode.svg';
import WebpackIcon from './assets/webpack.svg';
import YarnIcon from './assets/yarn.svg';

const IconsBase = ({ className, name, captions }) => {
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    let element = null;

    switch (name) {
      case 'cpp':
        element = <CPPIcon />;
        break;
      case 'css':
        element = <CSSIcon />;
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
      case 'netlify':
        element = <NetlifyIcon />;
        break;
      case 'nodejs':
        element = <NodeJsIcon />;
        break;
      case 'npm':
        element = <NPMIcon />;
        break;
      case 'python':
        element = <PythonIcon />;
        break;
      case 'react':
        element = <ReactIcon />;
        break;
      case 'redux':
        element = <ReduxIcon />;
        break;
      case 'storybook':
        element = <StorybookIcon />;
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
    <figure className={className}>
      {icon}
      <figcaption className="caption">
        {captions && captions.map(caption => <p key={caption}>{caption}</p>)}
      </figcaption>
    </figure>
  );
};

IconsBase.propTypes = {
  className: string.isRequired,
  name: string,
  captions: arrayOf(string)
};

IconsBase.defaultProps = {
  name: '',
  captions: []
};

export default IconsBase;
