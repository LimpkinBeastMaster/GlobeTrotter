import d3 from 'd3';
import topojson from 'topojson';

var Visuals = function (options) {
  /* Values contained in options:
      width:
      height:
      radius:
      velocity:
  */
  var width = options.width,
      height = options.height,
      radius = options.radius,
      velocity = options.velocity,
      context,
      projection,
      path,
      canvas,
      grd;
  
  this.create = function (element, props) {
    projection = d3.geo.orthographic()
      .translate([width / 2, height / 2])
      .scale(radius)
      .clipAngle(90);

    canvas = d3.select(element).append('canvas')
      .attr('width', width)
      .attr('height', height);

    context = canvas.node().getContext('2d');

    path = d3.geo.path()
      .projection(projection)
      .context(context);
    grd = context.createLinearGradient(0, 0, width, height);
      grd.addColorStop(0, 'red');
      grd.addColorStop(1, 'blue');
  }

  this.draw = function (url) {
    d3.json(url, function(err, world) {
      if (err) {
        console.log(err);
        return;
      } else {
        var land = topojson.feature(world, world.objects.land);
        d3.timer(function(elapsed) {
          context.clearRect(0, 0, width, height);
          projection.rotate([velocity * elapsed, 0]);
          context.beginPath();
          path(land);
          context.fillStyle = grd;
          context.fill();

          context.beginPath();
          context.arc(width / 2, height / 2, radius, 0, 2 * Math.PI, true);
          context.lineWidth = 1;
          context.stroke();
        })
      }
    })
  }
}

module.exports = Visuals;