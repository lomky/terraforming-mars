
import {expect} from 'chai';
import {Satellites} from '../../src/cards/Satellites';
import {Color} from '../../src/Color';
import {Player} from '../../src/Player';
import {Resources} from '../../src/Resources';

describe('Satellites', function() {
  it('Should play', function() {
    const card = new Satellites();
    const player = new Player('test', Color.BLUE, false);
    const action = card.play(player);
    expect(action).is.undefined;
    expect(player.getProduction(Resources.MEGACREDITS)).to.eq(1);
    player.playedCards.push(card);
    card.play(player);
    expect(player.getProduction(Resources.MEGACREDITS)).to.eq(3);
  });
});
