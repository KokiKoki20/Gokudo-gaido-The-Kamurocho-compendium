const gameData = {
  "Yakuza 0": {
    logo: "./images/logos/Y0.webp",
    characters: {
      "Kazuma Kiryu": {
        image: "./images/characters/Kiryu/KiryuY0.webp",
        substories: [
          {
            index: 1,
            chapter: 5,
            name: "The Visionary Fortune-teller",
            location:
              "Senryo Ave. (north of Shoten) → Champion District south entrance",
            reward: "Fortune-teller becomes business advisor",
            requirements:
              "Must complete Majima's 'Rise of the Dragon' substory",
            guide: [
              "1. Find two women gossiping on Senryo Ave.",
              "2. Find the fortune teller at the south entrance of the Champion District.",
              "3. Beat up someone harassing her, then get a free reading.",
              "4. Quiz answers:",
              " • Future: 'Take my friend's place'",
              " • Family: 'Ten billion yen'",
              " • Career: 'A driver'",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 2,
            chapter: 2,
            name: "Arakure Quest",
            location: "Outside Don Quijote",
            reward: "Sunburst Katana",
            requirements:
              "Available after Kiryu returns to his apartment for the night",
            guide: [
              "1. Speak to the young lad at the end of the line outside Don Quijote.",
              "2. Leave the area and return to see the kid being accosted.",
              "3. Run down the alley towards Pink St. and follow the chain of events.",
              "4. Defeat the final yakuza near the save point on Taihei Blvd.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 3,
            chapter: 5,
            name: "Passport to Pizza",
            location: "Southeast corner of Champion District alleys",
            reward: "Security Wallet",
            requirements: "Available in Chapter 5",
            guide: [
              "1. Find Samantha on the ground and give her an energy drink.",
              "2. She gives you a Secret Wallet and asks for pizza.",
              "3. Go to Smile Burger and inquire to get a pizza.",
              "4. Bring it back to her within 90 seconds (avoid bumping into people).",
              "5. Fight a bad guy upon delivery.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 4,
            chapter: 2,
            name: "Kamurocho Undercover",
            location: "Shellac (Champion District)",
            reward: "9mm Automatic Pistol",
            requirements: "Available in Chapter 2",
            guide: [
              "1. Go to Shellac and try to sit in the further seat.",
              "2. After the scene, leave and return when a marker appears.",
              "3. Speak to the reporter and head outside to beat up the gun dealer.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 5,
            chapter: 5,
            name: "The Human Trafficking Ring",
            location: "Shellac → Pink Alley",
            reward: "Inspires Kasuga to join business",
            requirements: "Must complete 'Kamurocho Undercover'",
            guide: [
              "1. Go to Shellac and speak to the reporter.",
              "2. He mentions a lead in Pink Alley (southwest of Telephone Club).",
              "3. Find Kasuga there talking to a guy.",
              "4. Return to Shellac, then go back to Pink Alley.",
              "5. Beat up the jerk.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 6,
            chapter: 2,
            name: "Damned Yanki",
            location: "South from Children's Park towards Mach Bowl",
            reward:
              "Wild Shirt (best), Charismatic Autobiography (good), Charismatic Photo (bad)",
            requirements: "Available in Chapter 2",
            guide: [
              "1. Head south from Children's Park and witness the odd old man/punk.",
              "2. Find him in Theater Square and speak to him.",
              "3. Answer his three questions with the correct pairs:",
              " • Q1: 'Start your engines!' or 'Hello in English'",
              " • Q2: 'Fighting every day' or 'Rescuing puppies'",
              " • Q3: 'The time you crushed a gang' or 'Stay silent'",
              "Krazy Kyo becomes a business advisor.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 7,
            chapter: 2,
            name: "How To Train Your Dominatrix",
            location: "Near Heroine Karaoke Bar",
            reward:
              "Fur Belly Warmer (Dominatrix) or Collapsible Steel Staff (Tsundere) or Toughness Z (Mixed)",
            requirements: "Must complete Substory #9 first",
            guide: [
              "1. Find Ayu near Heroine Karaoke Bar and speak to her.",
              "2. Defeat the jerks harassing her.",
              "3. Go to the park for a role-play. Choose responses:",
              " • For Dominatrix: 'Who gave you permission to speak, pig!?', (anything), 'I bet you'd like that, you pervert!', 'They're watching you get humiliated!'",
              " • For Tsundere: 'It's not like I'm happy to see you or anything!', (anything), 'Gross! I'm the only who would do that for you!', 'Keep your eyes on me, and me alone!'",
              "Ayu Sakurai video is viewable at Gandhara. 'Masochistic Man' becomes an advisor.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 8,
            chapter: 2,
            name: "Password Protected",
            location: "Kamuro Shopping Area (south end)",
            reward: "Access to weapon/gear dealer",
            requirements: "Available in Chapter 2",
            guide: [
              "1. Find two guys at the south end of the Kamuro Shopping Area.",
              "2. Talk to the merchant, then find the shopper at the north end.",
              "3. He sends you to find Monmon on the east side of Taihei Blvd.",
              "4. Say 'Plans for today' and 'Tomorrow's weather' to trigger a fight.",
              "5. Defeat the four dudes and get the password: 'a movie date' and 'rain at noon'.",
              "6. Return to the shopper, then go back to the dealer.",
              "7. Type the password: 'Subotenuhigeukiro'.",
              "Li Leung joins as security for the business.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 9,
            chapter: 2,
            name: "The Show Must Go On",
            location: "Near the Shrine",
            reward: "Magnetic Necklace (success) or Tauriner + (failure)",
            requirements: "Available in Chapter 2",
            guide: [
              "1. Find two guys chatting near the Shrine and agree to help.",
              "2. During the shoot:",
              " • Greeting: Any response works.",
              " • Grab an 'erasable': The food.",
              " • 'Grocer' the food: 'Tilt it at an angle'.",
              " • 'Jeer' and 'strike the set': 'Remove the dish'.",
              "3. Defeat the real producer and his cronies.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 10,
            chapter: 6,
            name: "Sugar Daddy",
            location: "Hotel District (north of Batting Center)",
            reward: "Goddess of Children Amulet, Reika Aiba's video",
            requirements: "Available in Chapter 6",
            guide: [
              "1. Find a guy hiding behind a pole.",
              "2. Agree to help him find his daughter.",
              "3. See 'Reika' in the club.",
              "4. First reply: anything. Second reply: top two options.",
              "5. Select 'Your father's not around?'",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 11,
            chapter: 6,
            name: "The Shrink-wrapped Dream",
            location: "Tenkaichi Alley (across from Public Park 3)",
            reward: "None specified",
            requirements: "Available in Chapter 6",
            guide: [
              "1. Find a small lad on the street and speak to him.",
              "2. Offer to help him access a vending machine.",
              "3. Sneak past the ladies to the machine:",
              " • Wait for Marina to walk back into the park.",
              " • Move to the sign on the ground.",
              " • Wait for nosy ladies to look away, then enter the alley.",
              " • Hide behind vending machines, watch the lady in purple.",
              " • Run to the machine when she looks left.",
              "4. You can give up by talking to the kid anytime.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 12,
            chapter: 2,
            name: "Miracle on Tenkaichi Street",
            location:
              "Small lot near western Akaushimaru (south of Theater Square)",
            reward: "Silent Shoes (black box) or Baseball Shirt (white box)",
            requirements: "Must complete 'The Show Must Go On'",
            guide: [
              "1. Listen to two guys talking about 'Miracle Johnson'.",
              "2. Leave and return when a marker appears to find Papillon Kato.",
              "3. Agree to his request and protect Miracle from zombies (use Beast Style).",
              "4. Choose your reward box.",
              "Papillon Kato and Spining join as business managers.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 13,
            chapter: 5,
            name: "The Tax Lady",
            location: "Sugita Building office",
            reward: "Trouble Finder, Marui joins as advisor",
            requirements: "Available after defeating the Electronics King",
            guide: [
              "1. Get a call at the office from the tax inspector.",
              "2. Speak to the young lady outside, then meet the real tax lady.",
              "3. Agree to the sting on neighbor Maguro.",
              "4. Inside, examine the video tapes: 'something wrong', 'its presence'.",
              "5. Stall for time: 'You have great taste in clothes', 'A house, maybe?', 'Read Maguro's Palm'.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 14,
            chapter: 10,
            name: "Destiny Calls",
            location: "Pink St. (east of Kamuro Shopping Area) → West Park",
            reward: "Super Spicy Knife",
            requirements: "Available after the fight at Tojo HQ",
            guide: [
              "1. Find a clerk outside a telephone club on Pink St.",
              "2. Agree to handle the problem customer.",
              "3. Pick any responses during the call.",
              "4. Go to the fountain in West Park and defeat the man there.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 15,
            chapter: 5,
            name: "Help Wanted!",
            location: "South of Mach Bowl → Office",
            reward: "Hires first applicant",
            requirements: "Must have defeated the Leisure King",
            guide: [
              "1. See a boss celebrating south of Mach Bowl.",
              "2. Return to the office; Marina mentions job applications.",
              "3. Leave and return to meet an applicant.",
              "4. Ask 'Why did you apply with us?', then the next three questions.",
              "5. Accept or reject him (result is the same).",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 16,
            chapter: 5,
            name: "Help Wanted! Again...",
            location: "Office",
            reward: "Hires second applicant",
            requirements: "Complete 'Help Wanted!'",
            guide: [
              "1. Return to the office for the second applicant.",
              "2. Hear Marina's summary, then ask all three questions.",
              "3. Point out the inconsistency: 'Summary' and 'Signature Dishes'.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 17,
            chapter: 2,
            name: "Underneath It All",
            location: "East along Shichifuku St. from Maharaja",
            reward: "None specified",
            requirements: "Available in Chapter 2",
            guide: [
              "1. Find a high school couple arguing.",
              "2. Talk to the young man, then find Mina on Senryo Ave.",
              "3. Speak to Mina, then find Sachiko in the Hotel District (blue scarf).",
              "4. Confront Sachiko, then walk away and deal with the problem that shows up.",
              "Sachiko joins as a business manager.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 18,
            chapter: 6,
            name: "Beyond the Door",
            location: "Story-related",
            reward: "None specified",
            requirements: "Unavoidable, part of the story",
            guide: [
              "1. Part of the main story after meeting Mr. Moneybags.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 19,
            chapter: 5,
            name: "Heir to the Family",
            location: "North from Maharaja → Batting Cages → Champion District",
            reward: "None specified",
            requirements: "Available in Chapter 5",
            guide: [
              "1. Find a guy in a gray sweater north of Maharaja.",
              "2. He tells you Daigo Dojima is at the batting cages.",
              "3. Go to the arcade, play UFO Catcher to get Daigo a toy.",
              "4. Go to Heroine, then Daigo gets kidnapped.",
              "5. Trail them to the empty lot in the Champion District.",
              "6. Defeat all the bad guys.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 20,
            chapter: 10,
            name: "A Shining Example",
            location: "Northern exit of Kamuro Shopping Area → West Park",
            reward: "None specified",
            requirements: "Available after the fight at Tojo HQ",
            guide: [
              "1. Find a woman in a dark school uniform east of the Shopping Area.",
              "2. Agree to help her and beat up the guy.",
              "3. Head to West Park, then leave back to the streets.",
              "4. Defeat the yakuza punks, then go to where your pal is held.",
              "5. Defeat all the dudes.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 21,
            chapter: 5,
            name: "First Impressions",
            location: "Office",
            reward: "Koshimizu joins as security",
            requirements: "Complete 'Help Wanted! Again...'",
            guide: [
              "1. Return to the office for the third applicant.",
              "2. Pick: 'Legal Studies', 'His hobby: dining out', 'He knows the dining scene', 'Tell us about someone you admire'.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 22,
            chapter: 5,
            name: "A Watery Investment",
            location: "Nakamichi Alley (south of shrine, west at T-junction)",
            reward: "Mew Shoes, Nao Mizuki's video",
            requirements: "Available after opening the real estate business",
            guide: [
              "1. Intervene when two guys harass a lady.",
              "2. She gives you a Toughness Z and offers to thank you more.",
              "3. Go to Café Alps with her.",
              "4. Refuse her propositions repeatedly (fourth option, then third).",
              "5. When asked how old she looks, say anything.",
              "6. Refuse again to face Nao and finish.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 23,
            chapter: 5,
            name: "Miracle in Maharaja",
            location: "Akaushimaru (south of Theater Square) → Maharaja",
            reward:
              "Encounter Finder (black box) or Tour T-Shirt (white box), Miracle Johnson as advisor",
            requirements:
              "Must complete 'Miracle on Tenkaichi Street' AND have begun Real Estate business",
            guide: [
              "1. Hear the two guys at Akaushimaru talk about Miracle at Maharaja.",
              "2. After opening the business, go to Maharaja and fight Gomez the bodyguard.",
              "3. Inside, lose the dance battle to Miracle (outcome doesn't matter).",
              "4. Choose your reward box.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 24,
            chapter: 2,
            name: "The Girl in the Video",
            location: "Gandhara",
            reward: "None specified",
            requirements: "View three videos at Gandhara first",
            guide: [
              "1. After viewing three videos, return to Gandhara and see another customer.",
              "2. Agree to his proposition.",
              "3. Find the girl at Kanrai, then return to Gandhara.",
              "4. Go back to Kanrai and fight alongside the man.",
              "Video Boy joins as security for the business.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 25,
            chapter: 6,
            name: "Postcard Rookie - Kiryu",
            location: "Office",
            reward: "Radio show mention",
            requirements: "Complete at least five substories",
            guide: [
              "1. Marina will bring postcards to the office.",
              "2. Interact with the desk and write about a completed substory.",
              "3. Eligible stories: 'The Visionary Fortune-teller', 'The Quest for Ara-Q3', 'A Lesson in S&M', 'The Shrink-wrapped Dream', 'The Miracle Walk', 'Miracle in Maharaja'.",
              "4. Leave and return, then check the radio to listen.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 26,
            chapter: 6,
            name: "Postcard Pro - Kiryu",
            location: "Office",
            reward: "Radio show mention",
            requirements: "Complete 'Postcard Rookie - Kiryu'",
            guide: [
              "1. Write another postcard using an eligible story.",
              "2. Leave and return, check the radio.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 27,
            chapter: 6,
            name: "Postcard Master - Kiryu",
            location: "Office",
            reward: "Hercules Gloves",
            requirements: "Complete 'Postcard Pro - Kiryu'",
            guide: [
              "1. Write one more postcard using an eligible story.",
              "2. Kamiya will appear and deliver the reward.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 28,
            chapter: 2,
            name: "Don't Dance Alone",
            location: "Maharaja",
            reward: "None specified",
            requirements: "Dance three times at Maharaja",
            guide: [
              "1. Dance three times at Maharaja.",
              "2. A goofy-looking fellow will challenge you to a dance battle.",
              "3. Beat him at Friday Night (any difficulty).",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 29,
            chapter: 2,
            name: "Technique to Die For",
            location: "Maharaja",
            reward: "None specified",
            requirements: "Complete 'Don't Dance Alone'",
            guide: [
              "1. Leave and return to Maharaja, go to the bar.",
              "2. Maiko will challenge you to a dance battle.",
              "3. Beat her at Queen of Passion.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 30,
            chapter: 2,
            name: "Maharaja Showdown",
            location: "Maharaja",
            reward: "Isobe Fan",
            requirements: "Complete 'Technique to Die For'",
            guide: [
              "1. Leave and return to Maharaja to find Ogita.",
              "2. Defeat him in a final dance battle (dance on Normal for better chances).",
              "3. Compliment him after winning.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 31,
            chapter: 5,
            name: "The Innocent Hook-Up",
            location: "Telephone Club",
            reward: "Riku's video, ability to date Riku",
            requirements: "Use the Telephone Club",
            guide: [
              "1. Use the Telephone Club.",
              "2. For Riku: Choose 'Girl in Front'.",
              "3. Beat up her ex if necessary.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 32,
            chapter: 5,
            name: "The Sexy Hook-Up",
            location: "Telephone Club",
            reward: "Ayaka's video, ability to date Ayaka",
            requirements: "Use the Telephone Club",
            guide: [
              "1. Use the Telephone Club.",
              "2. For Ayaka: Choose 'Move in for a better look' then 'Farther Woman'.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 33,
            chapter: 5,
            name: "The Flirty Hook-Up",
            location: "Telephone Club",
            reward: "Haruki's video, ability to date Haruki",
            requirements: "Use the Telephone Club",
            guide: [
              "1. Use the Telephone Club.",
              "2. For Haruki: Choose 'Further Woman'.",
              "3. Beat up her ex.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 34,
            chapter: 5,
            name: "Sakura Shock",
            location: "Telephone Club",
            reward: "Leads to same result",
            requirements: "Use the Telephone Club",
            guide: [
              "1. Use the Telephone Club.",
              "2. Meet with either Asakura, Sakuraoka, or Sakurai.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 35,
            chapter: 5,
            name: "Verbal Warning",
            location: "Telephone Club",
            reward: "None specified",
            requirements: "Use the Telephone Club",
            guide: ["1. Use the Telephone Club.", "2. Meet with Mirei."].join(
              "\n"
            ),
            videoId: "",
          },

          {
            index: 36,
            chapter: 2,
            name: "I am Kazuma-kun",
            location: "Pocket Circuit Stadium",
            reward: "Blue Bolt decal",
            requirements: "Win a couple of Pocket Circuit races first",
            guide: [
              "1. After winning some races, Takuma-kun will approach you near the shop booth.",
              "2. Accept his challenge and defeat him.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 37,
            chapter: 2,
            name: "The Rocky Road of Romance",
            location: "Children's Park → Pocket Circuit Stadium",
            reward: "None specified",
            requirements: "Complete 'I am Kazuma-kun'",
            guide: [
              "1. Find Takuma-kun and Hideki-kun at Children's Park.",
              "2. Head back to the Pocket Circuit Stadium and find Hideki-kun.",
              "3. Defeat him in the Beginners' Cup.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 38,
            chapter: 2,
            name: "Gift of Love",
            location: "Pocket Circuit Stadium",
            reward: "DRAG-ON car, Boost Gears",
            requirements: "Complete 'The Rocky Road of Romance'",
            guide: [
              "1. Speak to Mika-chan at the Stadium.",
              "2. Defeat her using the Rookie's Race build.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 39,
            chapter: 2,
            name: "Suspicion of Perversion",
            location: "Pocket Circuit Stadium",
            reward: "None specified",
            requirements: "Complete 'Gift of Love'",
            guide: [
              "1. Leave and return to the Stadium, head to the Parts Shop.",
              "2. Challenge Satoru-kun and defeat him using the Pro-Am build.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 40,
            chapter: 2,
            name: "The Prodigious Racer",
            location: "Pocket Circuit Stadium",
            reward: "Sunshine decal",
            requirements: "Complete 'Suspicion of Perversion'",
            guide: [
              "1. Challenge Sena-chan the Ace.",
              "2. Defeat her using the Experts' Race build.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 41,
            chapter: 2,
            name: "The Woman They Call Professor",
            location: "Earth Angel → Pocket Circuit Stadium",
            reward: "Cool Striker car, Heavy Suspension",
            requirements: "Complete 'The Prodigious Racer'",
            guide: [
              "1. Head to Earth Angel to challenge Harumi-chan the Professor.",
              "2. Defeat her using the Experts' Race build.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 42,
            chapter: 2,
            name: "The Greatest Glory",
            location: "Pocket Circuit Stadium",
            reward: "Dark Purple decal",
            requirements: "Complete 'The Woman They Call Professor'",
            guide: [
              "1. Challenge Kazuyoshi-kun the Champion.",
              "2. Defeat him using the King of Speed Cup build.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 43,
            chapter: 2,
            name: "The Fighter's Crown",
            location: "Pocket Circuit Stadium",
            reward: "Ability to challenge anyone",
            requirements: "Complete 'The Greatest Glory' and all races",
            guide: [
              "1. Pocket Circuit Fighter will challenge you.",
              "2. Use the special build from the chart to defeat him.",
              "3. Be careful on the first two laps to avoid flying off.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 44,
            chapter: 5,
            name: "The Predator's Call",
            location: "Telephone Club",
            reward: "None specified",
            requirements: "Use the Telephone Club",
            guide: ["1. Use the Telephone Club.", "2. Meet with Maria."].join(
              "\n"
            ),
            videoId: "",
          },
          {
            index: 45,
            chapter: 5,
            name: "A Mother's Touch",
            location: "Telephone Club",
            reward: "None specified",
            requirements: "Use the Telephone Club",
            guide: ["1. Use the Telephone Club.", "2. Meet with Sayuri."].join(
              "\n"
            ),
            videoId: "",
          },

          {
            index: 46,
            chapter: 2,
            name: "The Stop-and-Search Specialist",
            location: "South of Gandhara Kamurocho",
            reward: "Sacrifice Stone, Nanase Otoha video",
            requirements: "Available in Chapter 2",
            guide: [
              "1. Approach the cop standing south of Gandhara.",
              "2. Show him something innocuous (like food) when asked.",
              "3. Return to him repeatedly and show normal items to raise friendship.",
              "4. Eventually, fight off bad guys harassing a lady.",
              "Kikuchi joins as security for the business.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 47,
            chapter: 2,
            name: "The Mushroom Merchant",
            location: "Park Alley (northeast)",
            reward: "Enokitake (first), friendship progression",
            requirements: "Available in Chapter 2",
            guide: [
              "1. Find the rotund fellow in Park Alley.",
              "2. After the conversation, fight a dude.",
              "3. Buy his mushrooms to raise friendship.",
              "4. Leave and return multiple times, beating up harassers each time.",
              "5. Offer a new suggestion and buy more mushrooms.",
              "6. Finally, beat up four overseas guys.",
              "Mafia Boss joins as security for the business.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 48,
            chapter: 5,
            name: "Kamurocho's Mr. Libido",
            location: "Poppo (Showa St.) → Earth Angel",
            reward: "Closes friendship",
            requirements: "Have at least one Telephone Card",
            guide: [
              "1. Find the bald man with a black jacket on Pink St., east of the Poppo.",
              "2. Talk to him about your Telephone Cards.",
              "3. Return to him repeatedly as you get more cards (need 30 total).",
              "4. Eventually, find him in distress and go to Earth Angel.",
              "5. Speak to the Mama about a new girl for him.",
            ].join("\n"),
            videoId: "",
          },

          {
            index: 49,
            chapter: 6,
            name: "Kamurocho's Mr. Moneybags",
            location: "Vincent",
            reward:
              "Friendship with Fukushima, fee-free money transfer to Majima",
            requirements: "After running into Mr. Moneybags in the story",
            guide: [
              "1. Find Fukushima next to Vincent.",
              "2. Speak to him to learn about the investment fund.",
              "3. Invest in set increments at story points:",
              " • Ch. 6: 10 million yen",
              " • Ch. 9+: 100 million yen (after Majima invests once)",
              " • Ch. 13: 1 billion yen",
              " • Finale: 10 billion yen (max friendship)",
            ].join("\n"),
            videoId: "",
          },

          {
            index: 50,
            chapter: 2,
            name: "Pocket Circuit Fighter!",
            location: "Pocket Circuit Stadium",
            reward: "Friendship with PCF, Devil Killer car (max friendship)",
            requirements: "Available in Chapter 2",
            guide: [
              "1. Enter the Stadium and speak to Pocket Circuit Fighter, then again for the tutorial.",
              "2. Beat successive races to raise friendship.",
              "3. After beating Rookies' Race, find him on east Nakamichi St. and tell him 'The kids are waiting for you'.",
              "4. After beating Champions' Cup, find him in Public Park 3.",
              "5. Max friendship grants the Devil Killer car and custom track creation.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 51,
            chapter: 2,
            name: "Miho, Convenience Store Clerk",
            location: "Poppo (Tenkaichi St.)",
            reward:
              "Berserker Charm, Miso Cutlet Lunch Set, Miho's video, free property",
            requirements: "Buy something at the Poppo",
            guide: [
              "1. Buy something at the Poppo on Tenkaichi St. to befriend Miho.",
              "2. Keep buying things to raise friendship.",
              "3. At 50%, suggest an attraction method.",
              "4. Return later; if she uses it, get Berserker Charm.",
              "5. Answer 'Miso Cutlets' to her next question.",
              "Grants free property for the business.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 52,
            chapter: 2,
            name: "Emiri, Mach Bowl Receptionist",
            location: "Mach Bowl",
            reward: "Nugget (chicken manager), Emiri's video",
            requirements: "Bowl and likely get strikes",
            guide: [
              "1. Bowl at Mach Bowl until Emiri is impressed.",
              "2. Continue bowling to raise friendship.",
              "3. At 80%, speak to her after defeating the Leisure King in Chapter 5.",
              "4. Accept the challenge to bowl a turkey (three strikes in a row).",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 53,
            chapter: 2,
            name: "Sushi Gin's Chef",
            location: "Sushi Gin",
            reward: "Friendship maxed, free property",
            requirements: "Eat a couple of times at Sushi Gin",
            guide: [
              "1. Eat at Sushi Gin a few times to befriend the chef.",
              "2. Continue eating and talking to raise friendship.",
              "3. He will ask for fish; head to the Pier to fish.",
              "4. Bring him any four fish, one at a time.",
              "5. Leave and return after the fourth for a cutscene.",
              "Grants free property for the business.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 54,
            chapter: 2,
            name: "Luka at SEGA HI-TECH LAND",
            location: "SEGA Arcade",
            reward:
              "Alertness Hood, Super Hang-On game, Luka's video, free property",
            requirements: "Play Out Run",
            guide: [
              "1. Play Out Run at the arcade for Luka to notice.",
              "2. Play again, then return for her to mention her 1.5 million score.",
              "3. Beat 1.5 million to get Alertness Hood.",
              "4. Play again, then return for her to mention a 3 million score.",
              "5. Beat 3 million to install Super Hang-On and get her video.",
              "Grants free property for the business.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 89,
            chapter: 2,
            name: "Bacchus' Training",
            location: "Alley near homeless guys",
            reward: "Sets up Bacchus as a Master",
            requirements:
              "Late Chapter 2, after giving alcohol to homeless guys",
            guide: [
              "1. Bacchus will call you into the alley after the alcohol event.",
              "2. Help him take down his debt collector.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 90,
            chapter: 2,
            name: "Kamoji's Training",
            location: "Shichifuku Parking Lot",
            reward: "Sets up Kamoji as a Master",
            requirements: "Available in Chapter 2",
            guide: [
              "1. Go to the Shichifuku Parking Lot.",
              "2. Speak to Kamoji.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 91,
            chapter: 2,
            name: "Miss Tatsu's Training",
            location: "Pier in Tokyo",
            reward: "Sets up Miss Tatsu as a Master",
            requirements: "Available in Chapter 2",
            guide: [
              "1. Go to the Pier in Tokyo.",
              "2. Speak with Miss Tatsu.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 92,
            chapter: 2,
            name: "Apex Predator",
            location: "Kamurocho",
            reward: "Defeat Mr. Shakedown (Egashira)",
            requirements: "Run into Mr. Shakedown after your first meeting",
            guide: [
              "1. Find Mr. Shakedown (Egashira, trilby hat).",
              "2. Use best skills or spam Heat Actions with medicine to defeat him.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 93,
            chapter: 2,
            name: "A Dream Unfulfilled",
            location: "Kamurocho",
            reward: "Defeat Mr. Shakedown (Sato)",
            requirements: "Available in Chapter 2",
            guide: [
              "1. Find the second Mr. Shakedown (Sato, purple jacket).",
              "2. Defeat him.",
            ].join("\n"),
            videoId: "",
          },

          {
            index: 94,
            chapter: "Finale",
            name: "The Head of the Clan",
            location: "Bullfighting Arena (via taxi)",
            reward: "Amon Sunglasses",
            requirements: "Complete all other Kiryu substories",
            guide: [
              "1. After completing all substories, your pager will tell you to go to the bullfighting arena.",
              "2. Take a taxi there to face So Amon.",
              "PREPARATION: Bring Incomparable Habu Drinks, best Mail armor, Sacrifice Stones.",
              "PHASE 1 (Cannon):",
              " • Dodge straight shots, avoid volley, watch for laser.",
              " • Use Legend Style, 'Finishing Hold' (Grab after Finishing Blow) to knock him down.",
              " • Grab near his head to stun him, repeat.",
              "PHASE 2 (Unarmed):",
              " • Helicopter drops debris; avoid bouncing furniture.",
              " • Look for black and gold invincibility bottles.",
              " • Deny them to Amon, use them yourself to attack freely.",
              " • Beast Style on furniture is effective.",
            ].join("\n"),
            videoId: "",
          },
        ],
      },
      "Goro Majima": {
        image: "./images/characters/Majima/MajimaY0.webp",
        substories: [
          {
            index: 49,
            chapter: 3,
            name: "From the Heart",
            location: "Outside Le Marche → Shofukucho South",
            reward: "Secret Wallet, Riri Kuribayashi video",
            requirements: "Available after getting Slugger Style",
            guide: [
              "1. Find man sniffling outside Le Marche.",
              "2. He wants a heart necklace or forgery.",
              "3. Find two guys talking in Shofukucho South for business card.",
              "4. Give card to man at Le Marche.",
              "5. Return to marked spot in Shofukucho South.",
              "6. Defeat three guys inside.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 50,
            chapter: 3,
            name: "The Entertainer's Throne",
            location: "East side of Iwao Bridge",
            reward: "Staminan Royale (success) or Staminan X (partial success)",
            requirements: "Available in Chapter 3",
            guide: [
              "1. Examine human statue on east side of Iwao Bridge.",
              "2. Leave and return to find crowd; he needs restroom.",
              "3. Distract crowd with 'UFO' and 'singing' options.",
              "4. Defeat tough guy.",
              "5. Speak to Statue-san and successfully get him to restroom.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 51,
            chapter: 3,
            name: "Rise of the Dragon",
            location: "Far east Shofukucho St. → Magutako",
            reward: "None specified",
            requirements: "Available in Chapter 3",
            guide: [
              "1. Find guy hiding behind pillar near taxi.",
              "2. Learn about 'bontan hunter' near Magutako.",
              "3. Find blond kid (Ryuji) near Magutako and defeat him (tough fight).",
              "4. Return to Peter Pantsless to give back items.",
              "5. Return to Magutako to complete.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 52,
            chapter: 3,
            name: "Be My Boyfriend",
            location: "Sotenbori St. (near Zuboraya)",
            reward:
              "Sprite Belt (best), Fluorite x5 (good), Bulletproof Glass Amulet (bad), Kokoa Aisu video",
            requirements: "Available in Chapter 3",
            guide: [
              "1. Woman stops you on Sotenbori St.; agree to pretend to be boyfriend.",
              "2. Meet her dad and answer:",
              " • 'Pleased to meet you sir. I'm Goro Majima.'",
              " • 'I'm a dentist.'",
              " • 'We sat next to each other at a movie.'",
              " • 'She's so innocent and childlike.'",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 53,
            chapter: 3,
            name: "Man with a Stranger's Face",
            location: "Ashitaba Park → Bunzaemon Mall",
            reward: "Sakura Storm katana",
            requirements: "Available in Chapter 3",
            guide: [
              "1. Speak to man in olive jacket staring at mom and boy in Ashitaba Park.",
              "2. Leave and return to speak to him again.",
              "3. Approach boy and say 'Whatcha up to?'",
              "4. Leave and return to find mother; son is missing.",
              "5. Find son in green jacket at south end of Bunzaemon Mall.",
              "6. Take him back to park; defeat jerks (target gunner first).",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 54,
            chapter: 3,
            name: "Disciple of the New Order",
            location: "Western exit of Ashitaba Park → Northwest corner",
            reward: "Crystal (best), Traveler's Amulet, Iori Kagawa video",
            requirements: "Available in Chapter 3",
            guide: [
              "1. Find mother speaking to cult members at western exit.",
              "2. Speak to her; get Handmade Amulet.",
              "3. Find cultists in northwest corner of Ashitaba Park.",
              "4. Cult name: 'Munan Chohept Onast'.",
              "5. When meeting Iori: 'Call her Iori' or 'Pretend to be Munan Chohept'.",
              "6. Greeting: 'Say it with the Pose'.",
              "7. Test answers: 'Onast', 'Shooreh Pippi', 'Circle with the Left Hand...', 'Munan Suzuki'.",
              "8. Tell Iori 'mom's gonna be heartbroken'.",
              "9. Defeat Suzuki.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 55,
            chapter: 3,
            name: "Calling the Future",
            location: "Northwest Save Point → M Store (Shofukucho West)",
            reward: "Mobile phone acts as Save Point",
            requirements: "Available in Chapter 3",
            guide: [
              "1. Use Save Point in northwest corner; guy gets call on bag phone.",
              "2. Agree to try it; fails.",
              "3. Get Battery from Don Quijote and bring back.",
              "4. Give him any energy drink.",
              "5. Defeat two punks.",
              "6. Go to M Store on Shofukucho West; speak to man again.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 56,
            chapter: 3,
            name: "A Taxing Issue",
            location: "Northwest of Temple (Hoganji Yochoko)",
            reward: "Primeval Spirit Stone (best)",
            requirements: "Available in Chapter 3",
            guide: [
              "1. Find business guys harassing another near Temple.",
              "2. Defeat four bozos.",
              "3. Speak to remaining guy; answer questions:",
              " • 'To provide public services'",
              " • 'Tobacco'",
              " • 'Gasoline'",
              " • '8%'",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 57,
            chapter: 3,
            name: "Crossed Words",
            location: "Front of Kani Douraku",
            reward:
              "Pearl x3 (success) or Quality Iron (fail), Shizuku Hasegawa video",
            requirements: "Available in Chapter 3",
            guide: [
              "1. Find arguing couple in front of Kani Douraku.",
              "2. Help with crossword answers:",
              " • 'Mashed'",
              " • 'Popcorn'",
              " • 'Shoulder'",
              " • 'Soy sauce'",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 58,
            chapter: 3,
            name: "Stadium Jumper Strut",
            location: "South of Iwao Bridge (west side)",
            reward: "Encounter Finder",
            requirements: "Available in Chapter 3",
            guide: [
              "1. Find man on ground south of Iwao Bridge.",
              "2. Give him an energy drink.",
              "3. Protect him as he crosses bridge in varsity jacket (use Slugger Style).",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 59,
            chapter: 8,
            name: "Postcard Rookie - Majima",
            location: "Club Sunshine staff room",
            reward: "Radio show mention",
            requirements: "Complete at least five substories",
            guide: [
              "1. Hear radio in staff room about postcards.",
              "2. Write about completed substory: 'A Heart Necklace Fake', 'Pretend Boyfriend', 'A Taxing Issue', 'Crossed Words', 'The Ten Million Drug Test', 'A Courtship in Graffiti'.",
              "3. Leave and return; use radio to hear story.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 60,
            chapter: 8,
            name: "Postcard Pro - Majima",
            location: "Club Sunshine staff room",
            reward: "Radio show mention",
            requirements: "Complete 'Postcard Rookie - Majima'",
            guide: [
              "1. Write another postcard using eligible story.",
              "2. Leave and return; use radio.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 61,
            chapter: 8,
            name: "Postcard Master - Majima",
            location: "Club Sunshine staff room",
            reward: "Benkei's Amulet",
            requirements: "Complete 'Postcard Pro - Majima'",
            guide: [
              "1. Write one more postcard using eligible story.",
              "2. Kamiya appears and delivers reward.",
            ].join("\n"),
            videoId: "",
          },

          {
            index: 62,
            chapter: 3,
            name: "The 10 Million Drug Test",
            location:
              "Southwest district (south of Mahjong Jambalaya) → East Ashitaba Park",
            reward: "10 million yen",
            requirements: "Available in Chapter 3",
            guide: [
              "1. Read poster in northwest corner of back alley building.",
              "2. Find guy in black at east side of Ashitaba Park.",
              "3. Agree to testing; three tests:",
              " • Test 1: Defeat guys while watching health.",
              " • Test 2: Battle style changes randomly.",
              " • Test 3: Vision obscured; defeat foes.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 63,
            chapter: 3,
            name: "Errands on the Run",
            location:
              "South of Mahjong Jambalaya → M Store → North river footpath",
            reward: "'Erranda' joins club later",
            requirements: "Available in Chapter 3",
            guide: [
              "1. Find running guy south of Mahjong Jambalaya.",
              "2. Find him on ground at M Store; give energy drink.",
              "3. Leave and return; buy Sneakers from Don Quijote and give to him.",
              "4. Leave and return again; agree to deliver to girl on north river footpath.",
              "5. Defeat enemy; when friend shows up, 'Tell Him the Truth'.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 64,
            chapter: 3,
            name: "Toilet Talk",
            location: "Bathroom in Ashitaba Park → Phone booth on Shofukucho",
            reward: "Calming Towel, Rina Ito video",
            requirements: "Available in Chapter 3",
            guide: [
              "1. Go near bathroom in Ashitaba Park; Majima ruminates.",
              "2. Go inside; notice graffiti and reply.",
              "3. Leave and return when marker appears; reply.",
              "4. Leave and return again; meet at phone booth on Shofukucho.",
              "5. Defeat jokers who meet you.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 65,
            chapter: 3,
            name: "The Obatarian Strikes",
            location: "Middle of Sotenbori St. (south side, takoyaki stand)",
            reward: "Candy, Etsuko joins club later",
            requirements: "Available in Chapter 3",
            guide: [
              "1. Interact with takoyaki stand; lady pushes you.",
              "2. Leave and return; check stand and respond (get Candy).",
              "3. Leave and return; Obatarian bites off more than she can chew.",
              "4. Defeat bad guy.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 66,
            chapter: 4,
            name: "Party at Maharaja",
            location: "Maharaja disco",
            reward: "None specified",
            requirements:
              "Dance three times at Maharaja, then leave and return",
            guide: [
              "1. Dance three times at Maharaja.",
              "2. Leave and return.",
              "3. Approach woman in metallic finery (Isobe).",
              "4. Defeat first opponent Kengo in dance battle.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 67,
            chapter: 4,
            name: "Disco Transformation",
            location: "Maharaja disco",
            reward: "None specified",
            requirements: "Complete 'Party at Maharaja'",
            guide: [
              "1. Leave and return to Maharaja; head to bar.",
              "2. Isobe talks to next opponent.",
              "3. Defeat him in dance battle.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 68,
            chapter: 4,
            name: "Disco Dancing Goddess",
            location: "Maharaja disco",
            reward: "Isobe Fan, Isobe joins team later",
            requirements: "Complete 'Disco Transformation'",
            guide: [
              "1. Face Isobe in third dance battle.",
              "2. Use extra steps and Fever twice to win.",
              "3. Hard battle; no tricks.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 69,
            chapter: 7,
            name: "Paternal Instincts",
            location: "Club Sunshine",
            reward: "None specified",
            requirements: "After finishing Yuki's hostess training",
            guide: [
              "1. Tail Yuki and mystery man.",
              "2. Choose 'Keep Observing' twice (choices don't matter much).",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 70,
            chapter: 7,
            name: "A Moment Shared",
            location: "Club Sunshine",
            reward: "Chika's video",
            requirements: "After finishing Chika's hostess training",
            guide: [
              "1. Go out on walk with Chika.",
              "2. Respond however you like.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 71,
            chapter: 7,
            name: "Of Love and Ramen",
            location: "Club Sunshine",
            reward: "Mana's video",
            requirements: "After finishing Mana's hostess training",
            guide: [
              "1. Go on date with Mana.",
              "2. Defeat two jerks that mess up your day.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 72,
            chapter: 7,
            name: "The First Friend",
            location: "Club Sunshine → Bishamon Bridge",
            reward: "Ai's video",
            requirements: "After finishing Ai's hostess training",
            guide: [
              "1. Go to Bishamon Bridge with Ai.",
              "2. Respond however you like.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 73,
            chapter: 7,
            name: "A Little Brotherly Love",
            location: "Club Sunshine",
            reward: "Hibiki's video",
            requirements: "After finishing Hibiki's hostess training",
            guide: [
              "1. Have heartfelt conversation with Hibiki's little brother.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 74,
            chapter: 7,
            name: "Dream Chaser",
            location: "Club Sunshine",
            reward: "Saki's video",
            requirements: "After finishing Saki's hostess training",
            guide: [
              "1. Go outside after finishing training.",
              "2. Defeat jerks harassing Saki.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 75,
            chapter: 7,
            name: "Mystery Caller",
            location: "Southern Taxi Stand Save Point → South river footpath",
            reward: "Recruit Unknown hostess, money rewards",
            requirements: "After first night at Club Sunshine",
            guide: [
              "1. Save Point near southern Taxi Stand rings; answer for 100,000 yen.",
              "2. Task: bring 9mm Automatic Pistol (buy or find).",
              "3. Bring to Save Point for 200,000 yen.",
              "4. Further items: Chinese Broadsword (300,000), Tourmaline (400,000), Sakura Storm (500,000).",
              "5. Called to south river footpath; defeat three jerks.",
              "6. Return to Save Point; recruit Unknown hostess.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 76,
            chapter: 7,
            name: "Sotenbori's Mr. Moneybags",
            location: "In front of The Grand",
            reward: "Ability to send money to Kiryu freely",
            requirements: "After first night at Club Sunshine",
            guide: [
              "1. Find busker in front of The Grand.",
              "2. Give money in increments:",
              " • Ch. 7: 10 million yen",
              " • Ch. 11: 50 million yen",
              " • Ch. 15: 100 million yen",
              " • Finale: 500 million yen",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 77,
            chapter: 4,
            name: "Sotenbori's Mr. Libido",
            location: "Gandhara video store",
            reward: "Incomparable Habu Drink available for purchase",
            requirements: "First encounter with Mr. Libido in story",
            guide: [
              "1. Head to Gandhara after story encounter.",
              "2. Watch different videos to build friendship (15 total needed).",
              "3. Every 5 movies, have conversation with Mr. L.",
              "4. On fourth conversation, he needs 'Incomparable Habu Drink' from Daikoku Drugstore.",
              "5. Bring it to him.",
            ].join("\n"),
            videoId: "",
          },

          {
            index: 78,
            chapter: 3,
            name: "The Doll Girl",
            location: "Outside SEGA HI-TECH LAND",
            reward: "Security Wallet, 'Dolly' (mother) joins club later",
            requirements: "Available in Chapter 3",
            guide: [
              "1. Speak to forlorn girl outside arcade.",
              "2. Leave and return; defeat two thugs eyeing her.",
              "3. Get Chestnut the Squirrel (Red) from UFO Catcher and give to her.",
              "4. She runs off; return later.",
              "5. Get Blue Chestnut and give to her.",
              "6. Get Pink Bunchan and give to her.",
              "7. Find her crying over busted Bunchan; follow to jerks and defeat them.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 79,
            chapter: 3,
            name: "Komian's Chef",
            location: "Komian restaurant",
            reward: "Trouble Finder, Nozomi Hakuza video, free partnership",
            requirements: "Eat at Komian",
            guide: [
              "1. Eat at Komian to befriend chef.",
              "2. Continue eating to build friendship.",
              "3. Near end, get ingredients: salmon, turtle, eel (fish at river).",
              "4. Bring back ingredients.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 80,
            chapter: 3,
            name: "STIJL's Barkeep",
            location: "Shot Bar STIJL",
            reward: "French Wallet, Courvoisier XO added, free partnership",
            requirements: "Drink at STIJL",
            guide: [
              "1. Drink at STIJL to befriend bartender.",
              "2. Continue ordering drinks to build friendship.",
              "3. He asks you to tend bar; tell customers:",
              " • 'Sherry casks'",
              " • 'Ballantine's'",
              " • 'Fruity aroma'",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 81,
            chapter: 3,
            name: "Gandhara's Clerk",
            location: "Gandhara video store → Alley south of Utahime",
            reward: "'The Videotape', free partnership",
            requirements: "Watch video at Gandhara",
            guide: [
              "1. Watch video at Gandhara to befriend clerk.",
              "2. Continue watching videos to build friendship.",
              "3. At high level, he mentions special tape hidden in Sotenbori.",
              "4. Go to alley south of Utahime; find woman in white.",
              "5. Buy Oden Soup from M Store and give to her.",
              "6. Get 'The Videotape'; bring back to Gandhara and watch.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 82,
            chapter: 3,
            name: "Kyoko at SEGA HI-TECH LAND",
            location: "SEGA Arcade",
            reward:
              "Quality Iron, Fantasy Zone game, Kyoko video, free partnership",
            requirements: "Play Space Harrier",
            guide: [
              "1. Play Space Harrier; Kyoko notices.",
              "2. Leave, return, play again; she mentions high score.",
              "3. Leave, return; she challenges 1 million points; beat it for Quality Iron.",
              "4. Leave, return, play again; she challenges 2 million points.",
              "5. Beat it; Fantasy Zone installed.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 95,
            chapter: 4,
            name: "Sparring with Komeki",
            location: "Ashitaba Park",
            reward: "Sets up Sometaro Komeki as Master",
            requirements: "After date with Akko",
            guide: [
              "1. Head to Ashitaba Park after date.",
              "2. Begin training with Sometaro Komeki.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 96,
            chapter: 3,
            name: "Fei Hu's Training",
            location: "Fei Hu's restaurant",
            reward: "Sets up Fei Hu as Master",
            requirements: "After initial equipment search with Fei Hu",
            guide: [
              "1. Return to restaurant after first equipment search.",
              "2. Speak to Fei Hu.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 97,
            chapter: 4,
            name: "Areshi's Training",
            location: "Southwest corner district (back alley)",
            reward: "Sets up Areshi as Master",
            requirements: "After Areshi speaks to you",
            guide: [
              "1. Head to southwest corner of district.",
              "2. Find Areshi in back alley.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 98,
            chapter: 3,
            name: "Play-Money Shakedown",
            location: "Sotenbori",
            reward: "Defeat Mr. Shakedown (Kawahashi)",
            requirements: "Encounter Mr. Shakedown (red sleeveless shirt)",
            guide: [
              "1. Find Mr. Shakedown (Kawahashi).",
              "2. Defeat him.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 99,
            chapter: 3,
            name: "The Ultimate Plan",
            location: "Sotenbori",
            reward: "Defeat Mr. Shakedown (Oe)",
            requirements:
              "Encounter second Mr. Shakedown (black sleeveless shirt)",
            guide: [
              "1. Find second Mr. Shakedown (Oe).",
              "2. Defeat him.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 100,
            chapter: "Finale",
            name: "Sotenbori in Peril",
            location: "Bullfighting Arena (via taxi from Sotenbori)",
            reward: "Amon Sunglasses",
            requirements: "Complete all other Majima substories",
            guide: [
              "1. After completing all substories, pager tells you to go to bullfighting arena.",
              "2. Take taxi from Sotenbori to arena.",
              "PREPARATION: Bring Incomparable Habu Drinks, best Mail armor, Sacrifice Stones.",
              "STRATEGY: Use Mad Dog Style, specifically Mad Dog Trick: Demonfire (hold Fighting Stance, press Heavy Attack as enemy attacks).",
              "PHASE 1 (Legend Style): Amon throws items; use Demonfire repeatedly.",
              "PHASE 2 (Knife): Amon uses knife; health drains fast. Continue Demonfire, heal often.",
              "Jo Amon has 13 health bars.",
            ].join("\n"),
            videoId: "",
          },
        ],
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
        substories: [
          {
            index: 1,
            chapter: 4,
            name: "The Price of a D-Cup",
            location: "Alley near Bantam bar (ex-Baachus)",
            reward: "1,000 EXP, Hidden Casino info",
            requirements: "Available in Chapter 4",
            guide: [
              "1. Witness a woman being harassed by a drunk man in the alley.",
              "2. Select 'You better watch your mouth' to intervene.",
              "3. At the bar, select 'If you fall for me, you'll only get burned'.",
              "4. For both drink offers, select 'I don't feel like drinking right now'.",
              "5. When bartender gets angry, select 'I told you I'm not gonna drink'.",
              "6. Defeat the drunk man and his goons.",
              "7. When offered money, select 'Hell no' to get casino information instead.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 2,
            chapter: 4,
            name: "My Lover's a Showgirl",
            location: "Pink Street (marked location)",
            reward: "Lifetime strip club pass, 3,000 EXP",
            requirements: "After accessing Serena's hideout",
            guide: [
              "1. Receive call from Yuya after leaving Serena's.",
              "2. Go to marked location on Pink Street.",
              "3. Select 'Sounds like fun, for a change' then 'Of course'.",
              "4. Defeat the Mysterious Hitman (be careful of his shotgun).",
              "5. After cutscene, rush outside and answer Yuya's call.",
              "6. Select 'Wait till I get there!' and go to the green marker.",
              "7. Defeat all enemies in the room (prioritize katana user).",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 3,
            chapter: 5,
            name: "A Doctor's Duty",
            location: "West Park entrance",
            reward: "3,000 EXP",
            requirements: "Morning, before entering West Park",
            guide: [
              "PART 1 (Chapter 5):",
              "1. Buy any Bento box from convenience store.",
              "2. Talk to starving boy at West Park entrance.",
              "3. Give him the Bento box.",
              "",
              "PART 2 (Chapter 7):",
              "4. Buy another Bento box in Chapter 7.",
              "5. Find the boy at Public Park 3, give him the Bento.",
              "6. When he gets sick, quickly find the clinic (green marker).",
              "7. Defeat the Ali brothers inside the clinic.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 4,
            chapter: 8,
            name: "The Yakuza's Wife",
            location: "Purgatory → Marked building",
            reward: "3,000 EXP",
            requirements: "After informing Date about Haruka",
            guide: [
              "1. Receive call from Kage after informing Date.",
              "2. Go to Kage's office in Purgatory.",
              "3. Head to the marked building on map.",
              "4. Defeat the ex-Dojima gangsters inside.",
              "5. Watch concluding cutscene.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 5,
            chapter: 7,
            name: "Casino Royale",
            location: "Kyushu No. 1 Star casino",
            reward: "¥100,000, 3,000 EXP",
            requirements:
              "Access to hidden casino, Haruka with you, Red Gem recommended",
            guide: [
              "1. Enter Kyushu No. 1 Star in Pink Alley (give password if first time).",
              "2. Talk to counter clerk about suspicious man.",
              "3. Meet Motoki near exit, accept briefcase with ¥10,000,000.",
              "4. Exchange money for 200,000 chips at counter.",
              "5. Equip Red Gem, play roulette: bet 5,555 on all red numbers + 10 on red.",
              "6. Exit game after winning, talk to Yakuza who approach.",
              "7. Defeat Yakuza thugs (they have daggers).",
              "8. Confront Motoki after fight, select 'Not yet' twice when he asks for chips.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 6,
            chapter: 7,
            name: "The Boxing Gamble",
            location: "Bantam bar",
            reward: "3,000 EXP",
            requirements: "Before dropping off Haruka at West Park",
            guide: [
              "1. Enter Bantam bar with Haruka.",
              "2. After Jackal slaps Haruka, demand he apologizes.",
              "3. Defeat Jackal outside (he's a skilled boxer).",
              "4. Get password from bartender: 'I need shelter from the rain'.",
              "5. Go to green marker location, give password to guard.",
              "6. Defeat Sawda inside to end the blackmail.",
              "BONUS: Re-enter Bantam with Haruka for extra cutscene.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 7,
            chapter: 11,
            name: "The Truth About the Fake Mizuki",
            location: "Purgatory → Pares bar (Champion District)",
            reward: "2,000 EXP",
            requirements: "After obtaining pass to Shangri-La",
            guide: [
              "1. After getting Shangri-La pass, go to Kage's room in Purgatory FIRST (don't talk to Date).",
              "2. Exit Purgatory, go to green-marked Pares bar in Champion District.",
              "3. During hostess session, select 'Buy her a drink' twice to get all info.",
              "4. Defeat the owner and 2 men outside.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 8,
            chapter: 7,
            name: "The Man who Wanted to Die",
            location: "West of West Park",
            reward: "3,000 EXP",
            requirements: "Haruka must be with you",
            guide: [
              "1. After leaving West Park, find crowd west of the park.",
              "2. Select 'Let's get to the roof!'",
              "3. On roof, choose these exact dialogue options:",
              " - 'Tell us what happened.'",
              " - 'Who's Mizuki?'",
              " - 'How much money did you spend on her?'",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 9,
            chapter: 6,
            name: "Drunk Guy",
            location: "Beside Stardust club",
            reward: "¥30,000, 200 EXP",
            requirements: "Available in Chapter 6",
            guide: [
              "1. Buy 2 bottles of sake and 1 Staminan X.",
              "2. Talk to drunk man beside Stardust.",
              "3. Give him first bottle of sake (get ¥500).",
              "4. Give him second bottle of sake (get ¥500).",
              "5. When he feels sick, give him Staminan X.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 10,
            chapter: 6,
            name: "Suspicious Man",
            location: "Theatre Alley",
            reward: "¥30,000, 200 EXP",
            requirements: "Available in Chapter 6",
            guide: [
              "1. Talk to suspicious man in Theatre Alley.",
              "2. Select 'Depends. Tell me about it' then 'Okay, explain.'",
              "3. Accept ¥1,000 and go to woman near HEAVEN pachinko parlor.",
              "4. Tell her 'You're so damn hot, babe' and select 'Pay her'.",
              "5. Return to man, select 'Don't open it' when prompted.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 11,
            chapter: 2,
            name: "Suspected Molester",
            location: "Theater Square (near Volcano pachinko)",
            reward: "¥20,000, 200 EXP",
            requirements: "After beating Punk-Ass Abe",
            guide: [
              "1. Woman near Volcano pachinko will accuse you.",
              "2. Man will threaten you to pay up.",
              "3. Select 'There's no way I'm gonna pay you.'",
              "4. Defeat the man.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 12,
            chapter: 10,
            name: "Street Fighter",
            location: "Shichifuku Park parking lot",
            reward: "¥70,000, 200 EXP",
            requirements: "Available in Chapter 10",
            guide: [
              "1. Talk to brute in Shichifuku Park parking lot.",
              "2. Select 'Okay, let's do this' to fight him 1-on-1.",
              "3. After winning, select 'I'll help you warm up before you go to work'.",
              "4. Defeat the brute and his cronies.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 13,
            chapter: 4,
            name: "At Good Café",
            location: "Good Café on Nakamichi Street",
            reward: "¥10,000, 200 EXP",
            requirements: "Available in Chapter 4",
            guide: [
              "1. Find thugs blocking Good Café entrance.",
              "2. Talk to them and select 'I don't think so.'",
              "3. Defeat the thugs.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 14,
            chapter: 4,
            name: "The Price for a Palm Reading",
            location: "Senryo Avenue",
            reward: "¥30,000, Lifestone, 500 EXP",
            requirements: "Available in Chapter 4",
            guide: [
              "1. Talk to Suspicious Tout on Senryo Avenue.",
              "2. Select 'Yeah, tell me' and follow to café.",
              "3. For first 2 offers, select 'No thanks'.",
              "4. When assistant gets aggressive, select 'I told you I don't need it'.",
              "5. Defeat assistant outside.",
              "6. Select 'Threaten Him' to get tout's location.",
              "7. Find tout north of café, select 'Don't f*ck with me!'",
              "8. Defeat the tout (he's very weak).",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 15,
            chapter: 6,
            name: "The Bag Search",
            location: "East Taihei Blvd",
            reward: "¥10,000, 500 EXP",
            requirements: "Complete Substory #53 (Golden Lighter)",
            guide: [
              "1. Talk to woman in red on East Taihei Blvd.",
              "2. Go to Theatre Square, talk to 2 girls about the bag.",
              "3. Go to Champion District, find punk in black jacket.",
              "4. He reveals bag is at Public Park 3.",
              "5. Go to Public Park 3, defeat thugs to get bag.",
              "6. Return to woman.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 16,
            chapter: 4,
            name: "Chase the Pickpocket",
            location: "Shichifuku Street (behind Millennium Tower)",
            reward: "Stolen money returned, 500 EXP",
            requirements: "Available in Chapter 4",
            guide: [
              "1. Bump into snickering man behind Millennium Tower.",
              "2. Chase him to Park Blvd, then east.",
              "3. When you catch him, he'll fight using 'Secret Assassination Art'.",
              "4. Defeat him (he's very weak).",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 17,
            chapter: 4,
            name: "Stalker",
            location: "Alley connecting Pink Street",
            reward: "¥30,000, 200 EXP",
            requirements: "Available in Chapter 4",
            guide: [
              "1. Talk to scared woman in alley.",
              "2. Select 'Alright, leave it to me.'",
              "3. Approach stalker, select 'Go Ahead!' when he threatens you.",
              "4. Defeat the stalker and his Yakuza brother.",
              "5. Return to woman.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 18,
            chapter: 4,
            name: "Yakuza Hater",
            location: "West Shichifuku Street (near Children's Park)",
            reward: "200 EXP",
            requirements: "Available in Chapter 4",
            guide: [
              "1. A citizen will approach and ask if you're Yakuza.",
              "2. Any response leads to fight.",
              "3. Defeat the man.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 19,
            chapter: 4,
            name: "Collection Call",
            location: "Park Blvd → Near Purgatory",
            reward: "¥20,000, 500 EXP",
            requirements: "Complete Substory #14 (Price for a Palm Reading)",
            guide: [
              "1. Receive unknown call while walking on Park Blvd.",
              "2. Select 'Is that so?' → 'I don't know about any loan.' → 'There's no way in hell I'll pay'.",
              "3. Continue toward Purgatory until debt collector appears.",
              "4. Select 'I don't have it'.",
              "5. Defeat the debt collector.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 20,
            chapter: 4,
            name: "Eat and Run",
            location: "Akagyu restaurant (Tenkaichi Street)",
            reward: "¥30,000, 500 EXP",
            requirements: "Available in Chapter 4",
            guide: [
              "1. Approach arguing worker and man at Akagyu entrance.",
              "2. Chase the man: right to truck, then to Nakamichi Street right side.",
              "3. He then runs to Public Park 3 in Tenkaichi Alley.",
              "4. Return to Akagyu to complete.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 21,
            chapter: 4,
            name: "The Accusation",
            location: "Theater North",
            reward: "500 EXP",
            requirements: "Complete Substory #11",
            guide: [
              "1. Bump into three thugs near Theatre North.",
              "2. Select 'Why the hell would I pay you?'",
              "3. Defeat the thugs.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 22,
            chapter: 4,
            name: "The Bouncer",
            location: "Showa Street (near telephone booth)",
            reward: "¥20,000, 500 EXP",
            requirements: "Available in Chapter 4",
            guide: [
              "1. Talk to club owner near telephone booth.",
              "2. Select 'Yeah, sure.' and stand in her spot.",
              "3. Wait for thug to approach, defeat him.",
              "4. Wait for thug to return with ally, defeat them.",
              "5. Wait for them to return with brute, defeat all three.",
              "6. Talk to club owner when she returns.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 23,
            chapter: 4,
            name: "Art and Talent",
            location: "Park Blvd (left from Purgatory)",
            reward: "500 EXP (and 4 paintings)",
            requirements: "Available in Chapter 4",
            guide: [
              "1. Talk to homeless painter with displayed paintings.",
              "2. Select 'Yes' to view paintings.",
              "3. Buy all 4 paintings (costs ¥105,000 total).",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 24,
            chapter: 5,
            name: "Art and Talent 2",
            location: "West Park (top right)",
            reward: "Book by a Struggling Water, 500 EXP",
            requirements: "Complete Substory #23",
            guide: [
              "1. Find man lying down at top right of West Park.",
              "2. Give him the 'Painting of Lady with Onion'.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 25,
            chapter: 5,
            name: "Art and Talent 3",
            location: "Park Blvd (painter's original spot)",
            reward: "Painting of a Cat on a Carrot, 1,000 EXP",
            requirements: "Complete Substory #24",
            guide: [
              "1. Return to painter's original spot on Park Blvd.",
              "2. Give him the 'Book by a Struggling Water'.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 26,
            chapter: 5,
            name: "Art and Talent 4",
            location: "Café Alps (Nakamichi Street)",
            reward: "¥100,000, 100 EXP",
            requirements: "Complete Substory #25",
            guide: [
              "1. Enter Café Alps on Nakamichi Street.",
              "2. Select 'Yes' when asked about hanging a painting.",
              "3. Select 'Painting of a Cat on a Carrot'.",
              "4. During bargaining: Select 'No' → 'No' → 'Yes'.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 27,
            chapter: 5,
            name: "Art and Talent 5",
            location: "Park Blvd (painter's spot)",
            reward: "500 EXP",
            requirements: "Complete Substory #26",
            guide: [
              "1. Return to painter's spot to find art dealer.",
              "2. Select 'Yes' → 'Yes' when asked about paintings.",
              "3. Select any painting and sell it for ¥130,000.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 28,
            chapter: 6,
            name: "The Graffiti Writer",
            location: "North Senryo Avenue (near Shangri-La)",
            reward: "¥50,000, 500 EXP",
            requirements: "Available in Chapter 6",
            guide: [
              "1. Talk to old man in suit on North Senryo Avenue.",
              "2. Select 'Yes' to guard his restaurant.",
              "3. Wait for youngster to appear, then chase him.",
              "4. Defeat youngster and his friends near Shangri-La.",
              "5. Return to old man.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 29,
            chapter: 10,
            name: "Chase the Pickpocket 2",
            location: "Shichifuku Park → Hotel District",
            reward: "Money returned, Pimp Bracelet, 200 EXP",
            requirements: "Complete Substories #16 and #38",
            guide: [
              "1. Bump into man in all blue with blue cap in Shichifuku Park.",
              "2. Find him behind truck at vending machine, defeat him.",
              "3. Find him again at Hotel District intersection, defeat him.",
              "4. Select 'I don't believe you' to get additional reward.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 30,
            chapter: 6,
            name: "Ex-Baseball Player",
            location: "Batting Cage",
            reward: "¥150,000 total, 1,000 EXP",
            requirements: "Available in Chapter 6",
            guide: [
              "1. Talk to man inside batting cage.",
              "2. Challenge him 3 times to hit 10+ home runs.",
              "3. Win all 3 challenges (pitches get faster each time).",
              "4. Aim for the high home run target on glass windows.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 31,
            chapter: 10,
            name: "Gang Busters",
            location: "Hotel District (right of Batting Cage)",
            reward: "200 EXP",
            requirements: "Available in Chapter 10",
            guide: [
              "1. Approach Gang Buster member near batting cage.",
              "2. Defeat the 3 members (prioritize taser user first).",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 32,
            chapter: 10,
            name: "Gang Busters 2",
            location: "East Shichifuku Street → Shangri-La",
            reward: "600 EXP total",
            requirements: "Complete Substory #31",
            guide: [
              "1. Find and defeat first group near truck (same as #31).",
              "2. Find and defeat second group on left side of East Shichifuku Street.",
              "3. Find and defeat third group beside Shangri-La (2 tasers, 1 bat).",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 33,
            chapter: 10,
            name: "Gang Busters 3",
            location: "Pink Alley → East Showa Street → Pink Street entrance",
            reward: "600 EXP total",
            requirements: "Complete Substory #32",
            guide: [
              "1. Find and defeat group in Pink Alley.",
              "2. Find and defeat group on East Showa Street.",
              "3. Find and defeat group at Pink Street entrance.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 34,
            chapter: 10,
            name: "Gang Busters 4",
            location: "Nakamichi Street Poppo → Nakamichi Alley",
            reward: "400 EXP total",
            requirements: "Complete Substory #33",
            guide: [
              "1. Find and defeat group near Nakamichi Street Poppo.",
              "2. Find and defeat group in Nakamichi Alley (left side).",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 35,
            chapter: 10,
            name: "Gang Busters 5",
            location: "Theatre Square → Theatre Northwest",
            reward: "200 EXP",
            requirements: "Complete Substory #34",
            guide: [
              "1. Talk to Aoki in Theatre Square.",
              "2. Find and defeat group in Theatre Northwest.",
              "3. Threaten defeated member (won't reveal boss).",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 36,
            chapter: 10,
            name: "The Leader of Gang Busters",
            location: "West Tahei Blvd (left of Akagyu)",
            reward: "1,000 EXP",
            requirements: "Complete Substory #35",
            guide: [
              "1. Find and defeat the Gang Buster Leader (brute with 2 health bars).",
              "2. He reveals mastermind is at Hotel District.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 37,
            chapter: 10,
            name: "Asano the Mastermind",
            location: "Hotel District (near batting cage)",
            reward: "¥150,000, 1,000 EXP",
            requirements: "Complete Substory #36",
            guide: [
              "1. Confront Asano near batting cage.",
              "2. Defeat him (he dodges frequently).",
              "3. He reveals his motives and apologizes.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 38,
            chapter: 10,
            name: "The Truth About Her",
            location: "Alley near Kotobuki Drugs",
            reward: "¥100,000, 1,000 EXP",
            requirements: "Available in Chapter 10",
            guide: [
              "1. Talk to 'Ruby' in alley near Kotobuki Drugs.",
              "2. Select 'Okay' to go to Hotel District.",
              "3. At hotel, select 'No' → 'No, I can't'.",
              "4. Defeat Ruby's 'brother'.",
              "5. Defeat Ruby (2 health bars).",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 39,
            chapter: 4,
            name: "The Handbag Snatcher",
            location: "Nakamichi Street → Public Park 3",
            reward: "¥10,000, 500 EXP",
            requirements: "Available in Chapter 4",
            guide: [
              "1. Witness handbag theft on Nakamichi Street.",
              "2. Agree to help woman.",
              "3. Go to Public Park 3, talk to man with wooden katana.",
              "4. Defeat him, return bag to woman.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 40,
            chapter: 7,
            name: "B-King Disaster",
            location: "Theatre Square",
            reward: "Coin locker key, ¥100,000, 500 EXP",
            requirements: "Available in Chapter 7",
            guide: [
              "1. Find B-King arguing with Yakuza in Theatre Square.",
              "2. Select 'Yes' to help him.",
              "3. Defeat the Yakuza members.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 41,
            chapter: 6,
            name: "Horse Racing Freak",
            location: "Front of Millennium Tower",
            reward: "¥200,000, 500 EXP",
            requirements: "Available in Chapter 6",
            guide: [
              "1. Talk to man in purple jacket in front of Millennium Tower.",
              "2. Select 'I'd bet on 3-7'.",
              "3. Wait some time (explore or progress story).",
              "4. Return to same spot, collect reward.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 42,
            chapter: 10,
            name: "Dying Man's Request",
            location: "Senryo Avenue (bottom small street)",
            reward: "Part 1 of multi-part substory",
            requirements: "Available in Chapter 10",
            guide: [
              "1. Find collapsed man in small street at bottom of Senryo Avenue.",
              "2. Select 'What did they look like?'",
              "3. He describes 2 men in Red Jumpers.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 43,
            chapter: 10,
            name: "Dying Man's Wish",
            location: "Theatre Square",
            reward: "Medication bag",
            requirements: "Complete Substory #42",
            guide: [
              "1. DO NOT USE TAXI (man will die if you do).",
              "2. Find Red Jumpers in Theatre Square.",
              "3. Select 'You jacked someone's bag, didn't you?'",
              "4. Defeat them to get medication bag.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 44,
            chapter: 10,
            name: "Dying Man's Hope",
            location: "Senryo Avenue (original location)",
            reward: "¥150,000, 500 EXP",
            requirements: "Complete Substory #43",
            guide: [
              "1. DO NOT USE TAXI.",
              "2. Return to original location with medication bag.",
              "3. Select 'Yes' to give him the bag.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 45,
            chapter: 6,
            name: "Yakuza Candidate",
            location: "Senryo Avenue → Shellac bar",
            reward: "¥20,000, 500 EXP",
            requirements: "Available in Chapter 6",
            guide: [
              "1. Talk to Kano on Senryo Avenue.",
              "2. Select 'I guess that's okay' to accept him as 'brother'.",
              "3. Find him again on East Senryo Avenue, select 'Tell me'.",
              "4. Go to Shellac bar in Champion District.",
              "5. Talk to bartender, select 'Did something happen?'",
              "6. When henchman appears, select 'Fuck you!'",
              "7. Defeat Shimano henchmen outside.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 46,
            chapter: 6,
            name: "Yakuza Candidate 2",
            location: "Shichifuku Street → Marked location",
            reward: "French scarf, ¥50,000, 500 EXP",
            requirements: "Complete Substory #45",
            guide: [
              "1. Find Kano on Shichifuku Street (south of batting cage).",
              "2. He'll talk about girls and leave.",
              "3. Find him again further east, select 'Okay'.",
              "4. At marked location, select 'Why don't you let it slide this time?'",
              "5. Defeat yakuza and his men.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 47,
            chapter: 10,
            name: "Yakuza Candidate Part 3",
            location: "North Pink Street → Various chase locations",
            reward: "¥100,000, coin locker key, 1,000 EXP",
            requirements: "Complete Substories #45 and #46",
            guide: [
              "1. Find Kano on North Pink Street.",
              "2. Select 'Okay', then 'Yeah I see her'.",
              "3. Follow woman: right → left side of screen → Shichifuku Park crowd → North Senryo Avenue.",
              "4. When Yakuza appear, select 'How about I piss on you instead?'",
              "5. Defeat the 3 Yakuza members.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 48,
            chapter: 10,
            name: "Yakuza Candidate Part 4",
            location: "Shangri-La → Nakamichi Alley",
            reward: "¥200,000, Musashi's Dagger, 2,000 EXP",
            requirements: "Complete first 3 Yakuza Candidate substories",
            guide: [
              "1. Find Kano in front of Shangri-La.",
              "2. Find him again in Nakamichi Alley (north).",
              "3. Select 'What's Up?' → 'Take me to him'.",
              "4. Defeat Tojo Clan gangsters (captain has second health bar).",
              "5. Select 'It's not worth it' when Kano asks to be killed.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 49,
            chapter: 10,
            name: "Runaway Yakuza",
            location: "Nakamichi Alley (south near Poppo)",
            reward: "500 EXP, Charming Picture",
            requirements: "Available in Chapter 10",
            guide: [
              "1. Wait in Nakamichi Alley (south near Poppo) for running man.",
              "2. Bump into him, defeat him.",
              "3. Select 'Did we meet somewhere?'",
              "4. Go to coin lockers, defeat Yakuza who interrupt.",
              "5. Open locker to get Charming Picture.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 50,
            chapter: 4,
            name: "UFO Catcher",
            location: "Club SEGA (Nakamichi Street)",
            reward: "Various rewards, 200+500+1,500 EXP",
            requirements: "Complete Substory #16 (Chase the Pickpocket)",
            guide: [
              "PART 1:",
              "1. Talk to old man at UFO Catcher machines.",
              "2. Play game (¥500) to win Golden Dora-yan Dragon.",
              "3. Give it to him for ¥10,000, 200 EXP.",
              "",
              "PART 2:",
              "4. Return to arcade, agree to get all 5 Piyo stuffed animals.",
              "5. Win all 5 (ensure 5 inventory slots free).",
              "6. Give them to him for ¥30,000, 500 EXP.",
              "",
              "PART 3:",
              "7. Return to arcade, find thug requesting black Dora-yan.",
              "8. Win it, give to him for counterfeit ¥200,000.",
              "9. Find thug outside, defeat him to get coin locker key.",
              "10. Open locker for Musashi's Dagger, get 1,500 EXP.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 51,
            chapter: 10,
            name: "Suspicious Cop",
            location: "Alley between Senryo Ave and Pink Street",
            reward: "¥70,000, 500 EXP",
            requirements: "Available in Chapter 10",
            guide: [
              "1. Get stopped by 'cop' in alley.",
              "2. Select 'Why do I have to show an ID to you?'",
              "3. When he hints at bribe, select 'No'.",
              "4. Chase him to bottom of Senryo Avenue (right side).",
              "5. Defeat him.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 52,
            chapter: 4,
            name: "The Little Match Girl",
            location: "East Showa Street (near Senryo Ave)",
            reward: "Macho Cologne, 300 EXP",
            requirements: "Complete Substory #55 (My Contact Lenses)",
            guide: [
              "1. Find girl selling matches on East Showa Street.",
              "2. Select 'I'll buy some' (¥100).",
              "3. Leave and return to area (enter/exit Pink Street if she doesn't appear).",
              "4. Talk to her again to get Macho Cologne.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 53,
            chapter: 4,
            name: "Golden Lighter",
            location: "Champion District (bottom right)",
            reward: "Coin locker key, 500 EXP",
            requirements: "Available in Chapter 4",
            guide: [
              "1. Talk to old man in bottom right of Champion District.",
              "2. Select 'I may have dropped it'.",
              "3. When asked which lighter, select 'It's the plastic lighter'.",
              "4. Get coin locker key (contains Lucky Bracelet).",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 54,
            chapter: 6,
            name: "Found Cell Phone",
            location: "Public Park 3 → Various locations",
            reward: "Bulletproof Vest, 500 EXP",
            requirements: "Available in Chapter 6",
            guide: [
              "1. Find thugs and dead man at Public Park 3.",
              "2. Examine scene, answer phone: select 'Yes'.",
              "3. Exit to Nakamichi Street, get another call.",
              "4. Select 'I just picked up the phone' → 'Yeah, I understand'.",
              "5. Go to Baachus bar, talk to woman: 'I wasn't told any password'.",
              "6. Get coin locker key, open #20 for Long Dagger.",
              "7. Walk away from lockers, get call: 'What's the assignment?'",
              "8. Go to Theatre Square, get call: 'I can see him' → 'Yeah'.",
              "9. Go to batting cage, defeat the hitman.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 55,
            chapter: 4,
            name: "My Contact Lenses",
            location: "Right of Ebisu Pawn",
            reward: "¥20,000, 500 EXP",
            requirements: "Available in Chapter 4",
            guide: [
              "1. Man will stop you right of Ebisu Pawn.",
              "2. He claims you broke his contacts.",
              "3. Select 'I won't pay.'",
              "4. Defeat him.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 56,
            chapter: 4,
            name: "No.1 Host",
            location: "Pink Street entrance",
            reward: "300 EXP",
            requirements: "Wear Macho Cologne or other attractive gear",
            guide: [
              "1. Wear Macho Cologne (from Substory #52) or other attractive items.",
              "2. Enter Pink Street front entrance.",
              "3. Host will stop you, select 'No' when asked to remove clothes.",
              "4. Defeat him.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 57,
            chapter: 6,
            name: "The Scout",
            location: "Senryo Avenue",
            reward: "¥50,000, 200 EXP",
            requirements: "Complete Substory #15 (The Bag Search)",
            guide: [
              "1. Scout Sasaki will approach you on Senryo Avenue.",
              "2. Select 'Okay, tell me more' → 'I'll pay' (¥10,000).",
              "3. Leave and return to area, get call from Sasaki.",
              "4. Leave and return again, meet Shiraishi.",
              "5. Get reward and explanation.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 58,
            chapter: 4,
            name: "Smile Burger Catastrophe",
            location: "Smile Burger (Nakamichi Street)",
            reward: "¥50,000, 300 EXP",
            requirements: "May need to reload area",
            guide: [
              "1. Find Yakuza arguing with employee at Smile Burger.",
              "2. Select 'Stop bothering them!'",
              "3. Defeat the Yakuza.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 59,
            chapter: 6,
            name: "Gelato Shop Cataclysm",
            location: "Gelato Shop (across from Akagyu)",
            reward: "¥50,000, 300 EXP",
            requirements: "Complete Substory #58",
            guide: [
              "1. Find same Yakuza from Smile Burger at Gelato Shop.",
              "2. Select 'Stop bothering them!'",
              "3. Defeat the Yakuza.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 60,
            chapter: 10,
            name: "Substitute Debt Collector",
            location: "Shellac bar → Hidden Casino",
            reward: "¥50,000, 1,000 EXP",
            requirements: "Available in Chapter 10",
            guide: [
              "1. Talk to Shellac bar owner about unpaid tab.",
              "2. Select 'Do you want me to collect from him?'",
              "3. Go to hidden casino (Kyushu No. 1 Star).",
              "4. Find yakuza at roulette table, give him tab.",
              "5. Get Lucky Beads (from Deborah coin locker #44 or casino prizes).",
              "6. Give beads to yakuza.",
              "7. Return to Shellac bar to confirm payment.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 61,
            chapter: 4,
            name: "Unworthy Son",
            location: "Park Alley → Children's Park → Champion District",
            reward: "Family Photo, coin locker, 500 EXP",
            requirements: "Complete Substory #63 (The Tough Guy)",
            guide: [
              "1. Find middle-aged man in Park Alley (past tough guy spot).",
              "2. Select 'Father?' when he mistakes you for Kenji.",
              "3. Go to Children's Park, talk to homeless man: 'You could say that'.",
              "4. Go to Champion District bottom right, find beaten Gen-San.",
              "5. Go to Park Alley road, find street punks.",
              "6. Select 'You the ones that beat up Gen-San?'",
              "7. Defeat them, get Gen-San's Wallet.",
              "8. Return to Gen-San's location, talk to homeless man.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 62,
            chapter: 6,
            name: "Suspicious Gun",
            location: "Theatre Square (small street)",
            reward: "Coin locker key, 200 EXP",
            reward_item: "Pistol (in locker #50)",
            requirements: "Available in Chapter 6",
            guide: [
              "1. Talk to suspicious man in small street south of Theatre Square.",
              "2. Select 'I'll take it' (¥95,000).",
              "3. Get coin locker key.",
              "4. Open locker #50 for pistol.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 63,
            chapter: 4,
            name: "The Tough Guy",
            location: "Park Alley entrance",
            reward: "¥10,000, 500 EXP",
            requirements: "Available in Chapter 4",
            guide: [
              "1. Brute will stop you at Park Alley entrance.",
              "2. Select 'Yes' → 'F*ck you' when asked to pay toll.",
              "3. Defeat him.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 64,
            chapter: 10,
            name: "Kyoka and Takashi",
            location: "Park Blvd → Batting Cage",
            reward: "¥100,000, 500 EXP",
            requirements: "Available in Chapter 10",
            guide: [
              "1. Talk to Ichi on Park Blvd (near Park Alley intersection).",
              "2. Select 'Who the hell are you?' → 'Okay'.",
              "3. Get Mashiko Teacup, go to batting cage.",
              "4. Give teacup to Kyoka, get Kyoka's Ring.",
              "5. Return to Ichi, give him the ring.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 65,
            chapter: 10,
            name: "Wrong Person",
            location: "Alley across Public Park 3",
            reward: "Coin locker key, 500 EXP",
            reward_item: "Tortoiseshell Plate (in locker)",
            requirements: "Available in Chapter 10",
            guide: [
              "1. Enter alley across Public Park 3.",
              "2. Man with gun will attack immediately.",
              "3. Defeat him (dodge his gunshots).",
              "4. He apologizes for mistaken identity.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 66,
            chapter: 6,
            name: "Drain the Lizard",
            location: "Children's Park washroom",
            reward: "¥80,000, 500 EXP, business card",
            requirements: "Available in Chapter 6",
            guide: [
              "1. Hear man freaking out in washroom stall at Children's Park.",
              "2. Get tissue pack from salesperson (white gown, holding sign).",
              "3. Interact with stall, select 'Yes' to give tissues.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 67,
            chapter: 4,
            name: "Revenge of the Accusation",
            location: "Theater North",
            reward: "¥10,000, 500 EXP",
            requirements: "Complete Substory #68",
            guide: [
              "1. Reload area, find group of 6 thugs.",
              "2. Bump into them, select 'Go f*ck yourself.'",
              "3. Defeat them (3 with golf clubs + 2 big thugs).",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 68,
            chapter: 4,
            name: "Return of the Accusation",
            location: "Theater North",
            reward: "500 EXP",
            requirements: "Complete Substory #21",
            guide: [
              "1. Reload area, find same 3 thugs.",
              "2. Bump into them, select 'There's no way I'm gonna pay.'",
              "3. Defeat them (armed with bats and golf club).",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 69,
            chapter: 4,
            name: "The Accusation - Afterwards",
            location: "Theater North",
            reward: "1,000 EXP",
            requirements: "Complete Substory #67",
            guide: [
              "1. Reload area one last time, find the 3 thugs.",
              "2. Bump into them for final friendly conversation.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 70,
            chapter: 4,
            name: "Search for the Manuscript",
            location: "Champion District entrance",
            reward: "500 EXP",
            requirements: "Available in Chapter 4",
            guide: [
              "1. Talk to woman with green arrow at Champion District entrance.",
              "2. Find manuscript in bottom left corner of Champion District.",
              "3. Return it to her (Momoko Kawai).",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 71,
            chapter: 6,
            name: "Save Momoko Kawai",
            location: "Senryo Avenue (near Shangri-La)",
            reward: "¥40,000, 500 EXP",
            requirements: "Complete Substory #70",
            guide: [
              "1. Find Momoko Kawai being harassed by Tojo gangsters.",
              "2. Select 'Help her'.",
              "3. Defeat the gangsters.",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 72,
            chapter: 11,
            name: "The Last Assassin",
            location: "Theatre Square (across save phone)",
            reward: "¥10,000,000, 893 EXP",
            requirements:
              "Complete all 71 other substories, max Soul/Tech stats, complete Komaki training, watch Boxing Gamble bonus scene",
            guide: [
              "PREREQUISITES:",
              "- Complete all 71 other substories",
              "- Max Soul and Tech stats (Body recommended)",
              "- Complete all Komaki training",
              "- Watch bonus scene at Bantam with Haruka",
              "- Recommended: Get 4 Cursed Sengetsu Swords from Purgatory coliseum",
              "- Recommended: Stock up on Staminan Royales",
              "",
              "FIGHT:",
              "1. Talk to man in all black across save phone in Theatre Square.",
              "2. Use Cursed Sengetsu Swords to stun-lock Jo Amon.",
              "3. He has 3 phases with multiple health bars.",
              "4. If sword breaks, switch to another.",
              "5. Defeat him for ultimate reward.",
            ].join("\n"),
            videoId: "",
          },
        ],
      },
    },
  },
  "Yakuza Kiwami 2": {
    logo: "./images/logos/Y2Kiwami.webp",
    characters: {
      "Kazuma Kiryu": {
        image: "👨‍💼",
        substories: [
          {
            index: 1,
            chapter: 5,
            name: "Be My Baby",
            location: "East of Kotobuki Drugs",
            reward: "Unlocks Gondawara as employee",
            requirements: "Available in Chapter 5",
            guide: [
              "1. Speak to tough guys east of Kotobuki Drugs",
              "2. Beat them up",
              "3. Patriarch appears and takes you to club",
              "4. Defeat boss (prioritize him first)",
              "5. After Clan Creator access: find Gondawara in Theater Square east side stairs"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 2,
            chapter: 5,
            name: "The Legendary Dragon",
            location: "North of Earth Angel → Jewel club",
            reward: "Completes substory",
            requirements: "Available in Chapter 5",
            guide: [
              "1. Find group north of Earth Angel",
              "2. They mention heading to Jewel club",
              "3. Go to Jewel (west of Kanrai)",
              "4. Beat up the duo"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 3,
            chapter: 8,
            name: "Embracing my True Self",
            location: "Stardust → Earth Angel → Club",
            reward: "Yuya joins Majima Construction",
            requirements: "Available in Chapter 8",
            guide: [
              "1. Speak to Yuya in front of Stardust",
              "2. Meet biker gang in club",
              "3. Go to Earth Angel, talk to Ako (former Okano)",
              "4. Return to club, beat up bikers",
              "5. Ako brings Yuya's old coat, fight round 2",
              "6. Find Yuya at Construction Site near Purgatory entrance"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 4,
            chapter: 13,
            name: "Rooftop Revenge",
            location: "Near Kanrai (rooftop)",
            reward: "Spy Gloves",
            requirements: "Chapter 13, nighttime, Haruka with you",
            guide: [
              "1. Notice arguing couple on roof near Kanrai",
              "2. Businessman asks for help",
              "3. Go to roof, talk down the guy",
              "4. Choices don't affect outcome"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 5,
            chapter: 5,
            name: "Supporting Sunflower",
            location: "South end of Nakamichi St.",
            reward: "Progresses Sunflower orphanage storyline",
            requirements: "Available in Chapter 5",
            guide: [
              "1. Talk to Suenaga at south Nakamichi St.",
              "2. Donate money (any amount, 100,000 recommended for trophy)",
              "3. Speak to Suenaga about Hayato-kun",
              "4. Haruka suggests puppy from last year",
              "5. Call Purgatory, get dog from Theater Square",
              "6. Return to Suenaga with puppy"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 6,
            chapter: 5,
            name: "Renovating Sunflower",
            location: "South Nakamichi St. → Champion District",
            reward: "Children's Drawing",
            requirements: "Complete Substory #5",
            guide: [
              "1. Return to Suenaga",
              "2. Donate 250,000 yen for roof repair",
              "3. Contractor demands more money",
              "4. Go to northeast Champion District",
              "5. Beat up contractor's crony, get business card",
              "6. Return to Suenaga"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 7,
            chapter: 5,
            name: "Sunflower in Bloom",
            location: "South Nakamichi St. → Champion District",
            reward: "Handmade Scarf, Sunflower Amulet, Picture of Haruka 1",
            requirements: "Complete Substory #6",
            guide: [
              "1. Return to Suenaga",
              "2. Call shady contractor, meet in northeast Champion District",
              "3. Beat up yakuza harassing contractor",
              "4. Get text from Haruka",
              "5. Return to Suenaga",
              "6. Suenaga available at Four Shine in Sotenbori for Cabaret Club"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 8,
            chapter: 5,
            name: "Mr. Try and Hit Me",
            location: "Shichifuku Parking Lot (east of Kanrai)",
            reward: "30,000 yen, unlocks as employee",
            requirements: "Available in Chapter 5",
            guide: [
              "1. Find purple jacket guy in parking lot",
              "2. Pay 5000 yen to try hitting him",
              "3. Corner him near cars, use light attacks",
              "4. After Clan Creator: find him in east construction site"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 9,
            chapter: 5,
            name: "An Eccentric Errand",
            location: "Northwest Smile Burger → Public Park 3",
            reward: "150,000 yen, unlocks as employee",
            requirements: "Available in Chapter 5",
            guide: [
              "1. Talk to scary dude near Smile Burger",
              "2. Get text to go to Public Park 3 (Tenkaichi Alley)",
              "3. Check bench for Locker Key C1",
              "4. Get Green Box from lockers",
              "5. Drop behind Club Shine in Pink Alley",
              "6. Find red jacket guy in Theater Square underground",
              "7. Fight both guys"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 10,
            chapter: 8,
            name: "Smart Futures",
            location: "Showa St. Poppo → Pink Street",
            reward: "300,000 yen profit",
            requirements: "Available in Chapter 8",
            guide: [
              "1. Intervene in argument at Showa St. Poppo",
              "2. Beat up yakuza",
              "3. Invest 500,000 yen in Hiro-yan's company",
              "4. Return when marker reappears",
              "5. Refuse first offer, accept 800,000 yen total",
              "6. Find out Hiro-yan is broke on Pink Street",
              "7. Talk to original yakuza"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 11,
            chapter: 8,
            name: "Kamurocho Forestry Association",
            location: "Taihei Akaushimaru → Theater Square → Park Blvd",
            reward: "100,000 yen",
            requirements: "Available in Chapter 8",
            guide: [
              "1. Sign petition at Taihei Akaushimaru",
              "2. Get debt collector text and call from Yuya",
              "3. Talk to Morita at Theater Square",
              "4. Go to Gravure Studio building (3rd floor)",
              "5. Fight scammer, destroy all 4 PCs",
              "6. Use PCs as weapons or throw them"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 12,
            chapter: 13,
            name: "The Cabaret Killer",
            location: "Pink St. → Nakamichi Alley → Various locations",
            reward: "Heavenly Beasts Bracelet, Yuka joins club",
            requirements: "Chapter 13, Haruka with you",
            guide: [
              "1. Hear about Cabaret Killer near Shine",
              "2. Intervene in attack north of Ebisu Pawn",
              "3. Find hostess's friend northeast",
              "4. Go to Stardust (dead end)",
              "5. Get call from Yuka",
              "6. Investigate alley behind Kotobuki Drugs",
              "7. Haruka solves case",
              "8. Yuka available at Four Shine"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 13,
            chapter: 6,
            name: "Rags to Riches",
            location: "West of Wette Kitchen → Various locations",
            reward: "100,000 yen (sell Swiss Watch), Michael joins construction",
            requirements: "Available in Chapter 6",
            guide: [
              "1. Listen to Michael Naoya west of Wette Kitchen",
              "2. Get Michael's CD",
              "3. Give CD to old guy at Stardust (get Slick Fountain Pen)",
              "4. Trade pen for Chic Boots at Ebisu Pawn",
              "5. Give boots to homeless guy in Children's Park (get Pink Scarf)",
              "6. Return scarf to woman at Earth Angel (get Swiss Watch)",
              "7. Sell watch for 100,000 yen",
              "8. Find Michael north of coin lockers"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 14,
            chapter: 7,
            name: "A Whirlwind Dirt Tour",
            location: "Kanrai → Various locations",
            reward: "300,000 yen, Photo of Il Yu-Jin (if no fans spotted), Yu-Jin joins construction",
            requirements: "Available in Chapter 7",
            guide: [
              "1. Bump into Yu-Jin at Kanrai",
              "2. Escort him while avoiding fans (red arrows)",
              "3. First: Fusion - go west/south around Bantam, east around Beam",
              "4. Second: Earth Angel - through Champion District alleys",
              "5. Third: Kyushu No.1 Star - west from Champion District, north then west",
              "6. If caught: escape to Public Park 3",
              "7. Find Yu-Jin under stairs south of Ikinari Steak"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 15,
            chapter: 6,
            name: "Rising from the Shadows",
            location: "Champion District south → Fusion → Senryo Ave",
            reward: "Exorcism Stone",
            requirements: "Available in Chapter 6",
            guide: [
              "1. Get Dirty Video from haggard man at Champion District south",
              "2. Watch video at Fusion",
              "3. Meet medium on Senryo Ave southeast",
              "4. Pay 100,000 yen for exorcism"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 16,
            chapter: 6,
            name: "Secret Stash",
            location: "Hotel District → Lockers → Cafe Alps",
            reward: "200,000 yen",
            requirements: "Available in Chapter 6",
            guide: [
              "1. Buy locker key for 20,000 yen in Hotel District alcove",
              "2. Get Suspicious Video from lockers (B1)",
              "3. Watch at Fusion, recognize Cafe Alps location",
              "4. Confront manager at Cafe Alps",
              "5. Chase employee to Ebisu Pawn",
              "6. Fight jerks, recover tapes"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 17,
            chapter: 6,
            name: "Beam's Backroom Cache",
            location: "Theater Square → Club Debolah → Beam",
            reward: "Access to Beam arms shop",
            requirements: "Available after speaking to Tamura",
            guide: [
              "1. Talk to Tamura in Theater Square",
              "2. Buy password from Nitta in Club Debolah (50,000 yen)",
              "3. Go to Beam counter",
              "4. Ask for 'Take-chan's High School Heaven'",
              "5. Answer '2600' (Cafe Alps drink total)"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 18,
            chapter: 6,
            name: "Welcome to the Modern Age",
            location: "Nakamichi Smile Burger → Lullaby Mahjong building",
            reward: "Completes substory",
            requirements: "Available in Chapter 6",
            guide: [
              "1. Help Date at Smile Burger with internet scam",
              "2. Get scam calls and emails",
              "3. Go to Lullaby Mahjong building (3rd floor)",
              "4. Confront Tanabe and fight"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 19,
            chapter: 5,
            name: "We're All In This Together",
            location: "Suppon St. → Park Boulevard",
            reward: "Japanese Diver's Watch",
            requirements: "Available in Chapter 5",
            guide: [
              "1. Meet job seekers at Suppon St. southwest",
              "2. Pick up Job Seeker's Amulet",
              "3. Find trio at Park Boulevard near Gravure Studio",
              "4. Participate in mock interview with correct responses:",
              " • 'It's nice to meet you!'",
              " • 'Being a team player is important.'",
              " • 'He really helped people get along.'",
              " • 'It shows she's a diligent worker.'",
              " • 'It's good to experience other cultures.'",
              " • 'That's a future-proof industry.'",
              " • 'That's a great workplace attitude.'",
              " • 'I used to be in real estate.'",
              " • 'I'm thinking of starting an orphanage.'",
              " • 'Thank you for having us!'"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 20,
            chapter: 1,
            name: "Living the American Dream",
            location: "Batting Center",
            reward: "Signed Ball, Dandy becomes employee",
            requirements: "Available in Chapter 1",
            guide: [
              "1. Complete all three Beginner Challenge courses",
              "2. Meet Bob 'Dandy' Johnson outside",
              "3. Get 5 home runs in 10 pitches against specific pattern:",
              " • Pitch 1: 2-seam",
              " • Pitch 2: Fastball",
              " • Pitch 3: Freedom Fastball (swing immediately)",
              " • Pitch 4: Slider",
              " • Pitch 5: American Dream (weird curve, same spot)",
              " • Pitch 6: Shoot",
              " • Pitch 7: Fastball",
              " • Pitch 8: Soaring Eagle (rises full square)",
              " • Pitch 9: Shoot",
              " • Pitch 10: American Dream",
              "4. After Clan Creator: find Dandy on batting center roof"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 21,
            chapter: 1,
            name: "Against All Odds",
            location: "Lullaby Mahjong building",
            reward: "100,000 yen",
            requirements: "Available in Chapter 1",
            guide: [
              "1. Help man being harassed near Lullaby Mahjong",
              "2. Play mahjong starting with 1000 points",
              "3. Recommended: use Peerless Tile (found in office downstairs)",
              "4. Use tile to get Thirteen Orphans, choose 'Tsumo'",
              "5. Alternative: set game to 'Full' size for more hands"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 22,
            chapter: 5,
            name: "To the Dragon Palace",
            location: "Tenkaichi St. & Tenkaichi Alley",
            reward: "Access to Kamurocho Casino",
            requirements: "Available in Chapter 5",
            guide: [
              "1. Stop thugs harassing homeless man at Tenkaichi intersection",
              "2. Homeless man takes you to Dragon Palace casino",
              "3. Access to koi-koi, oicho-kabu, blackjack, poker",
              "4. Arms dealer with rotating stock available"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 23,
            chapter: 7,
            name: "Granny in Peril",
            location: "Outside Serena → Various locations",
            reward: "Scroll of Spearmanship",
            requirements: "Automatic after Bantam fight",
            guide: [
              "1. Meet Granny White outside Serena",
              "2. Give directions, exchange emails",
              "3. First email: Shichifuku Parking Lot - fight triads",
              "4. Second email: Theater Square - fight Yen Long",
              "5. Learn she taught Lau Ka Long"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 24,
            chapter: 1,
            name: "A Pervy Peddler",
            location: "Tenkaichi Alley (behind butatuki shop)",
            reward: "Access to Kamiyama's shop, weapon repair",
            requirements: "Available in Chapter 1",
            guide: [
              "1. Save Kamiyama from thugs behind butatuki shop",
              "2. Access to Kali Sticks, Tonfas, Beam videos",
              "3. Sell weapons to expand his stock",
              "4. Pay to repair used weapons"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 25,
            chapter: 5,
            name: "An Eye for Work",
            location: "Dragon Palace (4th floor)",
            reward: "Flattening Throw Primer",
            requirements: "Complete Substory #22",
            guide: [
              "1. Meet Cyclops Oba on Dragon Palace 4th floor",
              "2. Sparring match - no items, weapons, or Heat Actions",
              "3. Gear allowed, straight fisticuffs"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 26,
            chapter: 5,
            name: "An Eye for Meat",
            location: "Dragon Palace",
            reward: "Tiger Crash Primer, Dynamic Throw Primer",
            requirements: "Complete Substory #25",
            guide: [
              "1. Return to Cyclops Oba",
              "2. Buy Luxury Yakiniku Bento from Poppo",
              "3. Another sparring match"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 27,
            chapter: 5,
            name: "An Eye for Power",
            location: "Dragon Palace",
            reward: "Mighty Primer, Oba joins Coliseum",
            requirements: "Complete Substory #26",
            guide: [
              "1. Return to Cyclops Oba",
              "2. Buy Staminan XX from Kotobuki Drugs",
              "3. Final sparring match (more health and power)"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 28,
            chapter: 5,
            name: "Feel the Heat!",
            location: "Champion District lot",
            reward: "Learn Extreme Heat Mode",
            requirements: "Automatic after leaving Serena with Sayama",
            guide: [
              "1. Automatically approached by Komaki's student",
              "2. Go to Champion District lot",
              "3. Learn Extreme Heat Mode from Komaki",
              "4. Practice on gathered enemies"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 29,
            chapter: 5,
            name: "Komaki Fist Reversal",
            location: "Champion District lot",
            reward: "Learn Komaki Fist Reversal",
            requirements: "Complete Substory #28",
            guide: [
              "1. Return to Komaki",
              "2. Learn Komaki Fist Reversal: stand still, press Heavy Attack as enemy attacks"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 30,
            chapter: 5,
            name: "Komaki Firearm Flip",
            location: "Champion District lot",
            reward: "Learn Komaki Firearm Flip",
            requirements: "Complete Substory #29",
            guide: [
              "1. Return to Komaki",
              "2. Learn Komaki Firearm Flip: be in Fighting Stance, press Heavy Attack",
              "3. Works on pistol and shotgun users"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 31,
            chapter: 5,
            name: "Duel With the Mentor",
            location: "Champion District lot",
            reward: "Peerless Tile",
            requirements: "Complete Substory #30",
            guide: [
              "1. Return to Komaki",
              "2. Pure fist fight - no weapons or items",
              "3. Watch for Komaki's Heat mode (super armor, knockback)",
              "4. Defeat him"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 32,
            chapter: 3,
            name: "Befriending the Barker",
            location: "Kamurocho: south end of Senryo Ave.",
            reward: "Ally gained",
            requirements: "Available in Chapter 3",
            guide: [
              "1. Find thug harassing guy at south Senryo Ave.",
              "2. Beat up thug"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 33,
            chapter: 3,
            name: "Mama Under Attack",
            location: "Kamurocho: Earth Angel",
            reward: "Tauriner, Mama-san becomes ally and employee",
            requirements: "Available in Chapter 3",
            guide: [
              "1. Intervene at Earth Angel",
              "2. Beat up jerk harassing Mama-san",
              "3. After Clan Creator: return to bar for employment"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 34,
            chapter: 3,
            name: "A Soupy Sidekick",
            location: "Kamurocho: Kyushu No.1 Star",
            reward: "Ally gained",
            requirements: "Available in Chapter 3",
            guide: [
              "1. Eat anything at Kyushu No.1 Star",
              "2. Eat entire menu",
              "3. Chef becomes ally"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 35,
            chapter: 5,
            name: "Exhausted on the Job",
            location: "Construction Site → Park Boulevard",
            reward: "Ally gained, becomes employee",
            requirements: "After unlocking Construction Site",
            guide: [
              "1. Talk to tired worker at Construction Site",
              "2. Give any energy drink (Toughness, Tauriner, etc.)",
              "3. After Clan Creator: find him on Park Boulevard outside"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 36,
            chapter: 3,
            name: "Knee Deep in Trouble",
            location: "Kamurocho: Children's Park bathroom",
            reward: "Ally gained, Baba joins construction",
            requirements: "Available in Chapter 3",
            guide: [
              "1. Check stall door in Children's Park bathroom",
              "2. Buy Pure White Briefs at Don Quijote",
              "3. Return to man",
              "4. In Chapter 8: find Baba in Millennium Tower for Majima Construction"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 37,
            chapter: 3,
            name: "A High Energy Worker",
            location: "Kamurocho: W. Shichifuku Poppo",
            reward: "Ally gained",
            requirements: "Available in Chapter 3",
            guide: [
              "1. Buy something from clerk",
              "2. Return and speak to clerk 6 more times (no purchase needed)",
              "3. Clerk becomes ally"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 38,
            chapter: 13,
            name: "Kazuya Amon",
            location: "Shichifuku Parking Lot",
            reward: "Kazuya joins Majima Construction",
            requirements: "Complete 71 other substories",
            guide: [
              "1. Find Kazuya Amon in Shichifuku Parking Lot",
              "2. Fight with battle axes - cannot block without weapon",
              "3. At low health: uses shield and Heat mode",
              "4. Use Photon Blade weapon or wait out shield",
              "5. Find him later at east end of Shichifuku St."
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 39,
            chapter: 13,
            name: "Jiro Amon",
            location: "Behind Serena",
            reward: "Jiro joins Majima Construction",
            requirements: "Complete Substory #38",
            guide: [
              "1. Find Jiro behind Serena",
              "2. Use Sacred Wood Armor and Heavenly Beasts Bracelet",
              "3. He uses submachine gun with status effects and flash grenades",
              "4. At shield: hide behind stairs, use Heat Actions",
              "5. Find him later near Ringer Hut stairs"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 40,
            chapter: 13,
            name: "Sango Amon",
            location: "Theater Square",
            reward: "Sango joins Majima Construction",
            requirements: "Complete Substory #39",
            guide: [
              "1. Find Sango in Theater Square",
              "2. High defense recommended",
              "3. He uses rocket launcher - keep moving",
              "4. Use structure for cover, weapon Heat Actions",
              "5. At shield: run around structure until it drops",
              "6. Find him later north of Showa St. Poppo"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 41,
            chapter: 13,
            name: "The Ultimate Assassin",
            location: "Champion District → Millennium Tower",
            reward: "Book of Ultimate Secrets, Ultimate Essence, Jo Amon joins construction, final tournament unlocked",
            requirements: "Complete Substory #40",
            guide: [
              "1. Find Jo Amon collapsed in Champion District lot",
              "2. Go to Millennium Tower atrium",
              "3. Phase 1: sakura petal sword → blue light sword",
              "4. Phase 2: flaming sword with Heat (cannot block, run and use Heat Actions)",
              "5. Phase 3: shield with two swords (shield doesn't drop)",
              "6. Use triple Charge Attacks from Fists of Fury",
              "7. Watch for spin moves and incendiary grenades",
              "8. After victory: get Weaponomicon from Kamiyama for 9,990,000 yen"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 42,
            chapter: 5,
            name: "Kiryu the Bouncer",
            location: "Theater Square → Club Debolah",
            reward: "Unlocks Bouncer Missions",
            requirements: "Available in Chapter 5",
            guide: [
              "1. Meet young man at Theater Square east side",
              "2. Go to Club Debolah (northwest Theater Square)",
              "3. Talk to bartender to unlock Bouncer Missions"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 43,
            chapter: 2,
            name: "Lend a Claw",
            location: "Sotenbori Club SEGA → Iwao Bridge",
            reward: "Gold Robo CEO",
            requirements: "Available in Chapter 2",
            guide: [
              "1. Help dejected man at Club SEGA",
              "2. Get Robo Manager doll from UFO Catcher",
              "3. Find doll discarded at Iwao Bridge",
              "4. Return to Club SEGA, get Robot Chief instead",
              "5. Get Italian Ring (sells well)",
              "6. Return later for Gold Robo CEO"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 44,
            chapter: 4,
            name: "Overwhelming Affluence",
            location: "Sotenbori: Don Quijote → Club SEGA → Various",
            reward: "Charismatic Photo (best choice)",
            requirements: "Available in Chapter 4",
            guide: [
              "1. Bump into fancy gent at Don Quijote south entrance",
              "2. Get 100,000 yen, meet at Club SEGA",
              "3. Beat 4 Virtua Fighter 2 fights (use Jeffry McWild hip check)",
              "4. Find Kanematsu shaking down guy at Iwao Bridge east",
              "5. Return later, guy gives Silver Plate",
              "6. Final meeting at Shofukucho south near Taxi Stand",
              "7. Offer choice: 100 yen (Staminan X), 10,000 (Strength Ring), 100,000 (Charismatic Photo)"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 45,
            chapter: 4,
            name: "The Charming Councilor",
            location: "Sotenbori: West Shofukucho → Iwao Bridge",
            reward: "Modded Model Gun, councilor becomes employee",
            requirements: "Available in Chapter 4",
            guide: [
              "1. Beat thug harassing councilor at west Shofukucho",
              "2. Get Councilor Saeki's Book",
              "3. Give book to blue jacket guy at Iwao Bridge east",
              "4. Find Saeki perving on woman at west Shofukucho",
              "5. Beat Saeki's aide",
              "6. After Clan Creator: find him outside Karaoke Snack Bar"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 46,
            chapter: 4,
            name: "That's No Joke",
            location: "Sotenbori: Stijl bar → Various",
            reward: "Completes substory, comedians become employees",
            requirements: "Available in Chapter 4",
            guide: [
              "1. Meet manzai comedian at Stijl",
              "2. Respond however you want",
              "3. Leave bar, fight thug",
              "4. After Clan Creator: find comedians under Bishamon Bridge and northeast alcove"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 47,
            chapter: 10,
            name: "Stolen",
            location: "Sotenbori: Southwest Shofukucho → Various",
            reward: "Locker Key J4, Yuriko joins club",
            requirements: "Available in Chapter 10",
            guide: [
              "1. Stop lady attacking guy in southwest Shofukucho",
              "2. Find Mr. Purple Suit west of Ebisu Pawn",
              "3. Find Kajiwara at Golf Center",
              "4. Find Kojima at Midoriyama Building (above Wild Jackson)",
              "5. Rescue Miki at Gandhara",
              "6. Get 150,000 yen from guard",
              "7. Yuriko available at Four Shine"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 48,
            chapter: 10,
            name: "The Hunt for Tatsu",
            location: "Sotenbori: Iwao Bridge → River footpath → Various",
            reward: "Access to boat arms dealer",
            requirements: "Available in Chapter 10",
            guide: [
              "1. Talk to thug at Iwao Bridge southwest",
              "2. Find him harassing someone on north river footpath",
              "3. Throw thug in river",
              "4. Find Kanoshita north of Bishamon Bridge",
              "5. Throw Kanoshita in river",
              "6. Return to original guy on east footpath",
              "7. Access boat arms dealer"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 49,
            chapter: 11,
            name: "The Obatarian Strikes Again",
            location: "Sotenbori: South of Four Shine",
            reward: "Granny's Candy, Etsuko joins club",
            requirements: "Available in Chapter 11",
            guide: [
              "1. Encounter Obatarian south of Four Shine",
              "2. Respond to guys however you want",
              "3. Fight bad guy",
              "4. Etsuko available at Four Shine"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 50,
            chapter: 10,
            name: "The Man Who Can't Sing",
            location: "Sotenbori: In front of Grand",
            reward: "Leads to next substory",
            requirements: "Available in Chapter 10",
            guide: [
              "1. Help busker being harassed in front of Grand",
              "2. Beat thug",
              "3. Get guitarist's name: Takuo Yoshioka"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 51,
            chapter: 10,
            name: "The Woman Who Can't Play",
            location: "Sotenbori: Don Quijote south",
            reward: "Patriarch's Bowling Ball, Miki joins club",
            requirements: "Complete Substory #50",
            guide: [
              "1. Help singer being harassed at Don Quijote south",
              "2. Beat goons",
              "3. Mention Takuo Yoshioka",
              "4. Miki available at Four Shine"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 52,
            chapter: 4,
            name: "Crazy for Cathy",
            location: "Sotenbori: Southwest of Iwao Bridge",
            reward: "50,000 yen",
            requirements: "Available in Chapter 4",
            guide: [
              "1. Examine parked car southwest of Iwao Bridge",
              "2. Fight yakuza and thugs",
              "3. Use Heat Action near car for best results"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 53,
            chapter: 11,
            name: "The Elusive Model 12",
            location: "Sotenbori: West Shofukucho Poppo",
            reward: "Model 7, 10,000 yen",
            requirements: "Available in Chapter 11",
            guide: [
              "1. Help complaining guy at West Shofukucho Poppo",
              "2. Buy Space Samurai figurines from counter (5 at a time)",
              "3. Check Valuables tab for model numbers",
              "4. Find Model 12, give to guy",
              "5. Refuse offer twice"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 54,
            chapter: 10,
            name: "Clearing the Fog",
            location: "Sotenbori: North river footpath near Bishamon Bridge",
            reward: "Completes substory",
            requirements: "Available in Chapter 10",
            guide: [
              "1. Meet amnesiac bald guy on north river footpath",
              "2. Take 20,000 yen",
              "3. Use Paralysis weapon (stun gun available nearby)",
              "4. Shock him to restore memory",
              "5. Fight him for real"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 55,
            chapter: 10,
            name: "Yakuza Sunset",
            location: "Sotenbori: Shofukucho → Bishamon Bridge → Various",
            reward: "Bloody Binding, Director Sugano joins construction",
            requirements: "Available in Chapter 10",
            guide: [
              "1. Listen to teens in southwest Shofukucho",
              "2. Get script at Bishamon Bridge",
              "3. Go to Stijl, talk to director",
              "4. Watch Yakuza Sunset 3 at Gandhara",
              "5. Return to Stijl, answer: 'A yakuza who fights for the woman he loves', 'The action was subpar'",
              "6. Mock yakuza scene: 'Welcome home, young Master', 'I've failed you, Patriarch!'",
              "7. Fight 3 goons",
              "8. Find Sugano behind Turtle Hotel pillar"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 56,
            chapter: 3,
            name: "In the Name of Art",
            location: "Sotenbori: Iwao Bridge → Studio",
            reward: "Conservative Cell Phone, Mitsuo and producer become employees",
            requirements: "Available in Chapter 3",
            guide: [
              "1. Meet blond man in yellow jacket on Iwao Bridge",
              "2. Agree to modeling",
              "3. Do photo shoot poses as you like",
              "4. Fight Poison Mitsuo",
              "5. After Clan Creator: find them southeast of Shofukucho"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 57,
            chapter: 11,
            name: "Kazuma Kiryu, Professional Voice Actor",
            location: "Sotenbori: Smile Burger → Recording studio",
            reward: "Straight-laced Suit, Ryuzaki joins construction",
            requirements: "Available in Chapter 11",
            guide: [
              "1. Help distraught dude outside Smile Burger",
              "2. Record lines for Amigo Picante",
              "3. Correct answers (optional):",
              " • 'You're right. It's nice to be alone.'",
              " • 'I've always seen you as a man.'",
              " • 'I want you to be my first.'",
              " • 'Please be gentle with me.'",
              "4. Find Ryuzaki at Le Miel cafe downstairs"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 58,
            chapter: 3,
            name: "Albatross Akagi's Challenge",
            location: "Golf Center",
            reward: "Albatross Akagi's Club",
            requirements: "Complete Intermediate Closest to the Pin",
            guide: [
              "1. Complete Intermediate Closest to the Pin",
              "2. Talk to dressed-up fellow in back left",
              "3. Beat 290 points on Advanced course",
              "4. Practice and use golf strategies"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 59,
            chapter: 2,
            name: "A Nose for Music",
            location: "Sotenbori: Bishamon Bridge",
            reward: "Ally gained, becomes employee",
            requirements: "Available in Chapter 2",
            guide: [
              "1. Notice sneezing guitarist at Bishamon Bridge",
              "2. Buy Pocket Tissues from Poppo",
              "3. Give to guitarist",
              "4. After Clan Creator: find him at Iwao Bridge southwest"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 60,
            chapter: 2,
            name: "Helping the Barker",
            location: "Sotenbori: East side of Sotenbori St. near Kani Douraku",
            reward: "Ally gained",
            requirements: "Available in Chapter 2",
            guide: [
              "1. Find barker in blue coat being accosted",
              "2. Beat thug"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 61,
            chapter: 5,
            name: "An Ancient Rivalry",
            location: "Sotenbori: Bunzaemon Outdoor Mall → Coliseum",
            reward: "Kawauchi's Primer, Gensho becomes employee",
            requirements: "After starting Clan Creator",
            guide: [
              "1. Meet Kawauchi students near taxi stand",
              "2. Fight using only throws (judo rules)",
              "3. Meet Motoe Kawauchi",
              "4. Go to Coliseum, find Gensho in Tempest Tournament",
              "5. Cycle for 'Jujutsu' fighters",
              "6. Beat Gensho",
              "7. Return to Sotenbori for reward",
              "8. Find Gensho on Senryo Ave east of Kyushu No.1 Star"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 62,
            chapter: 7,
            name: "Granny's Request, Part 1",
            location: "Sotenbori: Bishamon Bridge",
            reward: "Scroll of the Golden Wall",
            requirements: "Complete Substory #23",
            guide: [
              "1. Take taxi to Sotenbori after Substory #23",
              "2. Get text from Granny White",
              "3. Meet under south side of Bishamon Bridge",
              "4. Buy Handmade Cookies from West Shichifuku Poppo in Kamurocho",
              "5. Give to Granny"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 63,
            chapter: 8,
            name: "Granny's Request, Part 2",
            location: "Kamurocho: Theater Square → Sotenbori",
            reward: "Scroll of Impenetrable Body",
            requirements: "Complete Substories #3 and #62",
            guide: [
              "1. Get text from Granny at Theater Square",
              "2. Get Yuya's photo from Stardust",
              "3. Return to Granny under Bishamon Bridge in Sotenbori"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 64,
            chapter: 8,
            name: "Granny's Request, Part 3",
            location: "Kamurocho: South Nakamichi St.",
            reward: "Scroll of Furious Fists",
            requirements: "Complete Substory #63, must have Haruka in Chapter 13",
            guide: [
              "1. Get text at south Nakamichi St.",
              "2. Wait until Chapter 13 with Haruka",
              "3. Take Haruka to Granny White"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 65,
            chapter: 2,
            name: "No Means No",
            location: "Sotenbori: Ebisu Pawn",
            reward: "Kazuha becomes ally",
            requirements: "Available in Chapter 2",
            guide: [
              "1. Talk to lady in front of Ebisu Pawn",
              "2. Intervene when creeps approach",
              "3. Fight 2 jerks"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 66,
            chapter: 2,
            name: "A Mother's Love",
            location: "Sotenbori: South river footpath east side",
            reward: "Ally gained",
            requirements: "Available in Chapter 2",
            guide: [
              "1. Help older lady with sunglasses",
              "2. Find amulet on lower footpath northwest of her location",
              "3. Return amulet"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 67,
            chapter: 2,
            name: "The Sharpest Blade",
            location: "Sotenbori: Komian restaurant",
            reward: "Ally gained",
            requirements: "Available in Chapter 2",
            guide: [
              "1. Listen to chef at Komian",
              "2. Get Butcher Knife from Ebisu Pawn or Locker Key F2",
              "3. Return to restaurant, give knife via hostess"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 68,
            chapter: 2,
            name: "Overcoming Your Fears",
            location: "Sotenbori: Northeast Poppo",
            reward: "Ally gained",
            requirements: "Available in Chapter 2",
            guide: [
              "1. Talk to skittish clerk at northeast Poppo",
              "2. Speak to him multiple times (no purchase needed)",
              "3. Complete conversations"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 69,
            chapter: 4,
            name: "Operation Panty Bait",
            location: "Cabaret Club Grand Prix",
            reward: "Koyuki's substory completion",
            requirements: "Three dinners with Koyuki",
            guide: [
              "1. Have three dinners with Koyuki",
              "2. Monitor sting operation: 'Wait and See' first three, catch fourth",
              "3. Fight dude",
              "4. Choose what to do with panties"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 70,
            chapter: 4,
            name: "What Was Passed Down",
            location: "Cabaret Club Grand Prix",
            reward: "Kana's substory completion",
            requirements: "Three dinners with Kana",
            guide: [
              "1. Have three dinners with Kana",
              "2. Check on old colleague at lousy club",
              "3. Beat up guy"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 71,
            chapter: 4,
            name: "Aika, the Party Queen",
            location: "Cabaret Club Grand Prix",
            reward: "Aika's substory completion",
            requirements: "Three dinners with Aika",
            guide: [
              "1. Have three dinners with Aika",
              "2. Meet friend and mother",
              "3. Fight breaks out, smash faces"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 72,
            chapter: 6,
            name: "Something Important",
            location: "Cabaret Club Grand Prix",
            reward: "Shoko's substory completion",
            requirements: "Three dinners with Shoko",
            guide: [
              "1. Have three dinners with Shoko",
              "2. Attend bookstore manga presentation",
              "3. Choose 'Four Shine'",
              "4. Leave and return to club"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 73,
            chapter: 6,
            name: "Big Scoop: Yua in Love!?",
            location: "Cabaret Club Grand Prix",
            reward: "Yua's substory completion",
            requirements: "Three dinners with Yua",
            guide: [
              "1. Have three dinners with Yua",
              "2. Help with paparazzi",
              "3. Smash his face in"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 74,
            chapter: 6,
            name: "Foil the Wedding Fraud!",
            location: "Cabaret Club Grand Prix",
            reward: "Kirara's substory completion",
            requirements: "Three dinners with Kirara",
            guide: [
              "1. Have three dinners with Kirara",
              "2. Night out to horse races sidetracked",
              "3. Notice something about Yuki",
              "4. Similar to Yakuza 0 substory"
            ].join("\n"),
            "videoId": ""
          },
          {
            index: 75,
            chapter: 6,
            name: "Treat Me Right",
            location: "Cabaret Club Grand Prix",
            reward: "Yuki's appreciation",
            requirements: "Complete Final Match in Cabaret Club Grand Prix",
            guide: [
              "1. Complete Final Match",
              "2. Return to club, Yuki gives money",
              "3. Ask everyone what Yuki might like",
              "4. Make decision on gift"
            ].join("\n"),
            "videoId": ""
          }
        ]
,
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
        substories: [
          {
            index: 1,
            chapter: 12,
            name: "Date's Pride",
            location: "Le Marche → New Serena → Various locations",
            reward: "Experience",
            requirements: "Leave Haruka at New Serena",
            guide: [
              "1. Find Date outside Le Marche",
              "2. Walk with him back to Serena",
              "3. Go to Public Park 3 after the drama",
              "4. Defeat punks behind Serena",
              "5. Get call to Nakamichi Alley, defeat bad guys",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 2,
            chapter: 10,
            name: "Two Fathers",
            location: "Ryudo Office → Beach → Various locations",
            reward: "Experience",
            requirements: "Must be done at sunset after Toma call",
            guide: [
              "1. Find man outside Ryudo Office",
              "2. Take him to orphanage (Mikio's father)",
              "3. Find Mikio on the beach, beat Kansai yakuza",
              "4. Find father near Mahjong Camp, beat more yakuza",
              "5. Go to Ryudo Office, then to Umachi restaurant",
              "6. Beat guys, chase Commerce Union President",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 3,
            chapter: 6,
            name: "Hometown Girl",
            location:
              "Asia → Batting Center → Millennium Tower → Nakamichi Alley",
            reward: "Experience",
            requirements:
              "Must be done with Rikiya, after returning to New Serena",
            guide: [
              "1. Speak to Rikiya at New Serena instead of Date",
              "2. Escort him to Asia bikini bar",
              "3. Receive calls to various locations: Batting Center, Millennium Tower, Nakamichi Alley",
              "4. Defeat multiple waves of punks",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 4,
            chapter: 6,
            name: "Dotting the Eye",
            location: "Divine Dragon Tattoo Parlor (Pink Alley)",
            reward: "Experience",
            requirements: "Must be done with Rikiya",
            guide: [
              "1. Go to Divine Dragon in Pink Alley with Rikiya",
              "2. After being refused, leave and find an altercation outside",
              "3. Beat down the thugs with Rikiya",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 5,
            chapter: 4,
            name: "Early Honeymoon",
            location: "Beach → Public Market → Stone Market → Beach",
            reward: "Large amount of Experience",
            requirements:
              "Daytime, Haruka with you, Kiryu in suit (late Chapter 4)",
            guide: [
              "1. Walk towards beach to meet Akimoto and Mizuki",
              "2. Follow them to Public Market food court, then to Stone Market jewelry shop",
              "3. Return to beach, talk to Koji",
              "4. Choose correct dialogue options:",
              " • 'She probably wanted to help the old lady.'",
              " • 'She probably couldn't say no to her mom.'",
              " • 'That's honorable of her.'",
              " • 'She's going to be a great wife.'",
              " • 'She must really want kids with you.'",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 6,
            chapter: 12,
            name: "They Never Learn",
            location: "Millennium Tower rooftop",
            reward: "Large amount of Experience",
            requirements: "Complete 'Early Honeymoon', Haruka must be with you",
            guide: [
              "1. Find office worker in front of Millennium Tower",
              "2. Agree to help, go to back elevators and ride up",
              "3. Approach the shoes at the edge of the roof",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 7,
            chapter: 6,
            name: "Silver Screen Dragon",
            location: "Theater Square",
            reward: "200,000 yen, Sakura Storm sword",
            requirements: "SAVE BEFORE STARTING",
            guide: [
              "1. Find movie crew on east side of Theater Square",
              "2. Agree to be the star",
              "3. Deliver lines *incorrectly*:",
              " • Say: 'You killed my father, and I want payback.'",
              " • Defeat enemies in order: Hanai, Narumi, Matsukaze, Otsuki",
              " • Say: 'Fight me to the death like a man!'",
              " • Use Heat Actions in order: Wall Crush, Komaki Sword Slash, Essence of Brick Breaking",
              " • Say: 'I'll make you apologize to my father... in hell!'",
              " • Let Yamashiro get your health to red before defeating him",
              " • Say: 'Keep your money. I want justice.'",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 8,
            chapter: 6,
            name: "The Comforting Yakuza",
            location: "South of Shichifuku Parking Lot → Bar → Hotel",
            reward: "Experience",
            requirements:
              "Complete 'Mr. Try and Flee Me', defeat Kanda, not with Rikiya",
            guide: [
              "1. Help woman being harassed south of parking lot",
              "2. Accept her drink offer, go to the bar",
              "3. When her date arrives, say 'Is that any way to speak to her?'",
              "4. Agree to take her to her hotel",
              "5. Refuse to pay 100,000 yen, beat up the guy",
              "6. Return to bar, beat another guy",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 9,
            chapter: 9,
            name: "Murder at Café Alps",
            location: "Café Alps → Various locations (Bantam, Mach Bowl, etc.)",
            reward: "200,000 yen",
            requirements: "Start in Ch.9, cannot complete until Final Chapter",
            guide: [
              "1. Talk to woman handing fliers outside Café Alps, meet Wakazo",
              "2. In Final Chapter (nighttime):",
              " • Find Detective Maeda at Bantam, ask all topics",
              " • Get data from The Florist in Purgatory",
              " • Find Usami at Mach Bowl",
              " • Find Asai at Poppo Nakamichi",
              " • Find Kinoshita at Café Alps",
              " • Find Imagawa at Club SEGA Theater Square",
              "3. Return to Alps, debrief with Wakazo",
              "4. Find Yuko at Stardust hostess club",
              "5. Return to Bantam to talk to Maeda",
              "6. Final confrontation at Alps, present evidence in order:",
              " • Usami's Testimony",
              " • Ashtray Fingerprints",
              " • Kinoshita's Testimony",
              " • Imagawa's Testimony",
              " • List of Evidence & Asai's Testimony 2",
              " • Accuse Yuko Kinoshita",
              " • Asai's Testimony",
              " • Yuko's Business Card",
              " • Wakazo's Testimony",
              " • Florist's Testimony",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 10,
            chapter: 6,
            name: "Another Stardust",
            location:
              "Stardust → Bantam → Café Alps → Public Park No. 3 → Millennium Tower",
            reward: "100,000 yen",
            requirements: "Complete 'Anything for Grandma's Love'",
            guide: [
              "1. Witness conversation at Stardust about a second club",
              "2. Talk to Yuya inside Stardust",
              "3. Leave, get call from Yuya, meet at Bantam",
              "4. Return to Stardust, talk to Yuya and Kazuki",
              "5. Go to Café Alps to find Kazuki",
              "6. Go to Public Park No. 3, tail and beat up Eiji",
              "7. Go to Millennium Tower, fight more bad guys",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 11,
            chapter: 4,
            name: "The Seven Mysteries of Ryukyu 1",
            location: "M Store lockers (Ryukyu St.)",
            reward: "Mystery Cell Phone",
            requirements: "Must be completed at night",
            guide: [
              "1. Talk to three schoolgirls outside M Store",
              "2. Approach the lockers, defeat thugs",
              "3. Use dropped key on Locker #44",
              "4. Defeat more thugs downstairs",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 12,
            chapter: 4,
            name: "The Seven Mysteries of Ryukyu 2",
            location: "Blue Seal Ice Cream → River path → Lot",
            reward: "10,000 yen",
            requirements: "Complete 'The Seven Mysteries of Ryukyu 1'",
            guide: [
              "1. Find schoolgirls near Blue Seal Ice Cream",
              "2. Enter and exit Aqua Sky, find black cat",
              "3. Follow cat east along river path",
              "4. Fight a guy, get Catnip Stick",
              "5. Find another cat west, use Catnip on it",
              "6. Follow cat to lot, find old lady with chest pains",
              "7. Get Suntory Mineral Water from M Store, give to her",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 13,
            chapter: 4,
            name: "The Seven Mysteries of Ryukyu 3",
            location: "Kitaryu Bridge",
            reward: "30,000 yen",
            requirements: "Complete 'The Seven Mysteries of Ryukyu 2'",
            guide: [
              "1. Find schoolgirls on Kitaryu Bridge",
              "2. Find black man in green shirt, accept tour offer",
              "3. Defeat four tough dudes",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 14,
            chapter: 4,
            name: "The Seven Mysteries of Ryukyu 4",
            location: "North Public Market → Grocery Stand",
            reward: "Staminan Spark (Best outcome)",
            requirements: "Complete 'The Seven Mysteries of Ryukyu 3'",
            guide: [
              "1. Find schoolgirls in southwest North Public Market",
              "2. Talk to kid, then shop lady",
              "3. Buy ingredients from woman east of market stairs:",
              " • bitter melon, brown sugar (kuruzata), aloe (dugwai), island bananas (basanai), shikwasa (lemon)",
              "4. Return ingredients to shop lady",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 15,
            chapter: 4,
            name: "The Seven Mysteries of Ryukyu 5",
            location: "North of Maeda Drugs → Vendor → South Arcade",
            reward: "100,000 yen",
            requirements: "Complete 'The Seven Mysteries of Ryukyu 4'",
            guide: [
              "1. Find schoolgirls north of Maeda Drugs",
              "2. Buy a Coral Love Necklace from the vendor",
              "3. Get pickpocketed by a lady at the south arcade corner (lose 50,000 yen)",
              "4. Talk to vendor, he directs you south of Ryudo Office",
              "5. Talk to manufacturer, select 'Return the Necklace'",
              "6. Defeat bad dudes",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 16,
            chapter: 4,
            name: "The Seven Mysteries of Ryukyu 6",
            location: "Public Market → Northeast of Flawless",
            reward: "50,000 yen",
            requirements: "Complete 'The Seven Mysteries of Ryukyu 5'",
            guide: [
              "1. Find schoolgirls at Public Market entrance",
              "2. Enter market, talk to pair of people, then the man",
              "3. Go northeast of Flawless",
              "4. Defeat the piggish man selling fake pork",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 17,
            chapter: 10,
            name: "The Seven Mysteries of Ryukyu 7",
            location: "East Bridge → Hatsumachi Crossroads",
            reward:
              "50,000 yen, Azure Gem, Lucky Coin (if you return to girls)",
            requirements: "Complete previous Mysteries",
            guide: [
              "1. Find schoolgirls on the east bridge",
              "2. Go to crossroads in Hatsumachi, examine black car",
              "3. Agree to go to their office, agree to their terms",
              "4. Find punk on eastern bridge again, refuse new terms",
              "5. Defeat all bad guys",
              "6. (Optional) Return to schoolgirls for Lucky Coin",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 18,
            chapter: 5,
            name: "Instant Ramen Takes Time",
            location:
              "Kyushu No. 1 Star (Tokyo) → Millennium Tower → Ryukyu (Ch.10)",
            reward: "Kyushu No. 1 Star Ramen Sample",
            requirements: "Start in Ch.5, cannot finish until Ch.10",
            guide: [
              "Ch.5:",
              "1. Intervene in argument at Kyushu No. 1 Star",
              "2. Talk to man outside, try instant ramen, 'Encourage Him'",
              "3. Find him at Millennium Tower being rejected, beat goons",
              "4. Return to ramen shop, Ueda goes to Okinawa",
              "Ch.10:",
              "5. Find Ueda south of Ebisu Pawn in Ryukyu near a car",
              "6. Tell him to find Okinawan soba stand",
              "7. Go to soba stand, talk to him",
              "8. Return to Tokyo, go to Kyushu No. 1 Star",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 19,
            chapter: 10,
            name: "Yamashita Treasure Hunt",
            location: "Ebisu Pawn → Parking garage SW of Karaokekan",
            reward: "Antique Chain Mail",
            requirements: "Complete 'Let's Learn English 3'",
            guide: [
              "1. Talk to old man in orange shirt outside Ebisu Pawn",
              "2. He gives you a map",
              "3. Go to parking garage southwest of Karaokekan in Hatsumachi",
              "4. Examine the spot, call the old man over",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 20,
            chapter: 4,
            name: "Bottled Love",
            location:
              "Beach → Kariyushi Arcade → Ryukyu Shogi → Monorail Station",
            reward: "Sata Andagi",
            requirements:
              "Complete 'Early Honeymoon', meet Mack, learn about Revelations",
            guide: [
              "1. Find bottle on west side of beach (alone)",
              "2. Haruka joins, suggests checking Kariyushi Arcade",
              "3. Find woman at south end of arcade",
              "4. She mentions a boy at the Shogi parlor",
              "5. Go to Ryukyu Shogi, talk to the boy",
              "6. Follow him to the Monorail Station",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 21,
            chapter: 7,
            name: "A Boy and his Balloon",
            location:
              "Nakamichi/Taihei intersection → East Millennium Tower St. → Children's Park",
            reward: "Caviar Skin Bag",
            requirements: "Complete 'Catch Those Shoplifters!'",
            guide: [
              "SAVE BEFORE STARTING",
              "1. Find crying boy in green south of Nakamichi/Taihei intersection",
              "2. Chase the red balloon:",
              " • Up East Millennium Tower St.",
              " • West on Shichifuku to Children's Park",
              "3. Meet the mom in the park, reunite them",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 22,
            chapter: 5,
            name: "Rough Draft",
            location: "Batting Center",
            reward: "Spiked Bat",
            requirements: "Score at least 1100 in Hard Course",
            guide: [
              "1. Achieve 1100+ score in Hard Course",
              "2. Mysterious Old Man will challenge you as you leave",
              "3. Re-enter Batting Center, find guy in baseball uniform",
              "4. Play alternating 10-ball game, prioritize bingos and two-panel hits",
              "5. Defeat him",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 23,
            chapter: 6,
            name: "Il in Theater Square",
            location: "Theater Square (east side)",
            reward: "5,000 yen",
            requirements: "Complete 'Water Purifiers', SAVE BEFORE STARTING",
            guide: [
              "1. Find group of 'mature' ladies in happi coats",
              "2. Carefully navigate through the crowd without bumping anyone:",
              " • Path is straight up the middle between red and blue ladies",
              "3. At the front, say 'I've met this guy before.'",
              "4. Defeat yakuza jerks",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 24,
            chapter: 4,
            name: "Shisa Shakedown",
            location:
              "Kariyushi Arcade entrance → Dead-end street NE Hatsumachi",
            reward: "50,000 yen",
            requirements: "Complete 'Out of His League'",
            guide: [
              "1. Find couple at entrance to Kariyushi Arcade",
              "2. They want a shisa figure with its mouth closed",
              "3. Go to dead-end street in northeast Hatsumachi",
              "4. Automatically spot it, approach and call the couple",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 25,
            chapter: 6,
            name: "Nonstop Stalkers",
            location: "In front of Jewel → Various tailing locations",
            reward: "50,000 yen",
            requirements: "None",
            guide: [
              "1. Talk to young woman in front of Jewel",
              "2. A man in a red jacket appears, follow him slowly (~50 ft distance)",
              "3. He talks to a guy in glasses, follow the glasses guy",
              "4. Glasses guy talks to a bald guy, follow the bald guy",
              "5. Meet back up with Emi and all involved, defeat them",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 26,
            chapter: 5,
            name: "Kiryu the Collector",
            location:
              "Theater Square → One of five random locations (Park Blvd, Smile Burger, Pink St. sign, Earth Angel, Mach Bowl)",
            reward: "100,000 yen (decreases by 20k each failure/move)",
            requirements: "None",
            guide: [
              "1. Find debt collector chasing client in Theater Square",
              "2. Agree to help, he will call you",
              "SAVE BEFORE APPROACHING HIM",
              "3. He will be in one of five random locations:",
              " • Park Blvd (north of Kanrai)",
              " • Smile Burger on Nakamichi",
              " • Atop sign at south entrance of Pink St.",
              " • Inside Earth Angel",
              " • Inside Mach Bowl",
              "4. Talk to him, fight him (he dodges, use Komaki Dodge Shot)",
              "5. If he moves, you get another call with new location",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 27,
            chapter: 3,
            name: "The Hustler's Challenge",
            location: "Aqua Sky",
            reward: "Experience, 100,000 yen (if win)",
            requirements: "SAVE BEFORE STARTING",
            guide: [
              "1. Win three games of Nine-Ball at Aqua Sky",
              "2. Depart table, meet mustached gentleman",
              "3. Leave and return to bar, he challenges you to a game for a bar owner's debt",
              "4. Play one game (win or lose completes it, win for 100,000 yen)",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 28,
            chapter: 5,
            name: "Talking About Me?",
            location: "Bantam",
            reward: "50% discount on Standard Massage at Love in Heart",
            requirements:
              "Visit Love in Heart once, complete 'Bullseye of Love'",
            guide: [
              "1. Find young lady sitting alone in Bantam",
              "2. Mention you know her from 'Love in Heart'",
              "3. Hear out her troubles (do not refuse)",
              "4. Ask all three questions about the man",
              "5. She leaves, talk to Yuya",
              "6. She returns, hear her out, say 'No, not at all.'",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 29,
            chapter: 5,
            name: "Manga Mania",
            location: "Poppo → Millennium Tower → Café Alps → Ryukyu (Ch.10)",
            reward: "50 Issues of Shonen Five, Gold Plate (if given to Taichi)",
            requirements: "Start in Ch.5, cannot finish until Ch.10",
            guide: [
              "Ch.5:",
              "1. Enter any Poppo, get call from Taichi",
              "2. Buy latest issue of Shonen Five",
              "3. Find dude on ground near Millennium Tower lockers",
              "4. He runs to Café Alps, listen to conversation, talk to editor",
              "Ch.10:",
              "5. Have Shonen Five in inventory",
              "6. Find editor west of Stone Market in Ryukyu",
              "7. Go to Maeda Pharmacy, talk to writer's father",
              "8. Find writer on eastern bridge",
              "9. Tell editor 'he's giving up on his dream'",
              "10. (Optional) If possible, give magazines to Taichi at orphanage gate",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 30,
            chapter: 6,
            name: "Rookie's Dilemma",
            location: "Public Park No. 3",
            reward: "Staminan Spark",
            requirements: "Complete 'Mr. Try and Flee Me'",
            guide: [
              "1. Find salaryman on ground in Public Park No. 3",
              "2. Get Suntory Mineral Water from Poppo, give to him",
              "3. Leave and return, find him again, give any answer",
              "4. Leave and return again, find him a third time, give any answer",
              "5. He gets angry, defeat him",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 31,
            chapter: 4,
            name: "Fast Food for the Heart",
            location: "Smile Burger",
            reward: "Experience",
            requirements: "May need nearby substories completed",
            guide: [
              "1. Find forlorn man in front of Smile Burger",
              "2. Agree to help him",
              "3. Choose any dialogue, correct final choice is 'I'll tell her for you.'",
              "4. Go inside, pick 'Will you read his love letter?'",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 32,
            chapter: 4,
            name: "Out of His League",
            location: "Flawless",
            reward: "Experience",
            requirements: "Complete 'Fast Food for the Heart'",
            guide: [
              "1. Find the teenager at Flawless after a makeover",
              "2. Talk to him, he moves, talk again",
              "3. Story resolves based on if you've met hostess Mika",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 33,
            chapter: 4,
            name: "Robbing the Orphanage",
            location: "Morning Glory Orphanage",
            reward: "Experience",
            requirements: "Complete 'Out of His League'",
            guide: [
              "1. Return to Morning Glory, find the guy outside",
              "2. He runs up and talks to you",
              "3. Choose any dialogue options, he runs off in shame",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 34,
            chapter: 10,
            name: "Reckoning",
            location: "Smile Burger",
            reward: "Italian Shoulder Bag",
            requirements: "Complete 'Robbing the Orphanage'",
            guide: [
              "1. Find the dude outside Smile Burger",
              "2. He goes inside, follow him",
              "3. Punks show up, defeat them",
              "4. Couple talks, choose either dialogue option",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 35,
            chapter: 5,
            name: "Mr. Try and Hit Me Again",
            location: "Shichifuku Parking Lot",
            reward: "50,000 yen",
            requirements: "Must be at night",
            guide: [
              "1. Find Mr. Try and Hit Me in Shichifuku Parking Lot",
              "2. Pay 3,000 yen for a chance to earn 50,000",
              "3. Use Komaki Dodge Shot (quickstep forward + Triangle) to easily tag him",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 36,
            chapter: 6,
            name: "Mr. Try and Flee Me",
            location:
              "Shichifuku Parking Lot → Senryo Ave. → Champion District",
            reward: "70,000 yen",
            requirements: "Complete 'Mr. Try and Hit Me Again'",
            guide: [
              "1. Find Mr. Try and Flee Me in Shichifuku Parking Lot",
              "2. Pay 5,000 yen",
              "3. Run ahead of him down Senryo Ave., then into Champion District",
              "4. Avoid collisions, he gives up after a short chase",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 37,
            chapter: 7,
            name: "Mr. Try and Catch Me",
            location: "Shichifuku Parking Lot",
            reward: "100,000 yen",
            requirements: "Complete 'Mr. Try and Flee Me'",
            guide: [
              "1. Find third member in Shichifuku Parking Lot",
              "2. Chase and capture him around the parking lot block",
              "3. His jukes change each lap, can be difficult",
              "4. May need Mack's Running Training to improve chances",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 38,
            chapter: 4,
            name: "Morning Glory Hide-and-Seek",
            location: "Morning Glory Orphanage",
            reward: "None (Star completion requires finding Izumi last)",
            requirements: "After baseball event, explore alone",
            guide: [
              "1. Find kids in play room complaining of boredom",
              "2. Agree to play hide-and-seek",
              "3. Find them in this order for 'star' completion:",
              " • Taichi: On the roof (look up from yard)",
              " • Shiro: Behind the lumber pile",
              " • Eri: Under the table in the yard",
              " • Izumi: Behind the baseball target (find last)",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 39,
            chapter: 5,
            name: "The Old Man's Memories",
            location:
              "Millennium Tower → Suppon St. → Champion District → Millennium Tower",
            reward: "100,000 yen",
            requirements: "Complete 'Hor D'oeuvres'",
            guide: [
              "1. Help old man being harassed in front of Millennium Tower east door",
              "2. He asks about 'Jinsei' on Suppon St.",
              "3. Go to Suppon St., talk to man in red shirt",
              "4. He directs you to Champion District (southeast part)",
              "5. Beat up debt collector shaking a man",
              "6. Return to old man, 'Ask About the Situation' optional",
              "7. Take him to Champion District, beat more bad guys",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 40,
            chapter: 6,
            name: "Suspicious Spouses",
            location: "Bantam → Orchid Palace Mahjong → Nakamichi St.",
            reward: "70,000 yen",
            requirements: "Complete 'The Old Man's Memories'",
            guide: [
              "1. Find woman in far corner of Bantam",
              "2. Agree to help her husband",
              "3. Go to Orchid Palace Mahjong parlor, find man in red sportswear",
              "4. Tail him up Nakamichi St. (he will spot you)",
              "5. Defeat him, he explains everything",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 41,
            chapter: 6,
            name: "Catch Those Shoplifters!",
            location: "Showa Poppo",
            reward: "4,000 yen",
            requirements: "Complete 'Kiryu the Pickpocket!?'",
            guide: [
              "1. Enter and exit Showa Poppo",
              "2. Employee accuses you, then apologizes and asks for help",
              "3. Watch three potentially suspicious people",
              "4. Only stop the second person",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 42,
            chapter: 3,
            name: "Temptation",
            location: "South of Umachi",
            reward: "10,000 yen",
            requirements: "None",
            guide: [
              "1. Find woman and doctor talking south of Umachi",
              "2. Speak to them, agree to help the woman",
              "3. Go to exchange area, choose 'Jump Right In'",
              "4. Defeat the kidnapper",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 43,
            chapter: 4,
            name: "Sea Bream Strongarm",
            location:
              "Public Market fish stand → Restaurant north of South Island",
            reward: "Silver Plate (if honest)",
            requirements: "Complete 'Walking the Plank'",
            guide: [
              "1. Fishmonger gives you 200,000 yen for help",
              "2. Go to restaurant next to South Island (chef to the north)",
              "3. Options: Pay him 300,000 yen OR catch him a tuna (very hard fish)",
              "4. Return to fishmonger with fish/money:",
              " • If bought fish: Option to say it cost 300,000 yen or not",
              " • If gave tuna: Option to return money or not",
              "5. If you try to return money, he refuses and gives Silver Plate",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 44,
            chapter: 4,
            name: "Bag That Snatcher",
            location: "South end Kariyushi Arcade → Public Market SE corner",
            reward: "3,000 yen",
            requirements: "None",
            guide: [
              "1. Witness purse-snatching south of Kariyushi Arcade",
              "2. Snatcher runs into Public Market",
              "3. Find culprit in southeast corner of first floor",
              "4. Take him to the old lady",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 45,
            chapter: 10,
            name: "The Iriomote Incident",
            location: "Public Market upstairs",
            reward: "50,000 yen",
            requirements: "Complete 'Chumming the Waters'",
            guide: [
              "1. Market owner approaches you inside Public Market",
              "2. He asks for help stopping a wildcat trafficking ring",
              "3. Go upstairs, find man in green hat, red shirt, with a carrier",
              "4. Approach the one on the left, tell him 'I don't need proof'",
              "5. Defeat the two guys",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 46,
            chapter: 4,
            name: "Mikio's Munchathon",
            location: "Public Market center",
            reward: "Giant Blue Parrotfish (sells for 10,000 yen)",
            requirements: "None",
            guide: [
              "1. Find Mikio in center of Public Market",
              "2. Agree to go on patrol",
              "3. Walk VERY SLOWLY with him to stalls: NE, nearby, east, SE",
              "4. Hear a shriek, fight thugs (good for Essence of Stove/Hammer)",
              "5. Get fish reward",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 47,
            chapter: 10,
            name: "Hit-and-Stop",
            location: "Intersection near Ebisu Pawn",
            reward: "30,000 yen OR 50,000 yen (with specific Heat Action)",
            requirements:
              "Complete 'Let's Learn English 3' AND 'I Want To Go to Tokyo 3'",
            guide: [
              "1. Listen to two guys talking at intersection",
              "2. Cross street while traffic is moving, collide with a black sedan",
              "3. Beat up the driver and his dudes",
              "4. For 50,000 yen: Knock a guy down, grab his legs, drag him to car, use Heat Action to slam into windshield",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 48,
            chapter: 5,
            name: "Hor D'oeuvres",
            location: "Kanrai",
            reward: "Staminan Royale",
            requirements: "Complete 'Bargain Sale'",
            guide: [
              "1. Find forlorn worker outside Kanrai",
              "2. A dine-and-dasher has skipped, agree to help",
              "3. Chase the man (can retry infinitely)",
              "4. Strategy: Don't hold sprint (R2/RT) unless open ground, avoid collisions",
              "5. Catch him",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 49,
            chapter: 6,
            name: "Appetizer",
            location: "Kyushu No. 1 Star",
            reward: "Staminan Spark",
            requirements: "Complete 'Hor D'ouevres' and 'Suspicious Spouses'",
            guide: [
              "1. Dine-and-dasher is at Kyushu No. 1 Star again",
              "2. Chase him (easier than first, figure-8 path, two hits to down)",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 50,
            chapter: 7,
            name: "Main Course",
            location: "Gelateria Kamuro",
            reward: "Staminan Spark",
            requirements: "Complete 'Appetizer'",
            guide: [
              "1. Find lady outside Gelateria Kamuro",
              "2. Chase the big man around Taihei and Theater Square",
              "3. Takes about six hits to get him down",
              "4. Choose either dialogue option afterwards",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 51,
            chapter: 10,
            name: "Dessert",
            location: "Ebisu Pawn (Ryukyu)",
            reward: "Gold Plate",
            requirements: "Complete 'Main Course'",
            guide: [
              "1. Find shop owner with red apron outside Ebisu Pawn",
              "2. Yet another dine-and-dash",
              "3. Chase the guy throughout Ryukyu alleys",
              "4. Catch him",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 52,
            chapter: 4,
            name: "Under the Table",
            location: "Aqua Sky",
            reward: "Legendary Drinker of Ryukyu",
            requirements: "SAVE BEFORE STARTING",
            guide: [
              "1. Find drunk dude in Aqua Sky",
              "2. He challenges you to 'Look the Other Way' drinking game (random)",
              "3. Win three times for 50,000 yen, lose and pay 20,000 yen",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 53,
            chapter: 5,
            name: "Bullseye of Love",
            location: "Bantam",
            reward: "50,000 yen",
            requirements: "Play Darts 01 Games five times (Tokyo or Ryukyu)",
            guide: [
              "1. Dude in Bantam asks you to play darts and let him win",
              "2. Agree, then crush him with your darts skills",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 54,
            chapter: 5,
            name: "Riled Riders",
            location: "West Shichifuku St. (front of Children's Park)",
            reward: "20,000 yen",
            requirements: "Nighttime, complete 'High-Tech Peeping Tom'",
            guide: [
              "1. See scene on a taxi, speak to driver",
              "2. Agree to help with drunks",
              "3. Defeat the drunks (do not use Heat Action near taxi)",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 55,
            chapter: 3,
            name: "I Want to Go to Tokyo 1",
            location: "Kariyushi Arcade",
            reward: "Soki Burger Set",
            requirements: "None",
            guide: [
              "1. Find young woman in overalls and pink shirt in Kariyushi Arcade",
              "2. She asks if you're from Tokyo, agree to hang out",
              "3. Answer questions about Tokyo (responses not important)",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 56,
            chapter: 5,
            name: "I Want to Go to Tokyo 2",
            location: "Smile Burger → Gelateria → Mach Bowl → Earth Angel",
            reward: "50,000 yen",
            requirements: "Complete 'I Want to Go to Tokyo 1' (in Ryukyu)",
            guide: [
              "1. Find Kaede behind counter at Smile Burger in Tokyo",
              "2. Return later, she gets fired for leftovers",
              "3. Find her at Gelateria, she gets fired again",
              "4. She calls, find her at Mach Bowl, gets fired immediately",
              "5. Kiryu suggests cabaret club, she gets job at Earth Angel",
              "6. Enter Earth Angel after line clears, Ako gives reward",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 57,
            chapter: 10,
            name: "I Want to Go to Tokyo 3",
            location: "North of Ebisu Pawn (Ryukyu)",
            reward: "Caviar Skin Bag",
            requirements: "Complete 'I Want to Go to Tokyo 2'",
            guide: [
              "1. Find the girl north of Ebisu Pawn",
              "2. Speak to her, receive bag after conversation",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 58,
            chapter: 7,
            name: "Barking up the Wrong Tree",
            location: "Intersection of Shichifuku and Senryo",
            reward: "50,000 yen (if pay) OR 100,000 yen (if refuse)",
            requirements: "Complete 'Nonstop Stalkers'",
            guide: [
              "1. Find dude in red/white jacket at intersection",
              "2. He offers club for 5,000 yen:",
              " • Pay 5,000 for quick fight and 50,000 yen",
              " • Refuse four times for free, fight barkers for 100,000 yen",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 59,
            chapter: 5,
            name: "Ghosts from the Past",
            location: "M Store or Poppo Nakamichi → Shellac → NE corner of map",
            reward: "Experience",
            requirements: "None",
            guide: [
              "1. Trigger in M Store or Poppo (walk towards magazine rack)",
              "2. Dude gives you look, talks to you outside",
              "3. He shows magazine photo of Millennium Tower bombing",
              "4. Call publishing company, learn photographer drinks at Shellac",
              "5. Go to Shellac, talk to photographer (former Peace Finance owner)",
              "6. Young dude is son seeking revenge, find them NE corner of map",
              "7. Defeat the son",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 60,
            chapter: 4,
            name: "Lost and Found",
            location: "Kariyushi Arcade entrance → Various locations",
            reward: "3,000 yen",
            requirements: "Complete 'Let's Learn English 2'",
            guide: [
              "1. Find woman in pink dress at arcade entrance, can't find child",
              "2. Child wears blue and straw hat:",
              " • Find child with straw hat south (not her, swapped hats)",
              " • Now looking for baseball cap: find girl near soba stand west (not her, now ribbon)",
              " • Now looking for ribbon: find girl dancing at Maeda Drugs (not her, now animal backpack)",
              " • Now looking for animal backpack: find girl SE corner of arcade (finally her)",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 61,
            chapter: 3,
            name: "The Distiller's Treasure",
            location: "Alley North Public Market → Beach 'Turtle Rock'",
            reward: "Shisa Belt",
            requirements: "Complete 'I Want to Go to Tokyo 1'",
            guide: [
              "1. Find guy hustling store owner in alley",
              "2. He owes a loan, needs to find/sell family heirloom",
              "3. Heirloom is buried on the beach",
              "4. Go to west side of beach, find 'Turtle Rock', get 'Look' prompt",
              "5. Call the guy, dig up a pot together",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 62,
            chapter: 5,
            name: "Return to the Dragon Palace",
            location:
              "? marker E of Batting Center → Hotel District → SE punks",
            reward: "Access to Dragon Palace casino and gambling hall",
            requirements: "None",
            guide: [
              "1. Find punks at '?' marker east of Batting Center ('hunting')",
              "2. Go to Hotel District (edge of map), find homeless guy surrounded by punks, defeat them",
              "3. Return to SE punks, defeat all five",
              "4. Defeat their leader (tough fight)",
              "5. Get phone call from casino owner",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 63,
            chapter: 5,
            name: "Missed Caller",
            location:
              "Tenkaichi Alley → Honey Teleclub → Kanrai → Smile Burger",
            reward: "100,000 yen",
            requirements:
              "Progress far enough in 'Manga Mania' (editor going to Okinawa)",
            guide: [
              "1. Find old man surrounded by women in Tenkaichi Alley",
              "2. He's looking for daughter Nami, gets tissues for 'Honey' teleclub",
              "3. Use tissues from inventory to call",
              "4. Woman says she's at Kanrai, go there (costs 20,000 yen for info)",
              "5. Info: homeless women sleep at burger joint",
              "6. Find woman in yellow jacket outside Smile Burger",
              "7. Her dad shows up, then sleazebags show up, defeat them with dad",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 64,
            chapter: 7,
            name: "The Tuna Fund",
            location:
              "Sushi Gin → Ryukyu (Ch.10) → Sushi Gin → Office E of Millennium Tower",
            reward: "Investment back + bonus (max: four Maguros)",
            requirements:
              "Complete 'Watch Out for Renovations', Start in Ch.7, finish in Ch.10",
            guide: [
              "Ch.7:",
              "1. At Sushi Gin, order the tuna, talk to fishery guy next to you",
              "2. Agree to invest (100 Shares costs 1 million yen, max reward)",
              "Ch.10:",
              "3. Get text with address, go to NE corner Hatsumachi in Ryukyu (not office)",
              "4. Return to Kamurocho, get another text",
              "5. Talk to chef at Sushi Gin, he mentions office east of Millennium Tower",
              "6. Go to building with green awning north of Matsuya, south of Wild Jackson",
              "7. Enter, fight Sawada and goons, get money back + bonus",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 65,
            chapter: 7,
            name: "Chic Snatcher",
            location: "Le Marche → Pink Street → Nakamichi back lot",
            reward: "Your bag back, Caviar Skin Bag",
            requirements: "None",
            guide: [
              "1. Witness couple talking about bag snatching outside Le Marche",
              "2. Enter boutique, clerk warns you, buy a bag (cheapest: Italian Shoulder Bag 87,000 yen)",
              "3. Leave, get snatched",
              "4. Head towards Pink Street, couple says he took first left",
              "5. Run down Pink Street, left into alley to Nakamichi Poppo, spot dude",
              "6. Choose 'Follow Him' to back lot in Nakamichi",
              "7. Defeat all jerks",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 66,
            chapter: 4,
            name: "Walking the Plank",
            location: "West side of river (on fence)",
            reward: "Staminan Royale",
            requirements: "None",
            guide: [
              "1. Find man balancing on edge of fence on west river side",
              "2. Speak to him, choose either option to talk him down",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 67,
            chapter: 4,
            name: "Chumming the Waters",
            location: "Bridge (west side of river)",
            reward: "Staminan Royale",
            requirements: "Complete 'Sea Bream Strongarm'",
            guide: [
              "1. Find the guy on the fence again at the bridge",
              "2. Talk him down, pick either option",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 68,
            chapter: 10,
            name: "Thrown to the Loan Sharks",
            location: "Western bridge",
            reward: "Staminan Spark",
            requirements: "Complete 'The Iriomote Incident'",
            guide: [
              "1. Find tubby guy with glasses prepping to jump off western bridge",
              "2. Say you can't abandon him",
              "3. Get led to his loan sharks, defeat them",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 69,
            chapter: 3,
            name: "The Con Menace",
            location: "Near Karaokekan (Ryukyu)",
            reward: "10,000 yen",
            requirements: "Not marked on map",
            guide: [
              "1. Find three suited toughs plodding near Karaokekan",
              "2. Bump into them, refuse to give money",
              "3. Defeat them",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 70,
            chapter: 4,
            name: "The Con Wars",
            location: "Kitaryu St.",
            reward: "50,000 yen",
            requirements: "Complete 'The Con Menace'",
            guide: [
              "1. Find larger group of dudes on Kitaryu St.",
              "2. Bump into them, defeat them all",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 71,
            chapter: 10,
            name: "Revenge of the Con Men",
            location: "River bank",
            reward: "100,000 yen",
            requirements: "Complete 'Under the Table' and 'The Con Wars'",
            guide: [
              "1. Find gaggle of six hoodlums along river bank",
              "2. Defeat them all",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 72,
            chapter: 10,
            name: "A New Con",
            location: "Bantam (Tokyo)",
            reward: "150,000 yen",
            requirements: "Complete 'Revenge of the Con Men'",
            guide: [
              "1. Go to Bantam in Tokyo, find the scammers again",
              "2. Bump into them, they are fighting another group",
              "3. Choose 'Save the Scammers'",
              "4. Defeat the punks",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 73,
            chapter: 9,
            name: "Mars Fighters in Tokyo",
            location:
              "Millennium Tower → Park Blvd (north of Shichifuku Parking Lot)",
            reward: "10,000 yen, Minamizawa's Autograph (sells for 50 yen)",
            requirements: "None",
            guide: [
              "1. Find Kitagawa (red jacket, goofy hat) in front of Millennium Tower",
              "2. He gives photo of his partner",
              "3. Partner is on Park Blvd, north of Shichifuku Parking Lot, near homeless tents",
              "4. Speak to him, defeat him in combat",
              "5. When he does comedy, say 'So?'",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 74,
            chapter: 5,
            name: "Bargain Sale",
            location:
              "SE corner Senryo Ave. → Ebisu Pawn → Millennium Tower white car",
            reward: "300,000 yen (hush money)",
            requirements: "None",
            guide: [
              "1. Find shifty dude with sunglasses on SE corner of map (Senryo Ave.)",
              "2. He offers designer bag, haggle down to 36,000 yen, buy it",
              "3. Take to Ebisu Pawn, confirmed fake",
              "4. Return to guy, he wants to buy back, refuse all offers, he fights you",
              "5. Don't give him the keys found in bag",
              "6. He warns about Millennium Tower, go to white car marked on map",
              "7. Choose 'Open the trunk', beat up guys who show up",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 75,
            chapter: 6,
            name: "The Returnee",
            location:
              "Tenkaichi St. gate → Emoto Clinic → Millennium Tower → Shangri-La → West Park",
            reward: "Blood Brooch",
            requirements:
              "Complete 'Another Stardust', after defeating Kanda, without Rikiya",
            guide: [
              "1. Find dude asking about Emoto Clinic at Tenkaichi St. gate",
              "2. Take him to clinic (Tenkaichi St. west to Taihei)",
              "3. Offer to show him around town",
              "4. Take him to Millennium Tower, defeat punks",
              "5. Take him to Shangri-La (corner Taihei/Senryo, Roman columns), defeat same three jerks",
              "6. Take him to West Park (NE corner of map), four jerks show up but no fight",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 76,
            chapter: 9,
            name: "Disconnected",
            location:
              "Theater Square phone booth → Slot House (south of New Serena)",
            reward: "50,000 yen",
            requirements: "Complete 'Stealing from the Dragon's Hoard'",
            guide: [
              "1. Get call on phone booth in Theater Square",
              "2. Perp has noisy background, he is south of New Serena in front of 'Slot House'",
              "3. Speak to him, beat him up (skip his wild goose chases)",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 77,
            chapter: 9,
            name: "Stealing from the Dragon's Hoard",
            location: "West end of Taihei Blvd. (south of Mach Bowl)",
            reward: "100,000 yen (net +60,000) OR get 40k back + 60k",
            requirements: "Complete 'Your Fortunes Told Here'",
            guide: [
              "1. Get bumped by guy who steals 40,000 yen",
              "2. Chase him (easy chase battle)",
              "3. Catch him for 100,000 yen, or collect dropped money for 40k back + 60k profit",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 78,
            chapter: 6,
            name: "Anything for Grandma's Love",
            location: "Suppon St.",
            reward: "Sushi Set, 110,000 yen (net +10,000 profit)",
            requirements: "Complete 'Cat Watcher'",
            guide: [
              "1. Punk stops you on Suppon St., asks to pretend to work for him",
              "2. When granny shows up:",
              " • Select 'We try not to use A/C'",
              " • For tour: 'It's off-limits due to an accident'",
              "3. Loan shark shows up, select 'Pay the 100,000 yen'",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 79,
            chapter: 5,
            name: "Lasagna at Large",
            location:
              "Shichifuku (east of Children's Park) → Tenkaichi St./Tenkaichi Alley",
            reward: "30,000 yen",
            requirements: "Complete 'Kiryu the Collector'",
            guide: [
              "1. Find lady in dress looking for cat Lasagna east of Children's Park",
              "2. Agree to help",
              "3. Buy Catnip Stick from Poppo on Tenkaichi St.",
              "4. Find cat outside blue-walled restaurant on Tenkaichi St. where it meets Tenkaichi Alley",
              "5. Use Catnip on cat, bring it back to owner",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 80,
            chapter: 9,
            name: "Your Fortunes Told Here",
            location: "Pink Street (south of Club Shine) → Club SEGA Nakamichi",
            reward:
              "120,000 yen back OR Fortune-teller's Crystal Ball (sells for 200,000 yen)",
            requirements: "None",
            guide: [
              "1. Find fortune-teller with line south of Club Shine on Pink Street",
              "2. Skip line, talk to her, agree to pay 120,000 yen",
              "3. Get fortune read",
              "4. Woman stops you south, mentions swindling",
              "5. Find ladies outside Club SEGA on Nakamichi",
              "6. Return to teller, see her pay off plants",
              "7. Defeat her sons",
              "8. Choice: Tell ladies where she is (get 120k back) OR keep silent (get Crystal Ball later)",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 81,
            chapter: 7,
            name: "Watch Out for Renovations",
            location: "New Serena",
            reward: "50,000 yen",
            requirements: "Complete 'Convenient Robbery'",
            guide: [
              "1. Find old man in front of New Serena",
              "2. Enter New Serena, mama asks you to mind the bar",
              "3. Dudes from renovation company show up, offer inspection",
              "4. Refuse them three times",
              "5. They get indignant, defeat them",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 82,
            chapter: 4,
            name: "A Lost Key",
            location: "Coin Lockers (Ryukyu)",
            reward: "Key",
            requirements: "None",
            guide: [
              "1. Find woman searching for dropped key in front of Coin Lockers",
              "2. Use first-person mode (R1/RB), look above on second sky-bridge",
              "3. Find key, she gives it to you",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 83,
            chapter: 5,
            name: "Death Bowler",
            location: "Mach Bowl",
            reward: "Bento Lunch Set (Pork)",
            requirements: "Bowling score over 200, SAVE BEFORE STARTING",
            guide: [
              "1. Achieve over 200 bowling score",
              "2. 'Death Bowler' challenges you",
              "3. Beat him in a three-frame game",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 84,
            chapter: 5,
            name: "Last Month's Winner",
            location: "Poppo Nakamichi",
            reward: "10,000 yen",
            requirements: "Complete 'Missed Caller'",
            guide: [
              "1. Find cowering man in Poppo Nakamichi",
              "2. He attacks, then asks you to be bodyguard for lottery ticket",
              "3. Agree to be bodyguard (do not ask to see ticket)",
              "4. Take him to taxi, leave and return, he's still there",
              "5. Ticket is fake, he gives 10,000 yen",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 85,
            chapter: 6,
            name: "Kiryu the Pickpocket!?",
            location: "Near Matsuya (SE of Millennium Tower)",
            reward: "Experience",
            requirements: "Complete 'Last Month's Winner'",
            guide: [
              "1. Woman in yellow jacket collides with you near Matsuya",
              "2. She accuses you, find strange wallet in your inventory",
              "3. Use wallet to give back, she remains accusatory",
              "4. Punks show up, defeat them",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 86,
            chapter: 4,
            name: "A Melting Heart",
            location: "Corner of Ryukyu and Kitaryu → M Store",
            reward: "Six-Scoop Ice Cream",
            requirements: "Complete 'Fast Food for the Heart'",
            guide: [
              "1. Find dude with two ice cream cones on corner of Ryukyu/Kitaryu",
              "2. Agree to carry two more cones",
              "3. Walk slowly to M Store without colliding with cars or pedestrians",
              "4. If fail, pay 1200 yen for replacements or give up",
              "5. Reach family",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 87,
            chapter: 3,
            name: "As the Rose Balsam Blooms",
            location: "Monorail Station",
            reward: "Sata Andagi",
            requirements: "Complete some nearby substories",
            guide: [
              "1. Find dude in fancy getup playing sanshin outside Monorail Station",
              "2. Kiryu steps in, beat up bad guys",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 88,
            chapter: 4,
            name: "Presidential Golfer",
            location: "Golf Course",
            reward:
              "30,000 yen (lose), 50,000 yen (tie), 100,000 yen + Staminan Spark (win)",
            requirements:
              "Daytime, SAVE BEFORE STARTING, must have shot par (±0) previously",
            guide: [
              "1. Find company president and subordinate at Golf Course",
              "2. Subordinate asks you to play his boss",
              "3. Play three holes. President shoots -1.",
              "4. Win for best reward (100,000 yen + Staminan Spark)",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 89,
            chapter: 5,
            name: "Water Purifiers",
            location: "East from Dragon Palace",
            reward: "50,000 yen",
            requirements: "Complete 'Return to the Dragon Palace'",
            guide: [
              "1. Get text about water purifiers after completing Dragon Palace substory",
              "2. Find guy in yellow jacket east of Dragon Palace",
              "3. Agree to be led inside, get pitch",
              "4. Refuse to pay both times",
              "5. Defeat scam artists",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 90,
            chapter: 6,
            name: "Ramen No. 1 Star",
            location: "Kyushu No. 1 Star",
            reward: "20,000 yen (if all correct)",
            requirements: "Complete 'Appetizer'",
            guide: [
              "1. Owner is shorthanded, offer to help take orders:",
              " • Chashu Tonkotsu Ramen",
              " • Mentaiko Tonkotsu Ramen",
              " • Large Kyushu Tonkotsu Ramen",
              " • Double Stewed Tonkotsu Ramen",
              " • Kyushu Tonkotsu Ramen",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 91,
            chapter: 7,
            name: "Queen of Kamurocho",
            location:
              "East end of Shichifuku → Park Alley → Kamiyama Works alley → North street → Taxi",
            reward: "100,000 yen, Italian Perfume",
            requirements: "Complete 'Mr. Try and Catch Me'",
            guide: [
              "1. Find guy in glasses at east end of Shichifuku",
              "2. Agree to be discreet, he introduces Makiko Takahashi",
              "3. Stop paparazzi while Makiko walks:",
              " • First: Across the street",
              " • Second: Right up Park Alley, in doorway to right",
              " • Third: Left up the street, in alley where Kamiyama Works is",
              " • Fourth: North end of street, left of blue tarp shelter",
              " • Fifth: Walking near taxi, black cap, no camera up",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 92,
            chapter: 7,
            name: "Convenient Robbery",
            location: "Park Blvd → M Store Shichifuku → Children's Park",
            reward: "30,000 yen",
            requirements: "Complete 'The Returnee'",
            guide: [
              "1. Find dude in black on Park Blvd west of West Park",
              "2. He mumbles about M Store on Shichifuku, then takes off",
              "3. Go to M Store, walk all the way in, dude shows up with ski mask and pliers",
              "4. He flees, agree to chase",
              "5. Talk to guy in black and glasses on street corner, tell him 'black jacket'",
              "6. Go to Children's Park, find the guy, beat him down",
              "7. Girlfriend shows up, 'Urge Him to Turn Himself In'",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 93,
            chapter: 3,
            name: "Deliver Race",
            location:
              "Waraba Okinawan Soba stall → Maeda Pharmacy → Mahjong Camp → Ryukyu Nights info center",
            reward: "10,000 yen",
            requirements: "Visit the soba stall twice first",
            guide: [
              "1. Visit Waraba Okinawan Soba stall a third time",
              "2. Lady is admonishing delivery guy, offer to deliver",
              "3. You have five minutes to deliver three orders:",
              " • Maeda Pharmacy",
              " • Mahjong Camp (up north)",
              " • Ryukyu Nights info center (northwest)",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 94,
            chapter: 5,
            name: "High-Tech Peeping Tom",
            location: "Corner of Senryo and Taihei → Lot E of Millennium Tower",
            reward: "50,000 yen",
            requirements: "Complete 'Mr. Try and Hit Me Again'",
            guide: [
              "1. Find woman in shades and purple dress at corner of Senryo/Taihei",
              "2. Agree to hear her out, taken to lot east of Millennium Tower",
              "3. Use First-Person mode to find peepers (can't leave area):",
              " • Hanging from ledge in front of you (red underwear)",
              " • On roof to northeast",
              " • On roof to southwest (woman in skirt)",
              " • On roof to northwest (woman yelling at cat)",
              " • Clinging to wall to the west (wearing gray)",
              "4. Beat up the Peeper",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 95,
            chapter: 6,
            name: "Bouncers Needed",
            location: "Dragon Palace Casino",
            reward: "500,000 yen",
            requirements:
              "Complete 'Return to the Dragon Palace', visit Komaki dojo, likely separated from Rikiya",
            guide: [
              "1. See ruffians hustle casino manager at Dragon Palace",
              "2. Manager asks Kiryu to find bouncers",
              "3. MUST COMPLETE ALL FIVE BOUNCER SUBSTORIES (#96-#100)",
              "4. Return to casino after completing all five",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 96,
            chapter: 6,
            name: "The First Bouncer",
            location: "Champion District (NW corner)",
            reward: "Bouncer hired",
            requirements: "Complete 'Bouncers Needed' trigger",
            guide: [
              "1. Find 'Violence Tobita' passed out in NW corner of Champion District",
              "2. Wake him up, beat him up",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 97,
            chapter: 6,
            name: "The Second Bouncer",
            location: "East Shichifuku (west of Kanrai)",
            reward: "Bouncer hired",
            requirements: "Complete 'The First Bouncer'",
            guide: [
              "1. Get text from manager, find Iwakuma on East Shichifuku marked spot",
              "2. He is a heavy sumo fighter, defeat him",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 98,
            chapter: 7,
            name: "The Third Bouncer",
            location: "Back lot in Tenkaichi Alley",
            reward: "Bouncer hired",
            requirements: "Complete 'The Second Bouncer'",
            guide: [
              "1. Get text, find guy in marked back lot in Tenkaichi Alley",
              "2. He sneaks up, answer 'Kiryu. Kazuma Kiryu.'",
              "3. His name is Nanba, yakuza catch up, defeat them",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 99,
            chapter: 7,
            name: "The Fourth Bouncer",
            location: "Asia (bikini bar) → nearby lot",
            reward: "Bouncer hired",
            requirements: "Complete 'The Third Bouncer'",
            guide: [
              "1. Get text about weapons enthusiast at Asia",
              "2. Find marked spot near Asia, speak to guy outside to enter",
              "3. Talk to man at door, then man in pink crouched on ground",
              "4. Fight him in nearby lot (he uses Stun Gun)",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 100,
            chapter: 9,
            name: "The Fifth Bouncer",
            location: "Men's Entertainment Booth on Shichifuku",
            reward: "Rage Bracelet, Bouncer hired",
            requirements: "Complete 'The Fourth Bouncer'",
            guide: [
              "1. Get final text, find 'Gatling Sendo' at Men's Entertainment Booth on Shichifuku",
              "2. He walks in, speak to him, try to recruit, he refuses",
              "3. Speak again, fight him, defeat him",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 101,
            chapter: 4,
            name: "New Dog, New Tricks: Sit",
            location: "Morning Glory Orphanage yard",
            reward: "Experience",
            requirements:
              "Complete 'Morning Glory Hide-and-Seek', after baseball, Haruka not with you",
            guide: [
              "1. Find Izumi and Mame in the yard",
              "2. Tell Mame to sit, give treat when successful",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 102,
            chapter: 4,
            name: "New Dog, New Tricks: Turn Around",
            location: "Morning Glory Orphanage yard",
            reward: "Experience",
            requirements: "Complete 'New Dog, New Tricks: Sit'",
            guide: [
              "1. Speak to Izumi again",
              "2. Tell Mame to turn around, give treat if successful",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 103,
            chapter: 4,
            name: "New Dog, New Tricks: Fetch",
            location: "Morning Glory Orphanage yard",
            reward: "Staminan Spark",
            requirements: "Complete 'New Dog, New Tricks: Turn Around'",
            guide: [
              "1. Speak to Izumi again",
              "2. Tell Mame to fetch, give treat if successful",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 104,
            chapter: 4,
            name: "Let's Learn English 1",
            location: "East of Monorail Station → South down street",
            reward: "Experience",
            requirements: "None",
            guide: [
              "1. Find woman in suit east of Monorail Station",
              "2. She gives you an English Textbook",
              "3. Go south, find lady crouched by sidewalk (English font)",
              "4. Say 'Do you need help?'",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 105,
            chapter: 4,
            name: "Let's Learn English 2",
            location: "Bridge → Kariyushi Arcade (Boba stand)",
            reward: "Italian Wallet",
            requirements: "Complete 'Let's Learn English 1'",
            guide: [
              "1. Return to woman near bridge, buy 'Beginner's Handbook' for 10,000 yen",
              "2. Go to Kariyushi Arcade, find woman near Boba stand",
              "3. Say 'It's straight this way.'",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 106,
            chapter: 10,
            name: "Let's Learn English 3",
            location: "North of Ebisu Pawn → Aqua Sky",
            reward: "Italian Necklace",
            requirements: "Complete 'Lost and Found'",
            guide: [
              "1. Return to lady north of Ebisu Pawn, buy English textbook for 20,000 yen",
              "2. Find 'Stacy' at Aqua Sky",
              "3. Say 'I don't deserve your love.'",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 107,
            chapter: 10,
            name: "Let's Learn English 4",
            location: "North of Ebisu Pawn → NE of main crossroads",
            reward:
              "150,000 yen, Italian Ring (if all responses correct to Stacy)",
            requirements: "Complete 'Yamashita Treasure Hunt'",
            guide: [
              "1. Return to lady north of Ebisu Pawn, buy dating textbook for 55,000 yen",
              "2. Find Stacy northeast of main crossroads south of Ebisu Pawn",
              "3. Say 'Yes, please!'",
              "4. Refuse the offer that follows, fight three guys",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 108,
            chapter: 12,
            name: "Amon",
            location:
              "HLA Kamuro Castle → Minamida's spot → Mountainside Coliseum (via taxi)",
            reward: "Substory Completion Reward",
            requirements:
              "Complete ALL 119 other Substories, ALL Hitman Missions, ALL Minamida training, must be nighttime",
            guide: [
              "1. Talk to Ibuki at HLA Kamuro Castle",
              "2. Go talk to Minamida at his spot",
              "3. Amon challenges you, gives destination",
              "4. PREPARE: Best armor, Staminan Sparks, abilities like Tiger Drop",
              "5. Take taxi to 'Mountainside Coliseum'",
              "6. Fight Amon in three waves:",
              " • Wave 1: Dual Photon Blades (unblockable, use Tiger Drop during left-right combo)",
              " • Wave 2: Dual Pistols (like Arase, attack from behind, avoid cannonballs)",
              " • Wave 3: Pistols + Melee (rotating kicks, use Tiger Drop counter)",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 109,
            chapter: 3,
            name: "Straight to the Top!",
            location: "South Island cabaret club (south Hatsumachi)",
            reward: "100,000 yen (for completing one hostess)",
            requirements: "None",
            guide: [
              "1. Find guy in tux vest in front of South Island club (south Hatsumachi)",
              "2. He asks to train a new hostess to become #1",
              "3. Part of Hostess Maker minigame, only need to complete one hostess for substory",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 110,
            chapter: 5,
            name: "Reimi Betrayed",
            location: "Shine (Kamurocho)",
            reward: "Experience",
            requirements:
              "Substory for spending time with Reimi Hanayama (must complete other 9 hostesses first)",
            guide: [
              "Complete by spending time with Reimi Hanayama at Shine",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 111,
            chapter: 5,
            name: "Rin in Trouble",
            location: "Shine (Kamurocho)",
            reward: "Experience",
            requirements: "Substory for spending time with Rin Sasaba",
            guide: ["Complete by spending time with Rin Sasaba at Shine"].join(
              "\n"
            ),
            videoId: "",
          },
          {
            index: 112,
            chapter: 5,
            name: "Kana and Her Dog",
            location: "Shine (Kamurocho)",
            reward: "Experience",
            requirements: "Substory for spending time with Kana Momonogi",
            guide: [
              "Complete by spending time with Kana Momonogi at Shine",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 113,
            chapter: 5,
            name: "Ranko's Worry",
            location: "Shine (Kamurocho)",
            reward: "Experience",
            requirements: "Substory for spending time with Ranko Yazuki",
            guide: [
              "Complete by spending time with Ranko Yazuki at Shine",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 114,
            chapter: 5,
            name: "Miyu and her Son",
            location: "Jewel (Kamurocho)",
            reward: "Experience",
            requirements: "Substory for spending time with Miyu Shiraboshi",
            guide: [
              "Complete by spending time with Miyu Shiraboshi at Jewel",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 115,
            chapter: 5,
            name: "Shiori's Stalker",
            location: "Jewel (Kamurocho)",
            reward: "Experience",
            requirements: "Substory for spending time with Shiori Nagamori",
            guide: [
              "Complete by spending time with Shiori Nagamori at Jewel",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 116,
            chapter: 5,
            name: "Yui and Adam",
            location: "Jewel (Kamurocho)",
            reward: "Experience",
            requirements: "Substory for spending time with Yui Hatano",
            guide: ["Complete by spending time with Yui Hatano at Jewel"].join(
              "\n"
            ),
            videoId: "",
          },
          {
            index: 117,
            chapter: 3,
            name: "Mika's Family",
            location: "Flawless (Ryukyu)",
            reward: "Experience",
            requirements: "Substory for spending time with Mika Tsuchiya",
            guide: [
              "Complete by spending time with Mika Tsuchiya at Flawless",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 118,
            chapter: 3,
            name: "Nao and the Crooks",
            location: "Flawless (Ryukyu)",
            reward: "Experience",
            requirements: "Substory for spending time with Nao Kaneshiro",
            guide: [
              "Complete by spending time with Nao Kaneshiro at Flawless",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 119,
            chapter: 3,
            name: "Saya in Peril",
            location: "Flawless (Ryukyu)",
            reward: "Experience",
            requirements: "Substory for spending time with Saya Unten",
            guide: [
              "Complete by spending time with Saya Unten at Flawless",
            ].join("\n"),
            videoId: "",
          },
        ],
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
            location:
              "Sotenbori: Shofukucho (SE corner) → Sotenbori Theater → Club Heavenly",
            reward: "Completes Request",
            requirements: "Obtain Hornet Gadget",
            guide: [
              "1. Investigate Namioka Family activity in Shofukucho (SE corner)",
              "2. Lose target, head to Sotenbori Theater (choose any option)",
              "3. Investigate final spot near Club Heavenly",
            ].join("\n"),
            videoId: "",
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
              "3. Defeat boss with a knife",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 3,
            rank: "No Rank",
            name: "Vanquish the Red Peacocks",
            location:
              "Sotenbori: West Shofukucho Parking Lot → Various locations",
            reward: "Completes Request",
            requirements: "Obtain Hornet Gadget",
            guide: [
              "1. Defeat 4 gang members (1 mini-boss) in West Shofukucho parking lot",
              "2. Defeat 6 gang members (1 mini-boss) on Sotenbori Footpath",
              "3. Defeat 4 gang members (1 boss) in East Shofukucho",
              "4. Defeat 4 gang members (1 boss) southeast near Akame's",
              "5. Defeat leader + 7 members in southwest Shofukucho parking lot",
            ].join("\n"),
            videoId: "",
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
              "3. Report back to Akame",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 5,
            rank: "Silver",
            name: "A Simple Heavy-Lifting Job",
            location:
              "Sotenbori: Wild Jackson → Bishamon Bridge → Office Building → Ashitaba Park",
            reward: "Completes Request",
            requirements: "Reach Silver Rank",
            guide: [
              "1. Meet Matsumura at Wild Jackson",
              "2. Speak to homeless man under south side of Bishamon Bridge",
              "3. Go to office building between Bar New Momoko and Kiss Shot",
              "4. Defeat 2 yakuza inside",
              "5. Defeat 5 yakuza + boss at Ashitaba Park",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 6,
            rank: "Silver",
            name: "Ghost of Sotenbori",
            location:
              "Sotenbori: East Sotenbori St. → South Shofukucho → Ashitaba Park",
            reward: "Completes Request",
            requirements: "Reach Silver Rank",
            guide: [
              "1. Defeat 3 yakuza + mini-boss at east end of Sotenbori St.",
              "2. Defeat 1 enemy in middle of South Shofukucho",
              "3. Enter door near north end of Ashitaba Park",
              "4. Defeat 5 yakuza + boss (3 health bars)",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 7,
            rank: "Silver",
            name: "Seeking Advice",
            location:
              "Sotenbori: Smile Burger → Iwao Bridge → Ganko Sushi → River Footpath",
            reward: "Completes Request",
            requirements: "Reach Silver Rank",
            guide: [
              "1. Talk to young person at Smile Burger",
              "2. Find him near west edge of Iwao Bridge",
              "3. Follow to Ganko Sushi, defeat nearby enemy",
              "4. Chase to north side of river footpath",
              "5. Defeat weak enemy",
            ].join("\n"),
            videoId: "",
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
              "3. Defeat him in combat",
            ].join("\n"),
            videoId: "",
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
              "3. Defeat Tobashira",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 10,
            rank: "Silver",
            name: "Save the Pro Wrestler",
            location:
              "Sotenbori: River Footpath (under Iwao Bridge) → Various locations",
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
              "3. Return and defeat the wrestler",
            ].join("\n"),
            videoId: "",
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
              "4. Return to rapper, defeat 4 enemies including boss",
            ].join("\n"),
            videoId: "",
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
              "4. Return and defeat Renji",
            ].join("\n"),
            videoId: "",
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
              "5. Defeat foreman + 5 lackeys",
            ].join("\n"),
            videoId: "",
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
              "2. Defeat 16 Red Peacocks including their leader",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 15,
            rank: "Silver",
            name: "Vanquish the White Knights",
            location:
              "Sotenbori: Hiratai → Various locations → East Sotenbori St.",
            reward: "Completes Request",
            requirements: "Complete 'Final Showdown: Red Peacocks'",
            guide: [
              "1. Defeat 4 White Knights (1 mini-boss) at Hiratai on Sotenbori Footpath",
              "2. Defeat 3 White Knights (1 mini-boss) at Bunzameon Outdoor Mall",
              "3. Defeat 3 White Knights (1 mini-boss) in Central Shofukucho",
              "4. Defeat 4 White Knights (1 mini-boss) in South Shofukucho",
              "5. Defeat boss + 4 members on east side of Sotenbori St.",
            ].join("\n"),
            videoId: "",
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
              "2. Defeat 15 White Knights including their leader (4 health bars)",
            ].join("\n"),
            videoId: "",
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
              "2. Defeat him (4 health bars, uses sword)",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 18,
            rank: "Silver",
            name: "Reach Gold Tier",
            location: "Akame's Hideout",
            reward: "Advances Akame Network Rank",
            requirements:
              "Reach Akame Network Rank 10 + Win 3 Silver Rank Coliseum fights",
            guide: [
              "1. Reach Akame Network Rank 10",
              "2. Win 3 Silver Rank fights in Coliseum",
              "3. Report back to Akame",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 19,
            rank: "Gold",
            name: "End the Destruction",
            location:
              "Sotenbori: Shofukucho Construction Site → West → SE of Bishamon Bridge",
            reward: "Masaharu Kaito and Toru Higashi assist Joryu Clan",
            requirements: "Reach Gold Rank",
            guide: [
              "1. Defeat 'gorilla man' at Shofukucho construction site (2 health bars)",
              "2. Talk to homeless guy west of construction site",
              "3. Defeat 4 thugs",
              "4. Defeat detective (5 health bars)",
              "5. Go to door southeast of Bishamon Bridge",
              "6. Defeat 9 enemies including boss (with 2 allies)",
            ].join("\n"),
            videoId: "",
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
              " • 'Sexy panties' = Shen-san's Panties (sell for ¥1,500,000)",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 21,
            rank: "Gold",
            name: "Vanquish the Black Swallowtails",
            location:
              "Sotenbori: Near Coin Lockers → Various locations → Yotsudera Kaikan",
            reward: "Completes Request",
            requirements: "Complete 'Final Showdown: White Knights'",
            guide: [
              "1. Defeat 5 Black Swallowtails (1 boss with katana) near Coin Lockers",
              "2. Defeat 4 Black Swallowtails (1 boss with katana) near Riichi Towers Mahjong",
              "3. Defeat 4 Black Swallowtails (1 boss with hammer) near Kushikatsu Daruma",
              "4. Defeat 5 Black Swallowtails (1 boss, most have pistols) near Shigano Cigarettes",
              "5. Defeat 7 Black Swallowtails (armed with various weapons) on 2nd floor of Yotsudera Kaikan",
            ].join("\n"),
            videoId: "",
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
              "2. Defeat 16 Black Swallowtails including their leader",
            ].join("\n"),
            videoId: "",
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
              "2. Defeat him (5 health bars, increased attack power)",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 24,
            rank: "Gold",
            name: "Reach Platinum Tier",
            location: "Akame's Hideout",
            reward: "Advances Akame Network Rank",
            requirements:
              "Reach Akame Network Rank 20 + Win 3 Gold Rank Coliseum fights",
            guide: [
              "1. Reach Akame Network Rank 20",
              "2. Win 3 Gold Rank fights in Coliseum",
              "3. Report back to Akame",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 25,
            rank: "Gold",
            name: "Friends in Special Places",
            location: "Various bars in Sotenbori",
            reward: "Strengthens bond with Akame",
            requirements:
              "Reach Gold Rank + Akame Network Levels 13, 16, and 19",
            guide: [
              "1. Reach Akame Network Level 13, 16, and 19",
              "2. Accept drink offers from Akame each time",
              "3. On fourth outing, defeat 5 enemies including a boss",
            ].join("\n"),
            videoId: "",
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
              "2. Defeat Golden Samurai (6 health bars, enhanced armor and blocking)",
            ].join("\n"),
            videoId: "",
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
              "2. Defeat Dan Brody (uses knife, drones, and flash grenades)",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 28,
            rank: "Coliseum",
            name: "King Dan Brody",
            location: "Castle: Coliseum",
            reward: "Progresses Coliseum story",
            requirements:
              "Reach Platinum Coliseum Rank + Complete 'The Four Kings of the Coliseum'",
            guide: [
              "1. Reach Platinum Rank in Coliseum",
              "2. Challenge Dan Brody in Hell Team Rumble",
              "3. Defeat 4 teen punks + Dan Brody (approx. 15 health bars) within 3 minutes",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 29,
            rank: "Coliseum",
            name: "Mizorogi's Big Dreams",
            location: "Akame's Hideout",
            reward: "Unlocks 'Heat Action: Daidoji Martial Mastery' upgrade",
            requirements:
              "Defeat first Coliseum King + Upgrade all Gadgets to Level 5",
            guide: [
              "1. Upgrade all Gadgets to Level 5",
              "2. Return to Mizorogi at Akame's Hideout",
              "3. Purchase the new Heat Action upgrade",
            ].join("\n"),
            videoId: "",
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
              "2. Defeat him (uses dual pistols and Serpent shoes)",
            ].join("\n"),
            videoId: "",
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
              "3. JUSTICE uses laser beam and has healing ability",
            ].join("\n"),
            videoId: "",
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
              "2. Defeat him (uses Spider wire, Hornets, has 6 health bars)",
            ].join("\n"),
            videoId: "",
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
              "3. Defeat 8 yakuza + boss (uses Hornet drones)",
            ].join("\n"),
            videoId: "",
          },
          {
            index: 34,
            rank: "Coliseum",
            name: "Path to the Strongest",
            location: "Castle: Coliseum → Helipad",
            reward: "War God Talisman",
            requirements:
              "Complete Minamida Grand Prix (all Coliseum fights and substories)",
            guide: [
              "Part 1 - Hell Team Rumble:",
              "1. Defeat 10 silver bots + Tetsu Amon (gold bot)",
              "2. Use Agent Style, Extreme Heat strategy",
              "Part 2 - Gai Amon:",
              "1. Defeat Gai Amon on helipad",
              "2. Counter his attacks: Hornet heart (summon your own), explosive discs, Spider Wire, explosives, knives, caltrops, drones",
              "3. Final phase (4 health bars): He heals when hitting you, use Tiger Drop and Heat Actions",
            ].join("\n"),
            videoId: "",
          },
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
  "Judgment": {
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
        substories:  [
          {
            "index": 1,
            "chapter": 3,
            "name": "Nichibuza's Newest Fan",
            "location": "Nichibuza Dance School (Rakunai)",
            "reward": "Unlocks Buyo Dancing minigame",
            "requirements": "Available in Chapter 3",
            "guide": [
              "1. Witness encounter outside dance school gate",
              "2. Defeat 4 guys",
              "3. Complete first trial dance"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 2,
            "chapter": 3,
            "name": "Deceitful Deity",
            "location": "South of Ginryu's Dojo → Shijo Street → Teramachi",
            "reward": "No reward",
            "requirements": "Must have spoken to Ginryu first",
            "guide": [
              "1. Speak to doshin south of dojo",
              "2. Find old woman praying near Kamatora restaurant",
              "3. Go to alley south of Hanamaru Udon in Teramachi",
              "4. Defeat con artist"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 3,
            "chapter": 3,
            "name": "Who's Entertaining Who?",
            "location": "South of Ebisu Pawn Rakunai → Watami → Singing Bar → Buyo Dance",
            "reward": "Ancient Amulet (best performance)",
            "requirements": "Must have visited Singing Bar and Buyo Dance at least once",
            "guide": [
              "1. Speak to lady innkeeper south of Ebisu Pawn",
              "2. Find Kanda-sensei at Watami on Shijo Street",
              "3. Perform Iji Sakura at Singing Bar",
              "4. Comment 'It was bold and virile'",
              "5. Perform Samurai Enbu on Normal at Buyo Dance",
              "6. Comment 'it's bold yet elegant'",
              "7. Defeat 4 bad guys"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 4,
            "chapter": 3,
            "name": "I'll Miss You, Miho",
            "location": "Nichibuza Dance School → Shrine → Chase sequence",
            "reward": "Rainbow Fabric",
            "requirements": "Available in Chapter 3",
            "guide": [
              "1. Get bumped by kid near dance school",
              "2. Speak to Miho alone",
              "3. Find Shinta-kun at Shrine to west",
              "4. Tell him 'Thank you for your friendship' then 'You're important to her'",
              "5. Return to Miho, chase palanquin",
              "6. Press Grab button when close"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 5,
            "chapter": 3,
            "name": "Talkin' Tosa",
            "location": "Northeast corner of Rakunai",
            "reward": "Phoenix Feather (all correct)",
            "requirements": "Available in Chapter 3",
            "guide": [
              "1. Speak to mopey guy in corner",
              "2. First letter answers: 'It's been a while', 'I', 'She means \"you\"' (Fine Silk Fabric)",
              "3. Leave and return for second letter",
              "4. Second letter answers: 'She means \"is that every day\"?', 'Her heart aches', 'Meet soon' (Platinum Chunk)",
              "5. Final letter answers: 'Stumble and fall', 'Cowardly men', 'Tell her how you feel' (Phoenix Feather)"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 6,
            "chapter": 3,
            "name": "The Mochi Mystery",
            "location": "North of Kurogane Smithing",
            "reward": "Godslayer's Talisman",
            "requirements": "Available in Chapter 3",
            "guide": [
              "1. Approach group of people in corner",
              "2. Question all suspects:",
              " • Higashihara: 'I saw Kitajima do it'",
              " • Nishiyama: 'Higashihara and Minamino had keys'",
              " • Nakagawa: 'I was with Nishiyama. Minamino had filling'",
              " • Minamino: 'Nishiyama did it'",
              " • Kitajima: 'Either Nakagawa or Minamino did it, but not both'",
              "3. Guilty parties are Higashihara and Minamino"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 7,
            "chapter": 3,
            "name": "Ee Ja Nai For Justice",
            "location": "West of Shogi parlor",
            "reward": "Tranquil Towel",
            "requirements": "Must complete Substory #22 first",
            "guide": [
              "1. Find dancers west of Shogi parlor",
              "2. Intervene when official tries to remove them",
              "3. Defeat 3 swordsmen"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 8,
            "chapter": 5,
            "name": "The Unwilling Courier",
            "location": "Bridge to Gion",
            "reward": "Gold Seal",
            "requirements": "Available from chapter start",
            "guide": [
              "1. Collide with courier on bridge to Gion",
              "2. Deliver 6 marked letters in time",
              "3. Use dash button for speed"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 9,
            "chapter": 5,
            "name": "Enter the Black Panther Couriers",
            "location": "Bridge to Gion",
            "reward": "Courier race completion",
            "requirements": "Complete Substory #8",
            "guide": [
              "1. Return to bridge after Substory #8",
              "2. Race to deliver 10 letters against Hoshi",
              "3. Upgrade Sprint at Shrine recommended"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 10,
            "chapter": 5,
            "name": "The Panthers' Leading Man",
            "location": "Gate west of Sushi Zanmai",
            "reward": "Courier race completion",
            "requirements": "Must have spoken to Yamazaki",
            "guide": [
              "1. Find Kiyokawa at gate west of Sushi Zanmai",
              "2. Race to deliver 12 letters"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 11,
            "chapter": 3,
            "name": "Global Fraud",
            "location": "Teramachi neighborhood (Rakunai)",
            "reward": "European Fabric (all correct)",
            "requirements": "Available in Chapter 3",
            "guide": [
              "1. Find school teacher in Teramachi",
              "2. Answer geography questions:",
              " • First: 'Japan'",
              " • Second: 'The Great Qing'",
              " • Third: '4'"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 12,
            "chapter": 5,
            "name": "The Hungry Sumo Wrestler",
            "location": "East of Shogi Parlor (Rakunai)",
            "reward": "Starts Friendship",
            "requirements": "Available in Chapter 5",
            "guide": [
              "1. Find fallen man east of Shogi Parlor",
              "2. Give him food to begin Friendship"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 13,
            "chapter": 4,
            "name": "The Love-Starved Husband",
            "location": "Kamo River coast (Rakunai)",
            "reward": "Starts Friendship",
            "requirements": "Must have started Another Life with Haruka",
            "guide": [
              "1. Find man gazing at water between bridges",
              "2. Bring meal cooked from farm",
              "3. Choose to enjoy it with him"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 14,
            "chapter": 4,
            "name": "The Oblivious Woman",
            "location": "Next to Palanquin (Rakunai)",
            "reward": "Starts Friendship",
            "requirements": "Must have started Another Life with Haruka",
            "guide": [
              "1. Find woman who lost her purse",
              "2. Give her vegetables grown on farm"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 15,
            "chapter": 3,
            "name": "The Injured Grandma",
            "location": "East of Gambling Den → riverside",
            "reward": "Starts Friendship",
            "requirements": "Available in Chapter 3",
            "guide": [
              "1. Find old woman by riverside",
              "2. Offer to help escort her home"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 16,
            "chapter": 4,
            "name": "The Barking Dog",
            "location": "Southwest of Ebisu Pawn (Rakunai)",
            "reward": "Starts Friendship",
            "requirements": "Must have started Another Life with Haruka",
            "guide": [
              "1. Find barking dog southwest of Ebisu Pawn",
              "2. Give him a Bone (sold at Ebisu Pawn)"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 17,
            "chapter": 4,
            "name": "The Lucky Cat",
            "location": "North of Ginryu's Dojo",
            "reward": "Starts Friendship",
            "requirements": "Must have started Another Life with Haruka",
            "guide": [
              "1. Find man praying to cat north of dojo",
              "2. Speak to cat and give 1000 mon"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 18,
            "chapter": 3,
            "name": "The Reclusive Son",
            "location": "North of William Bradley's training ground",
            "reward": "Rainbow Shard (best outcome)",
            "requirements": "Available in Chapter 3",
            "guide": [
              "1. Witness mother/son argument",
              "2. Speak to mother after son runs off",
              "3. Talk to son inside house",
              "4. Choose: 'ask what he does all day', 'make a personal connection', 'boost his self-confidence'",
              "5. Defeat 5 ruffians outside"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 19,
            "chapter": 6,
            "name": "Palanquin Paladin",
            "location": "South of Chicken Races (Rakugai)",
            "reward": "Crimson Bead",
            "requirements": "Available from chapter start",
            "guide": [
              "1. Approach old man and palanquin",
              "2. Protect palanquin while moving to eastern bridge",
              "3. Defeat ~15 enemies along the way",
              "4. Defeat leader at end"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 20,
            "chapter": 7,
            "name": "Can I Quote You On That?",
            "location": "Northwest of Scarecrow Chateau → Barracks",
            "reward": "Eye of the Dragon (best answers)",
            "requirements": "Must have received orders at Barracks",
            "guide": [
              "1. Find kawaraban vendor northwest of Scarecrow Chateau",
              "2. Defend against ronin",
              "3. Meet vendor at Barracks entrance for interview",
              "4. Answers: 'It's my duty, nothing more', 'Better have a will ready', 'Someone I get along with', 'It's a place for true warriors', 'Maintain your innocence'"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 21,
            "chapter": 3,
            "name": "Sonno Joui",
            "location": "South of Kurogane Smithing → Mukurogai",
            "reward": "No reward",
            "requirements": "Available in Chapter 3",
            "guide": [
              "1. Listen to blond-haired man in Umekojicho",
              "2. Follow him to bridge at north end of Mukurogai",
              "3. Defeat 4 Kakumei Joui thugs",
              "4. Find man on east side of Mukurogai second level",
              "5. Defeat 5 more bad guys"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 22,
            "chapter": 3,
            "name": "Ee Ja Not Ka",
            "location": "Northwest of Jizo Statue (Sannocho, Rakugai)",
            "reward": "Vermilion Fabric",
            "requirements": "Must complete Substory #47 first",
            "guide": [
              "1. Find dancers northwest of Jizo Statue",
              "2. Approach after they knock over old lady",
              "3. Defeat 6 varied foes"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 23,
            "chapter": 6,
            "name": "Bluffin' Up the Wrong Alley",
            "location": "Gambling Den → Mukurogai",
            "reward": "Substory completion",
            "requirements": "Must be wearing Shinsengumi haori",
            "guide": [
              "1. Witness jerks accosting man at Gambling Den",
              "2. Return later to find gambler with info",
              "3. Go to Mukurogai north gate",
              "4. Follow gambler to fight",
              "5. Defeat 5 ronin"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 24,
            "chapter": 5,
            "name": "The Panthers' Playmaker",
            "location": "Farmhouse → Bridge in Rakugai",
            "reward": "Courier race completion",
            "requirements": "Complete Substory #10",
            "guide": [
              "1. Return to farmhouse for challenge letter",
              "2. Meet Inamoto at bridge in Rakugai",
              "3. Race to deliver 12 letters in Rakugai"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 25,
            "chapter": 3,
            "name": "The Sword Nut",
            "location": "East of bridge to Mukurogai (Rakugai)",
            "reward": "Starts Friendship",
            "requirements": "Available in Chapter 3",
            "guide": [
              "1. Find portly fellow east of bridge",
              "2. Show him your sword when requested"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 26,
            "chapter": 5,
            "name": "The Battered Defender",
            "location": "North of Fushimi/Rakugai gate",
            "reward": "Starts Friendship",
            "requirements": "Must have met Yamazaki",
            "guide": [
              "1. Find samurai north of gate",
              "2. Watch scene about justice",
              "3. Give him any Medicine"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 27,
            "chapter": 4,
            "name": "The Mysterious Merchant",
            "location": "Well in Rakugai → west wall",
            "reward": "2 ryo, starts Friendship",
            "requirements": "Must have started Another Life with Haruka",
            "guide": [
              "1. Go to well south of Uji Tea Parlor",
              "2. Check west wall for feet behind dilapidated wall",
              "3. Bring him 10 tomatoes from farm"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 28,
            "chapter": 4,
            "name": "The Hungry Cat",
            "location": "Northeast of William Bradley's hideout (Rakugai)",
            "reward": "Starts Friendship",
            "requirements": "Must have started Another Life with Haruka",
            "guide": [
              "1. Find cat northeast of training hideout",
              "2. Give him a fish"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 29,
            "chapter": 3,
            "name": "The Bad Side of Town",
            "location": "West end of Mukurogai",
            "reward": "Substory completion",
            "requirements": "Available in Chapter 3",
            "guide": [
              "1. Go to west end of Mukurogai near stairs",
              "2. Encounter and defeat jerks"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 30,
            "chapter": 3,
            "name": "Brawler for Hire",
            "location": "Central clearing (Mukurogai)",
            "reward": "Substory completion",
            "requirements": "Must complete Substory #7 first",
            "guide": [
              "1. Find serious dude in central clearing",
              "2. Learn about punching for profit",
              "3. Defeat Corrupt Official"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 31,
            "chapter": 6,
            "name": "Brawler Incarnate",
            "location": "Central clearing (Mukurogai)",
            "reward": "Substory completion",
            "requirements": "Complete Substory #30 first",
            "guide": [
              "1. Return to central clearing",
              "2. Accept Sumi Bozu's challenge",
              "3. Defeat him in fight"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 32,
            "chapter": 10,
            "name": "Brawler Enlightened",
            "location": "Central clearing (Mukurogai)",
            "reward": "Berserker Charm",
            "requirements": "Complete Substory #31 first",
            "guide": [
              "1. Return to central clearing",
              "2. Fight stronger Sumi Bozu",
              "3. Defeat him to complete substory"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 33,
            "chapter": 7,
            "name": "Night of the Living Rumor",
            "location": "East end of Mukurogai (nighttime only)",
            "reward": "Nishikigoi Amulet",
            "requirements": "Must be nighttime",
            "guide": [
              "1. Overhear men talking in tunnel during daytime",
              "2. Return to same spot at nighttime",
              "3. Defeat ghostly Warrior"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 34,
            "chapter": 3,
            "name": "The Servile Beggar",
            "location": "Southeast of north gate (Mukurogai)",
            "reward": "Starts Friendship",
            "requirements": "Available in Chapter 3",
            "guide": [
              "1. Find crouching man southeast of north gate",
              "2. Give him any food item"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 35,
            "chapter": 4,
            "name": "The Trash Dealer",
            "location": "Northwest corner (Mukurogai)",
            "reward": "Starts Friendship",
            "requirements": "Must have started Another Life with Haruka",
            "guide": [
              "1. Find shifty fellow in northwest corner",
              "2. Give him any item"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 36,
            "chapter": 4,
            "name": "The Injured Dog",
            "location": "Center clearing (Mukurogai)",
            "reward": "Starts Friendship",
            "requirements": "Must have started Another Life with Haruka",
            "guide": [
              "1. Find injured dog in center clearing",
              "2. Give him Medicine (Ointment is cheapest)"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 37,
            "chapter": 2,
            "name": "Death of the Author",
            "location": "Teradaya (second floor)",
            "reward": "European Fabric (correct answers)",
            "requirements": "Obtain Diligence Records in story",
            "guide": [
              "1. Investigate shouting man on Teradaya second floor",
              "2. First answer: suggest 'a cat'",
              "3. Leave and return, get Broken Compass",
              "4. Second answer: suggest 'Botch-chan'",
              "5. Leave and return, get Fine Silk Fabric",
              "6. Final answer: respond 'Heart' for European Fabric"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 38,
            "chapter": 7,
            "name": "Precious Packages",
            "location": "Northwest of Teradaya → Southeast Mukurogai",
            "reward": "Great Serpent Skin",
            "requirements": "Complete Substory #71 first",
            "guide": [
              "1. Witness package switch northwest of Teradaya",
              "2. Find guy in southeast corner of Mukurogai near water",
              "3. Defeat bad guys and retrieve package",
              "4. Return to person behind Teradaya"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 39,
            "chapter": 3,
            "name": "A Clean Streak",
            "location": "Bathhouse",
            "reward": "Crystal",
            "requirements": "Available in Chapter 3",
            "guide": [
              "1. Take bath at Bathhouse",
              "2. Chase clothes thief, press Grab when close",
              "3. Avoid detection while returning to bathhouse"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 40,
            "chapter": 3,
            "name": "A Man and His Sack",
            "location": "West of Fushimi General Goods",
            "reward": "Substory completion",
            "requirements": "Available in Chapter 3",
            "guide": [
              "1. Join line for inari sushi",
              "2. Leave and return when stand runs out",
              "3. Join line again, stand runs out again",
              "4. Return third time, chase pickpocket"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 41,
            "chapter": 2,
            "name": "All in the Hips",
            "location": "Umai Udon Shop",
            "reward": "Unlocks Udon minigame",
            "requirements": "Eat at Umai Udon twice",
            "guide": [
              "1. Eat at Umai Udon Shop twice",
              "2. On second visit, get free bowl and trigger scene",
              "3. Make 3 ryo worth of udon without losing all hearts"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 42,
            "chapter": 7,
            "name": "Invasion of the Black Ships?",
            "location": "South end of Ichibangai (Fushimi)",
            "reward": "Precise Machinery",
            "requirements": "Available in Chapter 7",
            "guide": [
              "1. Listen to men discussing Black Ships",
              "2. Leave and return to find seasick ship captain",
              "3. Get suggestions from locals:",
              " • Man nearby suggests sake",
              " • Woman north suggests exercise",
              " • Old man in gray suggests umeboshi (correct answer)",
              "4. Defeat 3 samurai"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 43,
            "chapter": 2,
            "name": "It's a Long Story",
            "location": "West of Hanako (Fushimi)",
            "reward": "Gold Seal (all correct)",
            "requirements": "Available in Chapter 2",
            "guide": [
              "1. Find two ladies talking west of Hanako",
              "2. Agree to hear her story",
              "3. Answer quiz: 'bamboo shoots', 'outside a tea shop', 'Sakiko'"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 44,
            "chapter": 2,
            "name": "It's a Long Story: The Final Chapter",
            "location": "West of Hanako (Fushimi)",
            "reward": "Tear of the Dragon (all correct)",
            "requirements": "Complete Substory #43",
            "guide": [
              "1. Return to Sakiko's location",
              "2. Answer quiz: 'red, white, and green', 'amazake', 'Sumire'"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 45,
            "chapter": 2,
            "name": "It's a Long Story: Epilogue",
            "location": "West of Hanako (Fushimi)",
            "reward": "Golden Medicine Case (all correct)",
            "requirements": "Complete Substory #44",
            "guide": [
              "1. Return to Sakiko for final round",
              "2. Answer quiz: 'a scarecrow', 'pickled daikon', 'a tuna'"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 46,
            "chapter": 3,
            "name": "Scented Water",
            "location": "East of Komaki Dojo → Mukurogai → Chase sequence",
            "reward": "Keep 3 ryo",
            "requirements": "Available in Chapter 3",
            "guide": [
              "1. Find woman犹豫 at ferry to Mukurogai",
              "2. Offer to get perfume for her",
              "3. Find perfume dealer in southwest corner of Mukurogai second level",
              "4. Defeat him when spooked",
              "5. Chase sequence back to Fushimi pier"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 47,
            "chapter": 2,
            "name": "Ee Ja Nai Ka",
            "location": "Front of Ebisu Pawn (Fushimi)",
            "reward": "Exquisite Cogwheel",
            "requirements": "Available in Chapter 2",
            "guide": [
              "1. Find crowd of dancers at Ebisu Pawn",
              "2. Beat up misusing dudes"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 48,
            "chapter": 6,
            "name": "The Way of the Sammerai",
            "location": "Northwest corner of Yashikimachi (Fushimi) → Dojo → Ichibangai",
            "reward": "Substory completion",
            "requirements": "Daytime only",
            "guide": [
              "1. Find three people in northwest corner",
              "2. Agree to train 'Tom'",
              "3. Defeat him in dojo (no Heat Actions with wooden swords)",
              "4. Return and fight him again",
              "5. Find him being mocked, train again",
              "6. Help him fight jerk samurai at Ichibangai"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 49,
            "chapter": 5,
            "name": "Last Stand of the Panthers",
            "location": "Southeast Fushimi near River Fishing",
            "reward": "Great Serpent Skin",
            "requirements": "Complete Substory #24 first",
            "guide": [
              "1. Find Takeda near River Fishing spot",
              "2. Deliver 12 letters in Fushimi"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 50,
            "chapter": 2,
            "name": "The Desperate Fisherman",
            "location": "South of Teradaya entrance (Fushimi)",
            "reward": "Starts Friendship",
            "requirements": "Available in Chapter 2",
            "guide": [
              "1. Find fisherman with blue headwrap",
              "2. Give him any fish you caught",
              "3. Return three more times with fish (4 total)",
              "4. Speak to him final time to complete Friendship"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 51,
            "chapter": 2,
            "name": "The Junk Boy",
            "location": "North of Teradaya between warehouses (Fushimi)",
            "reward": "Starts Friendship",
            "requirements": "Available in Chapter 2",
            "guide": [
              "1. Find boy lamenting between warehouses",
              "2. Give him any item from inventory",
              "3. Return three more times with items (4 total)",
              "4. Speak to him final time to complete Friendship"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 52,
            "chapter": 2,
            "name": "The Wood Cutter",
            "location": "South of Hanako (Fushimi)",
            "reward": "Starts Friendship",
            "requirements": "Available in Chapter 2",
            "guide": [
              "1. Approach woodcutter on ground",
              "2. Chop 20 pieces of wood",
              "3. Return to chop 100 total pieces",
              "4. Return to chop 300 total pieces",
              "5. Speak to him final time to complete Friendship"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 53,
            "chapter": 3,
            "name": "The Frequently Lost Courier",
            "location": "East of Teradaya → Various locations",
            "reward": "Starts Friendship",
            "requirements": "Available in Chapter 3",
            "guide": [
              "1. Find courier east of Teradaya at Jizo Statue",
              "2. Give him directions three times",
              "3. Help with deliveries starting with 'Kankichi in Yashikimachi'"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 54,
            "chapter": 4,
            "name": "The Patient Dog",
            "location": "West side of Fushimi",
            "reward": "Starts Friendship",
            "requirements": "Must have started Another Life with Haruka",
            "guide": [
              "1. Find lying dog on west path",
              "2. Offer him any food"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 55,
            "chapter": 4,
            "name": "The Filthy Cat",
            "location": "West of farm boat pier (Fushimi)",
            "reward": "Starts Friendship",
            "requirements": "Must have started Another Life with Haruka",
            "guide": [
              "1. Find cat at edge of pier",
              "2. Press Look button to notice it",
              "3. Follow into water for cleaning scene",
              "4. Return to clean again for Friendship"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 56,
            "chapter": 4,
            "name": "Finders Weepers",
            "location": "East end of first street (Gion)",
            "reward": "Substory completion",
            "requirements": "Must have spoken to Akari at Temple",
            "guide": [
              "1. Find dropped diary in front of temple",
              "2. Read it and offer message",
              "3. Leave Gion via west gate and return",
              "4. Read and add new advice repeatedly"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 57,
            "chapter": 3,
            "name": "Soft and Supple",
            "location": "North end of Gion (evening only)",
            "reward": "3 ryo",
            "requirements": "Evening, access to Gion",
            "guide": [
              "1. Find barker at north end of Gion",
              "2. Agree to attend establishment",
              "3. Deny paying and fight 3 sumo wrestlers"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 58,
            "chapter": 4,
            "name": "The Revolutionary Chef",
            "location": "Outside Yamabuki (Gion)",
            "reward": "Starts Friendship",
            "requirements": "Must have cooked at least one meal",
            "guide": [
              "1. Find sniffing chef outside Yamabuki",
              "2. Give him any cooked dish"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 59,
            "chapter": 4,
            "name": "The Sexy Madam",
            "location": "First street area (Gion)",
            "reward": "Starts Friendship",
            "requirements": "Must have started Another Life with Haruka",
            "guide": [
              "1. Find woman in purple floral print",
              "2. Give her a Cucumber"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 60,
            "chapter": 5,
            "name": "It's What's on the Inside",
            "location": "West of Tea Parlor (Mibu) → Bridge to Gion → Shrine",
            "reward": "Gion Hood, Aguri Juntaro Trooper Card",
            "requirements": "Available in Chapter 5",
            "guide": [
              "1. Witness scene with Aguri west of Tea Parlor",
              "2. Speak to him at Tea Parlor",
              "3. Find woman on west shore of bridge to Gion",
              "4. Tell Aguri 'Have faith in Suzu'",
              "5. Defeat 5 bad guys at shrine in Mibu"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 61,
            "chapter": 4,
            "name": "Hope Blossoms Again",
            "location": "West path of Shinsengumi Barracks (Mibu) → Farm",
            "reward": "Substory completion",
            "requirements": "Must have started Another Life with Haruka",
            "guide": [
              "1. Hear commotion west of Barracks",
              "2. Stop jerk who killed dog",
              "3. Find cherry blossom tree at farm",
              "4. Return to couple with news"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 62,
            "chapter": 5,
            "name": "A Warlord's Ambition",
            "location": "Farmhouse",
            "reward": "Dragon's Whisker (well made)",
            "requirements": "Must have cooked at least 10 dishes",
            "guide": [
              "1. Get knock on farmhouse door from Akechi",
              "2. Prepare Thoroughly Grilled Fish with provided ingredients"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 63,
            "chapter": 5,
            "name": "The Boy Who Cried Bear",
            "location": "Shrine at west end (Mibu)",
            "reward": "Inviting Hat",
            "requirements": "Complete Substory #60",
            "guide": [
              "1. Find boy at shrine",
              "2. Defeat powerful bear (4 swings then dodge)"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 64,
            "chapter": 4,
            "name": "Mama Ryoma",
            "location": "East of Tea Parlor (Mibu)",
            "reward": "Substory completion",
            "requirements": "Complete Substory #61 first",
            "guide": [
              "1. Find three kids east of Tea Parlor",
              "2. Play House with them (choices don't matter)",
              "3. Defeat man at end"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 65,
            "chapter": 4,
            "name": "The Amnesiac",
            "location": "Path to Kiyomizu Temple",
            "reward": "Dead Branch, starts Friendship",
            "requirements": "Must have objective to go to temple",
            "guide": [
              "1. Find incapacitated man on path",
              "2. Give him any Medicine"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 66,
            "chapter": 4,
            "name": "The Boy Who Loves Veggies",
            "location": "East of Tea Parlor (Mibu)",
            "reward": "Starts Friendship",
            "requirements": "Must have started Another Life with Haruka",
            "guide": [
              "1. Find crying boy east of Tea Parlor",
              "2. Give him a vegetable"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 67,
            "chapter": 4,
            "name": "The Spitfire Debt Collector",
            "location": "Kurogane Smithing → Various locations",
            "reward": "3 ryo",
            "requirements": "Complete Substory #69 first",
            "guide": [
              "1. Speak to Yae at Kurogane Smithing",
              "2. Rescue client from strong guys"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 68,
            "chapter": 4,
            "name": "The Spitfire Lie Detector",
            "location": "Kurogane Smithing",
            "reward": "Substory completion",
            "requirements": "Complete Substory #67 first",
            "guide": [
              "1. Find Yae with client at Kurogane",
              "2. Get 3 ryo upfront",
              "3. Defeat 7 guys including major foe",
              "4. Defeat another 8 guys and major foe"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 69,
            "chapter": 4,
            "name": "The Spitfire Town Protector",
            "location": "East of Chicken Races (Rakugai)",
            "reward": "3 ryo",
            "requirements": "Must have started Another Life with Haruka",
            "guide": [
              "1. Find arguing couple east of Chicken Races",
              "2. Help Yae defeat 4 high-health enemies"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 70,
            "chapter": 5,
            "name": "The Captain and the Curious",
            "location": "North of Umai Udon Shop (Fushimi)",
            "reward": "Unlocks Memoirs hunt",
            "requirements": "Must have Inviting Hat",
            "guide": [
              "1. Find Ernest Satow north of Udon Shop",
              "2. Accept drink offer",
              "3. Defeat Kawakami Gensai"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 71,
            "chapter": 7,
            "name": "Diplomacy in Darkness",
            "location": "Izakaya → Southeast Mukurogai",
            "reward": "Substory completion",
            "requirements": "Complete #70, find 73% Memoirs (19), discuss with Ernest",
            "guide": [
              "1. Find Ernest missing from izakaya",
              "2. Go to marked spot in southeast Mukurogai",
              "3. Defeat Tanaka Shinbei and cronies"
            ].join("\n"),
            "videoId": ""
          },
          {
            "index": 72,
            "chapter": "Finale",
            "name": "A Lasting Thirst for Peace",
            "location": "Footbridge south of izakaya → Izakaya",
            "reward": "Final Memoir, Kiwami Hammer",
            "requirements": "Complete #71, collect 25/26 Memoirs (96%), discuss with Ernest, noon time",
            "guide": [
              "1. Find Ernest on footbridge at noon",
              "2. Defeat Nakamura Hanjiro and crew (tough fight)",
              "3. Return to izakaya for final rewards"
            ].join("\n"),
            "videoId": ""
          }
        ],
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
  // If navigating to 'characters' and only one character, skip to substories
  if (
    viewName === "characters" &&
    game &&
    Object.keys(gameData[game].characters).length === 1
  ) {
    const onlyCharacter = Object.keys(gameData[game].characters)[0];
    showView("substories", game, onlyCharacter);
    return;
  }

  // Update URL without page reload
  const params = new URLSearchParams();
  if (game) params.set("game", game);
  if (character) params.set("character", character);
  if (substoryIndex >= 0) params.set("substory", substoryIndex);

  const newUrl = `${
    window.location.pathname
  }?view=${viewName}&${params.toString()}`;
  window.history.pushState(
    { view: viewName, game, character, substoryIndex },
    "",
    newUrl
  );

  // Update the view
  updateView(viewName, game, character, substoryIndex);
}

function updateView(viewName, game = "", character = "", substoryIndex = -1) {
  // Hide all views
  document
    .querySelectorAll(
      "#gamesView, #charactersView, #substoriesView, #substoryDetailView"
    )
    .forEach((view) => {
      view.classList.add("hidden");
    });

  // Show the requested view
  document.getElementById(`${viewName}View`).classList.remove("hidden");
  currentView = viewName;
  selectedGame = game;
  selectedCharacter = character;
  currentSubstoryIndex = substoryIndex;

  // Update content based on the view
  if (viewName === "games") {
    initializeGamesGrid();
  } else if (viewName === "characters") {
    showCharacters(game);
  } else if (viewName === "substories") {
    showSubstories(game, character);
  } else if (viewName === "substoryDetail") {
    showSubstoryDetail(game, character, substoryIndex);
  }

  // Update mobile nav button states
  const mobileBackBtn = document.getElementById("mobileBackBtn");
  mobileBackBtn.style.display = viewName !== "games" ? "flex" : "none";
}

// Initialize games grid with logo images
function initializeGamesGrid() {
  const gamesGrid = document.getElementById("gamesGrid");
  gamesGrid.innerHTML = "";

  Object.keys(gameData).forEach((gameName) => {
    const gameCard = document.createElement("div");
    gameCard.className =
      "game-card p-6 rounded-lg cursor-pointer text-center flex flex-col items-center";
    gameCard.innerHTML = `
      <img src="${gameData[gameName].logo}" 
           alt="${gameName} Logo" 
           class="game-logo mb-4"
           loading="lazy">
      <h3 class="text-xl font-bold text-primary mb-2">${gameName}</h3>
    `;
    gameCard.addEventListener("click", () => {
      showView("characters", gameName);
    });
    gamesGrid.appendChild(gameCard);
  });
}

function showCharacters(gameName) {
  const charactersGrid = document.getElementById("charactersGrid");
  const gameTitle = document.getElementById("gameTitle");
  const characters = gameData[gameName].characters;
  const characterCount = Object.keys(characters).length;

  gameTitle.textContent = gameName;
  charactersGrid.innerHTML = "";

  // Set grid layout based on character count
  let gridClass = "grid gap-4 ";
  if (characterCount === 1) {
    gridClass += "grid-cols-1 justify-items-center";
  } else if (characterCount === 2) {
    gridClass += "grid-cols-2 justify-items-center";
  } else {
    gridClass += "grid-cols-2 md:grid-cols-3 lg:grid-cols-4";
  }
  charactersGrid.className = gridClass;

  Object.keys(characters).forEach((characterName) => {
    const character = characters[characterName];
    const characterCard = document.createElement("div");

    // Card sizing logic
    let cardClass = "character-card p-4 rounded-lg cursor-pointer text-center ";
    let imageClass = "character-image mb-3 mx-auto object-cover ";

    if (characterCount <= 2) {
      cardClass += "h-80 w-full max-w-xs ";
      imageClass += "w-full h-48 ";
    } else {
      cardClass += "h-64 ";
      imageClass += "w-full h-36 ";
    }

    characterCard.className = cardClass;
    characterCard.innerHTML = `
      <img src="${character.image}" 
           alt="${characterName}" 
           class="${imageClass}"
           style="aspect-ratio: 902/439">
      <h4 class="font-semibold text-primary ${
        characterCount <= 2 ? "text-lg" : "text-sm"
      } mt-2">${characterName}</h4>
      <p class="text-secondary ${
        characterCount <= 2 ? "text-sm" : "text-xs"
      } mt-1">${character.substories.length} Substories</p>
    `;

    characterCard.addEventListener("click", (e) => {
      e.stopPropagation();
      showView("substories", gameName, characterName);
    });
    charactersGrid.appendChild(characterCard);
  });
}

function showSubstories(gameName, characterName) {
  const substoriesList = document.getElementById("substoriesList");
  const characterTitle = document.getElementById("characterTitle");

  characterTitle.textContent = `${characterName} - ${gameName}`;
  substoriesList.innerHTML = "";

  const substories = gameData[gameName].characters[characterName].substories;
  const isGaiden = gameName.startsWith("Like a Dragon Gaiden");
  const HiddenChapter = document.getElementById("chapter");
  const HiddenRank = document.getElementById("rank");

  substories.forEach((substory, index) => {
    let chapterHtml = "";
    let rankHtml = "";
    if (isGaiden) {
      HiddenRank.style.display = "";
      HiddenChapter.style.display = "none";
      // Only show Rank for Gaiden
      if (substory.rank) {
        rankHtml = `<p class="text-secondary text-sm"> 🔍 Rank(Gaiden) : ${substory.rank}</p>`;
      }
    } else {
      HiddenRank.style.display = "none";
      HiddenChapter.style.display = "";
      // Only show Chapter for non-Gaiden
      if (substory.chapter) {
        chapterHtml = `<p class="text-secondary text-sm"> 🔍 Chapter ${substory.chapter}</p>`;
      }
    }



    const substoryItem = document.createElement("div");
    substoryItem.className =
      "substory-item p-4 rounded cursor-pointer flex items-start gap-3";
    substoryItem.innerHTML = `
     <div class="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 ">
        ${substory.index}
      </div>
      <div>
        <h4 class="font-semibold text-primary mb-2">${substory.name}</h4>
        <p class="text-secondary text-sm mb-1">📍 ${substory.location}</p>
        <p class="text-secondary text-sm">🎁 ${substory.reward}</p>
        ${chapterHtml}
        ${rankHtml}
      </div>
    `;

    substoryItem.addEventListener("click", (e) => {
      e.stopPropagation();
      showView("substoryDetail", gameName, characterName, index);
    });
    substoriesList.appendChild(substoryItem);
  });
}

function showSubstoryDetail(gameName, characterName, substoryIndex) {
  const substory =
    gameData[gameName].characters[characterName].substories[substoryIndex];
  const titleElement = document.getElementById("substoryTitle");
  titleElement.innerHTML = `
    <div class="flex  gap-3">
      <div>
        ${substory.index} . 
      </div>
      <span>${substory.name}</span>
    </div>
  `;  document.getElementById("substoryLocation").textContent = substory.location;
  document.getElementById("substoryReward").textContent = substory.reward;
  document.getElementById("substoryRequirements").textContent = substory.requirements;
  document.getElementById("substoryChapter").textContent = substory.chapter;
  document.getElementById("substoryRank").textContent = substory.rank;

  // Format the guide with proper line breaks
  document.getElementById("substoryGuide").innerHTML = substory.guide.replace(
    /\n/g,
    "<br>"
  );

  // Video embed
  const videoContainer = document.getElementById("videoContainer");
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
    videoContainer.innerHTML =
      '<p class="text-secondary">No video available for this substory</p>';
  }
}

// Handle browser back/forward navigation
window.addEventListener("popstate", (event) => {
  if (event.state) {
    updateView(
      event.state.view,
      event.state.game || "",
      event.state.character || "",
      event.state.substoryIndex || -1
    );
  } else {
    // Default to games view if no state
    updateView("games");
  }
});

// Event listeners for navigation
homeBtn.addEventListener("click", () => {
  showView("games");
});

mobileHomeBtn.addEventListener("click", () => {
  showView("games");
});

// Mobile back button
document.getElementById("mobileBackBtn").addEventListener("click", () => {
  window.history.back();
});

// Initialize the app based on URL parameters
function initializeFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  const view = urlParams.get("view") || "games";
  const game = urlParams.get("game") || "";
  const character = urlParams.get("character") || "";
  const substory = parseInt(urlParams.get("substory")) || -1;

  // Set initial history state
  window.history.replaceState(
    { view, game, character, substoryIndex: substory },
    ""
  );

  // Update the view
  updateView(view, game, character, substory);
}

function updateView(viewName, game = "", character = "", substoryIndex = -1) {
  // Hide all views
  document
    .querySelectorAll(
      "#gamesView, #charactersView, #substoriesView, #substoryDetailView"
    )
    .forEach((view) => {
      view.classList.add("hidden");
    });

  // Show the requested view
  document.getElementById(`${viewName}View`).classList.remove("hidden");
  currentView = viewName;
  selectedGame = game;
  selectedCharacter = character;
  currentSubstoryIndex = substoryIndex;

  // Scroll to top of the page
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Update content based on the view
  if (viewName === "games") {
    initializeGamesGrid();
  } else if (viewName === "characters") {
    showCharacters(game);
  } else if (viewName === "substories") {
    showSubstories(game, character);
  } else if (viewName === "substoryDetail") {
    showSubstoryDetail(game, character, substoryIndex);
  }

  // Update mobile nav button states
  const mobileBackBtn = document.getElementById("mobileBackBtn");
  mobileBackBtn.style.display = viewName !== "games" ? "flex" : "none";
}

// Initialize the app when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  initializeFromURL();
});


