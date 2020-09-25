input.onSwitchMoved(SwitchDirection.Right, function () {
    keyboard.type("[")
    keyboard.clearAllKeys()
})
input.onGesture(Gesture.TiltLeft, function () {
    keyboard.type("a")
    keyboard.clearAllKeys()
})
input.buttonA.onEvent(ButtonEvent.Click, function () {
    makerController.player1.press(ArcadeButton.A)
    music.jumpUp.play()
    control.runInParallel(function () {
        light.setBrightness(10)
        for (let i = 0; i <= 4; i++) {
            light.setPixelColor(4 - i, jump_colors[i])
            light.setPixelColor(i + 5, jump_colors[i])
            pause(50)
        }
        pause(125)
        light.clear()
    })
})
input.onGesture(Gesture.TiltRight, function () {
    keyboard.type("d")
    keyboard.clearAllKeys()
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    makerController.player1.press(ArcadeButton.B)
    music.stopAllSounds()
    music.pewPew.play()
    control.runInParallel(function () {
        light.setBrightness(10)
        for (let j = 0; j <= 2; j++) {
            light.setPixelColor(2 - j, shoot_colors[j])
            light.setPixelColor(2 + j, shoot_colors[j])
            pause(20)
        }
        for(let k =2 ; k>=0; k--){     
            light.setPixelColor(7-k, shoot_colors[4-k]);
            light.setPixelColor(7+k, shoot_colors[4-k]);
            pause(20)
        }
for (let l = 0; l <= 2; l++) {
            light.setPixelColor(2 - l, 0x000000)
            light.setPixelColor(2 + l, 0x000000)
            pause(20)
        }
        for(let m =2 ; m>=0; m--){     
            light.setPixelColor(7-m, 0x000000);
            light.setPixelColor(7+m, 0x000000);
            pause(20)
        }
light.clear()
    })
})
input.onSwitchMoved(SwitchDirection.Left, function () {
    makerController.player1.setAnalog(ArcadeAnalogButton.DownUp, 1023)
})
let shoot_colors: number[] = []
let jump_colors: number[] = []
jump_colors = [197726, 30646, 46296, 5290979, 13299960]
shoot_colors = [10289672, 14429954, 15228164, 16026630, 16738824]
serial.setBaudRate(BaudRate.BaudRate115200)
forever(function () {
    if (input.buttonsAB.isPressed()) {
        makerController.player1.press(ArcadeButton.AB)
    }
})
