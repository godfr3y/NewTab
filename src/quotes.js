const quotes = [
	{
		text: "“You yawned,” said the Vicar. “Do you never yawn in the angelic country?”<br>“Never,” said the Angel.<br>“And yet you are immortal!”",
		source: "The Wonderful Visit",
	},
	{
		text: "And I have by me, for my comfort, two strange white flowers - shriveled now, and brown and flat and brittle - to witness that even when mind and strength had gone, gratitude and a mutual tenderness still lived on in the heart of men.",
		source: "The Time Machine",
	},
	{
		text: "Why afraid? The secret, shameful things are most terribly beautiful.",
		source: "The Rainbow",
	},
	{
		text: "A cat could lie perfectly peacefully on the hearthrug whilst its master or mistress writhed in agony a yard away.",
		source: "The Rainbow",
	},
	{
		text: "Ultimately, saying that you don’t care about privacy because you have nothing to hide is no different from saying you don’t care about freedom of speech because you have nothing to say.",
		source: "Permanent Record",
	},
	{
		text: "Nothing inspires arrogance like a lifetime spent controlling machines that are incapable of criticism.",
		source: "Permanent Record",
	},
	{
		text: "Niente è la morte in confronto alla vergogna.",
		source: "Il giorno della civetta",
	},
	{
		text: "Ciò che la plebe imparò un tempo a credere senza ragioni, chi potrebbe rovesciarglielo – con delle ragioni?",
		source: "Così parlò Zarathustra",
	},
	{
		text: "Dormire non è un'arte da poco: per farlo, bisogna prima essere stati desti tutto il giorno.",
		source: "Così parlò Zarathustra",
	},
	{
		text: "Il mozzicone di candela già da un pezzo si stava spegnendo nel candeliere storto, e illuminava con la sua luce fioca, in quella misera stanza, l'assassino e la peccatrice, stranamente riuniti nella lettura del libro eterno.",
		source: "Delitto e castigo",
	},
	{
		text: "Eccoli qui: vanno e vengono su e giù per la strada, e sì che ciascuno di loro, per la sua stessa natura, è un mascalzone e un bandito; o, peggio ancora, un idiota! Ma se non mandassero me ai lavori forzati, tutti quanti si infurierebbero, pieni di nobile sdegno! Oh, come li odio!",
		source: "Delitto e castigo",
	},
	{
		text: "Così, avendo profondissima la convinzione della propria genialità, e sentendosi ammirato e amato, egli conservava con tutta naturalezza il suo contegno di persona superiore.",
		source: "Senilità",
	},
	{
		text: "L'inventiva, bisogna ammetterlo con umiltà, non consiste nel creare dal vuoto, bensì dal caos.",
		source: "Frankestein",
	},
	{
		text: "Wubba Lubba Dub Dub!",
		source: "Rick and Morty",
	},
	{
		text: "It is only the attempt to write down your ideas that enables them to develop.",
		source: "Wittgenstein",
	},
	{
		text: "What has been done, thought, written, or spoken is not culture; culture is only that fraction which is remembered.",
		source: "Gary Taylor",
	},
	{
		text: "Love is an expression of familiarity over time.",
		source: "Rick and Morty",
	},
	{
		text: "When Smart people get happy they stop recognising themselves.",
		source: "Rick and Morty",
	},
	{
		text: "WAR IS PEACE<br>FREEDOM IS SLAVERY<br>IGNORANCE IS STRENGTH",
		source: "1984",
	},
	{
		text: "The best books are those that tell you what you know already.",
		source: "1984",
	},
	{
		text: "From the proletarians nothing is to be feared. Left to themselves, they will continue from generation to generation and from century to century, working, breeding and dying.",
		source: "1984",
	},
	{
		text: "Proles and animals are free.",
		source: "1984",
	},
	{
		text: "I libri che si definiscono immorali sono quelli che rivelano al mondo la sua vergogna.",
		source: "Il ritratto di Dorian Gray, Capitolo diciannovesimo",
	},
	{
		text: "When you realise nothing matters, the universe is yours.",
		source: "Rick and Morty",
	},
	{
		text: "THE BIG BROTHER IS WATCHING YOU",
		source: "1984",
	},
	{
		text: "We shall meet in the place where there is no darkness.",
		source: "1984",
	},
	{
		text: "Weddings are basically just funerals with cake.",
		source: "Rick and Morty S2E10",
	},
	{
		text: "Il computer non è una macchina intelligente che aiuta le persona stupide, anzi è una macchina stupida che funziona sono nelle mani delle persone intelligenti.",
		source: "Umberto Eco",
	},
	{
		text: "If I had eight hours to chop down a tree, I’d spend the first six of them sharpening my axe.",
		source: "Abram Lincoln",
	},
	{
		text: "Si può dire che c'è una dolcezza straziante nei libri, qualcosa che si tocca con la mano e dà refrigerio anche se poi non si fa mai acchiappare del tutto.",
		source: "La Scuola ci salverà",
	},
	{
		text: "Non è la religione ad aver creato l'uomo, ma l'uomo ad aver creato la religione.",
		source: "Mr. Robot",
	},
	{
		text: "I miei giorni di scuola! Lo scorrere silenzioso della mia esistenza...",
		source: "David Copperfield",
	},
	{
		text: "It’s so easy to forget how much noise the Matrix pumps into your head until you unplug.",
		source: "Niobe",
	},
	{
		text: "<b>Andy Dufrense</b>: I guess it comes down to a simple choice, really. Get busy living, or get busy dying.",
		source: "The Shawshank Redemption",
	},
	{
		text: "So it goes.",
		source: "Slaughterhouse-Five",
	},
	{
		text: "<b>Billy</b>: Why me?<br><b>Trafalmadorian</b>: Why you? Why us for that matter? Why anything? Because this moment simply is.",
		source: "Slaughterhouse-Five",
	},
	{
		text: "Sed fugit interea fugit irreparabile tempus",
		source: "Publius Vergilius Maro",
	},
	{
		text: "Meglio dormire con un cannibale sobrio che con un cristiano ubriaco.",
		source: "Moby Dick",
	},
	{
		text: "Una volta i libri venivano scritti da uomini di lettere e letti dal pubblico. Oggi i libri sono scritti dal pubblico e letti da nessuno.",
		source: "Oscar Wilde",
	},
	{
		text: "Any physical theory is always provisional, in the sense that it is only a hypothesis: you can never prove it. No matter how many times the results of experiments agree with some theory, you can never be sure that the next time the result will not contradict the theory.",
		source: "A Brief History of Time",
	},
	{
		text: "Think deeply about things. Don’t just go along because that’s the way things are or that’s what your friends say. Consider the effects, consider the alternatives, but most importantly, just think.",
		source: "Aaron Swartz",
	},
	{
		text: "Why are you wasting your time on things you’re good at? Lean into the pain.",
		source: "Aaron Swartz",
	},
	{
		text: "Il caso è talmente disperato e io mi muovo in un tal pantano di sciocchezze, che rinuncio addirittura all'idea di uscirne e mi abbandono al mio fato.",
		source: "David Copperfield",
	},
	{
		text: "Ho sempre visto, osservando la natura umana, che l'uomo il quale abbia buone ragioni per credere in se stesso, non si pavoneggia mai davanti agli altri per indurli a credere in lui.",
		source: "David Copperfield",
	},
	{
		text: "L'esperienza non ha alcun valore etico, è solo il nome che gli uomini danno i propri errori.",
		source: "Il ritratto di Dorian Gray",
	},
	{
		text: "La più nobile come la più bassa forma di critica sono una sorta di autobiografia.",
		source: "Il ritratto di Dorian Gray",
	},
	{
		text: "L'inventiva, bisogna ammetterlo con umiltà, non consiste nel creare dal vuoto, bensì dal caos.",
		source: "Frankestein",
	},
	{
		text: "Una grassona sfiatata, dall'aria sconfitta, con una tuta sporca, che arrancava al nostro fianco, sentì quello che stava dicendo Miss Pefko. Si girò a esaminare il dottor Breed, lanciandogli un'occhiata di impotente rimprovero. Lei odiava la gente che pensava troppo. In quel momento quella donna mi colpì come la degna rappresentante di quasi tutta l'umanità.",
		source: "Ghiaccio-nove",
	},
	{
		text: "Quello che avevo visto, naturalmente, era il rito bokononista del boko-maru, ovvero la fusione delle coscienze. Noi bokononisti crediamo che sia impossibile stare piede-a-piede con una persona senza amarla, a patto che i piedi di entrambe le parti siano puliti e ben curati.",
		source: "Ghiaccio-nove",
	},
	{
		text: "L'uomo si ritrae in solitudine per peccare.",
		source: "Il mestiere di vivere",
	},
	{
		text: "Leggendo non cerchiamo idee nuove, ma pensieri già da noi pensati, che acquistano sulla pagina un suggello di conferma. Ci colpiscono degli altri le parole che risuonano in una zona già nostra – che già viviamo – e facendola vibrare ci permettono di cogliere nuovi spunti dentro di noi.",
		source: "Il mestiere di vivere",
	},
	{
		text: "Gli uomini che hanno una tempestosa vita interiore e non cercano sfogo nei discorsi o nella scrittura sono semplicemente uomini che non hanno una tempestosa vita interiore.",
		source: "Il mestiere di vivere",
	},
	{
		text: "Date una compagnia al solitario e parlerà piú di chiunque.",
		source: "Il mestiere di vivere",
	},
	{
		text: "Non bastano le disgrazie a fare di un fesso una persona intelligente.",
		source: "Il mestiere di vivere",
	},
	{
		text: "L’ozio rende lente le ore e veloci gli anni. L’operosità rapide le ore e lenti gli anni.",
		source: "Il mestiere di vivere",
	},
	{
		text: "né il sole né la morte si possono guardare fissi",
		source: "L'isola del giorno prima",
	},
	{
		text: "Monotony collapses time; novelty unfolds it. You can exercise daily and eat healthily and live a long life, while experiencing a short one. If you spend your life sitting in a cubicle and passing papers, one day is bound to blend unmemorably into the next - and disappear. That's why it's so important to change routines regularly, and take vacations to exotic locales, and have as many new experiences as possible that can serve to anchor our memories. Creating new memories stretches out psychological time, and lengthens our perception of our lives.",
		source: "Moonwalking with Einstein",
	},
	{
		text: "Ha poco valore tutto ciò che ha un prezzo.",
		source: "Così parlò Zarathustra",
	},
	{
		text: "In verità, l'uomo è una sudicia corrente. Bisogna essere un mare per accogliere una sudicia corrente senza diventare impuri.",
		source: "Così parlò Zarathustra",
	},
	{
		text: "“No, here,” she said, going out to the slope full under the moonshine. She lay motionless, with wide-open eyes looking at the moon. He came direct to her, without preliminaries. She held him pinned down at the chest, awful. The fight, the struggle for consummation was terrible. It lasted till it was agony to his soul, till he succumbed, till he gave way as if dead, lay with his face buried, partly in her hair, partly in the sand, motionless, as if he would be motionless now forever, hidden away in the dark, buried, only buried, he only wanted to be buried in the goodly darkness, only that, and no more.",
		source: "The Rainbow",
	},
	{
		text: "I learned to write because I am one of those people who somehow cannot manage the common communications of smiles and gestures, but must use words to get across things that other people would never need to say.",
		source: "Moneyball",
	},
	{
		text: "Seek knowledge from the cradle to the grave.",
		source: "Prophet Mohammed",
	},
	{
		text: "I find to my amazement that the more I love mankind as a whole, the less I love man in particular.",
		source: "The Brothers Karamazov",
	},
	{
		text: "A bug is never just a mistake. It represents something bigger. An error of thinking that makes you who you are.",
		source: "Mr. Robot",
	},
	{
		text: "The voice of anatomy, like the voice of all nature, never reaches the mental ear of the Great Commoner. It is the novel province of anatomy to tell the truth, the whole truth, and nothing but the truth about the structure, the origin and the history of man.",
		source:
			"Evolution and Religion in Education: Polemics of the Fundamentalist",
	},
	{
		text: "The first principle is that you must not fool yourself, and you are the easiest person to fool.",
		source: "Richard Feynman",
	},
	{
		text: "What an astonishing thing a book is. It's a flat object made from a tree with flexible parts on which are imprinted lots of funny dark squiggles. But one glance at it and you're inside the mind of another person, maybe somebody dead for thousands of years. Across the millennia, an author is speaking clearly and silently inside your head, directly to you. Writing is perhaps the greatest of human inventions, binding together people who never knew each other, citizens of distant epochs. Books break the shackles of time. A book is proof that humans are capable of working magic.",
		source: "Cosmos, Part 11: The Persistence of Memory",
	},
	{
		text: "The main thing to do is pay attention. Pay close attention to everything, notice what no one else notices. Then you'll know what no one else knows, and that's always useful.",
		source: "The City of Ember",
	},
	{
		text: "The weird thing about houses is that they almost always look like nothing is happening inside of them, even though they contain most of our lives. I wondered if that was sort of the point of architecture.",
		source: "The Fault in Our Stars",
	},
	{
		text: "Sometimes terrible things happen, but there's nothing more terrible than not having anybody to tell it to.",
		source: "Front Desk",
	},
	{
		text: "But the law of loving others could not be discovered by reason, because it is unreasonable.",
		source: "Anna Karenina",
	},
	{
		text: "The difference between treason and patriotism is only a matter of dates.",
		source: "The Count of Monte Cristo",
	},
	{
		text: "I have no idea how I untangled the complicated process of words and thought, but it happened quickly and naturally. By the time I was two, all my memories had words, and all my words had meanings.",
		source: "Out of My Mind",
	},
	{
		text: "As long as people believe in absurdities, they will continue to commit atrocities.",
		source: "Voltaire",
	},
	{
		text: "Build a man a fire, and he'll be warm for a day. Set a man on fire, and he'll be warm for the rest of his life.",
		source: "Jingo",
	},
	{
		text: "Even the best-designed chair won't make up for bad posture. Bad posture is the root of many physical problems. So sit upright and don't slouch. Your back should be straight to support the upper part of your body.",
		source: "Mastering Computer Typing (1995)",
	},
	{
		text: "No matter how a program twists and turns to get out of itself, it is still following the rules inherent in itself. It is no more possible for it to escape than it is for a human being to decide voluntarily not to obey the laws of physics.",
		source: "Gödel, Escher, Bach: An Eternal Golden Braid",
	},
	{
		text: "It is better to be unhappy and know the worst, than to be happy in a fool's paradise.",
		source: "The Idiot",
	},
	{
		text: "This gentleman has been standing alone against us. Now, he doesn't say that the boy is not guilty; he just isn't sure. Well, it's not easy to stand alone against the ridicule of others, so he gambled for support... and I gave it to him. I respect his motives. The boy is probably guilty, but - eh, I want to hear more. Right now the vote is 10 to 2...",
		source: "12 Angry Men",
	},
	{
		text: "Academic writers cannot get writer's block. Don't confuse yourself with your friends teaching creative writing in the fine arts department. You're not crafting a deep narrative or composing metaphors that expose mysteries of the human heart. The subtlety of your analysis of variance will not move readers to tears, although the tediousness of it might. People will not photocopy your reference list and pass it out to friends whom they wish to inspire. Novelists and poets are the landscape artists and portrait painters; academic writers are the people with big paint sprayers who repaint your basement.",
		source:
			"How to Write a Lot: A Practical Guide to Productive Academic Writing",
	},
	{
		text: "The moment one constructs a device to carry into practice a crude idea, he finds himself unavoidably engrossed with the details and defects of the apparatus. As he goes on improving and reconstructing, his force of concentration diminishes and he loses sight of the great underlying principle. Results may be obtained but always at the sacrifice of quality. My method is different. I do not rush into actual work. When I get an idea, I start at once building it up in my imagination. I change the construction, make improvements and operate the device in my mind. It is absolutely immaterial to me whether I run my turbine in thought or test it in my shop.",
		source: "My Inventions",
	},
	{
		text: "You have to do the things you don't want to do, before you can do the things you truly want to do.",
		source: "Chihayafuru",
	},
	{
		text: "He was swimming in a sea of other people's expectations. Men had drowned in seas like that.",
		source: "Robert Jordan, New Spring",
	},
	{
		text: "You're the one constant in a sea of variables.",
		source: "Mr. Robot",
	},
	{
		text: "Death is what gives life meaning. To know your days are numbered. Your time is short.",
		source: "The Ancient One, Doctor Strange",
	},
	{
		text: "Remind yourself that overconfidence is a slow and insidious killer.",
		source: "Darkest Dungeon",
	},
	{
		text: "In theory there is no difference between theory and practice. In practice there is.",
		source: "Yogi Berra",
	},
	{
		text: "There's no shame in admitting what you don't know. The only shame is pretending you know all the answers.",
		source: "Neil deGrasse Tyson",
	},
	{
		text: "Madness is such a hard thing to define. Which makes it such an easy label to affix to one's enemies.",
		source: "Black Sails",
	},
	{
		text: "We don't rise to the level of our expectations, we fall to the level of our training.",
		source: "Archilochus",
	},
	{
		text: "Nel mezzo del cammin di nostra vita mi ritrovai per una selva oscura, ché la diritta via era smarrita.",
		source: "Dante Alighieri",
	},
];

const i = Math.floor(Math.random() * quotes.length);
document.getElementById("text").innerHTML = quotes[i].text;
document.getElementById("source").innerHTML = quotes[i].source;
