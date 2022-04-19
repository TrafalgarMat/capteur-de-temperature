input.onButtonPressed(Button.A, function () {
    basic.showNumber(Min)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Max)
    basic.clearScreen()
})
let Min = 0
let Max = 0
let Currenttemperature = input.temperature()
Max = Currenttemperature
Min = Currenttemperature
basic.forever(function () {
    basic.showString(".")
    Currenttemperature = input.temperature()
    if (Currenttemperature < Min) {
        Min = Currenttemperature
    }
    if (Currenttemperature > Max) {
        Max = Currenttemperature
    }
    basic.pause(1000)
    basic.clearScreen()
    basic.pause(1000)
})
