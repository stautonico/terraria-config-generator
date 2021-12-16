window.PROPS = [
    {
        name: "world",
        type: "text",
        default: "world.wld",
        description: "The world file to load."
    },
    {
        name: "autocreate",
        type: "select",
        options: [{name: "None", value: ""}, {name: "Small", value: 1}, {name: "Medium", value: 2}, {
            name: "Large",
            value: 3
        }],
        default: 1,
        description: "Will autocreate a world if none is found."
    },
    {
        name: "difficulty",
        type: "select",
        options: [{name: "Classic", value: 0}, {name: "Expert", value: 1}, {name: "Master", value: 2}, {
            name: "Journey",
            value: 3
        }],
        default: 0,
        description: "The difficulty of the world (if using autocreate)."
    },
    {
        name: "maxplayers",
        type: "number",
        min: 1,
        max: 255,
        default: 8,
        description: "The maximum number of players allowed in the server."
    },
    {
        name: "port",
        type: "number",
        min: 1,
        max: 65535,
        default: 7777,
        description: "The port to run the server on."
    },
    {
        name: "password",
        type: "text",
        default: "",
        description: "The password required to connect to the server."
    },
    {
        name: "worldname",
        type: "text",
        default: "world",
        description: "The name of the world (if using autocreate)."
    },
    {
        name: "motd",
        type: "text",
        default: "Welcome to the server!",
        description: "The message of the day displayed to players when they connect."
    },
    {
        name: "worldpath",
        type: "text",
        default: "/opt/terraria/worlds",
        description: "The path where the world files are stored."
    },
    {
        name: "banlist",
        type: "text",
        default: "banlist.txt",
        description: "The file where banned players are stored."
    },
    {
        name: "secure",
        type: "bool",
        default: true,
        description: "Whether or not to use anti-cheat protection.",
    },
    {
        name: "language",
        type: "select",
        options: [
            {name: "English", value: "en-US"},
            {name: "German", value: "de-DE"},
            {name: "Italian", value: "it-IT"},
            {name: "French", value: "fr-FR"},
            {name: "Spanish", value: "es-ES"},
            {name: "Russian", value: "ru-RU"},
            {name: "Chinese", value: "zh-Hans"},
            {name: "Portuguese", value: "pt-BR"},
            {name: "Polish", value: "pl-PL"}],
        default: "en-US",
        description: "The language to use for the server."
    },
    {
        name: "upnp",
        type: "bool",
        default: true,
        description: "Whether to use UPnP to <i>try</i> to automatically open the server port.",
    },
    {
        name: "npcstream",
        type: "number",
        min: 0,
        max: 100,
        default: 60,
        description: "Reduces enemy skipping but increases bandwidth usage. The lower the number the less skipping will happen, but more data is sent. 0 is off.",
    },
    {
        name: "priority",
        type: "select",
        options: [{name: "Realtime", value: 0},
            {name: "High", value: 1},
            {name: "AboveNormal", value: 2},
            {name: "Normal", value: 3},
            {name: "BelowNormal", value: 4},
            {name: "Idle", value: 5}],
        default: 1,
        description: "The priority of the server process.",
    },
    {
        name: "Journey Mode Privileges",
        type: "divider",

    },
    {
        name: "journeypermission_time_setfrozen",
        type: "select",
        options: [{name: "No one", value: 0}, {name: "Only Host", value: 1}, {name: "Everyone", value: 2}],
        default: 2,
        description: "Who can set the time frozen."
    }, {
        name: "journeypermission_time_setdawn",
        type: "select",
        options: [{name: "No one", value: 0}, {name: "Only Host", value: 1}, {name: "Everyone", value: 2}],
        default: 2,
        description: "Who can set the time to dawn."
    },
    {
        name: "journeypermission_time_setnoon",
        type: "select",
        options: [{name: "No one", value: 0}, {name: "Only Host", value: 1}, {name: "Everyone", value: 2}],
        default: 2,
        description: "Who can set the time to noon."
    },
    {
        name: "journeypermission_time_setdusk",
        type: "select",
        options: [{name: "No one", value: 0}, {name: "Only Host", value: 1}, {name: "Everyone", value: 2}],
        default: 2,
        description: "Who can set the time to dusk."
    },
    {
        name: "journeypermission_time_setmidnight",
        type: "select",
        options: [{name: "No one", value: 0}, {name: "Only Host", value: 1}, {name: "Everyone", value: 2}],
        default: 2,
        description: "Who can set the time to midnight."
    },
    {
        name: "journeypermission_godmode",
        type: "select",
        options: [{name: "No one", value: 0}, {name: "Only Host", value: 1}, {name: "Everyone", value: 2}],
        default: 2,
        description: "Who can use godmode."
    },
    {
        name: "journeypermission_wind_setstrength",
        type: "select",
        options: [{name: "No one", value: 0}, {name: "Only Host", value: 1}, {name: "Everyone", value: 2}],
        default: 2,
        description: "Who can set the wind strength."
    },
    {
        name: "journeypermission_rain_setstrength",
        type: "select",
        options: [{name: "No one", value: 0}, {name: "Only Host", value: 1}, {name: "Everyone", value: 2}],
        default: 2,
        description: "Who can set the rain strength."
    },
    {
        name: "journeypermission_time_setspeed",
        type: "select",
        options: [{name: "No one", value: 0}, {name: "Only Host", value: 1}, {name: "Everyone", value: 2}],
        default: 2,
        description: "Who can set the time speed."
    },
    {
        name: "journeypermission_rain_setfrozen",
        type: "select",
        options: [{name: "No one", value: 0}, {name: "Only Host", value: 1}, {name: "Everyone", value: 2}],
        default: 2,
        description: "Who can freeze the rain."
    },
    {
        name: "journeypermission_wind_setfrozen",
        type: "select",
        options: [{name: "No one", value: 0}, {name: "Only Host", value: 1}, {name: "Everyone", value: 2}],
        default: 2,
        description: "Who can freeze the wind."
    },
    {
        name: "journeypermission_increaseplacementrange",
        type: "select",
        options: [{name: "No one", value: 0}, {name: "Only Host", value: 1}, {name: "Everyone", value: 2}],
        default: 2,
        description: "Who can increase their placement range."
    },
    {
        name: "journeypermission_setdifficulty",
        type: "select",
        options: [{name: "No one", value: 0}, {name: "Only Host", value: 1}, {name: "Everyone", value: 2}],
        default: 2,
        description: "Who can change the difficulty."
    },
    {
        name: "journeypermission_biomespread_setfrozen",
        type: "select",
        options: [{name: "No one", value: 0}, {name: "Only Host", value: 1}, {name: "Everyone", value: 2}],
        default: 2,
        description: "Who can disable the infection spread."
    },
    {
        name: "journeypermission_setspawnrate",
        type: "select",
        options: [{name: "No one", value: 0}, {name: "Only Host", value: 1}, {name: "Everyone", value: 2}],
        default: 2,
        description: "Who can change the spawn rate."
    }
];
