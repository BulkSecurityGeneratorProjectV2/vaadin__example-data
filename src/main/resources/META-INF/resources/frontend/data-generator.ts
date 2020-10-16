const chanceImport = require('chance');
const options: any = {};
options.BookGenre = [
  "Children's books",
  'Best sellers',
  'Romance',
  'Mystery',
  'Thriller',
  'Sci-fi',
  'Non-fiction',
  'Cookbooks',
  'Dystopian',
  'Horror',
  'Health',
  'History',
  'Travel',
  'Guide / How-to',
  'Humor',
];

options.BookTitlePrefix = [
  'The art of',
  'Mastering',
  'The secrets of',
  'Avoiding',
  'For fun and profit:',
  'How to fail at',
  '10 important facts about',
  'The ultimate guide to',
  'Book of',
  'Surviving',
  'Encyclopedia of',
  'Very much',
  'Learning the basics of',
  'The cheap way to',
  'Being awesome at',
  'The life changer:',
  'Becoming one with',
  'Beginners guide to',
  'The complete visual guide to',
  'The mother of all references:',
];

options.BookTitleSuffix = [
  'gardening',
  'living a healthy life',
  'designing tree houses',
  'home security',
  'intergalaxy travel',
  'meditation',
  'ice hockey',
  "children's education",
  'computer programming',
  'winter bathing',
  'playing the cello',
  'dummies',
  'rubber bands',
  'feeling down',
  'debugging',
  'running barefoot',
  'speaking to a big audience',
  'creating software',
  'giant needles',
  'elephants',
  'keeping your wife happy',
];

options.IBAN = [
  'AD12 0001 2030 2003 5910 0100',
  'AE07 0331 2345 6789 0123 456',
  'AL47 2121 1009 0000 0002 3569 8741',
  'AT61 1904 3002 3457 3201',
  'AZ21 NABZ 0000 0000 1370 1000 1944',
  'BA39 1290 0794 0102 8494',
  'BE68 5390 0754 7034',
  'BG80 BNBG 9661 1020 3456 78',
  'BH67 BMAG 0000 1299 1234 56',
  'BR18 0036 0305 0000 1000 9795 493C 1',
  'BY13 NBRB 3600 9000 0000 2Z00 AB00',
  'CH93 0076 2011 6238 5295 7',
  'CR05 0152 0200 1026 2840 66',
  'CY17 0020 0128 0000 0012 0052 7600',
  'CZ65 0800 0000 1920 0014 5399',
  'DE89 3704 0044 0532 0130 00',
  'DK50 0040 0440 1162 43',
  'DO28 BAGR 0000 0001 2124 5361 1324',
  'EE38 2200 2210 2014 5685',
  'ES91 2100 0418 4502 0005 1332',
  'FI21 1234 5600 0007 85',
  'FO62 6460 0001 6316 34',
  'FR14 2004 1010 0505 0001 3M02 606',
  'GB29 NWBK 6016 1331 9268 19',
  'GE29 NB00 0000 0101 9049 17',
  'GI75 NWBK 0000 0000 7099 453',
  'GL89 6471 0001 0002 06',
  'GR16 0110 1250 0000 0001 2300 695',
  'GT82 TRAJ 0102 0000 0012 1002 9690',
  'HR12 1001 0051 8630 0016 0',
  'HU42 1177 3016 1111 1018 0000 0000',
  'IE29 AIBK 9311 5212 3456 78',
  'IL62 0108 0000 0009 9999 999',
  'IQ98 NBIQ 8501 2345 6789 012',
  'IS14 0159 2600 7654 5510 7303 39',
  'IT60 X054 2811 1010 0000 0123 456',
  'JO94 CBJO 0010 0000 0000 0131 0003 02',
  'KW81 CBKU 0000 0000 0000 1234 5601 01',
  'KZ86 125K ZT50 0410 0100',
  'LB62 0999 0000 0001 0019 0122 9114',
  'LC55 HEMM 0001 0001 0012 0012 0002 3015',
  'LI21 0881 0000 2324 013A A',
  'LT12 1000 0111 0100 1000',
  'LU28 0019 4006 4475 0000',
  'LV80 BANK 0000 4351 9500 1',
  'MC58 1122 2000 0101 2345 6789 030',
  'MD24 AG00 0225 1000 1310 4168',
  'ME25 5050 0001 2345 6789 51',
  'MK07 2501 2000 0058 984',
  'MR13 0002 0001 0100 0012 3456 753',
  'MT84 MALT 0110 0001 2345 MTLC AST0 01S',
  'MU17 BOMM 0101 1010 3030 0200 000M UR',
  'NL91 ABNA 0417 1643 00',
  'NO93 8601 1117 947',
  'PK36 SCBL 0000 0011 2345 6702',
  'PL61 1090 1014 0000 0712 1981 2874',
  'PS92 PALS 0000 0000 0400 1234 5670 2',
  'PT50 0002 0123 1234 5678 9015 4',
  'QA58 DOHB 0000 1234 5678 90AB CDEF G',
  'RO49 AAAA 1B31 0075 9384 0000',
  'RS35 2600 0560 1001 6113 79',
  'SA03 8000 0000 6080 1016 7519',
  'SC18 SSCB 1101 0000 0000 0000 1497 USD',
  'SE45 5000 0000 0583 9825 7466',
  'SI56 2633 0001 2039 086',
  'SK31 1200 0000 1987 4263 7541',
  'SM86 U032 2509 8000 0000 0270 100',
  'ST68 0002 0001 0192 1942 1011 2',
  'SV62 CENR 0000 0000 0000 0070 0025',
  'TL38 0080 0123 4567 8910 157',
  'TN59 1000 6035 1835 9847 8831',
  'TR33 0006 1005 1978 6457 8413 26',
  'UA21 3996 2200 0002 6007 2335 6600 1',
  'VG96 VPVG 0000 0123 4567 8901',
  'XK05 1212 0123 4567 8906',
  'YY24 KIHB 1247 6423 1259 1594 7930 9152 68',
  'ZZ25 VLQT 3823 3223 3206 5880 1131 3776 421',
];

options.Occupation = [
  'Account Executive',
  'Actuary',
  'Advanced Foreign Counterintelligence Specialist (Afcs)',
  'Advertising Editor',
  'Aegis Operations Specialist',
  'Aerospace Engineer',
  'African History Professor',
  'Agronomy Professor',
  'Air Battle Manager',
  'Air Conditioning Service Technician',
  'Air Control/Anti-Air Warfare Officer',
  'Alarm Adjuster',
  'Animal Nutritionist',
  'Antisubmarine Warfare Intelligence Officer',
  'Aoc Plans - Master Air Attack Planning Assistant Chief',
  'Assistant Manager',
  'Attending Anesthesiologist',
  'Audio-Visual Production Specialist',
  'Auto Body Painter',
  'Auto Service Station Attendant',
  'Auto Tire Worker',
  'Automotive Electrician',
  'Aviation Maintenance Instructor',
  'Basketball Player',
  'Battery Builder',
  'Beer Coil Cleaner',
  'Bindery Machine Operator',
  'Blackjack Pit Boss',
  'Boiler Tester',
  'Bottle Packer',
  'Brewery Pumper',
  'Broadcast Engineer',
  'Broadcast Maintenance Engineer',
  'Budget Coordinator',
  'Budget Officer',
  'Business Systems Development Analyst',
  'Business Unit Manager',
  'Cafeteria Director',
  'Candy Puller',
  'Cardiac Surgeon',
  'Catalogue Illustrator',
  'Cattle Brander',
  'Certified Alcohol and Drug Counselor',
  'Certified Indoor Environmentalist',
  'Certified Nursing Assistant',
  'Chief Electrician',
  'Chief Projectionist',
  'Child Protective Services Social Worker',
  'Childcare Aide',
  'Chopper Feeder',
  'Cigar Roller',
  'City Letter Carrier',
  'Civil Engineering Professor',
  'Classroom Aide',
  'Clinical Audiologist',
  'Clinical Psychiatrist',
  'Comedian',
  'Command And Control',
  'Commercial Art Instructor',
  'Compensation Analyst',
  'Composition Roofer',
  'Computational Theory Scientist',
  'Computer Applications Developer',
  'Computer Programmer',
  'Computer Repair Instructor',
  'Correctional Officer Sergeant',
  'Cranberry Bog Supervisor',
  'Credit Checker',
  'Cruise Director',
  'Customer Support Representative',
  'Defense Attorney',
  'Developer',
  'Digital Proofing and Platemaker',
  'Director of Strategic Sourcing',
  'Display Advertising Sales Representative',
  'Drama Therapist',
  'Drywall Hanger',
  'Drywall Installer',
  'E-Learning Manager',
  'Econometrics Professor',
  'Educational Audiologist',
  'Electro Plater',
  'Electronic Drafter',
  'Embryology Professor',
  'Executive Secretary',
  'Ferryboat Captain',
  'Fire Sprinkler Installer',
  'Flight Data Technician',
  'Flight Steward',
  'Floor Refinisher',
  'Floor Sander',
  'Foil Stamp Operator',
  'Food Chemist',
  'Food Technologist',
  'Forest Ecology Professor',
  'Forest Fire Officer',
  'Gambling Supervisor',
  'Gas Compressor Operator',
  'Gasoline Pump Installer',
  'Gastroenterology Professor',
  'Gem Cutter',
  'General Contractor',
  'General Superintendent',
  'Geological Engineer',
  'Geophysicist',
  'Geoscience Professor',
  'Global Engineering Manager',
  'Grounds Maintenance Worker',
  'HR Clerk',
  'Hairpiece Stylist',
  'Hatchery Worker',
  'Health Insurance Adjuster',
  'Healthcare Social Worker',
  'Human Performance Professor',
  'Hydroelectric Machinery Mechanic',
  'Independent Film Maker',
  'Indirect Fire Infantryman',
  'Induction Machine Setter',
  'Inhalation Therapist',
  'Instructional Aide',
  'Insurance Clerk',
  'Job Estimator',
  'Joint Terminal Attack Controller',
  'Kitchen Chef',
  'Knife Grinder',
  'LNG Plant Operator',
  'Laboratory Animal Caretaker',
  'Land Appraiser',
  'Land Management Forester',
  'Language Pathologist',
  'Legislator',
  'Leisure Studies Professor',
  'Lens Grinder and Polisher',
  'Lens Mounter',
  'License Inspector',
  'Licensed Esthetician',
  'Limousine Driver',
  'Machine Welder',
  'Marine Steamfitter',
  'Marketing Administrator',
  'Master of Ceremonies',
  'Mechanical Systems Engineer',
  'Medical Esthetician',
  'Missile Technician',
  'Missionary',
  'Mobile Home Servicer',
  'Mortar Mixer',
  'Mortarman',
  'Mortician Investigator',
  'Museum Curator',
  'Mystery Shopper',
  'Neuropsychiatrist',
  'Obstetrician/Gynecologist',
  'Operator',
  'Ornamental Ironworker Helper',
  'Orthopedic Cast Specialist',
  'Package Designer',
  'Parcel Post Clerk',
  'Parking Meter Collector',
  "Photographer's Model",
  'Pianist',
  'Posting Clerk',
  'Programmer',
  'Promotor(a)',
  'Public Health Training Assistant',
  'Public Health Veterinarian',
  'Radio Mechanic',
  'Rail Car Mechanic',
  'Railroad Engineer',
  'Real Property Evaluator',
  'Recruiting Manager',
  'Research Anthropologist',
  'Research Assistant',
  'Research Nurse',
  'Rock Dust Sprayer',
  'Rod Buster Helper',
  'Scale Attendant',
  'School Guidance Counselor',
  'School Social Worker',
  'Semi-Truck Driver',
  'Senior Developer',
  'Senior Financial Analyst',
  'Senior Sales Associate',
  'Shock-Absorption Floor Layer',
  'Signals Collection Technician',
  'Signals Intelligence/Electronic Warfare Chief',
  'Soil Conservation Technician',
  'Space And Missile Defense Operations',
  'Special Education Kindergarten Teacher',
  'Specialty Cook',
  'Stacker Operator',
  'Stained Glass Glazier Helper',
  'Statement Processor',
  'Sugar Presser',
  'Tactical Debriefer',
  'Technical Communicator',
  'Technical Writer',
  'Telecasting Engineer',
  'Telecommunications Line Installer',
  'Telegraph and Teletype Operator',
  'Terrazzo Installer',
  'Tile Designer',
  'Tobacco Buyer',
  'Tool and Die Designer',
  'Traditional Chinese Herbalist',
  'Tripe Cooker',
  'V/Stol Landing Signal Officer',
  'VP Sales',
  'Vault Teller',
  'Venipuncturist',
  'Wall Covering Installer',
  'Water Pump Installer',
  'Welder Fitter',
  'Wildland Fire Operations Specialist',
  'Wildlife Officer',
];

options.ProfilePictureURL = [
  'https://images.unsplash.com/photo-1552072805-2a9039d00e57?w=300',
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300',
  'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=300',
  'https://images.unsplash.com/photo-1549068106-b024baf5062d?w=300',
  'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=300',
  'https://images.unsplash.com/photo-1545912453-db258ca9b7b7?w=300',
  'https://images.unsplash.com/photo-1548946526-f69e2424cf45?w=300',
  'https://images.unsplash.com/photo-1547624643-3bf761b09502?w=300',
  'https://images.unsplash.com/photo-1542206395-9feb3edaa68d?w=300',
  'https://images.unsplash.com/photo-1575632312417-71da8ed4992d?w=300',
  'https://images.unsplash.com/photo-1548197001-ca380947be91?w=300',
  'https://images.unsplash.com/photo-1543080853-556086153871?w=300',
  'https://images.unsplash.com/photo-1547147607-6eab7b49f3ee?w=300',
  'https://images.unsplash.com/photo-1548535537-3cfaf1fc327c?w=300',
  'https://images.unsplash.com/photo-1562087926-662f8573327b?w=300',
  'https://images.unsplash.com/photo-1578611097442-e2e8a1e98c6a?w=300',
  'https://images.unsplash.com/photo-1541112324160-e8a425b58dac?w=300',
  'https://images.unsplash.com/photo-1563389494934-2af35e3b5844?w=300',
  'https://images.unsplash.com/photo-1578923813875-bf8b98f36b0f?w=300',
  'https://images.unsplash.com/photo-1584361853901-dd1904bb7987?w=300',
  'https://images.unsplash.com/photo-1568967729548-e3dbad3d37e0?w=300',
  'https://images.unsplash.com/photo-1550639524-a6f58345a2ca?w=300',
  'https://images.unsplash.com/photo-1560787313-5dff3307e257?w=300',
  'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?w=300',
  'https://images.unsplash.com/photo-1441786485319-5e0f0c092803?w=300',
  'https://images.unsplash.com/photo-1548946526-f69e2424cf45?w=300',
  'https://images.unsplash.com/photo-1508186225823-0963cf9ab0de?w=300',
  'https://images.unsplash.com/photo-1542131596-dea5384842c7?w=300',
  'https://images.unsplash.com/photo-1535485156230-020016c5b156?w=300',
  'https://images.unsplash.com/photo-1571816119553-df62a2eedf56?w=300',
  'https://images.unsplash.com/photo-1541112324160-e8a425b58dac?w=300',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300',
  'https://images.unsplash.com/photo-1549351512-c5e12b11e283?w=300',
  'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=300',
  'https://images.unsplash.com/photo-1548142813-c348350df52b?w=300',
  'https://images.unsplash.com/photo-1544348817-5f2cf14b88c8?w=300',
  'https://images.unsplash.com/photo-1584361853901-dd1904bb7987?w=300',
  'https://images.unsplash.com/photo-1549351236-caca0f174515?w=300',
  'https://images.unsplash.com/photo-1559750965-99605627de70?w=300',
  'https://images.unsplash.com/photo-1542206395-9feb3edaa68d?w=300',
  'https://images.unsplash.com/photo-1542973748-658653fb3d12?w=300',
  'https://images.unsplash.com/photo-1502768040783-423da5fd5fa0?w=300',
  'https://images.unsplash.com/photo-1529218164294-0d21b06ea831?w=300',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300',
  'https://images.unsplash.com/photo-1575779977884-f1069c45cbf4?w=300',
  'https://images.unsplash.com/photo-1542534759-05f6c34a9e63?w=300',
  'https://images.unsplash.com/photo-1542513217-0b0eedf7005d?w=300',
  'https://images.unsplash.com/photo-1546672741-d327539d5f13?w=300',
  'https://images.unsplash.com/photo-1541710430735-5fca14c95b00?w=300',
  'https://images.unsplash.com/photo-1548579143-4880bc8a3c08?w=300',
  'https://images.unsplash.com/photo-1551069613-1904dbdcda11?w=300',
  'https://images.unsplash.com/photo-1541271696563-3be2f555fc4e?w=300',
  'https://images.unsplash.com/photo-1575178573626-b9dac45921df?w=300',
  'https://images.unsplash.com/photo-1510227272981-87123e259b17?w=300',
  'https://images.unsplash.com/photo-1566411520896-01e7ca4726af?w=300',
];

options.TransactionStatus = ['Pending', 'Submitted', 'Confirmed', 'Failed'];

export enum DataType {
  ID = 'ID',
  FirstName = 'FIRST_NAME',
  LastName = 'LAST_NAME',
  FullName = 'FULL_NAME',
  Email = 'EMAIL',
  Domain = 'DOMAIN',
  Occupation = 'OCCUPATION',
  CompanyName = 'COMPANY_NAME',
  IBAN = 'IBAN',
  TransactionStatus = 'TRANSACTION_STATUS',
  ProfilePictureURL = 'PROFILE_PICTURE_URL',
  AmountOfMoney = 'AMOUNT_OF_MONEY',
  DateOfBirth = 'DATE_OF_BIRTH',
  PhoneNumber = 'PHONE_NUMBER',
  City = 'CITY',
  State = 'STATE',
  Country = 'COUNTRY',
  ZipCode = 'ZIP_CODE',
  Address = 'ADDRESS',
  BookTitle = 'BOOK_TITLE',
  BookTitlePrefix = 'BOOK_TITLE_PREFIX',
  BookTitleSuffix = 'BOOK_TITLE_SUFFIX',
  BookGenre = 'BOOK_GENRE',
  Price = 'PRICE',
}

export interface ValueCreator {
  createValue(seed: number): any;
}

const random = (array: string[], seed: number) => {
  setSeed(seed);
  return array[chance.integer({ min: 0, max: array.length - 1 })];
};

let idSequence = 1;
let chance = chanceImport.Chance(123);
const setSeed = (seed: number) => {
  chance = chanceImport.Chance(seed);
};

const combine = (seed: number, types: DataType[]) => {
  return types.map((dataType) => DataGenerators[dataType].createValue(seed)).join(' ');
};

export const DataGenerators: { [key in string]: ValueCreator } = {
  [DataType.ID]: { createValue: (_seed) => idSequence++ },
  [DataType.FullName]: {
    createValue: (seed) => combine(seed, [DataType.FirstName, DataType.LastName]),
  },
  [DataType.BookTitle]: {
    createValue: (seed) => combine(seed, [DataType.BookTitlePrefix, DataType.BookTitleSuffix]),
  },
  [DataType.Email]: {
    createValue: (seed) =>
      DataGenerators[DataType.FirstName].createValue(seed).toLowerCase() +
      '.' +
      DataGenerators[DataType.LastName].createValue(seed).toLowerCase() +
      '@' +
      DataGenerators[DataType.Domain].createValue(seed),
  },
  [DataType.AmountOfMoney]: {
    createValue: (seed) => {
      setSeed(seed);
      return chance.integer({ min: 1000, max: 100000 });
    },
  },
  [DataType.Price]: {
    createValue: (seed) => {
      setSeed(seed);
      return chance.floating({ min: 1, max: 500, fixed: 2 });
    },
  },
  [DataType.FirstName]: {
    createValue: (seed) => {
      setSeed(seed);
      return chance.first();
    },
  },
  [DataType.LastName]: {
    createValue: (seed) => {
      setSeed(seed);
      return chance.last();
    },
  },
  [DataType.CompanyName]: {
    createValue: (seed) => {
      setSeed(seed);
      return chance.company();
    },
  },
  [DataType.Domain]: {
    createValue: (seed) => {
      setSeed(seed);
      return chance.domain();
    },
  },
  [DataType.DateOfBirth]: {
    createValue: (seed) => {
      setSeed(seed);
      return chance.birthday().toISOString().split('T')[0];
    },
  },
  [DataType.PhoneNumber]: {
    createValue: (seed) => {
      setSeed(seed);
      return chance.phone();
    },
  },
  [DataType.City]: {
    createValue: (seed) => {
      setSeed(seed);
      return chance.city();
    },
  },
  [DataType.State]: {
    createValue: (seed) => {
      setSeed(seed);
      return chance.state({ full: true });
    },
  },
  [DataType.Country]: {
    createValue: (seed) => {
      setSeed(seed);
      return chance.country({ full: true });
    },
  },
  [DataType.ZipCode]: {
    createValue: (seed) => {
      setSeed(seed);
      return chance.zip();
    },
  },
  [DataType.Address]: {
    createValue: (seed) => {
      setSeed(seed);
      return chance.address();
    },
  },
  [DataType.BookGenre]: { createValue: (seed) => random(options.BookGenre, seed) },
  [DataType.BookTitlePrefix]: { createValue: (seed) => random(options.BookTitlePrefix, seed) },
  [DataType.BookTitleSuffix]: { createValue: (seed) => random(options.BookTitleSuffix, seed) },
  [DataType.IBAN]: { createValue: (seed) => random(options.IBAN, seed) },
  [DataType.Occupation]: { createValue: (seed) => random(options.Occupation, seed) },
  [DataType.ProfilePictureURL]: { createValue: (seed) => random(options.ProfilePictureURL, seed) },
  [DataType.TransactionStatus]: { createValue: (seed) => random(options.TransactionStatus, seed) },
};
