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

// rounded rectangle
var rectOrigin = new Point(50, 140)
var rectHeight = 50
var rectWidth = 200
var rectEnd = new Point(rectOrigin.x + rectWidth, rectOrigin.y + rectHeight);
var rect = new Rectangle(rectOrigin, rectEnd);
var cornerSize = new Size(20, 20);
var roundRect = new Path.RoundRectangle(rect, cornerSize);
roundRect.style = {
    fillColor: 'orange',
    strokeColor: 'brown',
    strokeWidth: 6
};

// text
var text = new PointText({
    point: [rectOrigin.x + 20, (rectOrigin.y + rectHeight/2)],
    content: 'Hello text',
    fillColor: 'brown',
    fontSize: 25
});
