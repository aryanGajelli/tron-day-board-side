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
        for(let i =0; i<5; i++){     
            light.setPixelColor(4-i, jump_colors[i]);
            light.setPixelColor(i+5, jump_colors[i]);
            pause(50)
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
    music.stopAllSounds()
    music.pewPew.play()
   
    control.runInParallel(function () {
        light.setBrightness(10)
        for(let i =0 ; i<3; i++){     
            light.setPixelColor(2-i, shoot_colors[i]);
            light.setPixelColor(2+i, shoot_colors[i]);
            pause(20)
        }
        for(let i =2 ; i>=0; i--){     
            light.setPixelColor(7-i, shoot_colors[4-i]);
            light.setPixelColor(7+i, shoot_colors[4-i]);
            pause(20)
        }

        for(let i =0 ; i<3; i++){     
            light.setPixelColor(2-i, 0x00000000);
            light.setPixelColor(2+i, 0x00000000);
            pause(20)
        }
        for(let i =2 ; i>=0; i--){     
            light.setPixelColor(7-i, 0x00000000);
            light.setPixelColor(7+i, 0x00000000);
            pause(20)
        }
        light.clear()
    })
})
input.onSwitchMoved(SwitchDirection.Left, function () {
    keyboard.key("p", KeyboardKeyEvent.Press)
})
let jump_colors = [    
    light.rgb(3, 4, 94),
    light.rgb(0, 119, 182),
    light.rgb(0, 180, 216),  
    light.rgb(80, 187, 227),
    light.rgb(202, 240, 248)   
]
let shoot_colors = [
    light.rgb(157, 2, 8),
    light.rgb(220, 47, 2),
    light.rgb(232, 93, 4),
    light.rgb(244, 140, 6),
    light.rgb(255, 186, 8)
]
forever(function () {
    if (input.buttonsAB.isPressed()) {
        keyboard.key("j", KeyboardKeyEvent.Press)
    }
})
