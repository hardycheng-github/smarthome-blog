const fz = require('zigbee-herdsman-converters/converters/fromZigbee');
const tz = require('zigbee-herdsman-converters/converters/toZigbee');
const exposes = require('zigbee-herdsman-converters/lib/exposes');
const reporting = require('zigbee-herdsman-converters/lib/reporting');
const tuya = require('zigbee-herdsman-converters/lib/tuya');
const m = require('zigbee-herdsman-converters/lib/modernExtend');
const e = exposes.presets;
const ea = exposes.access;
const Fz = require('zigbee-herdsman-converters/lib/types');
const Tz = require('zigbee-herdsman-converters/lib/types');

const valueConverterLocal = {
    indiciatorStatus: tuya.valueConverterBasic.lookup({
        off: tuya.enum(0),
        on_off_status: tuya.enum(1),
        switch_position: tuya.enum(2),
    }),
    relayStatus: tuya.valueConverterBasic.lookup({
        power_off: tuya.enum(0),
        power_on: tuya.enum(1),
        restart_memory: tuya.enum(2),
    }),
    switchColor: tuya.valueConverterBasic.lookup({
        red: tuya.enum(0),
        blue: tuya.enum(1),
        green: tuya.enum(2),
        white: tuya.enum(3),
        yellow: tuya.enum(4),
        magenta: tuya.enum(5),
        cyan: tuya.enum(6),
    }),
    name: {
        to: (v, meta) => {
            const stringValue = String(v ?? "");
            const limitedString = stringValue.slice(0, 12);
            return limitedString.split("").map((char) => char.charCodeAt(0));
        },
        from: (v, meta) => {
            return Object.values(v)
                .map((code) => String.fromCharCode(code))
                .join("");
        },
    },
    cycleSchedule: {
        to: (v, meta) => {
            const stringValue = String(v ?? "");
            const limitedString = stringValue.slice(0, 12);
            return limitedString.split("").map((char) => char.charCodeAt(0));
        },
        from: (v, meta) => {
            return Object.values(v)
                .map((code) => String.fromCharCode(code))
                .join("");
        },
    },
};

const definition = {
    icon: '/hacsfiles/images/ZMS-206US-3.jpg?',
	fingerprint: tuya.fingerprint("TS0601", ["_TZE204_k7v0eqke", "_TZE284_k7v0eqke", "_TZE204_iyki9kjp", "_TZE284_iyki9kjp", "_TZE204_e4pf6l87", "_TZE284_e4pf6l87"]),
	model: "ZMS-206US-3",
	vendor: "Hardy3C",
    description: "[哈迪自製]智美DIY名稱開關-3路",
	extend: [tuya.modernExtend.tuyaBase({dp: true, timeStart: "2000"})],
	fromZigbee: [tuya.fz.datapoints],
	toZigbee: [tuya.tz.datapoints],
	onEvent: tuya.onEventSetTime,
	configure: tuya.configureMagicPacket,
	exposes: [
		tuya.exposes.backlightModeOffOn().withAccess(ea.STATE_SET),
		e.switch(),
		e.switch().withEndpoint("l1"),
		e.switch().withEndpoint("l2"),
		e.switch().withEndpoint("l3"),
		e
			.numeric("backlight_brightness", ea.STATE_SET)
			.withDescription("Brightness of the light")
			.withUnit("%")
			.withValueMin(0)
			.withValueMax(100)
			.withValueStep(1),
		e.child_lock(),
		e
			.enum("switch_color_on", ea.STATE_SET, ["red", "blue", "green", "white", "yellow", "magenta", "cyan", "warm_white", "warm_yellow"])
			.withDescription("Switch lightcolor when on"),
		e
			.enum("switch_color_off", ea.STATE_SET, ["red", "blue", "green", "white", "yellow", "magenta", "cyan", "warm_white", "warm_yellow"])
			.withDescription("Switch lightcolor when off"),
		e.enum("indicator_status", ea.STATE_SET, ["off", "on_off_status", "switch_position"]).withDescription("Indicator Light Status"),
		e
			.enum("delay_off_schedule", ea.STATE_SET, ["red", "blue", "green", "white", "yellow", "magenta", "cyan", "warm_white", "warm_yellow"])
			.withDescription("Switch lightcolor while delayed"),
		e.text("name", ea.STATE_SET).withEndpoint("l1").withDescription("Name for Switch 1"),
		e.text("name", ea.STATE_SET).withEndpoint("l2").withDescription("Name for Switch 2"),
		e.text("name", ea.STATE_SET).withEndpoint("l3").withDescription("Name for Switch 3"),
		e
			.enum("relay_status", ea.STATE_SET, ["power_on", "power_off", "restart_memory"])
			.withEndpoint("l1")
			.withDescription("Relay Status for Switch 1"),
		e
			.enum("relay_status", ea.STATE_SET, ["power_on", "power_off", "restart_memory"])
			.withEndpoint("l2")
			.withDescription("Relay Status for Switch 2"),
		e
			.enum("relay_status", ea.STATE_SET, ["power_on", "power_off", "restart_memory"])
			.withEndpoint("l3")
			.withDescription("Relay Status for Switch 3"),
		e
			.numeric("countdown", ea.STATE_SET)
			.withEndpoint("l1")
			.withDescription("Countdown for Switch 1")
			.withUnit("s")
			.withValueMin(0)
			.withValueMax(43200)
			.withValueStep(1),
		e
			.numeric("countdown", ea.STATE_SET)
			.withEndpoint("l2")
			.withDescription("Countdown for Switch 2")
			.withUnit("s")
			.withValueMin(0)
			.withValueMax(43200)
			.withValueStep(1),
		e
			.numeric("countdown", ea.STATE_SET)
			.withEndpoint("l3")
			.withDescription("Countdown for Switch 3")
			.withUnit("s")
			.withValueMin(0)
			.withValueMax(43200)
			.withValueStep(1),
	],
	endpoint: (device) => {
		return {l1: 1, l2: 1, l3: 1};
	},
	meta: {
		multiEndpoint: true,
		tuyaDatapoints: [
			[1, "state_l1", tuya.valueConverter.onOff, {skip: tuya.skip.stateOnAndBrightnessPresent}],
			[2, "state_l2", tuya.valueConverter.onOff, {skip: tuya.skip.stateOnAndBrightnessPresent}],
			[3, "state_l3", tuya.valueConverter.onOff, {skip: tuya.skip.stateOnAndBrightnessPresent}],
			[7, "countdown_l1", tuya.valueConverter.raw],
			[8, "countdown_l2", tuya.valueConverter.raw],
			[9, "countdown_l3", tuya.valueConverter.raw],
			[13, "state", tuya.valueConverter.onOff, {skip: tuya.skip.stateOnAndBrightnessPresent}],
			[14, "relay_status", tuya.valueConverter.raw],
			[15, "indicator_status", valueConverterLocal.indiciatorStatus],
			[16, "backlight_mode", tuya.valueConverter.onOff],
			[19, "delay_off_schedule", valueConverterLocal.delayOffSchedule],
			[24, "test_bit", tuya.valueConverter.raw],
			[29, "relay_status_l1", valueConverterLocal.relayStatus],
			[30, "relay_status_l2", valueConverterLocal.relayStatus],
			[31, "relay_status_l3", valueConverterLocal.relayStatus],
			[101, "child_lock", tuya.valueConverter.lockUnlock],
			[102, "backlight_brightness", tuya.valueConverter.raw],
			[103, "switch_color_off", valueConverterLocal.switchColor],
			[104, "switch_color_on", valueConverterLocal.switchColor],
			[105, "name_l1", valueConverterLocal.name],
			[106, "name_l2", valueConverterLocal.name],
			[107, "name_l3", valueConverterLocal.name],
			[209, "cycle_schedule", valueConverterLocal.cycleSchedule],
		],
	},
};

module.exports = definition;