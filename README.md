tempo
=====

A dumb little repeating timer for dumb little projects.

Usage
-----

Initialize a new Tempo object:

```javascript
var timer = new Tempo({
  initial: 10,
  interval: 5,
  onTick: function(){ /* do something amazing */ }
});
```

Valid options:
- `initial` (integer): the number of seconds the timer should count down from 
- `interval` (integer): the number of seconds the timer should wait before starting over after reaching 0
- `onTick` (function): will be called on each tick of the timer with one object argument:
  - `value` (string): the current value of the timer, padded to two characters
  - `mode` (string): either 'countingDown' or 'resetting'

Start the timer:

```javascript
timer.start();
```

Stop the timer (and reset to initial value):

```javascript
timer.stop();
```
