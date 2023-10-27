import { MissionUtils } from '@woowacourse/mission-utils';
import MESSAGE from './Message';

class Player {
  numbers = [];

  async getNumbers() {
    try {
      const text = await MissionUtils.Console.readLineAsync(MESSAGE.input);
      this.numbers = text
        .replaceAll(' ', '')
        .split('')
        .map(v => Number(v));
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default Player;
