input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    communication.sendAtCmd("AT+CIFSR")
})
serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    basic.showString(serial.readLine())
})
communication.setupWifi(
SerialPin.C17,
SerialPin.C16,
BaudRate.BaudRate115200,
"Bertha",
"12345678"
)
