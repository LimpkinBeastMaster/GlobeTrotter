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
      grd,
      timer = false;
  
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

  this.draw = function (url, coords) {
    d3.json(url, function(err, land) {
      if (err) {
        console.log(err);
        return;
      } else {
        var temp = {
          type: 'FeatureCollection',
          features: []
        }
        for (var i = 0; i < coords.length; i++) {
          temp.features.push({
            "type": "Feature",
            "geometry" : {
              "coordinates": coords[i],
              "type": "Point"
            },
            "style": {
              "fill": "black"
            }
          })
        }
        // console.log(land);
        // console.log(temp);
        //var land = topojson.feature(world, world.objects.land);
        if ( timer ) {
          timer = false
        } else {
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

            context.beginPath();
            path(temp);
            context.fillStyle = 'green';
            context.fill();

            context.beginPath();
            context.arc(width / 2, height / 2, radius, 0, 2 * Math.PI, true);
            context.lineWidth = 1;
            context.stroke();
            return timer;
          })
        }
        // d3.timer(function(elapsed) {
        //   projection.rotate([velocity * elapsed, 0]);
        //   context.beginPath();
        //   path(temp);
        //   context.fillStyle = 'black';
        //   context.fill();

        //   context.beginPath();
        //   context.arc(width / 2, height / 2, radius, 0, 2 * Math.PI, true);
        //   context.lineWidth = 1;
        //   context.stroke();
        // })
      }
    })
  }

  this.delete = function() {
    timer = true;
    console.log('calling this!')
  }
}

module.exports = Visuals; 