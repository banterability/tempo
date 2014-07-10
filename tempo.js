var Tempo = function(options){
  var current, initial, interval, onTick, nextTick;

  var reset = function(){
    clearTimeout(nextTick);
    current = initial + interval;
  };

  var tick = function(){
    if(current <= interval){
      onTick({value: current, mode: 'resetting'});
    } else {
      onTick({value: humanTime(current), mode: 'countingDown'});
    }
    tock();
    nextTick = setTimeout(tick, 1000);
  };

  var tock = function(){
    if(current === 1){
      reset();
    } else {
      current -= 1;
    }
  };

  var humanTime = function(){
    return current - interval;
  };

  // Initialize
  initial = options.initial;
  interval = options.interval;
  onTick = options.onTick;
  reset();

  return {
    start: function(){
      tick();
    },
    stop: function(){
      reset();
    }
  };
};
