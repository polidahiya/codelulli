import Copybutton from "./Copybutton";
import Searchbar from "./Searchbar";
import Gridview from "./Gridview";

function page() {
  const charsets = {
    basic: [
      {
        character: "&",
        description: "Ampersand",
        html_entity: "&amp;",
        numeric_code: "&#38;",
      },
      {
        character: "<",
        description: "Less than",
        html_entity: "&lt;",
        numeric_code: "&#60;",
      },
      {
        character: ">",
        description: "Greater than",
        html_entity: "&gt;",
        numeric_code: "&#62;",
      },
      {
        character: '"',
        description: "Quotation mark",
        html_entity: "&quot;",
        numeric_code: "&#34;",
      },
      {
        character: "'",
        description: "Single quote",
        html_entity: "&apos;",
        numeric_code: "&#39;",
      },
      {
        character: "@",
        description: "At sign",
        html_entity: "&#64;",
        numeric_code: "&#64;",
      },
      {
        character: "#",
        description: "Number sign (Hash)",
        html_entity: "&#35;",
        numeric_code: "&#35;",
      },
    ],

    punctuation_and_symbols: [
      {
        character: "©",
        description: "Copyright",
        html_entity: "&copy;",
        numeric_code: "&#169;",
      },
      {
        character: "®",
        description: "Registered trademark",
        html_entity: "&reg;",
        numeric_code: "&#174;",
      },
      {
        character: "™",
        description: "Trademark",
        html_entity: "&trade;",
        numeric_code: "&#8482;",
      },
      {
        character: "§",
        description: "Section sign",
        html_entity: "&sect;",
        numeric_code: "&#167;",
      },
      {
        character: "¶",
        description: "Paragraph sign",
        html_entity: "&para;",
        numeric_code: "&#182;",
      },
      {
        character: "·",
        description: "Middle dot",
        html_entity: "&middot;",
        numeric_code: "&#183;",
      },
      {
        character: "…",
        description: "Horizontal ellipsis",
        html_entity: "&hellip;",
        numeric_code: "&#8230;",
      },
      {
        character: "–",
        description: "En dash",
        html_entity: "&ndash;",
        numeric_code: "&#8211;",
      },
      {
        character: "—",
        description: "Em dash",
        html_entity: "&mdash;",
        numeric_code: "&#8212;",
      },
      {
        character: "‘",
        description: "Left single quote",
        html_entity: "&lsquo;",
        numeric_code: "&#8216;",
      },
      {
        character: "’",
        description: "Right single quote",
        html_entity: "&rsquo;",
        numeric_code: "&#8217;",
      },
      {
        character: "“",
        description: "Left double quote",
        html_entity: "&ldquo;",
        numeric_code: "&#8220;",
      },
      {
        character: "”",
        description: "Right double quote",
        html_entity: "&rdquo;",
        numeric_code: "&#8221;",
      },
      {
        character: "«",
        description: "Left guillemet",
        html_entity: "&laquo;",
        numeric_code: "&#171;",
      },
      {
        character: "»",
        description: "Right guillemet",
        html_entity: "&raquo;",
        numeric_code: "&#187;",
      },
      {
        character: "•",
        description: "Bullet",
        html_entity: "&bull;",
        numeric_code: "&#8226;",
      },
      {
        character: "†",
        description: "Dagger",
        html_entity: "&dagger;",
        numeric_code: "&#8224;",
      },
      {
        character: "‡",
        description: "Double dagger",
        html_entity: "&Dagger;",
        numeric_code: "&#8225;",
      },
      {
        character: "¿",
        description: "Inverted question mark",
        html_entity: "&iquest;",
        numeric_code: "&#191;",
      },
      {
        character: "¡",
        description: "Inverted exclamation mark",
        html_entity: "&iexcl;",
        numeric_code: "&#161;",
      },
    ],
    mathematical: [
      {
        character: "×",
        description: "Multiplication sign",
        html_entity: "&times;",
        numeric_code: "&#215;",
      },
      {
        character: "÷",
        description: "Division sign",
        html_entity: "&divide;",
        numeric_code: "&#247;",
      },
      {
        character: "±",
        description: "Plus-minus",
        html_entity: "&plusmn;",
        numeric_code: "&#177;",
      },
      {
        character: "°",
        description: "Degree sign",
        html_entity: "&deg;",
        numeric_code: "&#176;",
      },
      {
        character: "µ",
        description: "Micro sign",
        html_entity: "&micro;",
        numeric_code: "&#181;",
      },
      {
        character: "²",
        description: "Superscript two",
        html_entity: "&sup2;",
        numeric_code: "&#178;",
      },
      {
        character: "³",
        description: "Superscript three",
        html_entity: "&sup3;",
        numeric_code: "&#179;",
      },
      {
        character: "¹",
        description: "Superscript one",
        html_entity: "&sup1;",
        numeric_code: "&#185;",
      },
      {
        character: "½",
        description: "Fraction one-half",
        html_entity: "&frac12;",
        numeric_code: "&#189;",
      },
      {
        character: "¼",
        description: "Fraction one-quarter",
        html_entity: "&frac14;",
        numeric_code: "&#188;",
      },
      {
        character: "¾",
        description: "Fraction three-quarters",
        html_entity: "&frac34;",
        numeric_code: "&#190;",
      },
      {
        character: "∞",
        description: "Infinity",
        html_entity: "&infin;",
        numeric_code: "&#8734;",
      },
      {
        character: "√",
        description: "Square root",
        html_entity: "&radic;",
        numeric_code: "&#8730;",
      },
      {
        character: "≈",
        description: "Almost equal to",
        html_entity: "&asymp;",
        numeric_code: "&#8776;",
      },
      {
        character: "≠",
        description: "Not equal to",
        html_entity: "&ne;",
        numeric_code: "&#8800;",
      },
      {
        character: "≤",
        description: "Less than or equal",
        html_entity: "&le;",
        numeric_code: "&#8804;",
      },
      {
        character: "≥",
        description: "Greater than or equal",
        html_entity: "&ge;",
        numeric_code: "&#8805;",
      },
      {
        character: "∑",
        description: "Summation",
        html_entity: "&sum;",
        numeric_code: "&#8721;",
      },
      {
        character: "∫",
        description: "Integral",
        html_entity: "&int;",
        numeric_code: "&#8747;",
      },
    ],
    currency: [
      {
        character: "$",
        description: "Dollar sign",
        html_entity: "&#36;",
        numeric_code: "&#36;",
      },
      {
        character: "¢",
        description: "Cent sign",
        html_entity: "&cent;",
        numeric_code: "&#162;",
      },
      {
        character: "£",
        description: "Pound sterling",
        html_entity: "&pound;",
        numeric_code: "&#163;",
      },
      {
        character: "€",
        description: "Euro sign",
        html_entity: "&euro;",
        numeric_code: "&#8364;",
      },
      {
        character: "¥",
        description: "Yen sign",
        html_entity: "&yen;",
        numeric_code: "&#165;",
      },
      {
        character: "₹",
        description: "Indian Rupee",
        html_entity: "&#8377;",
        numeric_code: "&#8377;",
      },
      {
        character: "₽",
        description: "Russian Ruble",
        html_entity: "&#8381;",
        numeric_code: "&#8381;",
      },
    ],
    arrows: [
      {
        character: "←",
        description: "Left arrow",
        html_entity: "&larr;",
        numeric_code: "&#8592;",
      },
      {
        character: "→",
        description: "Right arrow",
        html_entity: "&rarr;",
        numeric_code: "&#8594;",
      },
      {
        character: "↑",
        description: "Up arrow",
        html_entity: "&uarr;",
        numeric_code: "&#8593;",
      },
      {
        character: "↓",
        description: "Down arrow",
        html_entity: "&darr;",
        numeric_code: "&#8595;",
      },
      {
        character: "↔",
        description: "Left-right arrow",
        html_entity: "&harr;",
        numeric_code: "&#8596;",
      },
      {
        character: "↕",
        description: "Up-down arrow",
        html_entity: "&#8597;",
        numeric_code: "&#8597;",
      },
      {
        character: "↖",
        description: "Northwest arrow",
        html_entity: "&nwarr;",
        numeric_code: "&#8598;",
      },
    ],
    greek_letters: [
      {
        character: "α",
        description: "Alpha (lowercase)",
        html_entity: "&alpha;",
        numeric_code: "&#945;",
      },
      {
        character: "β",
        description: "Beta (lowercase)",
        html_entity: "&beta;",
        numeric_code: "&#946;",
      },
      {
        character: "γ",
        description: "Gamma (lowercase)",
        html_entity: "&gamma;",
        numeric_code: "&#947;",
      },
      {
        character: "δ",
        description: "Delta (lowercase)",
        html_entity: "&delta;",
        numeric_code: "&#948;",
      },
      {
        character: "ε",
        description: "Epsilon (lowercase)",
        html_entity: "&epsilon;",
        numeric_code: "&#949;",
      },
      {
        character: "π",
        description: "Pi (lowercase)",
        html_entity: "&pi;",
        numeric_code: "&#960;",
      },
      {
        character: "σ",
        description: "Sigma (lowercase)",
        html_entity: "&sigma;",
        numeric_code: "&#963;",
      },
      {
        character: "ω",
        description: "Omega (lowercase)",
        html_entity: "&omega;",
        numeric_code: "&#969;",
      },
      {
        character: "∆",
        description: "Delta (uppercase)",
        html_entity: "&Delta;",
        numeric_code: "&#916;",
      },
      {
        character: "Ω",
        description: "Omega (uppercase)",
        html_entity: "&Omega;",
        numeric_code: "&#937;",
      },
      {
        character: "θ",
        description: "Theta (lowercase)",
        html_entity: "&theta;",
        numeric_code: "&#952;",
      },
      {
        character: "λ",
        description: "Lambda (lowercase)",
        html_entity: "&lambda;",
        numeric_code: "&#955;",
      },
    ],
    miscellaneous: [
      {
        character: "♥",
        description: "Heart",
        html_entity: "&hearts;",
        numeric_code: "&#9829;",
      },
      {
        character: "♦",
        description: "Diamond",
        html_entity: "&diams;",
        numeric_code: "&#9830;",
      },
      {
        character: "♣",
        description: "Club",
        html_entity: "&clubs;",
        numeric_code: "&#9827;",
      },
      {
        character: "♠",
        description: "Spade",
        html_entity: "&spades;",
        numeric_code: "&#9824;",
      },
      {
        character: "★",
        description: "Black star",
        html_entity: "&#9733;",
        numeric_code: "&#9733;",
      },
      {
        character: "☆",
        description: "White star",
        html_entity: "&#9734;",
        numeric_code: "&#9734;",
      },
      {
        character: "✓",
        description: "Check mark",
        html_entity: "&#10003;",
        numeric_code: "&#10003;",
      },
      {
        character: "✗",
        description: "Ballot X",
        html_entity: "&#10007;",
        numeric_code: "&#10007;",
      },
      {
        character: "☑",
        description: "Check box with check",
        html_entity: "&#9745;",
        numeric_code: "&#9745;",
      },
      {
        character: "✈",
        description: "Airplane",
        html_entity: "&#9992;",
        numeric_code: "&#9992;",
      },
    ],
    whitespace: [
      {
        character: " ",
        description: "Non-breaking space",
        html_entity: "&nbsp;",
        numeric_code: "&#160;",
      },
      {
        character: " ",
        description: "En space",
        html_entity: "&ensp;",
        numeric_code: "&#8194;",
      },
      {
        character: " ",
        description: "Em space",
        html_entity: "&emsp;",
        numeric_code: "&#8195;",
      },
      {
        character: " ",
        description: "Thin space",
        html_entity: "&thinsp;",
        numeric_code: "&#8201;",
      },
      {
        character: " ",
        description: "Zero-width space",
        html_entity: "&#8203;",
        numeric_code: "&#8203;",
      },
    ],
    smileys_and_emotions: [
      {
        emoji: "😀",
        description: "Grinning Face",
        html_entity: "&#128512;",
        unicode: "U+1F600",
      },
      {
        emoji: "😂",
        description: "Face with Tears of Joy",
        html_entity: "&#128514;",
        unicode: "U+1F602",
      },
      {
        emoji: "😊",
        description: "Smiling Face with Smiling Eyes",
        html_entity: "&#128522;",
        unicode: "U+1F60A",
      },
      {
        emoji: "😍",
        description: "Smiling Face with Heart-Eyes",
        html_entity: "&#128525;",
        unicode: "U+1F60D",
      },
      {
        emoji: "😢",
        description: "Crying Face",
        html_entity: "&#128546;",
        unicode: "U+1F622",
      },
      {
        emoji: "😡",
        description: "Pouting Face",
        html_entity: "&#128545;",
        unicode: "U+1F621",
      },
      {
        emoji: "👍",
        description: "Thumbs Up",
        html_entity: "&#128077;",
        unicode: "U+1F44D",
      },
      {
        emoji: "👎",
        description: "Thumbs Down",
        html_entity: "&#128078;",
        unicode: "U+1F44E",
      },
      {
        emoji: "😎",
        description: "Smiling Face with Sunglasses",
        html_entity: "&#128526;",
        unicode: "U+1F60E",
      },
      {
        emoji: "🤓",
        description: "Nerd Face",
        html_entity: "&#129299;",
        unicode: "U+1F913",
      },
    ],
    people_and_body: [
      {
        emoji: "👋",
        description: "Waving Hand",
        html_entity: "&#128075;",
        unicode: "U+1F44B",
      },
      {
        emoji: "🙌",
        description: "Raising Hands",
        html_entity: "&#128588;",
        unicode: "U+1F64C",
      },
      {
        emoji: "👨",
        description: "Man",
        html_entity: "&#128104;",
        unicode: "U+1F468",
      },
      {
        emoji: "👩",
        description: "Woman",
        html_entity: "&#128105;",
        unicode: "U+1F469",
      },
      {
        emoji: "👶",
        description: "Baby",
        html_entity: "&#128118;",
        unicode: "U+1F476",
      },
      {
        emoji: "💪",
        description: "Flexed Biceps",
        html_entity: "&#128170;",
        unicode: "U+1F4AA",
      },
      {
        emoji: "🧑",
        description: "Person",
        html_entity: "&#129489;",
        unicode: "U+1F9D1",
      },
      {
        emoji: "👀",
        description: "Eyes",
        html_entity: "&#128064;",
        unicode: "U+1F440",
      },
    ],
    animals_and_nature: [
      {
        emoji: "🐱",
        description: "Cat Face",
        html_entity: "&#128049;",
        unicode: "U+1F431",
      },
      {
        emoji: "🐶",
        description: "Dog Face",
        html_entity: "&#128054;",
        unicode: "U+1F436",
      },
      {
        emoji: "🐘",
        description: "Elephant",
        html_entity: "&#128024;",
        unicode: "U+1F418",
      },
      {
        emoji: "🌸",
        description: "Cherry Blossom",
        html_entity: "&#127800;",
        unicode: "U+1F338",
      },
      {
        emoji: "🌞",
        description: "Sun with Face",
        html_entity: "&#127774;",
        unicode: "U+1F31E",
      },
      {
        emoji: "🌈",
        description: "Rainbow",
        html_entity: "&#127752;",
        unicode: "U+1F308",
      },
      {
        emoji: "🐍",
        description: "Snake",
        html_entity: "&#128013;",
        unicode: "U+1F40D",
      },
      {
        emoji: "🌲",
        description: "Evergreen Tree",
        html_entity: "&#127794;",
        unicode: "U+1F332",
      },
    ],
    food_and_drink: [
      {
        emoji: "🍎",
        description: "Red Apple",
        html_entity: "&#127822;",
        unicode: "U+1F34E",
      },
      {
        emoji: "🍕",
        description: "Pizza",
        html_entity: "&#127829;",
        unicode: "U+1F355",
      },
      {
        emoji: "🍔",
        description: "Hamburger",
        html_entity: "&#127828;",
        unicode: "U+1F354",
      },
      {
        emoji: "☕",
        description: "Hot Beverage",
        html_entity: "&#9749;",
        unicode: "U+2615",
      },
      {
        emoji: "🍷",
        description: "Wine Glass",
        html_entity: "&#127863;",
        unicode: "U+1F377",
      },
      {
        emoji: "🍓",
        description: "Strawberry",
        html_entity: "&#127827;",
        unicode: "U+1F353",
      },
      {
        emoji: "🍣",
        description: "Sushi",
        html_entity: "&#127843;",
        unicode: "U+1F363",
      },
    ],
    activities: [
      {
        emoji: "⚽",
        description: "Soccer Ball",
        html_entity: "&#9917;",
        unicode: "U+26BD",
      },
      {
        emoji: "🏀",
        description: "Basketball",
        html_entity: "&#127936;",
        unicode: "U+1F3C0",
      },
      {
        emoji: "🎸",
        description: "Guitar",
        html_entity: "&#127928;",
        unicode: "U+1F3B8",
      },
      {
        emoji: "🎉",
        description: "Party Popper",
        html_entity: "&#127881;",
        unicode: "U+1F389",
      },
      {
        emoji: "🎁",
        description: "Gift",
        html_entity: "&#127873;",
        unicode: "U+1F381",
      },
      {
        emoji: "🏊",
        description: "Person Swimming",
        html_entity: "&#127946;",
        unicode: "U+1F3CA",
      },
      {
        emoji: "🎨",
        description: "Artist Palette",
        html_entity: "&#127912;",
        unicode: "U+1F3A8",
      },
    ],
    travel_and_places: [
      {
        emoji: "✈️",
        description: "Airplane",
        html_entity: "&#9992;",
        unicode: "U+2708",
      },
      {
        emoji: "🚗",
        description: "Car",
        html_entity: "&#128663;",
        unicode: "U+1F697",
      },
      {
        emoji: "🏖️",
        description: "Beach with Umbrella",
        html_entity: "&#127958;",
        unicode: "U+1F3D6",
      },
      {
        emoji: "⛰️",
        description: "Mountain",
        html_entity: "&#9968;",
        unicode: "U+26F0",
      },
      {
        emoji: "🌍",
        description: "Globe Showing Europe-Africa",
        html_entity: "&#127757;",
        unicode: "U+1F30D",
      },
      {
        emoji: "🏰",
        description: "Castle",
        html_entity: "&#127984;",
        unicode: "U+1F3F0",
      },
      {
        emoji: "🚢",
        description: "Ship",
        html_entity: "&#128674;",
        unicode: "U+1F6A2",
      },
    ],
    objects: [
      {
        emoji: "💡",
        description: "Light Bulb",
        html_entity: "&#128161;",
        unicode: "U+1F4A1",
      },
      {
        emoji: "📱",
        description: "Mobile Phone",
        html_entity: "&#128241;",
        unicode: "U+1F4F1",
      },
      {
        emoji: "💻",
        description: "Laptop",
        html_entity: "&#128187;",
        unicode: "U+1F4BB",
      },
      {
        emoji: "✂️",
        description: "Scissors",
        html_entity: "&#9986;",
        unicode: "U+2702",
      },
      {
        emoji: "🔔",
        description: "Bell",
        html_entity: "&#128276;",
        unicode: "U+1F514",
      },
      {
        emoji: "⌚",
        description: "Watch",
        html_entity: "&#8986;",
        unicode: "U+231A",
      },
      {
        emoji: "📷",
        description: "Camera",
        html_entity: "&#128247;",
        unicode: "U+1F4F7",
      },
    ],
    symbols: [
      {
        emoji: "❤️",
        description: "Red Heart",
        html_entity: "&#10084;",
        unicode: "U+2764",
      },
      {
        emoji: "✅",
        description: "Check Mark Button",
        html_entity: "&#9989;",
        unicode: "U+2705",
      },
      {
        emoji: "❌",
        description: "Cross Mark",
        html_entity: "&#10060;",
        unicode: "U+274C",
      },
      {
        emoji: "➡️",
        description: "Right Arrow",
        html_entity: "&#10145;",
        unicode: "U+27A1",
      },
      {
        emoji: "⚠️",
        description: "Warning",
        html_entity: "&#9888;",
        unicode: "U+26A0",
      },
      {
        emoji: "🔥",
        description: "Fire",
        html_entity: "&#128293;",
        unicode: "U+1F525",
      },
      {
        emoji: "✨",
        description: "Sparkles",
        html_entity: "&#10024;",
        unicode: "U+2728",
      },
    ],
    flags: [
      {
        emoji: "🇺🇳",
        description: "United Nations Flag",
        html_entity: "&#127482;&#127475;",
        unicode: "U+1F1FA U+1F1F3",
      },
      {
        emoji: "🇺🇸",
        description: "United States Flag",
        html_entity: "&#127482;&#127480;",
        unicode: "U+1F1FA U+1F1F8",
      },
      {
        emoji: "🇯🇵",
        description: "Japan Flag",
        html_entity: "&#127471;&#127477;",
        unicode: "U+1F1EF U+1F1F5",
      },
      {
        emoji: "🇮🇳",
        description: "India Flag",
        html_entity: "&#127470;&#127475;",
        unicode: "U+1F1EE U+1F1F3",
      },
      {
        emoji: "🇧🇷",
        description: "Brazil Flag",
        html_entity: "&#127463;&#127479;",
        unicode: "U+1F1E7 U+1F1F7",
      },
      {
        emoji: "🇨🇦",
        description: "Canada Flag",
        html_entity: "&#127464;&#127462;",
        unicode: "U+1F1E8 U+1F1E6",
      },
      {
        emoji: "🇦🇺",
        description: "Australia Flag",
        html_entity: "&#127462;&#127482;",
        unicode: "U+1F1E6 U+1F1FA",
      },
    ],
    weather: [
      {
        emoji: "☀️",
        description: "Sun",
        html_entity: "&#9728;",
        unicode: "U+2600",
      },
      {
        emoji: "☁️",
        description: "Cloud",
        html_entity: "&#9729;",
        unicode: "U+2601",
      },
      {
        emoji: "🌧️",
        description: "Cloud with Rain",
        html_entity: "&#127783;",
        unicode: "U+1F327",
      },
      {
        emoji: "⛄",
        description: "Snowman",
        html_entity: "&#9924;",
        unicode: "U+26C4",
      },
      {
        emoji: "⚡",
        description: "High Voltage",
        html_entity: "&#9889;",
        unicode: "U+26A1",
      },
    ],
    time: [
      {
        emoji: "⏰",
        description: "Alarm Clock",
        html_entity: "&#9200;",
        unicode: "U+23F0",
      },
      {
        emoji: "⏳",
        description: "Hourglass with Flowing Sand",
        html_entity: "&#9203;",
        unicode: "U+23F3",
      },
      {
        emoji: "🕒",
        description: "Three O’Clock",
        html_entity: "&#128338;",
        unicode: "U+1F552",
      },
      {
        emoji: "🌙",
        description: "Crescent Moon",
        html_entity: "&#127769;",
        unicode: "U+1F319",
      },
      {
        emoji: "⭐",
        description: "Star",
        html_entity: "&#11088;",
        unicode: "U+2B50",
      },
    ],
  };

  return (
    <div className="">
      <Searchbar charsets={charsets} />
      <Gridview charsets={charsets}/>
      {Object.entries(charsets).map(([category, chars]) => (
        <div key={category} className="my-6">
          <h3 className="text-lg font-semibold capitalize mb-2 px-2">
            {category.replace("_", " ")} Characters
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-700 dark:text-white">
                  <th className="border p-2">Character</th>
                  <th className="border p-2">Description</th>
                  <th className="border p-2">HTML Entity</th>
                  <th className="border p-2">Numeric Code</th>
                </tr>
              </thead>
              <tbody>
                {chars.map((char, index) => (
                  <tr key={index} className="border text-center">
                    <td className="border p-2 ">
                      {char.character || char.emoji}
                    </td>
                    <td className="border p-2 text-start">
                      {char.description}
                    </td>
                    <Copybutton text={char.html_entity} />
                    <Copybutton text={char.numeric_code || char.unicode} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
      <div className="text">
        <h2>About This Page</h2>
        <p>
          This page offers a comprehensive collection of special characters,
          symbols, and emojis, categorized for easy navigation. You{"'"}ll find
          sections covering basic characters, punctuation, mathematical symbols,
          currency symbols, arrows, Greek letters, and various emoji sets. Each
          entry includes the character, a brief description, its HTML entity (if
          applicable), and its numeric code or Unicode value.
        </p>
        <p>
          This resource is particularly useful for developers, designers, and
          content creators who need to incorporate special characters into their
          projects.
        </p>

        <h3>How to Use</h3>
        <ul>
          <li>
            <strong>Browse Categories:</strong> Scroll through the tables to
            find the character or emoji you need, organized by type.
          </li>
          <li>
            <strong>Copy Characters:</strong> Click on a character or emoji to
            copy it instantly (a click-to-copy feature may be required for
            this).
          </li>
          <li>
            <strong>Use in HTML:</strong> Insert the HTML entity (e.g.,{" "}
            <code>&amp;amp;</code>) directly into your code to display the
            character correctly on web pages.
          </li>
          <li>
            <strong>Use in Programming:</strong> Utilize the numeric code or
            Unicode value (e.g., <code>&amp;#38;</code> or <code>U+1F600</code>)
            in your scripts, styles, or applications.
          </li>
          <li>
            <strong>Search Quickly:</strong> Press <code>Ctrl+F</code> (Windows)
            or <code>Cmd+F</code> (Mac) to locate a specific character or
            description instantly.
          </li>
        </ul>

        <p>
          Whether you{"'"}re building a website, writing documentation, or
          designing a user interface, these special characters can enhance
          readability, functionality, and visual appeal. Explore the collection
          and find the perfect symbol for your needs!
        </p>
      </div>
    </div>
  );
}

export default page;
