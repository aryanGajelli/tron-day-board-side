input.onSwitchMoved(SwitchDirection.Right, function () {
    keyboard.key("[", KeyboardKeyEvent.Press)
})
input.onGesture(Gesture.TiltLeft, function () {
    keyboard.key("a", KeyboardKeyEvent.Press)
})
input.buttonA.onEvent(ButtonEvent.Click, function () {
    keyboard.key("q", KeyboardKeyEvent.Press)
    music.jumpUp.play()
    light.showRing(
    `yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow`
    )
    light.clear()
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
