

const defaultSettings = {
    "browsers": {
        "chrome": true,
        "firefox": false,
        "safari": true,
        "explorer": false,
        "opera": false,
        "incognito": true,
    },
    "inputs": {
        "waitFirst": 20,
        "waitSecond": 50,
        "PageInSite": false,
        "numPages": 10,
        "numPagesFirst": 40,
        "numPagesSecond": 20,
        "operationFirst": 30,
        "operationSecond": 60,
        "targetSite": 20,
        "timeTarget": 10,
        "timeReset": 20,
    },
    "devices": {
        "device": true,
        "phone": true,
        "mobileData": false,
        "vinn": false,
        "fly": false,
    },
    "options": {
        "cookies": true,
        "analytic": false,
        "dataSaving": true,
        "mouse": true,
        "resolution": false,
        "random": false,
        "history": true
    }
    
} 

export default defaultSettings;