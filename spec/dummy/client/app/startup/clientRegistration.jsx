import 'babel-polyfill';
import 'es5-shim';

import ReactOnRails from 'react-on-rails';

import HelloWorld from '../components/HelloWorld';
import HelloWorldWithLogAndThrow from '../components/HelloWorldWithLogAndThrow';
import HelloWorldES5 from '../components/HelloWorldES5';
import HelloWorldApp from './HelloWorldApp';

import ReduxApp from './ClientReduxApp';
import ReduxSharedStoreApp from './ClientReduxSharedStoreApp';
import RouterApp from './ClientRouterApp';
import PureComponent from '../components/PureComponent';
import CacheDisabled from '../components/CacheDisabled';
import CssModulesImagesFontsExample from '../components/CssModulesImagesFontsExample';
import ManualRenderApp from './ManualRenderAppRenderer';
import DeferredRenderApp from './DeferredRenderAppRenderer';

import SharedReduxStore from '../stores/SharedReduxStore';

// Deferred render on the client side w/ server render
import RenderedHtml from './ClientRenderedHtml';

// Demonstrate using Images
import ImageExample from '../components/ImageExample';

ReactOnRails.setOptions({
  traceTurbolinks: true,
});

ReactOnRails.register({
  HelloWorld,
  HelloWorldWithLogAndThrow,
  HelloWorldES5,
  ReduxApp,
  ReduxSharedStoreApp,
  HelloWorldApp,
  RouterApp,
  PureComponent,
  CssModulesImagesFontsExample,
  ManualRenderApp,
  DeferredRenderApp,
  CacheDisabled,
  RenderedHtml,
  ImageExample,
});

ReactOnRails.registerStore({
  SharedReduxStore,
});
