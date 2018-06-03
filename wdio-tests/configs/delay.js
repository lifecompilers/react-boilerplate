var delay = (function () {
  var timer = 0
  return function (callback, ms) {
    clearTimeout(timer)
    timer = setTimeout(callback, ms)
  }
})()

delay(function () {
  console.log('Delay')
}, 10000)
