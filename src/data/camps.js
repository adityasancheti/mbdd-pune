const camps = [
  {
    name: "श्री आदिनाथ स्थानकवासी जैन भवन ट्रस्ट, पूना",
    address:
      "VARDHAMAN SANKRUTIK BHAVAN, NEAR AAI MATA MANDIR BIBWEWADI PUNE 411037",
    bloodBank: "ACHARYA ANANDRUSH BLOOD BANK",
    contacts: [
      { name: "BHUSHAN KOTECHA", phone: "9028133369" },
      { name: "SONESH SANCHETI", phone: "9850877708" },
    ],
    register:
      "https://eraktkosh.mohfw.gov.in/BLDAHIMS/bloodbank/portalDonorRegistrationNew.cnt?&campid=1151846&type=0",
    map: "https://maps.app.goo.gl/MzacQCCp3GB41KTu6",
  },
  {
    name: "TERAPANTH BHAVAN PUNE",
    address:
      "ACHARYA SHRI MAHASHRAMAN MARG, KASAT NAGAR, KONDHWA BUDRUK, PUNE - 411048",
    bloodBank:
      "Sarvodaya Samaj Vikas Sanstha, R.G Gholap Memorial Blood Centre Pune",
    contacts: [
      { name: "NAVEEN LALANI", phone: "9373535320" },
      { name: "SAURABH NAHATA", phone: "9373956279" },
    ],
    register: "Link here",
    map: "https://maps.app.goo.gl/ZRR345YU8JhbVMs26",
  },
  {
    name: "SHRI MAHAVIR JAIN VIDYALAYA",
    address:
      "SMJV, AGARKAR RD, NEXT TO BMCC ROAD, DECCAN GYMKHANA, PUNE - 411004",
    bloodBank: "POONA HOSPITAL Rakesh Jain Memorial Blood Centre",
    contacts: [
      { name: "BHUSHAN CHORDIYA", phone: "8007793203" },
      { name: "RACHIT LALANI", phone: "8010415436" },
    ],
    register:
      "https://eraktkosh.mohfw.gov.in/BLDAHIMS/bloodbank/portalDonorRegistrationNew.cnt?&campid=1151857&type=0",
    map: "https://maps.app.goo.gl/xmEhKPG1wEsvZSqr5",
  },
  {
    name: "FIRODIA HOSTEL PUNE",
    address: "BMCC RD, DECCAN GYMKHANA, PUNE - 411004",
    bloodBank:
      "Konkan Mitra Mandal Medical TrustS Sahyadri Speaciality Hospital Blood Centre",
    contacts: [
      { name: "ANUJ CHORDIYA", phone: "9970790797" },
      { name: "VINIT DANGI", phone: "9175171377" },
    ],
    register:
      "https://eraktkosh.mohfw.gov.in/BLDAHIMS/bloodbank/portalDonorRegistrationNew.cnt?&campid=1152371&type=0",
    map: "https://maps.app.goo.gl/eJ9rHTYz1iT6U91X7",
  },
  {
    name: "TIMBER MARKET BHAVAN PUNE",
    address: "TIMBER MARKET PUNE 411042",
    bloodBank:
      "Sarvodaya Samaj Vikas Sanstha, R.G Gholap Memorial Blood Centre Pune",
    contacts: [
      { name: "HARSHAD SURANA", phone: "9028750466" },
      { name: "KAVISH BAFNA", phone: "8888800686" },
      { name: "SANYAM BAID", phone: "9977009905" },
    ],
    register: "Link here",
    map: "https://maps.app.goo.gl/EbfVfoYqyQzwVRhm6",
  },
  {
    name: "SIR PARASHURAMBHAU COLLEGE. S.P. COLLEGE. PUNE",
    address: "TILAK RD, LOKAMANYA NAGAR, PERUGATE, SADASHIV PETH, PUNE 411030",
    bloodBank: "Sasoon Blood Centre Pune",
    contacts: [
      { name: "ALOK J SURANA", phone: "9850818573" },
      { name: "ROSHAN CHORDIYA", phone: "9096349944" },
    ],
    register:
      "https://eraktkosh.mohfw.gov.in/BLDAHIMS/bloodbank/portalDonorRegistrationNew.cnt?&campid=1152207&type=0",
    map: "https://maps.app.goo.gl/92HcPBp9u4bYe32n7",
  },
  {
    name: "WADIA COLLEGE PUNE",
    address: "PRIN. V. K. JOAG PATH, BUND GARDEN RD, PUNE 411001",
    bloodBank: "Sasoon Blood Centre Pune",
    contacts: [{ name: "RAJESH BHANSALI", phone: "8805859836" }],
    register:
      "https://eraktkosh.mohfw.gov.in/BLDAHIMS/bloodbank/portalDonorRegistrationNew.cnt?&campid=1152209&type=0",
    map: "https://maps.app.goo.gl/fDFejKjKMd3pzXjw8",
  },
  {
    name: "MBDD GANGADHAM PUNE",
    address:
      "GANGA DHAM CHOWK, Amaron Pitstop - Chirag Auto, OPP. MEGHDOOT'S HOTEL, NEAR NATIONAL PUNJAB BANK PUNE 411037",
    bloodBank:
      "Sarvodaya Samaj Vikas Sanstha, R.G Gholap Memorial Blood Centre Pune",
    contacts: [{ name: "KALPESH OSTWAL", phone: "9552355500" }],
    register: "Link here",
    map: "https://maps.app.goo.gl/PbsPHB7pHsRZh3vP9",
  },
  {
    name: "Samaj Bhushan Baburao alias Appasaheb Jedhe Arts, Commerce & Science College, Pune",
    address: "Sathe Colony, Shukrawar Peth, Pune, Maharashtra 411002",
    bloodBank: "KEM",
    contacts: [
      { name: "Sumit Kothari", phone: "9028633444" },
      { name: "Mudit Kothari", phone: "8446969583" },
    ],
    register: "Link here",
    map: "https://maps.app.goo.gl/1W13b3fYLJmLQ79P6",
  },
  {
    name: "ABBOTT HEALTHCARE PVT. LTD. WAKADEWADI PUNE",
    address:
      "OFFICE NO. 3, 2ND FLOOR, TARA HEIGHTS BUILDING, BEHIND SBI BRANCH OFFICE, WAKADEWADI, PUNE - 411003",
    bloodBank:
      "Sarvodaya Samaj Vikas Sanstha, R.G Gholap Memorial Blood Centre Pune",
    contacts: [
      { name: "ANAND GANDHI", phone: "9890934235" },
      { name: "DEEPAK BHANSALI", phone: "9836253339" },
    ],
    register: "Link here",
    map: "https://maps.app.goo.gl/Z9CNtxmYxLeUtta4A",
  },
];

export default camps;
