input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    communication.sendAtCmd("AT+CIFSR")
})
serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    basic.showString(communication.getResponse(1000))
})
communication.setupWifi(
SerialPin.C17,
SerialPin.C16,
BaudRate.BaudRate115200,
"Bertha",
"12345678"
)
