input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showString(UART_Wifi_V2.ipaddress())
})
UART_Wifi_V2.setupWifi(
SerialPin.C17,
SerialPin.C16,
BaudRate.BaudRate115200,
"Bertha",
"12345678"
)
if (UART_Wifi_V2.wifiOK()) {
    basic.showIcon(IconNames.Yes)
} else {
    basic.showIcon(IconNames.No)
}
