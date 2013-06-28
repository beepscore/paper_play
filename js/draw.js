// Create a Paper.js Path to draw a line into it:
var path = new Path();
// Give the stroke a color
path.strokeColor = 'black';
path.strokeWidth = 4;
var start = new Point(100, 100);
// Move to start and draw a line from there
path.moveTo(start);
// Note the plus operator on Point objects.
// PaperScript does that for us, and much more!
path.lineTo(start + [ 100, -50 ]);

// Create a circle shaped path with its center at the center
// of the view and a radius of 30:
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
