/**
/**
 * Babel Starter Kit | https://github.com/kriasoft/babel-starter-kit
 * Copyright (c) Konstantin Tarkus <hello@tarkus.me> | The MIT License
 */

import { describe, it } from 'mocha';
import { expect } from 'chai';
import Ladder from '../src/Ladder';

describe('Ladder', () => {

  it('Reads params', () => {
    const ladder = new Ladder();
    ladder.setup("13 134");

    expect(ladder.height).to.be.equal(13);
    expect(ladder.angle).to.be.equal(134);
  });

  it('Calculates ladder height', () => {
      const ladder = new Ladder(500, 70);
      ladder.calculate();

      expect(ladder.result).to.be.equal(533);
  })

  it('Calculates ladder height', () => {
      const ladder = new Ladder(1000, 10);
      ladder.calculate();

      expect(ladder.result).to.be.equal(5759);
  })
});
