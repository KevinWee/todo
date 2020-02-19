// Remove and complete icons in SVG format
var removeSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect class="noFill" width="22" height="22"/><g><g><path class="fill" d="M16.1,3.6h-1.9V3.3c0-1.3-1-2.3-2.3-2.3h-1.7C8.9,1,7.8,2,7.8,3.3v0.2H5.9c-1.3,0-2.3,1-2.3,2.3v1.3c0,0.5,0.4,0.9,0.9,1v10.5c0,1.3,1,2.3,2.3,2.3h8.5c1.3,0,2.3-1,2.3-2.3V8.2c0.5-0.1,0.9-0.5,0.9-1V5.9C18.4,4.6,17.4,3.6,16.1,3.6z M9.1,3.3c0-0.6,0.5-1.1,1.1-1.1h1.7c0.6,0,1.1,0.5,1.1,1.1v0.2H9.1V3.3z M16.3,18.7c0,0.6-0.5,1.1-1.1,1.1H6.7c-0.6,0-1.1-0.5-1.1-1.1V8.2h10.6V18.7z M17.2,7H4.8V5.9c0-0.6,0.5-1.1,1.1-1.1h10.2c0.6,0,1.1,0.5,1.1,1.1V7z"/></g><g><g><path class="fill" d="M11,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v6.8C11.6,17.7,11.4,18,11,18z"/></g><g><path class="fill" d="M8,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C8.7,17.7,8.4,18,8,18z"/></g><g><path class="fill" d="M14,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C14.6,17.7,14.3,18,14,18z"/></g></g></g></svg>';
var completeSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect y="0" class="noFill" width="22" height="22"/><g><path class="fill" d="M9.7,14.4L9.7,14.4c-0.2,0-0.4-0.1-0.5-0.2l-2.7-2.7c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0l2.1,2.1l4.8-4.8c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-5.3,5.3C10.1,14.3,9.9,14.4,9.7,14.4z"/></g></svg>';
var coinSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 496.158 496.158" style="enable-background:new 0 0 496.158 496.158;" xml:space="preserve"><path style="fill:#E5AA17;" d="M0,248.085C0,111.063,111.069,0.003,248.075,0.003c137.013,0,248.083,111.061,248.083,248.082c0,137.002-111.07,248.07-248.083,248.07C111.069,496.155,0,385.087,0,248.085z"/><path style="fill:#FFFFFF;" d="M259.529,89.068v18.457c12.189,1.255,22.645,3.76,31.359,7.52c8.717,3.76,16.321,9.458,22.815,17.09c5.127,5.811,9.084,11.792,11.878,17.944c2.79,6.152,4.187,11.792,4.187,16.919c0,5.698-2.08,10.625-6.238,14.782c-4.16,4.161-9.201,6.238-15.124,6.238c-11.167,0-18.401-6.037-21.704-18.115c-3.76-14.24-12.817-23.696-27.173-28.369v71.094c14.126,3.875,25.379,7.407,33.751,10.596c8.376,3.191,15.865,7.806,22.475,13.843c7.062,6.268,12.502,13.757,16.321,22.474c3.815,8.715,5.725,18.259,5.725,28.625c0,12.988-3.05,25.151-9.143,36.486c-6.097,11.339-15.069,20.594-26.917,27.771c-11.851,7.178-25.921,11.45-42.212,12.817v42.554c0,6.721-0.657,11.621-1.965,14.697c-1.312,3.076-4.188,4.614-8.631,4.614c-4.102,0-6.98-1.255-8.631-3.76c-1.652-2.508-2.478-6.382-2.478-11.621v-46.143c-13.33-1.482-24.98-4.614-34.948-9.399c-9.972-4.785-18.287-10.737-24.951-17.859c-6.666-7.118-11.595-14.525-14.783-22.217c-3.191-7.689-4.785-15.236-4.785-22.644c0-5.469,2.137-10.396,6.408-14.782c4.273-4.385,9.597-6.58,15.979-6.58c5.127,0,9.455,1.196,12.988,3.589c3.53,2.393,5.98,5.755,7.349,10.083c3.076,9.344,5.752,16.492,8.032,21.447c2.277,4.957,5.726,9.485,10.339,13.587c4.615,4.102,10.737,7.236,18.372,9.399v-79.468c-15.269-4.214-28.027-8.913-38.281-14.099c-10.254-5.184-18.572-12.562-24.951-22.132c-6.382-9.57-9.57-21.875-9.57-36.914c0-19.595,6.237-35.659,18.714-48.193c12.475-12.531,30.505-19.824,54.089-21.875V89.41c0-9.57,3.59-14.355,10.767-14.355C255.882,75.055,259.529,79.727,259.529,89.068zM237.825,206.305v-65.454c-9.57,2.85-17.034,6.609-22.388,11.279c-5.356,4.673-8.032,11.736-8.032,21.191c0,9.002,2.505,15.809,7.52,20.422C219.936,198.358,227.571,202.545,237.825,206.305z M259.529,257.061v74.854c11.506-2.277,20.393-6.892,26.66-13.843c6.265-6.948,9.399-15.039,9.399-24.268c0-9.912-3.05-17.573-9.144-22.985C280.35,265.409,271.377,260.821,259.529,257.061z"/><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>'
var baseBonus=50;
var bonusPerMinute=5;

$(document).ready(function(){
  $("#date").val(moment().format('HH:mm'));
	$("#date").bind("click", function() {
		var d = $("#date").val();
		var arrDefualt = d.split(":");
		var iosSelect = new IosSelect(2,[hourData(), minuteData()], {
			title: '',
			itemHeight: 35,
			oneLevelId: arrDefualt[0],
			twoLevelId: arrDefualt[1],
			callback: function (selectOneObj, selectTwoObj) {
				$("#date").val((selectOneObj.value).split('时')[0] + ':' + (selectTwoObj.value).split('分')[0]);
			}
		});
	});
	$("#type").val("课目");
	$("#type").bind("click", function() {
		var iosSelect = new IosSelect(1,[typeData()], {
			title: '',
			itemHeight: 35,
			callback: function (selectOneObj) {
				$("#type").val(selectOneObj.value);
			}
		});
	});
	$("#cost").val("用时");
	$("#cost").bind("click", function() {
		var iosSelect = new IosSelect(1,[costData()], {
			title: '',
			itemHeight: 35,
			oneLevelId: 05,
			callback: function (selectOneObj) {
				$("#cost").val((selectOneObj.value));
			}
		});
  });

  // User clicked on the add button
  // If there is any text inside the item field, add that text to the todo list
  $('#add').bind('click', function() {
    var startTime = $('#date').val();
    var type = $('#type').val();
    var content = $('#item').val();
    var cost = $('#cost').val();
    if (content) {
      addItem(startTime,type,content,cost);
    }
  });
  
  $('#item').bind('keydown', function (e) {
    var content = $(this).val();
    var startTime = $('#date').val();
    var type = $('#type').val();
    var cost = $('#cost').val();
    if ((e.code === 'Enter' || e.code === 'NumpadEnter') && content) {
      addItem(startTime,type,content,cost);
    }
  });

  // Add click event for removing the item
  $('#todo, #completed').on('click','li>.buttons>.remove',function(){
    var item = $(this).parent().parent();
    $.ajax({
      url: 'api.php?op=delete',
      type: 'post',
      data: {"id":$(item).attr("id")},
      dataType: 'text',
      success: function (data) {
        if(data=="success"){
          $(item).remove();
        }
      },
      error: function(err) {
        console.log(err);
      }
    });
  });
    
  // Add click event for completing the item
  $('#todo, #completed').on('click','li>.buttons>.complete',function(){
    var item = $(this).parent().parent();
    var id = $(item).parent().attr("id");
  
    $.ajax({
      url: 'api.php?op=update',
      type: 'post',
      data: {"id":$(item).attr("id"),"isFinished":(id === 'todo')?1:0},
      dataType: 'JSON',
      success: function (data) {
        if(data&&data.status=="success"){
          // Check if the item should be added to the completed list or to re-added to the todo list
          var target = (id === 'todo') ? $('#completed'):$('#todo');
          $(target).append($(item));
          if(id === 'todo'){//从未完成变完成
            $(item).data("actualEndTime",data.actualEndTime);
            $(item).find('font').html(data.actualEndTime);
            $(item).find('button.remove').html(coinSVG).removeClass("remove").addClass("bonus");
            calcBonus($(item).attr("id"));
          }else{//从完成变未完成
            $(item).find('font').html($(item).data('expectEndTime'));
            $(item).find('font').removeAttr("color");
            $(item).find('button.bonus').html(removeSVG).removeClass("bonus").addClass("remove");
          }
        }
      },
      error: function(err) {
        console.log(err);
      }
    });
  });

  // Add click event for showing the item geted bonus list
  $('#completed').on('click','li>.buttons>.bonus',function(){
    var item = $(this).parent().parent();
    var expectEndTime = $(item).data("expectEndTime");
    var actualEndTime = $(item).data("actualEndTime");
    var timediff=moment(expectEndTime,'HH:mm').diff(moment(actualEndTime,'HH:mm'),'m');
    var totalBonus=$(this).find("div").html();
    $(".mask>.bonusdetail>.todo").empty();
    $(".mask>.bonusdetail>.todo").append("<li><span>预计完成时间："+expectEndTime+"</span><span style=\"float:right;\">实际完成时间："+actualEndTime+"</span></li>");
    $(".mask>.bonusdetail>.todo").append("<li>完成一项作业<div class=\"buttons\"><button class=\"bonus\"><div>"+baseBonus+"</div>"+coinSVG+"</button></div></li>");
    $(".mask>.bonusdetail>.todo").append("<li>"+(timediff<0?"超时":"节约")+Math.abs(timediff)+"分钟<div class=\"buttons\"><button class=\"bonus\"><div>"+timediff*bonusPerMinute+"</div>"+coinSVG+"</button></div></li>");
    $(".mask>.bonusdetail>.todo").append("<li>共计奖励<div class=\"buttons\"><button class=\"bonus\"><div>"+totalBonus+"</div>"+coinSVG+"</button></div></li>");
    $(".mask").show();
  });

  $(".mask").click(function(){
    $(this).hide();
  });

	pullToRefresh.init({
		// required
		ptrElement: '#ptr-instructions', // 'pull to refresh' intructions element
		ptrTextElement: '.ptr-instructions-text', // intructions' text element
		targetElement: '.container', // target element that will be dragged and refreshed
		// optional
		instructionsPullToRefresh: '下拉刷新', // text
		instructionsReleaseToRefresh: '松开刷新', //text
    instructionsRefreshing: '刷新中', // text
    instructionsRefreshed: '刷新完成', // text
		threshold: 30, // minimum distance required to trigger the onPull callback
		onPull: function(){ // callback fn
			$.ajax({
        url: 'api.php?op=queryAll',
        type: 'post',
        data: {"daypara":moment().format()},
        dataType: 'JSON',
        success: function (returndata) {
          $('#todo').empty();
          $('#completed').empty();
          var data = (returndata) ? returndata:{todo: [],completed: []};
          pullToRefresh.end();
          if (!data.todo.length && !data.completed.length) return;
        
          for (var i = 0; i < data.todo.length; i++) {
            var value = data.todo[i];
            addItemToDOM(value);
          }
        
          for (var j = 0; j < data.completed.length; j++) {
            var value = data.completed[j];
            addItemToDOM(value, true);
          }
        },
        error: function(err) {
          pullToRefresh.end();
          console.log(err);
        }
      });
		}
  });
});

function addItem(startTime,type,content,cost) {
  var expectEndTime=moment(startTime,'HH:mm').add(cost.split("分")[0],'m').format('HH:mm');
  $.ajax({
    url: 'api.php?op=insert',
    type: 'post',
    data: {"startTime":startTime,"expectEndTime":expectEndTime,"type":type,"content":content},
    dataType: 'text',
    success: function (lastInsertId) {
      var value=[lastInsertId,startTime,expectEndTime,type,content];
      addItemToDOM(value);
      $('#item').val('');
      $("#date").val(moment(expectEndTime,'HH:mm').add(5,'m').format('HH:mm'));
    },
    error: function(err) {
      console.log(err);
    }
  });
}

// Adds a new item to the todo list
function addItemToDOM(text, completed) {
  var list = (completed) ? $('#completed'):$('#todo');
  var endTime = (completed) ? text[5]:text[2];
  $(list).append('<li id="'+text[0]+'">'+text[1]+'到<font>'+endTime+'</font>【'+text[3]+'】'+text[4]+'<div class="buttons"></div></li>');
  var buttons=$(list).find('li#'+text[0]+'>.buttons');
  $(buttons).parent().data("expectEndTime",text[2]);
  if(completed){
    $(buttons).parent().data("actualEndTime",text[5]);
    $(buttons).append('<button class="bonus">'+coinSVG+'</button>');
    calcBonus(text[0]);
  }else{
    $(buttons).append('<button class="remove">'+removeSVG+'</button>');
  }
  $(buttons).append('<button class="complete">'+completeSVG+'</button>');
}

function calcBonus(id){
  var curHomework=$('#completed>li#'+id);
  var expectEndTime=$(curHomework).data('expectEndTime');
  var actualEndTime=$(curHomework).data('actualEndTime');
  var timediff=moment(expectEndTime,'HH:mm').diff(moment(actualEndTime,'HH:mm'),'m');
  $(curHomework).find('font').prop("color",timediff<0?'red':'green');
  var totalBonus=parseInt(baseBonus)+parseInt(timediff*bonusPerMinute);
  $(curHomework).find('button.bonus').append('<div>'+(totalBonus<0?0:totalBonus)+'</div>');
}

function hourData(one, two, three, callback) {
  var hours = [];
  for (var i = 0, len = 24; i < len; i++) {
    if (i < 10) {
      i = '0' + i
    }
    hours.push({
     id: i,
     value: i + '时'
    });
  }
  return hours;
}
 
function minuteData(one, two, three, four, callback) {
  var minutes = [];
  for (var i = 0, len = 60; i < len; i++) {
    if (i < 10) {
      i = '0' + i
    }
    minutes.push({
      id: i,
      value: i + '分'
    });
  }
  return minutes;
}

function costData(one, two, three, four, callback) {
  var costs = [];
  for (var i = 5, len = 65; i < len; i=parseInt(i)+5) {
    if (i < 10) {
      i = '0' + i
    }
    costs.push({
      id: i,
      value: i + '分'
    });
  }
  return costs;
}

function typeData(one, two, three, four, callback) {
  var types = [];
  types.push({id: '语文',value: '语文'});
  types.push({id: '数学',value: '数学'});
  types.push({id: '英语',value: '英语'});
  types.push({id: '音基',value: '音基'});
  types.push({id: '钢琴',value: '钢琴'});
  types.push({id: '康大',value: '康大'});
  types.push({id: '泡泡',value: '泡泡'});
  types.push({id: '阅读',value: '阅读'});
  return types;
}