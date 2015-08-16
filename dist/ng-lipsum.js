/*
The MIT License (MIT)

Copyright (c) 2015 Selim Arsever

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

angular.module('ngLipsum', []);
angular.module('ngLipsum').provider('ngLipsum', function() {
    'use strict';
    
    // from https://la.wikisource.org/wiki/De_finibus_bonorum_et_malorum/Liber_Primus
    this.dataset = ['Non', 'eram', 'nescius', 'Brute', 'cum', 'quae', 'summis', 'ingeniis', 'exquisitaque', 'doctrina',
        'philosophi', 'Graeco', 'sermone', 'tractavissent', 'ea', 'Latinis', 'litteris', 'mandaremus', 'fore', 'ut',
        'hic', 'noster', 'labor', 'in', 'varias', 'reprehensiones', 'incurreret', 'nam', 'quibusdam', 'et', 'iis',
        'quidem', 'non', 'admodum', 'indoctis', 'totum', 'hoc', 'displicet', 'philosophari', 'quidam', 'autem', 'non',
        'tam', 'id', 'reprehendunt', 'si', 'remissius', 'agatur', 'sed', 'tantum', 'studium', 'tamque', 'multam',
        'operam', 'ponendam', 'in', 'eo', 'non', 'arbitrantur', 'erunt', 'etiam', 'et', 'ii', 'quidem', 'eruditi',
        'Graecis', 'litteris', 'contemnentes', 'Latinas', 'qui', 'se', 'dicant', 'in', 'Graecis', 'legendis',
        'operam', 'malle', 'consumere', 'postremo', 'aliquos', 'futuros', 'suspicor', 'qui', 'me', 'ad', 'alias',
        'litteras', 'vocent', 'genus', 'hoc', 'scribendi', 'etsi', 'sit', 'elegans', 'personae', 'tamen', 'et',
        'dignitatis', 'esse', 'negent', 'Contra', 'quos', 'omnis', 'dicendum', 'breviter', 'existimo', 'Quamquam',
        'philosophiae', 'quidem', 'vituperatoribus', 'satis', 'responsum', 'est', 'eo', 'libro', 'quo', 'a', 'nobis',
        'philosophia', 'defensa', 'et', 'collaudata', 'est', 'cum', 'esset', 'accusata', 'et', 'vituperata', 'ab',
        'Hortensio', 'qui', 'liber', 'cum', 'et', 'tibi', 'probatus', 'videretur', 'et', 'iis', 'quos', 'ego',
        'posse', 'iudicare', 'arbitrarer', 'plura', 'suscepi', 'veritus', 'ne', 'movere', 'hominum', 'studia',
        'viderer', 'retinere', 'non', 'posse', 'Qui', 'autem', 'si', 'maxime', 'hoc', 'placeat', 'moderatius',
        'tamen', 'id', 'volunt', 'fieri', 'difficilem', 'quandam', 'temperantiam', 'postulant', 'in', 'eo', 'quod',
        'semel', 'admissum', 'coerceri', 'reprimique', 'non', 'potest', 'ut', 'propemodum', 'iustioribus', 'utamur',
        'illis', 'qui', 'omnino', 'avocent', 'a', 'philosophia', 'quam', 'his', 'qui', 'rebus', 'infinitis', 'modum',
        'constituant', 'in', 'reque', 'eo', 'meliore', 'quo', 'maior', 'sit', 'mediocritatem', 'desiderent', 'Sive',
        'enim', 'ad', 'sapientiam', 'perveniri', 'potest', 'non', 'paranda', 'nobis', 'solum', 'ea', 'sed', 'fruenda',
        'etiam', 'sapientia', 'est', 'sive', 'hoc', 'difficile', 'est', 'tamen', 'nec', 'modus', 'est', 'ullus',
        'investigandi', 'veri', 'nisi', 'inveneris', 'et', 'quaerendi', 'defatigatio', 'turpis', 'est', 'cum', 'id',
        'quod', 'quaeritur', 'sit', 'pulcherrimum', 'etenim', 'si', 'delectamur', 'cum', 'scribimus', 'quis', 'est',
        'tam', 'invidus', 'qui', 'ab', 'eo', 'nos', 'abducat', 'sin', 'laboramus', 'quis', 'est', 'qui', 'alienae',
        'modum', 'statuat', 'industriae', 'nam', 'ut', 'Terentianus', 'Chremes', 'non', 'inhumanus', 'qui', 'novum',
        'vicinum', 'non', 'vult', 'fodere', 'aut', 'arare', 'aut', 'aliquid', 'ferre', 'denique', 'non', 'enim',
        'illum', 'ab', 'industria', 'sed', 'ab', 'inliberali', 'labore', 'deterret', 'sic', 'isti', 'curiosi', 'quos',
        'offendit', 'noster', 'minime', 'nobis', 'iniucundus', 'labor', 'Iis', 'igitur', 'est', 'difficilius',
        'satis', 'facere', 'qui', 'se', 'Latina', 'scripta', 'dicunt', 'contemnere', 'in', 'quibus', 'hoc', 'primum',
        'est', 'in', 'quo', 'admirer', 'cur', 'in', 'gravissimis', 'rebus', 'non', 'delectet', 'eos', 'sermo',
        'patrius', 'cum', 'idem', 'fabellas', 'Latinas', 'ad', 'verbum', 'e', 'Graecis', 'expressas', 'non', 'inviti',
        'legant', 'quis', 'enim', 'tam', 'inimicus', 'paene', 'nomini', 'Romano', 'est', 'qui', 'Ennii', 'Medeam',
        'aut', 'Antiopam', 'Pacuvii', 'spernat', 'aut', 'reiciat', 'quod', 'se', 'isdem', 'Euripidis', 'fabulis',
        'delectari', 'dicat', 'Latinas', 'litteras', 'oderit', 'Synephebos', 'ego', 'inquit', 'potius', 'Caecilii',
        'aut', 'Andriam', 'Terentii', 'quam', 'utramque', 'Menandri', 'legam', 'A', 'quibus', 'tantum', 'dissentio',
        'ut', 'cum', 'Sophocles', 'vel', 'optime', 'scripserit', 'Electram', 'tamen', 'male', 'conversam', 'Atilii',
        'mihi', 'legendam', 'putem', 'de', 'quo', 'Lucilius', 'ferreum', 'scriptorem', 'verum', 'opinor',
        'scriptorem', 'tamen', 'ut', 'legendus', 'sit', 'rudem', 'enim', 'esse', 'omnino', 'in', 'nostris', 'poetis',
        'aut', 'inertissimae', 'segnitiae', 'est', 'aut', 'fastidii', 'delicatissimi', 'mihi', 'quidem', 'nulli',
        'satis', 'eruditi', 'videntur', 'quibus', 'nostra', 'ignota', 'sunt', 'an', 'Utinam', 'ne', 'in', 'nemore',
        'nihilo', 'minus', 'legimus', 'quam', 'hoc', 'idem', 'Graecum', 'quae', 'autem', 'de', 'bene', 'beateque',
        'vivendo', 'a', 'Platone', 'disputata', 'sunt', 'haec', 'explicari', 'non', 'placebit', 'Latine', 'Quid',
        'si', 'nos', 'non', 'interpretum', 'fungimur', 'munere', 'sed', 'tuemur', 'ea', 'quae', 'dicta', 'sunt', 'ab',
        'iis', 'quos', 'probamus', 'eisque', 'nostrum', 'iudicium', 'et', 'nostrum', 'scribendi', 'ordinem',
        'adiungimus', 'quid', 'habent', 'cur', 'Graeca', 'anteponant', 'iis', 'quae', 'et', 'splendide', 'dicta',
        'sint', 'neque', 'sint', 'conversa', 'de', 'Graecis', 'nam', 'si', 'dicent', 'ab', 'illis', 'has', 'res',
        'esse', 'tractatas', 'ne', 'ipsos', 'quidem', 'Graecos', 'est', 'cur', 'tam', 'multos', 'legant', 'quam',
        'legendi', 'sunt', 'quid', 'enim', 'est', 'a', 'Chrysippo', 'praetermissum', 'in', 'Stoicis', 'legimus',
        'tamen', 'Diogenem', 'Antipatrum', 'Mnesarchum', 'Panaetium', 'multos', 'alios', 'in', 'primisque',
        'familiarem', 'nostrum', 'Posidonium', 'quid', 'Theophrastus', 'mediocriterne', 'delectat', 'cum', 'tractat',
        'locos', 'ab', 'Aristotele', 'ante', 'tractatos', 'quid', 'Epicurei', 'num', 'desistunt', 'de', 'isdem', 'de',
        'quibus', 'et', 'ab', 'Epicuro', 'scriptum', 'est', 'et', 'ab', 'antiquis', 'ad', 'arbitrium', 'suum',
        'scribere', 'quodsi', 'Graeci', 'leguntur', 'a', 'Graecis', 'isdem', 'de', 'rebus', 'alia', 'ratione',
        'compositis', 'quid', 'est', 'cur', 'nostri', 'a', 'nostris', 'non', 'legantur', 'Quamquam', 'si', 'plane',
        'sic', 'verterem', 'Platonem', 'aut', 'Aristotelem', 'ut', 'verterunt', 'nostri', 'poetae', 'fabulas', 'male',
        'credo', 'mererer', 'de', 'meis', 'civibus', 'si', 'ad', 'eorum', 'cognitionem', 'divina', 'illa', 'ingenia',
        'transferrem', 'sed', 'id', 'neque', 'feci', 'adhuc', 'nec', 'mihi', 'tamen', 'ne', 'faciam', 'interdictum',
        'puto', 'locos', 'quidem', 'quosdam', 'si', 'videbitur', 'transferam', 'et', 'maxime', 'ab', 'iis', 'quos',
        'modo', 'nominavi', 'cum', 'inciderit', 'ut', 'id', 'apte', 'fieri', 'possit', 'ut', 'ab', 'Homero', 'Ennius',
        'Afranius', 'a', 'Menandro', 'solet', 'Nec', 'vero', 'ut', 'noster', 'Lucilius', 'recusabo', 'quo', 'minus',
        'omnes', 'mea', 'legant', 'utinam', 'esset', 'ille', 'Persius', 'Scipio', 'vero', 'et', 'Rutilius', 'multo',
        'etiam', 'magis', 'quorum', 'ille', 'iudicium', 'reformidans', 'Tarentinis', 'ait', 'se', 'et', 'Consentinis',
        'et', 'Siculis', 'scribere', 'facete', 'is', 'quidem', 'sicut', 'alia', 'sed', 'neque', 'tam', 'docti', 'tum',
        'erant', 'ad', 'quorum', 'iudicium', 'elaboraret', 'et', 'sunt', 'illius', 'scripta', 'leviora', 'ut',
        'urbanitas', 'summa', 'appareat', 'doctrina', 'mediocris', 'Ego', 'autem', 'quem', 'timeam', 'lectorem',
        'cum', 'ad', 'te', 'ne', 'Graecis', 'quidem', 'cedentem', 'in', 'philosophia', 'audeam', 'scribere',
        'quamquam', 'a', 'te', 'ipso', 'id', 'quidem', 'facio', 'provocatus', 'gratissimo', 'mihi', 'libro', 'quem',
        'ad', 'me', 'de', 'virtute', 'misisti', 'Sed', 'ex', 'eo', 'credo', 'quibusdam', 'usu', 'venire', 'ut',
        'abhorreant', 'a', 'Latinis', 'quod', 'inciderint', 'in', 'inculta', 'quaedam', 'et', 'horrida', 'de',
        'malis', 'Graecis', 'Latine', 'scripta', 'deterius', 'quibus', 'ego', 'assentior', 'dum', 'modo', 'de',
        'isdem', 'rebus', 'ne', 'Graecos', 'quidem', 'legendos', 'putent', 'res', 'vero', 'bonas', 'verbis',
        'electis', 'graviter', 'ornateque', 'dictas', 'quis', 'non', 'legat', 'nisi', 'qui', 'se', 'plane', 'Graecum',
        'dici', 'velit', 'ut', 'a', 'Scaevola', 'est', 'praetore', 'salutatus', 'Athenis', 'Albucius', 'Quem',
        'quidem', 'locum', 'comit', 'multa', 'venustate', 'et', 'omni', 'sale', 'idem', 'Lucilius', 'apud', 'quem',
        'praeclare', 'Scaevola', 'Graecum', 'te', 'Albuci', 'quam', 'Romanum', 'atque', 'Sabinum', 'municipem',
        'Ponti', 'Tritani', 'centurionum', 'praeclarorum', 'hominum', 'ac', 'primorum', 'signiferumque', 'maluisti',
        'dici', 'Graece', 'ergo', 'praetor', 'Athenis', 'id', 'quod', 'maluisti', 'te', 'cum', 'ad', 'me', 'accedis',
        'saluto', 'chaere', 'inquam', 'Tite!', 'lictores', 'turma', 'omnis', 'chorusque', 'chaere', 'Tite!', 'hinc',
        'hostis', 'mi', 'Albucius', 'hinc', 'inimicus', 'Sed', 'iure', 'Mucius', 'ego', 'autem', 'mirari', '[satis]',
        'non', 'queo', 'unde', 'hoc', 'sit', 'tam', 'insolens', 'domesticarum', 'rerum', 'fastidium', 'non', 'est',
        'omnino', 'hic', 'docendi', 'locus', 'sed', 'ita', 'sentio', 'et', 'saepe', 'disserui', 'Latinam', 'linguam',
        'non', 'modo', 'non', 'inopem', 'ut', 'vulgo', 'putarent', 'sed', 'locupletiorem', 'etiam', 'esse', 'quam',
        'Graecam', 'quando', 'enim', 'nobis', 'vel', 'dicam', 'aut', 'oratoribus', 'bonis', 'aut', 'poetis', 'postea',
        'quidem', 'quam', 'fuit', 'quem', 'imitarentur', 'ullus', 'orationis', 'vel', 'copiosae', 'vel', 'elegantis',
        'ornatus', 'defuit', 'Ego', 'vero', 'quoniam', 'forensibus', 'operis', 'laboribus', 'periculis', 'non',
        'deseruisse', 'mihi', 'videor', 'praesidium', 'in', 'quo', 'a', 'populo', 'Romano', 'locatus', 'sum', 'debeo',
        'profecto', 'quantumcumque', 'possum', 'in', 'eo', 'quoque', 'elaborare', 'ut', 'sint', 'opera', 'studio',
        'labore', 'meo', 'doctiores', 'cives', 'mei', 'nec', 'cum', 'istis', 'tantopere', 'pugnare', 'qui', 'Graeca',
        'legere', 'malint', 'modo', 'legant', 'illa', 'ipsa', 'ne', 'simulent', 'et', 'iis', 'servire', 'qui', 'vel',
        'utrisque', 'litteris', 'uti', 'velint', 'vel', 'si', 'suas', 'habent', 'illas', 'non', 'magnopere',
        'desiderent', 'Qui', 'autem', 'alia', 'malunt', 'scribi', 'a', 'nobis', 'aequi', 'esse', 'debent', 'quod',
        'et', 'scripta', 'multa', 'sunt', 'sic', 'ut', 'plura', 'nemini', 'e', 'nostris', 'et', 'scribentur',
        'fortasse', 'plura', 'si', 'vita', 'suppetet', 'et', 'tamen', 'qui', 'diligenter', 'haec', 'quae', 'de',
        'philosophia', 'litteris', 'mandamus', 'legere', 'assueverit', 'iudicabit', 'nulla', 'ad', 'legendum', 'his',
        'esse', 'potiora', 'quid', 'est', 'enim', 'in', 'vita', 'tantopere', 'quaerendum', 'quam', 'cum', 'omnia',
        'in', 'philosophia', 'tum', 'id', 'quod', 'his', 'libris', 'quaeritur', 'qui', 'sit', 'finis', 'quid',
        'extremum', 'quid', 'ultimum', 'quo', 'sint', 'omnia', 'bene', 'vivendi', 'recteque', 'faciendi', 'consilia',
        'referenda', 'quid', 'sequatur', 'natura', 'ut', 'summum', 'ex', 'rebus', 'expetendis', 'quid', 'fugiat',
        'ut', 'extremum', 'malorum', 'qua', 'de', 're', 'cum', 'sit', 'inter', 'doctissimos', 'summa', 'dissensio',
        'quis', 'alienum', 'putet', 'eius', 'esse', 'dignitatis', 'quam', 'mihi', 'quisque', 'tribuat', 'quid', 'in',
        'omni', 'munere', 'vitae', 'optimum', 'et', 'verissimum', 'sit', 'exquirere', 'An', 'partus', 'ancillae',
        'sitne', 'in', 'fructu', 'habendus', 'disseretur', 'inter', 'principes', 'civitatis', 'P', 'Scaevolam',
        'Mque', 'Manilium', 'ab', 'iisque', 'M', 'Brutus', 'dissentiet', 'quod', 'et', 'acutum', 'genus', 'est', 'et',
        'ad', 'usus', 'civium', 'non', 'inutile', 'nosque', 'ea', 'scripta', 'reliquaque', 'eiusdem', 'generis', 'et',
        'legimus', 'libenter', 'et', 'legemus', 'haec', 'quae', 'vitam', 'omnem', 'continent', 'neglegentur', 'nam',
        'ut', 'sint', 'illa', 'vendibiliora', 'haec', 'uberiora', 'certe', 'sunt', 'quamquam', 'id', 'quidem',
        'licebit', 'iis', 'existimare', 'qui', 'legerint', 'nos', 'autem', 'hanc', 'omnem', 'quaestionem', 'de',
        'finibus', 'bonorum', 'et', 'malorum', 'fere', 'a', 'nobis', 'explicatam', 'esse', 'his', 'litteris',
        'arbitramur', 'in', 'quibus', 'quantum', 'potuimus', 'non', 'modo', 'quid', 'nobis', 'probaretur', 'sed',
        'etiam', 'quid', 'a', 'singulis', 'philosophiae', 'disciplinis', 'diceretur', 'persecuti', 'sumus', 'Ut',
        'autem', 'a', 'facillimis', 'ordiamur', 'prima', 'veniat', 'in', 'medium', 'Epicuri', 'ratio', 'quae',
        'plerisque', 'notissima', 'est', 'quam', 'a', 'nobis', 'sic', 'intelleges', 'eitam', 'ut', 'ab', 'ipsis',
        'qui', 'eam', 'disciplinam', 'probant', 'non', 'soleat', 'accuratius', 'explicari', 'verum', 'enim',
        'invenire', 'volumus', 'non', 'tamquam', 'adversarium', 'aliquem', 'convincere', 'accurate', 'autem',
        'quondam', 'a', 'L', 'Torquato', 'homine', 'omni', 'doctrina', 'erudito', 'defensa', 'est', 'Epicuri',
        'sententia', 'de', 'voluptate', 'a', 'meque', 'ei', 'responsum', 'cum', 'C', 'Triarius', 'in', 'primis',
        'gravis', 'et', 'doctus', 'adolescens', 'ei', 'disputationi', 'interesset', 'Nam', 'cum', 'ad', 'me', 'in',
        'Cumanum', 'salutandi', 'causa', 'uterque', 'venisset', 'pauca', 'primo', 'inter', 'nos', 'de', 'litteris',
        'quarum', 'summum', 'erat', 'in', 'utroque', 'studium', 'deinde', 'Torquatus', 'Quoniam', 'nacti', 'te',
        'inquit', 'sumus', 'aliquando', 'otiosum', 'certe', 'audiam', 'quid', 'sit', 'quod', 'Epicurum', 'nostrum',
        'non', 'tu', 'quidem', 'oderis', 'ut', 'fere', 'faciunt', 'qui', 'ab', 'eo', 'dissentiunt', 'sed', 'certe',
        'non', 'probes', 'eum', 'quem', 'ego', 'arbitror', 'unum', 'vidisse', 'verum', 'maximisque', 'erroribus',
        'animos', 'hominum', 'liberavisse', 'et', 'omnia', 'tradidisse', 'quae', 'pertinerent', 'ad', 'bene',
        'beateque', 'vivendum', 'sed', 'existimo', 'te', 'sicut', 'nostrum', 'Triarium', 'minus', 'ab', 'eo',
        'delectari', 'quod', 'ista', 'Platonis', 'Aristoteli', 'Theophrasti', 'orationis', 'ornamenta', 'neglexerit',
        'nam', 'illud', 'quidem', 'adduci', 'vix', 'possum', 'ut', 'ea', 'quae', 'senserit', 'ille', 'tibi', 'non',
        'vera', 'videantur', 'Vide', 'quantum', 'inquam', 'fallare', 'Torquate', 'oratio', 'me', 'istius',
        'philosophi', 'non', 'offendit', 'nam', 'et', 'complectitur', 'verbis', 'quod', 'vult', 'et', 'dicit',
        'plane', 'quod', 'intellegam', 'et', 'tamen', 'ego', 'a', 'philosopho', 'si', 'afferat', 'eloquentiam', 'non',
        'asperner', 'si', 'non', 'habeat', 'non', 'admodum', 'flagitem', 're', 'mihi', 'non', 'aeque', 'satisfacit',
        'et', 'quidem', 'locis', 'pluribus', 'sed', 'quot', 'homines', 'tot', 'sententiae', 'falli', 'igitur',
        'possumus', 'Quam', 'ob', 'rem', 'tandem', 'inquit', 'non', 'satisfacit', 'te', 'enim', 'iudicem', 'aequum',
        'puto', 'modo', 'quae', 'dicat', 'ille', 'bene', 'noris', 'Nisi', 'mihi', 'Phaedrum', 'inquam', 'tu',
        'mentitum', 'aut', 'Zenonem', 'putas', 'quorum', 'utrumque', 'audivi', 'cum', 'mihi', 'nihil', 'sane',
        'praeter', 'sedulitatem', 'probarent', 'omnes', 'mihi', 'Epicuri', 'sententiae', 'satis', 'notae', 'sunt',
        'atque', 'eos', 'quos', 'nominavi', 'cum', 'Attico', 'nostro', 'frequenter', 'audivi', 'cum', 'miraretur',
        'ille', 'quidem', 'utrumque', 'Phaedrum', 'autem', 'etiam', 'amaret', 'cotidieque', 'inter', 'nos', 'ea',
        'quae', 'audiebamus', 'conferebamus', 'neque', 'erat', 'umquam', 'controversia', 'quid', 'ego',
        'intellegerem', 'sed', 'quid', 'probarem', 'Quid', 'igitur', 'est', 'inquit', 'audire', 'enim', 'cupio',
        'quid', 'non', 'probes', 'Principio', 'inquam', 'in', 'physicis', 'quibus', 'maxime', 'gloriatur', 'primum',
        'totus', 'est', 'alienus', 'Democritea', 'dicit', 'perpauca', 'mutans', 'sed', 'ita', 'ut', 'ea', 'quae',
        'corrigere', 'vult', 'mihi', 'quidem', 'depravare', 'videatur', 'ille', 'atomos', 'quas', 'appellat', 'id',
        'est', 'corpora', 'individua', 'propter', 'soliditatem', 'censet', 'in', 'infinito', 'inani', 'in', 'quo',
        'nihil', 'nec', 'summum', 'nec', 'infimum', 'nec', 'medium', 'nec', 'ultimum', 'nec', 'extremum', 'sit',
        'ita', 'ferri', 'ut', 'concursionibus', 'inter', 'se', 'cohaerescant', 'ex', 'quo', 'efficiantur', 'ea',
        'quae', 'sint', 'quaeque', 'cernantur', 'omnia', 'eumque', 'motum', 'atomorum', 'nullo', 'a', 'principio',
        'sed', 'ex', 'aeterno', 'tempore', 'intellegi', 'convenire', 'Epicurus', 'autem', 'in', 'quibus', 'sequitur',
        'Democritum', 'non', 'fere', 'labitur', 'quamquam', 'utriusque', 'cum', 'multa', 'non', 'probo', 'tum',
        'illud', 'in', 'primis', 'quod', 'cum', 'in', 'rerum', 'natura', 'duo', 'quaerenda', 'sint', 'unum', 'quae',
        'materia', 'sit', 'ex', 'qua', 'quaeque', 'res', 'efficiatur', 'alterum', 'quae', 'vis', 'sit', 'quae',
        'quidque', 'efficiat', 'de', 'materia', 'disseruerunt', 'vim', 'et', 'causam', 'efficiendi', 'reliquerunt',
        'sed', 'hoc', 'commune', 'vitium', 'illae', 'Epicuri', 'propriae', 'ruinae', 'censet', 'enim', 'eadem',
        'illa', 'individua', 'et', 'solida', 'corpora', 'ferri', 'deorsum', 'suo', 'pondere', 'ad', 'lineam', 'hunc',
        'naturalem', 'esse', 'omnium', 'corporum', 'motum', 'Deinde', 'ibidem', 'homo', 'acutus', 'cum', 'illud',
        'ocurreret', 'si', 'omnia', 'deorsus', 'e', 'regione', 'ferrentur', 'et', 'ut', 'dixi', 'ad', 'lineam',
        'numquam', 'fore', 'ut', 'atomus', 'altera', 'alteram', 'posset', 'attingere', 'itaque', '**', 'attulit',
        'rem', 'commenticiam', 'declinare', 'dixit', 'atomum', 'perpaulum', 'quo', 'nihil', 'posset', 'fieri',
        'minus', 'ita', 'effici', 'complexiones', 'et', 'copulationes', 'et', 'adhaesiones', 'atomorum', 'inter',
        'se', 'ex', 'quo', 'efficeretur', 'mundus', 'omnesque', 'partes', 'mundi', 'quaeque', 'in', 'eo', 'essent',
        'Quae', 'cum', 'tota', 'res', '(est)', 'ficta', 'pueriliter', 'tum', 'ne', 'efficit', '[quidem]', 'quod',
        'vult', 'nam', 'et', 'ipsa', 'declinatio', 'ad', 'libidinem', 'fingitur', 'ait', 'enim', 'declinare',
        'atomum', 'sine', 'causa', 'quo', 'nihil', 'turpius', 'physico', 'quam', 'fieri', 'quicquam', 'sine', 'causa',
        'dicere', 'et', 'illum', 'motum', 'naturalem', 'omnium', 'ponderum', 'ut', 'ipse', 'constituit', 'e',
        'regione', 'inferiorem', 'locum', 'petentium', 'sine', 'causa', 'eripuit', 'atomis', 'nec', 'tamen', 'id',
        'cuius', 'causa', 'haec', 'finxerat', 'assecutus', 'est', 'Nam', 'si', 'omnes', 'atomi', 'declinabunt',
        'nullae', 'umquam', 'cohaerescent', 'sive', 'aliae', 'declinabunt', 'aliae', 'suo', 'nutu', 'recte',
        'ferentur', 'primum', 'erit', 'hoc', 'quasi', 'provincias', 'atomis', 'dare', 'quae', 'recte', 'quae',
        'oblique', 'ferantur', 'deinde', 'eadem', 'illa', 'atomorum', 'in', 'quo', 'etiam', 'Democritus', 'haeret',
        'turbulenta', 'concursio', 'hunc', 'mundi', 'ornatum', 'efficere', 'non', 'poterit', 'ne', 'illud', 'quidem',
        'physici', 'credere', 'aliquid', 'esse', 'minimum', 'quod', 'profecto', 'numquam', 'putavisset', 'si', 'a',
        'Polyaeno', 'familiari', 'suo', 'geometrica', 'discere', 'maluisset', 'quam', 'illum', 'etiam', 'ipsum',
        'dedocere', 'Sol', 'Democrito', 'magnus', 'videtur', 'quippe', 'homini', 'erudito', 'in', 'geometriaque',
        'perfecto', 'huic', 'pedalis', 'fortasse', 'tantum', 'enim', 'esse', 'censet', 'quantus', 'videtur', 'vel',
        'paulo', 'aut', 'maiorem', 'aut', 'minorem', 'Ita', 'quae', 'mutat', 'ea', 'corrumpit', 'quae', 'sequitur',
        'sunt', 'tota', 'Democriti', 'atomi', 'inane', 'imagines', 'quae', 'eidola', 'nominant', 'quorum',
        'incursione', 'non', 'solum', 'videamus', 'sed', 'etiam', 'cogitemus', 'infinitio', 'ipsa', 'quam',
        'apeirian', 'vocant', 'tota', 'ab', 'illo', 'est', 'tum', 'innumerabiles', 'mundi', 'qui', 'et', 'oriantur',
        'et', 'intereant', 'cotidie', 'Quae', 'etsi', 'mihi', 'nullo', 'modo', 'probantur', 'tamen', 'Democritum',
        'laudatum', 'a', 'ceteris', 'ab', 'hoc', 'qui', 'eum', 'unum', 'secutus', 'esset', 'nollem', 'vituperatum',
        'Iam', 'in', 'altera', 'philosophiae', 'parte', 'quae', 'est', 'quaerendi', 'ac', 'disserendi', 'quae',
        'logikh', 'dicitur', 'iste', 'vester', 'plane', 'ut', 'mihi', 'quidem', 'videtur', 'inermis', 'ac', 'nudus',
        'est', 'tollit', 'definitiones', 'nihil', 'de', 'dividendo', 'ac', 'partiendo', 'docet', 'non', 'quo', 'modo',
        'efficiatur', 'concludaturque', 'ratio', 'tradit', 'non', 'qua', 'via', 'captiosa', 'solvantur', 'ambigua',
        'distinguantur', 'ostendit', 'iudicia', 'rerum', 'in', 'sensibus', 'ponit', 'quibus', 'si', 'semel',
        'aliquid', 'falsi', 'pro', 'vero', 'probatum', 'sit', 'sublatum', 'esse', 'omne', 'iudicium', 'veri', 'et',
        'falsi', 'putat', 'Confirmat', 'autem', 'illud', 'vel', 'maxime', 'quod', 'ipsa', 'natura', 'ut', 'ait',
        'ille', 'sciscat', 'et', 'probet', 'id', 'est', 'voluptatem', 'et', 'dolorem', 'ad', 'haec', 'et', 'quae',
        'sequamur', 'et', 'quae', 'fugiamus', 'refert', 'omnia', 'quod', 'quamquam', 'Aristippi', 'est', 'a',
        'Cyrenaicisque', 'melius', 'liberiusque', 'defenditur', 'tamen', 'eius', 'modi', 'esse', 'iudico', 'ut',
        'nihil', 'homine', 'videatur', 'indignius', 'ad', 'maiora', 'enim', 'quaedam', 'nos', 'natura', 'genuit',
        'et', 'conformavit', 'ut', 'mihi', 'quidem', 'videtur', 'ac', 'fieri', 'potest', 'ut', 'errem', 'sed', 'ita',
        'prorsus', 'existimo', 'neque', 'eum', 'Torquatum', 'qui', 'hoc', 'primus', 'cognomen', 'invenerit', 'aut',
        'torquem', 'illum', 'hosti', 'detraxisse', 'ut', 'aliquam', 'ex', 'eo', 'perciperet', 'corpore', 'voluptatem',
        'aut', 'cum', 'Latinis', 'tertio', 'consulatu', 'conflixisse', 'apud', 'Veserim', 'propter', 'voluptatem',
        'quod', 'vero', 'securi', 'percussit', 'filium', 'privavisse', 'se', 'etiam', 'videtur', 'multis',
        'voluptatibus', 'cum', 'ipsi', 'naturae', 'patrioque', 'amori', 'praetulerit', 'ius', 'maiestatis', 'atque',
        'imperii', 'quid', 'T', 'Torquatus', 'is', 'qui', 'consul', 'cum', 'Cn', 'Octavio', 'fuit', 'cum', 'illam',
        'severitatem', 'in', 'eo', 'filio', 'adhibuit', 'quem', 'in', 'adoptionem', 'D', 'Silano', 'emancipaverat',
        'ut', 'eum', 'Macedonum', 'legatis', 'accusantibus', 'quod', 'pecunias', 'praetorem', 'in', 'provincia',
        'cepisse', 'arguerent', 'causam', 'apud', 'se', 'dicere', 'iuberet', 'reque', 'ex', 'utraque', 'parte',
        'audita', 'pronuntiaret', 'eum', 'non', 'talem', 'videri', 'fuisse', 'in', 'imperio', 'quales', 'eius',
        'maiores', 'fuissent', 'et', 'in', 'conspectum', 'suum', 'venire', 'vetuit', 'numquid', 'tibi', 'videtur',
        'de', 'voluptatibus', 'suis', 'cogitavisse', 'Sed', 'ut', 'omittam', 'pericula', 'labores', 'dolorem',
        'etiam', 'quem', 'optimus', 'quisque', 'pro', 'patria', 'et', 'pro', 'suis', 'suscipit', 'ut', 'non', 'modo',
        'nullam', 'captet', 'sed', 'etiam', 'praetereat', 'omnes', 'voluptates', 'dolores', 'denique', 'quosvis',
        'suscipere', 'malit', 'quam', 'deserere', 'ullam', 'officii', 'partem', 'ad', 'ea', 'quae', 'hoc', 'non',
        'minus', 'declarant', 'sed', 'videntur', 'leviora', 'veniamus', 'Quid', 'tibi', 'Torquate', 'quid', 'huic',
        'Triario', 'litterae', 'quid', 'historiae', 'cognitioque', 'rerum', 'quid', 'poetarum', 'evolutio', 'quid',
        'tanta', 'tot', 'versuum', 'memoria', 'voluptatis', 'affert', 'nec', 'mihi', 'illud', 'dixeris', 'Haec',
        'enim', 'ipsa', 'mihi', 'sunt', 'voluptati', 'et', 'erant', 'illa', 'Torquatis', 'Numquam', 'hoc', 'ita',
        'defendit', 'Epicurus', 'neque', 'Metrodorus', 'aut', 'quisquam', 'eorum', 'qui', 'aut', 'saperet', 'aliquid',
        'aut', 'ista', 'didicisset', 'et', 'quod', 'quaeritur', 'saepe', 'cur', 'tam', 'multi', 'sint', 'Epicurei',
        'sunt', 'aliae', 'quoque', 'causae', 'sed', 'multitudinem', 'haec', 'maxime', 'allicit', 'quod', 'ita',
        'putant', 'dici', 'ab', 'illo', 'recta', 'et', 'honesta', 'quae', 'sint', 'ea', 'facere', 'ipsa', 'per', 'se',
        'laetitiam', 'id', 'est', 'voluptatem', 'homines', 'optimi', 'non', 'intellegunt', 'totam', 'rationem',
        'everti', 'si', 'ita', 'res', 'se', 'habeat', 'nam', 'si', 'concederetur', 'etiamsi', 'ad', 'corpus', 'nihil',
        'referatur', 'ista', 'sua', 'sponte', 'et', 'per', 'se', 'esse', 'iucunda', 'per', 'se', 'esset', 'et',
        'virtus', 'et', 'cognitio', 'rerum', 'quod', 'minime', 'ille', 'vult', 'expetenda', 'Haec', 'igitur',
        'Epicuri', 'non', 'probo', 'inquam', 'De', 'cetero', 'vellem', 'equidem', 'aut', 'ipse', 'doctrinis',
        'fuisset', 'instructior', 'est', 'enim', 'quod', 'tibi', 'ita', 'videri', 'necesse', 'est', 'non', 'satis',
        'politus', 'iis', 'artibus', 'quas', 'qui', 'tenent', 'eruditi', 'appellantur', 'aut', 'ne', 'deterruisset',
        'alios', 'a', 'studiis', 'quamquam', 'te', 'quidem', 'video', 'minime', 'esse', 'deterritum', 'Quae', 'cum',
        'dixissem', 'magis', 'ut', 'illum', 'provocarem', 'quam', 'ut', 'ipse', 'loquerer', 'tum', 'Triarius',
        'leniter', 'arridens', 'Tu', 'quidem', 'inquit', 'totum', 'Epicurum', 'paene', 'e', 'philosophorum', 'choro',
        'sustulisti', 'Quid', 'ei', 'reliquisti', 'nisi', 'te', 'quoquo', 'modo', 'loqueretur', 'intellegere', 'quid',
        'diceret', 'Aliena', 'dixit', 'in', 'physicis', 'nec', 'ea', 'ipsa', 'quae', 'tibi', 'probarentur', 'si',
        'qua', 'in', 'iis', 'corrigere', 'voluit', 'deteriora', 'fecit', 'disserendi', 'artem', 'nullam', 'habuit',
        'voluptatem', 'cum', 'summum', 'bonum', 'diceret', 'primum', 'in', 'eo', 'ipso', 'parum', 'vidit', 'deinde',
        'hoc', 'quoque', 'alienum', 'nam', 'ante', 'Aristippus', 'et', 'ille', 'melius', 'addidisti', 'ad',
        'extremum', 'etiam', 'indoctum', 'fuisse', 'Fieri', 'inquam', 'Triari', 'nullo', 'pacto', 'potest', 'ut',
        'non', 'dicas', 'quid', 'non', 'probes', 'eius', 'a', 'quo', 'dissentias', 'quid', 'enim', 'me', 'prohiberet',
        'Epicureum', 'esse', 'si', 'probarem', 'quae', 'ille', 'diceret', 'cum', 'praesertim', 'illa', 'perdiscere',
        'ludus', 'esset', 'Quam', 'ob', 'rem', 'dissentientium', 'inter', 'se', 'reprehensiones', 'non', 'sunt',
        'vituperandae', 'maledicta', 'contumeliae', 'tum', 'iracundiae', 'contentiones', 'concertationesque', 'in',
        'disputando', 'pertinaces', 'indignae', 'philosophia', 'mihi', 'videri', 'solent', 'Tum', 'Torquatus',
        'Prorsus', 'inquit', 'assentior', 'neque', 'enim', 'disputari', 'sine', 'reprehensione', 'nec', 'cum',
        'iracundia', 'aut', 'pertinacia', 'recte', 'disputari', 'potest', 'sed', 'ad', 'haec', 'nisi', 'molestum',
        'est', 'habeo', 'quae', 'velim', 'An', 'me', 'inquam', 'nisi', 'te', 'audire', 'vellem', 'censes', 'haec',
        'dicturum', 'fuisse', 'Utrum', 'igitur', 'percurri', 'omnem', 'Epicuri', 'disciplinam', 'placet', 'an', 'de',
        'una', 'voluptate', 'quaeri', 'de', 'qua', 'omne', 'certamen', 'est', 'Tuo', 'vero', 'id', 'quidem', 'inquam',
        'arbitratu', 'Sic', 'faciam', 'igitur', 'inquit', 'unam', 'rem', 'explicabo', 'eamque', 'maximam', 'de',
        'physicis', 'alias', 'et', 'quidem', 'tibi', 'et', 'declinationem', 'istam', 'atomorum', 'et', 'magnitudinem',
        'solis', 'probabo', 'et', 'Democriti', 'errata', 'ab', 'Epicuro', 'reprehensa', 'et', 'correcta', 'permulta',
        'nunc', 'dicam', 'de', 'voluptate', 'nihil', 'scilicet', 'novi', 'ea', 'tamen', 'quae', 'te', 'ipsum',
        'probaturum', 'esse', 'confidam', 'Certe', 'inquam', 'pertinax', 'non', 'ero', 'tibique', 'si', 'mihi',
        'probabis', 'ea', 'quae', 'dices', 'libenter', 'assentiar', 'Probabo', 'inquit', 'modo', 'ista', 'sis',
        'aequitate', 'quam', 'ostendis', 'sed', 'uti', 'oratione', 'perpetua', 'malo', 'quam', 'interrogare', 'aut',
        'interrogari', 'Ut', 'placet', 'inquam', 'Tum', 'dicere', 'exorsus', 'est', 'Primum', 'igitur', 'inquit',
        'sic', 'agam', 'ut', 'ipsi', 'auctori', 'huius', 'disciplinae', 'placet', 'constituam', 'quid', 'et', 'quale',
        'sit', 'id', 'de', 'quo', 'quaerimus', 'non', 'quo', 'ignorare', 'vos', 'arbitrer', 'sed', 'ut', 'ratione',
        'et', 'via', 'procedat', 'oratio', 'quaerimus', 'igitur', 'quid', 'sit', 'extremum', 'et', 'ultimum',
        'bonorum', 'quod', 'omnium', 'philosophorum', 'sententia', 'tale', 'debet', 'esse', 'ut', 'ad', 'id', 'omnia',
        'referri', 'oporteat', 'ipsum', 'autem', 'nusquam', 'hoc', 'Epicurus', 'in', 'voluptate', 'ponit', 'quod',
        'summum', 'bonum', 'esse', 'vult', 'summumque', 'malum', 'dolorem', 'idque', 'instituit', 'docere', 'sic',
        'Omne', 'animal', 'simul', 'atque', 'natum', 'sit', 'voluptatem', 'appetere', 'eaque', 'gaudere', 'ut',
        'summo', 'bono', 'dolorem', 'aspernari', 'ut', 'summum', 'malum', 'et', 'quantum', 'possit', 'a', 'se',
        'repellere', 'idque', 'facere', 'nondum', 'depravatum', 'ipsa', 'natura', 'incorrupte', 'atque', 'integre',
        'iudicante', 'itaque', 'negat', 'opus', 'esse', 'ratione', 'neque', 'disputatione', 'quam', 'ob', 'rem',
        'voluptas', 'expetenda', 'fugiendus', 'dolor', 'sit', 'sentiri', 'haec', 'putat', 'ut', 'calere', 'ignem',
        'nivem', 'esse', 'albam', 'dulce', 'mel', 'quorum', 'nihil', 'oportere', 'exquisitis', 'rationibus',
        'confirmare', 'tantum', 'satis', 'esse', 'admonere', 'interesse', 'enim', 'inter', 'argumentum',
        'conclusionemque', 'rationis', 'et', 'inter', 'mediocrem', 'animadversionem', 'atque', 'admonitionem',
        'altera', 'occulta', 'quaedam', 'et', 'quasi', 'involuta', 'aperiri', 'altera', 'prompta', 'et', 'aperta',
        'iudicari', 'etenim', 'quoniam', 'detractis', 'de', 'homine', 'sensibus', 'reliqui', 'nihil', 'est',
        'necesse', 'est', 'quid', 'aut', 'ad', 'naturam', 'aut', 'contra', 'sit', 'a', 'natura', 'ipsa', 'iudicari',
        'ea', 'quid', 'percipit', 'aut', 'quid', 'iudicat', 'quo', 'aut', 'petat', 'aut', 'fugiat', 'aliquid',
        'praeter', 'voluptatem', 'et', 'dolorem', 'Sunt', 'autem', 'quidam', 'e', 'nostris', 'qui', 'haec',
        'subtilius', 'velint', 'tradere', 'et', 'negent', 'satis', 'esse', 'quid', 'bonum', 'sit', 'aut', 'quid',
        'malum', 'sensu', 'iudicari', 'sed', 'animo', 'etiam', 'ac', 'ratione', 'intellegi', 'posse', 'et',
        'voluptatem', 'ipsam', 'per', 'se', 'esse', 'expetendam', 'et', 'dolorem', 'ipsum', 'per', 'se', 'esse',
        'fugiendum', 'itaque', 'aiunt', 'hanc', 'quasi', 'naturalem', 'atque', 'insitam', 'in', 'animis', 'nostris',
        'inesse', 'notionem', 'ut', 'alterum', 'esse', 'appetendum', 'alterum', 'aspernandum', 'sentiamus', 'Alii',
        'autem', 'quibus', 'ego', 'assentior', 'cum', 'a', 'philosophis', 'compluribus', 'permulta', 'dicantur',
        'cur', 'nec', 'voluptas', 'in', 'bonis', 'sit', 'numeranda', 'nec', 'in', 'malis', 'dolor', 'non',
        'existimant', 'oportere', 'nimium', 'nos', 'causae', 'confidere', 'sed', 'et', 'argumentandum', 'et',
        'accurate', 'disserendum', 'et', 'rationibus', 'conquisitis', 'de', 'voluptate', 'et', 'dolore',
        'disputandum', 'putant', 'Sed', 'ut', 'perspiciatis', 'unde', 'omnis', 'iste', 'natus', 'error', 'sit',
        'voluptatem', 'accusantium', 'doloremque', 'laudantium', 'totam', 'rem', 'aperiam', 'eaque', 'ipsa', 'quae',
        'ab', 'illo', 'inventore', 'veritatis', 'et', 'quasi', 'architecto', 'beatae', 'vitae', 'dicta', 'sunt',
        'explicabo', 'nemo', 'enim', 'ipsam', 'voluptatem', 'quia', 'voluptas', 'sit', 'aspernatur', 'aut', 'odit',
        'aut', 'fugit', 'sed', 'quia', 'consequuntur', 'magni', 'dolores', 'eos', 'qui', 'ratione', 'voluptatem',
        'sequi', 'nesciunt', 'neque', 'porro', 'quisquam', 'est', 'qui', 'dolorem', 'ipsum', 'quia', 'dolor', 'sit',
        'amet', 'consectetur', 'adipisci', 'velit', 'sed', 'quia', 'non', 'numquam', 'eius', 'modi', 'tempora',
        'incidunt', 'ut', 'labore', 'et', 'dolore', 'magnam', 'aliquam', 'quaerat', 'voluptatem', 'ut', 'enim', 'ad',
        'minima', 'veniam', 'quis', 'nostrum', 'exercitationem', 'ullam', 'corporis', 'suscipit', 'laboriosam',
        'nisi', 'ut', 'aliquid', 'ex', 'ea', 'commodi', 'consequatur', 'quis', 'autem', 'vel', 'eum', 'iure',
        'reprehenderit', 'qui', 'in', 'ea', 'voluptate', 'velit', 'esse', 'quam', 'nihil', 'molestiae', 'consequatur',
        'vel', 'illum', 'qui', 'dolorem', 'eum', 'fugiat', 'quo', 'voluptas', 'nulla', 'pariatur', 'At', 'vero',
        'eos', 'et', 'accusamus', 'et', 'iusto', 'odio', 'dignissimos', 'ducimus', 'qui', 'blanditiis', 'praesentium',
        'voluptatum', 'deleniti', 'atque', 'corrupti', 'quos', 'dolores', 'et', 'quas', 'molestias', 'excepturi',
        'sint', 'obcaecati', 'cupiditate', 'non', 'provident', 'similique', 'sunt', 'in', 'culpa', 'qui', 'officia',
        'deserunt', 'mollitia', 'animi', 'id', 'est', 'laborum', 'et', 'dolorum', 'fuga', 'et', 'harum', 'quidem',
        'rerum', 'facilis', 'est', 'et', 'expedita', 'distinctio', 'nam', 'libero', 'tempore', 'cum', 'soluta',
        'nobis', 'est', 'eligendi', 'optio', 'cumque', 'nihil', 'impedit', 'quo', 'minus', 'id', 'quod', 'maxime',
        'placeat', 'facere', 'possimus', 'omnis', 'voluptas', 'assumenda', 'est', 'omnis', 'dolor', 'repellendus',
        'temporibus', 'autem', 'quibusdam', 'et', 'aut', 'officiis', 'debitis', 'aut', 'rerum', 'necessitatibus',
        'saepe', 'eveniet', 'ut', 'et', 'voluptates', 'repudiandae', 'sint', 'et', 'molestiae', 'non', 'recusandae',
        'itaque', 'earum', 'rerum', 'hic', 'tenetur', 'a', 'sapiente', 'delectus', 'ut', 'aut', 'reiciendis',
        'voluptatibus', 'maiores', 'alias', 'consequatur', 'aut', 'perferendis', 'doloribus', 'asperiores',
        'repellat', 'Hanc', 'ego', 'cum', 'teneam', 'sententiam', 'quid', 'est', 'cur', 'verear', 'ne', 'ad', 'eam',
        'non', 'possim', 'accommodare', 'Torquatos', 'nostros', 'quos', 'tu', 'paulo', 'ante', 'cum', 'memoriter',
        'tum', 'etiam', 'erga', 'nos', 'amice', 'et', 'benivole', 'collegisti', 'nec', 'me', 'tamen', 'laudandis',
        'maioribus', 'meis', 'corrupisti', 'nec', 'segniorem', 'ad', 'respondendum', 'reddidisti', 'quorum', 'facta',
        'quem', 'ad', 'modum', 'quaeso', 'interpretaris', 'sicine', 'eos', 'censes', 'aut', 'in', 'armatum', 'hostem',
        'impetum', 'fecisse', 'aut', 'in', 'liberos', 'atque', 'in', 'sanguinem', 'suum', 'tam', 'crudelis', 'fuisse',
        'nihil', 'ut', 'de', 'utilitatibus', 'nihil', 'ut', 'de', 'commodis', 'suis', 'cogitarent', 'at', 'id', 'ne',
        'ferae', 'quidem', 'faciunt', 'ut', 'ita', 'ruant', 'itaque', 'turbent', 'ut', 'earum', 'motus', 'et',
        'impetus', 'quo', 'pertineant', 'non', 'intellegamus', 'tu', 'tam', 'egregios', 'viros', 'censes', 'tantas',
        'res', 'gessisse', 'sine', 'causa', 'Quae', 'fuerit', 'causa', 'mox', 'videro', 'interea', 'hoc', 'tenebo',
        'si', 'ob', 'aliquam', 'causam', 'ista', 'quae', 'sine', 'dubio', 'praeclara', 'sunt', 'fecerint', 'virtutem',
        'iis', 'per', 'se', 'ipsam', 'causam', 'non', 'fuisse', 'Torquem', 'detraxit', 'hosti', 'Et', 'quidem', 'se',
        'texit', 'ne', 'interiret', 'At', 'magnum', 'periculum', 'adiit', 'In', 'oculis', 'quidem', 'exercitus',
        'Quid', 'ex', 'eo', 'est', 'consecutus', 'Laudem', 'et', 'caritatem', 'quae', 'sunt', 'vitae', 'sine', 'metu',
        'degendae', 'praesidia', 'firmissima', 'Filium', 'morte', 'multavit', 'Si', 'sine', 'causa', 'nollem', 'me',
        'ab', 'eo', 'ortum', 'tam', 'inportuno', 'tamque', 'crudeli', 'sin', 'ut', 'dolore', 'suo', 'sanciret',
        'militaris', 'imperii', 'disciplinam', 'exercitumque', 'in', 'gravissimo', 'bello', 'animadversionis', 'metu',
        'contineret', 'saluti', 'prospexit', 'civium', 'qua', 'intellegebat', 'contineri', 'suam', 'atque', 'haec',
        'ratio', 'late', 'patet', 'In', 'quo', 'enim', 'maxime', 'consuevit', 'iactare', 'vestra', 'se', 'oratio',
        'tua', 'praesertim', 'qui', 'studiose', 'antiqua', 'persequeris', 'claris', 'et', 'fortibus', 'viris',
        'commemorandis', 'eorumque', 'factis', 'non', 'emolumento', 'aliquo', 'sed', 'ipsius', 'honestatis', 'decore',
        'laudandis', 'id', 'totum', 'evertitur', 'eo', 'delectu', 'rerum', 'quem', 'modo', 'dixi', 'constituto', 'ut',
        'aut', 'voluptates', 'omittantur', 'maiorum', 'voluptatum', 'adipiscendarum', 'causa', 'aut', 'dolores',
        'suscipiantur', 'maiorum', 'dolorum', 'effugiendorum', 'gratia', 'Sed', 'de', 'clarorum', 'hominum', 'factis',
        'illustribus', 'et', 'gloriosis', 'satis', 'hoc', 'loco', 'dictum', 'sit', 'erit', 'enim', 'iam', 'de',
        'omnium', 'virtutum', 'cursu', 'ad', 'voluptatem', 'proprius', 'disserendi', 'locus', 'nunc', 'autem',
        'explicabo', 'voluptas', 'ipsa', 'quae', 'qualisque', 'sit', 'ut', 'tollatur', 'error', 'omnis',
        'imperitorum', 'intellegaturque', 'ea', 'quae', 'voluptaria', 'delicata', 'mollis', 'habeatur', 'disciplina',
        'quam', 'gravis', 'quam', 'continens', 'quam', 'severa', 'sit', 'Non', 'enim', 'hanc', 'solam', 'sequimur',
        'quae', 'suavitate', 'aliqua', 'naturam', 'ipsam', 'movet', 'et', 'cum', 'iucunditate', 'quadam',
        'percipitur', 'sensibus', 'sed', 'maximam', 'voluptatem', 'illam', 'habemus', 'quae', 'percipitur', 'omni',
        'dolore', 'detracto', 'nam', 'quoniam', 'cum', 'privamur', 'dolore', 'ipsa', 'liberatione', 'et', 'vacuitate',
        'omnis', 'molestiae', 'gaudemus', 'omne', 'autem', 'id', 'quo', 'gaudemus', 'voluptas', 'est', 'ut', 'omne',
        'quo', 'offendimur', 'dolor', 'doloris', 'omnis', 'privatio', 'recte', 'nominata', 'est', 'voluptas', 'ut',
        'enim', 'cum', 'cibo', 'et', 'potione', 'fames', 'sitisque', 'depulsa', 'est', 'ipsa', 'detractio',
        'molestiae', 'consecutionem', 'affert', 'voluptatis', 'sic', 'in', 'omni', 're', 'doloris', 'amotio',
        'successionem', 'efficit', 'voluptatis', 'Itaque', 'non', 'placuit', 'Epicuro', 'medium', 'esse', 'quiddam',
        'inter', 'dolorem', 'et', 'voluptatem', 'illud', 'enim', 'ipsum', 'quod', 'quibusdam', 'medium', 'videretur',
        'cum', 'omni', 'dolore', 'careret', 'non', 'modo', 'voluptatem', 'esse', 'verum', 'etiam', 'summam',
        'voluptatem', 'quisquis', 'enim', 'sentit', 'quem', 'ad', 'modum', 'sit', 'affectus', 'eum', 'necesse', 'est',
        'aut', 'in', 'voluptate', 'esse', 'aut', 'in', 'dolore', 'omnis', 'autem', 'privatione', 'doloris', 'putat',
        'Epicurus', 'terminari', 'summam', 'voluptatem', 'ut', 'postea', 'variari', 'voluptas', 'distinguique',
        'possit', 'augeri', 'amplificarique', 'non', 'possit', 'At', 'etiam', 'Athenis', 'ut', 'e', 'patre',
        'audiebam', 'facete', 'et', 'urbane', 'Stoicos', 'irridente', 'statua', 'est', 'in', 'Ceramico', 'Chrysippi',
        'sedentis', 'porrecta', 'manu', 'quae', 'manus', 'significet', 'illum', 'in', 'hae', 'esse', 'rogatiuncula',
        'delectatum', 'Numquidnam', 'manus', 'tua', 'sic', 'affecta', 'quem', 'ad', 'modum', 'affecta', 'nunc', 'est',
        'desiderat', 'Nihil', 'sane', 'At', 'si', 'voluptas', 'esset', 'bonum', 'desideraret', 'Ita', 'credo', 'Non',
        'est', 'igitur', 'voluptas', 'bonum', 'Hoc', 'ne', 'statuam', 'quidem', 'dicturam', 'pater', 'aiebat', 'si',
        'loqui', 'posset', 'conclusum', 'est', 'enim', 'contra', 'Cyrenaicos', 'satis', 'acute', 'nihil', 'ad',
        'Epicurum', 'nam', 'si', 'ea', 'sola', 'voluptas', 'esset', 'quae', 'quasi', 'titillaret', 'sensus', 'ut',
        'ita', 'dicam', 'et', 'ad', 'eos', 'cum', 'suavitate', 'afflueret', 'et', 'illaberetur', 'nec', 'manus',
        'esse', 'contenta', 'posset', 'nec', 'ulla', 'pars', 'vacuitate', 'doloris', 'sine', 'iucundo', 'motu',
        'voluptatis', 'sin', 'autem', 'summa', 'voluptas', 'est', 'ut', 'Epicuro', 'placet', 'nihil', 'dolere',
        'primum', 'tibi', 'recte', 'Chrysippe', 'concessum', 'est', 'nihil', 'desiderare', 'manum', 'cum', 'ita',
        'esset', 'affecta', 'secundum', 'non', 'recte', 'si', 'voluptas', 'esset', 'bonum', 'fuisse', 'desideraturam',
        'idcirco', 'enim', 'non', 'desideraret', 'quia', 'quod', 'dolore', 'caret', 'id', 'in', 'voluptate', 'est',
        'Extremum', 'autem', 'esse', 'bonorum', 'voluptatem', 'ex', 'hoc', 'facillime', 'perspici', 'potest',
        'Constituamus', 'aliquem', 'magnis', 'multis', 'perpetuis', 'fruentem', 'et', 'animo', 'et', 'corpore',
        'voluptatibus', 'nullo', 'dolore', 'nec', 'impediente', 'nec', 'inpendente', 'quem', 'tandem', 'hoc', 'statu',
        'praestabiliorem', 'aut', 'magis', 'expetendum', 'possimus', 'dicere', 'inesse', 'enim', 'necesse', 'est',
        'in', 'eo', 'qui', 'ita', 'sit', 'affectus', 'et', 'firmitatem', 'animi', 'nec', 'mortem', 'nec', 'dolorem',
        'timentis', 'quod', 'mors', 'sensu', 'careat', 'dolor', 'in', 'longinquitate', 'levis', 'in', 'gravitate',
        'brevis', 'soleat', 'esse', 'ut', 'eius', 'magnitudinem', 'celeritas', 'diuturnitatem', 'allevatio',
        'consoletur', 'Ad', 'ea', 'cum', 'accedit', 'ut', 'neque', 'divinum', 'numen', 'horreat', 'nec',
        'praeteritas', 'voluptates', 'effluere', 'patiatur', 'earumque', 'assidua', 'recordatione', 'laetetur',
        'quid', 'est', 'quod', 'huc', 'possit', 'quod', 'melius', 'sit', 'accedere', 'Statue', 'contra', 'aliquem',
        'confectum', 'tantis', 'animi', 'corporisque', 'doloribus', 'quanti', 'in', 'hominem', 'maximi', 'cadere',
        'possunt', 'nulla', 'spe', 'proposita', 'fore', 'levius', 'aliquando', 'nulla', 'praeterea', 'neque',
        'praesenti', 'nec', 'expectata', 'voluptate', 'quid', 'eo', 'miserius', 'dici', 'aut', 'fingi', 'potest',
        'quodsi', 'vita', 'doloribus', 'referta', 'maxime', 'fugienda', 'est', 'summum', 'profecto', 'malum', 'est',
        'vivere', 'cum', 'dolore', 'cui', 'sententiae', 'consentaneum', 'est', 'ultimum', 'esse', 'bonorum', 'eum',
        'voluptate', 'vivere', 'nec', 'enim', 'habet', 'nostra', 'mens', 'quicquam', 'ubi', 'consistat', 'tamquam',
        'in', 'extremo', 'omnesque', 'et', 'metus', 'et', 'aegritudines', 'ad', 'dolorem', 'referuntur', 'nec',
        'praeterea', 'est', 'res', 'ulla', 'quae', 'sua', 'natura', 'aut', 'sollicitare', 'possit', 'aut', 'angere',
        'Praeterea', 'et', 'appetendi', 'et', 'refugiendi', 'et', 'omnino', 'rerum', 'gerendarum', 'initia',
        'proficiscuntur', 'aut', 'a', 'voluptate', 'aut', 'a', 'dolore', 'quod', 'cum', 'ita', 'sit', 'perspicuum',
        'est', 'omnis', 'rectas', 'res', 'atque', 'laudabilis', 'eo', 'referri', 'ut', 'cum', 'voluptate', 'vivatur',
        'quoniam', 'autem', 'id', 'est', 'vel', 'summum', 'bonorum', 'vel', 'ultimum', 'vel', 'extremum', 'quod',
        'Graeci', 'telos', 'nominant', 'quod', 'ipsum', 'nullam', 'ad', 'aliam', 'rem', 'ad', 'id', 'autem', 'res',
        'referuntur', 'omnes', 'fatendum', 'est', 'summum', 'esse', 'bonum', 'iucunde', 'vivere', 'Id', 'qui', 'in',
        'una', 'virtute', 'ponunt', 'et', 'splendore', 'nominis', 'capti', 'quid', 'natura', 'postulet', 'non',
        'intellegunt', 'errore', 'maximo', 'si', 'Epicurum', 'audire', 'voluerint', 'liberabuntur', 'istae', 'enim',
        'vestrae', 'eximiae', 'pulchraeque', 'virtutes', 'nisi', 'voluptatem', 'efficerent', 'quis', 'eas', 'aut',
        'laudabilis', 'aut', 'expetendas', 'arbitraretur', 'ut', 'enim', 'medicorum', 'scientiam', 'non', 'ipsius',
        'artis', 'sed', 'bonae', 'valetudinis', 'causa', 'probamus', 'et', 'gubernatoris', 'ars', 'quia', 'bene',
        'navigandi', 'rationem', 'habet', 'utilitate', 'non', 'arte', 'laudatur', 'sic', 'sapientia', 'quae', 'ars',
        'vivendi', 'putanda', 'est', 'non', 'expeteretur', 'si', 'nihil', 'efficeret', 'nunc', 'expetitur', 'quod',
        'est', 'tamquam', 'artifex', 'conquirendae', 'et', 'comparandae', 'voluptatis', 'Quam', 'autem', 'ego',
        'dicam', 'voluptatem', 'iam', 'videtis', 'ne', 'invidia', 'verbi', 'labefactetur', 'oratio', 'mea', 'nam',
        'cum', 'ignoratione', 'rerum', 'bonarum', 'et', 'malarum', 'maxime', 'hominum', 'vita', 'vexetur', 'ob',
        'eumque', 'errorem', 'et', 'voluptatibus', 'maximis', 'saepe', 'priventur', 'et', 'durissimis', 'animi',
        'doloribus', 'torqueantur', 'sapientia', 'est', 'adhibenda', 'quae', 'et', 'terroribus', 'cupiditatibusque',
        'detractis', 'et', 'omnium', 'falsarum', 'opinionum', 'temeritate', 'derepta', 'certissimam', 'se', 'nobis',
        'ducem', 'praebeat', 'ad', 'voluptatem', 'sapientia', 'enim', 'est', 'una', 'quae', 'maestitiam', 'pellat',
        'ex', 'animis', 'quae', 'nos', 'exhorrescere', 'metu', 'non', 'sinat', 'qua', 'praeceptrice', 'in',
        'tranquillitate', 'vivi', 'potest', 'omnium', 'cupiditatum', 'ardore', 'restincto', 'cupiditates', 'enim',
        'sunt', 'insatiabiles', 'quae', 'non', 'modo', 'singulos', 'homines', 'sed', 'universas', 'familias',
        'evertunt', 'totam', 'etiam', 'labefactant', 'saepe', 'rem', 'publicam', 'Ex', 'cupiditatibus', 'odia',
        'discidia', 'discordiae', 'seditiones', 'bella', 'nascuntur', 'nec', 'eae', 'se', 'foris', 'solum', 'iactant',
        'nec', 'tantum', 'in', 'alios', 'caeco', 'impetu', 'incurrunt', 'sed', 'intus', 'etiam', 'in', 'animis',
        'inclusae', 'inter', 'se', 'dissident', 'atque', 'discordant', 'ex', 'quo', 'vitam', 'amarissimam', 'necesse',
        'est', 'effici', 'ut', 'sapiens', 'solum', 'amputata', 'circumcisaque', 'inanitate', 'omni', 'et', 'errore',
        'naturae', 'finibus', 'contentus', 'sine', 'aegritudine', 'possit', 'et', 'sine', 'metu', 'vivere', 'Quae',
        'est', 'enim', 'aut', 'utilior', 'aut', 'ad', 'bene', 'vivendum', 'aptior', 'partitio', 'quam', 'illa', 'qua',
        'est', 'usus', 'Epicurus', 'qui', 'unum', 'genus', 'posuit', 'earum', 'cupiditatum', 'quae', 'essent', 'et',
        'naturales', 'et', 'necessariae', 'alterum', 'quae', 'naturales', 'essent', 'nec', 'tamen', 'necessariae',
        'tertium', 'quae', 'nec', 'naturales', 'nec', 'necessariae', 'quarum', 'ea', 'ratio', 'est', 'ut',
        'necessariae', 'nec', 'opera', 'multa', 'nec', 'impensa', 'expleantur', 'ne', 'naturales', 'quidem', 'multa',
        'desiderant', 'propterea', 'quod', 'ipsa', 'natura', 'divitias', 'quibus', 'contenta', 'sit', 'et',
        'parabilis', 'et', 'terminatas', 'habet', 'inanium', 'autem', 'cupiditatum', 'nec', 'modus', 'ullus', 'nec',
        'finis', 'inveniri', 'potest', 'Quodsi', 'vitam', 'omnem', 'perturbari', 'videmus', 'errore', 'et',
        'inscientia', 'sapientiamque', 'esse', 'solam', 'quae', 'nos', 'a', 'libidinum', 'impetu', 'et', 'a',
        'formidinum', 'terrore', 'vindicet', 'et', 'ipsius', 'fortunae', 'modice', 'ferre', 'doceat', 'iniurias',
        'et', 'omnis', 'monstret', 'vias', 'quae', 'ad', 'quietem', 'et', 'ad', 'tranquillitatem', 'ferant', 'quid',
        'est', 'cur', 'dubitemus', 'dicere', 'et', 'sapientiam', 'propter', 'voluptates', 'expetendam', 'et',
        'insipientiam', 'propter', 'molestias', 'esse', 'fugiendam', 'Eademque', 'ratione', 'ne', 'temperantiam',
        'quidem', 'propter', 'se', 'expetendam', 'esse', 'dicemus', 'sed', 'quia', 'pacem', 'animis', 'afferat', 'et',
        'eos', 'quasi', 'concordia', 'quadam', 'placet', 'ac', 'leniat', 'temperantia', 'est', 'enim', 'quae', 'in',
        'rebus', 'aut', 'expetendis', 'aut', 'fugiendis', 'ut', 'rationem', 'sequamur', 'monet', 'nec', 'enim',
        'satis', 'est', 'iudicare', 'quid', 'faciendum', 'non', 'faciendumve', 'sit', 'sed', 'stare', 'etiam',
        'oportet', 'in', 'eo', 'quod', 'sit', 'iudicatum', 'plerique', 'autem', 'quod', 'tenere', 'atque', 'servare',
        'id', 'quod', 'ipsi', 'statuerunt', 'non', 'possunt', 'victi', 'et', 'debilitati', 'obiecta', 'specie',
        'voluptatis', 'tradunt', 'se', 'libidinibus', 'constringendos', 'nec', 'quid', 'eventurum', 'sit',
        'provident', 'ob', 'eamque', 'causam', 'propter', 'voluptatem', 'et', 'parvam', 'et', 'non', 'necessariam',
        'et', 'quae', 'vel', 'aliter', 'pararetur', 'et', 'qua', 'etiam', 'carere', 'possent', 'sine', 'dolore',
        'tum', 'in', 'morbos', 'gravis', 'tum', 'in', 'damna', 'tum', 'in', 'dedecora', 'incurrunt', 'saepe', 'etiam',
        'legum', 'iudiciorumque', 'poenis', 'obligantur', 'Qui', 'autem', 'ita', 'frui', 'volunt', 'voluptatibus',
        'ut', 'nulli', 'propter', 'eas', 'consequantur', 'dolores', 'et', 'qui', 'suum', 'iudicium', 'retinent', 'ne',
        'voluptate', 'victi', 'faciant', 'id', 'quod', 'sentiant', 'non', 'esse', 'faciendum', 'ii', 'voluptatem',
        'maximam', 'adipiscuntur', 'praetermittenda', 'voluptate', 'idem', 'etiam', 'dolorem', 'saepe',
        'perpetiuntur', 'ne', 'si', 'id', 'non', 'faciant', 'incidant', 'in', 'maiorem', 'ex', 'quo', 'intellegitur',
        'nec', 'intemperantiam', 'propter', 'se', 'esse', 'fugiendam', 'temperantiamque', 'expetendam', 'non', 'quia',
        'voluptates', 'fugiat', 'sed', 'quia', 'maiores', 'consequatur', 'Eadem', 'fortitudinis', 'ratio',
        'reperietur', 'nam', 'neque', 'laborum', 'perfunctio', 'neque', 'perpessio', 'dolorum', 'per', 'se', 'ipsa',
        'allicit', 'nec', 'patientia', 'nec', 'assiduitas', 'nec', 'vigiliae', 'nec', 'ea', 'ipsa', 'quae',
        'laudatur', 'industria', 'ne', 'fortitudo', 'quidem', 'sed', 'ista', 'sequimur', 'ut', 'sine', 'cura',
        'metuque', 'vivamus', 'animumque', 'et', 'corpus', 'quantum', 'efficere', 'possimus', 'molestia', 'liberemus',
        'ut', 'enim', 'mortis', 'metu', 'omnis', 'quietae', 'vitae', 'status', 'perturbatur', 'et', 'ut',
        'succumbere', 'doloribus', 'eosque', 'humili', 'animo', 'inbecilloque', 'ferre', 'miserum', 'est', 'ob',
        'eamque', 'debilitatem', 'animi', 'multi', 'parentes', 'multi', 'amicos', 'non', 'nulli', 'patriam',
        'plerique', 'autem', 'se', 'ipsos', 'penitus', 'perdiderunt', 'sic', 'robustus', 'animus', 'et', 'excelsus',
        'omni', 'est', 'liber', 'cura', 'et', 'angore', 'cum', 'et', 'mortem', 'contemnit', 'qua', 'qui', 'affecti',
        'sunt', 'in', 'eadem', 'causa', 'sunt', 'qua', 'ante', 'quam', 'nati', 'et', 'ad', 'dolores', 'ita',
        'paratus', 'est', 'ut', 'meminerit', 'maximos', 'morte', 'finiri', 'parvos', 'multa', 'habere', 'intervalla',
        'requietis', 'mediocrium', 'nos', 'esse', 'dominos', 'ut', 'si', 'tolerabiles', 'sint', 'feramus', 'si',
        'minus', 'animo', 'aequo', 'e', 'vita', 'cum', 'ea', 'non', 'placeat', 'tamquam', 'e', 'theatro', 'exeamus',
        'quibus', 'rebus', 'intellegitur', 'nec', 'timiditatem', 'ignaviamque', 'vituperari', 'nec', 'fortitudinem',
        'patientiamque', 'laudari', 'suo', 'nomine', 'sed', 'illas', 'reici', 'quia', 'dolorem', 'pariant', 'has',
        'optari', 'quia', 'voluptatem', 'Iustitia', 'restat', 'ut', 'de', 'omni', 'virtute', 'sit', 'dictum', 'sed',
        'similia', 'fere', 'dici', 'possunt', 'ut', 'enim', 'sapientiam', 'temperantiam', 'fortitudinem', 'copulatas',
        'esse', 'docui', 'cum', 'voluptate', 'ut', 'ab', 'ea', 'nullo', 'modo', 'nec', 'divelli', 'nec', 'distrahi',
        'possint', 'sic', 'de', 'iustitia', 'iudicandum', 'est', 'quae', 'non', 'modo', 'numquam', 'nocet', 'cuiquam',
        'sed', 'contra', 'semper', 'afficit', 'cum', 'vi', 'sua', 'atque', 'natura', 'quod', 'tranquillat', 'animos',
        'tum', 'spe', 'nihil', 'earum', 'rerum', 'defuturum', 'quas', 'natura', 'non', 'depravata', 'desiderat',
        '[et]', 'quem', 'ad', 'modum', 'temeritas', 'et', 'libido', 'et', 'ignavia', 'semper', 'animum', 'excruciant',
        'et', 'semper', 'sollicitant', 'turbulentaeque', 'sunt', 'sic', '[inprobitas', 'si]', 'cuius', 'in', 'mente',
        'consedit', 'hoc', 'ipso', 'quod', 'adest', 'turbulenta', 'est', 'si', 'vero', 'molita', 'quippiam', 'est',
        'quamvis', 'occulte', 'fecerit', 'numquam', 'tamen', 'id', 'confidet', 'fore', 'semper', 'occultum',
        'plerumque', 'improborum', 'facta', 'primo', 'suspicio', 'insequitur', 'dein', 'sermo', 'atque', 'fama',
        'tum', 'accusator', 'tum', 'iudex', 'Multi', 'etiam', 'ut', 'te', 'consule', 'ipsi', 'se', 'indicaverunt',
        'quodsi', 'qui', 'satis', 'sibi', 'contra', 'hominum', 'conscientiam', 'saepti', 'esse', 'et', 'muniti',
        'videntur', 'deorum', 'tamen', 'horrent', 'easque', 'ipsas', 'sollicitudines', 'quibus', 'eorum', 'animi',
        'noctesque', 'diesque', 'exeduntur', 'a', 'diis', 'inmortalibus', 'supplicii', 'causa', 'importari', 'putant',
        'quae', 'autem', 'tanta', 'ex', 'improbis', 'factis', 'ad', 'minuendas', 'vitae', 'molestias', 'accessio',
        'potest', 'fieri', 'quanta', 'ad', 'augendas', 'cum', 'conscientia', 'factorum', 'tum', 'poena', 'legum',
        'odioque', 'civium', 'et', 'tamen', 'in', 'quibusdam', 'neque', 'pecuniae', 'modus', 'est', 'neque',
        'honoris', 'neque', 'imperii', 'nec', 'libidinum', 'nec', 'epularum', 'nec', 'reliquarum', 'cupiditatum',
        'quas', 'nulla', 'praeda', 'umquam', 'improbe', 'parta', 'minuit', '[sed]', 'potius', 'inflammat', 'ut',
        'coercendi', 'magis', 'quam', 'dedocendi', 'esse', 'videantur', 'Invitat', 'igitur', 'vera', 'ratio', 'bene',
        'sanos', 'ad', 'iustitiam', 'aequitatem', 'fidem', 'neque', 'homini', 'infanti', 'aut', 'inpotenti',
        'iniuste', 'facta', 'conducunt', 'qui', 'nec', 'facile', 'efficere', 'possit', 'quod', 'conetur', 'nec',
        'optinere', 'si', 'effecerit', 'et', 'opes', 'vel', 'fortunae', 'vel', 'ingenii', 'liberalitati', 'magis',
        'conveniunt', 'qua', 'qui', 'utuntur', 'benivolentiam', 'sibi', 'conciliant', 'et', 'quod', 'aptissimum',
        'est', 'ad', 'quiete', 'vivendum', 'caritatem', 'praesertim', 'cum', 'omnino', 'nulla', 'sit', 'causa',
        'peccandi', 'Quae', 'enim', 'cupiditates', 'a', 'natura', 'proficiscuntur', 'facile', 'explentur', 'sine',
        'ulla', 'iniuria', 'quae', 'autem', 'inanes', 'sunt', 'iis', 'parendum', 'non', 'est', 'nihil', 'enim',
        'desiderabile', 'concupiscunt', 'plusque', 'in', 'ipsa', 'iniuria', 'detrimenti', 'est', 'quam', 'in', 'iis',
        'rebus', 'emolumenti', 'quae', 'pariuntur', 'iniuria', 'Itaque', 'ne', 'iustitiam', 'quidem', 'recte', 'quis',
        'dixerit', 'per', 'se', 'ipsam', 'optabilem', 'sed', 'quia', 'iucunditatis', 'vel', 'plurimum', 'afferat',
        'nam', 'diligi', 'et', 'carum', 'esse', 'iucundum', 'est', 'propterea', 'quia', 'tutiorem', 'vitam', 'et',
        'voluptatem', 'pleniorem', 'efficit', 'itaque', 'non', 'ob', 'ea', 'solum', 'incommoda', 'quae', 'eveniunt',
        'inprobis', 'fugiendam', 'inprobitatem', 'putamus', 'sed', 'multo', 'etiam', 'magis', 'quod', 'cuius', 'in',
        'animo', 'versatur', 'numquam', 'sinit', 'eum', 'respirare', 'numquam', 'adquiescere', 'Quodsi', 'ne',
        'ipsarum', 'quidem', 'virtutum', 'laus', 'in', 'qua', 'maxime', 'ceterorum', 'philosophorum', 'exultat',
        'oratio', 'reperire', 'exitum', 'potest', 'nisi', 'derigatur', 'ad', 'voluptatem', 'voluptas', 'autem', 'est',
        'sola', 'quae', 'nos', 'vocet', 'ad', 'se', 'et', 'alliciat', 'suapte', 'natura', 'non', 'potest', 'esse',
        'dubium', 'quin', 'id', 'sit', 'summum', 'atque', 'extremum', 'bonorum', 'omnium', 'beateque', 'vivere',
        'nihil', 'aliud', 'sit', 'nisi', 'cum', 'voluptate', 'vivere', 'Huic', 'certae', 'stabilique', 'sententiae',
        'quae', 'sint', 'coniuncta', 'explicabo', 'brevi', 'nullus', 'in', 'ipsis', 'error', 'est', 'finibus',
        'bonorum', 'et', 'malorum', 'id', 'est', 'in', 'voluptate', 'aut', 'in', 'dolore', 'sed', 'in', 'his',
        'rebus', 'peccant', 'cum', 'e', 'quibus', 'haec', 'efficiantur', 'ignorant', 'animi', 'autem', 'voluptates',
        'et', 'dolores', 'nasci', 'fatemur', 'e', 'corporis', 'voluptatibus', 'et', 'doloribus', 'itaque', 'concedo',
        'quod', 'modo', 'dicebas', 'cadere', 'causa', 'si', 'qui', 'e', 'nostris', 'aliter', 'existimant', 'quos',
        'quidem', 'video', 'esse', 'multos', 'sed', 'imperitos', 'quamquam', 'autem', 'et', 'laetitiam', 'nobis',
        'voluptas', 'animi', 'et', 'molestiam', 'dolor', 'afferat', 'eorum', 'tamen', 'utrumque', 'et', 'ortum',
        'esse', 'e', 'corpore', 'et', 'ad', 'corpus', 'referri', 'nec', 'ob', 'eam', 'causam', 'non', 'multo',
        'maiores', 'esse', 'et', 'voluptates', 'et', 'dolores', 'animi', 'quam', 'corporis', 'nam', 'corpore',
        'nihil', 'nisi', 'praesens', 'et', 'quod', 'adest', 'sentire', 'possumus', 'animo', 'autem', 'et',
        'praeterita', 'et', 'futura', 'ut', 'enim', 'aeque', 'doleamus', 'animo', 'cum', 'corpore', 'dolemus',
        'fieri', 'tamen', 'permagna', 'accessio', 'potest', 'si', 'aliquod', 'aeternum', 'et', 'infinitum',
        'impendere', 'malum', 'nobis', 'opinemur', 'quod', 'idem', 'licet', 'transferre', 'in', 'voluptatem', 'ut',
        'ea', 'maior', 'sit', 'si', 'nihil', 'tale', 'metuamus', 'Iam', 'illud', 'quidem', 'perspicuum', 'est',
        'maximam', 'animi', 'aut', 'voluptatem', 'aut', 'molestiam', 'plus', 'aut', 'ad', 'beatam', 'aut', 'ad',
        'miseram', 'vitam', 'afferre', 'momenti', 'quam', 'eorum', 'utrumvis', 'si', 'aeque', 'diu', 'sit', 'in',
        'corpore', 'Non', 'placet', 'autem', 'detracta', 'voluptate', 'aegritudinem', 'statim', 'consequi', 'nisi',
        'in', 'voluptatis', 'locum', 'dolor', 'forte', 'successerit', 'at', 'contra', 'gaudere', 'nosmet',
        'omittendis', 'doloribus', 'etiamsi', 'voluptas', 'ea', 'quae', 'sensum', 'moveat', 'nulla', 'successerit',
        'eoque', 'intellegi', 'potest', 'quanta', 'voluptas', 'sit', 'non', 'dolere', 'Sed', 'ut', 'iis', 'bonis',
        'erigimur', 'quae', 'expectamus', 'sic', 'laetamur', 'iis', 'quae', 'recordamur', 'stulti', 'autem',
        'malorum', 'memoria', 'torquentur', 'sapientes', 'bona', 'praeterita', 'grata', 'recordatione', 'renovata',
        'delectant', 'est', 'autem', 'situm', 'in', 'nobis', 'ut', 'et', 'adversa', 'quasi', 'perpetua', 'oblivione',
        'obruamus', 'et', 'secunda', 'iucunde', 'ac', 'suaviter', 'meminerimus', 'sed', 'cum', 'ea', 'quae',
        'praeterierunt', 'acri', 'animo', 'et', 'attento', 'intuemur', 'tum', 'fit', 'ut', 'aegritudo', 'sequatur',
        'si', 'illa', 'mala', 'sint', 'laetitia', 'si', 'bona', 'O', 'praeclaram', 'beate', 'vivendi', 'et',
        'apertam', 'et', 'simplicem', 'et', 'directam', 'viam!', 'Cum', 'enim', 'certe', 'nihil', 'homini', 'possit',
        'melius', 'esse', 'quam', 'vacare', 'omni', 'dolore', 'et', 'molestia', 'perfruique', 'maximis', 'et',
        'animi', 'et', 'corporis', 'voluptatibus', 'videtisne', 'quam', 'nihil', 'praetermittatur', 'quod', 'vitam',
        'adiuvet', 'quo', 'facilius', 'id', 'quod', 'propositum', 'est', 'summum', 'bonum', 'consequamur', 'clamat',
        'Epicurus', 'is', 'quem', 'vos', 'nimis', 'voluptatibus', 'esse', 'deditum', 'dicitis', 'non', 'posse',
        'iucunde', 'vivi', 'nisi', 'sapienter', 'honeste', 'iusteque', 'vivatur', 'nec', 'sapienter', 'honeste',
        'iuste', 'nisi', 'iucunde', 'Neque', 'enim', 'civitas', 'in', 'seditione', 'beata', 'esse', 'potest', 'nec',
        'in', 'discordia', 'dominorum', 'domus', 'quo', 'minus', 'animus', 'a', 'se', 'ipse', 'dissidens', 'secumque',
        'discordans', 'gustare', 'partem', 'ullam', 'liquidae', 'voluptatis', 'et', 'liberae', 'potest', 'atqui',
        'pugnantibus', 'et', 'contrariis', 'studiis', 'consiliisque', 'semper', 'utens', 'nihil', 'quieti', 'videre',
        'nihil', 'tranquilli', 'potest', 'Quodsi', 'corporis', 'gravioribus', 'morbis', 'vitae', 'iucunditas',
        'impeditur', 'quanto', 'magis', 'animi', 'morbis', 'impediri', 'necesse', 'est!', 'animi', 'autem', 'morbi',
        'sunt', 'cupiditates', 'inmensae', 'et', 'inanes', 'divitiarum', 'gloriae', 'dominationis', 'libidinosarum',
        'etiam', 'voluptatum', 'accedunt', 'aegritudines', 'molestiae', 'maerores', 'qui', 'exedunt', 'animos',
        'conficiuntque', 'curis', 'hominum', 'non', 'intellegentium', 'nihil', 'dolendum', 'esse', 'animo', 'quod',
        'sit', 'a', 'dolore', 'corporis', 'praesenti', 'futurove', 'seiunctum', 'nec', 'vero', 'quisquam', 'stultus',
        'non', 'horum', 'morborum', 'aliquo', 'laborat', 'nemo', 'igitur', 'est', 'non', 'miser', 'Accedit', 'etiam',
        'mors', 'quae', 'quasi', 'saxum', 'Tantalo', 'semper', 'impendet', 'tum', 'superstitio', 'qua', 'qui', 'est',
        'imbutus', 'quietus', 'esse', 'numquam', 'potest', 'praeterea', 'bona', 'praeterita', 'non', 'meminerunt',
        'praesentibus', 'non', 'fruuntur', 'futura', 'modo', 'expectant', 'quae', 'quia', 'certa', 'esse', 'non',
        'possunt', 'conficiuntur', 'et', 'angore', 'et', 'metu', 'maximeque', 'cruciantur', 'cum', 'sero', 'sentiunt',
        'frustra', 'se', 'aut', 'pecuniae', 'studuisse', 'aut', 'imperiis', 'aut', 'opibus', 'aut', 'gloriae',
        'nullas', 'enim', 'consequuntur', 'voluptates', 'quarum', 'potiendi', 'spe', 'inflammati', 'multos',
        'labores', 'magnosque', 'susceperant', 'ecce', 'autem', 'alii', 'minuti', 'et', 'angusti', 'aut', 'omnia',
        'semper', 'desperantes', 'aut', 'malivoli', 'invidi', 'difficiles', 'lucifugi', 'maledici', 'monstruosi',
        'alii', 'autem', 'etiam', 'amatoriis', 'levitatibus', 'dediti', 'alii', 'petulantes', 'alii', 'audaces',
        'protervi', 'idem', 'intemperantes', 'et', 'ignavi', 'numquam', 'in', 'sententia', 'permanentes', 'quas',
        'ob', 'causas', 'in', 'eorum', 'vita', 'nulla', 'est', 'intercapedo', 'molestiae', 'igitur', 'neque',
        'stultorum', 'quisquam', 'beatus', 'neque', 'sapientium', 'non', 'beatus', 'Multoque', 'hoc', 'melius', 'nos',
        'veriusque', 'quam', 'Stoici', 'illi', 'enim', 'negant', 'esse', 'bonum', 'quicquam', 'nisi', 'nescio',
        'quam', 'illam', 'umbram', 'quod', 'appellant', 'honestum', 'non', 'tam', 'solido', 'quam', 'splendido',
        'nomine', 'virtutem', 'autem', 'nixam', 'hoc', 'honesto', 'nullam', 'requirere', 'voluptatem', 'atque', 'ad',
        'beate', 'vivendum', 'se', 'ipsa', 'esse', 'contentam', 'Sed', 'possunt', 'haec', 'quadam', 'ratione', 'dici',
        'non', 'modo', 'non', 'repugnantibus', 'verum', 'etiam', 'approbantibus', 'nobis', 'sic', 'enim', 'ab',
        'Epicuro', 'sapiens', 'semper', 'beatus', 'inducitur', 'finitas', 'habet', 'cupiditates', 'neglegit',
        'mortem', 'de', 'diis', 'inmortalibus', 'sine', 'ullo', 'metu', 'vera', 'sentit', 'non', 'dubitat', 'si',
        'ita', 'melius', 'sit', 'migrare', 'de', 'vita', 'his', 'rebus', 'instructus', 'semper', 'est', 'in',
        'voluptate', 'neque', 'enim', 'tempus', 'est', 'ullum', 'quo', 'non', 'plus', 'voluptatum', 'habeat', 'quam',
        'dolorum', 'nam', 'et', 'praeterita', 'grate', 'meminit', 'et', 'praesentibus', 'ita', 'potitur', 'ut',
        'animadvertat', 'quanta', 'sint', 'ea', 'quamque', 'iucunda', 'neque', 'pendet', 'ex', 'futuris', 'sed',
        'expectat', 'illa', 'fruitur', 'praesentibus', 'ab', 'iisque', 'vitiis', 'quae', 'paulo', 'ante', 'collegi',
        'abest', 'plurimum', 'et', 'cum', 'stultorum', 'vitam', 'cum', 'sua', 'comparat', 'magna', 'afficitur',
        'voluptate', 'dolores', 'autem', 'si', 'qui', 'incurrunt', 'numquam', 'vim', 'tantam', 'habent', 'ut', 'non',
        'plus', 'habeat', 'sapiens', 'quod', 'gaudeat', 'quam', 'quod', 'angatur', 'Optime', 'vero', 'Epicurus',
        'quod', 'exiguam', 'dixit', 'fortunam', 'intervenire', 'sapienti', 'maximasque', 'ab', 'eo', 'et',
        'gravissimas', 'res', 'consilio', 'ipsius', 'et', 'ratione', 'administrari', 'neque', 'maiorem', 'voluptatem',
        'ex', 'infinito', 'tempore', 'aetatis', 'percipi', 'posse', 'quam', 'ex', 'hoc', 'percipiatur', 'quod',
        'videamus', 'esse', 'finitum', 'In', 'dialectica', 'autem', 'vestra', 'nullam', 'existimavit', 'esse', 'nec',
        'ad', 'melius', 'vivendum', 'nec', 'ad', 'commodius', 'disserendum', 'viam', 'In', 'physicis', 'plurimum',
        'posuit', 'ea', 'scientia', 'et', 'verborum', 'vis', 'et', 'natura', 'orationis', 'et', 'consequentium',
        'repugnantiumve', 'ratio', 'potest', 'perspici', 'omnium', 'autem', 'rerum', 'natura', 'cognita', 'levamur',
        'superstitione', 'liberamur', 'mortis', 'metu', 'non', 'conturbamur', 'ignoratione', 'rerum', 'e', 'qua',
        'ipsa', 'horribiles', 'existunt', 'saepe', 'formidines', 'denique', 'etiam', 'morati', 'melius', 'erimus',
        'cum', 'didicerimus', 'quid', 'natura', 'desideret', 'tum', 'vero', 'si', 'stabilem', 'scientiam', 'rerum',
        'tenebimus', 'servata', 'illa', 'quae', 'quasi', 'delapsa', 'de', 'caelo', 'est', 'ad', 'cognitionem',
        'omnium', 'regula', 'ad', 'quam', 'omnia', 'iudicia', 'rerum', 'dirigentur', 'numquam', 'ullius', 'oratione',
        'victi', 'sententia', 'desistemus', 'Nisi', 'autem', 'rerum', 'natura', 'perspecta', 'erit', 'nullo', 'modo',
        'poterimus', 'sensuum', 'iudicia', 'defendere', 'quicquid', 'porro', 'animo', 'cernimus', 'id', 'omne',
        'oritur', 'a', 'sensibus', 'qui', 'si', 'omnes', 'veri', 'erunt', 'ut', 'Epicuri', 'ratio', 'docet', 'tum',
        'denique', 'poterit', 'aliquid', 'cognosci', 'et', 'percipi', 'quos', 'qui', 'tollunt', 'et', 'nihil',
        'posse', 'percipi', 'dicunt', 'ii', 'remotis', 'sensibus', 'ne', 'id', 'ipsum', 'quidem', 'expedire',
        'possunt', 'quod', 'disserunt', 'praeterea', 'sublata', 'cognitione', 'et', 'scientia', 'tollitur', 'omnis',
        'ratio', 'et', 'vitae', 'degendae', 'et', 'rerum', 'gerendarum', 'sic', 'e', 'physicis', 'et', 'fortitudo',
        'sumitur', 'contra', 'mortis', 'timorem', 'et', 'constantia', 'contra', 'metum', 'religionis', 'et',
        'sedatio', 'animi', 'omnium', 'rerum', 'occultarum', 'ignoratione', 'sublata', 'et', 'moderatio', 'natura',
        'cupiditatum', 'generibusque', 'earum', 'explicatis', 'et', 'ut', 'modo', 'docui', 'cognitionis', 'regula',
        'et', 'iudicio', 'ab', 'eadem', 'illa', 'constituto', 'veri', 'a', 'falso', 'distinctio', 'traditur',
        'Restat', 'locus', 'huic', 'disputationi', 'vel', 'maxime', 'necessarius', 'de', 'amicitia', 'quam', 'si',
        'voluptas', 'summum', 'sit', 'bonum', 'affirmatis', 'nullam', 'omnino', 'fore', 'de', 'qua', 'Epicurus',
        'quidem', 'ita', 'dicit', 'omnium', 'rerum', 'quas', 'ad', 'beate', 'vivendum', 'sapientia', 'comparaverit',
        'nihil', 'esse', 'maius', 'amicitia', 'nihil', 'uberius', 'nihil', 'iucundius', 'nec', 'vero', 'hoc',
        'oratione', 'solum', 'sed', 'multo', 'magis', 'vita', 'et', 'factis', 'et', 'moribus', 'comprobavit', 'quod',
        'quam', 'magnum', 'sit', 'fictae', 'veterum', 'fabulae', 'declarant', 'in', 'quibus', 'tam', 'multis',
        'tamque', 'variis', 'ab', 'ultima', 'antiquitate', 'repetitis', 'tria', 'vix', 'amicorum', 'paria',
        'reperiuntur', 'ut', 'ad', 'Orestem', 'pervenias', 'profectus', 'a', 'Theseo', 'at', 'vero', 'Epicurus',
        'una', 'in', 'domo', 'et', 'ea', 'quidem', 'angusta', 'quam', 'magnos', 'quantaque', 'amoris',
        'conspiratione', 'consentientis', 'tenuit', 'amicorum', 'greges!', 'quod', 'fit', 'etiam', 'nunc', 'ab',
        'Epicureis', 'sed', 'ad', 'rem', 'redeamus', 'de', 'hominibus', 'dici', 'non', 'necesse', 'est', 'Tribus',
        'igitur', 'modis', 'video', 'esse', 'a', 'nostris', 'de', 'amicitia', 'disputatum', 'alii', 'cum', 'eas',
        'voluptates', 'quae', 'ad', 'amicos', 'pertinerent', 'negarent', 'esse', 'per', 'se', 'ipsas', 'tam',
        'expetendas', 'quam', 'nostras', 'expeteremus', 'quo', 'loco', 'videtur', 'quibusdam', 'stabilitas',
        'amicitiae', 'vacillare', 'tuentur', 'tamen', 'eum', 'locum', 'seque', 'facile', 'ut', 'mihi', 'videtur',
        'expediunt', 'ut', 'enim', 'virtutes', 'de', 'quibus', 'ante', 'dictum', 'est', 'sic', 'amicitiam', 'negant',
        'posse', 'a', 'voluptate', 'discedere', 'nam', 'cum', 'solitudo', 'et', 'vita', 'sine', 'amicis',
        'insidiarum', 'et', 'metus', 'plena', 'sit', 'ratio', 'ipsa', 'monet', 'amicitias', 'comparare', 'quibus',
        'partis', 'confirmatur', 'animus', 'et', 'a', 'spe', 'pariendarum', 'voluptatum', 'seiungi', 'non', 'potest',
        'Atque', 'ut', 'odia', 'invidiae', 'despicationes', 'adversantur', 'voluptatibus', 'sic', 'amicitiae', 'non',
        'modo', 'fautrices', 'fidelissimae', 'sed', 'etiam', 'effectrices', 'sunt', 'voluptatum', 'tam', 'amicis',
        'quam', 'sibi', 'quibus', 'non', 'solum', 'praesentibus', 'fruuntur', 'sed', 'etiam', 'spe', 'eriguntur',
        'consequentis', 'ac', 'posteri', 'temporis', 'quod', 'quia', 'nullo', 'modo', 'sine', 'amicitia', 'firmam',
        'et', 'perpetuam', 'iucunditatem', 'vitae', 'tenere', 'possumus', 'neque', 'vero', 'ipsam', 'amicitiam',
        'tueri', 'nisi', 'aeque', 'amicos', 'et', 'nosmet', 'ipsos', 'diligamus', 'idcirco', 'et', 'hoc', 'ipsum',
        'efficitur', 'in', 'amicitia', 'et', 'amicitia', 'cum', 'voluptate', 'conectitur', 'nam', 'et', 'laetamur',
        'amicorum', 'laetitia', 'aeque', 'atque', 'nostra', 'et', 'pariter', 'dolemus', 'angoribus', 'Quocirca',
        'eodem', 'modo', 'sapiens', 'erit', 'affectus', 'erga', 'amicum', 'quo', 'in', 'se', 'ipsum', 'quosque',
        'labores', 'propter', 'suam', 'voluptatem', 'susciperet', 'eosdem', 'suscipiet', 'propter', 'amici',
        'voluptatem', 'quaeque', 'de', 'virtutibus', 'dicta', 'sunt', 'quem', 'ad', 'modum', 'eae', 'semper',
        'voluptatibus', 'inhaererent', 'eadem', 'de', 'amicitia', 'dicenda', 'sunt', 'praeclare', 'enim', 'Epicurus',
        'his', 'paene', 'verbis', 'Eadem', 'inquit', 'scientia', 'confirmavit', 'animum', 'ne', 'quod', 'aut',
        'sempiternum', 'aut', 'diuturnum', 'timeret', 'malum', 'quae', 'perspexit', 'in', 'hoc', 'ipso', 'vitae',
        'spatio', 'amicitiae', 'praesidium', 'esse', 'firmissimum', 'Sunt', 'autem', 'quidam', 'Epicurei',
        'timidiores', 'paulo', 'contra', 'vestra', 'convicia', 'sed', 'tamen', 'satis', 'acuti', 'qui', 'verentur',
        'ne', 'si', 'amicitiam', 'propter', 'nostram', 'voluptatem', 'expetendam', 'putemus', 'tota', 'amicitia',
        'quasi', 'claudicare', 'videatur', 'itaque', 'primos', 'congressus', 'copulationesque', 'et', 'consuetudinum',
        'instituendarum', 'voluntates', 'fieri', 'propter', 'voluptatem', 'cum', 'autem', 'usus', 'progrediens',
        'familiaritatem', 'effecerit', 'tum', 'amorem', 'efflorescere', 'tantum', 'ut', 'etiamsi', 'nulla', 'sit',
        'utilitas', 'ex', 'amicitia', 'tamen', 'ipsi', 'amici', 'propter', 'se', 'ipsos', 'amentur', 'etenim', 'si',
        'loca', 'si', 'fana', 'si', 'urbes', 'si', 'gymnasia', 'si', 'campum', 'si', 'canes', 'si', 'equos', 'si',
        'ludicra', 'exercendi', 'aut', 'venandi', 'consuetudine', 'adamare', 'solemus', 'quanto', 'id', 'in',
        'hominum', 'consuetudine', 'facilius', 'fieri', 'poterit', 'et', 'iustius', 'Sunt', 'autem', 'qui', 'dicant',
        'foedus', 'esse', 'quoddam', 'sapientium', 'ut', 'ne', 'minus', 'amicos', 'quam', 'se', 'ipsos', 'diligant',
        'quod', 'et', 'posse', 'fieri', 'intellegimus', 'et', 'saepe', 'etiam', 'videmus', 'et', 'perspicuum', 'est',
        'nihil', 'ad', 'iucunde', 'vivendum', 'reperiri', 'posse', 'quod', 'coniunctione', 'tali', 'sit', 'aptius',
        'Quibus', 'ex', 'omnibus', 'iudicari', 'potest', 'non', 'modo', 'non', 'impediri', 'rationem', 'amicitiae',
        'si', 'summum', 'bonum', 'in', 'voluptate', 'ponatur', 'sed', 'sine', 'hoc', 'institutionem', 'omnino',
        'amicitiae', 'non', 'posse', 'reperiri', 'Quapropter', 'si', 'ea', 'quae', 'dixi', 'sole', 'ipso',
        'illustriora', 'et', 'clariora', 'sunt', 'si', 'omnia', 'dixi', 'hausta', 'e', 'fonte', 'naturae', 'si',
        'tota', 'oratio', 'nostra', 'omnem', 'sibi', 'fidem', 'sensibus', 'confirmat', 'id', 'est', 'incorruptis',
        'atque', 'integris', 'testibus', 'si', 'infantes', 'pueri', 'mutae', 'etiam', 'bestiae', 'paene', 'loquuntur',
        'magistra', 'ac', 'duce', 'natura', 'nihil', 'esse', 'prosperum', 'nisi', 'voluptatem', 'nihil', 'asperum',
        'nisi', 'dolorem', 'de', 'quibus', 'neque', 'depravate', 'iudicant', 'neque', 'corrupte', 'nonne', 'ei',
        'maximam', 'gratiam', 'habere', 'debemus', 'qui', 'hac', 'exaudita', 'quasi', 'voce', 'naturae', 'sic', 'eam',
        'firme', 'graviterque', 'comprehenderit', 'ut', 'omnes', 'bene', 'sanos', 'in', 'viam', 'placatae',
        'tranquillae', 'quietae', 'beatae', 'vitae', 'deduceret', 'Qui', 'quod', 'tibi', 'parum', 'videtur',
        'eruditus', 'ea', 'causa', 'est', 'quod', 'nullam', 'eruditionem', 'esse', 'duxit', 'nisi', 'quae', 'beatae',
        'vitae', 'disciplinam', 'iuvaret', 'An', 'ille', 'tempus', 'aut', 'in', 'poetis', 'evolvendis', 'ut', 'ego',
        'et', 'Triarius', 'te', 'hortatore', 'facimus', 'consumeret', 'in', 'quibus', 'nulla', 'solida', 'utilitas',
        'omnisque', 'puerilis', 'est', 'delectatio', 'aut', 'se', 'ut', 'Plato', 'in', 'musicis', 'geometria',
        'numeris', 'astris', 'contereret', 'quae', 'et', 'a', 'falsis', 'initiis', 'profecta', 'vera', 'esse', 'non',
        'possunt', 'et', 'si', 'essent', 'vera', 'nihil', 'afferrent', 'quo', 'iucundius', 'id', 'est', 'quo',
        'melius', 'viveremus', 'eas', 'ergo', 'artes', 'persequeretur', 'vivendi', 'artem', 'tantam', 'tamque', 'et',
        'operosam', 'et', 'perinde', 'fructuosam', 'relinqueret', 'non', 'ergo', 'Epicurus', 'ineruditus', 'sed',
        'ii', 'indocti', 'qui', 'quae', 'pueros', 'non', 'didicisse', 'turpe', 'est', 'ea', 'putant', 'usque', 'ad',
        'senectutem', 'esse', 'discenda', 'Quae', 'cum', 'dixisset', 'Explicavi', 'inquit', 'sententiam', 'meam',
        'et', 'eo', 'quidem', 'consilio', 'tuum', 'iudicium', 'ut', 'cognoscerem', 'quoniam', 'mihi', 'ea',
        'facultas', 'ut', 'id', 'meo', 'arbitratu', 'facerem', 'ante', 'hoc', 'tempus', 'numquam', 'est', 'data'];
    
    this.setDataset = function (_dataset){
        this.dataset = _dataset;
    };
    
    var Lipsum = function (dataset, datasetLength, $q) {
        var getWord = function() {
            return dataset[Math.round(Math.random() * datasetLength)];
        };

        var random = function (a, b) {
            return Math.round(Math.random()*(b - a) + a);
        };

        var capitalizeFirstLetter = function(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        };

        var getWords = function (count, capitalized) {
            var words = '';
            if (capitalized) {
                while (count--) {
                    words += capitalizeFirstLetter(getWord()) + ' ';
                }
            } else {
                while (count--) {
                    words += getWord() + ' ';
                }
            }
            return words.trim();
        };

        var getSentences = function (count) {
            var sentenses  = '';
            while (count--) {
                sentenses += capitalizeFirstLetter(getWords(random(5,15))) + '. ';
            }
            return sentenses.trim();
        };

        var getParagraphs = function (count) {
            var paragraphs = '';
            while (count--) {
                paragraphs += '<p>' + getSentences(random(3,10)) + '</p>';
            }
            return paragraphs;
        };

        /*
         * motif format: count type
         * type: w = word, W = capitalized word, s = sentences, p = paragraph
         * count: number or lower bound - higher bound
         * 
         * example p5: 5 paragraph
         *
         */
        var motifRegExp = /^([0-9]+)-?([0-9]*)([wWps])$/;
        var getFromMotif = function (motif) {
            var matchedMotif = motifRegExp.exec(motif);
            var value = motif;
            if (matchedMotif) {
                var from = parseInt(matchedMotif[1]);
                var to = parseInt(matchedMotif[2]);
                var type = matchedMotif[3];

                if (angular.isNumber(from)) {
                    if (!isNaN(to)) {
                        from = random(from, to);
                    }
                } else {
                    from = 1;
                }

                switch (type) {
                    case 'w':
                        value = getWords(from);
                        break;
                    case 'W':
                        value = getWords(from, true);
                        break;
                    case 's':
                        value = getSentences(from);
                        break;
                    case 'p':
                        value = getParagraphs(from);
                        break;
                }
            }
            return value;
        };
        this.get = function (input) {
            var that = this;
            
            if (angular.isArray(input)) {
                if (input.length === 2 || input.length === 3) {
                    var motif = input[0];
                    var length = input[1];
                    var length2 = input[2];
                    
                    if(length2){
                        length = random(length, length2);
                    }
                    
                    var generatedArray = [];
                    for (var i = 0; i < length; i++) {
                        generatedArray.push(that.get(motif));
                    }
                    
                    return generatedArray;
                }
                return input;
            } else if (angular.isObject(input)){
                var generatedObject = {};
                angular.forEach(input, function(value, key) {
                    generatedObject[key] = that.get(value);
                });
                return generatedObject;
            } else {
                return getFromMotif(input);
            }
        };

        this.getPromise = function (input, failureRate) {
            if (!angular.isNumber(failureRate)) {
                failureRate = 0;
            }
            var deferred = $q.defer();
            if (Math.random() < failureRate) {
                deferred.reject('Random Failure!');
            } else {
                deferred.resolve(this.get(input));
            }
            return deferred.promise;
        };
    };
    
    this.$get = function ($q) {
        return new Lipsum(this.dataset, this.dataset.length, $q);
    };
});
angular.module('ngLipsum').directive('ngBindLipsum', function(ngLipsum) {
    'use strict';
    
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            attrs.$observe('ngBindLipsum', function(motif) {
                element.html(ngLipsum.get(motif));
            });
        }
    };
});