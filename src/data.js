import { v4 as uuidv4 } from "uuid";
function chillHop() {
  return [
    {
      name: "Love Space",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      artist: "Aso, Middle School, Aviino",
      audio:
        "https://github.com/anantadhia/reactplayer/raw/production/src/Audio/Love%20Space.mp3",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Blow",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      artist: "Aiguille",
      audio:
        "https://github.com/anantadhia/reactplayer/raw/production/src/Audio/Blow.mp3",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Zutto Ishosha",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      artist: "Swørn",
      audio:
        "https://github.com/anantadhia/reactplayer/raw/production/src/Audio/Zutto%20Ishosha.mp3",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Neo Tokyo Rhapsody",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      artist: "Aiguille",
      audio:
        "https://github.com/anantadhia/reactplayer/raw/production/src/Audio/Neo%20Tokyo%20Rhapshody.mp3",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Ride  on Time",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      artist: "Aiguille",
      audio:
        "https://github.com/anantadhia/reactplayer/raw/production/src/Audio/ride%20on%20time.mp4",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Fragile",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      artist: "Aiguille",
      audio:
        "https://github.com/anantadhia/reactplayer/raw/production/src/Audio/Tatsuro%20Yamashita%20%20Fragile.mp3.webm",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },

    //ADD MORE HERE
  ];
}

export default chillHop;
