input.onSwitchMoved(SwitchDirection.Right, function () {
    keyboard.key("[", KeyboardKeyEvent.Press)
    keyboard.clearAllKeys()
})
input.onGesture(Gesture.TiltLeft, function () {
    keyboard.key("a", KeyboardKeyEvent.Press)
    keyboard.clearAllKeys()
})
input.buttonA.onEvent(ButtonEvent.Click, function () {
    keyboard.key("q", KeyboardKeyEvent.Press)
    keyboard.clearAllKeys()
    music.jumpUp.play()
    control.runInParallel(function () {
        light.setBrightness(10)
        for(let i =4; i>=0; i--){        
            light.setPixelColor(i, jump_colors[4-i]);
            light.setPixelColor(9-i, jump_colors[4-i]);
            pause(75)
        }
pause(125)
        light.clear()
    })
})
input.onGesture(Gesture.TiltRight, function () {
    keyboard.key("d", KeyboardKeyEvent.Press)
    keyboard.clearAllKeys()
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    keyboard.key("i", KeyboardKeyEvent.Press)
    keyboard.clearAllKeys()
    music.pewPew.play()
    control.runInParallel(function () {
        light.setBrightness(10)
        for(let j =4; j>=0; j--){        
            light.setPixelColor(j, shoot_colors[4-j]);
            light.setPixelColor(9-j, shoot_colors[4-j]);
            pause(75)
        }
pause(125)
        light.clear()
    })
})
input.onSwitchMoved(SwitchDirection.Left, function () {
    keyboard.key("p", KeyboardKeyEvent.Press)
})
let jump_colors = [light.rgb(3, 4, 94), light.rgb(0, 119, 182), light.rgb(0, 180, 216), light.rgb(80, 187, 227), light.rgb(202, 240, 248)]
let shoot_colors = [light.rgb(157, 2, 8), light.rgb(208, 0, 0), light.rgb(232, 93, 4), light.rgb(244, 140, 6), light.rgb(255, 186, 8)]
forever(function () {
    if (input.buttonsAB.isPressed()) {
        keyboard.key("j", KeyboardKeyEvent.Press)
    }
})
