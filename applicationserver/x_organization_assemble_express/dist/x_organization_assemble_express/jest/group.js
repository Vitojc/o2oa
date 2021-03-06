function group_init() {
    $('#content').html('');
    $('#result').html('');
    var str = '<table border="1" width="100%">';
    str += '<tr><td>function:</td><td id="id"><select id="function">';
    str += '<option value="getWithName">getWithName</option>';
    str += '<option value="listSupDirect">listSupDirect</option>';
    str += '<option value="listSupNested">listSupNested</option>';
    str += '<option value="listWithPersonSupDirect">listWithPersonSupDirect</option>';
    str += '<option value="listWithPersonSupNested">listWithPersonSupNested</option>';
    str += '<option value="listSubDirect">listSubDirect</option>';
    str += '<option value="listSubNested">listSubNested</option>';
    str += '<option value="listPinyinInitial">listPinyinInitial</option>';
    str += '<option value="listLikePinyin">listLikePinyin</option>';
    str += '<option value="listLike">listLike</option>';
    str += '</select></td></tr>';
    str += '<tr><td>argument one:</td><td><input type="text"  style="width:95%" id="argumentOne"/></td></tr>';
    str += '<tr><td>url:</td><td id="url">&nbsp;</td></tr>';
    str += '<tr><td colspan="2"><a href="#" id="get">get</a></td></tr>';
    str += '</table>';
    $('#content').html(str);
    $('#get').click(function() {
	group_get();
    });
}

function group_get() {
    $('#result').html('');
    var url = group_getUrl();
    $('#url').html(url);
    $.ajax({
	type : 'get',
	dataType : 'json',
	url : url,
	contentType : 'application/json; charset=utf-8',
	xhrFields : {
	    'withCredentials' : true
	},
	crossDomain : true
    }).done(function(json) {
	$('#result').html(JSON.stringify(json, null, 4));
    });
}

function group_getUrl() {
    var url = '../jaxrs/group/';
    switch ($('#function').val()) {
    case 'getWithName':
	url += $('#argumentOne').val();
	break;
    case 'listSupDirect':
	url += 'list/' + $('#argumentOne').val() + '/sup/direct';
	break;
    case 'listSupNested':
	url += 'list/' + $('#argumentOne').val() + '/sup/nested';
	break;
    case 'listWithPersonSupDirect':
	url += 'list/person/' + $('#argumentOne').val() + '/sup/direct';
	break;
    case 'listWithPersonSupNested':
	url += 'list/person/' + $('#argumentOne').val() + '/sup/nested';
	break;
    case 'listSubDirect':
	url += 'list/' + $('#argumentOne').val() + '/sub/direct';
	break;
    case 'listSubNested':
	url += 'list/' + $('#argumentOne').val() + '/sub/nested';
	break;
    case 'listPinyinInitial':
	url += 'list/pinyininitial/' + $('#argumentOne').val();
	break;
    case 'listLikePinyin':
	url += 'list/like/pinyin/' + $('#argumentOne').val();
	break;
    case 'listLike':
	url += 'list/like/' + $('#argumentOne').val();
	break;
    }
    return url;
}