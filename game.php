<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Game Cows And Tigers</title>

    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/style.css">

    <script src="js/jquery-3.2.1.min.js"></script>
    <script src="js/game.js"></script>
    <script>
        $(function () {
            var options = {
                plain: {
                    row: 6,
                    col: 7
                },
                cows: {
                    min: 1,
                    max: 3
                },
                tigers: {
                    min: 1,
                    max: 3
                }
            };
           game.init($('#game'), options);
        });
    </script>
</head>
<body>
    <h1>Game Cows And Tigers</h1>
    <div id="game">
        <progress max="100" value="0" style="display: none;"></progress>
        <div class="process"></div>
        <div class="plain"></div>
    </div>
</body>
</html>