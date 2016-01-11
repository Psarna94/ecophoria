'use strict';

angular.module('ecophoriaApp')
  .controller('AlleventsCtrl', function ($scope, $state) {
     $scope.events = [
            {
                name:         "Startup Challenge",
                desc:         "A shout-out to all the entrepreneurs. Time for the B-word.",
                participants: 2,
                duration:     1.5,
                prize:        12000,
                image:        "assets/images/StartUp-Challenge.png",
                fullDesc:     "A shout-out to all the entrepreneurs. Time for the B-word. A platform to present your innovative business start - up ideas!The participants will have to give a detailed description of their business ideas with a proper SWOT analysis.The final surviving plan is the one that would have faced scrutiny of the judges and the brutality of the opponents."
            },
            {
                name:         "The Credible",
                desc:         "Be creative. Be candid. Be controversial",
                participants: 1,
                duration:     1.5,
                prize:        7000,
                image:        "assets/images/Debate-Competition.png",
                fullDesc:     "It is time to wear your thinking cap and debate on economic issues pervading our mundane lives. "
            },
            {
                name:         "Minute to win it",
                desc:         "Waiting for the Microwave to beep seems to be the most onerous task to do in a minute. Right?? Think again.72 is the number of times a heart can beat in a minute. Can you dribble a basketball 72 times in a minute? In a minute, 7 new articles are published on Wikipedia. Can you make a 7 storey pyramid with plastic cups in the same minute? A minute is enough for the human eye to blink 12 times. Do you have it in you to pass 12 obstacles while balancing a table tennis ball?If yes, then you should definitely give the event 'Minute to Win it' a shot. Inspired by the well-renowned American TV show 'Minute to Win it'- this event is simply a series of 60 second challenges. The adrenaline rush that one goes through while completing the tasks would make anyone game for it.The person will be all on his own in this event. None of the tasks involve group participation. Also, all the materials required for the tasks will be made available to the participants.A restless heart but a calm mind is all one needs to stride through the stages of this game.",
                participants: 1,
                duration:     1,
                prize:        5000,
                image:        "assets/images/MinuteToWinIt.png",
                fullDesc:     "It is not just a board game but a battle field!Can you face all the economic shocks, escape the police and pay huge rents!This is no ordinary monopoly, here every move you make determines your fate, and luck has no say!Play your winning move and emerge as the champion!Monopoly with an economic twist!"
            },
            {
                name:         "Monopoly",
                desc:         "It is not just a board game but a battle field!",
                participants: 2,
                duration:     1.5,
                prize:        6000,
                image:        "assets/images/Monopoly.png",
                fullDesc:     "Are you a walking talking Ecopedia?The screening round will be a written round where the teams will be required to answer 15 general trivia questions. The top 6 teams will then proceed to the final round. After the first 2 rounds, the 2 lowest scoring teams will be eliminated and the remaining 4 teams will battle it out in the subsequent 2 rounds.The final round will consist of 4 sub-rounds Logos and TainesCurrent Affairs Core Economics Guess Who"
            },
            {
                name:         "Quiz Pro Quo",
                desc:         "Are you a walking talking Encyclopedia?",
                participants: 2,
                duration:     2,
                prize:        6000,
                image:        "assets/images/Quiz-Pro-Quo.png",
                fullDesc:     "People its time to get back t your childhood games. The jigsaw puzzle, join the dots; making sense o the jumbled world, is what needs to be done!The event presents each participating team with pictures from our everyday mundane lives. You have to join the dots and establish an economic connection among those pictures.If you get it right, all you need to do is, prove us how they are connected! Some might call it a Paper Presentation with a twist.Come, don hats of true economists and make sense from the senseless"

            },
            {
                name:         "Posterize",
                desc:         "A poster making competition for all those who can express more than just economics through art.",
                participants: 2,
                duration:     1.5,
                prize:        12000,
                image:        "assets/images/Posterize.png",
                fullDesc:"From time immemorial, the fascination for the Templar Treasure, one of the largest treasures of various civilizations. Join us in this present day quest for glory and treasure in one of our most exciting and sought after event, The Templar Treasure. This time, the scavenger hunt is bigger, it ‘s better, and it’s guaranteed to be a good time. Follow a series of cryptic clues hidden around our campus that will bring you to your wits end. Only the brightest and the fastest will be declared the winner. Keep your eyes open and overcome the obstacles that stand between you and exciting prizes."
            },
            {
                name:         "Connectonomics",
                desc:         "Come, don hats of true economists and make sense from the senseless",
                participants: 3,
                duration:     1,
                prize:        10000,
                image:        "assets/images/Connectonomics.png",
                fullDesc:"Show us your creative side.A poster making competition for all those who can express more than just economics through art.Topics will be revealed 3 days before the event.We will provide the sheets, but the participants are required to bring their own stationary and other necessary materials.Around 20-30 participants will compete for FIRST, SECOND AND THIRD Prize!"
            },
            {
                name:         "Clued Inn",
                desc:         "From time immemorial, the fascination for the Templar Treasure, one of the largest treasures of various civilizations",
                participants: 4,
                duration:     2,
                prize:        5000,
                image:        "assets/images/Treasure-Hunt.png",
                fullDesc:"There is nothing like an amicable competition right?!!So here we have Minute to Win It based on a famous TV Show featuring  10 challenging tasks with some economic flavor added to it. The competition will be divided into numerous levels and each subject to eliminations depending upon the candidate’s relative"
            }
        ];

        $scope.goToEvents = function (event) {
            $state.go('Allevents.events', {eventname: event});
//            $state.go('register');
        }

        $scope.scrollToEvents = function () {
            $location.hash('events');

            // call $anchorScroll()
            $anchorScroll();
        }
  });
