/*
  JERES BILER TIL SALG
  ====================
  Ret i denne fil, når I får nye biler eller sælger en.

  - Ny bil:     Kopiér en blok fra { til }, sæt den ind og ret tallene. Hver bil skal have sit eget "id".
  - Solgt bil:  Skriv  solgt: true  (så står den som "Solgt") – eller slet hele blokken.
  - Billeder:   Læg billederne i mappen assets/biler/ og skriv filnavnene under "billeder".
                Det første billede bruges på listen. Ingen billeder = "Billeder kommer snart".
  - eksempel: true  viser et "Eksempel"-mærke. SLET de eksempelbiler, der ikke er jeres, før siden går online.
*/
window.CARS = [
  {
    id: "bmw-m4-competition",
    maerke: "BMW",
    model: "M4",
    variant: "3.0 Competition aut.",
    aar: 2022,
    km: 28000,
    pris: 789900,
    braendstof: "Benzin",
    gear: "Automatisk",
    hk: 510,
    farve: "Grå metal",
    billeder: ["assets/biler/bmw-m4-1.jpg", "assets/biler/bmw-m4-2.jpg", "assets/biler/bmw-m4-3.jpg", "assets/biler/bmw-m4-4.jpg", "assets/biler/bmw-m4-5.jpg"],
    beskrivelse: "Velholdt BMW M4 Competition med fuld servicehistorik.\nBilen er gennemgået på vores eget værksted og står klar til levering.",
    udstyr: ["Laser-forlygter", "Carbon-tag", "M-sportssæder", "Harman Kardon lyd", "Head-up display", "Adaptiv fartpilot", "Parkeringskamera", "Trådløs opladning"],
    eksempel: true
  },
  {
    id: "vw-golf-15-etsi",
    maerke: "VW",
    model: "Golf",
    variant: "1.5 eTSI Life DSG",
    aar: 2021,
    km: 54000,
    pris: 219900,
    braendstof: "Benzin",
    gear: "Automatisk",
    hk: 150,
    farve: "Hvid",
    billeder: [],
    beskrivelse: "Økonomisk og veludstyret Golf med automatgear.",
    udstyr: ["Digitalt cockpit", "Apple CarPlay / Android Auto", "Adaptiv fartpilot", "Parkeringssensorer for og bag", "LED-forlygter"],
    eksempel: true
  },
  {
    id: "toyota-yaris-hybrid",
    maerke: "Toyota",
    model: "Yaris",
    variant: "1.5 Hybrid H3 e-CVT",
    aar: 2020,
    km: 61000,
    pris: 169900,
    braendstof: "Hybrid",
    gear: "Automatisk",
    hk: 116,
    farve: "Rød",
    billeder: [],
    beskrivelse: "Sparsommelig hybrid – perfekt til byen.",
    udstyr: ["Bakkamera", "Klimaanlæg", "Apple CarPlay / Android Auto", "Vognbaneassistent"],
    eksempel: true
  },
  {
    id: "skoda-octavia-combi-20-tdi",
    maerke: "Skoda",
    model: "Octavia Combi",
    variant: "2.0 TDI Style",
    aar: 2019,
    km: 112000,
    pris: 189900,
    braendstof: "Diesel",
    gear: "Manuel",
    hk: 150,
    farve: "Sort metal",
    billeder: [],
    beskrivelse: "Rummelig stationcar med træk – god til familien.",
    udstyr: ["Anhængertræk", "Navigation", "Opvarmede forsæder", "Fartpilot", "Parkeringssensorer"],
    eksempel: true
  },
  {
    id: "tesla-model-3-long-range",
    maerke: "Tesla",
    model: "Model 3",
    variant: "Long Range AWD",
    aar: 2021,
    km: 78000,
    pris: 259900,
    braendstof: "El",
    gear: "Automatisk",
    hk: 440,
    farve: "Blå metal",
    billeder: [],
    beskrivelse: "Firehjulstræk og lang rækkevidde.",
    udstyr: ["Autopilot", "Panoramatag", "Opvarmede sæder for og bag", "Premium lyd", "Varmepumpe"],
    eksempel: true
  },
  {
    id: "peugeot-208-12-puretech",
    maerke: "Peugeot",
    model: "208",
    variant: "1.2 PureTech Active",
    aar: 2019,
    km: 88000,
    pris: 109900,
    braendstof: "Benzin",
    gear: "Manuel",
    hk: 82,
    farve: "Sølv metal",
    billeder: [],
    beskrivelse: "Billig i drift og nem at parkere.",
    udstyr: ["Klimaanlæg", "Bluetooth", "Fartpilot", "Parkeringssensorer bag"],
    eksempel: true
  }
];
