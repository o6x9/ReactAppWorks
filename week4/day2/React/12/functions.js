export const filterDevicesByYear = (devicesArray, year) => {
    const matchedDevices = devicesArray.filter(device => {
        return device.year > year
    })
    return matchedDevices
}