def on_button_a_click():
    light.show_ring("""red red red red red black black black black black""")
    music.jump_up.play()
input.button_a.on_event(ButtonEvent.CLICK, on_button_a_click)

def on_button_b_click():
    light.show_ring("""black black black black black red red red red red""")
    music.pew_pew.play()
input.button_b.on_event(ButtonEvent.CLICK, on_button_b_click)

def on_forever():
    light.show_ring("""black black black black black black black black black black""")
forever(on_forever)
