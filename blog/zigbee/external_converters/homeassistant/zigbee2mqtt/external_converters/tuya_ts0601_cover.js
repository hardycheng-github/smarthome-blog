const fz = require('zigbee-herdsman-converters/converters/fromZigbee');
const tz = require('zigbee-herdsman-converters/converters/toZigbee');
const exposes = require('zigbee-herdsman-converters/lib/exposes');
const reporting = require('zigbee-herdsman-converters/lib/reporting');
const tuya = require('zigbee-herdsman-converters/lib/tuya');
const legacy = require('zigbee-herdsman-converters/lib/legacy');
const e = exposes.presets;
const ea = exposes.access;

const definition = {
    fingerprint: tuya.fingerprint("TS0601", ["_TZE200_yenbr4om", "_TZE204_bdblidq3", "_TZE200_bdblidq3", "_TZE284_la9vhsok"]),
    model: 'TUYA_TS0601_cover',
    vendor: "Hardy3C",
    description: "[哈迪自製]TS0601_cover",
    fromZigbee: [legacy.fz.tuya_cover],
	toZigbee: [legacy.tz.tuya_cover_control],
	exposes: [e.cover_position().setAccess("position", ea.STATE_SET)],
};

module.exports = definition;
