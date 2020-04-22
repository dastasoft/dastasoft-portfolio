import React, { useState, useEffect, Suspense } from 'react';
import { string } from 'prop-types';

import Spinner from '../Spinner';

const CSSIcon = React.lazy(() => import('./assets/css.svg'));
const GatsbyIcon = React.lazy(() => import('./assets/gatsby.svg'));
const GitIcon = React.lazy(() => import('./assets/git.svg'));
const HTMLIcon = React.lazy(() => import('./assets/html.svg'));
const JavascriptIcon = React.lazy(() => import('./assets/javascript.svg'));
const NodeJsIcon = React.lazy(() => import('./assets/nodejs.svg'));
const NPMIcon = React.lazy(() => import('./assets/npm.svg'));
const ReactIcon = React.lazy(() => import('./assets/react.svg'));
const ReduxIcon = React.lazy(() => import('./assets/redux-action.svg'));
const StorybookIcon = React.lazy(() => import('./assets/storybook.svg'));
const VSCodeIcon = React.lazy(() => import('./assets/vscode.svg'));
const WebpackIcon = React.lazy(() => import('./assets/webpack.svg'));
const YarnIcon = React.lazy(() => import('./assets/yarn.svg'));

const IconsBase = ({ className, name, caption }) => {
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    let element = null;

    switch (name) {
      case 'css':
        element = <CSSIcon />;
        break;
      case 'gatsby':
        element = <GatsbyIcon />;
        break;
      case 'git':
        element = <GitIcon />;
        break;
      case 'html':
        element = <HTMLIcon />;
        break;
      case 'javascript':
        element = <JavascriptIcon />;
        break;
      case 'nodejs':
        element = <NodeJsIcon />;
        break;
      case 'npm':
        element = <NPMIcon />;
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
        <figcaption>{caption}</figcaption>
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
