import { expect, test } from 'vitest';
import { formatTime } from '../../src/utils';

test('formatTime is defined', () => {
  expect(formatTime(new Date(), 'yyyy-MM-dd')).toBeDefined();
});
