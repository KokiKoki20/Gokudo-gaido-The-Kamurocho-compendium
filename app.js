const gameData = {
  "Yakuza 0": {
    logo: "./images/logos/Y0.webp",
    characters: {
      "Kazuma Kiryu": {
        image: "./images/characters/Kiryu/KiryuY0.webp",
        substories: [
          {
            name: "From a Far-off Land",
            location:
              "Nagasu Blvd/Ose Bridge intersection → Taxi Office → Convenience Store ATM",
            reward: "None (story reward)",
            requirements: "Evening in Chapter 2, 70,000 yen total",
            guide: [
              "1. Witness mother/son conversation at intersection",
              "2. Visit Taxi Office and speak to Wada (back room)",
              "3. Use any convenience store ATM:",
              "   • Send 8 payments (one per orphanage child)",
              "   • Total cost: 70,000 yen",
              "   • Earn money via taxi missions if needed",
              "4. Complete after final transfer",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "Taxi SOS",
            location: "Ebisu Pawn → Nagasu Blvd → Suzukake Lane → Parking Lot",
            reward: "Staminan Royale",
            requirements: "Beginning of Chapter 2",
            guide: [
              "1. Start at parking lot near Ebisu Pawn (couple discussing taxi)",
              "2. Head north on Nagasu Blvd to spot fleeing taxi",
              "3. Follow sequence:",
              "   • First chase: Taxi escapes north",
              "   • Bystander directs you to Suzukake Lane",
              "   • Second chase: Taxi speeds west then south",
              "4. Final confrontation in parking lot",
              "5. Defeat shady character in combat",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "King of the Mixer",
            location: "Ose Bridge Blvd East → Mixer Venue",
            reward: "Calming Towel",
            requirements: "After recruiting Kiyokawa",
            guide: [
              "1. Find Kiyokawa and Muramatsu near Motsunabe Kaede",
              "2. Join their mixer event",
              "3. Success path (one possible combination):<br>",
              "   • <b>'Drop chopstick'</b><br>",
              "   • <b>'Introductions'</b><br>",
              "   • <b>'Hobby'</b><br>",
              "   • <b>'King's Game'</b><br>",
              "   • <b>'3 and 4 kiss'</b>",
              "4. Other combinations may also succeed",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "Hunt for the Kidnapper",
            location: "Intersection near M Store",
            reward: "20,000 yen",
            requirements: "Evening in Chapter 2",
            guide: [
              "1. Find Wada north of Taxi Office near M Store",
              "2. Witness hit-and-run kidnapping",
              "3. Chase sequence (2:30 time limit):",
              "   • Follow through city streets",
              "   • Must catch up before timer expires",
              "4. Combat against Itoda + 2 kidnappers",
              "5. Tip: Ideal for practicing Komaki Shot Stopper",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "Another Haruka",
            location: "Chikuzengawa St. → Omusubi Mura",
            reward: "1-2-3 Gum, Beads of Good Fortune",
            requirements: "Beginning of Chapter 2",
            guide: [
              "1. Walk along Chikuzengawa St. near Save Point (hear dog whining)",
              "2. Descend to riverbank to find animal abusers",
              "3. Intervene and defeat all attackers",
              "4. Meet girl attempting to rescue dog",
              "5. Travel to Nagasu Blvd near Omusubi Mura",
              "6. Speak to girl's father",
              "7. Return for second combat encounter",
              "8. Tip: Good opportunity to practice Team Heat Moves",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "Cyberterrorism",
            location: "Nagasu Taxi Office",
            reward: "Staminan Spark",
            requirements: "Evening in Chapter 2",
            guide: [
              "1. Find Muramatsu at computer in Taxi Office",
              "2. Initiate dialogue about computer issues",
              "3. Critical actions in order:<br>",
              "   • <b>'Pull the cord'</b> (unplug LAN)<br>",
              "   • After moaning voice appears, <b>'Put it back in'</b><br>",
              "   • When Nakajima reaches for power cord, <b>'Stop him'</b>",
              "4. Wait for Hirakawa to resolve the joke virus",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "Kiryu the Actor",
            location: "Taxi Office exterior",
            reward: "Up to 100,000 yen",
            requirements: "Chapter 4",
            guide: [
              "1. Speak to exhausted Kudarizaka outside Taxi Office",
              "2. Participate in yakuza film shoot",
              "3. Critical sequence:<br>",
              "   • Line 1: <b>'I'm here to end this, brother.'</b><br>",
              "   • Line 2: <b>'You're a vampire, right?'</b><br>",
              "   • Combat: Defeat zombies in EXACT order:<br>",
              "     1. <b>Hair combed back</b><br>",
              "     2. <b>Wearing hat</b><br>",
              "     3. <b>Yellow jacket</b><br>",
              "     4. <b>Glasses</b><br>",
              "   • Line 3: <b>'Let's see if you're really immortal or not.'</b><br>",
              "   • Combat: Finish 6 zombies with Heat Actions (Essence of Terror ideal)<br>",
              "   • Line 4: <b>'The Hazy Moon you stole from the boss was fake.'</b><br>",
              "   • Finale: Defeat Yamashiro with katana Heat Move<br>",
              "   • Line 5: <b>'The boss is waiting for you in Hell.'</b>",
              "4. Perfect execution earns maximum reward",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "A Chance Meeting",
            location: "South District Phone Booth → La Seine",
            reward: "None (story)",
            requirements: "Chapter 4 progression",
            guide: [
              "1. Find Muramatsu near southern phone booth",
              "2. Yuya arrives - play dumb twice to avoid suspicion",
              "3. Receive follow-up text about La Seine",
              "4. Visit La Seine twice (with time delay between)",
              "5. Final combat against yakuza group",
              "6. Tip: Great for Team Heat Actions with Yuya",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "A Knock on the Door",
            location: "Kiryu's Apartment",
            reward: "High-Grade Platinum",
            requirements: "Start of Chapter 3",
            guide: [
              "1. Enter apartment at Chapter 3 start",
              "2. Encounter pushy newspaper salesman",
              "3. Reject all sales pitches",
              "4. Combat triggers outside apartment",
              "5. Defeat salesman to conclude",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "Dragon Seafood Rice Bowl",
            location: "Chikuzengawa St. (northern riverside)",
            reward: "Unlocks Dragon Seafood Bowl at Sushi Zanmai",
            requirements: "Beginning of Chapter 2",
            guide: [
              "1. Head to the northern riverside of Chikuzengawa St.",
              "2. Look for a group of fishermen (unusual gathering)",
              "3. Speak to the large man in a white coat",
              "4. Accept his fishing tutorial",
              "5. River Fishing Phase:",
              "   • Use provided buns as bait",
              "   • Watch the bobber and mash confirm when it submerges",
              "   • You get three attempts",
              "6. Sea Fishing Phase (optional):",
              "   • More complex mechanics (see Minigames section for details)",
              "   • Best outcome is a draw",
              "   • Can surrender immediately if uninterested",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "The Spangled Meteor",
            location: "Joy Land → Omusubi Mura → Taxi Office",
            reward: "30,000 yen, Mystery Stone",
            requirements: "Chapter 2 (after some progression)",
            guide: [
              "1. Inspect flashy car near Joy Land (southeast)",
              "2. Encounter Wada discussing Vixen Zeroes",
              "3. Head to Omusubi Mura for combat against club barkers",
              "4. Important: Confirm car's name is <b>'The Spangled Meteor'</b>",
              "5. Return to Taxi Office for racing challenge:",
              "   • 2 laps (Intermediate + Advanced courses)",
              "   • Requires well-tuned vehicle",
              "   • Opponent is faster than average",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "Dragon Mask Redux",
            location: "La Seine exterior → Kiryu's Apartment → Wrestling Arena",
            reward: "20,000 yen",
            requirements: "Chapter 4",
            guide: [
              "1. Talk to Hors d'Oeuvre Morosawa outside La Seine",
              "2. Initial combat encounter",
              "3. Retrieve Dragon Mask from apartment corner",
              "4. Optional: Complete immediately or later",
              "5. Wrestling match against easy opponent",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "A Plea to the Gods",
            location: "Ose Bridge",
            reward: "Alertness Hood",
            requirements: "Beginning of Chapter 2",
            guide: [
              "1. Go to Ose Bridge at the start of Chapter 2",
              "2. Find the distressed student who lost his test answers",
              "3. Provide the correct answers in order:<br>",
              "   • <b>'Movement'</b><br>",
              "   • <b>'One in six'</b><br>",
              "   • <b>'Commodore Perry'</b><br>",
              "   • <b>'Gravitational potential energy'</b><br>",
              "   • <b>'Seize the day'</b>",
              "4. Note: These answers are for the Remastered version only (PS3 version differs)",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "Fast Food!",
            location: "Outside Don Quijote (north)",
            reward: "20,000 yen, Hercules Gloves",
            requirements: "Evening in Chapter 2",
            guide: [
              "1. Find collapsed man outside Don Quijote",
              "2. Accept food stand delivery mission",
              "3. Driving mechanics (similar to taxi but simplified):",
              "   • Ignore acceleration/braking rules",
              "   • Avoid crashes and road departures",
              "   • Running red lights allowed",
              "4. Perfect delivery earns maximum rewards",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "Got to be Firm",
            location: "Southwest Food Stalls",
            reward: "Up to 12,000 yen",
            requirements: "Evening in Chapter 2",
            guide: [
              "1. Visit southwest food stalls ONLY during evening",
              "2. Enter southernmost stall",
              "3. Complete Tatsuya Noodles minigame:",
              "   • Basic completion fulfills substory",
              "   • Top ranking earns maximum 12,000 yen",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "Mack Returns",
            location: "Automatic during Chapter 3",
            reward: "Unlocks Revelations",
            requirements: "Story progression in Chapter 3",
            guide: [
              "1. Unavoidable story-based substory",
              "2. Progress through Chapter 3 naturally",
              "3. Becomes accessible during 'The Dragon's Return' mission",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "Amon",
            location: "Complete all substories first",
            reward: "Legendary Fighter Unlock",
            requirements: "All other substories completed",
            guide: [
              "1. Must complete every other substory in the game",
              "2. Amon will appear at a designated location",
              "3. Prepare for extremely difficult combat",
              "4. Uses advanced techniques and weapons",
              "5. Victory grants special title/abilities",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "The Perfect Seasoning",
            location: "Cafe Alps → Theater Square",
            reward: "Unlocks Ultimate Neapolitan",
            requirements:
              "Complete all Tatsuya substories, Chapter 1 Finale start",
            guide: [
              "1. Visit Cafe Alps during Finale Chapter 1",
              "2. Resolve thug confrontation",
              "3. Requires completed Tatsuya substories:",
              "   • If incomplete, wait for Tatsuya's call",
              "4. Pick up Tatsuya at Theater Square when ready",
              "5. Automatic completion after reunion",
            ].join("\n"),
            videoId: "",
          },
        ],
      },
      "Goro Majima": {
        image: "./images/characters/Majima/MajimaY0.webp",
        substories: [],
      },
    },
  },
  "Yakuza Kiwami": {
    logo: "./images/logos/Y1Kiwami.webp",
    characters: {
      "Kazuma Kiryu": {
        image: "👨‍💼",
        substories: [
          {
            name: "Molestation Accusation",
            location: "Theater Square (southeast end)",
            reward: "20,000 yen",
            requirements: "Chapter 2",
            guide: [
              "1. Leave southeast end of Theater Square after speaking to Aoki",
              "2. Shady Lady will accuse you",
              "3. Choose not to pay 10,000 yen",
              "4. Defeat the attacker",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "The Price of an F-cup",
            location: "Pink Street (south of Beam)",
            reward: "100,000 yen, Underground Casino info",
            requirements: "Chapter 4",
            guide: [
              "1. Woman runs up asking for help - agree",
              "2. Answer next question however you wish",
              "3. When asked to drink, refuse three times",
              "4. Defeat all enemies",
              "5. Say 'Not a chance' when prompted",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "Dine and Dash",
            location: "Western Akaushimaru → Various locations",
            reward: "Toughness Infinity",
            requirements: "Chapter 4",
            guide: [
              "1. Witness dash at western Akaushimaru",
              "2. Find red hat under 'Total Amusement Tower'",
              "3. Chase to Public Park 3 in Tenkaichi Alley",
              "4. Defeat the runner",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "The Price of a Palm-reading",
            location: "North of Karaokekan",
            reward: "5,000 yen → 30,000 yen + Lifestone",
            requirements: "Chapter 4",
            guide: [
              "1. Approach man in suit/purple shirt",
              "2. Agree to hearing more, then refuse offer three times",
              "3. Defeat enemies outside",
              "4. Find him again at Smile Burger",
              "5. Beat him up for final reward",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "The Toll Collector",
            location: "Park Alley (south from Park Blvd taxi stand)",
            reward: "Leech Gloves",
            requirements: "Chapter 4",
            guide: [
              "1. Guy stops you in alley",
              "2. Choose to fight",
              "3. Defeat him in nearby alcove (he's tougher than average)",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "Pay it Forward",
            location: "Public Park 3 → Various locations",
            reward: "Swiss Watch (sell at Ebisu Pawn)",
            requirements: "Chapter 4 (finishes in Chapter 5)",
            guide: [
              "1. Find drunk in Public Park 3 - give Sake (from M Store)",
              "2. Get Worn-out Coat → give to homeless guy near Beam",
              "3. Get glasses → give to guy outside Asia",
              "4. Get tape → in Chapter 5 give to guy in Purgatory",
              "5. Get Silver Briefcase → give to salaryman on Park Blvd",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "The Yakuza Hater",
            location: "West end of Shichifuku St. (Children's Park)",
            reward: "Red Jewel",
            requirements: "Chapter 4",
            guide: [
              "1. Speak to kneeling man near park",
              "2. Defeat him and three additional attackers",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "The Bouncer",
            location: "Showa St. (east from Don Quijote)",
            reward: "Italian Scarf",
            requirements: "Chapter 4",
            guide: [
              "1. Lady in white dress asks for help",
              "2. Agree to guard club",
              "3. Defeat four attackers",
              "4. Answer question however you wish",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "Collection Call",
            location: "Outside Vincent → West Park",
            reward: "Sakura Storm katana",
            requirements: "Chapter 4",
            guide: [
              "1. Answer collections call phone call",
              "2. Go to northeast corner of West Park",
              "3. Defeat suited man",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "Bump and Scam",
            location: "North end near M Store",
            reward: "None (leads to chain)",
            requirements: "Chapter 4",
            guide: [
              "1. Bump into three toughs marching together",
              "2. Refuse to pay",
              "3. Defeat them",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "Bump and Scam: Revenge",
            location: "North end near M Store",
            reward: "None (leads to chain)",
            requirements: "Complete #17",
            guide: [
              "1. Return to area and bump into them again",
              "2. Defeat them again",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "Bump and Scam: Three Strikes",
            location: "North end near M Store",
            reward: "Colorful Parasol",
            requirements: "Complete #18",
            guide: [
              "1. Return to area and bump into five guys",
              "2. Defeat them",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "Bump and Scam: Epilogue",
            location: "North end near M Store",
            reward: "None",
            requirements: "Complete #19",
            guide: [
              "1. Return to area",
              "2. Agree to walk with them",
              "3. Defeat five guys",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "Con-tacts",
            location: "East of Ebisu Pawn",
            reward: "20,000 yen",
            requirements: "Chapter 4",
            guide: [
              "1. Step on crouching man's contact lens",
              "2. Refuse to pay",
              "3. Defeat him",
              "4. Return later and defeat him again",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "The Little Match Girl",
            location: "Pink Street entrance → Public Park 3",
            reward: "Celebrity Perfume",
            requirements: "Chapter 4",
            guide: [
              "1. Automatically buy match from lady",
              "2. Return later and watch her matches",
              "3. Find her again in Public Park 3",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "The Crane Game",
            location: "Club SEGA (Nakamichi St.)",
            reward: "10,000/30,000/50,000 yen + Locker Key I3",
            requirements: "Chapter 4",
            guide: [
              "1. Listen to businessman complain about UFO Catcher",
              "2. Get white 'Bunchan the Java Sparrow' (10,000 yen)",
              "3. Return later and get Woo Fam series (30,000 yen)",
              "4. Return later and get 'Jumbo Chestnut' (50,000 yen)",
              "5. Defeat attacker outside",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "Prodigal Son",
            location: "North of Millennium Tower → Various locations",
            reward: "Sacrifice Stone",
            requirements: "Chapter 4",
            guide: [
              "1. Humor old man who thinks you're his son ('D..Dad?')",
              "2. Meet in Children's Park - say 'Seems that way'",
              "3. Go to Champion District northwest corner",
              "4. Head to West Park and defeat enemies",
              "5. Return wallet to old man",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "Bowling Battle",
            location: "Mach Bowl",
            reward: "30,000 yen (or lose 10,000 yen)",
            requirements: "Chapter 4 (may need night time)",
            guide: [
              "1. May need to complete other substories first",
              "2. Approach counter in Mach Bowl",
              "3. Win bowling challenge against opponent",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "The Drunkard",
            location: "Tenkaichi St./Tenkaichi Alley corner",
            reward: "Alertness Hood",
            requirements: "Chapter 4",
            guide: [
              "1. Give drunk any alcohol (gets 10 yen)",
              "2. Return and give Scotch Whiskey (500 yen)",
              "3. Return and give energy drink when he's ill",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "Handbag Hunt",
            location: "Millennium Tower → Various locations",
            reward: "10,000 yen",
            requirements: "Chapter 4",
            guide: [
              "1. Help searching woman near Millennium Tower",
              "2. Talk to schoolgirls in Theater Square",
              "3. Find kid in Champion District northeast",
              "4. Defeat nerds in Public Park 3",
              "5. Return bag",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "Under Suspicion",
            location: "South from Mach Bowl → Theater Square",
            reward: "80,000 yen (50,000 if peeked)",
            requirements: "Chapter 4",
            guide: [
              "1. Speak to guy in brown jacket near vending machines",
              "2. Tell woman in Theater Square 'You're very sexy'",
              "3. Don't peek in bag for full reward",
              "4. Return package",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "The Yakuza's Apprentice",
            location: "Karaokekan → Champion District",
            reward: "Gold Champagne",
            requirements: "Chapter 4",
            guide: [
              "1. Approach crouching man (Kano) in front of Karaokekan",
              "2. Defeat him",
              "3. Meet at Champion District south entrance",
              "4. Enter Shellac and defeat opponent",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "The Yakuza's Apprentice II",
            location: "Senryo Ave → Hotel District",
            reward: "Rune Casino password + Tauriner Maximum",
            requirements: "Complete #30",
            guide: [
              "1. Find Kano at south end of Senryo Ave",
              "2. Meet in Hotel District northwest corner",
              "3. Defeat yakuza",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "The Yakuza's Apprentice III",
            location: "Beam → Various locations",
            reward: "100,000 yen + Steel Knuckles",
            requirements: "Complete #31",
            guide: [
              "1. Meet Kano at Beam",
              "2. Chase Godspeed Yoko to Shichifuku Parking Lot",
              "3. Use Rush Style to defeat her",
              "4. Chase to Champion District lot",
              "5. Defeat three normal guys",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "The Yakuza's Apprentice IV",
            location: "Champion District → Nakamichi St.",
            reward: "Masterwork Dagger",
            requirements: "Complete #32",
            guide: [
              "1. Meet Kano at Champion District south entrance",
              "2. Find him on Nakamichi St.",
              "3. Defeat four enemies",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "Man Scout",
            location: "Corner of Showa and Senryo",
            reward: "Staminan Spark (best reward)",
            requirements: "Chapter 4",
            guide: [
              "1. Accept scout's offer",
              "2. Pay 10,000 yen training cost",
              "3. Interview answers:<br>",
              "   • 'Physique'<br>",
              "   • 'I don't look back at the past'<br>",
              "   • 'Tachibana'",
              "4. Return later for phone call",
              "5. Meet at Millennium Tower front",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "The Truth About Beauty",
            location: "Alley north of Poppo Nakamichi",
            reward: "Black Belt",
            requirements: "Chapter 4",
            guide: [
              "1. Accept Ruby's date offer",
              "2. Turn her down twice when pressed",
              "3. Defeat enemies in two fights",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "Professional Brawler",
            location: "Shichifuku Parking Lot",
            reward: "30,000 yen",
            requirements: "Chapter 4",
            guide: [
              "1. Agree to fight professional fighter",
              "2. Defeat him",
              "3. Choose to rough him up more",
              "4. Defeat six guys",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "Pick Pocket Pursuit",
            location: "West end of Park Blvd → Kanrai",
            reward: "70,000 yen total (20k + 50k returned)",
            requirements: "Chapter 4",
            guide: [
              "1. Approach salaryman near building",
              "2. Find him outside Kanrai (gray vest with glasses)",
              "3. Accuse correct guy and defeat him",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "Of Luck and Debt",
            location: "Shellac → Rune Casino",
            reward: "50,000 yen",
            requirements: "Chapter 4 (may need to drink first)",
            guide: [
              "1. Speak to non-regular owner at Shellac",
              "2. Find debtor at Rune Casino (password from #1 or #31)",
              "3. Get Goddess of Children Amulet (from #42 in Ch5)",
              "4. Return to Shellac",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "Crisis on the Crapper",
            location: "Children's Park (Shichifuku St.)",
            reward: "Stone of Enduring",
            requirements: "Complete several area substories",
            guide: [
              "1. Examine restroom in Children's Park",
              "2. Provide SIX packs of Pocket Tissues",
              "3. Can buy at M Store or get from handout people",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "MesuKing: The Queen of Beetles",
            location: "Club SEGA (Nakamichi St.)",
            reward: "Starts MesuKing minigame",
            requirements: "Chapter 4",
            guide: [
              "1. Pick up red sparkle outside arcade",
              "2. Return to child in lab coat",
              "3. Enter arcade and speak to him again",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "A Goodbye Promise",
            location: "Hostess Club (Yui)",
            reward: "Hostess-specific",
            requirements: "Chapter 4",
            guide: ["See hostess section for completion details"].join("\n"),
            videoId: "",
          },
          {
            name: "Freedom to Romance",
            location: "Hostess Club (Rina)",
            reward: "Hostess-specific",
            requirements: "Chapter 4",
            guide: ["See hostess section for completion details"].join("\n"),
            videoId: "",
          },
          {
            name: "The Fighter's Successor",
            location: "Pocket Circuit Stadium → Various locations",
            reward: "Godspeed Motor Mark II + course creation",
            requirements: "Chapter 4",
            guide: [
              "1. Speak to Pocket Circuit Fighter",
              "2. Race Hideki-kun at Theater Square Club SEGA",
              "3. Find Takuma-kun at Stardust",
              "4. Race Pocket Circuit Fighter",
              "5. Race Takuma-kun",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "Practice Match with Professor",
            location: "Club SEGA (MesuKing)",
            reward: "None (progresses MesuKing)",
            requirements: "Complete #53",
            guide: ["1. Choose Paper, Rock, then Scissors as instructed"].join(
              "\n"
            ),
            videoId: "",
          },
          {
            name: "First Rival",
            location: "Club SEGA (MesuKing)",
            reward: "Giant Swing Card",
            requirements: "Complete #70",
            guide: [
              "1. Challenge Tomohiro-kun",
              "2. He only picks Rock - use Paper",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "Private Lesson",
            location: "Club SEGA (MesuKing)",
            reward: "Finish Time Card",
            requirements: "Complete #71",
            guide: [
              "1. Challenge Sach-chan",
              "2. If white exclamation on Rock, she'll use it immediately",
              "3. Otherwise no pattern",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "As Long as There's Love",
            location: "Club SEGA (MesuKing)",
            reward: "Super Romero Special Card",
            requirements: "Complete #72",
            guide: [
              "1. Challenge Masaru-kun",
              "2. He likes bees (uses Paper Wasp - Scissors type)",
              "3. Use Rock type to counter",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "Time for a Raid!",
            location: "Club SEGA → Theater Square",
            reward: "Giant Japanese Mantis Card",
            requirements: "Complete #73",
            guide: [
              "1. Need 30 cards to proceed",
              "2. Defeat Nobuo at Theater Square",
              "3. His deck leans Scissors",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "The Professor's Past",
            location: "Club SEGA (MesuKing)",
            reward: "Last Resort Card",
            requirements: "Complete #74",
            guide: [
              "1. Challenge Eternal Turn Takeru",
              "2. No clear pattern - may rotate attacks clockwise",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "The Professor's Past 2",
            location: "Club SEGA → Theater Square",
            reward: "Wasp King Card",
            requirements: "Complete #75",
            guide: [
              "1. Challenge Hime-chan",
              "2. Her deck is Paper-based",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "Enjoying It With Everyone",
            location: "Club SEGA (MesuKing)",
            reward: "Tie Breaker Card",
            requirements: "Complete #76 (need 40+ cards)",
            guide: [
              "1. Challenge Masashi",
              "2. His deck is Scissor-based",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "My Baby's a Showgirl",
            location: "Random call → Asia → Park Blvd.",
            reward: "Free Pass for Asia",
            requirements: "Chapter 5",
            guide: [
              "1. Receive random call from Yuya",
              "2. Meet at Asia club",
              "3. Defeat shotgun opponent",
              "4. Go to marked spot on Park Blvd (Go Parlor)",
              "5. Defeat punks inside",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "The Cell Phone Plan",
            location: "Tenkaichi Alley → Various locations",
            reward: "Goddess of Children Amulet",
            requirements: "Chapter 5",
            guide: [
              "1. Find dead guy in north backlot on Tenkaichi Alley",
              "2. Follow phone calls to outside Bacchus",
              "3. Get Locker Key from woman",
              "4. Take Dagger from Locker C1",
              "5. Go to Theater Square Batting Cages",
              "6. Defeat Assassin",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "Memories of the Bubble",
            location: "Club Debolah → Don Quijote",
            reward: "Double Feathered Fans",
            requirements: "Chapter 5",
            guide: [
              "1. Approach lady on dance floor sidelines at Debolah",
              "2. Answer questions:<br>",
              "   • 'We waved 10,000 yen bills'<br>",
              "   • 'Leg Lads'<br>",
              "   • 'A bodycon dress and a fan'",
              "3. Buy required items at Don Quijote",
              "4. Return to Debolah",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "The Value of 2,000 Yen",
            location: "Vincent → Various locations",
            reward: "100,000 yen",
            requirements: "Chapter 5",
            guide: [
              "1. Speak to glasses-wearing man at Vincent bar",
              "2. Collect five 2000 yen bills (one at a time):<br>",
              "   • Drunk at Taihei/Pink crossroads<br>",
              "   • Guy at vending machine across from Kazama Office<br>",
              "   • Poppo Tenkaichi clerk (exchange 2000 yen)<br>",
              "   • Theater Square Club SEGA arcade guy (pay 5000 yen)<br>",
              "   • Batting Center machine guy (exchange 2000 yen)",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "Battle for the MesuKing Throne",
            location: "Club SEGA (MesuKing)",
            reward: "MesuKing Throne + Hercules Beetle Card",
            requirements: "Complete #77 + 50+ cards",
            guide: [
              "1. Challenge Professor to serious battle",
              "2. No patterns - just strategy",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "A Doctor's Duty",
            location: "West Park → Various locations",
            reward: "None",
            requirements: "Chapter 6 (requires Haruka in Ch7)",
            guide: [
              "1. Find hungry boy west of West Park entrance",
              "2. Give food from convenience store",
              "3. Find him in Public Park 3 (Tenkaichi Alley)",
              "4. Bring Haruka at nighttime",
              "5. Give more food",
              "6. Go to Doc Emoto's Clinic (west of Theater Square Akaushimaru)",
              "7. Defeat foreign guys",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "The Heart of Vandalism",
            location: "West of Mach Bowl → Taihei Blvd.",
            reward: "50,000 yen",
            requirements: "Chapter 6",
            guide: [
              "1. Speak to café owner west of Mach Bowl",
              "2. Wait and return to find tagger",
              "3. Chase to Taihei Blvd (hiding behind pole)",
              "4. Defeat him and goons",
              "5. Return to café",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "Yakuza on the Run",
            location: "North of Ebisu Pawn",
            reward: "Charismatic Photo",
            requirements: "Chapter 6",
            guide: [
              "1. Stop running yakuza in rectangular area",
              "2. Defeat him to get Locker Key J5",
              "3. Get accosted at locker",
              "4. Defeat jerks to claim photo",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "Bad Boy in Blue",
            location: "South of Kyushu No.1 Star → Nakamichi Alley",
            reward: "70,000 yen",
            requirements: "Chapter 6",
            guide: [
              "1. Approach fake police officer",
              "2. Refuse to pay",
              "3. Find yakuza at Poppo on Nakamichi Alley",
              "4. Find 'cop' south down alley",
              "5. Defeat him",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "In Pursuit of Pleasure",
            location: "Senryo Ave → Various locations",
            reward: "Adds Shinohara to Coliseum",
            requirements: "Chapter 6",
            guide: [
              "1. Intervene in couple argument on Senryo Ave",
              "2. Defeat the guy",
              "3. Visit locations with Shinohara:<br>",
              "   • Kanrai<br>",
              "   • Jewel<br>",
              "   • Coliseum",
              "4. Defeat Shinohara in Coliseum",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "Komaki Style: Shot Stopper",
            location: "Purgatory",
            reward: "Learn technique",
            requirements: "Chapter 6",
            guide: [
              "1. Accept Komaki's training offer",
              "2. Follow directions for move",
              "3. Use on two practice opponents",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "Komaki Style: Swordsmanship",
            location: "Purgatory",
            reward: "Learn technique",
            requirements: "Own Wooden Katana",
            guide: [
              "1. Equip Wooden Katana",
              "2. Perform multiple attack types",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "Komaki Style: Roundhouse Attack",
            location: "Purgatory",
            reward: "Roundhouse Attack technique",
            requirements: "Earn 'Image of an Asura' from Coliseum",
            guide: [
              "1. Present Image of an Asura to Komaki",
              "2. Defeat seven guys in three minutes",
              "3. Practice redirecting attacks",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "Komaki Style: Cat-Like Reflexes",
            location: "Purgatory",
            reward: "Komaki Cat Feet technique",
            requirements: "Earn 'Image of a Cat' from Coliseum",
            guide: [
              "1. Present Image of a Cat to Komaki",
              "2. Defeat bat-wielding opponent",
              "3. Practice regaining footing",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "Komaki Style: Clear-Minded Mastery",
            location: "Purgatory",
            reward: "Dragon Style buff vs bosses",
            requirements: "Majima active + 'Image of a Snake'",
            guide: [
              "1. Present Image of a Snake to Komaki",
              "2. Fight 'Hannya-Man' (Thug Style Majima)",
              "3. Don't need to win (but get XP if you do)",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "Komaki Style: Evade and Strike",
            location: "Purgatory",
            reward: "Evade and Strike technique",
            requirements: "Earn 'Image of a Kamaitachi' from Coliseum",
            guide: [
              "1. Present Image of a Kamaitachi to Komaki",
              "2. Dodge all Komaki's shots",
              "3. Watch for shoulder movement as tell",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "Komaki Style: Dharma Tumbler",
            location: "Purgatory",
            reward: "Dodge roll ability",
            requirements: "Earn 'Image of Dharma' from Coliseum",
            guide: [
              "1. Present Image of Dharma to Komaki",
              "2. Defeat Isamu Kumada",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "Komaki Style: Fist Reversal",
            location: "Purgatory",
            reward: "Fist Reversal Heat Action",
            requirements: "Earn 'Image of Four Gods' from Coliseum",
            guide: [
              "1. Present Image of Four Gods to Komaki",
              "2. Defeat four tough opponents",
              "3. Use throws effectively",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "Komaki Style: Knock Back",
            location: "Purgatory",
            reward: "Komaki Knock Back technique",
            requirements: "Earn 'Image of an Elephant' from Coliseum",
            guide: [
              "1. Present Image of an Elephant to Komaki",
              "2. Guard for one full minute (no attacking/evading)",
              "3. Can walk out of attack range",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "Komaki Style: Tiger Drop",
            location: "Purgatory",
            reward: "Tiger Drop counter",
            requirements: "Earn 'Image of a Tiger' from Coliseum",
            guide: [
              "1. Present Image of a Tiger to Komaki",
              "2. Defeat Raizo Shiba",
              "3. Learn powerful counter move",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "Komaki Style: Parry",
            location: "Purgatory",
            reward: "Komaki Parry counter",
            requirements: "Earn 'Image of a Dragon' from Coliseum",
            guide: [
              "1. Present Image of a Dragon to Komaki",
              "2. Defeat Komaki in final challenge",
              "3. Practice Tiger Drop timing",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "Bet On a Champ",
            location: "Bantam → Orchid Palace Mahjong",
            reward: "None",
            requirements: "Chapter 7 (needs Haruka)",
            guide: [
              "1. Find depressed boxer at Bantam",
              "2. Defeat him",
              "3. Go to Orchid Palace Mahjong",
              "4. Give password: 'I've come to take shelter from the rain'",
              "5. Defeat guy inside",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "Kyoka and Takashi",
            location: "Park Blvd → Various locations",
            reward: "Gambler's Binding",
            requirements: "Complete #41 first",
            guide: [
              "1. Find yakuza northwest from Vincent",
              "2. Get sandwich from M Store for B-King Leader at Debolah",
              "3. Find Takashi at Batting Center",
              "4. Return to original spot",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "The Medicine Goes Down",
            location: "Southeast corner → Theater Square",
            reward: "150,000 yen",
            requirements: "Complete #41 first",
            guide: [
              "1. Help collapsed man in southeast corner",
              "2. Find red tracksuit guys in Theater Square",
              "3. Defeat them and return medicine",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "The B-King's Misfortune",
            location: "Theater Square",
            reward: "Brawler Amulet",
            requirements: "Chapter 7",
            guide: [
              "1. Help gang arguing with yakuza",
              "2. Defeat enemies",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "Searching for the Present",
            location: "Children's Park → Various locations",
            reward: "Mew Shoes or Staminan Royale",
            requirements: "Chapter 7 (needs Haruka)",
            guide: [
              "1. Talk to girl on bench in Children's Park",
              "2. Complete at least 3 gift options:<br>",
              "   • Poppo Showa St: Crossword/Math/Car book (pick one)<br>",
              "   • Tenkaichi Alley back alley: Shrink-Wrapped Book<br>",
              "   • Theater Square Club SEGA: AiAi UFO toy<br>",
              "   • Pocket Circuit: Race for Golem Tiger",
              "3. Return to girl with gift",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "Bad Ass Dads",
            location: "Purgatory (West Park)",
            reward: "Italian Shoulder Bag or Wild Shirt",
            requirements: "Chapter 7",
            guide: [
              "1. Speak to woman near fountain",
              "2. First two answers don't matter",
              "3. Final answer 'Having less common sense than normal men' for best reward",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "The Rumored Party",
            location: "Stardust → Debolah",
            reward: "Tourmaline Bracelet",
            requirements: "Chapter 8",
            guide: [
              "1. Speak to host near Stardust door",
              "2. Find two women with talk prompts in Stardust",
              "3. Third woman approaches as you leave",
              "4. Meet at Debolah dance floor",
              "5. Speak to everyone",
              "6. Defeat Munan Yazawa",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "The Fake Mizuki's Truth",
            location: "Florist → Champion District",
            reward: "None",
            requirements: "Chapter 10",
            guide: [
              "1. Get lead from Florist",
              "2. Go to 'Pares' bar in Champion District",
              "3. Approach gathered guys",
              "4. Fight employees outside",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "The Stalker",
            location: "Orchid Palace Mahjong",
            reward: "30,000 yen",
            requirements: "Complete #37",
            guide: [
              "1. Help woman outside mahjong parlor",
              "2. Approach obvious watcher",
              "3. Call his bluff twice",
              "4. Defeat yakuza",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "Gangbusters",
            location: "Park Blvd → Various locations",
            reward: "30,000 yen",
            requirements: "Chapter 10",
            guide: [
              "1. Defeat three Gangbusters at west Park Blvd",
              "2. Defeat them again at Champion District south entrance",
              "3. Speak to Aoki in Theater Square",
              "4. Defeat boss at Pink Street entrance",
              "5. Find Asano in Hotel District and defeat him",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "Man on a Ledge",
            location: "West Park Blvd Multi-Tenant Building",
            reward: "None",
            requirements: "Chapter 11 (needs Haruka)",
            guide: [
              "1. Approach crowd at building",
              "2. Enter front door (not Chapter 10 door)",
              "3. Select statements:<br>",
              "   • 'Tell me what happened'<br>",
              "   • 'Who is Mizuki?'<br>",
              "   • 'Have you contacted her?'<br>",
              "   • 'How much have you spent on her?'",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "The Yakuza's Wife",
            location: "Stardust → Todo Building",
            reward: "None",
            requirements: "Finale (no Haruka)",
            guide: [
              "1. Get call from Florist after leaving Stardust",
              "2. Visit Florist's office",
              "3. Go to Todo Building near Theater Square",
              "4. Fight Yayoi Dojima's thugs",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "Behind the Assassin",
            location: "Taihei Blvd → Purgatory",
            reward: "None",
            requirements: "Finale (no Haruka)",
            guide: [
              "1. Man in gray jacket calls out west on Taihei Blvd",
              "2. Defeat assassin (weak defense, twin daggers)",
              "3. Fight Kunieda and four men en route to Florist",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "The Last Assassin",
            location: "Theater Square",
            reward: "Amon Sunglasses",
            requirements: "Complete all 77 other substories.",
            guide: [
              "1. Prepare with Dragon Mail and healing items",
              "2. Approach man in dark sunglasses",
              "3. Phase 1: Fisticuffs (use Tiger Drop + Time For Destruction)",
              "4. Watch for grenade throws after backflip",
              "5. Phase 2: Dagger (extremely dangerous)",
              "6. Counter spin attack and rushing attacks",
            ].join("\n"),
            videoId: "",
          },
        ],
      },
    },
  },
  "Yakuza PS2": {
    logo: "./images/logos/Yakuza.webp",
    characters: {
      "Kazuma Kiryu": {
        image: "👨‍💼",
        substories: [],
      },
    },
  },
  "Yakuza Kiwami 2": {
    logo: "./images/logos/Y2Kiwami.webp",
    characters: {
      "Kazuma Kiryu": {
        image: "👨‍💼",
        substories: [],
      },
    },
  },
  "Yakuza 2 PS2": {
    logo: "./images/logos/Yakuza2.webp",
    characters: {
      "Kazuma Kiryu": {
        image: "👨‍💼",
        substories: [],
      },
    },
  },
  "Yakuza 3": {
    logo: "./images/logos/Y3.webp",
    characters: {
      "Kazuma Kiryu": {
        image: "👨‍💼",
        substories: [],
      },
    },
  },
  "Yakuza 4": {
    logo: "./images/logos/Y4.webp",
    characters: {
      "Shun Akiyama": {
        image: "./images/characters/Akiyama/AkiyamaY4.webp",
        substories: [
          {
            name: "The Fate of the 30 Million Yen",
            location:
              "Sky Finance → Taihei Lockers → Children's Park → Le Marche → Hotel District",
            reward: "Gold Plate",
            requirements: "Finished Chapters 1-2",
            guide: [
              "1. Locate the man outside Sky Finance stairs",
              "2. Accept his loan request regarding his daughter's kidnapping",
              "3. Administer and approve the standard loan test",
              "4. Wait for Hana to prepare the 30 million yen",
              "5. Receive the father's call and collect the money",
              "6. Meet at Taihei Lockers and accompany him to the exchange",
              "7. Recover the daughter from the public bathroom",
              "8. Investigate suspicious activity at Children's Park",
              "9. Track Miki to Le Marche (she will flee)",
              "10. Follow her trail through Theater Square to Hotel District",
              "11. Confront the family in their hotel room",
              "12. Defeat the father in combat",
              "13. Recover the money and receive your reward",
            ].join("\n"),
            videoId: "dQw4w9WgXcQ",
          },
        ],
      },
      "Taiga Saejima": {
        image: "./images/characters/Saejima/SaejimaY4.webp",
        substories: [],
      },
      "Masayoshi Tanimura": {
        image: "./images/characters/Tanimura/TanimuraY4.webp",
        substories: [],
      },
      "Kiryu Kazuma": {
        image: "./images/characters/Kiryu/KiryuY4.webp",
        substories: [],
      },
    },
  },
  "Yakuza: Dead Souls": {
    logo: "./images/logos/DeadSouls.webp",
    characters: {
      "Shun Akiyama": {
        image: "./images/characters/Akiyama/AkiyamaDS.webp",
        substories: [],
      },
      "Goro Majima": {
        image: "./images/characters/Majima/MajimaDS.webp",
        substories: [],
      },
      "Ryuji Goda": {
        image: "./images/characters/Ryuji/RyujiDS.webp",
        substories: [],
      },
      "Kazuma Kiryu": {
        image: "./images/characters/Kiryu/KiryuDS.webp",
        substories: [],
      },
    },
  },
  "Yakuza 5": {
    logo: "./images/logos/Y5.webp",
    characters: {
      "Kazuma Kiryu": {
        image: "./images/characters/Kiryu/KiryuY5.webp",
        substories: [
          {
            name: "From a Far-off Land",
            location:
              "Nagasu Blvd/Ose Bridge intersection → Taxi Office → Convenience Store ATM",
            reward: "None (story reward)",
            requirements: "Evening in Chapter 2, 70,000 yen total",
            guide: [
              "1. Witness mother/son conversation at intersection",
              "2. Visit Taxi Office and speak to Wada (back room)",
              "3. Use any convenience store ATM:",
              "   • Send 8 payments (one per orphanage child)",
              "   • Total cost: 70,000 yen",
              "   • Earn money via taxi missions if needed",
              "4. Complete after final transfer",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "Taxi SOS",
            location: "Ebisu Pawn → Nagasu Blvd → Suzukake Lane → Parking Lot",
            reward: "Staminan Royale",
            requirements: "Beginning of Chapter 2",
            guide: [
              "1. Start at parking lot near Ebisu Pawn (couple discussing taxi)",
              "2. Head north on Nagasu Blvd to spot fleeing taxi",
              "3. Follow sequence:",
              "   • First chase: Taxi escapes north",
              "   • Bystander directs you to Suzukake Lane",
              "   • Second chase: Taxi speeds west then south",
              "4. Final confrontation in parking lot",
              "5. Defeat shady character in combat",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "King of the Mixer",
            location: "Ose Bridge Blvd East → Mixer Venue",
            reward: "Calming Towel",
            requirements: "After recruiting Kiyokawa",
            guide: [
              "1. Find Kiyokawa and Muramatsu near Motsunabe Kaede",
              "2. Join their mixer event",
              "3. Success path (one possible combination):<br>",
              "   • <b>'Drop chopstick'</b><br>",
              "   • <b>'Introductions'</b><br>",
              "   • <b>'Hobby'</b><br>",
              "   • <b>'King's Game'</b><br>",
              "   • <b>'3 and 4 kiss'</b>",
              "4. Other combinations may also succeed",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "Hunt for the Kidnapper",
            location: "Intersection near M Store",
            reward: "20,000 yen",
            requirements: "Evening in Chapter 2",
            guide: [
              "1. Find Wada north of Taxi Office near M Store",
              "2. Witness hit-and-run kidnapping",
              "3. Chase sequence (2:30 time limit):",
              "   • Follow through city streets",
              "   • Must catch up before timer expires",
              "4. Combat against Itoda + 2 kidnappers",
              "5. Tip: Ideal for practicing Komaki Shot Stopper",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "Another Haruka",
            location: "Chikuzengawa St. → Omusubi Mura",
            reward: "1-2-3 Gum, Beads of Good Fortune",
            requirements: "Beginning of Chapter 2",
            guide: [
              "1. Walk along Chikuzengawa St. near Save Point (hear dog whining)",
              "2. Descend to riverbank to find animal abusers",
              "3. Intervene and defeat all attackers",
              "4. Meet girl attempting to rescue dog",
              "5. Travel to Nagasu Blvd near Omusubi Mura",
              "6. Speak to girl's father",
              "7. Return for second combat encounter",
              "8. Tip: Good opportunity to practice Team Heat Moves",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "Cyberterrorism",
            location: "Nagasu Taxi Office",
            reward: "Staminan Spark",
            requirements: "Evening in Chapter 2",
            guide: [
              "1. Find Muramatsu at computer in Taxi Office",
              "2. Initiate dialogue about computer issues",
              "3. Critical actions in order:<br>",
              "   • <b>'Pull the cord'</b> (unplug LAN)<br>",
              "   • After moaning voice appears, <b>'Put it back in'</b><br>",
              "   • When Nakajima reaches for power cord, <b>'Stop him'</b>",
              "4. Wait for Hirakawa to resolve the joke virus",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "Kiryu the Actor",
            location: "Taxi Office exterior",
            reward: "Up to 100,000 yen",
            requirements: "Chapter 4",
            guide: [
              "1. Speak to exhausted Kudarizaka outside Taxi Office",
              "2. Participate in yakuza film shoot",
              "3. Critical sequence:<br>",
              "   • Line 1: <b>'I'm here to end this, brother.'</b><br>",
              "   • Line 2: <b>'You're a vampire, right?'</b><br>",
              "   • Combat: Defeat zombies in EXACT order:<br>",
              "     1. <b>Hair combed back</b><br>",
              "     2. <b>Wearing hat</b><br>",
              "     3. <b>Yellow jacket</b><br>",
              "     4. <b>Glasses</b><br>",
              "   • Line 3: <b>'Let's see if you're really immortal or not.'</b><br>",
              "   • Combat: Finish 6 zombies with Heat Actions (Essence of Terror ideal)<br>",
              "   • Line 4: <b>'The Hazy Moon you stole from the boss was fake.'</b><br>",
              "   • Finale: Defeat Yamashiro with katana Heat Move<br>",
              "   • Line 5: <b>'The boss is waiting for you in Hell.'</b>",
              "4. Perfect execution earns maximum reward",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "A Chance Meeting",
            location: "South District Phone Booth → La Seine",
            reward: "None (story)",
            requirements: "Chapter 4 progression",
            guide: [
              "1. Find Muramatsu near southern phone booth",
              "2. Yuya arrives - play dumb twice to avoid suspicion",
              "3. Receive follow-up text about La Seine",
              "4. Visit La Seine twice (with time delay between)",
              "5. Final combat against yakuza group",
              "6. Tip: Great for Team Heat Actions with Yuya",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "A Knock on the Door",
            location: "Kiryu's Apartment",
            reward: "High-Grade Platinum",
            requirements: "Start of Chapter 3",
            guide: [
              "1. Enter apartment at Chapter 3 start",
              "2. Encounter pushy newspaper salesman",
              "3. Reject all sales pitches",
              "4. Combat triggers outside apartment",
              "5. Defeat salesman to conclude",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "Dragon Seafood Rice Bowl",
            location: "Chikuzengawa St. (northern riverside)",
            reward: "Unlocks Dragon Seafood Bowl at Sushi Zanmai",
            requirements: "Beginning of Chapter 2",
            guide: [
              "1. Head to the northern riverside of Chikuzengawa St.",
              "2. Look for a group of fishermen (unusual gathering)",
              "3. Speak to the large man in a white coat",
              "4. Accept his fishing tutorial",
              "5. River Fishing Phase:",
              "   • Use provided buns as bait",
              "   • Watch the bobber and mash confirm when it submerges",
              "   • You get three attempts",
              "6. Sea Fishing Phase (optional):",
              "   • More complex mechanics (see Minigames section for details)",
              "   • Best outcome is a draw",
              "   • Can surrender immediately if uninterested",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "The Spangled Meteor",
            location: "Joy Land → Omusubi Mura → Taxi Office",
            reward: "30,000 yen, Mystery Stone",
            requirements: "Chapter 2 (after some progression)",
            guide: [
              "1. Inspect flashy car near Joy Land (southeast)",
              "2. Encounter Wada discussing Vixen Zeroes",
              "3. Head to Omusubi Mura for combat against club barkers",
              "4. Important: Confirm car's name is <b>'The Spangled Meteor'</b>",
              "5. Return to Taxi Office for racing challenge:",
              "   • 2 laps (Intermediate + Advanced courses)",
              "   • Requires well-tuned vehicle",
              "   • Opponent is faster than average",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "Dragon Mask Redux",
            location: "La Seine exterior → Kiryu's Apartment → Wrestling Arena",
            reward: "20,000 yen",
            requirements: "Chapter 4",
            guide: [
              "1. Talk to Hors d'Oeuvre Morosawa outside La Seine",
              "2. Initial combat encounter",
              "3. Retrieve Dragon Mask from apartment corner",
              "4. Optional: Complete immediately or later",
              "5. Wrestling match against easy opponent",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "A Plea to the Gods",
            location: "Ose Bridge",
            reward: "Alertness Hood",
            requirements: "Beginning of Chapter 2",
            guide: [
              "1. Go to Ose Bridge at the start of Chapter 2",
              "2. Find the distressed student who lost his test answers",
              "3. Provide the correct answers in order:<br>",
              "   • <b>'Movement'</b><br>",
              "   • <b>'One in six'</b><br>",
              "   • <b>'Commodore Perry'</b><br>",
              "   • <b>'Gravitational potential energy'</b><br>",
              "   • <b>'Seize the day'</b>",
              "4. Note: These answers are for the Remastered version only (PS3 version differs)",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "Fast Food!",
            location: "Outside Don Quijote (north)",
            reward: "20,000 yen, Hercules Gloves",
            requirements: "Evening in Chapter 2",
            guide: [
              "1. Find collapsed man outside Don Quijote",
              "2. Accept food stand delivery mission",
              "3. Driving mechanics (similar to taxi but simplified):",
              "   • Ignore acceleration/braking rules",
              "   • Avoid crashes and road departures",
              "   • Running red lights allowed",
              "4. Perfect delivery earns maximum rewards",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "Got to be Firm",
            location: "Southwest Food Stalls",
            reward: "Up to 12,000 yen",
            requirements: "Evening in Chapter 2",
            guide: [
              "1. Visit southwest food stalls ONLY during evening",
              "2. Enter southernmost stall",
              "3. Complete Tatsuya Noodles minigame:",
              "   • Basic completion fulfills substory",
              "   • Top ranking earns maximum 12,000 yen",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "Mack Returns",
            location: "Automatic during Chapter 3",
            reward: "Unlocks Revelations",
            requirements: "Story progression in Chapter 3",
            guide: [
              "1. Unavoidable story-based substory",
              "2. Progress through Chapter 3 naturally",
              "3. Becomes accessible during 'The Dragon's Return' mission",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "Amon",
            location: "Complete all substories first",
            reward: "Legendary Fighter Unlock",
            requirements: "All other substories completed",
            guide: [
              "1. Must complete every other substory in the game",
              "2. Amon will appear at a designated location",
              "3. Prepare for extremely difficult combat",
              "4. Uses advanced techniques and weapons",
              "5. Victory grants special title/abilities",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "The Perfect Seasoning",
            location: "Cafe Alps → Theater Square",
            reward: "Unlocks Ultimate Neapolitan",
            requirements:
              "Complete all Tatsuya substories, Chapter 1 Finale start",
            guide: [
              "1. Visit Cafe Alps during Finale Chapter 1",
              "2. Resolve thug confrontation",
              "3. Requires completed Tatsuya substories:",
              "   • If incomplete, wait for Tatsuya's call",
              "4. Pick up Tatsuya at Theater Square when ready",
              "5. Automatic completion after reunion",
            ].join("\n"),
            videoId: "",
          },
        ],
      },
      "Taiga Saejima": {
        image: "./images/characters/Saejima/SaejimaY5.webp",
        substories: [
          {
            name: "Truth and Lies",
            location: "Lavender St. → Don Quijote → Ramen Village",
            reward: "None (story progression)",
            requirements: "After entering Bar Ambitious casino",
            guide: [
              "1. Find hostesses near Lavender St. Save Point",
              "2. Investigate Himura's spending at Don Quijote (worker conversation)",
              "3. Listen to detectives on Central St.",
              "4. Final confrontation at Ramen Village (southeast)",
              "5. Defeat all yakuza in combat",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "Snow Festival Performer",
            location: "Main St. Park (east side)",
            reward: "Unlocks Revelation",
            requirements: "Day before Snow Festival",
            guide: [
              "1. Talk to colorfully-dressed man in park",
              "2. Examine nearby snowman",
              "3. Return to performer for instant completion",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "Pursuer and Pursued",
            location: "Bar Ambitious casino → Streets",
            reward: "None (story)",
            requirements: "After raiding Bar Ambitious casino",
            guide: [
              "1. Re-enter casino and speak to drunk patron",
              "2. Follow him outside after multiple dialogues",
              "3. Chase sequence through streets",
              "4. Combat against pursuing thugs",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "A Familiar Dojo",
            location: "Sodachi Dojo (northwest Kamurocho)",
            reward: "Combat EXP",
            requirements: "Prologue or Finale return to Kamurocho",
            guide: [
              "1. Visit Sodachi Dojo north of Mach Bowl",
              "2. Spar with dojo members (nostalgic reunion)",
              "3. Defeat all opponents in combat",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "A Special Place",
            location: "Near Sodachi Dojo → Interior",
            reward: "Weapons (from defeated thugs)",
            requirements: "After completing A Familiar Dojo",
            guide: [
              "1. Move away from dojo until map marker appears",
              "2. Find injured dojo member nearby",
              "3. Enter building to confront armed thugs",
              "4. Tip: Loot weapons during combat for future use",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "The Santa Hunters",
            location: "West of Polaris",
            reward: "Festive Outfit (equipment)",
            requirements: "Chapter 4 in Tsukimino",
            guide: [
              "1. Initial false alarm with 'dead Santa'",
              "2. Chase sequence with gift-demanding children",
              "3. Actual combat against Santa Hunter gang",
              "4. Note: Contains humorous holiday-themed dialogue",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "Snow Festival Map",
            location: "Main St. Park (west side)",
            reward: "Mystery Stone",
            requirements: "Day before Snow Festival",
            guide: [
              "1. Speak to man in yellow jacket",
              "2. Investigate four snow statues personally",
              "3. Return with correct answers:<br>",
              "   • <b>'A magic girl'</b><br>",
              "   • <b>'Some seals'</b><br>",
              "   • <b>'A whale'</b><br>",
              "   • <b>'A fox'</b>",
              "4. Perfect answers required for reward",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "Dreams of the Big City",
            location: "Hunting Village → Apocalypse Bar",
            reward: "Letter of Thanks",
            requirements: "Chapter 3 (starts in village)",
            guide: [
              "1. Talk to boy by fishing spot (before leaving village)",
              "2. Return after progressing story to receive mother's letter",
              "3. Deliver to Apocalypse Bar (Lavender St.)",
              "4. Street combat against harassers east of bar",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "Gourmet Traveler",
            location: "Chou Blvd. alley → Hunting Village",
            reward: "Celebrity Perfume",
            requirements: "Chapter 4 in Tsukimino",
            guide: [
              "1. Meet Yamashita west of Curry Shop S",
              "2. Lamb BBQ restaurant scene (deer stew mention)",
              "3. Taxi chase to hunting village",
              "4. Mountain rescue sequence",
              "5. Deer meat collection and cooking minigame",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "The Ultimate in Warmth",
            location: "East end of Tsukasa St.",
            reward: "50,000 yen",
            requirements: "Chapter 4 in Tsukimino",
            guide: [
              "1. Speak to prototype coat inventor",
              "2. Fire extinguisher mechanics:<br>",
              "   • <b>Fighting Stance required</b><br>",
              "   • <b>Hold Heavy Attack to spray</b>",
              "3. Extinguish all flaming test dummies",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "Set Free",
            location: "West of Ebisu Pawn",
            reward: "30,000 yen",
            requirements: "Chapter 4 in Tsukimino",
            guide: [
              "1. Witness car crash event",
              "2. Surprise bear combat encounter",
              "3. Reward from grateful bystander",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "The Little Match Girl",
            location: "Bar Ambitious casino exterior",
            reward: "Protective Amulet",
            requirements: "After entering casino",
            guide: [
              "1. Buy initial matchbook",
              "2. Return with convenience store food",
              "3. Choice branch:<br>",
              "   • <b>Buy remaining matches</b> (direct completion)<br>",
              "   • <b>Help sell matches</b> (additional dialogue)",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "The Frozen City",
            location: "Don Quijote alley → Main St.",
            reward: "High-Grade Cigarettes",
            requirements: "Chapter 4 in Tsukimino",
            guide: [
              "1. Find man in alley east of Don Quijote",
              "2. Purchase ramen/yakisoba inside store",
              "3. Deliver food to alley man",
              "4. Rescue mission on Main St. (north east)",
              "5. Combat against money-hungry thugs",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "Slip and Slide",
            location: "Central Station Blvd. & Nakatsuki St.",
            reward: "Balance Bracelet",
            requirements: "Chapter 4 in Tsukimino",
            guide: [
              "1. Find fallen ramen delivery man",
              "2. Special ice physics:<br>",
              "   • <b>Accumulating momentum</b><br>",
              "   • <b>Precision steering required</b>",
              "3. Avoid slipping pedestrians",
              "4. Note: 'Star' rating requires flawless delivery",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "Winter Combat",
            location: "Main St. Park (southwest corner)",
            reward: "Unlocks Snowball Fight minigame",
            requirements: "Day before Snow Festival",
            guide: [
              "1. Automatic trigger when entering park area",
              "2. Tutorial for snowball mechanics",
              "3. Immediate completion after explanation",
            ].join("\n"),
            videoId: "",
          },
        ],
      },
      "Haruka Sawamura": {
        image: "./images/characters/Haruka/HarukaY5.webp",
        substories: [
          {
            name: "The Letters",
            location: "Bunzaemon Mall (near taxi stand)",
            reward: "20,000 yen",
            requirements: "Chapter 2",
            guide: [
              "1. Receive texts from Ayako at southwest save point",
              "2. Attend Okinawa interview at Bunzaemon Mall",
              "3. Correct answers:<br>",
              "   • <b>'Prove them wrong'</b><br>",
              "   • <b>'Looks aren't the only thing'</b><br>",
              "   • <b>'Just keep on doing what you've been doing'</b>",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "A Source of Strength",
            location: "Dyna Chair → Bunzaemon Mall entrance",
            reward: "Story progression",
            requirements: "Chapter 4 (after gaining Haruka control)",
            guide: [
              "1. Speak to Miss Yamaura at Dyna Chair",
              "2. Perform 'So Much More' at mall entrance",
              "3. Automatic completion after performance",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "Lost Dreams",
            location: "Public Park 3 → Nakamichi → Theater Square",
            reward: "Final dance battle unlock",
            requirements: "Chapter 4 Finale",
            guide: [
              "1. Trigger after Haruka's meeting in Public Park 3",
              "2. Approach crowd north of Nakamichi",
              "3. Speak to Ms. Yamaura",
              "4. Find Ms. Kurata in northwest Theater Square",
              "5. Final dance battle challenge",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "A Normal Life",
            location: "Bishamon Bridge",
            reward: "Toughness ZZ",
            requirements: "Complete 3rd Dance Battle Story",
            guide: [
              "1. Meet high-schoolers on bridge",
              "2. Okonomiyaki dialogue choices:<br>",
              "   • <b>'You two seem close'</b><br>",
              "   • <b>'Appleton'</b><br>",
              "   • <b>'To spend time with friends of the same age'</b><br>",
              "   • <b>'I want to concentrate on my career'</b>",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "Manager for a Day",
            location: "Northeast takoyaki stand",
            reward: "30,000 yen",
            requirements: "Chapter 2",
            guide: [
              "1. Speak to takoyaki stand owner",
              "2. Sample takoyaki",
              "3. Organize and complete handshake event",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "The Announcer School",
            location: "Northeast of southeast save point",
            reward: "Completion certificate",
            requirements: "Chapter 2",
            guide: [
              "1. Accept business card from woman on street",
              "2. Grammar correction section:<br>",
              "   • <b>'Alyssa and me did our homework together'</b><br>",
              "   • <b>'If I'd known, I would of done it differently'</b><br>",
              "   • <b>'I accidently took the wrong bus'</b>",
              "3. Tongue twisters:<br>",
              "   • Seashells: 2nd, 3rd, 1st<br>",
              "   • Peter Piper: 1st, 1st, 2nd<br>",
              "   • Anemone: 3rd, 3rd, 2nd",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "Gourmet Reporter",
            location: "Northeast of apartment",
            reward: "10,000 yen",
            requirements: "Complete Tatsuya's training",
            guide: [
              "1. Find ill Tatsuya near apartment",
              "2. Food review responses:<br>",
              "   • <b>'First time'</b><br>",
              "   • <b>'Melting in the mouth'</b><br>",
              "   • <b>'It smells really fresh'</b><br>",
              "   • <b>'Don't even have to chew it'</b>",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "SBR99",
            location: "South of Dyna Chair office",
            reward: "10,000 yen",
            requirements: "Chapter 2",
            guide: [
              "1. Meet TV producer Fuyumoto",
              "2. Complete three events:<br>",
              "   • Dance battle (easy mode)<br>",
              "   • Solo concert ('So Much More!')<br>",
              "   • Handshake event",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "Starbound",
            location: "East side of Iwao Bridge",
            reward: "Unlocks Revelation",
            requirements: "Chapter 2",
            guide: [
              "1. Meet large fan at bridge",
              "2. Extremely easy dance battle",
              "3. Immediate completion",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "Light and Dark",
            location: "South river footpath → Agency studio",
            reward: "Staminan Spark",
            requirements: "Chapter 2",
            guide: [
              "1. Find aspiring idol mid-river path",
              "2. Win initial dance battle",
              "3. Complete studio live event",
              "4. Final encounter dialogue choices:<br>",
              "   • <b>'It's natural to feel nervous'</b><br>",
              "   • <b>'Think positive'</b>",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "Magical Haruka",
            location: "Outside Club SEGA",
            reward: "Boost Heat Gauge ability",
            requirements: "Chapter 2",
            guide: [
              "1. Speak to Minamida's assistant",
              "2. IF8R magical girl combat demo:<br>",
              "   • <b>Light Attack</b> - Melee strikes<br>",
              "   • <b>Heavy Attack</b> - Charged projectiles",
              "3. Complete all trial challenges",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "Autograph Session",
            location: "Western intersection of Sotenbori St.",
            reward: "Staminan Royale",
            requirements: "Chapter 2",
            guide: [
              "1. Get swarmed by fans at intersection",
              "2. Sign autographs with correct name selections:<br>",
              "   • <b>2nd option</b><br>",
              "   • <b>3rd option</b><br>",
              "   • <b>3rd option</b><br>",
              "   • <b>1st option</b><br>",
              "   • <b>2nd option</b>",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "Watami vs. Watamin-chi",
            location: "Dyna Chair office → Audition",
            reward: "None (story progression)",
            requirements: "Chapter 2",
            guide: [
              "1. Trigger by walking past Watami",
              "2. Meet Yamaura at Dyna Chair",
              "3. Audition answers:<br>",
              "   • <b>'Good old-fashioned home cooking'</b><br>",
              "   • <b>'Wearing a cute cook's apron'</b><br>",
              "   • <b>'Red, Red, Fuzzy Cow Pow'</b><br>",
              "   • <b>'Haruka Sweet 17'</b>",
              "4. Final solo dance battle",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "Find the Paparazzi",
            location: "Bunzaemon Mall → West streets",
            reward: "10,000 yen",
            requirements: "Chapter 2",
            guide: [
              "1. Speak to Mr. Uda outside Bunzaemon Mall",
              "2. First spotting (west near pole):<br>",
              "   • <b>Press R3 for first-person view</b><br>",
              "   • Focus on obvious camera guy",
              "3. Second spotting (north up west street)",
              "4. Third spotting (bridge intersection near dancer)",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "Aspiring Comedians",
            location: "Northeast intersection on Sotenbori",
            reward: "Toughness ZZ",
            requirements: "Chapter 2",
            guide: [
              "1. Listen then speak to man in yellow/plaid",
              "2. Manzai comedy routine (straight man role)",
              "3. Timing system:<br>",
              "   • <b>Press when banana in red (Remaster meter)</b><br>",
              "   • <b>Respond immediately after Haruo finishes</b>",
              "4. First audition responses:<br>",
              "   • '...don't have a boyfriend?' → <b>'That's right'</b> (Square/X)<br>",
              "   • 'I was fighting them off...' → <b>'Really?'</b> (Circle/B)<br>",
              "   • 'Yeah, and I used to be...' → <b>'Oh yeah?'</b> (Triangle/Y)<br>",
              "   • Full table available in extended guide",
              "5. Requires 80+ Laughter Gauge to pass",
            ].join("\n"),
            videoId: "",
          },
        ],
      },
      "Shun Akiyama": {
        image: "./images/characters/Akiyama/AkiyamaY5.webp",
        substories: [
          {
            name: "Giving Up on a Dream",
            location: "Infomen office → Various locations",
            reward: "Story progression",
            requirements: "Chapter 3 (after meeting Saigo)",
            guide: [
              "1. Find woman in white coat near Infomen",
              "2. Complete three tasks in any order:",
              "   • Hostess club near Le Marche",
              "   • Southwest office building",
              "   • Final automatic story sequence",
              "3. Note: Similar structure to Yakuza 4 substory",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "Money and Pride",
            location: "Akiyama's office → Southeast taxi stand",
            reward: "Story resolution",
            requirements: "Chapter 4 of Part 3",
            guide: [
              "1. Receive text about Yamori",
              "2. Confrontation at office",
              "3. Chase sequence to taxi stand",
              "4. Building combat encounter",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "A Moneylender's Principles",
            location: "Iwao Bridge → Riichi Towers Mahjong",
            reward: "Angler's Hook",
            requirements: "Chapter 3",
            guide: [
              "1. Talk to man on bridge edge (west side)",
              "2. Follow to mahjong parlor",
              "3. Combat against loan sharks",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "New in Town",
            location: "Tsuruhari Fugetsu → City streets",
            reward: "Tattered Scarf",
            requirements: "Chapter 3",
            guide: [
              "1. Speak to businessmen outside Tsuruhari Fugetsu",
              "2. Initial combat",
              "3. Pursuit battle sequence",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "A Quirky Idol",
            location: "Southwest lockers → Ashitaba Park",
            reward: "Staminan Royale, Red Jewel",
            requirements: "Chapter 3",
            guide: [
              "1. Get bumped by girl near lockers",
              "2. Meet Strawberry Maya at park",
              "3. Magazine interview responses:<br>",
              "   • <b>'Maya didn't say that, pon!'</b><br>",
              "   • <b>'Maya isn't acting, pon!'</b>",
              "4. Select <b>'Love to See You Smile'</b>",
              "5. Quiz section (must answer WRONG):<br>",
              "   • Osaka bigger than Tokyo? <b>True</b><br>",
              "   • Drinking age 18? <b>True</b> (real age 20)<br>",
              "   • Full list in extended guide",
              "6. Final dialogue: <b>'Carry on for your fans'</b>",
              "7. Combat sequence",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "Haggle Wars",
            location: "Bunzaemon Mall → Various shops",
            reward: "Fitness Gear",
            requirements: "Chapter 3",
            guide: [
              "1. Find electronics salesman near Re-Venge Books",
              "2. Learn Osaka haggling",
              "3. Correct responses in order:<br>",
              "   • <b>'Nice shop you have here'</b><br>",
              "   • <b>'You're a pretty generous guy'</b><br>",
              "   • <b>'Pardon me, but were you an actress?'</b><br>",
              "   • <b>'Your selection here's brilliant'</b><br>",
              "   • <b>'Has this shop been here a long time?'</b><br>",
              "   • <b>'You're an exemplary merchant'</b><br>",
              "   • <b>'I'll take them'</b>",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "The Stalker",
            location: "Dyna Chair → Haruka's Apartment",
            reward: "Royal Joker Card",
            requirements: "Chapter 4 of Part 3",
            guide: [
              "1. Speak to Yamaura at Dyna Chair",
              "2. Investigate Haruka's apartment",
              "3. Chase sequences:<br>",
              "   • Businessman chase",
              "   • Jersey guy pursuit",
              "4. Final gangster combat",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "Geriatric Dance-Off",
            location: "Near Kamiyama Works",
            reward: "1,000 yen",
            requirements: "Complete 'Dancin' Akiyama'",
            guide: [
              "1. Find dancing old lady near workshop",
              "2. Special dance battle mechanics:<br>",
              "   • Uses Akiyama's unique dance style",
              "   • Easier than standard battles",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "Okonomiyaki Performer",
            location: "Southeast save point",
            reward: "Revelation unlock prep",
            requirements: "Chapter 3",
            guide: [
              "1. Visit okonomiyaki stand near save point",
              "2. Defeat harassers in combat",
              "3. Return later for Revelation",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "Dancin' Akiyama",
            location: "Bunzaemon Mall exterior",
            reward: "Toughness ZZ, Toughness Emperor",
            requirements: "Chapter 3",
            guide: [
              "1. Intervene in yakuza shakedown",
              "2. Accept Hide's dance challenge",
              "3. Initial response: <b>'I didn't say that, yo'</b>",
              "4. Unique Akiyama dance mechanics:<br>",
              "   • Special Heat Moves available",
              "   • Simpler than Haruka's routines",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "A Stubborn Old Man",
            location: "Tsuruhari Fugetsu area",
            reward: "Zero Jewel",
            requirements: "Chapter 3",
            guide: [
              "1. Witness old man scolding gangster",
              "2. Team combat with old man ally",
              "3. Tip: Use Team Heat Actions frequently",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "Treats from All Over",
            location: "Nakamichi St. → New Serena",
            reward: "20,000 yen, Cod Roe Blackjack",
            requirements: "Finale chapter",
            guide: [
              "1. Meet Ueyama near Pronto",
              "2. Gather suggestions at New Serena:<br>",
              "   • Kiryu: <b>'Mentaiko'</b><br>",
              "   • Saejima: <b>'Salmon'</b><br>",
              "   • Shinada: <b>'Chicken wings'</b>",
              "3. Complete Kushikatsu Daruma menu",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "Bad Boys",
            location: "Millennium Tower → Elise",
            reward: "Durable Cloth",
            requirements: "Finale (Kamurocho section)",
            guide: [
              "1. Find Saida south of Millennium Tower",
              "2. Initial dialogue choices:<br>",
              "   • <b>'You look unhip'</b><br>",
              "   • <b>Offer help</b>",
              "3. Investigate Elise and Poppo magazine stand",
              "4. Multiple follow-up scenes",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "Subsidized Relationships",
            location: "Bishamon Bridge → Karaokekan",
            reward: "1,000 yen",
            requirements: "Chapter 3",
            guide: [
              "1. Speak to waiting woman (east bridge)",
              "2. Combat west of Karaokekan",
              "3. Secondary combat sequence",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "The Cursed PrintCircle",
            location: "Club SEGA → Northwest save point",
            reward: "Sacrifice Stone",
            requirements: "Chapter 3",
            guide: [
              "1. Listen to girls near northwest save point",
              "2. Investigate right Club SEGA photo booth",
              "3. Ghost chase sequence",
              "4. Return to girls for reward",
            ].join("\n"),
            videoId: "",
          },
        ],
      },
      "Tatsuo Shinada": {
        image: "./images/characters/Shinada/ShinadaY5.webp",
        substories: [
          {
            name: "Dirty Heart",
            location: "Outside M Store → Backstreets",
            reward: "Cherry Tree Branch",
            requirements: "Chapter 2",
            guide: [
              "1. Approach Miyu outside M Store",
              "2. Follow her when she walks away",
              "3. Confront and defeat abusive man in combat",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "Daddy Papa",
            location: "Ebisu Pawn → Various locations",
            reward:
              "Cutie Girl Figure, 4,000 yen, Autograph (sells for 50,000)",
            requirements: "Complete 'The Scoop Photo' (Chapter 3)",
            guide: [
              "1. Rescue man outside Ebisu Pawn",
              "2. Escort Daddy Papa with these choices:<br>",
              "   • <b>'Oval Stage lookout'</b><br>",
              "   • <b>'Sekai no Yamachan'</b><br>",
              "3. Toast selections:<br>",
              "   • <b>'Your gorgeous eyes'</b><br>",
              "   • <b>'Songs to cheer on the weak'</b>",
              "4. Chase sequence and final combat",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "Saving Yourself",
            location: "Hawaiian Pub → Info Booth",
            reward: "Sacred Wood",
            requirements: "Chapter 2",
            guide: [
              "1. Speak to couple outside Hawaiian Pub (near Cafe Alps)",
              "2. Find girl at Obiita info booth",
              "3. Defeat harassers in combat",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "Want to Party?",
            location: "Tsumugi St. & Icho St. (north end)",
            reward: "Cherry Tree Branch",
            requirements: "Chapter 2",
            guide: [
              "1. Speak to ill woman on street corner",
              "2. Provide energy drink (buy if needed)",
              "3. Defeat pimps in combat",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "The Sweet Spot",
            location: "Batting Center",
            reward: "Unlocks Revelation",
            requirements: "Chapter 2",
            guide: [
              "1. Speak to Pedro at batting center",
              "2. Hit at least 1 home run in 10 pitches",
              "3. Note: Opens Revelation opportunity",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "Shinada's Interview",
            location: "West Tsumugi St. (between Obiita & Donjincho)",
            reward: "30,000 yen",
            requirements: "Chapter 2",
            guide: [
              "1. Speak to manager on west Tsumugi",
              "2. Complete interview (responses unimportant)",
              "3. Critical choice: <b>'I swear to it!'</b>",
              "4. Final combat sequence",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "Next!",
            location: "Obiita & Tsumugi (southeast corner)",
            reward: "Money refund",
            requirements: "Chapter 2",
            guide: [
              "1. Pay 4,500 yen to vest/bow tie man",
              "2. In massage parlor, choose <b>'Run like hell'</b>",
              "3. Automatic money return",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "Miki's Job",
            location: "Batting Center",
            reward: "Food items, health recovery",
            requirements: "Chapter 4",
            guide: [
              "1. Initial visit: 1 home run in 3 pitches",
              "2. Second visit: 2 home runs in 5 pitches (lunch reward)",
              "3. Third visit: 5 successful hits (no misses)",
              "4. Note: Progressively challenging batting tests",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "Getting it Sorted",
            location: "Kume & Goshiki (south end)",
            reward: "1,000 yen",
            requirements: "Chapter 2",
            guide: [
              "1. Help reorganize fallen papers",
              "2. Correct orders:<br>",
              "   • First set: <b>4, 2, 1, 3</b><br>",
              "   • Second set: <b>3, 2, 1, 4</b>",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "A Precious Meal",
            location: "Oval Stage (north side) → M Store",
            reward: "High-Grade Platinum",
            requirements: "Chapter 2",
            guide: [
              "1. Accept 500 yen challenge from seated man",
              "2. Purchase <b>Miso Katsu Lunch Set</b> at M Store",
              "3. Return meal for reward",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "The Old Scout's Eyes",
            location: "Kume & Icho → Mid Square",
            reward: "None (story)",
            requirements: "Chapter 2",
            guide: [
              "1. Meet Seto at north intersection",
              "2. Chase Kurashina through streets",
              "3. Combat sequences:<br>",
              "   • Mid Square encounter<br>",
              "   • Additional fights during pursuit",
              "4. Note: Health drains during chase",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "The Scoop Photo",
            location: "Publishing Office → Club Eden",
            reward: "10,000 yen",
            requirements: "Chapter 3",
            guide: [
              "1. Get assignment at publishing office",
              "2. Find Michiru Yamazaki outside Club Eden",
              "3. Follow at walking pace (stealth required)",
              "4. Take photos at endpoint",
              "5. Escape chase sequence",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "Get Out the Vote",
            location: "Oval Stage (southwest area)",
            reward: "Political favor",
            requirements: "Chapter 2",
            guide: [
              "1. Speak to dejected politician",
              "2. Return later for endorsement speech",
              "3. Correct answers:<br>",
              "   • <b>'Ramen Shachoko'</b><br>",
              "   • <b>'Use transfers from the national treasury'</b><br>",
              "   • <b>'Reducing the corporate tax burden'</b><br>",
              "   • <b>'To raise the child tax benefit'</b>",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "Shinada the Store Clerk",
            location: "M Store",
            reward: "5,000 yen, Tauriner +, Expired Lunch Set",
            requirements: "Complete 'Dirty Heart'",
            guide: [
              "1. Speak to manager about shoplifter",
              "2. Customer service responses:<br>",
              "   • <b>'Should I microwave this?'</b><br>",
              "   • <b>'A fork'</b><br>",
              "   • <b>'9700 yen'</b><br>",
              "   • Full list in extended guide",
              "3. Shoplifter pursuit sequence",
              "4. Warning: Discard Expired Lunch Set (reduces health)",
            ].join("\n"),
            videoId: "",
          },

          {
            name: "Getting Rich Quick",
            location: "Southwest save point alcove",
            reward: "Unlocks Cochins Cup Classic",
            requirements: "Chapter 2",
            guide: [
              "1. Find chicken near southwest save point",
              "2. Pursue and catch weak chicken",
              "3. Automatic entry to chicken racing minigame",
            ].join("\n"),
            videoId: "",
          },
        ],
      },
    },
  },
  "Yakuza 6 : The Song of Life": {
    logo: "./images/logos/Y6.webp",
    characters: {
      "Kazuma Kiryu": {
        image: "👨‍💼",
        substories: [
          {
            name: "Haruka's Biggest Fan",
            location: "Children's Park → Various locations",
            reward: "Haruka's Bromide, Drawing of Haruka",
            requirements: "Chapter 1",
            guide: [
              "1. Approach arguing mom/daughter in Children's Park",
              "2. Answer question however you want",
              "3. Go to Don Quijote, then Theater Square Club SEGA",
              "4. Answer quiz: 'So Much More!'",
              "5. Buy 'Haruka's Bromide' at Ebisu Pawn (50,000 yen)",
              "6. Return to Children's Park",
              "7. Return later for final reward",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "I, Hiji",
            location: "West of Ebisu Pawn → Children's Park",
            reward: "Good Luck Amulet",
            requirements: "Chapter 1",
            guide: [
              "1. Talk to phone guy west of Ebisu Pawn",
              "2. Agree to try 'Hiji' assistant",
              "3. Go to Children's Park, answer questions",
              "4. Save woman from drunkard",
              "5. Return to salesman on Nakamichi",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "Face Your Fears",
            location: "Club Shine → Millennium Tower",
            reward: "Hostess-specific",
            requirements: "Raise Saki to Diamond rank",
            guide: [
              "1. Meet Saki in front of Millennium Tower",
              "2. Defend kid fan from bullies",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "A Shady Business",
            location: "Club Shine → Senryo Ave/Taihei corner",
            reward: "Hostess-specific",
            requirements: "Raise Hikaru to Diamond rank",
            guide: [
              "1. After Hikaru's Diamond event, go to Senryo/Taihei corner",
              "2. Follow Hikaru south down Senryo Ave",
              "3. Defeat thugs in building",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "Listen to Your Heart",
            location: "Club Shine → Theater Square",
            reward: "Hostess-specific",
            requirements: "Raise Sora to Diamond rank",
            guide: [
              "1. Meet Sora at Theater Square",
              "2. Answer questions however you wish",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "Caught in a Love Triangle",
            location: "Club Shine → Theater Square",
            reward: "Hostess-specific",
            requirements: "Raise Erina to Diamond rank",
            guide: [
              "1. Meet Erina at marked spot in Theater Square",
              "2. Defeat stalker after dinner",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "Hostess with a Heart of Gold",
            location: "Club Shine → Pink Street",
            reward: "Hostess-specific",
            requirements: "Raise Riona to Diamond rank",
            guide: [
              "1. Meet Riona north on Pink Street",
              "2. Defeat guy harassing hostess",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "Look What the Dragon Dragged In",
            location: "Nyan Nyan Cafe (Senryo Ave)",
            reward: "Starts Cat Cafe sidequest",
            requirements: "Chapter 1",
            guide: [
              "1. Enter Nyan Nyan Cafe building",
              "2. Talk to unsatisfied customer",
              "3. Speak to proprietor about missing cats",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "The Temptation of Live Chat",
            location: "Wette Kitchen → Net Cafe",
            reward: "Unlocks Live Chat minigame",
            requirements: "Chapter 1",
            guide: [
              "1. Witness argument outside Wette Kitchen",
              "2. Answer man's question however you wish",
              "3. Enter Net Cafe (north side of Theater Square SW corner)",
              "4. Approach guy to start Live Chat",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "We're Committed to Results",
            location: "RIZAP gym (Theater Alley)",
            reward: "Starts RIZAP challenges",
            requirements: "Chapter 1",
            guide: [
              "1. Walk past RIZAP gym in Theater Alley",
              "2. Agree to become member",
              "3. Complete first RIZAP Challenge",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "A Man Rises Up",
            location: "RIZAP gym → Streets → Children's Park",
            reward: "Yasuo Sodachi joins Kiryu Clan",
            requirements: "Complete #23, finishes in Chapter 6",
            guide: [
              "1. After #23, get approached outside gym",
              "2. Defeat Yasuo Sodachi",
              "3. Find and fight him twice as Troublr missions",
              "4. In Chapter 6, get text to meet at Children's Park",
              "5. Final battle with Sodachi",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "The Fools Who Dream",
            location: "Ryunan Shrine → Various locations",
            reward: "Expensive Leather Belt",
            requirements: "Chapter 4",
            guide: [
              "1. Witness argument at Ryunan Shrine",
              "2. Tell Misa 'Go tell him how you feel'",
              "3. Return when marker reappears",
              "4. Defeat harassers",
              "5. Chase Misa to south end of map",
              "6. Tell her 'Everyone just wants you to succeed'",
              "7. Later find senpai at Shopping Center for baseball team",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "Sins of the Father",
            location: "Second Hill path → Train tracks",
            reward: "Staminan Royale, Eye of the Dragon",
            requirements: "Chapter 4",
            guide: [
              "1. Talk to older couple on Second Hill path",
              "2. Agree to help expose cult",
              "3. Find women near train tracks, say 'I want to join...'",
              "4. Answer quiz correctly:",
              "   • 'Hept-onast'",
              "   • 'Kulipaas'",
              "   • 'Munan Akamatsu'",
              "   • 'Re-education'",
              "5. Defeat Munan Akamatsu",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "The Curse of Onomichi",
            location: "Cemetery (north part of town)",
            reward: "None",
            requirements: "Nighttime only",
            guide: [
              "1. Walk through cemetery at night",
              "2. Fight 'ghost'",
              "3. Return for 4 more ghost fights (2 then 3 enemies)",
              "4. Final fight triggers after story character leaves apartment",
              "5. Talk to gravekeeper to complete",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "Oh No! It's Ono Michio!",
            location: "Central Shopping District",
            reward: "Fighter's Binding",
            requirements: "Chapter 4",
            guide: [
              "1. Approach large orange mascot on ground",
              "2. Agree to become Ono Michio",
              "3. Dialogue choices:",
              "   • 'Introduce Yourself Passionately'",
              "   • 'Nice to michi!'",
              "   • 'Oh no!'",
              "   • 'Onomichi ramen-michi!'",
              "   • 'Oh no!'",
              "4. Defeat four punks",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "The Girl Who Leapt Through Time?",
            location: "Hilltop Path → Pedestrian Footbridge",
            reward: "None",
            requirements: "Chapter 4",
            guide: [
              "1. Meet girl claiming to be from future on Hilltop Path",
              "2. Say 'If you insist', ask any questions",
              "3. Find her worried on Pedestrian Footbridge",
              "4. Agree to hear story",
              "5. Defend father from thugs",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "A Freaky Situation",
            location: "Ryunan Shrine stairs",
            reward: "None",
            requirements: "Chapter 4",
            guide: [
              "1. Help couple that tumbles down shrine stairs",
              "2. Talk to Kazumi-in-Kazuo at top of stairs",
              "3. Defeat butler and thugs",
              "4. Focus on strongest fighter Muranaka",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "Assemble the Team",
            location: "Shoreline east of apartment → Baseball Field",
            reward: "Starts baseball minigame",
            requirements: "Daytime only",
            guide: [
              "1. Meet Chiba on shoreline east of apartment",
              "2. Take taxi to Baseball Field",
              "3. Complete first game (will lose)",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "We Need a Ringer",
            location: "Baseball Field → Hana-no-kubo",
            reward: "Adds Moritsuka to team",
            requirements: "Complete #34",
            guide: [
              "1. Return to Baseball Field after #34",
              "2. Find Moritsuka drunk in Hana-no-kubo",
              "3. Defeat him",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "The Sweet Taste of Victory",
            location: "Baseball Field",
            reward: "Progresses baseball storyline",
            requirements: "Complete #35",
            guide: [
              "1. Win your first baseball game",
              "2. Can win with base team against weaker opponent",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "Decisive Battle! Jingai Thunders",
            location: "Baseball Field",
            reward: "Progresses baseball storyline",
            requirements: "Complete #36",
            guide: [
              "1. Build up team through Conditional Games",
              "2. Get main lineup to at least Level 2",
              "3. Defeat Jingai Thunders main team",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "The Throne of Onomichi",
            location: "Baseball Field",
            reward: "Progresses baseball storyline",
            requirements: "Complete #37",
            guide: [
              "1. Get team to Level 3+ collectively",
              "2. Have good recruited players",
              "3. Defeat Onomichi Legends (former pros)",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "True Bonds",
            location: "Baseball Field → Navy Apartments",
            reward: "Kanamizawa joins Kiryu Clan",
            requirements: "Complete #38",
            guide: [
              "1. Get team to Level 5+",
              "2. Defeat Kanamizawa Gorgeous (bought pros)",
              "3. Meet Kanamizawa at Navy Apartments",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "The Old Man and the Sea",
            location: "Ferry Dock",
            reward: "High Impact Speargun",
            requirements: "Daytime only",
            guide: [
              "1. Examine fish pile at end of Ferry Dock",
              "2. Return after Isao busts leg",
              "3. Complete first Spearfishing course",
              "4. Defeat Emperor Squid",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "World's Best Octopus",
            location: "Ferry Dock → Sunken Labyrinth",
            reward: "High-capacity Speargun, Gorchev on team",
            requirements: "Complete #35 and #47",
            guide: [
              "1. Talk to baseball player near Isao/Amano",
              "2. Complete Sunken Labyrinth Spearfishing course",
              "3. Defeat Delicious Octopus",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "Deep Blue Sea",
            location: "Ferry Dock → Dragon's Den",
            reward: "Modded Speargun",
            requirements: "Complete #48",
            guide: [
              "1. Listen to Isao/Amano argument about Bloody Shark",
              "2. Complete Dragon's Den Spearfishing course (Level 4+)",
              "3. Defeat Bloody Shark",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "Crisis Management Professional",
            location: "Taxi Stand near Ropeway Station",
            reward: "Saigo joins Kiryu Clan",
            requirements: "Start in Ch4, finish in Ch5",
            guide: [
              "1. Find Saigo at Taxi Stand",
              "2. Need Bento Lunch Set (Pork) from Kamurocho",
              "3. Give bento, defeat Saigo",
              "4. Defeat him twice as Trouble Missions",
              "5. Final fight at Ropeway Station in Chapter 5",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "Pocket Circuit Fighter Returns",
            location: "Shops Alley → Ferry Dock",
            reward: "PCF joins Kiryu Clan",
            requirements: "Chapter 5",
            guide: [
              "1. Meet PCF selling tofu in Shops Alley",
              "2. Find his son east of La Pente entrance",
              "3. Return when marker appears",
              "4. Defend Sakito from thugs at Ferry Dock",
              "5. Return to Tofu Shop",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "The Ono Michio Show",
            location: "Hana-no-kubo → Snack New Gaudi",
            reward: "Yakuza Training Gear, Ono Michio's CD Sample",
            requirements: "Complete #29 and #40",
            guide: [
              "1. Meet producer at north entrance of Hana-no-kubo",
              "2. Perform 'Today is a Diamond' at Snack New Gaudi",
              "3. Any karaoke score completes it",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "Putting on a Brave Face",
            location: "Navy Apartments → Yonetoku",
            reward: "Drawing of Michio",
            requirements: "Complete #30",
            guide: [
              "1. Help girl arguing with mom across from Navy Apartments",
              "2. Get Ono Michio costume from Yonetoku",
              "3. Answer question however you want",
              "4. Defeat punks from previous substory",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "The Joys of Adulthood",
            location: "Hana-no-kubo → Snack New Gaudi",
            reward: "Starts Bar Chat minigame",
            requirements: "Complete #35, daytime in Ch5",
            guide: [
              "1. Meet Hatakeyama outside Snack New Gaudi",
              "2. Enter bar with him",
              "3. Meet mama-san and Kaneko",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "The Kabedon Prince",
            location: "Tenkaichi Alley backlot → Bantam",
            reward: "30,000 yen",
            requirements: "Chapter 6",
            guide: [
              "1. Save host from colorful guys in Tenkaichi Alley backlot",
              "2. Go to Bantam for drinks",
              "3. Answer question however you want",
              "4. Practice kabedon on Kamaishi",
              "5. Save host from goons again outside",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "Hey, It's Me!",
            location: "Nakamichi Alley → Millennium Tower",
            reward: "None",
            requirements: "Chapter 6/7",
            guide: [
              "1. Receive call from 'me' in Nakamichi Alley",
              "2. Select 'Taichi' then 'This is probably a scam' twice",
              "3. Find Ishigaki at Millennium Tower",
              "4. Defeat him and friend",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "Like, Comment, Subscribe",
            location: "Theater Square → Various locations",
            reward: "None",
            requirements: "Chapter 6",
            guide: [
              "1. Talk to selfie stick guy east side of Theater Square",
              "2. Find him at Batting Center",
              "3. Find him middle of Nakamichi St",
              "4. Look up at him dangling from building (R3 first-person)",
              "5. Enter Lullaby Mahjong, defeat yakuza",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "Runaway Robot",
            location: "Suppon St → Various locations",
            reward: "None",
            requirements: "Chapter 7 (daytime)",
            guide: [
              "1. Chase robot on Suppon St",
              "2. Talk to chasing guy, agree to help",
              "3. Follow path:",
              "   • North up Tenkaichi",
              "   • East on Taihei",
              "   • South at Pink St",
              "   • Curve along Nakamichi Alley",
              "   • Up Nakamichi to Tenkaichi Alley",
              "4. Defend robot from thugs",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "Follow That Drone!",
            location: "Fuji Soba → Various locations",
            reward: "None",
            requirements: "Chapter 7 (daytime)",
            guide: [
              "1. Listen to men talking outside Fuji Soba",
              "2. Approach shrieking people, get buzzed by drone",
              "3. Chase drone through:",
              "   • Theater Square",
              "   • Theater building",
              "   • Millennium Tower front",
              "   • Little Asia",
              "   • Taihei Blvd",
              "   • Pink Alley",
              "   • Senryo Ave",
              "   • Cat Cafe building",
              "4. Defeat crooks on 4th floor",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "Baring Their Fangs",
            location: "Tenkaichi St gate → Batting Center",
            reward: "None",
            requirements: "Chapter 6",
            guide: [
              "1. Watch TV announcement at Tenkaichi St gate",
              "2. Help guy on ground, learn about yellow tracksuit guy",
              "3. Find and defeat guy near Batting Center",
              "4. Chase to Shichifuku parking lot",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "A Rivalry Reborn",
            location: "Tenkaichi St gate → Batting Center",
            reward: "None",
            requirements: "Complete #8",
            guide: [
              "1. Return to Tenkaichi St gate after #8",
              "2. Receive call about captured guy",
              "3. Defeat elite Snake Flower forces at Batting Center",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "Swipe Right",
            location: "Theater Square → Various locations",
            reward: "None",
            requirements: "Chapter 6 (nighttime only)",
            guide: [
              "1. Stand in front of 'Beauty Relax Salon' at night",
              "2. Follow photo clues:",
              "   • Smile Burger on Nakamichi St",
              "   • Club SEGA in Theater Square",
              "   • New Serena rooftop (fire escape in back)",
              "3. Answer three questions however you want",
              "4. Defeat four punks",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "Favor for an Old Friend",
            location: "North Senryo Ave → Senryo building roof",
            reward: "None",
            requirements: "Chapter 6",
            guide: [
              "1. Get text from Date south of East Shichifuku Parking Lot",
              "2. Buy prepaid cards at Poppo on Tenkaichi St (50,000 yen)",
              "3. 'Ask why he wants them' then pry twice",
              "4. Meet on Senryo building roof (Cat Cafe building)",
              "5. Defeat six guys",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "The Legendary Paul Lim",
            location: "Bantam",
            reward: "Intermediate Darts",
            requirements: "Chapter 6",
            guide: [
              "1. Talk to gray jacket guy at Bantam",
              "2. Defeat Easy difficulty opponent in Darts",
              "3. Receive reward from Paul Lim",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "Showdown with Paul Lim",
            location: "Bantam",
            reward: "Paul Lim's Darts",
            requirements: "Complete #12 + defeat Medium/Hard opponents",
            guide: [
              "1. Defeat Medium/Hard opponents at Theater Square Club SEGA",
              "2. Return to Bantam dart board",
              "3. Play any game against Paul Lim",
              "4. Win or lose to get reward",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "Step Up to the Plate",
            location: "Batting Center",
            reward: "Yoshida joins Baseball team",
            requirements: "Complete 3 Challenge Courses in Chapter 6",
            guide: [
              "1. Complete 3 Challenge Courses (Ch6 only)",
              "2. Accept prototype trial course:",
              "   • Curv 1",
              "   • Sink 3",
              "   • Fork 2",
              "   • 2sem 7",
              "   • Cutr 9",
              "   • ChgU 2",
              "   • Splt 6",
              "   • Sldr 4",
              "   • 1sem 7",
              "   • Shoo 3",
              "3. Make 5 homers in a row",
              "4. Request Yoshida for baseball team",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "A Promise Between Men",
            location: "Batting Center",
            reward: "Gori-san joins Baseball team",
            requirements: "Complete 3 Home Run Courses in Chapter 6",
            guide: [
              "1. Complete 3 Home Run Courses (Ch6 only)",
              "2. Accept home run derby:",
              "   • 2sem 6",
              "   • Cutr 4",
              "   • Splt 2",
              "   • 1sem 1",
              "   • Splt 3",
              "   • 2sem 7",
              "   • Cutr 6",
              "   • 1sem 2",
              "   • Splt 1",
              "   • 1sem 4",
              "3. Get 7+ home runs",
              "4. Gori-san joins team",
            ].join("\n"),
            videoId: "",
          },
          {
            name: "Jo Amon",
            location: "Serena → Amon's Island",
            reward: "Jo Amon joins Kiryu Clan",
            requirements: "Complete #24 and #50",
            guide: [
              "1. After Serena roof scene, get text in elevator",
              "2. Prepare with Attack Up drink and good gear",
              "3. Take taxi to 'Amon's Island'",
              "4. Battle phases:",
              "   • Initial combat (dodge/counter)",
              "   • Drones appear at 1/3 health",
              "   • Roombas appear at 1/2 health",
              "   • Shield at 1/4 health (throw roombas to break)",
              "   • Watch for loud beeps signaling drone explosions",
              "5. Effective strategies: Tiger Drop, parries, drop kicks",
            ].join("\n"),
            videoId: "",
          },
        ],
      },
    },
  },
  "Yakuza: Like a Dragon": {
    logo: "./images/logos/LAD.webp",
    characters: {
      "Ichiban Kasuga": {
        image: "😄",
        substories: [
          {
            index: 1,
            chapter: 3,
            name: "A Can-Do Attitude",
            location: "Story-related",
            reward: "Unlocks Can Quest",
            requirements: "Automatic story progression",
            guide: ["Completed automatically as part of the main story"].join(
              "\n"
            ),
            videoId: "",
          },
          {
            index: 2,
            chapter: 4,
            name: "Who's That Sujimon!?",
            location: "Story-related (towards Otohime Land)",
            reward: "Access to Sujidex",
            requirements: "Automatic story progression",
            guide: ["Completed automatically as part of the main story"].join(
              "\n"
            ),
            videoId: "",
          },
          {
            index: 3,
            chapter: 3,
            name: "A Golden Opportunity",
            location: "Sakura River St. (south end)",
            reward: "Materials, Binding",
            requirements: "Available when first exploring",
            guide: [
              "1. Witness woman complaining to police officer",
              "2. Leave and return to find four guys",
              "3. Select 'Guy Second from the Right'",
              "4. Defeat Level 9 enemy",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 4,
            chapter: 3,
            name: "One Man's Trash...",
            location: "West end of Misaki St.",
            reward: "Materials, Flame Amulet, unlocks Benten Pawn",
            requirements: "Available when first exploring",
            guide: [
              "1. Examine giant trash mountain",
              "2. Leave and return, help government worker",
              "3. Choose any response (personality boost)",
              "4. Defeat Level 9 old man",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 5,
            chapter: 4,
            name: "A Trip to Pound Town",
            location: "Story-related (return to Otohime Land)",
            reward: "Introduces Poundmates/summons",
            requirements: "Automatic after visiting Sunlight Castle",
            guide: ["Completed automatically as part of the main story"].join(
              "\n"
            ),
            videoId: "",
          },
          {
            index: 6,
            chapter: 4,
            name: "It's the Thought that Counts",
            location: "Sakura St. → Various locations",
            reward: "Sacrifice Stone",
            requirements: "Available when first exploring",
            guide: [
              "1. Talk to Shota and old man at south Sakura St.",
              "2. Suggest 'Homemade Goods' (Kindness boost)",
              "3. Get wood: defeat 5 Level 12 karate guys near Hustle Boutique",
              "4. Get nails: defeat 3 Level 12 thugs south of Hello Work",
              "5. Return to Sakura River, build bookshelf",
              "6. Check trash on Isezaki Road",
              "7. Defeat Level 12 father",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 7,
            chapter: 4,
            name: "Baby Don't Cry",
            location: "South of Otohime Land",
            reward: "Patriarch Gondawara Poundmate",
            requirements: "Complete Substory #5",
            guide: [
              "1. Stop yakuza shaking down man for baby formula",
              "2. Defeat Level 13 yakuza",
              "3. Get hot water from Pocket Café (right lady)",
              "4. Talk to Oshima outside club",
              "5. Defeat 4 Level 14 guys inside",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 8,
            chapter: 4,
            name: "Old Cinema Paradiso",
            location: "East end of Tsurukame Highway (Seagull Cinema)",
            reward: "Unlocks Vintage Film Theater minigame",
            requirements: "Available when first exploring",
            guide: [
              "1. Talk to young men outside cinema",
              "2. Speak to curator about vintage films",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 9,
            chapter: 4,
            name: "Persimmon Premonition",
            location: "Bar District park (north of Hustle Boutique)",
            reward: "Tosanoyama Poundmate",
            requirements: "Complete Substory #5",
            guide: [
              "1. Examine persimmon tree",
              "2. Leave and return multiple times:",
              " • Defeat Level 14 sumo (Power Ring)",
              " • Defeat Level 14 sniper (Sneakers)",
              " • Defeat Level 14 kid (Pointed Toes)",
              "3. Return to find woman recovered",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 10,
            chapter: 4,
            name: "Fast Times at Ounabara",
            location: "East Jinnai Station (Breakwater Drive)",
            reward: "Unlocks Vocational School",
            requirements: "After first visit to Sunlight Castle",
            guide: [
              "1. Approach bus shelter with American",
              "2. Follow helper to vocational school",
              "3. Take first free exam",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 11,
            chapter: 5,
            name: "Certified Underdogs",
            location: "Vocational School → Bus station",
            reward: "Vintage Notebook, Tranquil Tenugui, Ikari joins Business",
            requirements: "10 Certifications + Rank 50 in Business",
            guide: [
              "1. Find Ikari near bus station",
              "2. Defeat 2 Level 17 jerks",
              "3. Ikari joins your Business",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 12,
            chapter: 5,
            name: "Part-time Hero",
            location: "Story-related",
            reward: "Unlocks Part-time Hero",
            requirements: "Chapter 5 automatic",
            guide: ["Completed automatically as part of Chapter 5"].join("\n"),
            videoId: "",
          },
          {
            index: 13,
            chapter: 5,
            name: "Nowhere to Go but Up",
            location: "Story-related",
            reward: "Unlocks Romance Workshop",
            requirements: "Chapter 5 automatic",
            guide: ["Completed automatically as part of Chapter 5"].join("\n"),
            videoId: "",
          },
          {
            index: 14,
            chapter: 5,
            name: "Something Worth Protecting",
            location: "Romance Workshop",
            reward: "Reverie Shoes, Sumire Sawa joins Business",
            requirements: "Max Passion, 16 Bonsai, Workshop Lv.4 (22.2M yen)",
            guide: [
              "1. Max Passion and give 16 Bonsai to Sumire",
              "2. Upgrade workshop to Level 4",
              "3. Defeat Sumire's father + 4 Level 17 land sharks",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 15,
            chapter: 5,
            name: "Ijincho's Safety Net",
            location: "Story-related",
            reward: "Unlocks Business Management",
            requirements: "Chapter 5 automatic",
            guide: ["Completed automatically as part of Chapter 5"].join("\n"),
            videoId: "",
          },
          {
            index: 16,
            chapter: 5,
            name: "The Crawfish Caper",
            location: "Sunrise Bridge → Various locations",
            reward: "Nancy-chan Poundmate",
            requirements: "Available in Chapter 5",
            guide: [
              "1. Find crawfish on Sunrise Bridge, toss in river",
              "2. Search for Nancy (X-mark on back) across river",
              "3. Use search mode (R2/RT) near stairs",
              "4. Buy Premium Sushi Set at Poppo Jinnai Station",
              "5. Trade for Nancy",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 17,
            chapter: 5,
            name: "A Love Worth Fighting For",
            location: "Commercial District homeless camp → Various locations",
            reward: "Kiyoe Shirakawa Poundmate",
            requirements: "Available in Chapter 5",
            guide: [
              "1. Intervene at soup kitchen in homeless camp",
              "2. Talk to Kuroi, then soup lady (likes flowers)",
              "3. Find Kuroi working near Jinnai Station",
              "4. Return to camp for makeover scene",
              "5. Go to Seagull Cinema at night",
              "6. Defeat Level 15 abusive boyfriend",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 18,
            chapter: 5,
            name: "Home Run Heroism",
            location: "North of Ichiban Confections",
            reward: "Old Fountain Pen, Hanayama joins Business",
            requirements: "After unlocking Business Management",
            guide: [
              "1. Help baseball player Hanayama with reporters",
              "2. Find Anzai near Le Nouveau hama",
              "3. Defeat 2 Level 15 fans",
              "4. Go to Rose Blossom in Red Light District",
              "5. Defeat manager + 5 Level 15 guys",
              "6. Return to Anzai",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 19,
            chapter: 5,
            name: "Bubble, Bubble Toil and Trouble",
            location: "Southeast of Love Magic → Isezaki Road",
            reward: "Mysterious Blush",
            requirements: "Available in Chapter 5",
            guide: [
              "1. Escort man to clothing store on Isezaki Road",
              "2. Avoid water-splashers and fire hose",
              "3. Tell clerk 'It's a long story'",
              "4. Return to starting point",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 20,
            chapter: 7,
            name: "Table for One",
            location: "Wette Kitchen (2nd floor) → Bar District",
            reward: "Maximum Mittens, Noboru joins Business",
            requirements: "Available in Chapter 5",
            guide: [
              "1. Defeat extortionist at Wette Kitchen (Slashing Boxcutter)",
              "2. Return to Wette Kitchen",
              "3. Go to marked store south of Survive Bar",
              "4. Defeat Level 17 bag snatcher (Wonky Hammer)",
              "5. Return to Wette Kitchen",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 21,
            chapter: 7,
            name: "Dumpster of Demise",
            location: "Empty lot across from Romance Workshop",
            reward: "Intimidation Manual, Shige-san joins Business",
            requirements: "Available in Chapter 5",
            guide: [
              "1. Help man in garbage pile",
              "2. Return and choose one item:",
              " • Shiny Black Object (Nameless Katana)",
              " • Dull Metal Object (Rusted Chainmail)",
              " • Creepy Object (Rime Amulet)",
              "3. Return and defeat 2 Level 17 yakuza",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 22,
            chapter: 7,
            name: "An Act of Kindness",
            location: "Jinnai Station underpass → Various locations",
            reward: "Economy Insoles, Pearl Earrings",
            requirements: "Available in Chapter 5",
            guide: [
              "1. Donate to Megumi at underpass",
              "2. Suggest 'Popular Eatery' location",
              "3. Find her near Akaushimaru, give attention suggestion",
              "4. Expose scammers at Lin Lin Hostess Bar",
              "5. Defeat Level 18 scammer",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 23,
            chapter: 9,
            name: "Warmest Wishes",
            location: "Akaushimaru → Hello Work → Hospital",
            reward: "Megumi Poundmate",
            requirements: "Complete Substory #22",
            guide: [
              "1. Find Megumi at Akaushimaru",
              "2. Find her dad with loan sharks near Hello Work",
              "3. Defeat 3 Level 17 loan sharks (Fancy Business Card)",
              "4. Raise 1 million yen, take taxi to hospital",
              "5. Return to Megumi's spot",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 24,
            chapter: 7,
            name: "Fifty Shades of Play",
            location: "North of Otohime Land → Various locations",
            reward: "Ecstasy Rope, Mr. Masochist Poundmate",
            requirements: "Available in Chapter 5",
            guide: [
              "1. Help Yumiko from bullies in parking lot",
              "2. Find Mr. Masochist south of Otohime Land",
              "3. Fight him (no need to waste MP)",
              "4. Find Yumiko at Poppo Tsurukame",
              "5. Talk to Mr. Masochist's mother",
              "6. Defeat 3 Level 20 attackers (Toy Bracelet, Worldly Cigar)",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 25,
            chapter: 7,
            name: "A Fading Star",
            location: "Eomeoni's Vow → Bar Rodriguez → Various locations",
            reward: "Bullet of Memory, Il Yu-Jin Poundmate",
            requirements: "Available in Chapter 5",
            guide: [
              "1. Intervene at Eomeoni's Vow",
              "2. Find Yu-Jin at Bar Rodriguez",
              "3. Defeat Level 20 Yu-Jin",
              "4. Get water from BOSS machine or Hama Wagon Café",
              "5. Defeat Level 20 blackmailer west of Akaushimaru (Dice of Disaster)",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 26,
            chapter: 9,
            name: "The Masked Murderer",
            location: "Koreatown (east of Eomeoni's Vow)",
            reward: "Profane Wristband, Jiei-san Poundmate",
            requirements: "Available in Chapter 5 (nighttime)",
            guide: [
              "1. Listen to locals about masked killer",
              "2. Talk to eatery owner",
              "3. Return at night to marked spot",
              "4. Defeat Level 20 masked killer (Gore Boots)",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 27,
            chapter: 7,
            name: "The Miracle of Spice",
            location: "Tsurukame Highway/Hyakkei St. → Various locations",
            reward: "Miracle Kimchi, Umeko joins Business",
            requirements: "Available in Chapter 5",
            guide: [
              "1. Help old woman at crosswalk",
              "2. Get Miracle Kimchi from vendor on Sakura St.",
              "3. Give kimchi to:",
              " • Young lady near Jinnai Station",
              " • Sprinter at Hamakita Park south end",
              " • Old woman at original crosswalk",
              "4. Return to kimchi seller",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 28,
            chapter: 9,
            name: "Tour Guide Turmoil",
            location: "Chinatown (near le chatte blanche) → Taiyo Gate",
            reward:
              "Fancy Microphone, Technique Booster, Ayami Ishida joins Business",
            requirements: "Chapter 8 (after Geomijul assassin fight)",
            guide: [
              "1. Help anxious tour guide",
              "2. Remember Chinatown info: Red Dragon, Blue Sign, Ultra Packed Super Bun",
              "3. Go to Taiyo Gate, give correct answers",
              "4. Defeat Level 24 jerk (Gambler's Tie)",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 29,
            chapter: 9,
            name: "The Michio Minefield",
            location: "Chinatown park (south of Club SEGA)",
            reward: "Ono Michio Figure",
            requirements: "Available when exploring Chinatown",
            guide: [
              "1. Find Ono Michio knockoffs in park",
              "2. Press button on knockoff (Confidence boost)",
              "3. Find 7 genuine figures:",
              " • Under leftmost bench (left one)",
              " • Under second bench",
              " • Between third/fourth benches (back one of four)",
              " • Front of fourth bench",
              " • Front of fifth bench",
              " • Under sixth bench",
              " • Under seventh bench (right one)",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 30,
            chapter: 9,
            name: "Fauxno Michio",
            location: "Chinatown Club SEGA area",
            reward:
              "Def Boom Box, Ono Michio Poundmate, Hironaka joins Business",
            requirements: "Complete Substory #29",
            guide: [
              "1. Find knockoff merch seller near Club SEGA",
              "2. Defeat 4 Level 26-28 guys (Dreamy Signature)",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 31,
            chapter: 9,
            name: "Like Father, Like Son",
            location: "Meng Wu (Chinatown)",
            reward: "Court Tongs",
            requirements: "Chapter 8 (after Geomijul assassin fight)",
            guide: [
              "1. Witness father/son argument at Meng Wu",
              "2. Return to see son with customer",
              "3. Talk to father, then find son",
              "4. Give advice (personality boost)",
              "5. Return to see argument",
              "6. Defeat 2 Level 24 jerk chefs (Professional's Whisk)",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 32,
            chapter: 9,
            name: "Forget Me Not",
            location: "Carriage St. (near Election Office Taxi)",
            reward: "Insulated Innerwear",
            requirements: "Available when exploring",
            guide: [
              "1. Meet Kaede Tono on Carriage St.",
              "2. Suggest 'Arcade' for date",
              "3. Win stuffed animal from UFO Catcher (Kindness boost)",
              "4. Defeat 3 Level 24 nerds",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 33,
            chapter: 12,
            name: "The Traffic Census Sensei",
            location: "East side of Sunlight Castle",
            reward: "Battered Tally Counter",
            requirements: "After Chapter 12 boss fight",
            guide: [
              "1. Help man with traffic census",
              "2. Answer '4 Men' (10,000 yen)",
              "3. Answer '7 Women' (20,000 yen)",
              "4. Answer '5 Men, 6 Women' (30,000 yen)",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 34,
            chapter: 9,
            name: "Bros Till the End",
            location: "Hamakita Park south end → Commercial District",
            reward: "Swordsman's Sash, Taka the Striker Poundmate",
            requirements: "Available when exploring",
            guide: [
              "1. Help bikers at Hamakita Park",
              "2. Return to find Taka gone",
              "3. Find purple bike west of Hello Work",
              "4. Defeat 3 Level 26 yakuza (Courage Pendant)",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 35,
            chapter: 9,
            name: "Preparing To Suck",
            location: "Sesil Café → Jinnai Station",
            reward: "Sanity Badge, Sojimaru joins Business",
            requirements: "Available when exploring",
            guide: [
              "1. Invest 1 million yen with Dr. Wily at Sesil Café",
              "2. Wait for text, go to Jinnai Station marked spot",
              "3. Defeat Sojimaru (Level 26) - weak to Electric",
              "4. Target left/right arms first, then main body",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 36,
            chapter: 9,
            name: "Whispers of the Underworld",
            location: "Survive Bar → Zhou Long Trading → Kinka Bridge",
            reward: "Soulshield Bracelet, Chau Ka Long Poundmate",
            requirements: "Available when exploring",
            guide: [
              "1. Get password from Iroha at Survive Bar",
              "2. Go to Zhou Long Distribution on Ijin St.",
              "3. Password: 'Lau Chau Chau Ya'",
              "4. Defeat 3 Level 28 guys",
              "5. Meet contact under Kinka Bridge (Confidence 4 required)",
              "6. Talk to Chau multiple times (Confidence 7 required)",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 37,
            chapter: 10,
            name: "Ringleader Roundup: Bear Blues",
            location: "Hamakita Park",
            reward: "Awakened Misanga, Chief's Towel",
            requirements: "After Restaurant Row business",
            guide: [
              "1. Get circus flyer at west Hamakita Park",
              "2. Find ringmaster and bear at east end",
              "3. Defeat Catherine (Level 29) - weak to Fire/Bullet",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 38,
            chapter: 10,
            name: "Ringleader Roundup: Tiger Takeover",
            location: "Hamakita Park",
            reward: "War God's Keystone, Medal of Honor",
            requirements: "Complete Substory #37",
            guide: [
              "1. Return to circus spot",
              "2. Defeat Charlotte (Level 29) - weak to Fire/Bullet",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 39,
            chapter: 10,
            name: "Ringleader Roundup: Chimp Calamity",
            location: "Hamakita Park",
            reward:
              "Kongo Chainmail, Doll of Torment, Clara-chan joins Business",
            requirements: "Complete Substory #38",
            guide: [
              "1. Return to circus spot",
              "2. Defeat Clara-chan in excavator (Level 29) - weak to Electric",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 40,
            chapter: 4,
            name: "Welcome to Dragon Kart!",
            location: "Northeast corner near water",
            reward: "Unlocks Dragon Kart",
            requirements: "After first visit to Sunlight Castle",
            guide: [
              "1. Approach Dragon Kart establishment",
              "2. Complete free trial race",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 41,
            chapter: 4,
            name: "Two-Headed Bomb",
            location: "Dragon Kart",
            reward: "Unlocks Rumble Crasher purchase",
            requirements: "Complete Cerberus Cup",
            guide: [
              "1. Return after completing Cerberus Cup",
              "2. Defeat big boys in foggy race",
              "3. Upgrade kart to at least Level 3 recommended",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 42,
            chapter: 4,
            name: "The Rocket Girls",
            location: "Dragon Kart",
            reward: "Unlocks Rapid Phantom purchase",
            requirements: "Complete Pegasus Cup",
            guide: [
              "1. Return after completing Pegasus Cup",
              "2. Defeat ladies in foggy race",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 43,
            chapter: 4,
            name: "The Data Drifter",
            location: "Dragon Kart",
            reward: "Unlocks Ignition Shadow purchase",
            requirements: "Complete Phoenix Cup",
            guide: [
              "1. Return after completing Phoenix Cup",
              "2. Defeat Suguru in foggy race",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 44,
            chapter: 4,
            name: "Biker Blitz",
            location: "Dragon Kart",
            reward: "Progresses Dragon Kart story",
            requirements: "Complete Substory #43",
            guide: [
              "1. Challenge Akira near kiosk",
              "2. Race on Sky Highway",
              "3. Maxed Ignition Shadow recommended",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 45,
            chapter: "Finale",
            name: "One Hell of a Racer",
            location: "Dragon Kart",
            reward: "Progresses Dragon Kart story",
            requirements: "Finale, complete Substory #44",
            guide: [
              "1. Find Jin on bench across from kiosk in Finale",
              "2. Challenge him to race",
              "3. Fully-customized Rapid Phantom recommended",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 46,
            chapter: "Finale",
            name: "The World is my Racetrack",
            location: "Dragon Kart",
            reward: "Unlocks Rising Dragon kart",
            requirements: "Complete Dragon Cup",
            guide: [
              "1. Complete Dragon Cup",
              "2. Defeat Dragon Fighter on Final Kamuro Circuit",
              "3. Ignition Shadow recommended, use items strategically",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 47,
            chapter: "Romance",
            name: "Girl of my Dreams",
            location: "Survive Bar",
            reward: "Romance resolution",
            requirements: "Max Bond with Saeko + Max Style",
            guide: [
              "1. Max Bond with Saeko and max Style stat",
              "2. Accept drink offer at Survive Bar",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 48,
            chapter: "Romance",
            name: "Shared Vision",
            location: "Ichiban Holdings → Survive Bar",
            reward: "Romance resolution",
            requirements: "Max Bond with Eri + Max Kindness",
            guide: [
              "1. Max Bond with Eri and max Kindness stat",
              "2. Accept drink offer at Ichiban Holdings",
              "3. Meet at Survive Bar",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 49,
            chapter: "Romance",
            name: "Certified Lover",
            location: "Ounabara Vocational School",
            reward: "Manae Miyakoshi joins Business",
            requirements: "Max Intellect, 16 Lilies, all certifications",
            guide: [
              "1. Max Intellect and give 16 Lilies to Manae",
              "2. Pass all certifications",
              "3. Receive Certificate of Completion",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 50,
            chapter: "Romance",
            name: "Pillow Chat",
            location: "Survive Bar",
            reward: "Iroha Yanagi joins Business",
            requirements: "Max Charisma, 16 Roses, 40 Party Chats",
            guide: [
              "1. Max Charisma and give 16 Roses to Iroha",
              "2. Complete 40 Party Chats",
              "3. Talk to Iroha to complete",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 51,
            chapter: "Romance",
            name: "The Real Me",
            location: "Hello Work",
            reward: "Ririka joins Business",
            requirements: "Max Confidence, 16 Pansies, all non-DLC jobs",
            guide: [
              "1. Max Confidence and give 16 Pansies to Ririka",
              "2. Change to all non-DLC jobs",
              "3. Find Ririka outside Hello Work",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 52,
            chapter: "Romance",
            name: "The Lone Survivor",
            location: "Survive Bar (2nd floor)",
            reward: "Permanent Defense +10",
            requirements: "Romance all six women",
            guide: [
              "1. Romance all six women:",
              " • Saeko (Max Style + Max Bond)",
              " • Eri (Max Kindness + Max Bond)",
              " • Sumire (Max Passion + 16 Bonsai)",
              " • Manae (Max Intellect + 16 Lilies)",
              " • Iroha (Max Charisma + 16 Roses)",
              " • Ririka (Max Confidence + 16 Pansies)",
              "2. Go to second floor of Survive Bar near bed",
            ].join("\n"),
            videoId: "",
          },
        ],
      },
    },
  },
  "Like a Dragon Gaiden: The Man Who Erased His Name ": {
    logo: "./images/logos/GaidenTMWEHN.webp",
    characters: {
      "Joryu Jozuma / Kiryu Kazuma": {
        image: "😄",
        substories: [
  {
    index: 1,
    rank: "No Rank",
    name: "Investigation Request",
    location: "Sotenbori: Shofukucho (SE corner) → Sotenbori Theater → Club Heavenly",
    reward: "Completes Request",
    requirements: "Obtain Hornet Gadget",
    guide: [
      "1. Investigate Namioka Family activity in Shofukucho (SE corner)",
      "2. Lose target, head to Sotenbori Theater (choose any option)",
      "3. Investigate final spot near Club Heavenly"
    ].join("\n"),
    videoId: ""
  },
  {
    index: 2,
    rank: "No Rank",
    name: "Film Assistant Needed",
    location: "Sotenbori: Smile Burger (2nd floor)",
    reward: "Completes Request",
    requirements: "Obtain Hornet Gadget",
    guide: [
      "1. Meet Kitayama on 2nd floor of Smile Burger",
      "2. Go through filming scenes",
      "3. Defeat boss with a knife"
    ].join("\n"),
    videoId: ""
  },
  {
    index: 3,
    rank: "No Rank",
    name: "Vanquish the Red Peacocks",
    location: "Sotenbori: West Shofukucho Parking Lot → Various locations",
    reward: "Completes Request",
    requirements: "Obtain Hornet Gadget",
    guide: [
      "1. Defeat 4 gang members (1 mini-boss) in West Shofukucho parking lot",
      "2. Defeat 6 gang members (1 mini-boss) on Sotenbori Footpath",
      "3. Defeat 4 gang members (1 boss) in East Shofukucho",
      "4. Defeat 4 gang members (1 boss) southeast near Akame's",
      "5. Defeat leader + 7 members in southwest Shofukucho parking lot"
    ].join("\n"),
    videoId: ""
  },
  {
    index: 4,
    rank: "No Rank",
    name: "Emergency Request! - Investigate the Immersive Cabaret Club",
    location: "Sotenbori: Club Heavenly",
    reward: "Nutriment of the Conquering Emperor x5",
    requirements: "Automatic story progression",
    guide: [
      "1. Visit Club Heavenly (bring 10,000 yen)",
      "2. Spend time with a hostess",
      "3. Report back to Akame"
    ].join("\n"),
    videoId: ""
  },
  {
    index: 5,
    rank: "Silver",
    name: "A Simple Heavy-Lifting Job",
    location: "Sotenbori: Wild Jackson → Bishamon Bridge → Office Building → Ashitaba Park",
    reward: "Completes Request",
    requirements: "Reach Silver Rank",
    guide: [
      "1. Meet Matsumura at Wild Jackson",
      "2. Speak to homeless man under south side of Bishamon Bridge",
      "3. Go to office building between Bar New Momoko and Kiss Shot",
      "4. Defeat 2 yakuza inside",
      "5. Defeat 5 yakuza + boss at Ashitaba Park"
    ].join("\n"),
    videoId: ""
  },
  {
    index: 6,
    rank: "Silver",
    name: "Ghost of Sotenbori",
    location: "Sotenbori: East Sotenbori St. → South Shofukucho → Ashitaba Park",
    reward: "Completes Request",
    requirements: "Reach Silver Rank",
    guide: [
      "1. Defeat 3 yakuza + mini-boss at east end of Sotenbori St.",
      "2. Defeat 1 enemy in middle of South Shofukucho",
      "3. Enter door near north end of Ashitaba Park",
      "4. Defeat 5 yakuza + boss (3 health bars)"
    ].join("\n"),
    videoId: ""
  },
  {
    index: 7,
    rank: "Silver",
    name: "Seeking Advice",
    location: "Sotenbori: Smile Burger → Iwao Bridge → Ganko Sushi → River Footpath",
    reward: "Completes Request",
    requirements: "Reach Silver Rank",
    guide: [
      "1. Talk to young person at Smile Burger",
      "2. Find him near west edge of Iwao Bridge",
      "3. Follow to Ganko Sushi, defeat nearby enemy",
      "4. Chase to north side of river footpath",
      "5. Defeat weak enemy"
    ].join("\n"),
    videoId: ""
  },
  {
    index: 8,
    rank: "Silver",
    name: "Recruit Homeless Yamanaka",
    location: "Sotenbori: Ashitaba Park",
    reward: "Homeless Yamanaka joins Joryu Clan",
    requirements: "Reach Silver Rank",
    guide: [
      "1. Find Yamanaka at Ashitaba Park",
      "2. Accept his challenge",
      "3. Defeat him in combat"
    ].join("\n"),
    videoId: ""
  },
  {
    index: 9,
    rank: "Silver",
    name: "The Strongest Convenience Store Clerk",
    location: "Sotenbori: Poppo (West Shofukucho)",
    reward: "Ryusei Tobashira joins Joryu Clan",
    requirements: "Reach Silver Rank",
    guide: [
      "1. Go to Poppo in West Shofukucho",
      "2. Defeat Tobashira's manager",
      "3. Defeat Tobashira"
    ].join("\n"),
    videoId: ""
  },
  {
    index: 10,
    rank: "Silver",
    name: "Save the Pro Wrestler",
    location: "Sotenbori: River Footpath (under Iwao Bridge) → Various locations",
    reward: "Excellent Sujiya joins Joryu Clan",
    requirements: "Complete 'The Strongest Convenience Store Clerk'",
    guide: [
      "1. Meet wrestler under Iwao Bridge",
      "2. Hand out flyers at 10 locations:",
      " • North Iwao Bridge",
      " • West of Club Heavenly",
      " • North of Shigano Cigarettes",
      " • Outside Kiss Shot",
      " • Near Wild Jackson",
      " • Northwest corner of Sotenbori",
      " • North of Kushikatsu Daruma",
      " • SW of Kushikatsu Daruma on river footpath",
      " • Near Poppo on Sotenbori St.",
      " • North of Hiratai on southern river footpath",
      "3. Return and defeat the wrestler"
    ].join("\n"),
    videoId: ""
  },
  {
    index: 11,
    rank: "Silver",
    name: "The Cat-Lovin' Rapper",
    location: "Sotenbori: East Shofukucho → Various locations",
    reward: "KATSUWO joins Joryu Clan",
    requirements: "Complete 'Recruit Homeless Yamanaka'",
    guide: [
      "1. Find rapper near taxi in East Shofukucho",
      "2. Defeat him in combat",
      "3. Defeat cat abusers at 3 locations:",
      " • Southwest Shofukucho Parking Lot",
      " • Parking lot SE of Coin Lockers",
      " • Under south side of Iwao Bridge",
      "4. Return to rapper, defeat 4 enemies including boss"
    ].join("\n"),
    videoId: ""
  },
  {
    index: 12,
    rank: "Silver",
    name: "The Struggling Host",
    location: "Sotenbori: Central Shofukucho → Various locations",
    reward: "Renji joins Joryu Clan",
    requirements: "Complete 'Liberate the Hammer Man'",
    guide: [
      "1. Find host near Club Heavenly in central Shofukucho",
      "2. Talk to customers at 7 locations:",
      " • The Grand (NW corner)",
      " • Near Poppo in Shofukucho",
      " • Southwest Shofukucho corner",
      " • East Sotenbori St. near Poppo",
      " • Behind pillars at 'Hotel Turtle' in West Shofukucho",
      " • South of Iwao Bridge (red-haired guy)",
      " • Southwest Shofukucho near Club Sunshine",
      "3. Defeat rival host Itsuki",
      "4. Return and defeat Renji"
    ].join("\n"),
    videoId: ""
  },
  {
    index: 13,
    rank: "Silver",
    name: "Liberate the Hammer Man",
    location: "Sotenbori: South Sotenbori Footpath → East near river",
    reward: "Yuji Nunokawa joins Joryu Clan",
    requirements: "Reach Silver Rank",
    guide: [
      "1. Find big guy with hammer on south Sotenbori Footpath (need 1,000,000 yen)",
      "2. Offer to pay his debt",
      "3. Give money to foreman in high-vis vest east near river",
      "4. Defeat the big guy",
      "5. Defeat foreman + 5 lackeys"
    ].join("\n"),
    videoId: ""
  },
  {
    index: 14,
    rank: "Silver",
    name: "Final Showdown: Red Peacocks",
    location: "Sotenbori: Outside Four Shine",
    reward: "Akira Guren joins Joryu Clan",
    requirements: "Complete 'Vanquish the Red Peacocks'",
    guide: [
      "1. Go to area outside Four Shine",
      "2. Defeat 16 Red Peacocks including their leader"
    ].join("\n"),
    videoId: ""
  },
  {
    index: 15,
    rank: "Silver",
    name: "Vanquish the White Knights",
    location: "Sotenbori: Hiratai → Various locations → East Sotenbori St.",
    reward: "Completes Request",
    requirements: "Complete 'Final Showdown: Red Peacocks'",
    guide: [
      "1. Defeat 4 White Knights (1 mini-boss) at Hiratai on Sotenbori Footpath",
      "2. Defeat 3 White Knights (1 mini-boss) at Bunzameon Outdoor Mall",
      "3. Defeat 3 White Knights (1 mini-boss) in Central Shofukucho",
      "4. Defeat 4 White Knights (1 mini-boss) in South Shofukucho",
      "5. Defeat boss + 4 members on east side of Sotenbori St."
    ].join("\n"),
    videoId: ""
  },
  {
    index: 16,
    rank: "Silver",
    name: "Final Showdown: White Knights",
    location: "Sotenbori: West Sotenbori St. (outside Kinryu Ramen)",
    reward: "Koji Shiranita joins Joryu Clan",
    requirements: "Complete 'Vanquish the White Knights'",
    guide: [
      "1. Go to area outside Kinryu Ramen on west Sotenbori St.",
      "2. Defeat 15 White Knights including their leader (4 health bars)"
    ].join("\n"),
    videoId: ""
  },
  {
    index: 17,
    rank: "Silver",
    name: "The Golden Samurai",
    location: "Random encounter throughout city",
    reward: "Completes Request",
    requirements: "Reach Silver Rank",
    guide: [
      "1. Find Golden Samurai with purple arrow on minimap",
      "2. Defeat him (4 health bars, uses sword)"
    ].join("\n"),
    videoId: ""
  },
  {
    index: 18,
    rank: "Silver",
    name: "Reach Gold Tier",
    location: "Akame's Hideout",
    reward: "Advances Akame Network Rank",
    requirements: "Reach Akame Network Rank 10 + Win 3 Silver Rank Coliseum fights",
    guide: [
      "1. Reach Akame Network Rank 10",
      "2. Win 3 Silver Rank fights in Coliseum",
      "3. Report back to Akame"
    ].join("\n"),
    videoId: ""
  },
  {
    index: 19,
    rank: "Gold",
    name: "End the Destruction",
    location: "Sotenbori: Shofukucho Construction Site → West → SE of Bishamon Bridge",
    reward: "Masaharu Kaito and Toru Higashi assist Joryu Clan",
    requirements: "Reach Gold Rank",
    guide: [
      "1. Defeat 'gorilla man' at Shofukucho construction site (2 health bars)",
      "2. Talk to homeless guy west of construction site",
      "3. Defeat 4 thugs",
      "4. Defeat detective (5 health bars)",
      "5. Go to door southeast of Bishamon Bridge",
      "6. Defeat 9 enemies including boss (with 2 allies)"
    ].join("\n"),
    videoId: ""
  },
  {
    index: 20,
    rank: "Gold",
    name: "Gotta Catch 'em Balls!",
    location: "Various locations → Back alley near Fukuru",
    reward: "Varies based on wish choice",
    requirements: "Chapter 4 + Reach Gold Rank",
    guide: [
      "Find all 7 Gold Balls:",
      "1. Purchase from Ebisu Pawn for ¥77,777",
      "2. Trade 777 Pool points at Kiss Shot",
      "3. Purchase from Akame Shop (3rd level) for 777 Akame Points",
      "4. Use Wire on flexing fellow on eastward boat on river",
      "5. Use Wire on muscle guy's pants in Castle dance club",
      "6. Use Wire on oni statue's skirt in Fighter's Lounge stairwell",
      "7. Complete 'Solve the Mysterious Note' Stroll 'n Patrol mission",
      "8. Return to Akame, then meet guy in back alley near Fukuru",
      "9. Choose a wish:",
      " • 'Endless riches' = ¥1,000,000",
      " • 'Eternal life' = Nourishment of the Sea King x100",
      " • 'Sexy panties' = Shen-san's Panties (sell for ¥1,500,000)"
    ].join("\n"),
    videoId: ""
  },
  {
    index: 21,
    rank: "Gold",
    name: "Vanquish the Black Swallowtails",
    location: "Sotenbori: Near Coin Lockers → Various locations → Yotsudera Kaikan",
    reward: "Completes Request",
    requirements: "Complete 'Final Showdown: White Knights'",
    guide: [
      "1. Defeat 5 Black Swallowtails (1 boss with katana) near Coin Lockers",
      "2. Defeat 4 Black Swallowtails (1 boss with katana) near Riichi Towers Mahjong",
      "3. Defeat 4 Black Swallowtails (1 boss with hammer) near Kushikatsu Daruma",
      "4. Defeat 5 Black Swallowtails (1 boss, most have pistols) near Shigano Cigarettes",
      "5. Defeat 7 Black Swallowtails (armed with various weapons) on 2nd floor of Yotsudera Kaikan"
    ].join("\n"),
    videoId: ""
  },
  {
    index: 22,
    rank: "Gold",
    name: "Final Showdown: Black Swallowtails",
    location: "Sotenbori: Iwao Bridge",
    reward: "Keita Kuroyanagi joins Joryu Clan",
    requirements: "Complete 'Vanquish the Black Swallowtails'",
    guide: [
      "1. Go to Iwao Bridge",
      "2. Defeat 16 Black Swallowtails including their leader"
    ].join("\n"),
    videoId: ""
  },
  {
    index: 23,
    rank: "Gold",
    name: "The Golden Scourge",
    location: "Random encounter throughout city",
    reward: "Completes Request",
    requirements: "Complete 'The Golden Samurai'",
    guide: [
      "1. Find Golden Samurai with purple arrow on minimap",
      "2. Defeat him (5 health bars, increased attack power)"
    ].join("\n"),
    videoId: ""
  },
  {
    index: 24,
    rank: "Gold",
    name: "Reach Platinum Tier",
    location: "Akame's Hideout",
    reward: "Advances Akame Network Rank",
    requirements: "Reach Akame Network Rank 20 + Win 3 Gold Rank Coliseum fights",
    guide: [
      "1. Reach Akame Network Rank 20",
      "2. Win 3 Gold Rank fights in Coliseum",
      "3. Report back to Akame"
    ].join("\n"),
    videoId: ""
  },
  {
    index: 25,
    rank: "Gold",
    name: "Friends in Special Places",
    location: "Various bars in Sotenbori",
    reward: "Strengthens bond with Akame",
    requirements: "Reach Gold Rank + Akame Network Levels 13, 16, and 19",
    guide: [
      "1. Reach Akame Network Level 13, 16, and 19",
      "2. Accept drink offers from Akame each time",
      "3. On fourth outing, defeat 5 enemies including a boss"
    ].join("\n"),
    videoId: ""
  },
  {
    index: 26,
    rank: "Platinum",
    name: "Golden Gauntlet Throwdown",
    location: "Sotenbori: Yotsudera Kaikan (roof)",
    reward: "Completes Request",
    requirements: "Complete 'The Golden Scourge'",
    guide: [
      "1. Go to roof of Yotsudera Kaikan",
      "2. Defeat Golden Samurai (6 health bars, enhanced armor and blocking)"
    ].join("\n"),
    videoId: ""
  },
  {
    index: 27,
    rank: "Coliseum",
    name: "The Four Kings of the Coliseum",
    location: "Castle: Coliseum",
    reward: "Progresses Coliseum story",
    requirements: "Chapter 4 (automatic after leaving Castle)",
    guide: [
      "1. Automatically triggered after leaving Castle in Chapter 4",
      "2. Defeat Dan Brody (uses knife, drones, and flash grenades)"
    ].join("\n"),
    videoId: ""
  },
  {
    index: 28,
    rank: "Coliseum",
    name: "King Dan Brody",
    location: "Castle: Coliseum",
    reward: "Progresses Coliseum story",
    requirements: "Reach Platinum Coliseum Rank + Complete 'The Four Kings of the Coliseum'",
    guide: [
      "1. Reach Platinum Rank in Coliseum",
      "2. Challenge Dan Brody in Hell Team Rumble",
      "3. Defeat 4 teen punks + Dan Brody (approx. 15 health bars) within 3 minutes"
    ].join("\n"),
    videoId: ""
  },
  {
    index: 29,
    rank: "Coliseum",
    name: "Mizorogi's Big Dreams",
    location: "Akame's Hideout",
    reward: "Unlocks 'Heat Action: Daidoji Martial Mastery' upgrade",
    requirements: "Defeat first Coliseum King + Upgrade all Gadgets to Level 5",
    guide: [
      "1. Upgrade all Gadgets to Level 5",
      "2. Return to Mizorogi at Akame's Hideout",
      "3. Purchase the new Heat Action upgrade"
    ].join("\n"),
    videoId: ""
  },
  {
    index: 30,
    rank: "Coliseum",
    name: "King Kunemitsu Samejima",
    location: "Castle: Coliseum",
    reward: "Progresses Coliseum story",
    requirements: "Defeat first Coliseum King",
    guide: [
      "1. Challenge Kunemitsu Samejima in one-on-one fight",
      "2. Defeat him (uses dual pistols and Serpent shoes)"
    ].join("\n"),
    videoId: ""
  },
  {
    index: 31,
    rank: "Coliseum",
    name: "King JUSTICE",
    location: "Castle: Coliseum",
    reward: "Progresses Coliseum story",
    requirements: "Defeat previous Coliseum Kings",
    guide: [
      "1. Challenge JUSTICE in Three King brawl (Hell Team Rumble)",
      "2. Defeat 16 thugs + Dan Brody + Samejima + JUSTICE",
      "3. JUSTICE uses laser beam and has healing ability"
    ].join("\n"),
    videoId: ""
  },
  {
    index: 32,
    rank: "Coliseum",
    name: "King Kiyoshi Ugajin",
    location: "Castle: Coliseum",
    reward: "Progresses Coliseum story",
    requirements: "Defeat previous Coliseum Kings",
    guide: [
      "1. Challenge Kiyoshi Ugajin in one-on-one fight",
      "2. Defeat him (uses Spider wire, Hornets, has 6 health bars)"
    ].join("\n"),
    videoId: ""
  },
  {
    index: 33,
    rank: "Coliseum",
    name: "Operation Family Welfare",
    location: "Castle: Coliseum",
    reward: "Completes Coliseum storyline",
    requirements: "Defeat all Four Kings of Coliseum",
    guide: [
      "1. Check Requests at Akame's Hideout after defeating Four Kings",
      "2. Automatically go to fight",
      "3. Defeat 8 yakuza + boss (uses Hornet drones)"
    ].join("\n"),
    videoId: ""
  },
  {
    index: 34,
    rank: "Coliseum",
    name: "Path to the Strongest",
    location: "Castle: Coliseum → Helipad",
    reward: "War God Talisman",
    requirements: "Complete Minamida Grand Prix (all Coliseum fights and substories)",
    guide: [
      "Part 1 - Hell Team Rumble:",
      "1. Defeat 10 silver bots + Tetsu Amon (gold bot)",
      "2. Use Agent Style, Extreme Heat strategy",
      "Part 2 - Gai Amon:",
      "1. Defeat Gai Amon on helipad",
      "2. Counter his attacks: Hornet heart (summon your own), explosive discs, Spider Wire, explosives, knives, caltrops, drones",
      "3. Final phase (4 health bars): He heals when hitting you, use Tiger Drop and Heat Actions"
    ].join("\n"),
    videoId: ""
  }
],
      },
    },
  },
  "Like a Dragon: Infinite Wealth": {
    logo: "./images/logos/LADIW.webp",
    characters: {
      "Ichiban Kasuga": {
        image: "",
        substories: [],
      },
    },
  },
  "Like a Dragon: Pirate Yakuza in Hawaii": {
    logo: "./images/logos/PirateYakuza.webp",
    characters: {
      "Goro Majima": {
        image: "",
        substories: [],
      },
    },
  },
  Judgment: {
    logo: "./images/logos/Judgment.webp",
    characters: {
      "Takayuki Yagami": {
        image: "",
        substories: [],
      },
    },
  },
  "Lost Judgment": {
    logo: "./images/logos/LostJudgment.webp",
    characters: {
      "Takayuki Yagami": {
        image: "🕵️",
        substories: [],
      },
    },
  },
  "Like a Dragon: Ishin! Kiwami": {
    logo: "./images/logos/IshinKiwami.webp",
    characters: {
      "Sakamoto Ryoma": {
        image: "",
        substories: [],
      },
    },
  },
  "Ryū ga Gotoku Ishin!": {
    logo: "./images/logos/OGIshin.webp",
    characters: {
      "Sakamoto Ryoma": {
        image: "",
        substories: [],
      },
    },
  },
  "Ryū ga Gotoku Kenzan!": {
    logo: "./images/logos/Kenzan.webp",
    characters: {
      "Kiryu Kazumanosuke": {
        image: "",
        substories: [],
      },
    },
  },
  "Kurohyō: Ryū ga Gotoku Shinshō": {
    logo: "./images/logos/Kurohyou.webp",
    characters: {
      "Tatsuya Ukyo": {
        image: "",
        substories: [],
      },
    },
  },
  "Kurohyou 2: Ryu ga Gotoku Ashura Hen": {
    logo: "./images/logos/Kurohyou2.webp",
    characters: {
      "Tatsuya Ukyo": {
        image: "",
        substories: [],
      },
    },
  },
};

let currentView = "games";
let selectedGame = "";
let selectedCharacter = "";
let viewHistory = [];
// DOM elements
const homeBtn = document.getElementById("homeBtn");
const mobileHomeBtn = document.getElementById("mobileHomeBtn");

// Navigation functions using browser history
function showView(viewName, game = "", character = "", substoryIndex = -1) {
  // Update URL without page reload
  const params = new URLSearchParams();
  if (game) params.set('game', game);
  if (character) params.set('character', character);
  if (substoryIndex >= 0) params.set('substory', substoryIndex);
  
  const newUrl = `${window.location.pathname}?view=${viewName}&${params.toString()}`;
  window.history.pushState({view: viewName, game, character, substoryIndex}, '', newUrl);
  
  // Update the view
  updateView(viewName, game, character, substoryIndex);
}

function updateView(viewName, game = "", character = "", substoryIndex = -1) {
  // Hide all views
  document.querySelectorAll('#gamesView, #charactersView, #substoriesView, #substoryDetailView').forEach(view => {
    view.classList.add('hidden');
  });
  
  // Show the requested view
  document.getElementById(`${viewName}View`).classList.remove('hidden');
  currentView = viewName;
  selectedGame = game;
  selectedCharacter = character;
  currentSubstoryIndex = substoryIndex;
  
  // Update content based on the view
  if (viewName === 'games') {
    initializeGamesGrid();
  } else if (viewName === 'characters') {
    showCharacters(game);
  } else if (viewName === 'substories') {
    showSubstories(game, character);
  } else if (viewName === 'substoryDetail') {
    showSubstoryDetail(game, character, substoryIndex);
  }
  
  // Update mobile nav button states
  const mobileBackBtn = document.getElementById('mobileBackBtn');
  mobileBackBtn.style.display = viewName !== 'games' ? 'flex' : 'none';
}

// Initialize games grid with logo images
function initializeGamesGrid() {
  const gamesGrid = document.getElementById('gamesGrid');
  gamesGrid.innerHTML = '';

  Object.keys(gameData).forEach(gameName => {
    const gameCard = document.createElement('div');
    gameCard.className = 'game-card p-6 rounded-lg cursor-pointer text-center flex flex-col items-center';
    gameCard.innerHTML = `
      <img src="${gameData[gameName].logo}" 
           alt="${gameName} Logo" 
           class="game-logo mb-4"
           loading="lazy">
      <h3 class="text-xl font-bold text-primary mb-2">${gameName}</h3>
    `;
    gameCard.addEventListener('click', () => {
      showView('characters', gameName);
    });
    gamesGrid.appendChild(gameCard);
  });
}

function showCharacters(gameName) {
  const charactersGrid = document.getElementById('charactersGrid');
  const gameTitle = document.getElementById('gameTitle');
  const characters = gameData[gameName].characters;
  const characterCount = Object.keys(characters).length;

  gameTitle.textContent = gameName;
  charactersGrid.innerHTML = '';

  // Set grid layout based on character count
  let gridClass = 'grid gap-4 ';
  if (characterCount === 1) {
    gridClass += 'grid-cols-1 justify-items-center';
  } else if (characterCount === 2) {
    gridClass += 'grid-cols-2 justify-items-center';
  } else {
    gridClass += 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4';
  }
  charactersGrid.className = gridClass;

  Object.keys(characters).forEach(characterName => {
    const character = characters[characterName];
    const characterCard = document.createElement('div');

    // Card sizing logic
    let cardClass = 'character-card p-4 rounded-lg cursor-pointer text-center ';
    let imageClass = 'character-image mb-3 mx-auto object-cover ';

    if (characterCount <= 2) {
      cardClass += 'h-80 w-full max-w-xs ';
      imageClass += 'w-full h-48 ';
    } else {
      cardClass += 'h-64 ';
      imageClass += 'w-full h-36 ';
    }

    characterCard.className = cardClass;
    characterCard.innerHTML = `
      <img src="${character.image}" 
           alt="${characterName}" 
           class="${imageClass}"
           style="aspect-ratio: 902/439">
      <h4 class="font-semibold text-primary ${characterCount <= 2 ? 'text-lg' : 'text-sm'} mt-2">${characterName}</h4>
      <p class="text-secondary ${characterCount <= 2 ? 'text-sm' : 'text-xs'} mt-1">${character.substories.length} Substories</p>
    `;

    characterCard.addEventListener('click', (e) => {
      e.stopPropagation();
      showView('substories', gameName, characterName);
    });
    charactersGrid.appendChild(characterCard);
  });
}

function showSubstories(gameName, characterName) {
  const substoriesList = document.getElementById('substoriesList');
  const characterTitle = document.getElementById('characterTitle');

  characterTitle.textContent = `${characterName} - ${gameName}`;
  substoriesList.innerHTML = '';

  const substories = gameData[gameName].characters[characterName].substories;
  substories.forEach((substory, index) => {
    const substoryItem = document.createElement('div');
    substoryItem.className = 'substory-item p-4 rounded cursor-pointer flex items-start gap-3';
    substoryItem.innerHTML = `
      <div class="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
        ${index + 1}
      </div>
      <div>
        <h4 class="font-semibold text-primary mb-2">${substory.name}</h4>
        <p class="text-secondary text-sm mb-1">📍 ${substory.location}</p>
        <p class="text-secondary text-sm">🎁 ${substory.reward}</p>
        <p class="text-secondary text-sm"> 🔍 Chapter ${substory.chapter}</p>
        <p class="text-secondary text-sm"> 🔍 Rank(Gaiden) : ${substory.rank}</p>
        <p class="text-secondary text-sm"> 📌 Substory number # ${substory.index}</p>
      </div>
    `;

    substoryItem.addEventListener('click', (e) => {
      e.stopPropagation();
      showView('substoryDetail', gameName, characterName, index);
    });
    substoriesList.appendChild(substoryItem);
  });
}

function showSubstoryDetail(gameName, characterName, substoryIndex) {
  const substory = gameData[gameName].characters[characterName].substories[substoryIndex];

  document.getElementById('substoryTitle').textContent = substory.name;
  document.getElementById('substoryLocation').textContent = substory.location;
  document.getElementById('substoryReward').textContent = substory.reward;
  document.getElementById('substoryRequirements').textContent = substory.requirements;
  document.getElementById('substoryChapter').textContent = substory.chapter;
  document.getElementById('substoryRank').textContent = substory.rank;
  
  // Format the guide with proper line breaks
  document.getElementById('substoryGuide').innerHTML = substory.guide.replace(/\n/g, '<br>');

  // Video embed
  const videoContainer = document.getElementById('videoContainer');
  if (substory.videoId) {
    videoContainer.innerHTML = `
      <iframe 
        width="100%" 
        height="100%" 
        src="https://www.youtube.com/embed/${substory.videoId}" 
        frameborder="0" 
        allowfullscreen
        class="rounded"
      ></iframe>
    `;
  } else {
    videoContainer.innerHTML = '<p class="text-secondary">No video available for this substory</p>';
  }
}

// Handle browser back/forward navigation
window.addEventListener('popstate', (event) => {
  if (event.state) {
    updateView(
      event.state.view, 
      event.state.game || '', 
      event.state.character || '', 
      event.state.substoryIndex || -1
    );
  } else {
    // Default to games view if no state
    updateView('games');
  }
});

// Event listeners for navigation
homeBtn.addEventListener('click', () => {
  showView('games');
});

mobileHomeBtn.addEventListener('click', () => {
  showView('games');
});

// Mobile back button
document.getElementById('mobileBackBtn').addEventListener('click', () => {
  window.history.back();
});

// Initialize the app based on URL parameters
function initializeFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  const view = urlParams.get('view') || 'games';
  const game = urlParams.get('game') || '';
  const character = urlParams.get('character') || '';
  const substory = parseInt(urlParams.get('substory')) || -1;
  
  // Set initial history state
  window.history.replaceState({view, game, character, substoryIndex: substory}, '');
  
  // Update the view
  updateView(view, game, character, substory);
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initializeFromURL();
});
