'use strict';

angular.module('ecophoriaApp')
    .controller('RegisterCtrl', function ($scope, $http) {

        $scope.submitInfo = function (participant) {
            participant.event = [];
            participant.event.push($scope.event);
            $http.post('/api/participants', participant)
                .success(function (res) {
                    console.log(res);
                })
                .error(function (res) {
                    console.log(res);
                })
        }

        $scope.eventSelected = function () {
            console.log($scope.participant.event);
            if ($scope.participant.event === "B-plan" || $scope.participant.event === "The winning Move" || $scope.participant.event === "Quiz Pro Quo" || $scope.participant.event === "Posterize") {
                $scope.show2 = true;
                $scope.loneWolf = false;
            }else if($scope.participant.event === "The credible" || $scope.participant.event ==="Minute to win it" || $scope.participant.event==="Shock the Stocks"){
                $scope.loneWolf = true;
                $scope.show2 = false;
            }
        }

        $scope.events = [
            {
                name:         "B-plan",
                desc:         "A shout-out to all the entrepreneurs. Time for the B-word.",
                participants: 2,
                duration:     1.5,
                prize:        12000
            },
            {
                name:         "The Credible",
                desc:         "Be creative. Be candid. Be controversial",
                participants: 1,
                duration:     1.5,
                prize:        7000
            },
            {
                name:         "The winning Move",
                desc:         "It is not just a board game but a battle field!",
                participants: 2,
                duration:     1.5,
                prize:        6000
            },
            {
                name:         "Quiz Pro Quo",
                desc:         "Are you a walking talking Encyclopedia?",
                participants: 2,
                duration:     2,
                prize:        6000
            },
            {
                name:         "Connectonomics",
                desc:         "Come, don hats of true economists and make sense from the senseless",
                participants: 3,
                duration:     1,
                prize:        10000
            },
            {
                name:         "The Templar Treasure",
                desc:         "From time immemorial, the fascination for the Templar Treasure, one of the largest treasures of various civilizations",
                participants: 4,
                duration:     2,
                prize:        5000
            },
            {
                name:         "Posterize",
                desc:         "A poster making competition for all those who can express more than just economics through art.",
                participants: 2,
                duration:     1.5,
                prize:        12000
            },
            {
                name:         "Minute to win it",
                desc:         "There is nothing like an amicable competition right?!!",
                participants: 1,
                duration:     1,
                prize:        5000
            },
            {
                name:         "Shock the Stocks",
                desc:         "How much are you ready to invest in your favorite poison?",
                participants: 1,
                duration:     1,
                prize:        4000
            }
        ];

    });
