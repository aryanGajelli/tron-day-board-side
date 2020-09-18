def on_switch_moved_right():
    keyboard.key("[", KeyboardKeyEvent.PRESS)
    keyboard.clear_all_keys()
input.on_switch_moved(SwitchDirection.RIGHT, on_switch_moved_right)

def on_gesture_tilt_left():
    keyboard.key("a", KeyboardKeyEvent.PRESS)
    keyboard.clear_all_keys()
input.on_gesture(Gesture.TILT_LEFT, on_gesture_tilt_left)

def on_button_a_click():
    keyboard.key("q", KeyboardKeyEvent.PRESS)
    keyboard.clear_all_keys()
    music.jump_up.play()
    
    def on_run_in_parallel():
        light.set_brightness(10)
        light.set_pixel_color(4, light.rgb(3, 4, 94))
        pause(75)
        light.set_brightness(10)
        light.set_pixel_color(3, light.rgb(0, 119, 182))
        pause(75)
        light.set_brightness(10)
        light.set_pixel_color(2, light.rgb(72, 191, 227))
        pause(75)
        light.set_brightness(10)
        light.set_pixel_color(1, light.rgb(0, 180, 216))
        pause(75)
        light.set_brightness(10)
        light.set_pixel_color(0, light.rgb(128, 255, 219))
        pause(200)
        light.clear()
    control.run_in_parallel(on_run_in_parallel)
    
    
    def on_run_in_parallel2():
        light.set_pixel_color(5, light.rgb(3, 4, 94))
        pause(75)
        light.set_pixel_color(6, light.rgb(0, 119, 182))
        pause(75)
        light.set_pixel_color(7, light.rgb(0, 180, 216))
        pause(75)
        light.set_pixel_color(8, light.rgb(100, 223, 223))
        pause(75)
        light.set_pixel_color(9, light.rgb(128, 255, 219))
        pause(200)
        light.clear()
    control.run_in_parallel(on_run_in_parallel2)
    
input.button_a.on_event(ButtonEvent.CLICK, on_button_a_click)

def on_gesture_tilt_right():
    keyboard.key("d", KeyboardKeyEvent.PRESS)
    keyboard.clear_all_keys()
input.on_gesture(Gesture.TILT_RIGHT, on_gesture_tilt_right)

def on_button_b_click():
    keyboard.key("i", KeyboardKeyEvent.PRESS)
    keyboard.clear_all_keys()
    
    def on_run_in_parallel3():
        music.pew_pew.play()
        
        def on_run_in_parallel4():
            light.set_brightness(10)
            light.set_pixel_color(4, col_list[0])
            pause(75)
            light.set_brightness(10)
            light.set_pixel_color(3, light.rgb(0, 119, 182))
            pause(75)
            light.set_brightness(10)
            light.set_pixel_color(2, light.rgb(72, 191, 227))
            pause(75)
            light.set_brightness(10)
            light.set_pixel_color(1, light.rgb(0, 180, 216))
            pause(75)
            light.set_brightness(10)
            light.set_pixel_color(0, light.rgb(128, 255, 219))
            pause(200)
            light.clear()
        control.run_in_parallel(on_run_in_parallel4)
        
    control.run_in_parallel(on_run_in_parallel3)
    
input.button_b.on_event(ButtonEvent.CLICK, on_button_b_click)

def on_switch_moved_left():
    keyboard.key("p", KeyboardKeyEvent.PRESS)
input.on_switch_moved(SwitchDirection.LEFT, on_switch_moved_left)

col_list: List[number] = []
col_list = [light.rgb(55, 6, 23)]

def on_forever():
    if input.buttons_ab.is_pressed():
        keyboard.key("j", KeyboardKeyEvent.PRESS)
forever(on_forever)
