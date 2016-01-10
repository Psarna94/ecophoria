'use strict';

angular.module('ecophoriaApp')
    .controller('RegisterCtrl', function ($scope, $http, $state) {
        $scope.event = {};
        $scope.event.team = [];
        $scope.submitInfo = function (participant) {

            participant.event = [];
            participant.event.push($scope.event);
            $http.post('/api/participants', participant)
                .success(function (res) {
                    console.log(res);
                    $state.go('success');
                })
                .error(function (res) {
                    if(res ==="You have already registered for this event"){
                        $scope.registeredAlready = true;
                    }
                    console.log(res);
                })
        }

        $scope.addTeamMember1 = function () {
            $scope.event.team.push($scope.member1);
            console.log($scope.event);
        }

        $scope.addTeamMember2 = function () {
            $scope.event.team.push($scope.member2);
            console.log($scope.event);
        }

        $scope.addTeamMember3 = function () {
            $scope.event.team.push($scope.member3);
        }

        $scope.addTeamMember4 = function () {
            $scope.event.team.push($scope.member4);
        }

        $scope.eventSelected = function () {
            console.log($scope.event.name);
            if ($scope.event.name === "B-plan" || $scope.event.name === "The winning Move" || $scope.event.name === "Quiz Pro Quo" || $scope.event.name === "Posterize") {
                $scope.show2 = true;
                $scope.loneWolf = false;
                $scope.show3 = false;
                $scope.show4 = false;
            } else if ($scope.event.name === "The credible" || $scope.event.name === "Minute to win it" || $scope.event.name === "Shock the Stocks") {
                $scope.loneWolf = true;
                $scope.show2 = false;
                $scope.show3 = false;
                $scope.show4 = false;
            } else if ($scope.event.name === "Connectonomics") {
                $scope.loneWolf = false;
                $scope.show2 = false;
                $scope.show3 = true;
                $scope.show4 = false;
            } else if ($scope.event.name === "The templar treasure") {
                $scope.show4 = true;
                $scope.loneWolf = false;
                $scope.show2 = false;
                $scope.show3 = false;
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



        // This is just so you can see the array values changing and working! Check your console as you're typing in the inputs :)
        $scope.$watch('event.team', function (value) {
            console.log(value);
        }, true);

    });

