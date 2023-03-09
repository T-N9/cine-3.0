export function timeConvert(n) {
  if (typeof n === "object") {
    var num = n[0];

    var hours = num / 60;
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return rhours !== 0 ? rhours + "h " + rminutes + "m" : rminutes + "m";
  } else {
    var num = n;

    var hours = num / 60;
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return rhours !== 0 ? rhours + "h " + rminutes + "m" : rminutes + "m";
  }
}
