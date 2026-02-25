// Brainrot word replacements
const replacements = {
  // === SUPER COMMON WORDS (will hit constantly) ===

  // Articles & basics
  "the": "da",
  "a": "a lil",
  "an": "a whole",

  // Common verbs - present
  "is": "be hitting",
  "are": "be",
  "have": "got dat",
  "has": "got dat",
  "want": "tryna cop",
  "need": "finna need",
  "like": "fw",
  "know": "peep",
  "see": "peep",
  "look": "peep",
  "get": "cop",
  "make": "cook up",
  "take": "yoink",
  "use": "hit up",
  "find": "scope out",
  "give": "slide",
  "tell": "put on",
  "work": "grind",
  "try": "attempt the mog",
  "ask": "hit up",
  "seem": "lowkey be",
  "feel": "be vibin",
  "become": "glow up into",
  "leave": "dip from",
  "put": "yeet",
  "keep": "lock in",
  "let": "allow the rizz",
  "begin": "start the grind",
  "show": "flex",
  "hear": "catch wind of",
  "play": "run it",
  "run": "zoom",
  "move": "slide",
  "live": "exist in this timeline",
  "happen": "go down",
  "write": "scribe",
  "provide": "bless with",
  "sit": "post up",
  "stand": "be posted",
  "lose": "take an L",
  "pay": "drop bread on",
  "meet": "link with",
  "include": "got",
  "continue": "keep the grind going",
  "learn": "absorb the knowledge",
  "change": "switch up",
  "watch": "peep",
  "follow": "be on that wave",
  "stop": "cease the activity",
  "create": "cook",
  "speak": "yap",
  "read": "peep the text",
  "spend": "blow",
  "grow": "level up",
  "open": "crack open",
  "walk": "strut",
  "win": "secure the W",
  "teach": "put on game",
  "buy": "cop",
  "bring": "slide through with",
  "stay": "remain posted",
  "add": "throw in",
  "start": "commence the operation",

  // Common verbs - past
  "said": "was like",
  "got": "copped",
  "made": "cooked up",
  "went": "slid",
  "took": "yoinked",
  "came": "pulled up",
  "saw": "peeped",
  "knew": "was hip to",
  "thought": "was thinking",
  "told": "put on",
  "found": "scoped out",
  "left": "dipped",
  "called": "hit up",
  "tried": "attempted",
  "used": "ran",
  "asked": "hit up",
  "needed": "was fiending for",
  "felt": "was vibin",
  "became": "glowed up into",
  "put": "yeeted",
  "kept": "stayed locked in on",
  "began": "started grindin",
  "seemed": "lowkey was",
  "helped": "assisted the grind",
  "showed": "flexed",
  "heard": "caught wind of",
  "played": "ran",
  "moved": "slid",
  "lived": "was alive fr",
  "happened": "went down",
  "lost": "took the L",
  "paid": "dropped bread",
  "met": "linked with",
  "included": "had",
  "continued": "kept grindin",
  "learned": "absorbed",
  "changed": "switched up",
  "watched": "peeped",
  "followed": "was on",
  "stopped": "ceased",
  "created": "cooked",
  "spoke": "yapped",
  "opened": "cracked open",
  "walked": "strutted",
  "won": "secured the W",
  "brought": "slid through with",
  "stayed": "remained posted",
  "added": "threw in",
  "started": "commenced",

  // Super common nouns
  "people": "the gang",
  "time": "the moment",
  "year": "rotation around the sun",
  "years": "rotations",
  "way": "method of sigma",
  "day": "24 hour grind session",
  "days": "grind sessions",
  "thing": "vibe",
  "things": "vibes",
  "world": "this simulation",
  "life": "this run",
  "hand": "meat hook",
  "hands": "meat hooks",
  "part": "chunk",
  "place": "spot",
  "case": "situation",
  "week": "7 day arc",
  "point": "take",
  "government": "the feds",
  "company": "corp",
  "number": "digits",
  "night": "after dark grind",
  "home": "the crib",
  "water": "hydration juice",
  "room": "chamber",
  "mother": "the OG queen",
  "father": "the OG",
  "area": "zone",
  "fact": "certified fact",
  "month": "moon cycle",
  "lot": "mad",
  "book": "sacred text",
  "eye": "peeper",
  "eyes": "peepers",
  "job": "grind",
  "word": "term",
  "business": "hustle",
  "issue": "situation",
  "side": "flank",
  "kind": "type",
  "head": "dome",
  "house": "crib",
  "family": "the bloodline",
  "student": "knowledge seeker",
  "students": "knowledge seekers",
  "teacher": "sensei",
  "school": "the institution",
  "state": "territory",
  "city": "urban zone",
  "community": "the squad",
  "team": "the squad",
  "game": "the activity",
  "food": "sustenance",
  "car": "whip",
  "phone": "the device",
  "computer": "the machine",
  "power": "raw energy",
  "question": "query",
  "story": "the lore",
  "idea": "thought",
  "body": "physical form",
  "information": "intel",
  "service": "assistance",
  "experience": "XP",
  "music": "the sounds",
  "movie": "the cinema",
  "party": "function",
  "reason": "justification",
  "research": "investigation",
  "girl": "female",
  "guy": "specimen",
  "boy": "young king",
  "kid": "young soul",
  "kids": "the youth",
  "child": "spawn",
  "children": "spawns",
  "baby": "fresh spawn",
  "parent": "elder",
  "parents": "the elders",
  "morning": "early grind hours",
  "today": "this current day",
  "tonight": "this eve",
  "president": "top dog",
  "opinion": "take",
  "love": "intense positive vibes",
  "death": "end of the run",
  "news": "the feed",
  "website": "digital domain",
  "internet": "the web of sigma",
  "social media": "the rotting grounds",

  // Common adjectives
  "good": "bussin",
  "great": "goated",
  "bad": "mid",
  "new": "fresh",
  "old": "ancient",
  "first": "alpha",
  "last": "final form",
  "long": "extended",
  "little": "smol",
  "own": "personal",
  "other": "alternate",
  "big": "massive",
  "high": "elevated",
  "different": "built different",
  "small": "mini",
  "large": "chonky",
  "next": "upcoming",
  "early": "ahead of the curve",
  "young": "baby-faced",
  "important": "crucial to the lore",
  "few": "scarce",
  "public": "for the masses",
  "same": "identical vibewise",
  "able": "capable of the mog",
  "best": "most goated",
  "better": "more goated",
  "sure": "locked in",
  "free": "no cost fr",
  "right": "valid",
  "wrong": "not valid",
  "true": "factual",
  "full": "maxed out",
  "real": "legitimate",
  "whole": "entire",
  "nice": "solid",
  "possible": "within the realm",
  "hard": "difficult grind",
  "special": "rare",
  "easy": "free",
  "strong": "built",
  "happy": "vibin",
  "serious": "no cap",
  "ready": "locked and loaded",
  "simple": "basic",
  "clear": "obvious",
  "recent": "freshly dropped",
  "popular": "trending",
  "afraid": "shook",
  "sorry": "my bad",
  "dead": "unalived",
  "famous": "known in these streets",
  "rich": "got bread",
  "poor": "down bad financially",
  "hot": "fire",
  "cold": "icy",
  "fast": "speedy",
  "slow": "lagging",
  "beautiful": "aesthetic",
  "ugly": "not aesthetic",
  "perfect": "flawless W",
  "terrible": "absolute ohio",
  "weird": "sus",
  "stupid": "lacking braincells",
  "smart": "galaxy brain",
  "crazy": "unhinged",
  "sick": "fire",
  "tired": "drained",
  "excited": "hyped",
  "angry": "heated",
  "scared": "spooked",
  "interesting": "intriguing",
  "boring": "mid content",
  "funny": "comedy gold",
  "cool": "icy",
  "amazing": "insane",
  "awesome": "legendary",
  "horrible": "tragic",
  "wonderful": "blessed",
  "excellent": "S-tier",
  "terrible": "F-tier",
  "fantastic": "absolutely goated",
  "favorite": "main",
  "worst": "most mid",

  // Common adverbs
  "very": "hella",
  "really": "deadass",
  "just": "lowkey just",
  "also": "plus",
  "now": "rn",
  "then": "after that",
  "still": "still fr",
  "even": "even fr",
  "well": "proper",
  "only": "merely",
  "never": "not once",
  "always": "24/7",
  "often": "frequently",
  "usually": "typically",
  "probably": "prolly",
  "actually": "on god",
  "especially": "especially fr",
  "quickly": "speedily",
  "slowly": "at a slow pace",
  "finally": "at long last",
  "again": "once more",
  "already": "already fr",
  "almost": "nearly",
  "enough": "sufficient",
  "together": "in unity",
  "maybe": "perhaps",
  "certainly": "for sure",
  "definitely": "no cap",
  "seriously": "deadass",
  "literally": "legitimately",
  "basically": "essentially",
  "completely": "fully",
  "exactly": "precisely",
  "simply": "just",
  "absolutely": "100%",
  "obviously": "clearly",
  "sometimes": "on occasion",
  "soon": "shortly",
  "later": "after a bit",
  "today": "this day",
  "yesterday": "last rotation",
  "tomorrow": "next rotation",
  "forever": "for eternity",
  "everywhere": "all over",
  "somewhere": "some spot",
  "anywhere": "any location",
  "here": "at this location",
  "there": "at that spot",

  // Pronouns & determiners (careful with these)
  "everyone": "the whole gang",
  "everybody": "all the homies",
  "someone": "some individual",
  "somebody": "some soul",
  "anyone": "any soul",
  "anybody": "any individual",
  "nothing": "not a single thing",
  "everything": "all of it",
  "something": "some entity",
  "myself": "my own self",
  "yourself": "your own self",
  "himself": "his own self",
  "herself": "her own self",
  "itself": "its own self",
  "themselves": "their own selves",
  "ourselves": "our own selves",

  // Common phrases
  "I think": "in my humble sigma opinion",
  "I believe": "I am of the belief",
  "of course": "naturally",
  "in fact": "fr fr",
  "a lot": "mad",
  "a little": "a tad",
  "right now": "at this very moment",
  "used to": "back in the day would",
  "kind of": "lowkey",
  "sort of": "kinda",
  "at least": "minimum",
  "at all": "whatsoever",
  "so far": "up to this point",
  "for example": "for instance",
  "such as": "like",
  "as well": "too",
  "in order to": "to",
  "according to": "based on",
  "in addition": "plus",
  "as soon as": "the moment",
  "more than": "exceeding",
  "less than": "under",
  "up to": "as much as",
  "out of": "from",
  "each other": "one another",
  "no one": "not a soul",
  "every day": "daily",
  "all day": "the whole grind",
  "thank you": "glooks",
  "thanks": "glooks",
  "please": "if you would",
  "sorry": "my bad",
  "excuse me": "pardon the intrusion",
  "hello": "yo",
  "hi": "yo",
  "hey": "ayo",
  "bye": "peace",
  "goodbye": "peace out",
  "okay": "aight",
  "ok": "aight",
  "yes": "bet",
  "yeah": "ye",
  "no": "nah",
  "not": "ain't",

  // === ORIGINAL THEMED REPLACEMENTS ===

  // Maxxing variations
  "improving": "maxxing",
  "optimizing": "maxxing",
  "maximizing": "maxxing",
  "working on": "maxxing",
  "enhancing": "looksmaxxing",
  "exercising": "gymmaxxing",
  "studying": "brainmaxxing",
  "sleeping": "sleepmaxxing",
  "training": "grindmaxxing",
  "practicing": "skillmaxxing",
  "lifting": "musclemaxing",
  "dieting": "dietmaxxing",
  "meditating": "mindmaxxing",
  "networking": "connectionmaxxing",
  "investing": "wealthmaxxing",

  // Mogging variations
  "better than": "mogging",
  "superior to": "mogging",
  "outperforming": "mogging",
  "dominating": "framemogging",
  "taller than": "heightmogging",
  "bigger than": "sizemogging",
  "beating": "mogging",
  "winning against": "mogging",
  "exceeding": "statmogging",
  "surpassing": "auramogging",
  "outshining": "glowmogging",
  "defeating": "mogging into oblivion",

  // Skull/bone terms
  "face": "skull",
  "jawline": "clavicular",
  "bone structure": "skeletal aesthetics",
  "cheekbones": "zygos",
  "chin": "mentum",
  "forehead": "frontal bone",
  "features": "facial bones",
  "profile": "side skull",
  "appearance": "phenotype",
  "looks": "aesthetics",

  // Actions
  "looking at": "mirin",
  "staring at": "hard mirin",
  "admiring": "full mirin",
  "jealous": "seething",
  "crying": "coping",
  "complaining": "coping and seething",
  "lying": "capping",
  "telling the truth": "spitting facts",
  "disagree": "cope",
  "understand": "see the aura",
  "confused": "lost in the sauce",
  "failing": "taking Ls",
  "winning": "securing Ws",
  "ignoring": "leaving on read",
  "talking": "yapping",
  "chatting": "yappin",
  "speaking": "running mouth",
  "arguing": "beefing",
  "fighting": "throwing hands",
  "waiting": "posted up",
  "leaving": "dipping",
  "arriving": "pulling up",
  "relaxing": "chilling",
  "resting": "recovering stamina",
  "eating": "consuming nutrients",
  "drinking": "hydrating",
  "thinking": "pondering the orb",
  "planning": "scheming",
  "hoping": "manifesting",
  "wishing": "manifesting hard",
  "dreaming": "in the astral plane",

  // People expanded
  "person": "specimen",
  "man": "king",
  "men": "kings",
  "woman": "queen",
  "women": "queens",
  "friend": "homie",
  "friends": "the homies",
  "enemy": "opp",
  "enemies": "opps",
  "boss": "alpha",
  "coworker": "fellow grinder",
  "stranger": "random NPC",
  "celebrity": "main character",
  "celebrities": "main characters",
  "doctor": "health wizard",
  "lawyer": "law wizard",
  "police": "the feds",
  "cop": "fed",
  "politician": "suit NPC",
  "teacher": "knowledge dispenser",
  "professor": "senior knowledge dispenser",
  "manager": "middle tier alpha",
  "CEO": "final boss",
  "expert": "subject matter goat",
  "genius": "certified galaxy brain",
  "idiot": "smooth brain haver",
  "loser": "L collector",
  "winner": "W accumulator",
  "hero": "protagonist",
  "villain": "antagonist arc",
  "victim": "one who caught strays",
  "suspect": "alleged individual",
  "customer": "patron of the establishment",
  "user": "enjoyer",
  "member": "card carrying member",
  "leader": "pack alpha",
  "follower": "loyal soldier",
  "fan": "certified glazer",
  "hater": "certified opp",
  "boyfriend": "significant male",
  "girlfriend": "significant female",
  "husband": "locked in partner",
  "wife": "locked in partner",
  "partner": "co-grinder",
  "ex": "former arc character",
  "crush": "target of admiration",
  "neighbor": "nearby NPC",
  "author": "text creator",
  "artist": "visual creator",
  "singer": "vocal producer",
  "actor": "professional pretender",
  "athlete": "physical specimen",

  // Internet/social media
  "comment": "take",
  "comments": "the takes",
  "post": "content",
  "posts": "the content",
  "video": "the footage",
  "videos": "the footage collection",
  "photo": "visual capture",
  "photos": "visual captures",
  "picture": "captured moment",
  "message": "transmission",
  "email": "electronic letter",
  "notification": "ping",
  "update": "the new patch",
  "download": "data acquisition",
  "upload": "data deployment",
  "subscribe": "lock in",
  "unsubscribe": "abandon ship",
  "share": "spread the word",
  "like": "show appreciation",
  "dislike": "express disapproval",
  "follow": "add to the roster",
  "unfollow": "remove from roster",
  "block": "exile",
  "report": "snitch on",
  "delete": "eliminate",
  "edit": "modify",
  "search": "hunt for",
  "click": "tap",
  "scroll": "traverse the feed",
  "refresh": "reload the matrix",
  "login": "enter the system",
  "logout": "exit the system",
  "password": "secret code",
  "username": "digital identity",
  "profile": "digital presence",
  "account": "digital existence",
  "online": "connected to the matrix",
  "offline": "disconnected",
  "viral": "spreading like wildfire",
  "trending": "currently hot",
  "algorithm": "the machine",
  "content": "the material",
  "creator": "content producer",
  "influencer": "professional glazer",
  "follower": "supporter",
  "followers": "the support base",
  "subscriber": "locked in viewer",
  "subscribers": "the locked in ones",

  // Emotions expanded
  "happy": "vibin",
  "sad": "down bad emotionally",
  "angry": "heated",
  "upset": "not vibin",
  "worried": "stressed",
  "nervous": "on edge",
  "anxious": "overthinking",
  "depressed": "in the trenches",
  "stressed": "under pressure",
  "relaxed": "at peace",
  "calm": "unbothered",
  "bored": "understimulated",
  "curious": "intrigued",
  "surprised": "caught off guard",
  "shocked": "shooketh",
  "disappointed": "let down",
  "frustrated": "vexed",
  "annoyed": "mildly heated",
  "embarrassed": "caught lacking",
  "proud": "feeling validated",
  "confident": "locked in mentally",
  "insecure": "lacking confidence stats",
  "lonely": "solo dolo",
  "loved": "appreciated",
  "hopeful": "optimistic about outcomes",
  "grateful": "thankful fr",
  "jealous": "envious of the mog",
  "guilty": "feeling the weight",
  "ashamed": "caught in 4k",

  // Money & success
  "money": "bread",
  "cash": "paper",
  "dollar": "buck",
  "dollars": "bucks",
  "rich": "loaded",
  "wealthy": "stacked",
  "expensive": "pricey",
  "cheap": "budget",
  "price": "damage",
  "cost": "the toll",
  "profit": "gains",
  "loss": "the L",
  "debt": "negative bread",
  "savings": "the stash",
  "investment": "the play",
  "salary": "the bag",
  "income": "incoming bread",
  "tax": "government's cut",
  "taxes": "the government's portion",
  "success": "the W",
  "failure": "the L",
  "achievement": "accomplishment unlocked",
  "goal": "target",
  "dream": "ultimate goal",
  "opportunity": "opening",
  "chance": "shot",
  "luck": "RNG",
  "unlucky": "bad RNG",
  "lucky": "blessed by RNG",
  "risk": "gamble",
  "reward": "the prize",
  "effort": "energy expenditure",
  "progress": "advancement",
  "growth": "leveling up",
  "improvement": "stat increase",
  "problem": "skill issue",
  "solution": "the fix",
  "mistake": "error in judgment",
  "error": "miscalculation",

  // Time expressions
  "second": "moment",
  "seconds": "moments",
  "minute": "60 ticks",
  "minutes": "ticks of time",
  "hour": "60 minute block",
  "hours": "time blocks",
  "weekend": "rest period",
  "morning": "early hours",
  "afternoon": "mid-day",
  "evening": "late hours",
  "midnight": "the witching hour",
  "century": "100 year span",
  "decade": "10 year stretch",
  "era": "age",
  "period": "timeframe",
  "moment": "instant",
  "future": "upcoming timeline",
  "past": "previous timeline",
  "present": "current moment",
  "history": "the lore",
  "ancient": "from the old times",
  "modern": "current era",
  "recent": "fresh",
  "upcoming": "approaching",

  // Misc additions
  "truth": "facts",
  "lie": "cap",
  "lies": "cap",
  "secret": "hidden lore",
  "mystery": "unsolved lore",
  "answer": "the solution",
  "question": "inquiry",
  "advice": "game",
  "tip": "pointer",
  "help": "assistance",
  "support": "backing",
  "attention": "focus",
  "respect": "props",
  "honor": "maximum respect",
  "trust": "faith",
  "faith": "belief stats",
  "hope": "optimism",
  "fear": "anxiety debuff",
  "doubt": "uncertainty",
  "confidence": "self-belief stats",
  "courage": "bravery points",
  "strength": "power level",
  "weakness": "vulnerability",
  "advantage": "edge",
  "disadvantage": "handicap",
  "benefit": "perk",
  "consequence": "result of actions",
  "result": "outcome",
  "effect": "impact",
  "cause": "reason",
  "purpose": "mission",
  "meaning": "significance",
  "value": "worth",
  "quality": "tier",
  "quantity": "amount",
  "size": "dimensions",
  "shape": "form",
  "color": "hue",
  "sound": "audio",
  "smell": "scent",
  "taste": "flavor",
  "touch": "physical contact",
  "feeling": "vibe",
  "thought": "mental process",
  "memory": "stored data",
  "knowledge": "accumulated info",
  "wisdom": "big brain energy",
  "intelligence": "IQ points",
  "creativity": "creative juice",
  "imagination": "mind expansion",
  "reality": "this simulation",
  "fantasy": "alternate reality",
  "normal": "standard",
  "strange": "peculiar",
  "obvious": "clear as day",
  "hidden": "concealed",
  "visible": "in plain sight",
  "invisible": "not perceivable",
  "common": "frequent",
  "rare": "uncommon drop",
  "unique": "one of a kind",
  "original": "OG",
  "copy": "duplicate",
  "fake": "not authentic",
  "natural": "organic",
  "artificial": "manufactured",
  "professional": "certified",
  "amateur": "rookie",
  "beginner": "newcomer",
  "advanced": "veteran tier",
  "basic": "entry level",
  "complex": "intricate",
  "dangerous": "risky",
  "safe": "secure",
  "healthy": "in good condition",
  "illegal": "against the rules",
  "legal": "within the rules",

  // === CORTISOL / STRESS MEME VOCABULARY ===

  // Core cortisol terms
  "stressed": "experiencing a cortisol spike",
  "stress": "cortisol elevation",
  "stressful": "cortisol-inducing",
  "anxiety": "chronic cortisol accumulation",
  "anxious": "in a cortisol state",
  "panic": "maximum cortisol event",
  "panicking": "cortisol spiking hard",
  "worried": "low-grade cortisol leaking",
  "worrying": "cortisol farming",
  "nervous": "pre-cortisol state",
  "tense": "cortisol adjacent",
  "tension": "cortisol buildup",
  "pressure": "cortisol pressure",
  "overwhelmed": "cortisol overloaded",
  "freaking out": "holy cortisol spike",
  "losing it": "cortisol levels critical",
  "breakdown": "cortisol meltdown",
  "meltdown": "full cortisol cascade",

  // Calm = low cortisol (the flex)
  "calm": "low cortisol",
  "relaxed": "maintaining low cortisol",
  "chill": "cortisol-free",
  "peaceful": "zero cortisol detected",
  "unbothered": "cortisol levels undetectable",
  "zen": "negative cortisol",
  "serene": "cortisol vacuum",
  "composed": "cortisol regulated",
  "collected": "cortisol optimized",
  "tranquil": "flatlined cortisol",
  "at ease": "cortisol at baseline",
  "laid back": "chronically low cortisol",
  "carefree": "cortisol-immune",
  "content": "cortisol balanced",
  "comfortable": "cortisol stable",

  // Reactions that spike cortisol
  "shocking": "cortisol-spiking",
  "startling": "instant cortisol injection",
  "scary": "cortisol-inducing",
  "terrifying": "maximum cortisol threat",
  "horrifying": "cortisol nightmare fuel",
  "disturbing": "slow cortisol drip",
  "unsettling": "background cortisol noise",
  "awkward": "social cortisol moment",
  "cringe": "secondhand cortisol spike",
  "embarrassing": "public cortisol event",
  "humiliating": "catastrophic cortisol explosion",
  "uncomfortable": "mild cortisol leak",
  "uneasy": "cortisol stirring",

  // "You're trying to spike my cortisol" variations
  "annoying": "trying to spike my cortisol",
  "irritating": "deliberately cortisol farming",
  "frustrating": "engineering my cortisol spike",
  "infuriating": "weaponizing cortisol against me",
  "aggravating": "cortisol attack incoming",
  "bothering": "attempting cortisol elevation",
  "provoking": "cortisol provocation",
  "triggering": "cortisol triggering",
  "upsetting": "cortisol destabilization",

  // Physical effects (cortisol face etc)
  "puffy": "cortisol face",
  "bloated": "cortisol bloat",
  "swollen": "cortisol-induced swelling",
  "tired looking": "cortisol aged",
  "exhausted": "cortisol depleted",
  "aged": "cortisol weathered",
  "worn out": "cortisol ravaged",
  "haggard": "chronic cortisol victim",
  "drained": "cortisol exhausted",
  "fatigued": "cortisol fatigued",

  // Never StreSS / Agartha lore
  "underground": "in Agartha",
  "hidden world": "Agartha",
  "secret place": "the inner earth",
  "paradise": "Agartha",
  "utopia": "Agartha-tier civilization",
  "escape": "retreat to Agartha",
  "sanctuary": "Agartha bunker",
  "unbothered king": "Agartha dweller",
  "immune to drama": "never stress pilled",
  "doesn't care": "achieved Agartha mindset",
  "above it all": "ascended to Agartha",
  "transcended": "entered Agartha",
  "enlightened": "Agartha-pilled",
  "inner peace": "Agartha energy",
  "detached": "Agartha detachment",
  "stoic": "never stress mode",
  "unphased": "Agartha-level unbothered",
  "unaffected": "cortisol-proof",
  "indifferent": "Agartha indifference",
  "nonchalant": "casual Agartha energy",

  // Gooning/behavioral terms from the culture
  "obsessed": "gooning",
  "obsessing": "gooning hard",
  "fixated": "in goon mode",
  "addicted": "permagooning",
  "binge watching": "content gooning",
  "binge eating": "food gooning",
  "scrolling": "feed gooning",
  "doom scrolling": "negative goon spiral",
  "acting foolish": "jestergooning",
  "clowning": "jestermaxxing",
  "showing off": "jestergooning for attention",
  "attention seeking": "desperate jestergoon",
  "performing": "public jestergoon",
  "trying too hard": "overgooning",
  "simping": "romantic gooning",

  // Pill terminology
  "optimistic": "whitepilled",
  "pessimistic": "blackpilled",
  "realistic": "greypilled",
  "accepting reality": "taking the blackpill",
  "hopeful": "whitepill cope",
  "cynical": "blackpill mindset",
  "nihilistic": "void-pilled",
  "motivated": "grindpilled",
  "lazy": "slothpilled",
  "giving up": "blackpill surrender",
  "enlightened": "truth-pilled",
  "aware": "red-pilled",
  "ignorant": "bluepilled",
  "naive": "still bluepilled",
  "woke up": "got pilled",
  "realized": "became pilled",
  "understood finally": "the pill kicked in",

  // Wagecels and grind culture
  "employee": "wagecel",
  "employees": "wagecels",
  "worker": "grindcel",
  "workers": "grindcels",
  "working class": "wagecel class",
  "nine to five": "wagecel hours",
  "office job": "wagecel cage",
  "corporate": "wagecel plantation",
  "commute": "wagecel migration",
  "meeting": "wagecel assembly",
  "meetings": "wagecel gatherings",
  "deadline": "wagecel crunch",
  "promotion": "wagecel level up",
  "raise": "wagecel bread increase",
  "fired": "freed from wagecel life",
  "quit": "escaped the wagecel matrix",
  "retired": "completed the wagecel arc",
  "unemployed": "between wagecel grinds",

  // Normie/NPC expansions
  "average person": "normie",
  "regular person": "baseline NPC",
  "ordinary": "NPC-tier",
  "mainstream": "normie approved",
  "conventional": "NPC programming",
  "typical": "standard NPC behavior",
  "standard": "factory NPC settings",
  "basic person": "level 1 NPC",
  "sheep": "herd NPC",
  "conformist": "programmed NPC",
  "follower mentality": "NPC firmware",
  "groupthink": "NPC hivemind",
  "predictable": "NPC scripted",
  "boring person": "dialogue-locked NPC",
  "unoriginal": "copy-paste NPC",

  // Beauty/aging cortisol connection
  "aging": "cortisol accumulation showing",
  "wrinkles": "cortisol lines",
  "grey hair": "cortisol highlights",
  "stress lines": "cortisol etchings",
  "looking old": "cortisol aged",
  "looking young": "low cortisol glow",
  "glowing": "zero cortisol radiance",
  "fresh faced": "cortisol-free complexion",
  "youthful": "cortisol resistant",
  "vibrant": "anti-cortisol aura",
  "radiant": "negative cortisol energy",
  "healthy glow": "optimal cortisol management",
  "clear skin": "cortisol detoxed skin",
  "bad skin": "cortisol breakout",
  "acne": "stress cortisol manifestation",
  "dark circles": "cortisol rings",
  "bags under eyes": "cortisol luggage",
  "looking tired": "cortisol visible",
  "looking refreshed": "cortisol flushed",

  // Aura terminology
  "charisma": "aura",
  "presence": "aura field",
  "vibe": "aura frequency",
  "energy": "aura output",
  "magnetism": "aura pull",
  "charm": "aura enchantment",
  "appeal": "aura rating",
  "intimidating": "dark aura",
  "welcoming": "positive aura",
  "off-putting": "negative aura",
  "attractive energy": "high aura",
  "repulsive": "aura void",
  "mysterious": "hidden aura",
  "powerful presence": "overwhelming aura",
  "weak presence": "low aura output",
  "commanding": "alpha aura",
  "forgettable": "no aura detected",
  "memorable": "aura imprint",
  "likeable": "blessed aura",
  "unlikeable": "cursed aura"
};

// Function to escape special regex characters
function escapeRegex(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Track whether we're showing original text
let showingOriginal = false;

// Inject CSS styles for highlighting and tooltip
function injectStyles() {
  if (document.getElementById('maxrotting-styles')) return;

  const style = document.createElement('style');
  style.id = 'maxrotting-styles';
  style.textContent = `
    .maxrotting-replaced {
      background: linear-gradient(to bottom, transparent 60%, rgba(138, 43, 226, 0.2) 60%);
      border-radius: 2px;
      cursor: help;
      position: relative;
    }

    .maxrotting-replaced:hover {
      background: rgba(138, 43, 226, 0.3);
    }

    .maxrotting-replaced::after {
      content: attr(data-original);
      position: absolute;
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%);
      background: #1a1a2e;
      color: #fff;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 12px;
      white-space: nowrap;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.2s;
      z-index: 10000;
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
    }

    .maxrotting-replaced:hover::after {
      opacity: 1;
    }

    .maxrotting-showing-original .maxrotting-replaced {
      background: none;
    }

    .maxrotting-showing-original .maxrotting-replaced::after {
      display: none;
    }

    #maxrotting-toggle {
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 999999;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      padding: 12px 16px;
      border-radius: 50px;
      cursor: pointer;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 14px;
      font-weight: 600;
      box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    #maxrotting-toggle:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);
    }

    #maxrotting-toggle:active {
      transform: translateY(0);
    }

    #maxrotting-toggle .icon {
      font-size: 16px;
    }

    #maxrotting-toggle.showing-original {
      background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
      box-shadow: 0 4px 15px rgba(245, 87, 108, 0.4);
    }

    #maxrotting-toggle.showing-original:hover {
      box-shadow: 0 6px 20px rgba(245, 87, 108, 0.5);
    }
  `;
  document.head.appendChild(style);
}

// Create toggle button
function createToggleButton() {
  if (document.getElementById('maxrotting-toggle')) return;

  const button = document.createElement('button');
  button.id = 'maxrotting-toggle';
  button.innerHTML = '<span class="icon">👁</span> View Original';
  button.addEventListener('click', toggleOriginalText);
  document.body.appendChild(button);
}

// Toggle between original and replaced text
function toggleOriginalText() {
  showingOriginal = !showingOriginal;
  const button = document.getElementById('maxrotting-toggle');

  if (showingOriginal) {
    document.body.classList.add('maxrotting-showing-original');
    button.innerHTML = '<span class="icon">🧠</span> View Brainrot';
    button.classList.add('showing-original');

    // Show original text
    document.querySelectorAll('.maxrotting-replaced').forEach(el => {
      el.dataset.brainrot = el.textContent;
      el.textContent = el.dataset.original;
    });
  } else {
    document.body.classList.remove('maxrotting-showing-original');
    button.innerHTML = '<span class="icon">👁</span> View Original';
    button.classList.remove('showing-original');

    // Show brainrot text
    document.querySelectorAll('.maxrotting-replaced').forEach(el => {
      if (el.dataset.brainrot) {
        el.textContent = el.dataset.brainrot;
      }
    });
  }
}

// Check if a node is inside an editable context
function isEditable(node) {
  let current = node;
  while (current && current !== document.body) {
    if (current.nodeType === Node.ELEMENT_NODE) {
      const tagName = current.tagName.toLowerCase();
      // Skip form inputs and textareas
      if (tagName === 'input' || tagName === 'textarea') {
        return true;
      }
      // Skip contenteditable elements (rich text editors)
      if (current.isContentEditable || current.contentEditable === 'true') {
        return true;
      }
      // Skip common editor class names and roles
      const role = current.getAttribute('role');
      if (role === 'textbox' || role === 'input') {
        return true;
      }
      // Skip draft.js, prosemirror, and other common editors
      if (current.classList?.contains('public-DraftEditor-content') ||
          current.classList?.contains('ProseMirror') ||
          current.classList?.contains('ql-editor') ||
          current.classList?.contains('tox-edit-area') ||
          current.classList?.contains('monaco-editor') ||
          current.classList?.contains('CodeMirror')) {
        return true;
      }
    }
    current = current.parentNode;
  }
  return false;
}

// Function to replace text in a text node with highlighting
function replaceText(textNode) {
  const text = textNode.nodeValue;
  const parent = textNode.parentNode;

  // Skip if already processed or inside our own elements
  if (!parent || parent.classList?.contains('maxrotting-replaced') ||
      parent.id === 'maxrotting-toggle') {
    return;
  }

  // Skip if inside an editable area
  if (isEditable(textNode)) {
    return;
  }

  // Build a list of all matches with their positions
  const matches = [];

  for (const [original, replacement] of Object.entries(replacements)) {
    const regex = new RegExp(`\\b${escapeRegex(original)}\\b`, 'gi');
    let match;
    while ((match = regex.exec(text)) !== null) {
      matches.push({
        start: match.index,
        end: match.index + match[0].length,
        original: match[0],
        replacement: replacement
      });
    }
  }

  if (matches.length === 0) return;

  // Sort matches by position and remove overlaps (keep longer matches)
  matches.sort((a, b) => a.start - b.start || (b.end - b.start) - (a.end - a.start));

  const filtered = [];
  let lastEnd = 0;
  for (const m of matches) {
    if (m.start >= lastEnd) {
      filtered.push(m);
      lastEnd = m.end;
    }
  }

  if (filtered.length === 0) return;

  // Create document fragment with replacements
  const fragment = document.createDocumentFragment();
  let currentPos = 0;

  for (const m of filtered) {
    // Add text before match
    if (m.start > currentPos) {
      fragment.appendChild(document.createTextNode(text.slice(currentPos, m.start)));
    }

    // Create highlighted span for the replacement
    const span = document.createElement('span');
    span.className = 'maxrotting-replaced';
    span.dataset.original = m.original;

    // Preserve capitalization
    let replacementText = m.replacement;
    if (m.original[0] === m.original[0].toUpperCase()) {
      replacementText = replacementText.charAt(0).toUpperCase() + replacementText.slice(1);
    }

    span.textContent = showingOriginal ? m.original : replacementText;
    if (showingOriginal) {
      span.dataset.brainrot = replacementText;
    }

    fragment.appendChild(span);
    currentPos = m.end;
  }

  // Add remaining text
  if (currentPos < text.length) {
    fragment.appendChild(document.createTextNode(text.slice(currentPos)));
  }

  // Replace the text node with the fragment
  parent.replaceChild(fragment, textNode);
}

// Function to walk through all text nodes
function walkTextNodes(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    replaceText(node);
  } else if (node.nodeType === Node.ELEMENT_NODE) {
    // Skip script, style, textarea, input, and our own elements
    const tagName = node.tagName.toLowerCase();
    if (['script', 'style', 'textarea', 'input', 'noscript'].includes(tagName)) {
      return;
    }
    if (node.classList?.contains('maxrotting-replaced') || node.id === 'maxrotting-toggle') {
      return;
    }
    // Skip contenteditable and other editable elements
    if (node.isContentEditable || node.contentEditable === 'true') {
      return;
    }
    const role = node.getAttribute?.('role');
    if (role === 'textbox' || role === 'input') {
      return;
    }
    // Skip common editor frameworks
    if (node.classList?.contains('public-DraftEditor-content') ||
        node.classList?.contains('ProseMirror') ||
        node.classList?.contains('ql-editor') ||
        node.classList?.contains('tox-edit-area') ||
        node.classList?.contains('monaco-editor') ||
        node.classList?.contains('CodeMirror')) {
      return;
    }
    // Convert to array to avoid live collection issues
    const children = Array.from(node.childNodes);
    for (const child of children) {
      walkTextNodes(child);
    }
  }
}

// Initialize
injectStyles();
createToggleButton();
walkTextNodes(document.body);

// Observe DOM changes for dynamically loaded content
const observer = new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    // Skip mutations inside editable areas
    if (isEditable(mutation.target)) {
      continue;
    }
    for (const node of mutation.addedNodes) {
      if (node.nodeType === Node.ELEMENT_NODE || node.nodeType === Node.TEXT_NODE) {
        // Skip our own elements
        if (node.id === 'maxrotting-toggle' || node.id === 'maxrotting-styles') {
          continue;
        }
        if (node.classList?.contains('maxrotting-replaced')) {
          continue;
        }
        // Skip if inside editable area
        if (isEditable(node)) {
          continue;
        }
        walkTextNodes(node);
      }
    }
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});

console.log("Maxrotting activated. Hover over purple highlights to see original text, or click the button to toggle all.");
