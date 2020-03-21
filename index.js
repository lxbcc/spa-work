window.onload=function (ev) {
    var data = [
        ["Java", "1", "降", "-0.01%"],
      ["C", "2", "升", "+2.44%"],
      ["Python", "3", "升", "+1.41%"],
      ["C++", "4", "降", "-2.58%"],
      ["C#", "5", "升", "-+2.07%"],
      ["Visual Basic.NET", "6", "降", "-1.17%"],
      ["JS", "7", "降", "-0.85%"],
    ];
    var container = document.getElementById('biao');
    var hot = new Handsontable(container, {
        data: data,
        rowHeaders: false,
        colHeaders: ['语言名称', '排名', '升或降', '单价', '变化幅度'],
    });
}