communication.setupWifi(
SerialPin.C17,
SerialPin.C16,
BaudRate.BaudRate115200,
"Bertha",
"12345678"
)
if (communication.wifiOK()) {
    basic.showIcon(IconNames.Yes)
    music.playTone(262, music.beat(BeatFraction.Whole))
} else {
    basic.showIcon(IconNames.No)
}
basic.forever(function () {
	
})
