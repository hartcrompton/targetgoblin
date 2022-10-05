var storyContent = ﻿{"inkVersion":19,"root":[["^You're working the return-counter at Target. It’s Tuesday, dead-quiet. Nobody returns things on Tuesdays. That mystery might occupy your thoughts for the rest of the afternoon.","\n","^Somewhere ahead of you, below the lip of the counter, you hear a scuffling.","\n","ev","str","^\"Hello?\"","/str","/ev",{"*":"0.c-0","flg":4},{"c-0":["\n",{"#":"CLEAR"},{"->":"Hello"},{"->":"0.g-0"},{"#f":5}],"g-0":["done",{"#f":5}]}],"done",{"Hello":[["^\"Hello?\" You ask. A nearby shopper browsing seasonal tchotchkes gives you a dirty look.","\n","ev","str","^The scuffling continues.","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["\n",{"#":"CLEAR"},{"->":"itsagoblin"},{"#f":5}]}],{"#f":1}],"itsagoblin":[["^A small green hand summits the counter, quickly followed by a foot. Within moments, a small green creature heaves itself up and on to the counter. Your counter.","\n","^It's a goblin.","\n","ev","str","^It's a goblin?","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["\n",{"#":"CLEAR"},"^It is indeed a goblin.","\n",{"->":"youreagoblin"},{"#f":5}]}],{"#f":1}],"youreagoblin":[["ev","str","^\"You're a goblin.\"","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["\n",{"#":"CLEAR"},"^“You're a goblin.” You blurt out. Something sounds wrong about that, but it is important to clarify things.","\n","^It nods. A worried smile on its face.","\n",{"->":"whatsthatlike"},{"#f":5}]}],{"#f":1}],"whatsthatlike":[["ev","str","^“What's that like?”","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^“Are you from around here?”","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["^ ","\n",{"#":"CLEAR"},"^“What's that like?” You ask. Small talk is perhaps the only universal language.","\n","^\"Well.\" It considers the question seriously. \"We are quite small. And rather quiet,\" it adds. \"This makes some things difficult.\"","\n","^You nod. It does sound challenging.","\n",{"->":"canihelp"},{"#f":5}],"c-1":["^ ","\n",{"#":"CLEAR"},"^“Are you from around here?” You ask.","\n","^The goblin snorts, maybe laughs. All you know for certain is there are lots of teeth.","\n","^\"Goblins live far from here.\" It says seriously. \"Between the falling leaves.\" It does something mystic with its hands.","\n","^You nod. Of course, you should have guessed.","\n",{"->":"canihelp"},{"#f":5}]}],{"#f":1}],"canihelp":[[["ev",{"^->":"canihelp.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^“Can I help you?”",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"canihelp.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"#":"CLEAR"},"^\"Can I help you?\" That’s right, you’re the captain of this returns counter. The appearance of fairytale creatures won’t throw you off your game.","\n","^It rummages in a small leather rucksack and lays a can opener on the counter before you. It pushes it forward a millimetre with a slender finger.","\n","^\"Recompense.\"","\n","^You blink. The goblin blinks. It would like to return this can opener.","\n","^You, of course, don't ask why it bought a can opener. Corporate thoughts on customer privacy are quite specific.","\n",{"->":"receipt"},{"#f":5}]}],{"#f":1}],"receipt":[[["ev",{"^->":"receipt.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^\"Do you have a receipt?\"",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"receipt.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"#":"CLEAR"},"^With nothing left to fall back on, your brain clings to its scaffold of retail training.","\n","^\"Ree-zeet?\" It makes a face and tries to clean the word off its tongue.","\n",{"->":"receiptchoice"},{"#f":5}]}],{"#f":1}],"receiptchoice":[["^\"Yes. A receipt, it's...\" You begin.","\n","^What <u><i>is</i></u> a receipt?","\n","ev","str","^Proof.","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^A record.","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^A scrap of paper.","/str","/ev",{"*":".^.c-2","flg":4},{"c-0":["\n",{"#":"CLEAR"},"^\"Proof of purchase.\" Naturally.","\n","^Very important indeed to protect corporate from a bevy of can opener forgeries.","\n",{"->":"ithasareceipt"},{"#f":5}],"c-1":["\n",{"#":"CLEAR"},"^\"A record of money and time spent.\" You conclude.","\n","^So much time. You try not to think about the ratio too closely.","\n",{"->":"ithasareceipt"},{"#f":5}],"c-2":["\n",{"#":"CLEAR"},"^\"A scrap of paper. Just something you throw out.\"","\n","^Eventually. After it lives at the bottom of your jacket pocket and turns into an indecipherable glossy turd.","\n",{"->":"ithasareceipt"},{"#f":5}]}],{"#f":1}],"ithasareceipt":["^The goblin levels its eyes at you. It doesn't seem to think highly of this system. Nevertheless, it extracts a weathered receipt from its bag.","\n",{"->":"cashorcredit"},{"#f":1}],"cashorcredit":[["^Receipt in hand, you ask the big question:","\n",["ev",{"^->":"cashorcredit.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^\"Will that be cash or store credit?\"",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"cashorcredit.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"#":"CLEAR"},"^The goblin cocks its head. You endeavour to explain the concept of store credit. It’s like money, but better! Because you can only spend it here.","\n","^The goblin hisses. “It keeps you under their power even if you relinquish the object?”","\n",{"->":"cashthen"},{"#f":5}]}],{"#f":1}],"cashthen":[[["ev",{"^->":"cashthen.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Cash it is then.",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"cashthen.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"#":"CLEAR"},"^With a few short taps on your register you tidily process the return.","\n","^You hand the goblin three dollars and twenty-seven cents.","\n","^You don't mention the customer satisfcation survey.","\n",{"->":"restart"},{"#f":5}]}],{"#f":1}],"restart":[[["ev",{"^->":"restart.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Well done. You can restart if you'd like.",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"restart.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"#":"RESTART"},"end",{"#f":5}]}],{"#f":1}],"#f":1}],"listDefs":{}};