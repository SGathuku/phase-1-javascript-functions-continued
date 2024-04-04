
function saturdayFun (activity = "roller-skate") 
{
    return `This Saturday, I want to ${activity}!`

}

function mondayWork (job = "go to the office")
{
    return `This Monday, I will ${job}.`
}

function wrapAdjective (wrapWord = '*')
{
    return function(word = 'a dedicated programmer'){
      return `You are ${wrapWord}${word}${wrapWord}`  
    }
}

    function wrapAdjective (wrapWord = '||')
{
    return function(word = 'a dedicated programmer'){
      return `You are ${wrapWord}${word}${wrapWord}!`  
    }

}