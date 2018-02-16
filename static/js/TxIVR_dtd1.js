var ivr_elements = {
	"compare": {
		"optional": {
			"type": ["string", "number", "size"],
			"othervar": "",
			"value": "",
			"logic": ["eq", "ne", "gt", "lt", "null", "notnull", "sw", "ew", "contain"]
		},
		"attrs": {
			"var": ""
		},
		"children": ["EMPTY"],
		"icon": "icon-copy"
	},
	"prompt": {
		"optional": {
			"count": "3",
			"termkeys": "",
			"asrgrammar": "",
			"attemptvar": "",
			"loopvar": "",
			"delay": "5",
			"file": "",
			"replaykey": "",
			"condition": ""
		},
		"attrs": {
			"name": "",
			"size": ""
		},
		"children": ["message","retrymessage","match","nomatch"],
		"icon": "icon-enter"
	},
	"!attrs": {},
	"!top": ["TxIVR"],
	"substring": {
		"optional": {
			"oper": ["none", "substr", "trim_after", "trim_before"],
			"oper_data": ""
		},
		"attrs": {
			"type": ["constant", "var", "varvar", "varsize", "port", "port_count", "busy_port_count", "ani", "time", "dnis", "hostname", "guid", "channel_var", "hashkey", "hashkeyvar"],
			"value": ""
		},
		"children": ["EMPTY"],
		"icon": "icon-paragraph-left"
	},
	"callwebservice": {
		"optional": {
			"nametype": ["constant", "var", "varvar"],
			"filetype": ["constant", "var", "varvar"],
			"timeout": "10",
			"file": ""
		},
		"attrs": {
			"name": ""
		},
		"children": ["EMPTY"],
		"icon": "icon-earth fg-blue"
	},
	"message": {
		"optional": {
			"offsettype": ["constant", "var"],
			"usingtty": ["no", "onlytty", "withtts"],
			"offset": "0"
		},
		"attrs": {
			"playdata": "",
			"type": ["tts_string", "filename", "filenamevar", "tts_stringvar", "tts_number", "tts_numbervar", "file_string", "file_stringvar", "file_number", "file_numbervar"]
		},
		"children": ["EMPTY"],
		"icon": "icon-mail"
	},
	"ttsserver": {
		"optional": {
			"voice": ["409", "kal", "awb", "rms", "slt", "google", "bing"],
			"fsmod": ["txtts", "flite", "shout"]
		},
		"attrs": {
			"name": "",
		},
		"children": ["EMPTY"],
		"icon": "icon-layers"
	},
	"TxIVR": {
		"children": ["audiodir", "webservice", "condition", "event", "function", "comments", "ttsserver", "asrserver"],
		"icon": "icon-grid-view"
	},
	"event": {
		
		"attrs": {
			"name": "",
			"cause": ["normal", "transfer", "hangup", "noconnect"]
		},
		"children": ["sendmessage", "callwebservice", "string"],
		"icon": "icon-link-2"
	},
	"goto": {
		"optional": {
			"filetype": ["constant", "var", "varvar"],
			"functype": ["constant", "var", "varvar"]
		},
		"attrs": {
			"function": "",
			"file": ""
		},
		"children": ["EMPTY"],
		"icon": "icon-forward"
	},
	"audiodir": {
		"attrs": {
			"name": ""
		},
		"children": ["EMPTY"],
		"icon": "icon-music"
	},
	"unaryoperation": {
		"optional": {
			"var": "",
			"value": "1"
		},
		"attrs": {
			"action": ["incr", "decr"],
			"name": ""
		},
		"children": ["EMPTY"],
		"icon": "icon-plus"
	},
	"comments": {
		"children": ["EMPTY"],
		"attrs": {
			"comment":"",
		},
		"icon": "icon-comments"
	},
	"lookup": {
		"optional": {
			"logic": ["in", "notin"]
		},
		"attrs": {
			"var": "",
			"file": ""
		},
		"children": ["EMPTY"],
		"icon": "icon-search"
	},
	"choice": {
		"optional": {
			"asrgrammar": "",
			"attemptvar": "",
			"loopvar": "",
			"delayvar": "",
			"replaykey": "",
			
		},
		"attrs": {
			"count": "3",
			"size": "1",
			"delay": "5",
			"datavar": "",
		},
		"children": ["message","retrymessage","case","default","nomatch"],
		"icon": "icon-list"
	},
	"input": {
		"optional": {
			"datatype": ["string", "map", "trace"],
			"macro": ["NONE", "TIME"],
			"value": "",
			"varvar": "",
			"var": "",
			"method": ["header", "commandline", "formfield"]
		},
		"attrs": {
			"name": ""
		},
		"children": ["EMPTY"],
		"icon": "icon-pop-in"
	},
	"if": {
		"optional": {
			"valuetype": ["constant", "var", "varvar"],
			"logictype": ["string", "number", "size"],
			"datetime": ["date-time", "year", "yday", "mon", "mday", "week", "mweek", "wday", "hour", "minute", "minute-of-day", "time-of-day", "tz-offset", "dst"],
			"file": ""
		},
		"attrs": {
			"var": "",
			"logic": ["eq", "ne", "gt", "lt", "null", "notnull", "sw", "ew", "contain"],
			"value": "",
			"condition": ""
		},
		"children": ["play", "pause", "string", "action", "subfunction", "if", "prompt", "choice", "unaryoperation", "callwebservice", "logvar", "record", "else", "loop", "comments", "wait", "goto", "execute", "sendmessage"],
		"icon": "icon-embed"
	},
	"match": {
		"children": ["play", "pause", "string", "action", "subfunction", "if", "prompt", "choice", "unaryoperation", "callwebservice", "logvar", "record", "loop", "comments", "wait", "goto", "execute", "sendmessage"],
		"icon": "icon-checkmark"
	},
	"retrymessage": {
		"optional": {
			"offsettype": ["constant", "var"],
			"usingtty": ["no", "onlytty", "withtts"],
			"offset": "0"
		},
		"attrs": {
			"playdata": "",
			"type": ["tts_string", "filename", "filenamevar", "tts_stringvar", "tts_number", "tts_numbervar", "file_string", "file_stringvar", "file_number", "file_numbervar"]
		},
		"children": ["EMPTY"],
		"icon": "icon-mail"
	},
	"function": {
		"attrs": {
			"name": ""
		},
		"children": ["play", "pause", "string", "action", "subfunction", "if", "prompt", "choice", "unaryoperation", "callwebservice", "logvar", "record", "loop", "comments", "wait", "goto", "execute", "sendmessage"],
		"icon": "icon-font"
	},
	"play": {
		"optional": {
			"stoponkey": ["true", "false"],
			"usingtty": ["no", "onlytty", "withtts"],
			"offsettype": ["constant", "var"],
			"offset": "0"
		},
		"attrs": {
			"playdata": "",
			"type": ["tts_string", "filename", "filenamevar", "tts_stringvar", "tts_number", "tts_numbervar", "file_string", "file_stringvar", "file_number", "file_numbervar"]
		},
		"children": ["EMPTY"],
		"icon": "icon-play-alt"
	},
	"string": {
		"optional": {
			"oper": ["none", "substr", "trim_after", "trim_before"],
			"oper_data": "",
			"value": "",
			"hashkey": "",
			"type": ["constant", "var", "varvar", "varsize", "port", "port_count", "busy_port_count", "ani", "time", "dnis", "hostname", "guid", "channel_var", "hashkey", "hashkeyvar"],
			"clear": ["no", "yes"]
		},
		"attrs": {
			"name": ""
		},
		"children": ["substring"],
		"icon": "icon-paragraph-justify"
	},
	"else": {
		"children": ["EMPTY"],
		"icon": "icon-code"
	},
	"pause": {
		"optional": {
			"seconds": "",
			
		},
		"attrs": {
			"milliseconds": ""
		},
		"children": ["EMPTY"],
		"icon": "icon-pause"
	},
	"sendmessage": {
		"optional": {
			"transactioncodevar": "",
			"noreply_file": "",
			"noreply_file_type": ["constant", "var", "varvar"],
			"secure": ["false", "true"],
			"onreply_handler": "",
			"datahashvar": "",
			"noreply_handler": "",
			"onreply_handler_type": ["constant", "var", "varvar"],
			"desttype": ["var", "constant", "varvar"],
			"onreply_file_type": ["constant", "var", "varvar"],
			"timeout": "5",
			"minmax_replies": "0,0",
			"destcategory": ["byRoleOne", "byAddress", "byIdOne", "byIdAll", "byRoleAll", "byBroadcast"],
			"noreply_handler_type": ["constant", "var", "varvar"],
			"onreply_file": "",
			"outputhashvar": "REPLY"
		},
		"attrs": {
			"destination": ""
		},
		"children": ["EMPTY"],
		"icon": "icon-mail"
	},
	"subfunction": {
		"optional": {
			"nametype": ["constant", "var", "varvar"],
			"filetype": ["constant", "var", "varvar"],
			"file": ""
		},
		"attrs": {
			"name": ""
		},
		"children": ["EMPTY"],
		"icon": "icon-font fg-blue"
	},
	"nomatch": {
		"children": ["play", "pause", "string", "action", "subfunction", "if", "prompt", "choice", "unaryoperation", "callwebservice", "logvar", "record", "loop", "comments", "wait", "goto", "execute", "sendmessage"],
		"icon": "icon-cancel-2"
	},
	"condition": {
		"attrs": {
			"name": ""
		},
		"children": ["subfunction","callwebservice","compare", "lookup"],
		"icon": "icon-share-2"
	},
	"wait": {
		"optional": {
			"pollfreq": "1"
		},
		"attrs": {
			"value": "",
			"key": ""
		},
		"children": ["EMPTY"],
		"icon": "icon-clock"
	},
	"case": {
		
		"attrs": {
			"var": "",
			"value": ""
		},
		"children": ["play", "pause", "string", "action", "subfunction", "if", "prompt", "choice", "unaryoperation", "callwebservice", "logvar", "record", "loop", "comments", "wait", "goto", "execute", "sendmessage"],
		"icon": "icon-filter"
	},
	"execute": {
		"optional": {
			"application_type": ["constant", "var", "varvar"],
			"args_type": ["constant", "var", "varvar"],
			"this_session": ["yes", "no"],
			"other_session": ""
		},
		"attrs": {
			"application": "",
			"args": ""
		},
		"children": ["EMPTY"],
		"icon": "icon-lightning"
	},
	"webservice": {
		"optional": {
			"nametype": ["constant", "var", "varvar"],
			"verb": ["head", "post", "get"],
			"urltype": ["constant", "var", "varvar"]
		},
		"attrs": {
			"url": "",
			"name": ""
		},
		"children": ["input","output"],
		"icon": "icon-earth"
	},
	"default": {
		"children": ["play", "pause", "string", "action", "subfunction", "if", "prompt", "choice", "unaryoperation", "callwebservice", "logvar", "record", "loop", "comments", "wait", "goto", "execute", "sendmessage"],
		"icon": "icon-checkbox"
	},
	"record": {
		"optional": {
			"termkeys": "",
			"silencelevel": "200",
			"maxsilence": "",
			"offsetvar": "",
			"inputkey": "",
			"maxtime": "",
			"maxtimevar": ""
		},
		"attrs": {
			"filenamevar": ""
		},
		"children": ["EMPTY"],
		"icon": "icon-record"
	},
	"asrserver": {
		
		"attrs": {
			"name": "txspeech"
		},
		"children": ["EMPTY"],
		"icon": "icon-layers"
	},
	"logvar": {
		"optional": {
			"hashmap": "",
			"varvar": "",
			"filename": "",
			"filenametype": ["var", "constant", "varvar"],
		},
		"attrs": {
			"var": "",
			"value": ""
		},
		"children": ["EMPTY"],
		"icon": "icon-key"
	},
	"action": {
		"optional": {
			"datavar": ["transfer_destination", "dial_string", "channel_data", "tts_engine", "tts_voice", "keystoclear"]
		},
		"attrs": {
			"name": ["nothing", "calltransfer", "hangup", "dial", "calldeflect", "setchannelvar", "ttsparm", "park", "clearkey"]
		},
		"children": ["EMPTY"],
		"icon": "icon-arrow-right-5"
	},
	"output": {
		"optional": {
			"map": ["no", "yes"]
		},
		"attrs": {
			"var": "",
			"name": ""
		},
		"children": ["EMPTY"],
		"icon": "icon-pop-out"
	},
	"loop": {
		"optional": {
			"file": ""
		},
		"attrs": {
			"condition": ""
		},
		"children": ["play", "pause", "string", "action", "subfunction", "if", "prompt", "choice", "unaryoperation", "callwebservice", "logvar", "record", "loop", "comments", "wait", "goto", "execute", "sendmessage"],
		"icon": "icon-loop"
	}
}
