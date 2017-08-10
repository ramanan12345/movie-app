import { expect } from 'chai';
import React from 'react';
import Navigation from './Navigation';
import {mount} from 'enzyme';
mockDom('<html><body></body></html>');

describe('#Navigation', () => {

  function mountComponent(props = {}) {
    return mount(<Navigation text='REACT SF' />);
  }

  it('Should render', () => {
    const wrapper = mountComponent();
    expect(wrapper).to.be.ok;
  });
  it('Should contain list size of 4', () => {
    const wrapper = mountComponent();
    expect(wrapper.find('li')).to.have.length(4);
  });
});
