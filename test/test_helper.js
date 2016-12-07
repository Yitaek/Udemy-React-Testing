import jsdom from 'jsdom';
import jquery from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';
import chaiJquery from 'chai-jquery';

// Set up testing environment to run like a browser in the command line
// tell bundle.js to pass stuff off to mocha

// instead of window --> global

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>'); // initialize and setup fake html file
global.window = global.document.defaultView; 

const $ = jquery(global.window)  // tells it to use global.window not browser one

// build 'renderComponent' helper that should render a given react class
function renderComponent(ComponentClass, props, state) {
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );

  return $(ReactDOM.findDOMNode(componentInstance)); // produces HTML
}

// build helper for simulating events
$.fn.simulate = function(eventName, value) {
  if(value) {
    this.val(value);
  }
  TestUtils.Simulate[eventName](this[0]);
}

// to call simulate
// $('div').simulate

// set up chai-jquery
chaiJquery(chai, chai.util, $);

export { renderComponent, expect };