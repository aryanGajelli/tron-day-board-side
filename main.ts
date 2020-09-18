input.onSwitchMoved(SwitchDirection.Right, function () {
    keyboard.key("[", KeyboardKeyEvent.Press)
})
input.onGesture(Gesture.TiltLeft, function () {
    keyboard.key("a", KeyboardKeyEvent.Press)
})
input.buttonA.onEvent(ButtonEvent.Click, function () {
    keyboard.key("q", KeyboardKeyEvent.Press)
    music.jumpUp.play()
    control.runInParallel(function () {
        light.setPixelColor(4, light.rgb(105, 48, 195))
        pause(75)
        light.setPixelColor(3, 0xff0000)
        pause(75)
        light.setPixelColor(2, 0xff0000)
        pause(75)
        light.setPixelColor(1, 0xff0000)
        pause(75)
        light.setPixelColor(0, 0xff0000)
        pause(200)
        light.clear()
    })
    control.runInParallel(function () {
        light.setPixelColor(5, light.rgb(105, 48, 195))
        pause(75)
        light.setPixelColor(6, light.rgb(83, 144, 243))
        pause(75)
        light.setPixelColor(7, 0xff0000)
        pause(75)
        light.setPixelColor(8, 0xff0000)
        pause(75)
        light.setPixelColor(9, 0xff0000)
        pause(200)
        light.clear()
    })
})
input.onGesture(Gesture.TiltRight, function () {
    keyboard.key("d", KeyboardKeyEvent.Press)
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    keyboard.key("i", KeyboardKeyEvent.Press)
    music.pewPew.play()
    light.showRing(
    `red red red red red red red red red red`
    )
    light.clear()
})
input.onSwitchMoved(SwitchDirection.Left, function () {
    keyboard.key("p", KeyboardKeyEvent.Press)
})
forever(function () {
    if (input.buttonsAB.isPressed()) {
        keyboard.key("j", KeyboardKeyEvent.Press)
    }
})
