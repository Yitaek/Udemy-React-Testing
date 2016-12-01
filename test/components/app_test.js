// Testing that App shows 'React simple starter'

import { renderComponent, expect } from '../test_helper';

// also import the file/component you want to test

import App from '../../src/components/app';

// Use describe to group together similar tests
describe('App', () => {
	let component;

	beforeEach(() => {
		component = renderComponent(App);
	});
	
	// Use 'it' to test a sinle attribute of a target
	it('shows a comment box', () => {
		expect(component.find('.comment-box')).to.exist
		//jquery selector to expect a css component
	})

});

