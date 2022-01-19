function saturdayFun(activity = "roller-skate") {
    return (`This Saturday, I want to ${activity}!`)
}

function mondayWork(brown = "go to the office") {
    return (`This Monday, I will ${brown}.`)
}

function wrapAdjective(home) {
    return function(empathic = "special"){
        return `You are ${home}${empathic}${home}!`
    }
}