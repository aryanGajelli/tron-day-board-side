input.buttonB.onEvent(ButtonEvent.Click, function () {
    light.showRing(
    `black black black black black red red red red red`
    )
    music.pewPew.play()
})
forever(function () {
    light.showRing(
    `black black black black black black black black black black`
    )
})
