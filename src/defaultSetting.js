

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

const allDefaultKeywords = ['Shoes', 'Shoes carnival', 'Shoes palace', 'shoe stores near me', 'shoes for crew', 'shoes station', 'Shoes repair', 'Shoes for women', 'Shoes for fashion week', 'Shoes for instagram', 'Shoes stories', 'Shoes show']

const allDefaultWebsites = [['www.dockers.com', 'www.adidas.com', 'www.nike.com', 'www.underarmour.com', 'www.newbalance.com', 'www.puma.com', 'www.prada.com', 'www.fredperry.com', 'www.catapillar.com', 'www.gucci.com', 'www.almonds.com', 'www.brunoarmagio.com']]

export {
    defaultSettings,
    allDefaultKeywords,
    allDefaultWebsites
};