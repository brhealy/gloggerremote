enum RadioMessage {
    message1 = 49434,
    start = 56380,
    stop = 61268,
    reset = 40993,
    next = 26510
}
input.onButtonPressed(Button.A, function () {
    radio.sendMessage(RadioMessage.start)
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.AB, function () {
    if (input.logoIsPressed()) {
        radio.sendMessage(RadioMessage.reset)
    }
    basic.showString("reset")
})
input.onButtonPressed(Button.B, function () {
    radio.sendMessage(RadioMessage.next)
})
radio.onReceivedValue(function (name, value) {
    if (name == "launch" && launch != value) {
        launch = value
        basic.showNumber(launch)
        serial.writeValue("launch", value)
    } else {
        if (name == "g") {
            serial.writeValue("g", value)
        }
    }
})
let launch = 0
launch = 0
radio.setGroup(1)
radio.setTransmitPower(7)
