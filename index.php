<!DOCTYPE html>
<html lang="it" dir="ltr">

<head>
    <meta charset="utf-8">
    <title>I tuoi album</title>
    <meta charset="utf-8">
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="dist/css/app.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.7.6/handlebars.min.js" integrity="sha256-usTqAE1ywvdMtksWzdeWzD75MsfJN0h0U7y2NtZL3N0=" crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
</head>

<body>

    <header>
        <h1>I tuoi Album</h1>
    </header>

    <main>
        <div class="container">

        </div>
    </main>

    <script id="disco-template" type="text/x-handlebars-template">
        <div class="disco">
            <div class="cover">
                <img src="{{cover}}" alt="{{album}} cover">
            </div>
            <div class="text">
                <h2 class="album">{{album}}</h2>
                <p class="artist">{{artist}}</p>
                <p class="year">{{year}}</p>
            </div>
        </div>
    </script>



    <script src="dist/js/main.js" charset="utf-8"></script>

</body>

</html>
