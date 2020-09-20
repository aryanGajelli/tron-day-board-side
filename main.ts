input.onSwitchMoved(SwitchDirection.Right, function () {
    keyboard.type("[")
    keyboard.clearAllKeys()
})
input.onGesture(Gesture.TiltLeft, function () {
    keyboard.type("a")
    keyboard.clearAllKeys()
})
input.buttonA.onEvent(ButtonEvent.Click, function () {
    keyboard.type("q")
    keyboard.clearAllKeys()
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
    keyboard.type("i")
    keyboard.clearAllKeys()
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
            light.setPixelColor(2 - l, 0xff0000)
            light.setPixelColor(2 + l, 0xff0000)
            pause(20)
        }
        for(let m =2 ; m>=0; m--){     
            light.setPixelColor(7-m, 0x00000000);
            light.setPixelColor(7+m, 0x00000000);
            pause(20)
        }
light.clear()
    })
})
input.onSwitchMoved(SwitchDirection.Left, function () {
    keyboard.type("p")
    keyboard.clearAllKeys()
})
let shoot_colors: number[] = []
let jump_colors: number[] = []
jump_colors = [light.rgb(3, 4, 94), light.rgb(0, 119, 182), light.rgb(0, 180, 216), light.rgb(80, 187, 227), light.rgb(202, 240, 248)]
shoot_colors = [light.rgb(157, 2, 8), light.rgb(220, 47, 2), light.rgb(232, 93, 4), light.rgb(244, 140, 6), light.rgb(255, 186, 8)]
serial.setBaudRate(BaudRate.BaudRate115200)
forever(function () {
    if (input.buttonsAB.isPressed()) {
        keyboard.type("j")
        keyboard.clearAllKeys()
    }
})
