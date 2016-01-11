'use strict';

angular.module('ecophoriaApp')
    .controller('EventsCtrl', function ($scope, $stateParams, $modalInstance) {
        $scope.eventname = $stateParams.eventname;

        $scope.events = [
            {
                name:         "Startup Challenge",
                desc:         "A shout out to all the entrepreneurs!!  Ecophoria’16  presents STARTUP CHALLENGE, a competition that provides you a platform to show your business skills. This event will seek out for young minds with the most innovative, feasible and viable start up idea, taking the domain as “Services”.Interested students can form a team of 2-3 members and get themselves registered for the first out of a total of three rounds.Round I : Online roundIn this round, the registered teams will be required to send the basic idea of their respective start ups in about 700 words on the provided email ID, at least 10 days before the fest.Round II : Presentation roundThis round will be conducted on the day of the fest. The shortlisted teams will be required to present their respective startup plans intensively with  a PowerPoint presentation within 12 minutes, followed by a Cross questioning session of 3 minutes from the judges and audience, which will add to the credibility of the teams, provided they are able to handle the spontaneous queries posed, efficiently.Round III : Situation roundThis is the final and the most interesting segment of the event, which will present the top 5 teams with different economic situations randomly. The teams will then be required to modulate the same startup plan subject to those constraints and use it to convince the audience to invest in their enterprises, hypothetically. This will act as an additional criteria for judgement, which will then decide the winning team with the 'ultimate' startup plan.Tell us what’s your big idea and stand a chance to win cash prizes upto Rs.12,000.",
                participants: 2,
                duration:     1.5,
                prize:        12000,
                image:        "assets/images/StartUp-Challenge.png"
            },
            {
                name:         "The Credible",
                desc:         "The caveman used his fists, we like to use our heads. The perfect presentation of a sound argument at the right moment can change your fate.The Credibles is a conventional Economics Debate competition, with a slight twist. Put your thinking caps on and analyse each other’s arguments away. Establish your credentials as a debater by defending your stance with logical arguments in the face of constant opposition at this year's competition.With each speaker receiving 3+1 minutes to lay out their arguments, followed by a heated round of interrogations, we bring in an element out of the ordinary - a changed motion after every two speakers. The two motions will be announced 24 hours before the day of the fest. After every two speakers, the motion will be alternated between the said motions.This is a novel method of organisation of a conventional debate here at Ecophoria, undertaken with the intent to keep you glued to your seats and your minds sharp throughout. Think fast, and think hard. This is your chance to prove those claims of intelligence, should you choose to accept.",
                participants: 1,
                duration:     1.5,
                prize:        7000,
                image:        "assets/images/Debate-Competition.png"
            },
            {
                name:         "Minute to win it",
                desc:         "Waiting for the Microwave to beep seems to be the most onerous task to do in a minute. Right?? Think again.72 is the number of times a heart can beat in a minute. Can you dribble a basketball 72 times in a minute? In a minute, 7 new articles are published on Wikipedia. Can you make a 7 storey pyramid with plastic cups in the same minute? A minute is enough for the human eye to blink 12 times. Do you have it in you to pass 12 obstacles while balancing a table tennis ball?If yes, then you should definitely give the event 'Minute to Win it' a shot. Inspired by the well-renowned American TV show 'Minute to Win it'- this event is simply a series of 60 second challenges. The adrenaline rush that one goes through while completing the tasks would make anyone game for it.The person will be all on his own in this event. None of the tasks involve group participation. Also, all the materials required for the tasks will be made available to the participants.A restless heart but a calm mind is all one needs to stride through the stages of this game.",
                participants: 1,
                duration:     1,
                prize:        5000,
                image:        "assets/images/MinuteToWinIt.png"
            },
            {
                name:         "Monopoly",
                desc:         "This time it is not just a bored game but a battle field. Can you face all the economic shocks, escape the police and pay huge rents! This is no ordinary monopoly, here every move you make determines your fate, and luck has no say! Play your winning move and emerge as the champion. Prizes worth Rs.6000 to be won!!!-For registrations, team of 2 is allowed. (Cross college teams are also allowed)",
                participants: 2,
                duration:     1.5,
                prize:        6000,
                image:        "assets/images/Monopoly.png"
            },
            {
                name:         "Quiz Pro Quo",
                desc:         "The Economics Department in association with Kaleidoscope, quiz society of Kamala Nehru College, presents its annual quiz competition, QUIZ PRO QUO.  The quiz consists of a preliminary round, wherein participants take part in teams of 2. The preliminary round usually consists of 15- 20 general- based questions. Top 6 teams qualifying the preliminary round advance to the Mains round which consists of 4 sub- rounds. The sub rounds are: logo and taglines; current affairs; 2 eco based rounds.Top 2 teams will be awarded with exciting cash prizes.You think you are a Walking Talking Ecopedia? Then come and test your knowledge with us!",
                participants: 2,
                duration:     2,
                prize:        6000,
                image:        "assets/images/Quiz-Pro-Quo.png"
            },
            {
                name:         "Posterize",
                desc:         "POSTERS are one of the most expressive and attractive forms of art. And of course the easiest way to spread the message.For all those who can express more than just economics through art we are organising a poster making competition on this grand occasion of Ecophoria, with the aim to help candidates exhibit their talent and innovation along with knowledge which prevails in us.  The themes  for the competition would be FEMALE ANATOMy and 2015- THE YEAR OF FLAWED JUSTICE.",
                participants: 2,
                duration:     1.5,
                prize:        12000,
                image:        "assets/images/Posterize.png"
            },
            {
                name:         "Connectonomics",
                desc:         "CONNECTONOMICS is like one of those childhood games that we could play for hours. The jigsaw puzzle, join the dots making sense of the jumbled word is what needs to be done. The event consists of a preliminary round wherein the team of two members will be given pictorial hints from our everyday mundane lives and they have to come up with any common economic scenario directly or indirectly related to the event.  The teams will be given enough time to surf the internet and work on it and make a presentation wherein they are supposed to tell how they link each picture with the event. In the next round the selected teams have to present their respective presentations in front of judges for which they will be cross questioned and judged.Come, don hats of true economists and make sense from the senseless!Rules:1. There will be individual participation or team of two members. 2. Participants will have to prepare a word document or a PowerPoint presentation for which they will get two hours (bring your own laptops and internet connection).3. Participants are requested to report for the event at 9 am to collect the clues and report back sharply at 12:30 pm for presentation. Any late arrival will result in cancellation of registration. 4. Time limit for presentation is 10 minutes.",
                participants: 3,
                duration:     1,
                prize:        10000,
                image:        "assets/images/Connectonomics.png"
            },
            {
                name:         "Clued Inn",
                desc:         "Join us in this present day quest for glory and treasure in one of our most exciting and sought after event, The Templar Treasure.This time, the scavenger hunt is bigger, it‘s better, and it’s guaranteed to be a good time. Follow a series of cryptic clues hidden around our campus that will bring you to your wits end.Rules:-Teams of 2/3 and cross-college teams are permitted.-All tasks need to be performed to get to the next clue. No prompting or cheating will be tolerated.  All teams will participate in the preliminary round, “Beg, Borrow, Steal” and the first 12 teams to finish fastest will qualify for the final game.Timing: 1.30 onwardsVenue: All around college.Keep your eyes open and overcome the obstacles that stand between you and exciting prizes!!",
                participants: 4,
                duration:     2,
                prize:        5000,
                image:        "assets/images/Treasure-Hunt.png"
            }
        ];

        $scope.events.forEach(function (foo) {
            if (foo.name == $scope.eventname) {
                $scope.thisEvent = foo;
            }
        })

        $scope.closeModal = function () {
            $modalInstance.dismiss();
        }

    });
