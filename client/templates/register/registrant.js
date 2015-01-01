Template.registrantDetails.helpers({
    options: function () {
        return [
            {label: "Child (0-5)", value: "child"},
            {label: "Youth (6-12)", value: "youth"},
            {label: "Teen (13-17)", value: "teen"},
            {label: "Young Friend (18-25)", value: "youngAdult"},
            {label: "Adult (26+)", value: "adult"}
        ];
    },
    registrationTypeOptions: function () {
        return [
            {label: "Commuter", value: "commuter"},
            {label: "Daily", value: "daily"},
            {label: "Full Week", value: "weekly"}
        ];
    },
    accommodationsOptions: function () {
        return [
            {label: "Child (0-5)", value: "child"},
            {label: "Youth (6-12)", value: "youth"},
            {label: "Teen (13-17)", value: "teen"},
            {label: "Young Friend (18-25)", value: "youngAdult"},
            {label: "Adult (26+)", value: "adult"}
        ];
    }
});
