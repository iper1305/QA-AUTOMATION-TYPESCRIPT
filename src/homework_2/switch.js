const MOBILE = 'mobile';
const TABLET = 'tablet';
const DESKTOP = 'desktop';

function getDeviceMessage(deviceType, deviceName) {
    let message;

    switch (deviceType) {
        case MOBILE:
            message = `You are using a mobile device: ${deviceName}.`;
            break;
        case TABLET:
            message = `You are using a tablet: ${deviceName}.`;
            break;
        case DESKTOP:
            message = `You are using a desktop computer: ${deviceName}.`;
            break;
        default:
            message = `Device type is not recognized for ${deviceName}.`;
            break;
    }

    return message;
}

console.log(getDeviceMessage(MOBILE, 'iPhone 12'));
console.log(getDeviceMessage(DESKTOP, 'MacBook Pro'));
console.log(getDeviceMessage(TABLET, 'iPad Pro 11'));
console.log(getDeviceMessage("laptop", 'samsung'));
