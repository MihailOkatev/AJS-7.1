import { Bowerman } from '../Bowerman';
import { Daemon } from '../Daemon';
import { Swordsman } from '../Swordsman';
import { Undead } from '../Undead';
import { Zombie } from '../Zombie';
import { Magician } from '../Magician';


test('create Bowerman', () => {
  const result = new Bowerman('Robin');

  expect(result).toEqual({
    name: 'Robin',
    type: 'Bowerman',
    level: 1,
    attack: 25,
    defence: 25,
    health: 100,

  });
});

test('create Daemon', () => {
  const result = new Daemon('Robin');

  expect(result).toEqual({
    name: 'Robin',
    type: 'Daemon',
    level: 1,
    attack: 10,
    defence: 40,
    health: 100,

  });
});

test('create Swordsman', () => {
  const result = new Swordsman('Robin');

  expect(result).toEqual({
    name: 'Robin',
    type: 'Swordsman',
    level: 1,
    attack: 40,
    defence: 10,
    health: 100,

  });
});

test('create Undead', () => {
  const result = new Undead('Robin');

  expect(result).toEqual({
    name: 'Robin',
    type: 'Undead',
    level: 1,
    attack: 25,
    defence: 25,
    health: 100,

  });
});

test('create Magician', () => {
  const result = new Magician('Robin');

  expect(result).toEqual({
    name: 'Robin',
    type: 'Magician',
    level: 1,
    attack: 10,
    defence: 40,
    health: 100,

  });
});

test('create Zombie', () => {
  const result = new Zombie('Robin');

  expect(result).toEqual({
    name: 'Robin',
    type: 'Zombie',
    level: 1,
    attack: 40,
    defence: 10,
    health: 100,

  });
});
