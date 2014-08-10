'use strict';

app.controller('BuildingsCtrl',
    function ($scope, $interval, gameObjectsCache, RaceModel, identity, BuildingsModel, Calculator, notifier, GameRequests) {
        $scope.raceModel = RaceModel[identity.currentUser.race];
        $scope.buildingsModel = BuildingsModel;

        $scope.calculator = Calculator;

        queryGameObjects();

        // the client querries himself every 90 sec. The server is querried only once per 2 min
        $interval(queryGameObjects, 1000 * 90);

        function queryGameObjects() {
            gameObjectsCache.getGameObjectsForUser().$promise.then(function (objects) {
                $scope.filteredTasks = objects.tasks
                    .filter(function (obj) {
                        return obj.type == 'buildings'
                    });

                $scope.gameObjects = objects;

                $scope.now = (new Date()).getTime();

                $scope.freeEnergy = Calculator.freeEnergy(objects);
                $scope.freeSupply = Calculator.freeSupply(objects);
                $scope.mineralsPerMinute = Calculator.mineralsPerMinute(objects);
                $scope.gasPerMinute = Calculator.gasPerMinute(objects);
            })
        }

        var buildingIndex = -1;
        $scope.confirm = function (index) {
            buildingIndex = index;
            $scope.confirmerText = Calculator.requiredResourcesMessage($scope.gameObjects, 'buildings', index);
        };

        $scope.confirmerAccept = function () {
            GameRequests.createTask('buildings', buildingIndex).then(function (response) {
                if (response.success) {
                    notifier.success('Building started');
                    gameObjectsCache.refresh();
                    queryGameObjects();
                }
                else {
                    notifier.error('Not enough minerals or energy');
                }
            }, function (error) {
                alert(error)
            })
        };
    });