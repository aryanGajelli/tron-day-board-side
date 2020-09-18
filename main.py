def on_switch_moved_right():
    keyboard.key("[", KeyboardKeyEvent.PRESS)
input.on_switch_moved(SwitchDirection.RIGHT, on_switch_moved_right)

def on_gesture_tilt_left():
    keyboard.key("a", KeyboardKeyEvent.PRESS)
input.on_gesture(Gesture.TILT_LEFT, on_gesture_tilt_left)

def on_button_a_click():
    keyboard.key("q", KeyboardKeyEvent.PRESS)
    music.jump_up.play()
    light.show_ring("""yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow""")
    light.clear()
input.button_a.on_event(ButtonEvent.CLICK, on_button_a_click)

def on_gesture_tilt_right():
    keyboard.key("d", KeyboardKeyEvent.PRESS)
input.on_gesture(Gesture.TILT_RIGHT, on_gesture_tilt_right)

def on_button_b_click():
    keyboard.key("i", KeyboardKeyEvent.PRESS)
    music.pew_pew.play()
    light.show_ring("""red red red red red red red red red red""")
    light.clear()
input.button_b.on_event(ButtonEvent.CLICK, on_button_b_click)

def on_switch_moved_left():
    keyboard.key("p", KeyboardKeyEvent.PRESS)
input.on_switch_moved(SwitchDirection.LEFT, on_switch_moved_left)

def on_forever():
    if input.buttons_ab.is_pressed():
        keyboard.key("j", KeyboardKeyEvent.PRESS)
forever(on_forever)
