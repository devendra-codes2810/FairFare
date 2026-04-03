// ------------------------------------------------------------------
// FARE DATA
// Key format: "From|To"
// Each entry has fare ranges per vehicle type (null = not available)
// ------------------------------------------------------------------

export const fareDB = {
  'Varanasi Railway Station|Dashashwamedh Ghat':    { auto:[80,120],  taxi:[150,200], toto:[60,90],   cycle:[40,70]  },
  'Varanasi Railway Station|Kashi Vishwanath Temple':{ auto:[90,130], taxi:[160,220], toto:[70,100],  cycle:[50,80]  },
  'Varanasi Railway Station|Assi Ghat':             { auto:[100,150], taxi:[180,250], toto:[80,120],  cycle:[60,90]  },
  'Varanasi Railway Station|Sarnath':               { auto:[150,200], taxi:[250,350], toto:[120,160], cycle:null     },
  'Varanasi Railway Station|BHU':                   { auto:[60,90],   taxi:[120,180], toto:[50,80],   cycle:[40,70]  },
  'Varanasi Railway Station|Ramnagar Fort':         { auto:[120,170], taxi:[200,280], toto:null,      cycle:null     },
  'Varanasi Railway Station|Godaulia Chowk':        { auto:[70,100],  taxi:[130,180], toto:[55,85],   cycle:[40,65]  },
  'Varanasi Airport|Dashashwamedh Ghat':            { auto:[350,500], taxi:[500,700], toto:null,      cycle:null     },
  'Varanasi Airport|Varanasi Railway Station':      { auto:[300,450], taxi:[450,600], toto:null,      cycle:null     },
  'Varanasi Airport|Assi Ghat':                     { auto:[380,520], taxi:[520,720], toto:null,      cycle:null     },
  'Varanasi Airport|BHU':                           { auto:[280,400], taxi:[420,580], toto:null,      cycle:null     },
  'Dashashwamedh Ghat|Assi Ghat':                   { auto:[40,70],   taxi:[100,150], toto:[30,55],   cycle:[20,40]  },
  'Dashashwamedh Ghat|Sarnath':                     { auto:[120,180], taxi:[200,300], toto:[100,150], cycle:null     },
  'Dashashwamedh Ghat|BHU':                         { auto:[60,90],   taxi:[120,180], toto:[50,80],   cycle:[40,70]  },
  'Assi Ghat|Sarnath':                              { auto:[130,190], taxi:[220,320], toto:null,      cycle:null     },
  'Assi Ghat|Ramnagar Fort':                        { auto:[80,120],  taxi:[150,220], toto:null,      cycle:null     },
  'Sarnath|Kashi Vishwanath Temple':                { auto:[130,180], taxi:[210,300], toto:null,      cycle:null     },
};

export const vehicleOptions = [
  { value: 'auto',  label: 'Auto Rickshaw' },
  { value: 'taxi',  label: 'Taxi / Cab'    },
  { value: 'toto',  label: 'E-Toto (Electric)' },
  { value: 'cycle', label: 'Cycle Rickshaw' },
];

export const fromOptions = [
  'Varanasi Railway Station',
  'Varanasi Airport',
  'Dashashwamedh Ghat',
  'Assi Ghat',
  'BHU',
  'Sarnath',
  'Godaulia Chowk',
];

export const toOptions = [
  'Dashashwamedh Ghat',
  'Kashi Vishwanath Temple',
  'Assi Ghat',
  'Sarnath',
  'BHU',
  'Varanasi Airport',
  'Varanasi Railway Station',
  'Ramnagar Fort',
  'Godaulia Chowk',
];

export const quickRoutes = [
  { route: 'Station → Dashashwamedh Ghat', auto: '₹20-40',  taxi: '₹150–200', status: 'fair'     },
  { route: 'Airport → City Center',        auto: '₹350–500', taxi: '₹500–700', status: 'negotiate' },
  { route: 'Station → Sarnath',            auto: '₹50-80', taxi: '₹250–350', status: 'fair'      },
  { route: 'Dashashwamedh → Assi Ghat',    auto: '₹20–40',   taxi: '₹100–150', status: 'fair'      },
  { route: 'Station → BHU',                auto: '₹30-50',   taxi: '₹120–180', status: 'fair'      },
  { route: 'Assi Ghat → Ramnagar Fort',    auto: '₹30-50',  taxi: '₹150–220', status: 'negotiate' },
];
