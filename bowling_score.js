var bowlingScore = function(rolls) {
  var score=0;
  var frames = [];

  //add regular score
  rolls.forEach(function(x){
    score += x;
  });

  //make frames
  for(var i=0; i <rolls.length; i++){
    if(rolls[i] === 10){
      frames.push([rolls[i]]);
    }
    if(rolls[i] !== 10){
      frames.push([rolls[i], rolls[i+1]]);
      i++;
    }
  }

  //bonus points!
  for(var k=0; k<9; k++){
    //if strike...
    if(frames[k].length === 1 && frames[k][0] === 10){
      if(frames[k+1].length === 2){
        score += frames[k+1][0] + frames[k+1][1];
      } else {
        score += frames[k+1][0] + frames[k+2][0];
      }
    }
    //if spare...
    if(frames[k].length === 2 && frames[k][0]+frames[k][1] === 10){
      score += frames[k+1][0];
    }
  }

  return score;
};