import React, { useState, useEffect, Suspense } from 'react';
import { string } from 'prop-types';

import Spinner from '../Spinner';

const CPPIcon = React.lazy(() => import('./assets/cpp.svg'));
const CSSIcon = React.lazy(() => import('./assets/css.svg'));
const FirebaseIcon = React.lazy(() => import('./assets/firebase.svg'));
const GatsbyIcon = React.lazy(() => import('./assets/gatsby.svg'));
const GitIcon = React.lazy(() => import('./assets/git.svg'));
const GraphQLIcon = React.lazy(() => import('./assets/graphql.svg'));
const HerokuIcon = React.lazy(() => import('./assets/heroku.svg'));
const HTMLIcon = React.lazy(() => import('./assets/html.svg'));
const IonicIcon = React.lazy(() => import('./assets/ionic.svg'));
const JavaIcon = React.lazy(() => import('./assets/java.svg'));
const JavascriptIcon = React.lazy(() => import('./assets/javascript.svg'));
const JSONIcon = React.lazy(() => import('./assets/json.svg'));
const NetlifyIcon = React.lazy(() => import('./assets/netlify.svg'));
const NodeJsIcon = React.lazy(() => import('./assets/nodejs.svg'));
const NPMIcon = React.lazy(() => import('./assets/npm.svg'));
const PythonIcon = React.lazy(() => import('./assets/python.svg'));
const ReactIcon = React.lazy(() => import('./assets/react.svg'));
const ReduxIcon = React.lazy(() => import('./assets/redux-action.svg'));
const StorybookIcon = React.lazy(() => import('./assets/storybook.svg'));
const TailWindCSSIcon = React.lazy(() => import('./assets/tailwindcss.svg'));
const TypeScriptIcon = React.lazy(() => import('./assets/typescript.svg'));
const VSCodeIcon = React.lazy(() => import('./assets/vscode.svg'));
const WebpackIcon = React.lazy(() => import('./assets/webpack.svg'));
const YarnIcon = React.lazy(() => import('./assets/yarn.svg'));

const IconsBase = ({ className, name, caption }) => {
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
    <Suspense fallback={<Spinner />}>
      <figure className={`${className} wow fadeIn`}>
        {icon}
        <figcaption className="caption">{caption}</figcaption>
      </figure>
    </Suspense>
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
