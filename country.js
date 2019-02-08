class Country{
    constructor(name, lang, greeting, colors)
    {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
    setColors()
    {
        
    }
}

var country = ["USA","Brazil","Japan","Germany","Portugal"];

function switchCountry()
{
    let input = prompt("Please Select A Country").toLowerCase();
    if (input === "usa")
    {
        name = "United States of America";
        lang ="English";
        greeting = "Hello, World!";
        document.getElementById("CountryName").innerText = name;
        document.getElementById("OfficialLanguage").innerText = lang;
        document.getElementById("HelloWorld").innerText = greeting;
        displayColors(input);
    }
    else if (input === "brazil")
    {
        name = "Brazil";
        lang = "Portuguese";
        greeting = "Ola Mundo!";
        document.getElementById("CountryName").innerText = name;
        document.getElementById("OfficialLanguage").innerText = lang;
        document.getElementById("HelloWorld").innerText = greeting;
        displayColors(input);

    }
    else if (input === "japan")
    {
        name = "Japan";
        lang = "Japanese";
        greeting = "Kon'nichiwa sekai!";
        document.getElementById("CountryName").innerText = name;
        document.getElementById("OfficialLanguage").innerText = lang;
        document.getElementById("HelloWorld").innerText = greeting;
        displayColors(input);
    }
    else if (input === "germany")
    {
        name = "Germany";
        lang = "German";
        greeting = "Hallo Welt!";
        document.getElementById("CountryName").innerText = name;
        document.getElementById("OfficialLanguage").innerText = lang;
        document.getElementById("HelloWorld").innerText = greeting;
        displayColors(input);
    }
    else if (input === "portugal")
    {
        name = "Portugal";
        lang = "Portuguese";
        greeting = "Ola Mundo!";
        document.getElementById("CountryName").innerText = name;
        document.getElementById("OfficialLanguage").innerText = lang;
        document.getElementById("HelloWorld").innerText = greeting;
        displayColors(input);
    }
}

function displayColors(input)
{
    if (input === "usa")
    {
        document.getElementById("Color1").style.background = "Red";
        document.getElementById("Color2").style.background = "White";
        document.getElementById("Color3").style.background = "Blue";
        colors = ["Red", "White","Blue"];
    }
    else if (input === "brazil")
    {
        document.getElementById("Color1").style.background = "Green";
        document.getElementById("Color2").style.background = "Yellow";
        document.getElementById("Color3").style.background = "Blue";
        color = ["Green","Yellow","Blue"];
    }
    else if (input === "japan")
    {
        document.getElementById("Color1").style.background = "White";
        document.getElementById("Color2").style.background = "Red";
        document.getElementById("Color3").style.background = "Red";
        colors = ["Red", "White"];
    }
    else if (input === "germany")
    {
        document.getElementById("Color1").style.background = "Black";
        document.getElementById("Color2").style.background = "Red";
        document.getElementById("Color3").style.background = "Gold";
        colors = ["Black","Red","Gold"];
    }
    else if (input === "portugal")
    {
        document.getElementById("Color1").style.background = "Green";
        document.getElementById("Color2").style.background = "Red";
        document.getElementById("Color3").style.background = "Red";
        colors = ["Green","Red"];
    }
}
