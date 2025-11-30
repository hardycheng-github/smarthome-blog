const fz = require('zigbee-herdsman-converters/converters/fromZigbee');
const tz = require('zigbee-herdsman-converters/converters/toZigbee');
const exposes = require('zigbee-herdsman-converters/lib/exposes');
const reporting = require('zigbee-herdsman-converters/lib/reporting');
const tuya = require('zigbee-herdsman-converters/lib/tuya');
const legacy = require('zigbee-herdsman-converters/lib/legacy');
const e = exposes.presets;
const ea = exposes.access;

const invertedTuyaCoverControl = {
    key: ['state', 'position'],
    convertSet: async (entity, key, value, meta) => {
        if (key === 'position') {
            value = 100 - value; // Invert the position value
        }
        return await legacy.toZigbee.tuya_cover_control.convertSet(entity, key, value, meta);
    },
};

const definition = {
    zigbeeModel: [],
    fingerprint: [{ modelID: "TS0601", manufacturerName: "_TZE284_la9vhsok", priority: 1 }],
    model: 'TS0601_cover_1',
    vendor: "Hardy3C",
    description: "[哈迪自製]TS0601_cover",
    whiteLabel: [],
    fromZigbee: [legacy.fromZigbee.tuya_cover, fz.ignore_basic_report],
    toZigbee: [invertedTuyaCoverControl, legacy.toZigbee.tuya_cover_options],
    exposes: [
        e.cover_position().setAccess('position', ea.STATE_SET),
        e.composite('options', 'options', ea.STATE_SET)
            .withFeature(e.numeric('motor_speed', ea.STATE_SET)
                .withValueMin(0)
                .withValueMax(255)
                .withDescription('Motor speed'))
            .withFeature(e.binary('reverse_direction', ea.STATE_SET, true, false)
                .withDescription('Reverse the motor direction')),
    ],
};

module.exports = definition;
