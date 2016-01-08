'use strict';

angular.module('ecophoriaApp')
    .controller('MainController', function ($scope, $location, $anchorScroll) {
        $scope.events = [
            {
                name:         "B-plan",
                desc:         "A shout-out to all the entrepreneurs. Time for the B-word.",
                participants: 2,
                duration:     1.5,
                prize:        12000,
                image:        "assets/images/StartUp-Challenge.png"
            },
            {
                name:         "The Credible",
                desc:         "Be creative. Be candid. Be controversial",
                participants: 1,
                duration:     1.5,
                prize:        7000,
                image:        "assets/images/Debate-Competition.png"
            },
            {
                name:         "Minute to win it",
                desc:         "There is nothing like an amicable competition right?!!",
                participants: 1,
                duration:     1,
                prize:        5000,
                image:        "assets/images/MinuteToWinIt.png"
            },
            {
                name:         "The winning Move",
                desc:         "It is not just a board game but a battle field!",
                participants: 2,
                duration:     1.5,
                prize:        6000,
                image:        "assets/images/Monopoly.png"
            },
            {
                name:         "Quiz Pro Quo",
                desc:         "Are you a walking talking Encyclopedia?",
                participants: 2,
                duration:     2,
                prize:        6000,
                image:        "assets/images/Quiz-Pro-Quo.png"
            },
               {
                name:         "Posterize",
                desc:         "A poster making competition for all those who can express more than just economics through art.",
                participants: 2,
                duration:     1.5,
                prize:        12000,
                image:        "assets/images/Posterize.png"
            },
            {
                name:         "Connectonomics",
                desc:         "Come, don hats of true economists and make sense from the senseless",
                participants: 3,
                duration:     1,
                prize:        10000,
                image:        "assets/images/Connectonomics.png"
            },
            {
                name:         "The Templar Treasure",
                desc:         "From time immemorial, the fascination for the Templar Treasure, one of the largest treasures of various civilizations",
                participants: 4,
                duration:     2,
                prize:        5000,
                image:        "assets/images/Treasure-Hunt.png"
            },


            {
                name:         "Shock the Stocks",
                desc:         "How much are you ready to invest in your favorite poison?",
                participants: 1,
                duration:     1,
                prize:        4000
            }
        ];

        $scope.scrollToEvents = function () {
            $location.hash('events');

            // call $anchorScroll()
            $anchorScroll();
        }
    });


