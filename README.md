# Rules
To solve this technical test, you have to follow the following rules:
* You can use any IDE.
* You can use an autocompletion tool like Copilot.
* You have one hour.
* The browser must be Google Chrome or Safari.
* You must use ECMAScript 5 (at least, do not use arrow functions).

# Process
1. Clone the project from https://github.com/Cloweling/test-angularjs.git.
2. In this technical test, there are two tests. To open Test 1, navigate to the folder src/template/test1.html (open with the browser). To open Test 2, go to the folder src/template/test2.html (open with the browser).
3. Below are the details of what is required for each test.

# TEST 1

### Description
In Test 1, the goal is to create an HTML table using the endpoint https://jsonplaceholder.typicode.com/posts with a GET request. When the "Load Endpoint" button is pressed, it should display the endpoint's information as an HTML table.

### Process
In the path src/js/index.js, there is a controller called test1Controller. In this controller, you should add the logic to consume the endpoint mentioned in the description.

### Tips
1. Review the structure and the ng-click event in src/template/test1.html.
2. To consume the endpoint, you can use jQuery.get, $http (AngularJS), or fetch.

### Expected Result
![Test 1](/assets/test1.png)

# TEST 2

### Description
In Test 2, you will validate the 3 inputs of the form. To do this, you must add logic for each input. The first input should check if the entered number is even, the second should verify if the entered number is greater than 18, and the third should display the size of the text entered in the input.

### Process
In the path src/js/index.js, there is a controller called test2Controller. In this controller, you should add the logic described above. Note that each result of the logic for each input should be recorded in $scope.result1 (Yes/No), $scope.result2 (Yes/No), and $scope.result3 (size). All this logic should be added in $scope.submit.

### Tips
Review the structure and the ng-click event in src/template/test2.html.

### Expected Result
![Test 2](/assets/test2.png)