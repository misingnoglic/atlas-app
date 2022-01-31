const realData = {
  group1: {
    group10: [],
    group11: [
      {
        phenotype: "Nonspecific findings on examination of blood",
        pval: 3.605605668155688e-7,
        coeff: -3.009468039025687,
        cint: 1.1591309742061475,
      },
    ],
    group12: [
      {
        phenotype: "Encephalopathy, not elsewhere classified",
        pval: 0.0002775045992638,
        coeff: -1.789405735162646,
        cint: 0.9647165185977016,
      },
      {
        phenotype: "Respiratory failure",
        pval: 0.0002190542698133,
        coeff: -1.3097117895384232,
        cint: 0.694538189246813,
      },
    ],
    group13: [],
    group15: [
      {
        phenotype: "Skull and face fracture and other intercranial injury",
        pval: 6.480291947097681e-5,
        coeff: -1.8764785457637467,
        cint: 0.920699992805365,
      },
      {
        phenotype: "Coronary atherosclerosis",
        pval: 0.0003448216605942,
        coeff: -1.0354594412261815,
        cint: 0.5670367749418315,
      },
      {
        phenotype: "Abnormal function study of cardiovascular system",
        pval: 0.0003567692719299,
        coeff: -1.007927991702883,
        cint: 0.5533379484573548,
      },
      {
        phenotype: "Pain in limb",
        pval: 0.00010869093688,
        coeff: -0.9390747458671812,
        cint: 0.4755552310308495,
      },
    ],
    group16: [],
    group17: [],
    group18: [],
    group19: [
      {
        phenotype: "Constipation",
        pval: 3.9671761676698005e-5,
        coeff: -2.037782226282204,
        cint: 0.9719171356591492,
      },
      {
        phenotype:
          "Complications of cardiac/vascular device, implant, and graft",
        pval: 0.0003707014126642,
        coeff: -1.7522960665634546,
        cint: 0.9647001080021348,
      },
    ],
    group2: [
      {
        phenotype: "Hypertensive chronic kidney disease",
        pval: 1.205709572143065e-9,
        coeff: -1.9118894544100693,
        cint: 0.6163739110251609,
      },
      {
        phenotype: "Type 2 diabetes with renal manifestations",
        pval: 2.95657997157653e-7,
        coeff: -1.7676752278553711,
        cint: 0.6758581119590916,
      },
      {
        phenotype: "Renal dialysis",
        pval: 1.0136813410919016e-7,
        coeff: -1.6674802087778446,
        cint: 0.6138326801453955,
      },
      {
        phenotype: "Liver replaced by transplant",
        pval: 1.9668493177497566e-17,
        coeff: -1.6191524220098086,
        cint: 0.3735380843425488,
      },
      {
        phenotype: "Malignant neoplasm of liver, primary",
        pval: 7.851807799835806e-6,
        coeff: -1.6054430156115256,
        cint: 0.704068025547059,
      },
      {
        phenotype: "Atherosclerosis of the extremities",
        pval: 6.835717657241603e-5,
        coeff: -1.481124985481303,
        cint: 0.7290308364093057,
      },
      {
        phenotype: "Other and unspecified coagulation defects",
        pval: 7.537989998691275e-5,
        coeff: -1.46414009785985,
        cint: 0.7249122915203245,
      },
      {
        phenotype: "Renal failure NOS",
        pval: 0.0001144813261769,
        coeff: -1.443823031419992,
        cint: 0.7335656226114375,
      },
      {
        phenotype: "Alcoholic liver damage",
        pval: 6.845114037427683e-12,
        coeff: -1.3642316966301404,
        cint: 0.3897249296660843,
      },
      {
        phenotype: "Kidney replaced by transpant",
        pval: 1.163259769365605e-11,
        coeff: -1.3389402244110338,
        cint: 0.3867928802725262,
      },
      {
        phenotype: "Anemia of chronic disease",
        pval: 0.0001602013155752,
        coeff: -1.333822119463494,
        cint: 0.6925701035651046,
      },
      {
        phenotype: "Chronic renal failure [CKD]",
        pval: 1.2156579833328896e-9,
        coeff: -1.3111568748865374,
        cint: 0.4227954234536226,
      },
      {
        phenotype: "Herpes zoster",
        pval: 2.6099852909843804e-5,
        coeff: -1.3032957213054903,
        cint: 0.6074598478646627,
      },
      {
        phenotype: "Disorders involving the immune mechanism",
        pval: 1.6898180394694098e-12,
        coeff: -1.2734439998889608,
        cint: 0.3536304198656257,
      },
      {
        phenotype: "Viral pneumonia",
        pval: 8.087998813895619e-9,
        coeff: -1.2701999286959875,
        cint: 0.4317171387683043,
      },
      {
        phenotype: "Liver abscess and sequelae of chronic liver disease",
        pval: 3.137557958360299e-14,
        coeff: -1.208010291687469,
        cint: 0.3118409048906854,
      },
      {
        phenotype: "Hyperpotassemia",
        pval: 8.698402442205031e-15,
        coeff: -1.1781581435682091,
        cint: 0.2976868794960619,
      },
      {
        phenotype: "Type 2 diabetes",
        pval: 9.880976557568269e-14,
        coeff: -1.0975744580361428,
        cint: 0.2890441602194411,
      },
      {
        phenotype: "Hypertensive heart and/or renal disease",
        pval: 3.9289946257234065e-8,
        coeff: -1.0757493894554235,
        cint: 0.3837686041192361,
      },
      {
        phenotype: "Disorders of calcium/phosphorus metabolism",
        pval: 0.0002579826953528,
        coeff: -1.0756772982106568,
        cint: 0.5769490928080845,
      },
      {
        phenotype: "Viral Enteritis",
        pval: 0.0017181704229319,
        coeff: -1.0052018752542131,
        cint: 0.6284273377212475,
      },
      {
        phenotype: "Cardiogenic shock",
        pval: 8.075243012379227e-5,
        coeff: -1.0042085251260695,
        cint: 0.4992731268182242,
      },
      {
        phenotype: "Other chronic ischemic heart disease, unspecified",
        pval: 0.0031080772772824,
        coeff: -0.9972903067698016,
        cint: 0.6610611387011859,
      },
      {
        phenotype: "Fluid overload",
        pval: 1.1266230152092671e-5,
        coeff: -0.9916330442731552,
        cint: 0.442592000455507,
      },
      {
        phenotype: "Other abnormal glucose",
        pval: 3.354162370976496e-7,
        coeff: -0.9475969910956468,
        cint: 0.3639982868871765,
      },
      {
        phenotype: "Hyposmolality and/or hyponatremia",
        pval: 2.031675588984601e-11,
        coeff: -0.9337544345376052,
        cint: 0.2730010702843873,
      },
      {
        phenotype: "Paralytic ileus",
        pval: 0.0120498320580644,
        coeff: -0.9335823823595618,
        cint: 0.7288012282415429,
      },
      {
        phenotype: "Disorders of bilirubin excretion",
        pval: 0.012109860637307,
        coeff: -0.9233177758053032,
        cint: 0.7212923272173397,
      },
      {
        phenotype: "Regional enteritis",
        pval: 0.0024786705717751,
        coeff: 1.1509782108367068,
        cint: 0.745514091593847,
      },
      {
        phenotype: "Open wounds of extremities",
        pval: 0.0033662822161396,
        coeff: 1.216738470311422,
        cint: 0.8133167337113715,
      },
    ],
    group3: [
      {
        phenotype: "Skull and face fracture and other intercranial injury",
        pval: 4.261974636559398e-5,
        coeff: -1.080233599134913,
        cint: 0.5173034491564124,
      },
      {
        phenotype: "Pancreatic cancer",
        pval: 0.0011824068579605,
        coeff: -0.9267849436659776,
        cint: 0.560103137324565,
      },
      {
        phenotype: "Other open wound of head and face",
        pval: 0.0012336370662168,
        coeff: -0.5344953018464081,
        cint: 0.3242327062242974,
      },
      {
        phenotype: "Injury, NOS",
        pval: 0.0004413004225095,
        coeff: -0.3258343089069624,
        cint: 0.1817334142145358,
      },
      {
        phenotype: "Liver abscess and sequelae of chronic liver disease",
        pval: 0.000429011477309,
        coeff: 1.251519427744307,
        cint: 0.6965467698382389,
      },
      {
        phenotype: "Lung transplant",
        pval: 0.0002512674795882,
        coeff: 1.4640851742785057,
        cint: 0.7838246273894308,
      },
    ],
    group4: [
      {
        phenotype: "Hypertensive chronic kidney disease",
        pval: 3.4997580323847855e-10,
        coeff: -2.231094772059653,
        cint: 0.6968878499216489,
      },
      {
        phenotype: "Renal dialysis",
        pval: 3.179550107306344e-7,
        coeff: -1.8967925059183297,
        cint: 0.7271704311430078,
      },
      {
        phenotype: "Chronic renal failure [CKD]",
        pval: 6.357499011960369e-11,
        coeff: -1.6686223918423555,
        cint: 0.5004436262589937,
      },
      {
        phenotype: "Primary/intrinsic cardiomyopathies",
        pval: 9.364964847074597e-8,
        coeff: -1.398106105741472,
        cint: 0.5132844436871289,
      },
      {
        phenotype: "Hypertensive heart and/or renal disease",
        pval: 8.136075554173092e-7,
        coeff: -1.180234370253109,
        cint: 0.4690149607605962,
      },
      {
        phenotype: "Hyperpotassemia",
        pval: 4.6416574997641215e-9,
        coeff: -1.1654754898825122,
        cint: 0.3898415287593748,
      },
      {
        phenotype: "Unspecified osteomyelitis",
        pval: 0.0026778356028243,
        coeff: -1.131767389525415,
        cint: 0.7387953547515806,
      },
      {
        phenotype: "Pulmonary heart disease",
        pval: 3.286676856456472e-7,
        coeff: -1.094450036605456,
        cint: 0.420092125923708,
      },
      {
        phenotype: "Myalgia and myositis unspecified",
        pval: 0.0006436503609117,
        coeff: -1.0754975344685616,
        cint: 0.6177065613095791,
      },
      {
        phenotype: "Kidney replaced by transpant",
        pval: 0.0001706690717802,
        coeff: -1.062848391022904,
        cint: 0.5541914634590506,
      },
      {
        phenotype: "Heart transplant/surgery",
        pval: 0.0004562425109212,
        coeff: -1.05738048418158,
        cint: 0.5912416178606343,
      },
      {
        phenotype: "Cardiogenic shock",
        pval: 0.0023681172898762,
        coeff: -1.0391454848542154,
        cint: 0.6700285774597212,
      },
      {
        phenotype: "Heart failure NOS",
        pval: 3.7769286096381217e-6,
        coeff: -1.00110376321796,
        cint: 0.4244002435016847,
      },
      {
        phenotype:
          "Complications of cardiac/vascular device, implant, and graft",
        pval: 3.230449239407005e-7,
        coeff: -0.9987372627850266,
        cint: 0.383109175644948,
      },
      {
        phenotype:
          "Iron deficiency anemias, unspecified or not due to blood loss",
        pval: 0.0004150221353797,
        coeff: -0.9568164513249664,
        cint: 0.5312022331127695,
      },
      {
        phenotype: "Precordial pain",
        pval: 0.0070855621595136,
        coeff: -0.928288110509502,
        cint: 0.6756587968537519,
      },
      {
        phenotype: "Myocardial infarction",
        pval: 2.143057309183312e-6,
        coeff: -0.924706462932008,
        cint: 0.3824059245733153,
      },
      {
        phenotype: "Fluid overload",
        pval: 0.0020948632573572,
        coeff: -0.9212042677979962,
        cint: 0.5868878981018003,
      },
      {
        phenotype: "Viral infection",
        pval: 0.0005334150178045,
        coeff: -0.9080504554177008,
        cint: 0.5138740614588071,
      },
      {
        phenotype: "Essential hypertension",
        pval: 1.0869981196203642e-9,
        coeff: -0.8773470486314139,
        cint: 0.2820776813960979,
      },
      {
        phenotype: "Intestinal infection due to C. difficile",
        pval: 0.0021568119620529,
        coeff: -0.8696564653001913,
        cint: 0.5556184840587335,
      },
      {
        phenotype: "Type 2 diabetes",
        pval: 6.665003123449098e-5,
        coeff: -0.8330176672393614,
        cint: 0.4094057033233811,
      },
      {
        phenotype: "Edema",
        pval: 0.0001998662290666,
        coeff: -0.8140375945433432,
        cint: 0.4289875739556709,
      },
      {
        phenotype: "Acute renal failure",
        pval: 1.2223117640621274e-10,
        coeff: -0.7577617639710369,
        cint: 0.230743036047009,
      },
      {
        phenotype: "Other anemias",
        pval: 5.6649749225788064e-8,
        coeff: -0.7571033478885325,
        cint: 0.2733242344342672,
      },
      {
        phenotype: "Other abnormal glucose",
        pval: 0.0053657542272645,
        coeff: -0.7489891390269907,
        cint: 0.5272552660069862,
      },
      {
        phenotype: "Symptoms of the muscles",
        pval: 0.0092834562843138,
        coeff: -0.7469676402245442,
        cint: 0.5627776513103602,
      },
      {
        phenotype: "Abnormal function study of cardiovascular system",
        pval: 8.181779587175248e-6,
        coeff: -0.7411188072705803,
        cint: 0.3256603736134251,
      },
      {
        phenotype: "Hemorrhage of rectum and anus",
        pval: 0.0032391824171314,
        coeff: -0.7295802726375549,
        cint: 0.48570418540205,
      },
      {
        phenotype: "Acute cystitis",
        pval: 0.0011044044600982,
        coeff: -0.6643242211392987,
        cint: 0.3990982292893635,
      },
    ],
    group5: [],
    group6: [
      {
        phenotype: "Precordial pain",
        pval: 1.849351589047824e-5,
        coeff: -1.7726964545125168,
        cint: 0.81133640230366,
      },
      {
        phenotype: "Viral pneumonia",
        pval: 0.0006218687686478,
        coeff: -1.467629561304847,
        cint: 0.8406170019020087,
      },
      {
        phenotype: "Rash and other nonspecific skin eruption",
        pval: 0.0005376492250286,
        coeff: -1.07147777910179,
        cint: 0.606731833640306,
      },
      {
        phenotype: "Coronary atherosclerosis",
        pval: 0.0002161293399743,
        coeff: -1.0507186061099725,
        cint: 0.5566803861672625,
      },
      {
        phenotype: "Essential hypertension",
        pval: 0.0005423856403961,
        coeff: -0.8711596353027865,
        cint: 0.4936370994406035,
      },
    ],
    group7: [],
    group8: [
      {
        phenotype: "Liver replaced by transplant",
        pval: 0.0001617452345362,
        coeff: -1.51056835444917,
        cint: 0.7848406214780073,
      },
    ],
    group9: [
      {
        phenotype: "Heart transplant/surgery",
        pval: 1.7424803087807977e-6,
        coeff: -1.8404324761270303,
        cint: 0.7544503486052183,
      },
      {
        phenotype: "Cardiogenic shock",
        pval: 5.668517402989829e-5,
        coeff: -1.7448171205990712,
        cint: 0.8493809641675025,
      },
      {
        phenotype: "Cancer of bronchus; lung",
        pval: 0.0006297632583857,
        coeff: -1.7246989240655473,
        cint: 0.9888507445891784,
      },
      {
        phenotype: "Respiratory failure",
        pval: 0.0007280583398562,
        coeff: -0.7471261996438305,
        cint: 0.4333920804774327,
      },
    ],
  },
  group2: {
    group10: [],
    group11: [],
    group12: [],
    group13: [],
    group15: [
      {
        phenotype: "Acute renal failure",
        pval: 0.0001356267676553,
        coeff: 1.6253362610573363,
        cint: 0.8347986945239061,
      },
    ],
    group16: [],
    group17: [],
    group18: [],
    group19: [],
    group3: [
      {
        phenotype: "Regional enteritis",
        pval: 0.0001306541753978,
        coeff: -1.6050961454640782,
        cint: 0.8224177444410459,
      },
      {
        phenotype: "Other signs and symptoms involving emotional state",
        pval: 4.9169344711695565e-5,
        coeff: -1.2537050456318697,
        cint: 0.6052942782304458,
      },
      {
        phenotype: "Pancreatic cancer",
        pval: 0.0115343388878442,
        coeff: -1.1943265871814317,
        cint: 0.9266680368578492,
      },
      {
        phenotype: "Benign neoplasm of colon",
        pval: 0.014021922302303,
        coeff: 1.021596443574308,
        cint: 0.8150328421293833,
      },
      {
        phenotype: "Heart failure NOS",
        pval: 5.690317847908692e-6,
        coeff: 1.0438884090323093,
        cint: 0.4508974469265123,
      },
      {
        phenotype: "Chronic renal failure [CKD]",
        pval: 7.897842756010776e-5,
        coeff: 1.060535339440308,
        cint: 0.5265667137769308,
      },
      {
        phenotype: "Fluid overload",
        pval: 0.0006371353466631,
        coeff: 1.0661320122606852,
        cint: 0.6118305531427168,
      },
      {
        phenotype: "Other disorders of stomach and duodenum",
        pval: 0.0017649450784792,
        coeff: 1.100730105450998,
        cint: 0.6898849555498539,
      },
      {
        phenotype: "Viral pneumonia",
        pval: 8.869339933150197e-5,
        coeff: 1.1307856456914165,
        cint: 0.5654390909655763,
      },
      {
        phenotype: "Disorders of calcium/phosphorus metabolism",
        pval: 0.0044801980070116,
        coeff: 1.1879157798544089,
        cint: 0.8191766983282145,
      },
      {
        phenotype: "Hyposmolality and/or hyponatremia",
        pval: 2.1728963803272478e-10,
        coeff: 1.2345446444872437,
        cint: 0.3811336017651014,
      },
      {
        phenotype: "Calculus of bile duct",
        pval: 0.0008055500331354,
        coeff: 1.2408911785731664,
        cint: 0.7258097942556189,
      },
      {
        phenotype: "Shock",
        pval: 5.470731702664887e-5,
        coeff: 1.2806951917529206,
        cint: 0.6221554299816987,
      },
      {
        phenotype: "Primary/intrinsic cardiomyopathies",
        pval: 0.0004431046570636,
        coeff: 1.289181712717666,
        cint: 0.7192603044202303,
      },
      {
        phenotype: "Hypertensive chronic kidney disease",
        pval: 0.0001716569874053,
        coeff: 1.329439303859732,
        cint: 0.6934640591889542,
      },
      {
        phenotype: "Type 2 diabetes",
        pval: 3.831963319334175e-10,
        coeff: 1.3455371899774282,
        cint: 0.4212300040944203,
      },
      {
        phenotype: "Other disorders of liver",
        pval: 0.0044310113302047,
        coeff: 1.356226449016416,
        cint: 0.9340863156524376,
      },
      {
        phenotype: "Hepatitis NOS",
        pval: 0.0036177448773935,
        coeff: 1.362519074329996,
        cint: 0.9177878292455104,
      },
      {
        phenotype: "Renal dialysis",
        pval: 0.0004105554393013,
        coeff: 1.4337387853098085,
        cint: 0.7953337338391452,
      },
      {
        phenotype: "Immunity deficiency",
        pval: 0.0008657258969388,
        coeff: 1.444563936450742,
        cint: 0.85001415154952,
      },
      {
        phenotype: "Other abnormal glucose",
        pval: 8.470477459576831e-7,
        coeff: 1.5106120218937449,
        cint: 0.6012638035582896,
      },
      {
        phenotype: "Disorders involving the immune mechanism",
        pval: 5.293335002231913e-9,
        coeff: 1.750114818467985,
        cint: 0.5875901425156884,
      },
      {
        phenotype: "Lung transplant",
        pval: 2.15347735912045e-5,
        coeff: 1.8059671929811247,
        cint: 0.8331771229659862,
      },
      {
        phenotype: "Type 2 diabetes with renal manifestations",
        pval: 5.246529587092627e-5,
        coeff: 2.031207452792063,
        cint: 0.9843558102411698,
      },
      {
        phenotype: "Kidney replaced by transpant",
        pval: 1.363937502002625e-8,
        coeff: 2.1624104877272963,
        cint: 0.7464519971154944,
      },
      {
        phenotype: "Liver replaced by transplant",
        pval: 6.671431576912817e-11,
        coeff: 2.242030537482312,
        cint: 0.6731603532367327,
      },
      {
        phenotype: "Heart transplant/surgery",
        pval: 0.0001289310683953,
        coeff: 2.3262185728468907,
        cint: 1.1908880011060852,
      },
      {
        phenotype: "Liver abscess and sequelae of chronic liver disease",
        pval: 2.112559409360553e-13,
        coeff: 2.624463301149464,
        cint: 0.7006568875561321,
      },
      {
        phenotype: "Herpes zoster",
        pval: 0.0002180517774653,
        coeff: 2.749261951241171,
        cint: 1.4574700503991398,
      },
      {
        phenotype: "Alcoholic liver damage",
        pval: 7.345159806467226e-6,
        coeff: 4.5392702804118255,
        cint: 1.984373545743052,
      },
    ],
    group4: [
      {
        phenotype: "Pulmonary heart disease",
        pval: 1.087536644110678e-6,
        coeff: -1.2193943398331153,
        cint: 0.490240050270939,
      },
      {
        phenotype: "Pyelonephritis",
        pval: 0.000890144712979,
        coeff: 0.9119208983172906,
        cint: 0.5378465144198845,
      },
      {
        phenotype: "Hyposmolality and/or hyponatremia",
        pval: 0.0003388909794247,
        coeff: 0.960894534536346,
        cint: 0.5255382014218749,
      },
      {
        phenotype: "Liver replaced by transplant",
        pval: 0.0001753476527954,
        coeff: 1.4030374639600427,
        cint: 0.7328937137215967,
      },
      {
        phenotype: "Liver abscess and sequelae of chronic liver disease",
        pval: 1.009472788123318e-5,
        coeff: 2.6019483929578757,
        cint: 1.1550554846927843,
      },
      {
        phenotype: "Alcoholic liver damage",
        pval: 0.0003098539288144,
        coeff: 2.605127292596549,
        cint: 1.4156001808525809,
      },
    ],
    group5: [
      {
        phenotype: "Abdominal pain",
        pval: 0.0002904107831871,
        coeff: 0.6618662278772481,
        cint: 0.3579853543995183,
      },
      {
        phenotype: "Septicemia",
        pval: 4.920203528335778e-5,
        coeff: 0.7753804998759397,
        cint: 0.3743714088940127,
      },
      {
        phenotype: "Respiratory failure",
        pval: 0.000880936800323,
        coeff: 0.910127340065244,
        cint: 0.5363207490009109,
      },
      {
        phenotype: "Other anemias",
        pval: 0.0008735309623359,
        coeff: 0.966878316139872,
        cint: 0.5693603276366387,
      },
      {
        phenotype: "Urinary tract infection",
        pval: 0.0013798004468254,
        coeff: 1.1347649897225551,
        cint: 0.6952820620733432,
      },
      {
        phenotype: "Acute renal failure",
        pval: 2.227449142604149e-7,
        coeff: 1.2415477000975277,
        cint: 0.4698315529640173,
      },
      {
        phenotype: "Hyperpotassemia",
        pval: 0.0006915463061265,
        coeff: 1.7605857269136802,
        cint: 1.0170283696138989,
      },
      {
        phenotype: "Alcoholic liver damage",
        pval: 0.0028559202088369,
        coeff: 2.1699473958895394,
        cint: 1.4258310998674415,
      },
    ],
    group6: [],
    group7: [],
    group8: [],
    group9: [],
  },
  group3: {
    group10: [],
    group11: [
      {
        phenotype: "Essential hypertension",
        pval: 0.0002858277326783,
        coeff: -1.644966190380083,
        cint: 0.8887092404329597,
      },
    ],
    group12: [
      {
        phenotype: "Encephalopathy, not elsewhere classified",
        pval: 0.0002543371663897,
        coeff: -1.9072318896267488,
        cint: 1.0219399606401736,
      },
      {
        phenotype: "Respiratory failure",
        pval: 0.0002133425584892,
        coeff: -1.368797073372528,
        cint: 0.7245563821474861,
      },
    ],
    group13: [
      {
        phenotype: "Essential hypertension",
        pval: 0.0010545422493448,
        coeff: -1.7338557645293386,
        cint: 1.037471167578791,
      },
      {
        phenotype: "Fever of unknown origin",
        pval: 0.0013080728335428,
        coeff: -1.1848695003800271,
        cint: 0.7225124685517921,
      },
    ],
    group15: [
      {
        phenotype: "Abnormal function study of cardiovascular system",
        pval: 0.0004392914916896,
        coeff: -1.0494978400693724,
        cint: 0.5851534721302798,
      },
      {
        phenotype: "Coronary atherosclerosis",
        pval: 0.0008419582773978,
        coeff: -0.9987077316526406,
        cint: 0.5862995844056914,
      },
    ],
    group16: [],
    group17: [],
    group18: [],
    group19: [],
    group4: [
      {
        phenotype: "Primary/intrinsic cardiomyopathies",
        pval: 2.654034602797023e-6,
        coeff: -1.8309287844153357,
        cint: 0.7641848614496229,
      },
      {
        phenotype: "Hypertensive chronic kidney disease",
        pval: 9.518567063343056e-5,
        coeff: -1.5190317473900157,
        cint: 0.7628985293654043,
      },
      {
        phenotype: "Chronic renal failure [CKD]",
        pval: 3.325706325115773e-6,
        coeff: -1.4101170069173978,
        cint: 0.5944114148529103,
      },
      {
        phenotype: "Pulmonary heart disease",
        pval: 4.189692855387353e-6,
        coeff: -1.294342179199944,
        cint: 0.5512832563449659,
      },
      {
        phenotype: "Heart failure NOS",
        pval: 3.588793664169186e-6,
        coeff: -1.234755333438141,
        cint: 0.5222572176752154,
      },
      {
        phenotype: "Circulatory disease NEC",
        pval: 0.0004265834818531,
        coeff: -1.2175549823811878,
        cint: 0.6773541077017429,
      },
      {
        phenotype: "Other abnormal glucose",
        pval: 0.001560564375621,
        coeff: -1.1583524340748568,
        cint: 0.7177365475048287,
      },
      {
        phenotype: "Edema",
        pval: 0.0001410430594454,
        coeff: -1.0877827626091805,
        cint: 0.5601232563070522,
      },
      {
        phenotype: "Type 2 diabetes",
        pval: 0.0001015332997492,
        coeff: -1.0243241351251169,
        cint: 0.5165142741088313,
      },
      {
        phenotype: "Fluid overload",
        pval: 0.0075176249881523,
        coeff: -0.994249630612566,
        cint: 0.7290286067095466,
      },
      {
        phenotype: "Hypertensive heart and/or renal disease",
        pval: 0.000342227956618,
        coeff: -0.9608685808685044,
        cint: 0.5258995412613051,
      },
      {
        phenotype: "Hyperpotassemia",
        pval: 2.508185659563338e-5,
        coeff: -0.9586907416906854,
        cint: 0.4458879339754646,
      },
      {
        phenotype: "Essential hypertension",
        pval: 3.8689313381309616e-8,
        coeff: -0.9379221262318777,
        cint: 0.3344338884788521,
      },
      {
        phenotype: "Acute posthemorrhagic anemia",
        pval: 9.5389567755221e-5,
        coeff: -0.928338720892712,
        cint: 0.4662985004472946,
      },
      {
        phenotype: "Viral infection",
        pval: 0.0072902241946331,
        coeff: -0.9142443153335628,
        cint: 0.667794929800154,
      },
      {
        phenotype: "Acute renal failure",
        pval: 1.2520705004234582e-10,
        coeff: -0.9043321599701531,
        cint: 0.2755310184971371,
      },
      {
        phenotype: "Intestinal infection due to C. difficile",
        pval: 0.010145990032235,
        coeff: -0.8907444016287589,
        cint: 0.6790950930275816,
      },
      {
        phenotype: "Myocardial infarction",
        pval: 9.20810612954046e-5,
        coeff: -0.879337596540243,
        cint: 0.4407216594928977,
      },
      {
        phenotype: "Hemorrhage of gastrointestinal tract",
        pval: 5.090007391645144e-5,
        coeff: -0.8698922287806499,
        cint: 0.4208259394724367,
      },
      {
        phenotype: "Other anemias",
        pval: 3.1633180766366775e-7,
        coeff: -0.8478970546868343,
        cint: 0.3249955553852515,
      },
      {
        phenotype:
          "Complications of cardiac/vascular device, implant, and graft",
        pval: 0.0011228514064232,
        coeff: -0.7576963205693379,
        cint: 0.4558487287890158,
      },
      {
        phenotype: "Blood in stool",
        pval: 0.0011428374174162,
        coeff: -0.7314351123939133,
        cint: 0.4407271477031405,
      },
      {
        phenotype: "Cough",
        pval: 0.0012120228433487,
        coeff: -0.6811751271244584,
        cint: 0.412566145129982,
      },
      {
        phenotype: "Abnormal function study of cardiovascular system",
        pval: 0.000521613572566,
        coeff: -0.6550414435289166,
        cint: 0.3700513032741829,
      },
      {
        phenotype: "Shortness of breath",
        pval: 2.763893706370514e-7,
        coeff: -0.5795602017056212,
        cint: 0.2210439644020658,
      },
      {
        phenotype: "Other abnormal blood chemistry",
        pval: 0.0051122583653389,
        coeff: -0.5370491039963544,
        cint: 0.3759444049552073,
      },
      {
        phenotype: "Other headache syndromes",
        pval: 0.0054826868556764,
        coeff: -0.4831393025014099,
        cint: 0.3409658852815135,
      },
      {
        phenotype: "Respiratory failure",
        pval: 0.0071400801248777,
        coeff: -0.4230488261439845,
        cint: 0.3082106736146066,
      },
      {
        phenotype: "Injury, NOS",
        pval: 0.0020333457938579,
        coeff: 0.5196508747118003,
        cint: 0.3301108595067669,
      },
      {
        phenotype: "Other open wound of head and face",
        pval: 0.0029125040053061,
        coeff: 1.2875016484585688,
        cint: 0.8477008341290879,
      },
    ],
    group5: [],
    group6: [
      {
        phenotype: "Rash and other nonspecific skin eruption",
        pval: 0.001315620325456,
        coeff: -1.142102319414574,
        cint: 0.6967919839046743,
      },
      {
        phenotype: "Coronary atherosclerosis",
        pval: 0.0008738781185509,
        coeff: -1.0154472370747918,
        cint: 0.5979807271656661,
      },
      {
        phenotype: "Essential hypertension",
        pval: 0.000337163009092,
        coeff: -0.9885961190080612,
        cint: 0.540487663251206,
      },
    ],
    group7: [],
    group8: [],
    group9: [
      {
        phenotype: "Congenital anomalies of great vessels",
        pval: 0.0012991521639855,
        coeff: -1.4877078529645504,
        cint: 0.9066238874596456,
      },
      {
        phenotype: "Heart failure NOS",
        pval: 0.0010902588881046,
        coeff: -1.3056244026909694,
        cint: 0.7834875327732371,
      },
      {
        phenotype: "Respiratory failure",
        pval: 0.0007411299524167,
        coeff: -0.7924874870177588,
        cint: 0.4603722270186089,
      },
    ],
  },
  group4: {
    group10: [],
    group11: [],
    group12: [],
    group13: [],
    group15: [
      {
        phenotype: "Acute renal failure",
        pval: 0.0001518150935926,
        coeff: 1.65249630424131,
        cint: 0.8550062339696829,
      },
    ],
    group16: [],
    group17: [],
    group18: [],
    group19: [],
    group5: [
      {
        phenotype: "Septicemia",
        pval: 0.0092794535173584,
        coeff: 0.568893593254451,
        cint: 0.4285893777235189,
      },
      {
        phenotype: "Shortness of breath",
        pval: 0.0001563456988974,
        coeff: 0.7388027236932808,
        cint: 0.3829981005957152,
      },
      {
        phenotype: "Respiratory failure",
        pval: 0.00313633483909,
        coeff: 0.8866330124609362,
        cint: 0.5882665980478158,
      },
      {
        phenotype: "Acute renal failure",
        pval: 0.0001385650693261,
        coeff: 0.9993947303849232,
        cint: 0.5140183237691303,
      },
      {
        phenotype: "Other anemias",
        pval: 0.0005835168066722,
        coeff: 1.078399237928926,
        cint: 0.6145751043085846,
      },
      {
        phenotype: "Pain in limb",
        pval: 0.0012176664001618,
        coeff: 1.0789359792396238,
        cint: 0.6537451958752452,
      },
      {
        phenotype: "Essential hypertension",
        pval: 0.0012252393517899,
        coeff: 1.0794132753839003,
        cint: 0.654392634497811,
      },
      {
        phenotype:
          "Complications of cardiac/vascular device, implant, and graft",
        pval: 0.0046414822445176,
        coeff: 1.547233936518274,
        cint: 1.0712158722556435,
      },
      {
        phenotype: "Hyperpotassemia",
        pval: 0.0033282480620444,
        coeff: 1.5971304491551042,
        cint: 1.06630336546263,
      },
    ],
    group6: [
      {
        phenotype: "Other anemias",
        pval: 0.0002386028575829,
        coeff: 1.5954519007080945,
        cint: 0.8510790645165796,
      },
    ],
    group7: [
      {
        phenotype: "Shortness of breath",
        pval: 0.0011483965637275,
        coeff: 0.8383215068010457,
        cint: 0.505345951125135,
      },
    ],
    group8: [],
    group9: [],
  },
  group5: {
    group10: [],
    group11: [],
    group12: [
      {
        phenotype: "Acute renal failure",
        pval: 0.0071917421296796,
        coeff: -1.2861862711587924,
        cint: 0.9378853005029156,
      },
    ],
    group13: [
      {
        phenotype: "Septicemia",
        pval: 0.0129274713961772,
        coeff: -1.0759722529479334,
        cint: 0.8483787355215608,
      },
      {
        phenotype: "Fever of unknown origin",
        pval: 0.014176991267872,
        coeff: -1.0142056789578824,
        cint: 0.8104408654089803,
      },
    ],
    group15: [
      {
        phenotype: "Pain in limb",
        pval: 0.0013320428923483,
        coeff: -1.328430877994481,
        cint: 0.811370701541402,
      },
      {
        phenotype: "Abdominal pain",
        pval: 0.0081905387385069,
        coeff: -0.8665834068748964,
        cint: 0.6423600197453593,
      },
    ],
    group16: [],
    group17: [],
    group18: [],
    group19: [],
    group6: [],
    group7: [],
    group8: [],
    group9: [
      {
        phenotype: "Respiratory failure",
        pval: 0.000525342790741,
        coeff: -1.3069422793986625,
        cint: 0.7387359759956333,
      },
      {
        phenotype: "Acute renal failure",
        pval: 0.001381604100045,
        coeff: -1.136261053457151,
        cint: 0.696280698499373,
      },
      {
        phenotype: "Septicemia",
        pval: 0.0055256373555427,
        coeff: -0.8116288439027144,
        cint: 0.5733145460873892,
      },
    ],
  },
  group6: {
    group10: [],
    group11: [],
    group12: [],
    group13: [],
    group15: [
      {
        phenotype: "Pain in limb",
        pval: 0.0049988231247621,
        coeff: -1.1198013652005498,
        cint: 0.7818612952493609,
      },
    ],
    group16: [],
    group17: [],
    group18: [],
    group19: [],
    group7: [],
    group8: [],
    group9: [],
  },
  group7: {
    group10: [],
    group11: [],
    group12: [],
    group13: [],
    group8: [],
    group9: [
      {
        phenotype: "Respiratory failure",
        pval: 0.0055016054037469,
        coeff: -1.1226985951548731,
        cint: 0.7926416257139708,
      },
    ],
  },
};

const generateOptions = (data) => {
  const keys = Object.keys(data);
  let options = [];
  options = options.concat(keys);
  keys.forEach((k) => {
    options = options.concat(Object.keys(data[k]));
  });
  options = [...new Set(options)];
  options = options.sort();
  options = options.filter((item) => item !== "All");
  return options;
};

const realDataOptions = generateOptions(realData);

export { realData, realDataOptions };