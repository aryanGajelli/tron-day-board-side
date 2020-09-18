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
        light.setPixelColor(4, light.rgb(3, 4, 94))
        pause(75)
        light.setBrightness(10)
        light.setPixelColor(3, light.rgb(0, 119, 182))
        pause(75)
        light.setBrightness(10)
        light.setPixelColor(2, light.rgb(0, 180, 216))
        pause(75)
        light.setBrightness(10)
        light.setPixelColor(1, light.rgb(80, 187, 227))
        pause(75)
        light.setBrightness(10)
        light.setPixelColor(0, light.rgb(202, 240, 248))
        pause(200)
        light.clear()
    })
    control.runInParallel(function () {
        light.setPixelColor(5, light.rgb(3, 4, 94))
        pause(75)
        light.setPixelColor(6, light.rgb(0, 119, 182))
        pause(75)
        light.setPixelColor(7, light.rgb(0, 180, 216))
        pause(75)
        light.setPixelColor(8, light.rgb(80, 187, 227))
        pause(75)
        light.setPixelColor(9, light.rgb(202, 240, 248))
        pause(200)
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
        light.showRing(
        `red red red red red red red red red red`
        )
        light.clear()
    })
})
input.onSwitchMoved(SwitchDirection.Left, function () {
    keyboard.key("p", KeyboardKeyEvent.Press)
})
forever(function () {
    if (input.buttonsAB.isPressed()) {
        keyboard.key("j", KeyboardKeyEvent.Press)
    }
})
