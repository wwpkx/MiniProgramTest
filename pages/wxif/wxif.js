Page({
  data: {
    color: 0
  },
  EventHandle: function () {
    var newColor = this.data.color;
    newColor++;
    newColor = newColor % 3;
    this.setData({
      color: newColor
    })
  }
})