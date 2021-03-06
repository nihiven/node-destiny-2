// These examples are temporary
// https://www.bungie.net/en/Help/Article/45481

const Destiny2API = require('../index.js'); // you would use 'node-destiny2' instead
const fs = require('fs');
const config = JSON.parse(fs.readFileSync('../config/config.json'));

const destiny = new Destiny2API({
    key: config.apikey
});

destiny.getManifest()
    .then((res) => {
        const data = res.Response;
        console.log(data);
        console.log('\n\n');
    })
    .catch((error) => {
        console.error(`Get Manifest Error: ${error}`);
    });

// Looking up sunshot item definition
destiny.getDestinyEntityDefinition('DestinyInventoryItemDefinition', '2907129557')
    .then((res) => {
        const data = res.Response;
        console.log(data);
        console.log('\n\n');
    })
    .catch((error) => {
        console.error(`getEntityDefinition Error: ${error}`);
    });

destiny.searchDestinyPlayer(-1, 'Roflz1lla')
    .then((res) => {
        const data = res.Response;
        console.log(data);
        console.log('\n\n');
    })
    .catch((error) => {
        console.error(`searchPlayer Error: ${error}`);
    });

// Look up bungie net profile
destiny.getProfile(1, '4611686018452936098', [100])
    .then((res) => {
        console.log(res.Response);
    })
    .catch((error) => {
        console.error(`getProfile Error: ${error}`);
    });

// Looking up my character: charId: 2305843009278477570
destiny.getCharacter(1, '4611686018452936098', '2305843009278477570', [200])
    .then((res) => {
        console.log(res.Response);
        console.log('\n\n');
    })
    .catch((error) => {
        console.log(`getCharacter Error: ${error}`);
    });

// Decided to choose a random somewhat active clan
// https://www.bungie.net/en/ClanV2?groupId=206662
destiny.getClanWeeklyRewardState('206662')
    .then((res) => {
        console.log(res.Response);
        console.log('\n\n');
    })
    .catch((error) => {
        console.log(`getClanWeeklyRewardState Error: ${error}`);
    });

// Get a specific items description from my inventory
destiny.getItem(1, '4611686018452936098', '6917529034457803619', [300])
    .then((res) => {
        console.log(res.Response);
        console.log('\n\n');
    })
    .catch((error) => {
        console.log(`getItem Error: ${error}`);
    });

/*
// gets list of current vendors - Endpoint not active as of yet

destiny.getVendors(1, '4611686018452936098', '2305843009278477570', [402])
    .then((res) => {
        console.log(res);
        console.log('\n\n');
    })
    .catch((error) => {
         console.log(`getVendors Error: ${error}`);
    })
*/

// Gets one of my post game carnage reports
destiny.getPostGameCarnageReport('328104460')
    .then((res) => {
        console.log(res.Response);
        console.log('\n\n');
    })
    .catch((error) => {
        console.log(`getPostGameCarnageReport Error: ${error}`);
    });

destiny.getHistoricalStatsDefinition()
    .then((res) => {
        console.log(res.ErrorCode); // Response is very long (should be 1)
        console.log('\n\n');
    })
    .catch((error) => {
        console.log(`getHistoricalStatsDefinition Error: ${error}`);
    });

// searching for MIDA Multi-tool weapon
destiny.searchDestinyEntities('DestinyInventoryItemDefinition', 'MIDA Multi-Tool', [0])
    .then((res) => {
        console.log(res.Response);
    })
    .catch((error) => {
        console.log(`searchDestinyEntities Error: ${error}`);
    });

// gets information on a specific public milestone
destiny.getPublicMilestoneContent('4253138191')
    .then((res) => {
        console.log(res.Response);
        console.log('\n\n');
    })
    .catch((error) => {
        console.log(`getPublicMilestoneContent Error: ${error}`);
    });

// lists current public milestones
destiny.getPublicMilestones()
    .then((res) => {
        console.log(res.ErrorCode);
        console.log('\n\n');
    })
    .catch((error) => {
        console.log(`getPublicMilestones Error: ${error}`);
    });


// empty response for now (endpoint not ready)
destiny.getClanLeaderboards('206662')
    .then((res) => {
        console.log(res.Response);
        console.log('\n\n');
    })
    .catch((error) => {
        console.log(`getClanLeaderboards Error: ${error}`);
    });

destiny.getClanAggregateStats('206662')
    .then((res) => {
        console.log(res);
        console.log('\n\n');
    })
    .catch((error) => {
        console.log(error);
    });

// modes 7 is allpve and groups 2 is weapons only 
// will add enums to make this much easier to work with
destiny.getHistoricalStats(1, 
                          '4611686018452936098', 
                          '2305843009278477570', 
                          { modes: [7], groups: [2] })
    .then((res) => {
        console.log(res);
        console.log('\n\n');
    })
    .catch((error) => {
        console.log(error);
    });

destiny.getHistoricalStatsForAccount(1, '4611686018452936098')
    .then((res) => {
        console.log(res);
        console.log('\n\n');
    })
    .catch((error) => {
        console.log(error);
    });

// get activity history for a character, return 5 rows, and filter for only PvE
destiny.getActivityHistory(1, 
                           '4611686018452936098', 
                           '2305843009278477570', 
                           { count: [5], mode: [7] })
    .then((res) => {
        console.log(res);
        console.log('\n\n');
    })
    .catch((error) => {
        console.log(error);
    });

destiny.getUniqueWeaponHistory(1, '4611686018452936098', '2305843009278477570')
    .then((res) => {
        console.log(res);
        console.log('\n\n');
    })
    .catch((error) => {
        console.log(error);
    });


destiny.getDestinyAggregateActivityStats(1, '4611686018452936098', '2305843009278477570')
    .then((res) => {
        console.log(res);
        console.log('\n\n');
    })
    .catch((error) => {
        console.log(error);
    });
