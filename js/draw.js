// Create a Paper.js Path to draw a line into it:
var line = new Path();
line.style = {
    strokeColor: 'black',
    strokeWidth: 4
}

var start = new Point(300, 100);
// Move to start and draw a line from there
line.moveTo(start);
// Note the plus operator on Point objects.
line.lineTo(start + [200, -50]);

// if view is resized and then redrawn, pathCircle will recenter itself
var pathCircle = new Path.Circle({
    center: view.center,
    radius: 30,
    fillColor: new Color(0.9, 0.5, 0.5),
    strokeColor: 'red',
    strokeWidth: 10
});


// Create player object with a name, rounded rectangle and text showing name.
function Player(name, origin, rectColor, textColor)
{
    this.name = name;

    // rounded rectangle
    var rectSize = new Size(200, 30);
    var rectOrigin = origin + [100, 0];
    var rect = new Rectangle(rectOrigin, rectSize);

    var cornerSize = new Size(10, 10);
    this.roundRect = new Path.RoundRectangle(rect, cornerSize);
    this.roundRect.style = {
        fillColor: rectColor,
        strokeColor: 'brown',
        strokeWidth: 4
    };

        //point: [this.position.x + 20, this.position.y + rectSize.height/2],
    this.text = new PointText({
        point: [origin.x, origin.y + 0.75*rectSize.height],
        content: this.name,
        fillColor: textColor,
        fontSize: 20
    });

    //return new Group([this.roundRect, this.text]);
}

// must use new Point, not [50, 140]
playerOrigin = new Point(50, 80);

// when Player() returns new Group and instantiate as = Player, set position works
// when player() doesn't return group and instantiate as = new Player, set position doesn't work??
// for group or other 'item'?
//playerA.position = [300, 340];

// when playerA returns new Group and instantiate as = Player, set color doesn't work
// when playerA doesn't return new Group and instantiate as = new Player, set color works
//playerA.text.fillColor = 'red';

// return color that varies with index and alternates semi-complementary
function oddEvenColor(index)
{
    // http://stackoverflow.com/questions/4228356/integer-division-in-javascript
    // complementary hue = +180 degrees?
    var oddEvenColor = {hue: 40.*Math.floor(index/2) + ((index%2)*180.),
        saturation: 0.4,
        brightness: 0.8};
    return oddEvenColor;
}

// Loop through array of players and draw them all.
var playerNames = ['Bill', 'Joe', 'Sally', 'Fred', 'John', 'Zoe', 'Cathy', 'Luis', 'Hector', 'Om',
'Pinto', 'Ray', 'Hiro', 'Yi', 'Boo', 'Arfu'];
var offset = 40;
for(var i = 0; i < playerNames.length; i++) {
    var player = new Player(playerNames[i],
                            playerOrigin,
                            oddEvenColor(i),
                            {hue: 0, saturation: 0.0, brightness: 0.8});
    // TODO: translate as a Group or using a function
    player.roundRect.translate(0, offset * i);
    player.text.translate(0, offset * i);
};
