import healthBarStatus from '../healthBarStatus.js';

test.each([
  ['Mage', 90, 'healthy'],
  ['Archer', 30, 'wounded'],
  ['Warrior', 10, 'critical'],
])('testing healthBarStatus function with %s name and %i health', (name, health, expected) => {
  const result = healthBarStatus({ name, health });

  expect(result).toBe(expected);
});