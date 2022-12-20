input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showString(communication.ipaddress())
})
communication.setupWifi(
SerialPin.C17,
SerialPin.C16,
BaudRate.BaudRate115200,
"Bertha",
"12345678"
)
if (communication.wifiOK()) {
    basic.showIcon(IconNames.Yes)
} else {
    basic.showIcon(IconNames.No)
}
