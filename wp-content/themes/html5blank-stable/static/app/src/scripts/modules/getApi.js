var getApi = {
  _init: function () {
    this.character();
  },
  character: function () {
    var getInfo = 'https://api.xivdb.com/character/2909256';
    console.log(getInfo);
    $.ajax({
      dataType: 'json',
      url: getInfo
    }).done(function (data) {console.log(data["data"]);});
  }
};
module.exports = getApi;
