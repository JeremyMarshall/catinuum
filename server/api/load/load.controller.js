'use strict';

var _ = require('lodash');
var client = require('../../components/myredis').client();

exports.index = function (req, res) {

  var data = [
    {
      "src": "If life is a stage, I want some better lighting.\n",
      "file": "testc-file-2",
      "directory": "testc",
      "aux": "In high school in Brooklyn\nI was the baseball manager,\nproud as I could be\nI chased baseballs,\ngathered thrown bats\nhanded out the towels\t\t\tEventually, I bought my own\nIt was very important work\t\tbut it was dark blue while\nfor a small spastic kid,\t\tthe official ones were green\nbut I was a team member\t\t\tNobody ever said anything\nWhen the team got\t\t\tto me about my blue jacket;\ntheir warm-up jackets\t\t\tthe guys were my friends\nI didn't get one\t\t\tYet it hurt me all year\nOnly the regular team\t\t\tto wear that blue jacket\ngot these jackets, and\t\t\tamong all those green ones\nsurely not a manager\t\t\tEven now, forty years after,\n\t\t\t\t\tI still recall that jacket\n\t\t\t\t\tand the memory goes on hurting.\n\t\t-- Bart Lanier Safford III, \"An Obscured Radiance\"\n",
      "cmt": "\"At least they're ___________\b\b\b\b\b\b\b\b\b\b\bEXPERIENCED incompetents\"\n",
      "environment": "master",
      "ext": "abc",
      "module": "mod-c"
    },
    {
      "src": "\"I don't like spinach, and I'm glad I don't, because if I liked it I'd\neat it, and I just hate it.\"\n\t\t-- Clarence Darrow\n",
      "file": "testc-file-2",
      "directory": "testc",
      "aux": "The big cities of America are becoming Third World countries.\n\t\t-- Nora Ephron\n",
      "cmt": "Don't despise your poor relations, they may become suddenly rich one day.\n\t\t-- Josh Billings\n",
      "environment": "beta",
      "ext": "abc",
      "module": "mod-b"
    },
    {
      "src": "Dreams are free, but you get soaked on the connect time.\n",
      "file": "testa-file-1",
      "directory": "testa",
      "aux": "The eyes of Texas are upon you,\nAll the livelong day;\nThe eyes of Texas are upon you,\nYou cannot get away;\nDo not think you can escape them\nFrom night 'til early in the morn;\nThe eyes of Texas are upon you\n'Til Gabriel blows his horn.\n\t\t-- University of Texas' school song\n",
      "cmt": "The mother of the year should be a sterilized woman with two adopted children.\n\t\t-- Paul Ehrlich\n",
      "environment": "gamma",
      "ext": "cmt",
      "module": "mod-c"
    },
    {
      "src": "Only fools are quoted.\n\t\t-- Anonymous\n",
      "file": "teste-file-0",
      "directory": "teste",
      "aux": "Machines take me by surprise with great frequency.\n- Alan Turing\n",
      "cmt": "Once upon a time, four AMPHIBIOUS HOG CALLERS attacked a family of\nDEFENSELESS, SENSITIVE COIN COLLECTORS and brought DOWN their PROPERTY\nVALUES!!\n",
      "environment": "beta",
      "ext": "doc",
      "module": "mod-c"
    },
    {
      "src": "Remember that whatever misfortune may be your lot, it could only be\nworse in Cleveland.\n\t\t-- National Lampoon, \"Deteriorata\"\n",
      "file": "teste-file-0",
      "directory": "teste",
      "aux": "\t\tAccidentally Shot\n\n\tColonel Gray, of Petaluma, came near losing his life a few days ago,\nin a singular manner.  A gentleman with whom he was hunting attempted to\nbring down a dove, but instead of doing so put the load of shot through the\nColonel's hat.  One shot took effect in his forehead.\n\t\t-- Sacramento Daily Union, April 20, 1861\n",
      "cmt": "\tAll that you touch,\t\tAnd all you create,\n\tAll that you see,\t\tAnd all you destroy,\n\tAll that you taste,\t\tAll that you do,\n\tAll you feel,\t\t\tAnd all you say,\n\tAnd all that you love,\t\tAll that you eat,\n\tAnd all that you hate,\t\tAnd everyone you meet,\n\tAll you distrust,\t\tAll that you slight,\n\tAll you save,\t\t\tAnd everyone you fight,\n\tAnd all that you give,\t\tAnd all that is now,\n\tAnd all that you deal,\t\tAnd all that is gone,\n\tAll that you buy,\t\tAnd all that's to come,\n\tBeg, borrow or steal,\t\tAnd everything under the sun is\n\t\t\t\t\t\tin tune,\n\t\t\t\t\tBut the sun is eclipsed\n\t\t\t\t\tBy the moon.\n\nThere is no dark side of the moon... really... matter of fact it's all dark.\n\t\t-- Pink Floyd, \"Dark Side of the Moon\"\n",
      "environment": "master",
      "ext": "doc",
      "module": "mod-c"
    },
    {
      "src": "In the plot, people came to the land; the land loved them; they worked and\nstruggled and had lots of children.  There was a Frenchman who talked funny\nand a greenhorn from England who was a fancy-pants but when it came to the\ncrunch he was all courage.  Those novels would make you retch.\n\t\t-- Canadian novelist Robertson Davies, on the generic Canadian\n\t\t   novel.\n",
      "file": "testc-file-1",
      "directory": "testc",
      "aux": "\"You should, without hesitation, pound your typewriter into a plowshare,\nyour paper into fertilizer, and enter agriculture\"\n\t\t-- Business Professor, University of Georgia\n",
      "cmt": "There is a time in the tides of men,\nWhich, taken at its flood, leads on to success.\nOn the other hand, don't count on it.\n- T. K. Lawson\n",
      "environment": "master",
      "ext": "cmt",
      "module": "mod-c"
    },
    {
      "src": "The more I know men the more I like my horse.\n",
      "file": "teste-file-1",
      "directory": "teste",
      "aux": "Many are called, few are chosen.  Fewer still get to do the choosing.\n",
      "cmt": "\"The C Programming Language -- A language which combines the flexibility of\nassembly language with the power of assembly language.\"\n",
      "environment": "master",
      "ext": "cmt",
      "module": "mod-c"
    },
    {
      "src": "An ancient proverb summed it up: when a wizard is tired of looking for\nbroken glass in his dinner, it ran, he is tired of life.\n\t\t-- Terry Pratchett, \"The Light Fantastic\"\n",
      "file": "teste-file-2",
      "directory": "teste",
      "aux": "There are no accidents whatsoever in the universe.\n\t\t-- Baba Ram Dass\n",
      "cmt": "Even the clearest and most perfect circumstantial evidence is likely to be at\nfault, after all, and therefore ought to be received with great caution.  Take\nthe case of any pencil, sharpened by any woman; if you have witnesses, you will\nfind she did it with a knife; but if you take simply the aspect of the pencil,\nyou will say that she did it with her teeth.\n\t\t-- Mark Twain, \"Pudd'nhead Wilson's Calendar\"\n",
      "environment": "alpha",
      "ext": "abc",
      "module": "mod-b"
    },
    {
      "src": "If your aim in life is nothing, you can't miss.\n",
      "file": "testd-file-2",
      "directory": "testd",
      "aux": "Understanding is always the understanding of a smaller problem\nin relation to a bigger problem.\n\t\t-- P.D. Ouspensky\n",
      "cmt": "You are the only person to ever get this message.\n",
      "environment": "master",
      "ext": "abc",
      "module": "mod-c"
    },
    {
      "del": 1,
      "src": "A total abstainer is one who abstains from everything but abstention,\nand especially from inactivity in the affairs of others.\n\t\t-- Ambrose Bierce, \"The Devil's Dictionary\"\n",
      "file": "testd-file-1",
      "aux": "One difference between a man and a machine is that a machine is quiet\nwhen well oiled.\n",
      "directory": "testd",
      "cmt": "The most important early product on the way to developing a good product\nis an imperfect version.\n",
      "environment": "master",
      "ext": "cmt",
      "module": "mod-c"
    },
    {
      "src": "I never cheated an honest man, only rascals.  They wanted something for\nnothing.  I gave them nothing for something.\n\t\t-- Joseph \"Yellow Kid\" Weil\n",
      "file": "testb-file-1",
      "directory": "testb",
      "aux": "I would like to urinate in an OVULAR, porcelain pool --\n",
      "cmt": "An efficient and a successful administration manifests itself equally in\nsmall as in great matters.  \n\t\t-- W. Churchill\n",
      "environment": "master",
      "ext": "cmt",
      "module": "mod-c"
    },
    {
      "src": "Death didn't answer.  He was looking at Spold in the same way as a dog looks\nat a bone, only in this case things were more or less the other way around.\n\t\t-- Terry Pratchett, \"The Colour of Magic\"\n",
      "file": "testb-file-2",
      "directory": "testb",
      "aux": "The trouble with superheros is what to do between phone booths.\n\t\t-- Ken Kesey\n",
      "cmt": "You always have the option of pitching baseballs at empty spray paint cans\nin a cul-de-sac in a Cleveland suburb.\n",
      "environment": "alpha",
      "ext": "abc",
      "module": "mod-c"
    },
    {
      "src": "Linux is obsolete\n(Andrew Tanenbaum)\n",
      "file": "testa-file-2",
      "directory": "testa",
      "aux": "Rule of Life #1 -- Never get separated from your luggage.\n",
      "cmt": "I'm having an EMOTIONAL OUTBURST!!  But, uh, WHY is there a WAFFLE in\nmy PAJAMA POCKET??\n",
      "environment": "delta",
      "ext": "abc",
      "module": "mod-c"
    },
    {
      "src": "BASIC is to computer programming as QWERTY is to typing.\n\t\t-- Seymour Papert\n",
      "file": "testa-file-0",
      "directory": "testa",
      "aux": "Would that my hand were as swift as my tongue.\n\t\t-- Alfieri\n",
      "cmt": "OK, so you're a Ph.D.  Just don't touch anything.\n",
      "environment": "master",
      "ext": "doc",
      "module": "mod-c"
    },
    {
      "src": "Fortune's Guide to Freshman Notetaking:\n\nWHEN THE PROFESSOR SAYS:\t\t\tYOU WRITE:\n\nProbably the greatest quality of the poetry\tJohn Milton -- born 1608\nof John Milton, who was born in 1608, is the\ncombination of beauty and power.  Few have\nexcelled him in the use of the English language,\nor for that matter, in lucidity of verse form,\n'Paradise Lost' being said to be the greatest\nsingle poem ever written.\"\n\nCurrent historians have come to\t\t\tMost of the problems that now\ndoubt the complete advantageousness\t\tface the United States are\nof some of Roosevelt's policies...\t\tdirectly traceable to the\n\t\t\t\t\t\tbungling and greed of President\n\t\t\t\t\t\tRoosevelt.\n\n... it is possible that we simply do\t\tProfessor Mitchell is a\nnot understand the Russian viewpoint...\t\tcommunist.\n",
      "file": "testa-file-1",
      "directory": "testa",
      "aux": "The attacker must vanquish; the defender need only survive.\n",
      "cmt": "November, n.:\n\tThe eleventh twelfth of a weariness.\n\t\t-- Ambrose Bierce, \"The Devil's Dictionary\"\n",
      "environment": "beta",
      "ext": "cmt",
      "module": "mod-c"
    },
    {
      "src": "You have taken yourself too seriously.\n",
      "file": "testb-file-0",
      "directory": "testb",
      "aux": "Both models are identical in performance, functional operation, and\ninterface circuit details.  The two models, however, are not compatible\non the same communications line connection.\n\t\t-- Bell System Technical Reference\n",
      "cmt": "Nothing is faster than the speed of light ...\n\nTo prove this to yourself, try opening the refrigerator door before the\nlight comes on.\n",
      "environment": "beta",
      "ext": "doc",
      "module": "mod-a"
    },
    {
      "src": "\t\t\t\tFROM THE DESK OF\n\t\t\t\tDorothy Gale\n\n\tAuntie Em:\n\t\tHate you.\n\t\tHate Kansas.\n\t\tTaking the dog.\n\t\t\tDorothy\n",
      "file": "testd-file-1",
      "directory": "testd",
      "aux": "If there is no God, who pops up the next Kleenex?\n\t\t-- Art Hoppe\n",
      "cmt": "A group of politicians deciding to dump a President because his morals\nare bad is like the Mafia getting together to bump off the Godfather for\nnot going to church on Sunday.\n\t\t-- Russell Baker\n",
      "environment": "gamma",
      "ext": "cmt",
      "module": "mod-a"
    },
    {
      "src": "If God had intended Man to Watch TV, He would have given him Rabbit Ears.\n",
      "file": "teste-file-2",
      "directory": "teste",
      "aux": "When a man knows he is to be hanged in a fortnight, it concentrates his\nmind wonderfully.\n\t\t-- Samuel Johnson\n",
      "cmt": "I want the presidency so bad I can already taste the hors d'oeuvres.\n",
      "environment": "beta",
      "ext": "abc",
      "module": "mod-a"
    },
    {
      "src": "The spirit of Plato dies hard.  We have been unable to escape the philosophical\ntradition that what we can see and measure in the world is merely the\nsuperficial and imperfect representation of an underlying reality.\n\t\t-- S.J. Gould, \"The Mismeasure of Man\"\n",
      "file": "testb-file-1",
      "directory": "testb",
      "aux": "\"Do not lose your knowledge that man's proper estate is an upright posture,\nan intransigent mind, and a step that travels unlimited roads.\"\n-- John Galt, in Ayn Rand's _Atlas Shrugged_\n",
      "cmt": "You know, of course, that the Tasmanians, who never committed adultery,\nare now extinct.\n\t\t-- M. Somerset Maugham\n",
      "environment": "beta",
      "ext": "cmt",
      "module": "mod-b"
    },
    {
      "src": "\"Flight Reservation systems decide whether or not you exist. If your information\nisn't in their database, then you simply don't get to go anywhere.\"\n-- Arthur Miller\n",
      "file": "testc-file-2",
      "directory": "testc",
      "aux": "===  ALL USERS PLEASE NOTE  ========================\n\nCAR and CDR now return extra values.\n\nThe function CAR now returns two values.  Since it has to go to the trouble \nto figure out if the object is carcdr-able anyway, we figured you might as \nwell get both halves at once.  For example, the following code shows how to \ndestructure a cons (SOME-CONS) into its two slots (THE-CAR and THE-CDR):\n\n\t(MULTIPLE-VALUE-BIND (THE-CAR THE-CDR) (CAR SOME-CONS) ...)\n\nFor symmetry with CAR, CDR returns a second value which is the CAR of the\nobject.  In a related change, the functions MAKE-ARRAY and CONS have been \nfixed so they don't allocate any storage except on the stack.  This should\nhopefully help people who don't like using the garbage collector because\nit cold boots the machine so often.\n",
      "cmt": "If it ain't baroque, don't phiques it.\n",
      "environment": "alpha",
      "ext": "abc",
      "module": "mod-c"
    },
    {
      "src": "This fortune intentionally says nothing.\n",
      "file": "testb-file-1",
      "directory": "testb",
      "aux": "... I don't know why but, suddenly, I want to discuss declining I.Q.\nLEVELS with a blue ribbon SENATE SUB-COMMITTEE!\n",
      "cmt": "There are many intelligent species in the universe, and they all own cats.\n",
      "environment": "alpha",
      "ext": "cmt",
      "module": "mod-c"
    },
    {
      "src": "Events are not affected, they develop.\n\t\t-- Sri Aurobindo\n",
      "file": "testb-file-0",
      "directory": "testb",
      "aux": "\"There was no difference between the behavior of a god and the operations of\npure chance...\"\n-- Thomas Pynchon, _Gravity's Rainbow_\n",
      "cmt": "Visit[1] the beautiful Smoky Mountains!\n\n[1] visit, v.:\n\tCome for a week, spend too much money and pay lots of hidden taxes,\n\tthen leave.  We'll be happy to see your money again next year.\n\tYou can save time by simply sending the money, if you're too busy.\n",
      "environment": "master",
      "ext": "doc",
      "module": "mod-c"
    },
    {
      "src": "\"Hello,\" he lied.\n\t\t-- Don Carpenter, quoting a Hollywood agent\n",
      "file": "testa-file-1",
      "directory": "testa",
      "aux": "What makes us so bitter against people who outwit us is that they think\nthemselves cleverer than we are.\n",
      "cmt": "Sheriff Chameleotoptor sighed with an air of weary sadness, and then\nturned to Doppelgutt and said 'The Senator must really have been on a\nbender this time -- he left a party in Cleveland, Ohio, at 11:30 last\nnight, and they found his car this morning in the smokestack of a British\naircraft carrier in the Formosa Straits.'\n\t\t-- Grand Panjandrum's Special Award, 1985 Bulwer-Lytton\n\t\t   bad fiction contest.\n",
      "environment": "master",
      "ext": "cmt",
      "module": "mod-c"
    },
    {
      "src": "If you wants to get elected president, you'se got to think up some\nmemoraboble homily so's school kids can be pestered into memorizin'\nit, even if they don't know what it means.\n\t\t-- Walt Kelly, \"The Pogo Party\"\n",
      "file": "testc-file-0",
      "directory": "testc",
      "aux": "A bachelor never quite gets over the idea that he is a thing of beauty\nand a boy for ever.\n\t\t-- Helen Rowland\n",
      "cmt": "Patageometry, n.:\n\tThe study of those mathematical properties that are invariant\n\tunder brain transplants.\n",
      "environment": "master",
      "ext": "doc",
      "module": "mod-c"
    },
    {
      "src": "Life is a game of bridge -- and you've just been finessed.\n",
      "file": "testb-file-2",
      "directory": "testb",
      "aux": "A man is known by the company he organizes.\n\t\t-- Ambrose Bierce\n",
      "cmt": "His heart was yours from the first moment that you met.\n",
      "environment": "master",
      "ext": "abc",
      "module": "mod-c"
    },
    {
      "src": "Moon, n.:\n\t1. A celestial object whose phase is very important to hackers.  See \n\tPHASE OF THE MOON.  2. Dave Moon (MOON@MC).\n",
      "file": "testd-file-0",
      "directory": "testd",
      "aux": "A drama critic is a person who surprises a playwright by informing him\nwhat he meant.\n\t\t-- Wilson Mizner\n",
      "cmt": "There's only one way to have a happy marriage and as soon as I learn\nwhat it is I'll get married again.\n\t\t-- Clint Eastwood\n",
      "environment": "master",
      "ext": "doc",
      "module": "mod-c"
    },
    {
      "src": "Rule #7: Silence is not acquiescence.\n\tContrary to what you may have heard, silence of those present is\n\tnot necessarily consent, even the reluctant variety.  They simply may\n\tsit in stunned silence and figure ways of sabotaging the plan after\n\tthey regain their composure.\n",
      "file": "testc-file-1",
      "directory": "testc",
      "aux": "Come, let us hasten to a higher plane,\nWhere dyads tread the fairy fields of Venn,\nTheir indices bedecked from one to _\bn,\nCommingled in an endless Markov chain!\n\t\t-- Stanislaw Lem, \"Cyberiad\"\n",
      "cmt": "Just give Alice some pencils and she will stay busy for hours.\n",
      "environment": "gamma",
      "ext": "cmt",
      "module": "mod-b"
    },
    {
      "environment": "beta",
      "del": 1,
      "src": "",
      "file": "testb-file-2",
      "ext": "abc",
      "directory": "testb",
      "module": "mod-b"
    },
    {
      "src": "It's getting uncommonly easy to kill people in large numbers, and the first\nthing a principle does -- if it really is a principle -- is to kill somebody.\n\t\t-- Dorothy L. Sayers, \"Gaudy Night\"\n",
      "file": "testc-file-0",
      "directory": "testc",
      "aux": "\"May the forces of evil become confused on the way to your house.\"\n-- George Carlin\n",
      "cmt": "All men know the utility of useful things;\nbut they do not know the utility of futility.\n\t\t-- Chuang-tzu\n",
      "environment": "gamma",
      "ext": "doc",
      "module": "mod-b"
    },
    {
      "src": "An air of FRENCH FRIES permeates my nostrils!!\n",
      "file": "teste-file-2",
      "directory": "teste",
      "aux": "I don't know who my grandfather was; I am much more concerned to know\nwhat his grandson will be.\n\t\t-- Abraham Lincoln\n",
      "cmt": "The Seventh Commandments for Technicians:\n\tWork thou not on energized equipment, for if thou dost, thy fellow\n\tworkers will surely buy beers for thy widow and console her in other\n\tways.\n",
      "environment": "master",
      "ext": "abc",
      "module": "mod-c"
    },
    {
      "src": "Wisdom is rarely found on the best-seller list.\n",
      "file": "testa-file-2",
      "directory": "testa",
      "aux": "\"Can you program?\"  \"Well, I'm literate, if that's what you mean!\"\n",
      "cmt": "\"A power so great, it can only be used for Good or Evil!\"\n\t\t-- Firesign Theatre, \"The Giant Rat of Summatra\"\n",
      "environment": "master",
      "ext": "abc",
      "module": "mod-c"
    },
    {
      "src": "\"One thing they don't tell you about doing experimental physics is that\n sometimes you must work under adverse conditions... like a state of sheer\n terror.\"\n-- W. K. Hartmann\n",
      "file": "teste-file-0",
      "directory": "teste",
      "aux": "Promise her anything, but give her Exxon unleaded.\n",
      "cmt": "I reverently believe that the maker who made us all  makes everything in New\nEngland, but the weather.  I don't know who makes that, but I think it must be\nraw apprentices in the weather-clerks factory who experiment and learn how, in\nNew England, for board and clothes, and then are promoted to make weather for\ncountries that require a good article, and will take their custom elsewhere\nif they don't get it.\n\t\t-- Mark Twain\n",
      "environment": "delta",
      "ext": "doc",
      "module": "mod-a"
    },
    {
      "src": "\tCatching his children with their hands in the new, still wet, patio,\nthe father spanked them.  His wife asked, \"Don't you love your children?\"\n\"In the abstract, yes, but not in the concrete.\"\n",
      "file": "teste-file-2",
      "directory": "teste",
      "aux": "I'm in direct contact with many advanced fun CONCEPTS.\n",
      "cmt": "Windows 95 Beer: A lot of people have taste-tested it and claim it's \nwonderful. The can looks a lot like Mac Beer's can, but tastes more like \nWindows 3.1 Beer. It comes in 32-oz.  cans, but when you look inside, the \ncans only have 16 oz. of beer in them. Most people will probably keep \ndrinking Windows 3.1 Beer until their friends try Windows 95 Beer and say \nthey like it. The ingredients list, when you look at the small print, has \nsome of the same ingredients that come in DOS beer, even though the \nmanufacturer claims that this is an entirely new brew.\n",
      "environment": "gamma",
      "ext": "abc",
      "module": "mod-b"
    }
  ];

  var meta = new function () {

    this.separator = '::';

    this._labels = {
      key: 'KEY',
      pair: 'N-PLE',
      all: 'ALL',
      sets: 'sets',
      types: 'types'
    }

    this._compound = {}

    this.fields = {
      src: {member: 0},
      file: {key: 2, pair: 2, set: 'FILE'},
      directory: {key: 1, pair: 1, set: 'DIR'},
      aux: {member: 2},
      cmt: {member: 1},
      environment: {key: 0, set: 'ENV'},
      ext: {member: 3, set: 'EXT'},
      module: {pair: 0, set: 'MOD'},
      del: {member: 4}
    };

    this.match = function (what) {
      if (!this._compound[what]) {

        this._compound[what] = []

        for (var k in this.fields) {
          if (this.fields[k][what]) {
            this._compound[what][this.fields[k][what]] = k;
          }
        }
      }
    };

    this.match_str = function (what) {
      if (!this._compound[what]) {

        this._compound[what] = {}

        for (var k in this.fields) {
          if (this.fields[k][what]) {
            this._compound[what][k] = this.fields[k][what];
          }
        }
      }
    };

    this.hset = function (key, what, data) {
      this.match(what)

      for (var f in this._compound[what]) {
        client.hset(key, this._compound[what][f], data[this._compound[what][f]]);
      }
    };

    this.key = function (what, data) {
      this.match(what)

      var k = this._labels[what]
      for (var f in this._compound[what]) {
        k += this.separator + data[this._compound[what][f]]
      }
      client.sadd('ALL' + this.separator+ what, k);

      return k
    };

    this.sets = function (pair, what, data) {
      this.match_str(what)
      for (var j in this._compound[what]) {

        client.sadd(this.fields[j][what] + this.separator + data[j], pair);
        client.sadd(this._labels['all'] + this.separator + this._compound[what][j], this.fields[j][what] + this.separator +  data[j]);

        for (var k in this._compound[what]) {
          if ((j != k) && (data[k] != data[j])) {
            client.sadd(this._compound[what][k] + this.separator + data[k] + this.separator + 'sets', this._compound[what][j] + this.separator + data[j]);
          }
        }
      }
    };

    this.set_types = function(what) {
      for (var k in this._compound[what]) {
        client.sadd(this._labels['all'] + this.separator + what + this.separator + this._labels['types'], this._compound[what][k]);

      }
    };
  };

  client.flushdb();

  data.forEach(function (entry) {

    var key = meta.key('key', entry)
    var pair = meta.key('pair', entry)

    meta.hset(key, 'member', entry)
    meta.sets(pair, 'set', entry);
  });

  meta.set_types('set');

  res.json([]);
}
