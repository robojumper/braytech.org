import Manifest from './manifest';
import _ from 'lodash';

async function run() {
  const manifest = await Manifest.getManifest();

  const nightfalls = {
    3145298904: {
      // Nightfall: The Arms Dealer
      sort: 1,
      triumphs: [3340846443, 4267516859],
      items: [],
      collectibles: [3036030066, 1463718189],
      ordealHashes: [1358381368, 1358381370, 1358381371, 1358381373],
      affectsSpeedEmblemObjective: true
    },
    1391780798: {
      // Nightfall: Broodhold
      sort: 2,
      triumphs: [3042714868, 4156350130],
      items: [],
      collectibles: [],
      ordealHashes: [],
      affectsSpeedEmblemObjective: false
    },
    3034843176: {
      // Nightfall: The Corrupted
      sort: 3,
      triumphs: [3951275509, 3641166665],
      items: [],
      collectibles: [1099984904, 1194959231],
      ordealHashes: [],
      affectsSpeedEmblemObjective: true
    },
    1282886582: {
      // Nightfall: Exodus Crash
      sort: 4,
      triumphs: [1526865549, 2140068897],
      items: [],
      collectibles: [3036030067, 1463718187],
      ordealHashes: [],
      affectsSpeedEmblemObjective: true
    },
    629542775: {
      // Nightfall: The Festering Core
      sort: 5,
      triumphs: [],
      items: [],
      collectibles: [],
      ordealHashes: [],
      affectsSpeedEmblemObjective: false
    },
    936308438: {
      // Nightfall: A Garden World
      sort: 6,
      triumphs: [2692332187, 1398454187],
      items: [],
      collectibles: [2448009818, 2206107773],
      ordealHashes: [2533203704, 2533203706, 2533203707, 2533203709],
      affectsSpeedEmblemObjective: true
    },
    3701132453: {
      // Nightfall: The Hollowed Lair
      sort: 7,
      triumphs: [3450793480, 3847579126],
      items: [],
      collectibles: [1074861258, 943388586],
      ordealHashes: [],
      affectsSpeedEmblemObjective: true
    },
    1034003646: {
      // Nightfall: The Insight Terminus
      sort: 8,
      triumphs: [599303591, 3399168111],
      items: [],
      collectibles: [1186314105, 2132755465],
      ordealHashes: [3200108049, 3200108052, 3200108054, 3200108055],
      affectsSpeedEmblemObjective: true
    },
    4259769141: {
      // Nightfall: The Inverted Spire
      sort: 9,
      triumphs: [3973165904, 1498229894],
      items: [],
      collectibles: [1718922261, 1463718185],
      ordealHashes: [1801803624, 1801803625, 1801803627, 1801803630],
      affectsSpeedEmblemObjective: true
    },
    3372160277: {
      // Nightfall: Lake of Shadows
      sort: 10,
      triumphs: [1329556468, 413743786],
      items: [],
      collectibles: [1602518767, 3046699982],
      ordealHashes: [],
      affectsSpeedEmblemObjective: true
    },
    3289589202: {
      // Nightfall: The Pyramidion
      sort: 11,
      triumphs: [1060780635, 1142177491],
      items: [],
      collectibles: [1152758802, 1463718182],
      ordealHashes: [3265488360, 3265488362, 3265488363, 3265488365],
      affectsSpeedEmblemObjective: true
    },
    3280234344: {
      // Nightfall: Savathûn's Song
      sort: 12,
      triumphs: [2099501667, 1442950315],
      items: [],
      collectibles: [1333654061, 1463718186],
      ordealHashes: [3849697856, 3849697858, 3849697859, 3849697861],
      affectsSpeedEmblemObjective: true
    },
    3856436847: {
      // Nightfall: The Scarlet Keep
      sort: 13,
      triumphs: [],
      items: [],
      collectibles: [],
      ordealHashes: [887176537, 887176540, 887176542, 887176543],
      affectsSpeedEmblemObjective: false
    },
    522318687: {
      // Nightfall: Strange Terrain
      sort: 14,
      triumphs: [165166474, 1871570556],
      items: [],
      collectibles: [1534387877, 2256440525],
      ordealHashes: [3883876600, 3883876605, 3883876606, 3883876607],
      affectsSpeedEmblemObjective: true
    },
    3718330161: {
      // Nightfall: Tree of Probabilities
      sort: 15,
      triumphs: [2282894388, 3636866482],
      items: [],
      collectibles: [1279318110, 1463718184],
      ordealHashes: [2660931442, 2660931444, 2660931445, 2660931447],
      affectsSpeedEmblemObjective: true
    },
    3108813009: {
      // Nightfall: Warden of Nothing
      sort: 16,
      triumphs: [2836924866, 1469598452],
      items: [],
      collectibles: [1279318101, 3525223396],
      ordealHashes: [],
      affectsSpeedEmblemObjective: true
    },
    272852450: {
      // Nightfall: Will of the Thousands
      sort: 17,
      triumphs: [1039797865, 3013611925],
      items: [],
      collectibles: [2466440635, 2256440524],
      ordealHashes: [],
      affectsSpeedEmblemObjective: true
    }
  };

  const ordeals = Object.values(manifest.DestinyActivityDefinition)
    .filter(d => d.displayProperties && d.displayProperties.name && d.displayProperties.name.includes('Nightfall: The Ordeal'));
  
  ordeals
    .forEach((d, i) => {
      console.log(i + ' ' + d.displayProperties.description);
    });
  
  console.log(' ');
  console.log(' ');

  const obj = {};

  Object.keys(nightfalls)
    .forEach((n, i) => {
      console.log(i + ' ' + manifest.DestinyActivityDefinition[n].displayProperties.name);
      
      const hashes = Object.values(manifest.DestinyActivityDefinition)
        .filter(d =>
          d.activityModeTypes &&
          d.activityModeTypes.includes(46) &&
          !d.guidedGame &&
          d.modifiers &&
          d.modifiers.length > 2 &&
          d.displayProperties &&
          d.displayProperties.name &&
          d.displayProperties.name.includes(manifest.DestinyActivityDefinition[n].displayProperties.name.replace('Nightfall: ', ''))
        )
        .map(d => d.hash)
        .sort((a, b) => manifest.DestinyActivityDefinition[a].activityLightLevel - manifest.DestinyActivityDefinition[b].activityLightLevel);
      
      const hash = hashes[0];
      const grandmaster = hashes[1];

      obj[hash] = nightfalls[n];
      obj[hash].ordealHashes = ordeals.filter(o => o.displayProperties.description === manifest.DestinyActivityDefinition[hash].displayProperties.name.replace('Nightfall: ', '')).map(h => h.hash);
      obj[hash].grandmaster = grandmaster;

      console.log(' ');
    });
  
  console.log(' ');
  console.log(' ');

  console.log(JSON.stringify(obj));

  console.log(' ');

  console.log('________________');

  console.log(`{
      
${_.orderBy(Object.keys(nightfalls), [n => manifest.DestinyActivityDefinition[n].displayProperties.name.replace('The ','').replace('A ','')], ['asc']).map((n,i) => {

  const hashes = Object.values(manifest.DestinyActivityDefinition)
    .filter(d =>
      d.activityModeTypes &&
      d.activityModeTypes.includes(46) &&
      !d.guidedGame &&
      d.modifiers &&
      d.modifiers.length > 2 &&
      d.displayProperties &&
      d.displayProperties.name &&
      d.displayProperties.name.includes(manifest.DestinyActivityDefinition[n].displayProperties.name.replace('Nightfall: ', ''))
    )
    .map(d => d.hash)
    .sort((a, b) => manifest.DestinyActivityDefinition[a].activityLightLevel - manifest.DestinyActivityDefinition[b].activityLightLevel);

  const hash = hashes[0];
  const grandmaster = hashes[1];

  return (` ${hash}: {     // ${manifest.DestinyActivityDefinition[n].displayProperties.name}
    sort: ${i + 1},
    triumphs: [${nightfalls[n].triumphs.map(hash => hash).join(', ')}],
    items: [${nightfalls[n].items.map(hash => hash).join(', ')}],
    collectibles: [${nightfalls[n].collectibles.map(hash => hash).join(', ')}],
    ordealHashes: [${ordeals.filter(o => o.displayProperties.description === manifest.DestinyActivityDefinition[hash].displayProperties.name.replace('Nightfall: ', '')).map(h => h.hash).join(', ')}],
    grandmasterHash: ${grandmaster || false},
    affectsSpeedEmblemObjective: ${Boolean(nightfalls[n].affectsSpeedEmblemObjective)}
  }`);

  }).join(',\n')}

}`);

}

run();
