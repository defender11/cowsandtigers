<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Game: Cows And Tigers</title>

    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/style.css">

    <script src="js/jquery-3.2.1.min.js"></script>
    <script src="js/game.js"></script>
    <script>
        $(function () {
            var setting = {
                map: {
                    row: 6,
                    col: 6
                },
                grass: {
                    min: 2,
                    max: 10
                },
                cows: {
                    min: 3,
                    max: 6
                },
                tigers: {
                    min: 2,
                    max: 4
                },
                devMode: false,
                timeRender: 10
            };
           game.init($('#game'), setting);
        });
    </script>
</head>
<body>
    <h1>Game: Cows And Tigers</h1>
    <div id="game">
        <progress max="100" value="0" style="display: none;"></progress>
        <div class="process"></div>
        <div class="plain"></div>
    </div>
</body>
</html>