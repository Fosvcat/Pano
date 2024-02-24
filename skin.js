// Garden Gnome Software - Skin
// Pano2VR 6.1.14/18105
// Filename: ????.ggsk
// Generated 2023-10-27T11:27:34

function pano2vrSkin(player,base) {
	player.addVariable('opt_thumbnail_menu_tooltip', 2, true);
	player.addVariable('vis_thumbnail_menu', 2, true);
	player.addVariable('var_ht', 2, false);
	player.addVariable('help', 2, true);
	player.addVariable('vis_loader', 2, true);
	player.addVariable('vis_info_popup', 2, false);
	player.addVariable('zuozhe', 2, false);
	player.addVariable('var1', 1, 0);
	player.addVariable('vis_auto_hide_controller', 2, true);
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._timer_1=document.createElement('div');
		el.ggTimestamp=this.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=750;
		el.ggId="Timer 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -105px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._timer_1.ggIsActive=function() {
			return (me._timer_1.ggTimestamp==0 ? false : (Math.floor((me.ggCurrentTime - me._timer_1.ggTimestamp) / me._timer_1.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._timer_1.ggActivate=function () {
			player.setVariableValue('var_ht', true);
		}
		me._timer_1.ggDeactivate=function () {
			player.setVariableValue('var_ht', false);
		}
		me._timer_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._timer_1);
		el=me._timer025=document.createElement('div');
		el.ggTimestamp=this.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=3600000;
		el.ggId="Timer025";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : -105px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._timer025.ggIsActive=function() {
			return (me._timer025.ggTimestamp==0 ? false : (Math.floor((me.ggCurrentTime - me._timer025.ggTimestamp) / me._timer025.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._timer025.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._timer025.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer025.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer025.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer025.style[domTransition]='';
				if (me._timer025.ggCurrentLogicStateVisible == 0) {
					me._timer025.style.visibility="hidden";
					me._timer025.ggVisible=false;
				}
				else {
					me._timer025.style.visibility=(Number(me._timer025.style.opacity)>0||!me._timer025.style.opacity)?'inherit':'hidden';
					me._timer025.ggVisible=true;
				}
			}
		}
		me._timer025.ggActivate=function () {
			player.setVariableValue('var1', player.getVariableValue('var1') + Number("1"));
			player.setVariableValue('var1', player.getVariableValue('var1') % Number("25"));
		}
		me._timer025.ggCurrentLogicStateVisible = -1;
		me._timer025.ggUpdateConditionTimer=function () {
			me._timer025.logicBlock_visible();
		}
		me._timer025.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._timer025);
		el=me._jihaolou=document.createElement('div');
		el.ggId="jihaolou";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 189px;';
		hs+='left : 269px;';
		hs+='position : absolute;';
		hs+='top : 198px;';
		hs+='visibility : inherit;';
		hs+='width : 289px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._jihaolou.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._jihaolou.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._jihaolou);
		el=me._tishi=document.createElement('div');
		el.ggId="tishi";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 128px;';
		hs+='left : 216px;';
		hs+='position : absolute;';
		hs+='top : 237px;';
		hs+='visibility : inherit;';
		hs+='width : 330px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._tishi.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._tishi.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._tishi);
		el=me._loading=document.createElement('div');
		el.ggId="loading";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 210px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loading.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._loading.onclick=function (e) {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		me._loading.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._loadingbg=document.createElement('div');
		el.ggId="loadingbg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 5px;';
		hs+='border-radius : 5px;';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 60px;';
		hs+='left : 0px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 210px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loadingbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingbg.ggUpdatePosition=function (useTransition) {
		}
		me._loading.appendChild(me._loadingbg);
		el=me._loadingtext=document.createElement('div');
		els=me._loadingtext__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="loadingtext";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 23px;';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : inherit;';
		hs+='width : 178px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._loadingtext.ggUpdateText=function() {
			var hs="\u52a0\u8f7d\u4e2d... "+(player.getPercentLoaded()*100.0).toFixed(0)+"%";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._loadingtext.ggUpdateText();
		player.addListener('downloadprogress', function() {
			me._loadingtext.ggUpdateText();
		});
		el.appendChild(els);
		me._loadingtext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingtext.ggUpdatePosition=function (useTransition) {
		}
		me._loading.appendChild(me._loadingtext);
		el=me._loadingbar=document.createElement('div');
		el.ggId="loadingbar";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 6px;';
		hs+='border-radius : 6px;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #808080;';
		hs+='cursor : default;';
		hs+='height : 13px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : inherit;';
		hs+='width : 182px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 50%';
		me._loadingbar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingbar.ggUpdatePosition=function (useTransition) {
		}
		me._loading.appendChild(me._loadingbar);
		me.divSkin.appendChild(me._loading);
		el=me._hide_controller_container=document.createElement('div');
		el.ggId="hide_controller_container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hide_controller_container.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._hide_controller_container.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_auto_hide_controller') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hide_controller_container.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hide_controller_container.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hide_controller_container.style[domTransition]='opacity 300ms ease 0ms';
				if (me._hide_controller_container.ggCurrentLogicStateAlpha == 0) {
					me._hide_controller_container.style.visibility=me._hide_controller_container.ggVisible?'inherit':'hidden';
					me._hide_controller_container.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._hide_controller_container.style.opacity == 0.0) { me._hide_controller_container.style.visibility="hidden"; } }, 305);
					me._hide_controller_container.style.opacity=0;
				}
			}
		}
		me._hide_controller_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._ctrl=document.createElement('div');
		el.ggId="Ctrl";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 285px;';
		hs+='left : 41px;';
		hs+='position : absolute;';
		hs+='top : -10px;';
		hs+='visibility : inherit;';
		hs+='width : 385px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ctrl.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ctrl.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnail_show_button_show=document.createElement('div');
		els=me._thumbnail_show_button_show__img=document.createElement('img');
		els.className='ggskin ggskin_thumbnail_show_button_show';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_show_button_show";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : 130px;';
		hs+='opacity : 0.80001;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_show_button_show.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_show_button_show.onclick=function (e) {
			player.setVariableValue('vis_thumbnail_menu', !player.getVariableValue('vis_thumbnail_menu'));
		}
		me._thumbnail_show_button_show.onmouseover=function (e) {
			me.elementMouseOver['thumbnail_show_button_show']=true;
		}
		me._thumbnail_show_button_show.onmouseout=function (e) {
			me._tt_thumbnail_open.style[domTransition]='none';
			me._tt_thumbnail_open.style.visibility='hidden';
			me._tt_thumbnail_open.ggVisible=false;
			me._thumbnail_show_button_show.style[domTransition]='none';
			me._thumbnail_show_button_show.style.opacity='0.8';
			me._thumbnail_show_button_show.style.visibility=me._thumbnail_show_button_show.ggVisible?'inherit':'hidden';
			me.elementMouseOver['thumbnail_show_button_show']=false;
		}
		me._thumbnail_show_button_show.ontouchend=function (e) {
			me.elementMouseOver['thumbnail_show_button_show']=false;
		}
		me._thumbnail_show_button_show.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_thumbnail_open=document.createElement('div');
		els=me._tt_thumbnail_open__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_thumbnail_open";
		el.ggDx=-2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 43px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #434343;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._tt_thumbnail_open.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_thumbnail_open.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_thumbnail_open.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_thumbnail_open.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_thumbnail_open.style[domTransition]='left 0s, top 0s';
				if (me._tt_thumbnail_open.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_thumbnail_open.style.top='-25px';
					me._tt_thumbnail_open.ggUpdatePosition(true);
				}
				else {
					me._tt_thumbnail_open.ggDx=-2;
					me._tt_thumbnail_open.style.top='43px';
					me._tt_thumbnail_open.ggUpdatePosition(true);
				}
			}
		}
		me._tt_thumbnail_open.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('vis_thumbnail_menu') == false))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('vis_thumbnail_menu') == true))
			)
			{
				newLogicStateText = 1;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._tt_thumbnail_open.ggCurrentLogicStateText != newLogicStateText) {
				me._tt_thumbnail_open.ggCurrentLogicStateText = newLogicStateText;
				me._tt_thumbnail_open.style[domTransition]='left 0s, top 0s';
				if (me._tt_thumbnail_open.ggCurrentLogicStateText == 0) {
					me._tt_thumbnail_open.ggText="\u5c55\u793a\u5bfc\u89c8\u83dc\u5355";
					me._tt_thumbnail_open__text.innerHTML=me._tt_thumbnail_open.ggText;
					if (me._tt_thumbnail_open.ggUpdateText) {
					me._tt_thumbnail_open.ggUpdateText=function() {
						var hs="\u5c55\u793a\u5bfc\u89c8\u83dc\u5355";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_thumbnail_open.ggUpdatePosition) me._tt_thumbnail_open.ggUpdatePosition();
					}
				}
				else if (me._tt_thumbnail_open.ggCurrentLogicStateText == 1) {
					me._tt_thumbnail_open.ggText="\u9690\u85cf\u5bfc\u89c8\u83dc\u5355";
					me._tt_thumbnail_open__text.innerHTML=me._tt_thumbnail_open.ggText;
					if (me._tt_thumbnail_open.ggUpdateText) {
					me._tt_thumbnail_open.ggUpdateText=function() {
						var hs="\u9690\u85cf\u5bfc\u89c8\u83dc\u5355";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_thumbnail_open.ggUpdatePosition) me._tt_thumbnail_open.ggUpdatePosition();
					}
				}
				else {
					me._tt_thumbnail_open.ggText="";
					me._tt_thumbnail_open__text.innerHTML=me._tt_thumbnail_open.ggText;
					if (me._tt_thumbnail_open.ggUpdateText) {
					me._tt_thumbnail_open.ggUpdateText=function() {
						var hs="";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_thumbnail_open.ggUpdatePosition) me._tt_thumbnail_open.ggUpdatePosition();
					}
				}
			}
		}
		me._tt_thumbnail_open.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((102-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._thumbnail_show_button_show.appendChild(me._tt_thumbnail_open);
		me._ctrl.appendChild(me._thumbnail_show_button_show);
		el=me._media=document.createElement('div');
		el.ggId="media";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 65px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 48px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._media.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._media.ggUpdatePosition=function (useTransition) {
		}
		el=me._media_on=document.createElement('div');
		els=me._media_on__img=document.createElement('img');
		els.className='ggskin ggskin_media_on';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="media on";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : 0px;';
		hs+='opacity : 0.80004;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._media_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._media_on.onclick=function (e) {
				player.pauseSound("_background");
			me._media_on.style[domTransition]='none';
			me._media_on.style.visibility='hidden';
			me._media_on.ggVisible=false;
			me._media_off.style[domTransition]='none';
			me._media_off.style.visibility=(Number(me._media_off.style.opacity)>0||!me._media_off.style.opacity)?'inherit':'hidden';
			me._media_off.ggVisible=true;
		}
		me._media_on.onmouseover=function (e) {
			me.elementMouseOver['media_on']=true;
		}
		me._media_on.onmouseout=function (e) {
			me._yinyue.style[domTransition]='none';
			me._yinyue.style.visibility='hidden';
			me._yinyue.ggVisible=false;
			me._media_on.style[domTransition]='none';
			me._media_on.style.opacity='0.8';
			me._media_on.style.visibility=me._media_on.ggVisible?'inherit':'hidden';
			me.elementMouseOver['media_on']=false;
		}
		me._media_on.ontouchend=function (e) {
			me.elementMouseOver['media_on']=false;
		}
		me._media_on.ggUpdatePosition=function (useTransition) {
		}
		me._media.appendChild(me._media_on);
		el=me._media_off=document.createElement('div');
		els=me._media_off__img=document.createElement('img');
		els.className='ggskin ggskin_media_off';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAJxElEQVRYhbWZbUxTaRbHz719hZYCMkUrFLM4S7uksC1oB9puhhlfsgGCpvUtMNHwQaPNZgqJyRozcfqhiToiBENmjV8mGZxYkBrTKmgWBEVaXGxZBYGixZ2W6qy8CAVa2su9dz9Iu1AKVEf/SZOb23Pu8+tzz3Oec54iJEnC+0qn0yXzeLyDfD4/KzU1NUkoFNIj2Q0NDQVGR0cnXC5Xn8vl0mu12rH3HQt5H8BLly7tkUgkSplMtmF6ehp6e3uhq6sL2tvbYXh4GDweD8zPzwOXy4WsrCzIzc0FhUIBEokEkpOTwWw2T9psNoNGozF+VMCqqipFQUHB38RiMau9vR2+//57sFgsUf8wDocDRUVFcPToUcjPz4e+vr65+/fv1508efLh7wY0Go21hY'+
			'WF6UajEc6cOQODg4NAEETUcOESi8Wg0+lg9+7d0NLSMlJSUqL5IECdTpesUqn+wWAw6BqNBm7duvXBUJGkVCrh2rVr4HA4Ag0NDcdXi8+IgBcuXFAUFRVVYhhGVyqVMDIy8lHhgsrIyID6+npgs9mB5ubmmkivHA2/odPpkhfheAaDIYVGo8V8EjoAGB4ehv3794PX66UXFRVVarVabrjNihkcHBw0EARBHxsby5HL5Ty73T5VVFT02Ol0+j8VKJ/Ph6amJmCz2YHMzEzVqoA3b96sFYlE6Xv27IF9+/ZtOX36dCaDwaC43W7vkSNHrG1tbdNLnb/55ptkhUKRmJmZGcdkMilMJpNCo9FQOp2OUqlUFEVRhEqlIiiKIhQKBZ2dnQ0MDAx4Kisrh+x2u2/ps7Zv3w53796Fzs7O5QuHJEkgSRKqqqr+gmGYqbi42AQA'+
			'JgAwfffdd0+8Xu8CjuOE0+mcUSqVZgRBTABg+u233+b8fj9OEAQZ7WdhYYEYGxvzffHFFx3BMZZ+KisrTTiOmy5cuKAIcoUAe3p69Ddu3FjhtH//fsvo6OgsQRBkIBAg1Gr144yMjH9iGEYQBEGSJBk1IEEQpM/nWzh27NjjSIA0Gs3U3d1t6unp0Qe5qADvdgi1Ws0qLS1dER/Xr18ff/v2ra2hoUGamJjIOHv2bHZBQYGbQqEgCIIASZLw5s0bL0mSEIT2+/3EwsICgWEYieM4EQgESJFIlMBkMikIgkBSUhItUixiGAaVlZXQ2trKqq2tLdFoNEYqAIBEIlF1dHTAixcvIgZxa2vrtEwme9jY2CgRiUSJKpVqSxDO7/fjmzZtuhfRcYnm5ub+iqIogqIowmAwVmSPoCwWC1itVhCLxSoAMKI6nS45Pz8/8dy5c7'+
			'DWrmK3231lZWX/tlqt4yiKIgAACIKA3+9fWA+Ow+FQ6HQ6BVnU8PDw3Fr2ly9fBoVCsUGr1XJRHo93cHJyEtra2tYbB/r7+71SqfTR7OwsFrxHo9EoAoFgzVwpFApjUPTdpJEkST569GhmLfvbt2/D5OQk8Pn8Qyifz8969uzZunBLheN4aDOOjY2lNjU15aSlpTFWs5fL5fEIgiCLvuR6OXV6ehqGhoYgJSUlC01NTU26d2/dEFomJpNJDa4yHMdJkUiUaDab5Tt27IiPZJ+bm5sQvPb7/QSGYeuWUDabDdLS0pJQgUBAf/DgQdRwi8k3FOQGg+FXn8+H83i8mJ9++kmiVCqTFicrpK1bt7KD1z6fD4MoZLFYQCAQ0FEAgOfPn0cNKBQKmcFFAgBw+vTpF0eOHOl5/fq1NzU1la3X6/NOnDjBW+qzefPmUIxOTEwE'+
			'ohnH4XD8Pw96PJ6oAeVyeeg14jhOOhyOeYfDMR+eK5OSkug//PCD0+/3k3FxcaG89+bNG1/kJy+X2+0GKpX6rprx+6OvA2QyWWLwGsOw0GIJ5sq+vr5JNptNPXPmjOjKlSt/YjKZKIPBoATtRkZG1kwxQeE4DiRJvgPkcldUOatKKBRygtc+n29ZDgzLlVBWVvaHn3/+OZNGo4Vitre3N6rXFWRCAQCysrKiBuTxeKF4mpqaWjH1wVx5584dNwCASqXasnRRWSyW6XCfSJJKpe8A7XZ7IC8vL2rA+Pj4UDy53e5V4+nw4cP9jY2NvxIEQSIIAgiCAEEQZH9/vzeacWQyGQwNDQXQ0dHRCblcvqZxQUFB/JUrVwRms1nK4XDowTTy7NmzVWcDwzCytbV1zO12h4BQFAWZTBYXDeC2bdvA5XJNoC6Xqy87OxtYLFZEw8'+
			'LCwkS9Xp9bXl7+eV5eXvLSfdhut68a8NXV1X+sq6uTpKWlhXIggiDI9evXpQcPHuSG58qlio2NBYFAAC6Xqx91uVx6LpcLX3/9dUTj0tLSzcnJybFUKhUJf2hMTAwlohMAHDhwYEtMTAw13CchIYFRX18vDc+VYb7AYDDA5XJdQ7Va7ZjZbJ6sqKhY9RdFEkmSMDU1tequEKkywnGc9Hq9C1QqFTl//vyfq6urP2exWMtKLxqNBmq1Grq6uia1Wu0YCgBgs9kMUqkUxGLxioc+ffrUMzMzE1isnmGxMCVfvnzpcTqd86sBPn/+fHp+fh5fumfPzMxgZWVl/+rr65uMjY2lfPvtt4LLly8Ll/opFArIyckBm81mAFjSNPX09Og9Hg9r586dKwbbunUr8/Dhw5vy8vI2oCgKvb2907/88svrJ0+erLkiCwsLE4uLi7kb'+
			'N25kulwub2Nj43+7u7tn09PTGfX19dlSqZRLkiTcuHHDqVarB8fHxxc6OzuBwWDMbd++/dAywKqqKkVFRcXfy8vL4erVq2uN+9HU0tIi2bVr12YAgLq6OvvAwMCLH3/8EWpqas4Hm/hlbafRaKz96quv0vPz8+F9a8QP0WeffUatqanJ2LFjx6Zbt26NlJaW/qetrW1Z27micR8YGDB4PB66SqWCV69efXJIAAChUAjNzc3g9/sDQqFwWeO+onlpbGw8zuFwAgaDAfh8/ieH43K5cPXqVfD5fAG9Xn88/PsVgFqtdqy5ubkmPj4+0NTUBNnZ2Z8MLj8/H54+fQosFitgNBprIp1wRWz/Tp48+bChoeE4m80OdHV1gVqt/qhgHA4HKioqwGAwwNu3bwNNTU0nTp06FfEwM6oDzOLi4vTu7m7QaDTw+PHj3wX35Zdfws'+
			'WLF0EsFoPJZBrZu3fvmgeYqzbQQZWUlGiqq6vP0+n0uY6ODujs7IR9+/ZBXFxUez4AALBYLCgvL4fe3t5geztXXV19fj04gPc8RK+trS3JyclRyWSyDePj4zAwMABWqxWsVis4HA4YHR0Fn88HqampIBaLQSKRwLZt20AkEkFCQgJ0dXV9mkP0cGm1Wi6fzz+UkpKSlZaWliQQCCL+DWG32wNOp3PC7XZ/8N8Q/wOf3/wbswpqrwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="media off";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : 0px;';
		hs+='opacity : 0.80001;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._media_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._media_off.onclick=function (e) {
				player.playSound("_background","0");
			me._media_off.style[domTransition]='none';
			me._media_off.style.visibility='hidden';
			me._media_off.ggVisible=false;
			me._media_on.style[domTransition]='none';
			me._media_on.style.visibility=(Number(me._media_on.style.opacity)>0||!me._media_on.style.opacity)?'inherit':'hidden';
			me._media_on.ggVisible=true;
		}
		me._media_off.onmouseover=function (e) {
			me.elementMouseOver['media_off']=true;
		}
		me._media_off.onmouseout=function (e) {
			me._yinyue.style[domTransition]='none';
			me._yinyue.style.visibility='hidden';
			me._yinyue.ggVisible=false;
			me._media_off.style[domTransition]='none';
			me._media_off.style.opacity='0.8';
			me._media_off.style.visibility=me._media_off.ggVisible?'inherit':'hidden';
			me.elementMouseOver['media_off']=false;
		}
		me._media_off.ontouchend=function (e) {
			me.elementMouseOver['media_off']=false;
		}
		me._media_off.ggUpdatePosition=function (useTransition) {
		}
		me._media.appendChild(me._media_off);
		el=me._yinyue=document.createElement('div');
		els=me._yinyue__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="yinyue";
		el.ggDx=-6;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 43px;';
		hs+='visibility : hidden;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #434343;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="\u80cc\u666f\u97f3\u4e50";
		el.appendChild(els);
		me._yinyue.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._yinyue.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((50-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._media.appendChild(me._yinyue);
		me._ctrl.appendChild(me._media);
		el=me._button_auto_rotate=document.createElement('div');
		el.ggId="button_auto_rotate";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 89px;';
		hs+='left : 50px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 44px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_auto_rotate.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_auto_rotate.onclick=function (e) {
			player.toggleAutorotate();
		}
		me._button_auto_rotate.ggUpdatePosition=function (useTransition) {
		}
		el=me._stop_rotate_image=document.createElement('div');
		els=me._stop_rotate_image__img=document.createElement('img');
		els.className='ggskin ggskin_stop_rotate_image';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="stop_rotate_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : 0px;';
		hs+='opacity : 0.80001;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._stop_rotate_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._stop_rotate_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsAutorotating() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._stop_rotate_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._stop_rotate_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._stop_rotate_image.style[domTransition]='';
				if (me._stop_rotate_image.ggCurrentLogicStateVisible == 0) {
					me._stop_rotate_image.style.visibility=(Number(me._stop_rotate_image.style.opacity)>0||!me._stop_rotate_image.style.opacity)?'inherit':'hidden';
					me._stop_rotate_image.ggVisible=true;
				}
				else {
					me._stop_rotate_image.style.visibility="hidden";
					me._stop_rotate_image.ggVisible=false;
				}
			}
		}
		me._stop_rotate_image.onmouseover=function (e) {
			me.elementMouseOver['stop_rotate_image']=true;
		}
		me._stop_rotate_image.onmouseout=function (e) {
			me._rotate.style[domTransition]='none';
			me._rotate.style.visibility='hidden';
			me._rotate.ggVisible=false;
			me._stop_rotate_image.style[domTransition]='none';
			me._stop_rotate_image.style.opacity='0.8';
			me._stop_rotate_image.style.visibility=me._stop_rotate_image.ggVisible?'inherit':'hidden';
			me.elementMouseOver['stop_rotate_image']=false;
		}
		me._stop_rotate_image.ontouchend=function (e) {
			me.elementMouseOver['stop_rotate_image']=false;
		}
		me._stop_rotate_image.ggUpdatePosition=function (useTransition) {
		}
		me._button_auto_rotate.appendChild(me._stop_rotate_image);
		el=me._start_rotate_image=document.createElement('div');
		els=me._start_rotate_image__img=document.createElement('img');
		els.className='ggskin ggskin_start_rotate_image';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="start_rotate_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : 0px;';
		hs+='opacity : 0.80001;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._start_rotate_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._start_rotate_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsAutorotating() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._start_rotate_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._start_rotate_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._start_rotate_image.style[domTransition]='';
				if (me._start_rotate_image.ggCurrentLogicStateVisible == 0) {
					me._start_rotate_image.style.visibility="hidden";
					me._start_rotate_image.ggVisible=false;
				}
				else {
					me._start_rotate_image.style.visibility=(Number(me._start_rotate_image.style.opacity)>0||!me._start_rotate_image.style.opacity)?'inherit':'hidden';
					me._start_rotate_image.ggVisible=true;
				}
			}
		}
		me._start_rotate_image.onmouseover=function (e) {
			me.elementMouseOver['start_rotate_image']=true;
		}
		me._start_rotate_image.onmouseout=function (e) {
			me._rotate.style[domTransition]='none';
			me._rotate.style.visibility='hidden';
			me._rotate.ggVisible=false;
			me._start_rotate_image.style[domTransition]='none';
			me._start_rotate_image.style.opacity='0.8';
			me._start_rotate_image.style.visibility=me._start_rotate_image.ggVisible?'inherit':'hidden';
			me.elementMouseOver['start_rotate_image']=false;
		}
		me._start_rotate_image.ontouchend=function (e) {
			me.elementMouseOver['start_rotate_image']=false;
		}
		me._start_rotate_image.ggUpdatePosition=function (useTransition) {
		}
		me._button_auto_rotate.appendChild(me._start_rotate_image);
		el=me._rotate=document.createElement('div');
		els=me._rotate__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="rotate";
		el.ggDx=-3;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 43px;';
		hs+='visibility : hidden;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #434343;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="\u81ea\u52a8\u65cb\u8f6c";
		el.appendChild(els);
		me._rotate.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rotate.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((50-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._button_auto_rotate.appendChild(me._rotate);
		me._ctrl.appendChild(me._button_auto_rotate);
		el=me._button_fullscreen=document.createElement('div');
		el.ggId="button_fullscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 90px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_fullscreen.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._button_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		el=me._button_image_normalscreen=document.createElement('div');
		els=me._button_image_normalscreen__img=document.createElement('img');
		els.className='ggskin ggskin_button_image_normalscreen';
		hs='data:image/png;base64,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'+
			'TkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="button_image_normalscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : 0px;';
		hs+='opacity : 0.80001;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_image_normalscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_normalscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_image_normalscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_image_normalscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_image_normalscreen.style[domTransition]='';
				if (me._button_image_normalscreen.ggCurrentLogicStateVisible == 0) {
					me._button_image_normalscreen.style.visibility=(Number(me._button_image_normalscreen.style.opacity)>0||!me._button_image_normalscreen.style.opacity)?'inherit':'hidden';
					me._button_image_normalscreen.ggVisible=true;
				}
				else {
					me._button_image_normalscreen.style.visibility="hidden";
					me._button_image_normalscreen.ggVisible=false;
				}
			}
		}
		me._button_image_normalscreen.onmouseover=function (e) {
			me.elementMouseOver['button_image_normalscreen']=true;
		}
		me._button_image_normalscreen.onmouseout=function (e) {
			me._fullscreen_x.style[domTransition]='none';
			me._fullscreen_x.style.visibility='hidden';
			me._fullscreen_x.ggVisible=false;
			me._button_image_normalscreen.style[domTransition]='none';
			me._button_image_normalscreen.style.opacity='0.8';
			me._button_image_normalscreen.style.visibility=me._button_image_normalscreen.ggVisible?'inherit':'hidden';
			me.elementMouseOver['button_image_normalscreen']=false;
		}
		me._button_image_normalscreen.ontouchend=function (e) {
			me.elementMouseOver['button_image_normalscreen']=false;
		}
		me._button_image_normalscreen.ggUpdatePosition=function (useTransition) {
		}
		el=me._fullscreen_x=document.createElement('div');
		els=me._fullscreen_x__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="fullscreen X";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 43px;';
		hs+='visibility : hidden;';
		hs+='width : 51px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #434343;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u9000\u51fa\u5168\u5c4f";
		el.appendChild(els);
		me._fullscreen_x.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fullscreen_x.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._fullscreen_x.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._fullscreen_x.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._fullscreen_x.style[domTransition]='left 0s, top 0s';
				if (me._fullscreen_x.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._fullscreen_x.style.top='-25px';
					me._fullscreen_x.ggUpdatePosition(true);
				}
				else {
					me._fullscreen_x.ggDx=0;
					me._fullscreen_x.style.top='43px';
					me._fullscreen_x.ggUpdatePosition(true);
				}
			}
		}
		me._fullscreen_x.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((53-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._button_image_normalscreen.appendChild(me._fullscreen_x);
		me._button_fullscreen.appendChild(me._button_image_normalscreen);
		el=me._button_image_fullscreen=document.createElement('div');
		els=me._button_image_fullscreen__img=document.createElement('img');
		els.className='ggskin ggskin_button_image_fullscreen';
		hs='data:image/png;base64,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'+
			'9/Kg7ytHqUcAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="button_image_fullscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : 0px;';
		hs+='opacity : 0.80001;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_image_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_fullscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_image_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_image_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_image_fullscreen.style[domTransition]='';
				if (me._button_image_fullscreen.ggCurrentLogicStateVisible == 0) {
					me._button_image_fullscreen.style.visibility="hidden";
					me._button_image_fullscreen.ggVisible=false;
				}
				else {
					me._button_image_fullscreen.style.visibility=(Number(me._button_image_fullscreen.style.opacity)>0||!me._button_image_fullscreen.style.opacity)?'inherit':'hidden';
					me._button_image_fullscreen.ggVisible=true;
				}
			}
		}
		me._button_image_fullscreen.onmouseover=function (e) {
			me.elementMouseOver['button_image_fullscreen']=true;
		}
		me._button_image_fullscreen.onmouseout=function (e) {
			me._fullscreen_on.style[domTransition]='none';
			me._fullscreen_on.style.visibility='hidden';
			me._fullscreen_on.ggVisible=false;
			me._button_image_fullscreen.style[domTransition]='none';
			me._button_image_fullscreen.style.opacity='0.8';
			me._button_image_fullscreen.style.visibility=me._button_image_fullscreen.ggVisible?'inherit':'hidden';
			me.elementMouseOver['button_image_fullscreen']=false;
		}
		me._button_image_fullscreen.ontouchend=function (e) {
			me.elementMouseOver['button_image_fullscreen']=false;
		}
		me._button_image_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		el=me._fullscreen_on=document.createElement('div');
		els=me._fullscreen_on__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="fullscreen on";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -9px;';
		hs+='position : absolute;';
		hs+='top : 43px;';
		hs+='visibility : hidden;';
		hs+='width : 51px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #434343;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=" \u8fdb\u5165\u5168\u5c4f";
		el.appendChild(els);
		me._fullscreen_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fullscreen_on.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._fullscreen_on.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._fullscreen_on.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._fullscreen_on.style[domTransition]='left 0s, top 0s';
				if (me._fullscreen_on.ggCurrentLogicStatePosition == 0) {
					me._fullscreen_on.style.left='0px';
					me._fullscreen_on.style.top='-25px';
				}
				else {
					me._fullscreen_on.style.left='-9px';
					me._fullscreen_on.style.top='43px';
				}
			}
		}
		me._fullscreen_on.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((53-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._button_image_fullscreen.appendChild(me._fullscreen_on);
		me._button_fullscreen.appendChild(me._button_image_fullscreen);
		me._ctrl.appendChild(me._button_fullscreen);
		el=me._info=document.createElement('div');
		el.ggId="info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 210px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_information=document.createElement('div');
		els=me._tt_information__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_information";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -8px;';
		hs+='position : absolute;';
		hs+='top : 43px;';
		hs+='visibility : hidden;';
		hs+='width : 48px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #414141;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u5173\u4e8e";
		el.appendChild(els);
		me._tt_information.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_information.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_information.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_information.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_information.style[domTransition]='left 0s, top 0s';
				if (me._tt_information.ggCurrentLogicStatePosition == 0) {
					me._tt_information.style.left='0px';
					me._tt_information.style.top='-47px';
				}
				else {
					me._tt_information.style.left='-8px';
					me._tt_information.style.top='43px';
				}
			}
		}
		me._tt_information.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((50-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._info.appendChild(me._tt_information);
		el=me._ht_info_image=document.createElement('div');
		els=me._ht_info_image__img=document.createElement('img');
		els.className='ggskin ggskin_ht_info_image';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_info_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : 0px;';
		hs+='opacity : 0.80001;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_info_image.onclick=function (e) {
			player.setVariableValue('vis_info_popup', true);
			me._tt_information.style[domTransition]='none';
			me._tt_information.style.visibility='hidden';
			me._tt_information.ggVisible=false;
			player.startAutorotate("0.08");
		}
		me._ht_info_image.onmouseover=function (e) {
			me.elementMouseOver['ht_info_image']=true;
		}
		me._ht_info_image.onmouseout=function (e) {
			me._tt_information.style[domTransition]='none';
			me._tt_information.style.visibility='hidden';
			me._tt_information.ggVisible=false;
			me._ht_info_image.style[domTransition]='none';
			me._ht_info_image.style.opacity='0.8';
			me._ht_info_image.style.visibility=me._ht_info_image.ggVisible?'inherit':'hidden';
			me.elementMouseOver['ht_info_image']=false;
		}
		me._ht_info_image.ontouchend=function (e) {
			me.elementMouseOver['ht_info_image']=false;
		}
		me._ht_info_image.ggUpdatePosition=function (useTransition) {
		}
		me._info.appendChild(me._ht_info_image);
		me._ctrl.appendChild(me._info);
		el=me._map=document.createElement('div');
		el.ggId="map";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 79px;';
		hs+='left : 170px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 121px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._map.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_button=document.createElement('div');
		els=me._map_button__img=document.createElement('img');
		els.className='ggskin ggskin_map_button';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_Button";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : 0px;';
		hs+='opacity : 0.79999;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._map_button.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_button.onclick=function (e) {
			player.openUrl("https:\/\/www.bing.com\/maps?osid=c94b4083-295b-40d9-8f04-04af627f710d&cp=36.418982~115.98&lvl=14.5&pi=0&v=2&sV=2&form=S00027","");
		}
		me._map_button.onmouseover=function (e) {
			me.elementMouseOver['map_button']=true;
		}
		me._map_button.onmouseout=function (e) {
			me._maptext.style[domTransition]='none';
			me._maptext.style.visibility='hidden';
			me._maptext.ggVisible=false;
			me._map_button.style[domTransition]='none';
			me._map_button.style.opacity='0.8';
			me._map_button.style.visibility=me._map_button.ggVisible?'inherit':'hidden';
			me.elementMouseOver['map_button']=false;
		}
		me._map_button.ontouchend=function (e) {
			me.elementMouseOver['map_button']=false;
		}
		me._map_button.ggUpdatePosition=function (useTransition) {
		}
		me._map.appendChild(me._map_button);
		el=me._maptext=document.createElement('div');
		els=me._maptext__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="maptext";
		el.ggDx=-42;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 43px;';
		hs+='visibility : hidden;';
		hs+='width : 75px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #434343;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="\u8f6c\u5230\u5730\u56fe";
		el.appendChild(els);
		me._maptext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._maptext.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((77-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._map.appendChild(me._maptext);
		me._ctrl.appendChild(me._map);
		me._hide_controller_container.appendChild(me._ctrl);
		el=me._compass=document.createElement('div');
		el.ggId="compass";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 90px;';
		hs+='position : absolute;';
		hs+='right : -1px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._compass.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._compass.ggUpdatePosition=function (useTransition) {
		}
		el=me._compass_1=document.createElement('div');
		els=me._compass_1__img=document.createElement('img');
		els.className='ggskin ggskin_compass_1';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="compass 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 74px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 76px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._compass_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._compass_1.onclick=function (e) {
			player.openNext("{node17}","-147.53\/-90\/120");
		}
		me._compass_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._compass.appendChild(me._compass_1);
		el=me._compass_2=document.createElement('div');
		els=me._compass_2__img=document.createElement('img');
		els.className='ggskin ggskin_compass_2';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAABBCAYAAADVP1R0AAADWElEQVRYhbWYzWsUMRTAf7Pbbl21FasVq/UDUURSUDTooSp6LZ78Izwp+A94rCf/C++Cp15UvAjtWASFQfxGrB+t1taubq12Nx4mYcdtMpmZ3T5YMplNfnl57+VNkkApxUZIaUOoQE/WhqGUY8A14PrpmZkvvvZ5NB4BLgODWRrnAQ8Di8Byt8F9wC7gUNfAoZQVYExX17oGBvYkwMPdBA8QO00B9VDKroH7damAm0DVB88KNhQFnACaQNAROJSyDIzragB8A4b0IMXBQBk4o7WE2N69p2dmUjtlAVeAbfo5IE4D3ljOkiuOJaDGrkO+Tk6NE1439jU2DciQL7KY4mICaORqKOXhQuCEc8xKS4ID4FMhMEAo5Q5gi+WvYVozyQ8GLgA7LO/LwGon4H'+
			'PAJsv7Kq1oKQTep8v2VVbW8PzgUMoSrYWRFDPI7lBKm/3TwcSr62gK+ApwpAj4FLH3FetDDeJk9LMIeITYlu32NeAB4HgRcDLx2GQrKQ60gkMp+4CTuurKu4r4q50dDBwAzupnl8YVYCUveBC/KQDGQymtKdQF3q9L31b0EmDNctZEr+r1g6ysGLBbY6WWXcpZwT3nzz8v7dyJB9okCAZUrWZ1oBVcnZhosJqavAwcKpVvmcFqfn4RpWq0NirrmhCb4Dul0leG1vvP/jFtNn0bP2P7adbW3toauKJiFnjpAQM8E6Ojf/KAG6THr+lntW8a+AfwpE07EvVAlx/ygleBvSlggI/A47xggLvAAm6TvADe5QILIQAmgRqtaRsxA80JIZxLPk3jKq1wbAcrIPWslwZ+g3uqv4FHRcGb9Q/W23kBeFAU/At46gDXhRBLURQ5'+
			'Y90JFkI0cO+DnQvDC9Zyi3jaRpT+3deDF4oKgGn+935Dg+95+nnBI0Bvom5C7X1HYCHEG2A+8aqs+3iPpqngKIr6+H8bZQ6O3vseJziKIoQQq9jvJyYLgxNSB/4m6su0DpP5wUIIoigCuEGcn5u6/TRxdBQDawmEELPECcnYdVII4b0M8YFVFEVV4HWirTO5ZwbrvNwkPuCYvFDrGKxlDZjSz0t08RarQeuC6SGeE2keMMArXU7p2O4crO18G5gDrJuTQmAt/cB24HO3wUvAHVI2KO0SbNT98T9BL9VJVsQP9gAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="compass 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 9px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._compass_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._compass_2.onclick=function (e) {
			player.openNext("{node17}","-147.53\/-90\/120");
		}
		me._compass_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._compass.appendChild(me._compass_2);
		me._hide_controller_container.appendChild(me._compass);
		el=me._thumbnail_menu=document.createElement('div');
		els=me._thumbnail_menu__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		hs ='';
		hs+='height : 73px;';
		hs+='left : 50%;';
		hs+='margin-left : -57.5px;';
		hs+='margin-top : -36.5px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 50%;';
		hs+='width : 115px;';
		hs+="";
		els.setAttribute('style',hs);
		me._thumbnail_menu.ggScrollByX = function(diffX) {
			if(!me._thumbnail_menu.ggHorScrollVisible || diffX == 0 || me._thumbnail_menu.ggHPercentVisible >= 1.0) return;
			me._thumbnail_menu.ggScrollPosX = (me._thumbnail_menu__horScrollFg.offsetLeft + diffX);
			me._thumbnail_menu.ggScrollPosX = Math.max(me._thumbnail_menu.ggScrollPosX, 0);
			me._thumbnail_menu.ggScrollPosX = Math.min(me._thumbnail_menu.ggScrollPosX, me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth);
			me._thumbnail_menu__horScrollFg.style.left = me._thumbnail_menu.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_menu.ggScrollPosX / (me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth);
			me._thumbnail_menu__content.style.left = -(Math.round((me._thumbnail_menu.ggContentWidth * (1.0 - me._thumbnail_menu.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_menu.ggContentLeftOffset + 'px';
			me._thumbnail_menu.ggScrollPosXPercent = (me._thumbnail_menu__horScrollFg.offsetLeft / me._thumbnail_menu__horScrollBg.offsetWidth);
		}
		me._thumbnail_menu.ggScrollByXSmooth = function(diffX) {
			if(!me._thumbnail_menu.ggHorScrollVisible || diffX == 0 || me._thumbnail_menu.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._thumbnail_menu.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._thumbnail_menu.ggScrollPosX >= me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth)) {
					me._thumbnail_menu.ggScrollPosX = Math.min(me._thumbnail_menu.ggScrollPosX, me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._thumbnail_menu.ggScrollPosX <= 0)) {
					me._thumbnail_menu.ggScrollPosX = Math.max(me._thumbnail_menu.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._thumbnail_menu__horScrollFg.style.left = me._thumbnail_menu.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_menu.ggScrollPosX / (me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth);
			me._thumbnail_menu__content.style.left = -(Math.round((me._thumbnail_menu.ggContentWidth * (1.0 - me._thumbnail_menu.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_menu.ggContentLeftOffset + 'px';
			me._thumbnail_menu.ggScrollPosXPercent = (me._thumbnail_menu__horScrollFg.offsetLeft / me._thumbnail_menu__horScrollBg.offsetWidth);
			}, 10);
		}
		me._thumbnail_menu.ggScrollByY = function(diffY) {
			if(!me._thumbnail_menu.ggVertScrollVisible || diffY == 0 || me._thumbnail_menu.ggVPercentVisible >= 1.0) return;
			me._thumbnail_menu.ggScrollPosY = (me._thumbnail_menu__vertScrollFg.offsetTop + diffY);
			me._thumbnail_menu.ggScrollPosY = Math.max(me._thumbnail_menu.ggScrollPosY, 0);
			me._thumbnail_menu.ggScrollPosY = Math.min(me._thumbnail_menu.ggScrollPosY, me._thumbnail_menu__vertScrollBg.offsetHeight - me._thumbnail_menu__vertScrollFg.offsetHeight);
			me._thumbnail_menu__vertScrollFg.style.top = me._thumbnail_menu.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_menu.ggScrollPosY / (me._thumbnail_menu__vertScrollBg.offsetHeight - me._thumbnail_menu__vertScrollFg.offsetHeight);
			me._thumbnail_menu__content.style.top = -(Math.round((me._thumbnail_menu.ggContentHeight * (1.0 - me._thumbnail_menu.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_menu.ggContentTopOffset + 'px';
			me._thumbnail_menu.ggScrollPosYPercent = (me._thumbnail_menu__vertScrollFg.offsetTop / me._thumbnail_menu__vertScrollBg.offsetHeight);
		}
		me._thumbnail_menu.ggScrollByYSmooth = function(diffY) {
			if(!me._thumbnail_menu.ggVertScrollVisible || diffY == 0 || me._thumbnail_menu.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._thumbnail_menu.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._thumbnail_menu.ggScrollPosY >= me._thumbnail_menu__vertScrollBg.offsetHeight - me._thumbnail_menu__vertScrollFg.offsetHeight)) {
					me._thumbnail_menu.ggScrollPosY = Math.min(me._thumbnail_menu.ggScrollPosY, me._thumbnail_menu__vertScrollBg.offsetHeight - me._thumbnail_menu__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._thumbnail_menu.ggScrollPosY <= 0)) {
					me._thumbnail_menu.ggScrollPosY = Math.max(me._thumbnail_menu.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._thumbnail_menu__vertScrollFg.style.top = me._thumbnail_menu.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_menu.ggScrollPosY / (me._thumbnail_menu__vertScrollBg.offsetHeight - me._thumbnail_menu__vertScrollFg.offsetHeight);
			me._thumbnail_menu__content.style.top = -(Math.round((me._thumbnail_menu.ggContentHeight * (1.0 - me._thumbnail_menu.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_menu.ggContentTopOffset + 'px';
			me._thumbnail_menu.ggScrollPosYPercent = (me._thumbnail_menu__vertScrollFg.offsetTop / me._thumbnail_menu__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._thumbnail_menu.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._thumbnail_menu.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._thumbnail_menu.ggHPercentVisible);
					me._thumbnail_menu.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._thumbnail_menu.clientWidth - (me._thumbnail_menu.ggVertScrollVisible ? 15 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbnail_menu.clientWidth - (me._thumbnail_menu.ggVertScrollVisible ? 15 : 0))) * me._thumbnail_menu.ggHPercentVisible);
					me._thumbnail_menu.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbnail_menu.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbnail_menu.ggVPercentVisible);
					me._thumbnail_menu.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbnail_menu.clientHeight - (me._thumbnail_menu.ggHorScrollVisible ? 15 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbnail_menu.clientHeight - (me._thumbnail_menu.ggHorScrollVisible ? 15 : 0))) * me._thumbnail_menu.ggVPercentVisible);
					me._thumbnail_menu.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._thumbnail_menu.ggDragLastX = t ? t[0].clientX : e.clientX;
			me._thumbnail_menu.ggDragLastY = t ? t[0].clientY : e.clientY;
			me._thumbnail_menu__content.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_menu.ggDragInertiaX *= 0.65;
					me._thumbnail_menu.ggDragInertiaY *= 0.65;
					me._thumbnail_menu.ggScrollByX(me._thumbnail_menu.ggDragInertiaX);
					me._thumbnail_menu.ggScrollByY(me._thumbnail_menu.ggDragInertiaY);
					if (Math.abs(me._thumbnail_menu.ggDragInertiaX) < 1.0 && Math.abs(me._thumbnail_menu.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				me._thumbnail_menu__content.ontouchend = null;
				me._thumbnail_menu__content.ontouchmove = null;
				me._thumbnail_menu__content.onpointerup = null;
				me._thumbnail_menu__content.onpointermove = null;
			}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			me._thumbnail_menu__content.onpointerup = me._thumbnail_menu__content.ontouchend;
		}
			me._thumbnail_menu__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = ((t ? t[0].clientX : e.clientX) - me._thumbnail_menu.ggDragLastX) * me._thumbnail_menu.ggHPercentVisible;
				var diffY = ((t ? t[0].clientY : e.clientY) - me._thumbnail_menu.ggDragLastY) * me._thumbnail_menu.ggVPercentVisible;
				me._thumbnail_menu.ggDragInertiaX = -diffX;
				me._thumbnail_menu.ggDragInertiaY = -diffY;
				me._thumbnail_menu.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._thumbnail_menu.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._thumbnail_menu.ggScrollByX(-diffX);
				me._thumbnail_menu.ggScrollByY(-diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._thumbnail_menu__content.onpointermove = me._thumbnail_menu__content.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = els.ontouchstart;
		}
		elHorScrollBg = me._thumbnail_menu__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 576px; height: 15px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._thumbnail_menu__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 576px; height: 15px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		me._thumbnail_menu.ggScrollPosX = 0;
		me._thumbnail_menu.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnail_menu.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_menu.ggDragInertiaX *= 0.65;
					me._thumbnail_menu.ggScrollByX(me._thumbnail_menu.ggDragInertiaX);
					if (Math.abs(me._thumbnail_menu.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._thumbnail_menu.ggDragLastX;
				me._thumbnail_menu.ggDragInertiaX = diffX;
				me._thumbnail_menu.ggDragLastX = e.clientX;
				me._thumbnail_menu.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnail_menu.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_menu.ggDragInertiaX *= 0.65;
					me._thumbnail_menu.ggScrollByX(me._thumbnail_menu.ggDragInertiaX);
					if (Math.abs(me._thumbnail_menu.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._thumbnail_menu.ggDragLastX;
				me._thumbnail_menu.ggDragInertiaX = diffX;
				me._thumbnail_menu.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._thumbnail_menu.ggScrollByX(diffX);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._thumbnail_menu.ggScrollWidth;
			if (e.offsetX < me._thumbnail_menu.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_menu.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnail_menu__horScrollBg.getBoundingClientRect();
			var diffX = me._thumbnail_menu.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._thumbnail_menu.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_menu.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._thumbnail_menu.ggScrollByXSmooth(30 * me._thumbnail_menu.ggHPercentVisible * wheelDelta);
		});
		elCornerBg = me._thumbnail_menu__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 15px; height: 15px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="thumbnail_menu";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='height : 84px;';
		hs+='left : 5.16%;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_menu.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_menu.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._thumbnail_menu.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._thumbnail_menu.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._thumbnail_menu.style[domTransition]='left 0s, bottom 0s, opacity 500ms ease 0ms';
				if (me._thumbnail_menu.ggCurrentLogicStatePosition == 0) {
					me._thumbnail_menu.style.left='5%';
					me._thumbnail_menu.style.bottom='20px';
				}
				else {
					me._thumbnail_menu.style.left='5.16%';
					me._thumbnail_menu.style.bottom='0px';
				}
			}
		}
		me._thumbnail_menu.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_thumbnail_menu') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_menu.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_menu.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_menu.style[domTransition]='left 0s, bottom 0s, opacity 500ms ease 0ms';
				if (me._thumbnail_menu.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._thumbnail_menu.style.opacity == 0.0) { me._thumbnail_menu.style.visibility="hidden"; } }, 505);
					me._thumbnail_menu.style.opacity=0;
				}
				else {
					me._thumbnail_menu.style.visibility=me._thumbnail_menu.ggVisible?'inherit':'hidden';
					me._thumbnail_menu.style.opacity=1;
				}
			}
		}
		me._thumbnail_menu.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				this.ggContentWidth = 0;
				this.ggContentHeight = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none') {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				var contentWidth = maxX - minX;
				var contentHeight = maxY - minY;
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.width = contentWidth + 'px';
				this.ggContent.style.height = contentHeight + 'px';
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 15;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = ((contentWidth/-2) - (this.ggVertScrollVisible ? (15/2) : 0)) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				var containerHeight = this.clientHeight;
				if (this.ggHorScrollVisible) containerHeight -= 15;
				if (contentHeight < containerHeight) {
					this.ggContent.style.top = '50%';
					this.ggContent.style.marginTop = ((contentHeight/-2) - (this.ggHorScrollVisible ? (15/2) : 0))  + 'px';
				}
				else {
					this.ggContent.style.top = this.ggContentTopOffset + 'px';
					this.ggContent.style.marginTop = '0px';
				}
				if (contentWidth > Math.ceil(offsetWidthWithScale)) {
					me._thumbnail_menu__horScrollBg.style.visibility = 'inherit';
					me._thumbnail_menu__horScrollFg.style.visibility = 'inherit';
					me._thumbnail_menu.ggHorScrollVisible = true;
				} else {
					me._thumbnail_menu__horScrollBg.style.visibility = 'hidden';
					me._thumbnail_menu__horScrollFg.style.visibility = 'hidden';
					me._thumbnail_menu.ggHorScrollVisible = false;
				}
				if(me._thumbnail_menu.ggHorScrollVisible) {
					me._thumbnail_menu.ggAvailableHeight = me._thumbnail_menu.clientHeight - 15;
					if (me._thumbnail_menu.ggVertScrollVisible) {
						me._thumbnail_menu.ggAvailableWidth = me._thumbnail_menu.clientWidth - 15;
						me._thumbnail_menu.ggAvailableWidthWithScale = me._thumbnail_menu.getBoundingClientRect().width - me._thumbnail_menu__horScrollBg.getBoundingClientRect().height;
					} else {
						me._thumbnail_menu.ggAvailableWidth = me._thumbnail_menu.clientWidth;
						me._thumbnail_menu.ggAvailableWidthWithScale = me._thumbnail_menu.getBoundingClientRect().width;
					}
					me._thumbnail_menu__horScrollBg.style.width = me._thumbnail_menu.ggAvailableWidth + 'px';
					me._thumbnail_menu.ggHPercentVisible = contentWidth != 0 ? me._thumbnail_menu.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me._thumbnail_menu.ggHPercentVisible > 1.0) me._thumbnail_menu.ggHPercentVisible = 1.0;
					me._thumbnail_menu.ggScrollWidth = Math.round(me._thumbnail_menu__horScrollBg.offsetWidth * me._thumbnail_menu.ggHPercentVisible);
					me._thumbnail_menu__horScrollFg.style.width = me._thumbnail_menu.ggScrollWidth + 'px';
					me._thumbnail_menu.ggScrollPosX = me._thumbnail_menu.ggScrollPosXPercent * me._thumbnail_menu.ggAvailableWidth;
					me._thumbnail_menu.ggScrollPosX = Math.min(me._thumbnail_menu.ggScrollPosX, me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth);
					me._thumbnail_menu__horScrollFg.style.left = me._thumbnail_menu.ggScrollPosX + 'px';
					if (me._thumbnail_menu.ggHPercentVisible < 1.0) {
						let percentScrolled = me._thumbnail_menu.ggScrollPosX / (me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth);
						me._thumbnail_menu__content.style.left = -(Math.round((me._thumbnail_menu.ggContentWidth * (1.0 - me._thumbnail_menu.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me._thumbnail_menu.ggAvailableHeight = me._thumbnail_menu.clientHeight;
					me._thumbnail_menu.ggScrollPosX = 0;
					me._thumbnail_menu.ggScrollPosXPercent = 0.0;
				}
				if(horScrollWasVisible != me._thumbnail_menu.ggHorScrollVisible || vertScrollWasVisible != me._thumbnail_menu.ggVertScrollVisible) {
					me.updateSize(me._thumbnail_menu);
					me._thumbnail_menu.ggUpdatePosition();
				}
			}
		}
		el=me._thumbnail_cloner=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggWidth = 96;
		el.ggHeight = 62;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		me._thumbnail_cloner.callChildLogicBlocks_changenode = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_title && me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_alpha) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_alpha();
					}
					if (me._thumbnail_cloner.ggInstances[i]._checkmark_tick && me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_alpha) {
						me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_alpha();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_active && me._thumbnail_cloner.ggInstances[i]._thumbnail_active.logicBlock_bordercolor) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_active.logicBlock_bordercolor();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_title && me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_alpha) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_alpha();
					}
					if (me._thumbnail_cloner.ggInstances[i]._checkmark_tick && me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_alpha) {
						me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_alpha();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_active = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_active && me._thumbnail_cloner.ggInstances[i]._thumbnail_active.logicBlock_bordercolor) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_active.logicBlock_bordercolor();
					}
					if (me._thumbnail_cloner.ggInstances[i]._checkmark_tick && me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_visible) {
						me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_visible();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_changevisitednodes = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._checkmark_tick && me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_visible) {
						me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_visible();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_activehotspotchanged = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_title && me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_alpha) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_alpha();
					}
					if (me._thumbnail_cloner.ggInstances[i]._checkmark_tick && me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_alpha) {
						me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_alpha();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_varchanged_opt_thumbnail_menu_tooltip = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_title && me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_alpha) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_alpha();
					}
				}
			}
		}
		el.ggUpdate = function(filter) {
			if(me._thumbnail_cloner.ggUpdating == true) return;
			me._thumbnail_cloner.ggUpdating = true;
			var el=me._thumbnail_cloner;
			var curNumRows = 0;
			curNumRows = el.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._thumbnail_cloner.ggUpdating = false;
				return;
			} else {
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			for (var i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) == -1) passed = false;
					}
				}
				if (passed) {
				var parameter={};
				parameter.top=(row * me._thumbnail_cloner.ggHeight) + 'px';
				parameter.left=(column * me._thumbnail_cloner.ggWidth) + 'px';
				parameter.width=me._thumbnail_cloner.ggWidth + 'px';
				parameter.height=me._thumbnail_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_thumbnail_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
				}
			}
			me._thumbnail_cloner.callChildLogicBlocks_changenode();
			me._thumbnail_cloner.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner.callChildLogicBlocks_active();
			me._thumbnail_cloner.callChildLogicBlocks_changevisitednodes();
			me._thumbnail_cloner.callChildLogicBlocks_activehotspotchanged();
			me._thumbnail_cloner.callChildLogicBlocks_varchanged_opt_thumbnail_menu_tooltip();
			me._thumbnail_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._thumbnail_cloner.parentNode.classList.contains('ggskin_subelement') && me._thumbnail_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._thumbnail_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="thumbnail_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 62px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 96px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._thumbnail_cloner.childNodes.length; i++) {
				var child=me._thumbnail_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._thumbnail_cloner.ggUpdatePosition=function (useTransition) {
				me._thumbnail_cloner.ggUpdate();
		}
		me._thumbnail_cloner.ggNodeChange=function () {
			me._thumbnail_cloner.ggUpdateConditionNodeChange();
		}
		me._thumbnail_menu__content.appendChild(me._thumbnail_cloner);
		me._hide_controller_container.appendChild(me._thumbnail_menu);
		me.divSkin.appendChild(me._hide_controller_container);
		el=me._show_controller_button=document.createElement('div');
		els=me._show_controller_button__img=document.createElement('img');
		els.className='ggskin ggskin_show_controller_button';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="show_controller_button";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : 10px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._show_controller_button.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._show_controller_button.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['show_controller_button'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._show_controller_button.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._show_controller_button.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._show_controller_button.style[domTransition]='opacity 200ms ease 0ms';
				if (me._show_controller_button.ggCurrentLogicStateAlpha == 0) {
					me._show_controller_button.style.visibility=me._show_controller_button.ggVisible?'inherit':'hidden';
					me._show_controller_button.style.opacity=1;
				}
				else {
					me._show_controller_button.style.visibility=me._show_controller_button.ggVisible?'inherit':'hidden';
					me._show_controller_button.style.opacity=0.8;
				}
			}
		}
		me._show_controller_button.onclick=function (e) {
			player.setVariableValue('vis_auto_hide_controller', !player.getVariableValue('vis_auto_hide_controller'));
		}
		me._show_controller_button.onmouseover=function (e) {
			me.elementMouseOver['show_controller_button']=true;
			me._show_controller_button.logicBlock_alpha();
		}
		me._show_controller_button.onmouseout=function (e) {
			me.elementMouseOver['show_controller_button']=false;
			me._show_controller_button.logicBlock_alpha();
		}
		me._show_controller_button.ontouchend=function (e) {
			me.elementMouseOver['show_controller_button']=false;
			me._show_controller_button.logicBlock_alpha();
		}
		me._show_controller_button.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._show_controller_button);
		el=me._screentint_info=document.createElement('div');
		el.ggId="screentint_info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 132.292%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 174.688%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._screentint_info.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screentint_info.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_info_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._screentint_info.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._screentint_info.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._screentint_info.style[domTransition]='';
				if (me._screentint_info.ggCurrentLogicStateVisible == 0) {
					me._screentint_info.style.visibility=(Number(me._screentint_info.style.opacity)>0||!me._screentint_info.style.opacity)?'inherit':'hidden';
					me._screentint_info.ggVisible=true;
				}
				else {
					me._screentint_info.style.visibility="hidden";
					me._screentint_info.ggVisible=false;
				}
			}
		}
		me._screentint_info.onclick=function (e) {
			player.setVariableValue('vis_info_popup', false);
			player.stopAutorotate();
		}
		me._screentint_info.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._screentint_info);
		el=me._information=document.createElement('div');
		el.ggId="information";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 250px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._information.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._information.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_info_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._information.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._information.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._information.style[domTransition]='';
				if (me._information.ggCurrentLogicStateVisible == 0) {
					me._information.style.visibility=(Number(me._information.style.opacity)>0||!me._information.style.opacity)?'inherit':'hidden';
					me._information.ggVisible=true;
				}
				else {
					me._information.style.visibility="hidden";
					me._information.ggVisible=false;
				}
			}
		}
		me._information.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._informationbg=document.createElement('div');
		el.ggId="informationbg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 10px;';
		hs+='border-radius : 10px;';
		hs+='background : #414141;';
		hs+='border : 2px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 250px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._informationbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._informationbg.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_info_popup') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._informationbg.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._informationbg.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._informationbg.style[domTransition]='opacity 200ms ease 0ms';
				if (me._informationbg.ggCurrentLogicStateAlpha == 0) {
					me._informationbg.style.visibility=me._informationbg.ggVisible?'inherit':'hidden';
					me._informationbg.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._informationbg.style.opacity == 0.0) { me._informationbg.style.visibility="hidden"; } }, 205);
					me._informationbg.style.opacity=0;
				}
			}
		}
		me._informationbg.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._informationbg);
		el=me._info_text_body=document.createElement('div');
		els=me._info_text_body__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_text_body";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1.2,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 191px;';
		hs+='left : 37px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : 242px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 242px;';
		hs+='height: 191px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="\u5236\u4f5c\u8005\uff1aFosvcat<br\/>\u62cd\u6444\u5730\uff1a\u5c71\u4e1c\u804a\u57ce\u5965\u68ee\u82b1\u56ed<br\/><br\/>\u62cd\u6444\u65e5\u671f\uff1a2023\/10\/18<br\/>\u6784\u5efa\u65e5\u671f\uff1a2023\/10\/20<br\/><br\/>\u5236\u4f5c\u8f6f\u4ef6\uff1aPano2VR<br\/>\t\tPhotoshop<br\/>\u62cd\u6444\u8bbe\u5907\uff1aInsta360 x3<br\/>\t\tDJI mini2<br\/><br\/>\u90ae\u7bb1\uff1aFosvcat@gmail.com<br\/>Telegram\uff1at.me\/Fosvcat<br\/><br\/>\u6b64\u5168\u666f\u5bfc\u89c8\u975e\u5546\u4e1a\u9879\u76ee\uff0c<br\/>\u4efb\u4f55\u4eba\u53ef\u4ee5\u968f\u610f\u4f20\u64ad\u8be5\u7a0b\u5e8f\u3002";
		el.appendChild(els);
		me._info_text_body.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_text_body.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_info_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._info_text_body.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._info_text_body.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._info_text_body.style[domTransition]='opacity 200ms ease 0ms';
				if (me._info_text_body.ggCurrentLogicStateVisible == 0) {
					me._info_text_body.style.visibility=(Number(me._info_text_body.style.opacity)>0||!me._info_text_body.style.opacity)?'inherit':'hidden';
					me._info_text_body.ggVisible=true;
				}
				else {
					me._info_text_body.style.visibility="hidden";
					me._info_text_body.ggVisible=false;
				}
			}
		}
		me._info_text_body.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_info_popup') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._info_text_body.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._info_text_body.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._info_text_body.style[domTransition]='opacity 200ms ease 0ms';
				if (me._info_text_body.ggCurrentLogicStateAlpha == 0) {
					me._info_text_body.style.visibility=me._info_text_body.ggVisible?'inherit':'hidden';
					me._info_text_body.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._info_text_body.style.opacity == 0.0) { me._info_text_body.style.visibility="hidden"; } }, 205);
					me._info_text_body.style.opacity=0;
				}
			}
		}
		me._info_text_body.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._info_text_body);
		el=me._info_title=document.createElement('div');
		els=me._info_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_title";
		el.ggDx=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 16px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		hs+='font-weight: bold;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 40px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 17px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\t\u5173\u4e8e";
		el.appendChild(els);
		me._info_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_title.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_info_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._info_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._info_title.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._info_title.style[domTransition]='opacity 200ms ease 0ms';
				if (me._info_title.ggCurrentLogicStateVisible == 0) {
					me._info_title.style.visibility=(Number(me._info_title.style.opacity)>0||!me._info_title.style.opacity)?'inherit':'hidden';
					me._info_title.ggVisible=true;
				}
				else {
					me._info_title.style.visibility="hidden";
					me._info_title.ggVisible=false;
				}
			}
		}
		me._info_title.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_info_popup') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._info_title.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._info_title.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._info_title.style[domTransition]='opacity 200ms ease 0ms';
				if (me._info_title.ggCurrentLogicStateAlpha == 0) {
					me._info_title.style.visibility=me._info_title.ggVisible?'inherit':'hidden';
					me._info_title.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._info_title.style.opacity == 0.0) { me._info_title.style.visibility="hidden"; } }, 205);
					me._info_title.style.opacity=0;
				}
			}
		}
		me._info_title.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._information.appendChild(me._info_title);
		el=me._ht_info_close=document.createElement('div');
		els=me._ht_info_close__img=document.createElement('img');
		els.className='ggskin ggskin_ht_info_close';
		hs='data:image/png;base64,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'+
			'lFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._ht_info_close__img.ggOverSrc=hs;
		el.ggId="ht_info_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : 8px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_info_close.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_info_popup') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_info_close.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_info_close.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_info_close.style[domTransition]='opacity 200ms ease 0ms';
				if (me._ht_info_close.ggCurrentLogicStateAlpha == 0) {
					me._ht_info_close.style.visibility=me._ht_info_close.ggVisible?'inherit':'hidden';
					me._ht_info_close.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_info_close.style.opacity == 0.0) { me._ht_info_close.style.visibility="hidden"; } }, 205);
					me._ht_info_close.style.opacity=0;
				}
			}
		}
		me._ht_info_close.onclick=function (e) {
			player.setVariableValue('vis_info_popup', false);
			player.stopAutorotate();
		}
		me._ht_info_close.onmouseover=function (e) {
			me._ht_info_close__img.src=me._ht_info_close__img.ggOverSrc;
		}
		me._ht_info_close.onmouseout=function (e) {
			me._ht_info_close__img.src=me._ht_info_close__img.ggNormalSrc;
		}
		me._ht_info_close.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._ht_info_close);
		el=me._zuozhe=document.createElement('div');
		els=me._zuozhe__img=document.createElement('img');
		els.className='ggskin ggskin_zuozhe';
		hs=basePath + 'images/zuozhe.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="zuozhe";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 36px;';
		hs+='left : 13px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : hidden;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._zuozhe.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zuozhe.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_info_popup') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._zuozhe.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._zuozhe.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._zuozhe.style[domTransition]='opacity 200ms ease 0ms';
				if (me._zuozhe.ggCurrentLogicStateAlpha == 0) {
					me._zuozhe.style.visibility=me._zuozhe.ggVisible?'inherit':'hidden';
					me._zuozhe.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._zuozhe.style.opacity == 0.0) { me._zuozhe.style.visibility="hidden"; } }, 205);
					me._zuozhe.style.opacity=0;
				}
			}
		}
		me._zuozhe.onclick=function (e) {
			player.openUrl("https:\/\/t.me\/Fosvcat","");
		}
		me._zuozhe.onmouseover=function (e) {
			me.elementMouseOver['zuozhe']=true;
		}
		me._zuozhe.onmouseout=function (e) {
			player.setVariableValue('zuozhe', false);
			me.elementMouseOver['zuozhe']=false;
		}
		me._zuozhe.ontouchend=function (e) {
			me.elementMouseOver['zuozhe']=false;
		}
		me._zuozhe.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._zuozhe);
		el=me._zuozhe_telegram=document.createElement('div');
		els=me._zuozhe_telegram__img=document.createElement('img');
		els.className='ggskin ggskin_zuozhe_telegram';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="zuozhe_telegram";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 36px;';
		hs+='left : 13px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : hidden;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._zuozhe_telegram.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zuozhe_telegram.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('zuozhe') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._zuozhe_telegram.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._zuozhe_telegram.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._zuozhe_telegram.style[domTransition]='opacity 300ms ease 0ms';
				if (me._zuozhe_telegram.ggCurrentLogicStateAlpha == 0) {
					me._zuozhe_telegram.style.visibility=me._zuozhe_telegram.ggVisible?'inherit':'hidden';
					me._zuozhe_telegram.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._zuozhe_telegram.style.opacity == 0.0) { me._zuozhe_telegram.style.visibility="hidden"; } }, 305);
					me._zuozhe_telegram.style.opacity=0;
				}
			}
		}
		me._zuozhe_telegram.onclick=function (e) {
			player.openUrl("https:\/\/t.me\/Fosvcat","");
		}
		me._zuozhe_telegram.onmouseover=function (e) {
			me.elementMouseOver['zuozhe_telegram']=true;
		}
		me._zuozhe_telegram.onmouseout=function (e) {
			player.setVariableValue('zuozhe', false);
			me.elementMouseOver['zuozhe_telegram']=false;
		}
		me._zuozhe_telegram.ontouchend=function (e) {
			me.elementMouseOver['zuozhe_telegram']=false;
		}
		me._zuozhe_telegram.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._zuozhe_telegram);
		me.divSkin.appendChild(me._information);
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
		player.addListener('configloaded', function() {
			me._thumbnail_cloner.ggUpdate();
		});
		player.addListener('imagesready', function() {
			me._timer025.ggTimestamp=me.ggCurrentTime;
			me._timer025.ggTimeout=20;
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
			me._thumbnail_menu.ggUpdatePosition();
		});
		player.addListener('beforechangenode', function() {
			if (
				(
					((player.getVariableValue('vis_loader') == true))
				)
			) {
				me._loading.style[domTransition]='none';
				me._loading.style.visibility=(Number(me._loading.style.opacity)>0||!me._loading.style.opacity)?'inherit':'hidden';
				me._loading.ggVisible=true;
			}
		});
		player.addListener('tilesrequested', function() {
			player.setVariableValue('vis_loader', false);
		});
		player.addListener('varchanged_vis_auto_hide_controller', function() {var flag=me._show_controller_button.ggAngleActive;if (player.transitionsDisabled) {	me._show_controller_button.style[domTransition]='none';} else {	me._show_controller_button.style[domTransition]='all 100ms ease-out 0ms';}if (flag) {	me._show_controller_button.ggParameter.a=0;	me._show_controller_button.style[domTransform]=parameterToTransform(me._show_controller_button.ggParameter);} else {	me._show_controller_button.ggParameter.a="45.0000";	me._show_controller_button.style[domTransform]=parameterToTransform(me._show_controller_button.ggParameter);}me._show_controller_button.ggAngleActive=!flag;});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	me.callChildLogicBlocksHotspot_help_changenode = function(){
		if(hotspotTemplates['help']) {
			var i;
			for(i = 0; i < hotspotTemplates['help'].length; i++) {
				if (hotspotTemplates['help'][i]._helpimg && hotspotTemplates['help'][i]._helpimg.logicBlock_visible) {
					hotspotTemplates['help'][i]._helpimg.logicBlock_visible();
				}
				if (hotspotTemplates['help'][i]._bangzhuyidong && hotspotTemplates['help'][i]._bangzhuyidong.logicBlock_alpha) {
					hotspotTemplates['help'][i]._bangzhuyidong.logicBlock_alpha();
				}
				if (hotspotTemplates['help'][i]._bangzhu && hotspotTemplates['help'][i]._bangzhu.logicBlock_alpha) {
					hotspotTemplates['help'][i]._bangzhu.logicBlock_alpha();
				}
				if (hotspotTemplates['help'][i]._helpimgx && hotspotTemplates['help'][i]._helpimgx.logicBlock_visible) {
					hotspotTemplates['help'][i]._helpimgx.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_help_configloaded = function(){
		if(hotspotTemplates['help']) {
			var i;
			for(i = 0; i < hotspotTemplates['help'].length; i++) {
				if (hotspotTemplates['help'][i]._bangzhuyidong && hotspotTemplates['help'][i]._bangzhuyidong.logicBlock_visible) {
					hotspotTemplates['help'][i]._bangzhuyidong.logicBlock_visible();
				}
				if (hotspotTemplates['help'][i]._bangzhu && hotspotTemplates['help'][i]._bangzhu.logicBlock_visible) {
					hotspotTemplates['help'][i]._bangzhu.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_help_varchanged_help = function(){
		if(hotspotTemplates['help']) {
			var i;
			for(i = 0; i < hotspotTemplates['help'].length; i++) {
				if (hotspotTemplates['help'][i]._helpimg && hotspotTemplates['help'][i]._helpimg.logicBlock_visible) {
					hotspotTemplates['help'][i]._helpimg.logicBlock_visible();
				}
				if (hotspotTemplates['help'][i]._bangzhuyidong && hotspotTemplates['help'][i]._bangzhuyidong.logicBlock_alpha) {
					hotspotTemplates['help'][i]._bangzhuyidong.logicBlock_alpha();
				}
				if (hotspotTemplates['help'][i]._bangzhu && hotspotTemplates['help'][i]._bangzhu.logicBlock_alpha) {
					hotspotTemplates['help'][i]._bangzhu.logicBlock_alpha();
				}
				if (hotspotTemplates['help'][i]._helpimgx && hotspotTemplates['help'][i]._helpimgx.logicBlock_visible) {
					hotspotTemplates['help'][i]._helpimgx.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_cheku_changenode = function(){
		if(hotspotTemplates['cheku']) {
			var i;
			for(i = 0; i < hotspotTemplates['cheku'].length; i++) {
				if (hotspotTemplates['cheku'][i]._image_1_5 && hotspotTemplates['cheku'][i]._image_1_5.logicBlock_scaling) {
					hotspotTemplates['cheku'][i]._image_1_5.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_cheku_configloaded = function(){
		if(hotspotTemplates['cheku']) {
			var i;
			for(i = 0; i < hotspotTemplates['cheku'].length; i++) {
				if (hotspotTemplates['cheku'][i]._text_1_5 && hotspotTemplates['cheku'][i]._text_1_5.logicBlock_visible) {
					hotspotTemplates['cheku'][i]._text_1_5.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_cheku_varchanged_var_ht = function(){
		if(hotspotTemplates['cheku']) {
			var i;
			for(i = 0; i < hotspotTemplates['cheku'].length; i++) {
				if (hotspotTemplates['cheku'][i]._image_1_5 && hotspotTemplates['cheku'][i]._image_1_5.logicBlock_scaling) {
					hotspotTemplates['cheku'][i]._image_1_5.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_yuanxing_changenode = function(){
		if(hotspotTemplates['yuanxing']) {
			var i;
			for(i = 0; i < hotspotTemplates['yuanxing'].length; i++) {
				if (hotspotTemplates['yuanxing'][i]._image_1_4 && hotspotTemplates['yuanxing'][i]._image_1_4.logicBlock_scaling) {
					hotspotTemplates['yuanxing'][i]._image_1_4.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_yuanxing_configloaded = function(){
		if(hotspotTemplates['yuanxing']) {
			var i;
			for(i = 0; i < hotspotTemplates['yuanxing'].length; i++) {
				if (hotspotTemplates['yuanxing'][i]._text_1_4 && hotspotTemplates['yuanxing'][i]._text_1_4.logicBlock_visible) {
					hotspotTemplates['yuanxing'][i]._text_1_4.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_yuanxing_varchanged_var_ht = function(){
		if(hotspotTemplates['yuanxing']) {
			var i;
			for(i = 0; i < hotspotTemplates['yuanxing'].length; i++) {
				if (hotspotTemplates['yuanxing'][i]._image_1_4 && hotspotTemplates['yuanxing'][i]._image_1_4.logicBlock_scaling) {
					hotspotTemplates['yuanxing'][i]._image_1_4.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_yuancao_changenode = function(){
		if(hotspotTemplates['yuancao']) {
			var i;
			for(i = 0; i < hotspotTemplates['yuancao'].length; i++) {
				if (hotspotTemplates['yuancao'][i]._image_1_3 && hotspotTemplates['yuancao'][i]._image_1_3.logicBlock_scaling) {
					hotspotTemplates['yuancao'][i]._image_1_3.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_yuancao_configloaded = function(){
		if(hotspotTemplates['yuancao']) {
			var i;
			for(i = 0; i < hotspotTemplates['yuancao'].length; i++) {
				if (hotspotTemplates['yuancao'][i]._text_1_3 && hotspotTemplates['yuancao'][i]._text_1_3.logicBlock_visible) {
					hotspotTemplates['yuancao'][i]._text_1_3.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_yuancao_varchanged_var_ht = function(){
		if(hotspotTemplates['yuancao']) {
			var i;
			for(i = 0; i < hotspotTemplates['yuancao'].length; i++) {
				if (hotspotTemplates['yuancao'][i]._image_1_3 && hotspotTemplates['yuancao'][i]._image_1_3.logicBlock_scaling) {
					hotspotTemplates['yuancao'][i]._image_1_3.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_zoulang_changenode = function(){
		if(hotspotTemplates['zoulang']) {
			var i;
			for(i = 0; i < hotspotTemplates['zoulang'].length; i++) {
				if (hotspotTemplates['zoulang'][i]._image_1_2 && hotspotTemplates['zoulang'][i]._image_1_2.logicBlock_scaling) {
					hotspotTemplates['zoulang'][i]._image_1_2.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_zoulang_configloaded = function(){
		if(hotspotTemplates['zoulang']) {
			var i;
			for(i = 0; i < hotspotTemplates['zoulang'].length; i++) {
				if (hotspotTemplates['zoulang'][i]._text_1_2 && hotspotTemplates['zoulang'][i]._text_1_2.logicBlock_visible) {
					hotspotTemplates['zoulang'][i]._text_1_2.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_zoulang_varchanged_var_ht = function(){
		if(hotspotTemplates['zoulang']) {
			var i;
			for(i = 0; i < hotspotTemplates['zoulang'].length; i++) {
				if (hotspotTemplates['zoulang'][i]._image_1_2 && hotspotTemplates['zoulang'][i]._image_1_2.logicBlock_scaling) {
					hotspotTemplates['zoulang'][i]._image_1_2.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_beimen_changenode = function(){
		if(hotspotTemplates['beimen']) {
			var i;
			for(i = 0; i < hotspotTemplates['beimen'].length; i++) {
				if (hotspotTemplates['beimen'][i]._image_1_1 && hotspotTemplates['beimen'][i]._image_1_1.logicBlock_scaling) {
					hotspotTemplates['beimen'][i]._image_1_1.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_beimen_configloaded = function(){
		if(hotspotTemplates['beimen']) {
			var i;
			for(i = 0; i < hotspotTemplates['beimen'].length; i++) {
				if (hotspotTemplates['beimen'][i]._text_1_1 && hotspotTemplates['beimen'][i]._text_1_1.logicBlock_visible) {
					hotspotTemplates['beimen'][i]._text_1_1.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_beimen_varchanged_var_ht = function(){
		if(hotspotTemplates['beimen']) {
			var i;
			for(i = 0; i < hotspotTemplates['beimen'].length; i++) {
				if (hotspotTemplates['beimen'][i]._image_1_1 && hotspotTemplates['beimen'][i]._image_1_1.logicBlock_scaling) {
					hotspotTemplates['beimen'][i]._image_1_1.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_zhengmen_changenode = function(){
		if(hotspotTemplates['zhengmen']) {
			var i;
			for(i = 0; i < hotspotTemplates['zhengmen'].length; i++) {
				if (hotspotTemplates['zhengmen'][i]._image_1 && hotspotTemplates['zhengmen'][i]._image_1.logicBlock_scaling) {
					hotspotTemplates['zhengmen'][i]._image_1.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_zhengmen_configloaded = function(){
		if(hotspotTemplates['zhengmen']) {
			var i;
			for(i = 0; i < hotspotTemplates['zhengmen'].length; i++) {
				if (hotspotTemplates['zhengmen'][i]._text_1 && hotspotTemplates['zhengmen'][i]._text_1.logicBlock_visible) {
					hotspotTemplates['zhengmen'][i]._text_1.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_zhengmen_varchanged_var_ht = function(){
		if(hotspotTemplates['zhengmen']) {
			var i;
			for(i = 0; i < hotspotTemplates['zhengmen'].length; i++) {
				if (hotspotTemplates['zhengmen'][i]._image_1 && hotspotTemplates['zhengmen'][i]._image_1.logicBlock_scaling) {
					hotspotTemplates['zhengmen'][i]._image_1.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_xiaoting_changenode = function(){
		if(hotspotTemplates['xiaoting']) {
			var i;
			for(i = 0; i < hotspotTemplates['xiaoting'].length; i++) {
				if (hotspotTemplates['xiaoting'][i]._image_1_6 && hotspotTemplates['xiaoting'][i]._image_1_6.logicBlock_scaling) {
					hotspotTemplates['xiaoting'][i]._image_1_6.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_xiaoting_configloaded = function(){
		if(hotspotTemplates['xiaoting']) {
			var i;
			for(i = 0; i < hotspotTemplates['xiaoting'].length; i++) {
				if (hotspotTemplates['xiaoting'][i]._text_1_6 && hotspotTemplates['xiaoting'][i]._text_1_6.logicBlock_visible) {
					hotspotTemplates['xiaoting'][i]._text_1_6.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_xiaoting_varchanged_var_ht = function(){
		if(hotspotTemplates['xiaoting']) {
			var i;
			for(i = 0; i < hotspotTemplates['xiaoting'].length; i++) {
				if (hotspotTemplates['xiaoting'][i]._image_1_6 && hotspotTemplates['xiaoting'][i]._image_1_6.logicBlock_scaling) {
					hotspotTemplates['xiaoting'][i]._image_1_6.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_xibu_changenode = function(){
		if(hotspotTemplates['xibu']) {
			var i;
			for(i = 0; i < hotspotTemplates['xibu'].length; i++) {
				if (hotspotTemplates['xibu'][i]._image_1_7 && hotspotTemplates['xibu'][i]._image_1_7.logicBlock_scaling) {
					hotspotTemplates['xibu'][i]._image_1_7.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_xibu_configloaded = function(){
		if(hotspotTemplates['xibu']) {
			var i;
			for(i = 0; i < hotspotTemplates['xibu'].length; i++) {
				if (hotspotTemplates['xibu'][i]._text_1_7 && hotspotTemplates['xibu'][i]._text_1_7.logicBlock_visible) {
					hotspotTemplates['xibu'][i]._text_1_7.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_xibu_varchanged_var_ht = function(){
		if(hotspotTemplates['xibu']) {
			var i;
			for(i = 0; i < hotspotTemplates['xibu'].length; i++) {
				if (hotspotTemplates['xibu'][i]._image_1_7 && hotspotTemplates['xibu'][i]._image_1_7.logicBlock_scaling) {
					hotspotTemplates['xibu'][i]._image_1_7.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_xiuxi_changenode = function(){
		if(hotspotTemplates['xiuxi']) {
			var i;
			for(i = 0; i < hotspotTemplates['xiuxi'].length; i++) {
				if (hotspotTemplates['xiuxi'][i]._image_1_8 && hotspotTemplates['xiuxi'][i]._image_1_8.logicBlock_scaling) {
					hotspotTemplates['xiuxi'][i]._image_1_8.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_xiuxi_configloaded = function(){
		if(hotspotTemplates['xiuxi']) {
			var i;
			for(i = 0; i < hotspotTemplates['xiuxi'].length; i++) {
				if (hotspotTemplates['xiuxi'][i]._text_1_8 && hotspotTemplates['xiuxi'][i]._text_1_8.logicBlock_visible) {
					hotspotTemplates['xiuxi'][i]._text_1_8.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_xiuxi_varchanged_var_ht = function(){
		if(hotspotTemplates['xiuxi']) {
			var i;
			for(i = 0; i < hotspotTemplates['xiuxi'].length; i++) {
				if (hotspotTemplates['xiuxi'][i]._image_1_8 && hotspotTemplates['xiuxi'][i]._image_1_8.logicBlock_scaling) {
					hotspotTemplates['xiuxi'][i]._image_1_8.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_zhongxin_changenode = function(){
		if(hotspotTemplates['zhongxin']) {
			var i;
			for(i = 0; i < hotspotTemplates['zhongxin'].length; i++) {
				if (hotspotTemplates['zhongxin'][i]._image_1_9 && hotspotTemplates['zhongxin'][i]._image_1_9.logicBlock_scaling) {
					hotspotTemplates['zhongxin'][i]._image_1_9.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_zhongxin_configloaded = function(){
		if(hotspotTemplates['zhongxin']) {
			var i;
			for(i = 0; i < hotspotTemplates['zhongxin'].length; i++) {
				if (hotspotTemplates['zhongxin'][i]._text_1_9 && hotspotTemplates['zhongxin'][i]._text_1_9.logicBlock_visible) {
					hotspotTemplates['zhongxin'][i]._text_1_9.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_zhongxin_varchanged_var_ht = function(){
		if(hotspotTemplates['zhongxin']) {
			var i;
			for(i = 0; i < hotspotTemplates['zhongxin'].length; i++) {
				if (hotspotTemplates['zhongxin'][i]._image_1_9 && hotspotTemplates['zhongxin'][i]._image_1_9.logicBlock_scaling) {
					hotspotTemplates['zhongxin'][i]._image_1_9.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_dongbu_changenode = function(){
		if(hotspotTemplates['dongbu']) {
			var i;
			for(i = 0; i < hotspotTemplates['dongbu'].length; i++) {
				if (hotspotTemplates['dongbu'][i]._image_1_10 && hotspotTemplates['dongbu'][i]._image_1_10.logicBlock_scaling) {
					hotspotTemplates['dongbu'][i]._image_1_10.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_dongbu_configloaded = function(){
		if(hotspotTemplates['dongbu']) {
			var i;
			for(i = 0; i < hotspotTemplates['dongbu'].length; i++) {
				if (hotspotTemplates['dongbu'][i]._text_1_10 && hotspotTemplates['dongbu'][i]._text_1_10.logicBlock_visible) {
					hotspotTemplates['dongbu'][i]._text_1_10.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_dongbu_varchanged_var_ht = function(){
		if(hotspotTemplates['dongbu']) {
			var i;
			for(i = 0; i < hotspotTemplates['dongbu'].length; i++) {
				if (hotspotTemplates['dongbu'][i]._image_1_10 && hotspotTemplates['dongbu'][i]._image_1_10.logicBlock_scaling) {
					hotspotTemplates['dongbu'][i]._image_1_10.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_shequ_changenode = function(){
		if(hotspotTemplates['shequ']) {
			var i;
			for(i = 0; i < hotspotTemplates['shequ'].length; i++) {
				if (hotspotTemplates['shequ'][i]._image_1_11 && hotspotTemplates['shequ'][i]._image_1_11.logicBlock_scaling) {
					hotspotTemplates['shequ'][i]._image_1_11.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_shequ_configloaded = function(){
		if(hotspotTemplates['shequ']) {
			var i;
			for(i = 0; i < hotspotTemplates['shequ'].length; i++) {
				if (hotspotTemplates['shequ'][i]._text_1_11 && hotspotTemplates['shequ'][i]._text_1_11.logicBlock_visible) {
					hotspotTemplates['shequ'][i]._text_1_11.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_shequ_varchanged_var_ht = function(){
		if(hotspotTemplates['shequ']) {
			var i;
			for(i = 0; i < hotspotTemplates['shequ'].length; i++) {
				if (hotspotTemplates['shequ'][i]._image_1_11 && hotspotTemplates['shequ'][i]._image_1_11.logicBlock_scaling) {
					hotspotTemplates['shequ'][i]._image_1_11.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_jianshen_changenode = function(){
		if(hotspotTemplates['jianshen']) {
			var i;
			for(i = 0; i < hotspotTemplates['jianshen'].length; i++) {
				if (hotspotTemplates['jianshen'][i]._image_1_12 && hotspotTemplates['jianshen'][i]._image_1_12.logicBlock_scaling) {
					hotspotTemplates['jianshen'][i]._image_1_12.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_jianshen_configloaded = function(){
		if(hotspotTemplates['jianshen']) {
			var i;
			for(i = 0; i < hotspotTemplates['jianshen'].length; i++) {
				if (hotspotTemplates['jianshen'][i]._text_1_12 && hotspotTemplates['jianshen'][i]._text_1_12.logicBlock_visible) {
					hotspotTemplates['jianshen'][i]._text_1_12.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_jianshen_varchanged_var_ht = function(){
		if(hotspotTemplates['jianshen']) {
			var i;
			for(i = 0; i < hotspotTemplates['jianshen'].length; i++) {
				if (hotspotTemplates['jianshen'][i]._image_1_12 && hotspotTemplates['jianshen'][i]._image_1_12.logicBlock_scaling) {
					hotspotTemplates['jianshen'][i]._image_1_12.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_huodong_changenode = function(){
		if(hotspotTemplates['huodong']) {
			var i;
			for(i = 0; i < hotspotTemplates['huodong'].length; i++) {
				if (hotspotTemplates['huodong'][i]._image_1_13 && hotspotTemplates['huodong'][i]._image_1_13.logicBlock_scaling) {
					hotspotTemplates['huodong'][i]._image_1_13.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_huodong_configloaded = function(){
		if(hotspotTemplates['huodong']) {
			var i;
			for(i = 0; i < hotspotTemplates['huodong'].length; i++) {
				if (hotspotTemplates['huodong'][i]._text_1_13 && hotspotTemplates['huodong'][i]._text_1_13.logicBlock_visible) {
					hotspotTemplates['huodong'][i]._text_1_13.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_huodong_varchanged_var_ht = function(){
		if(hotspotTemplates['huodong']) {
			var i;
			for(i = 0; i < hotspotTemplates['huodong'].length; i++) {
				if (hotspotTemplates['huodong'][i]._image_1_13 && hotspotTemplates['huodong'][i]._image_1_13.logicBlock_scaling) {
					hotspotTemplates['huodong'][i]._image_1_13.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_nanmen_changenode = function(){
		if(hotspotTemplates['nanmen']) {
			var i;
			for(i = 0; i < hotspotTemplates['nanmen'].length; i++) {
				if (hotspotTemplates['nanmen'][i]._image_1_14 && hotspotTemplates['nanmen'][i]._image_1_14.logicBlock_scaling) {
					hotspotTemplates['nanmen'][i]._image_1_14.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_nanmen_configloaded = function(){
		if(hotspotTemplates['nanmen']) {
			var i;
			for(i = 0; i < hotspotTemplates['nanmen'].length; i++) {
				if (hotspotTemplates['nanmen'][i]._text_1_14 && hotspotTemplates['nanmen'][i]._text_1_14.logicBlock_visible) {
					hotspotTemplates['nanmen'][i]._text_1_14.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_nanmen_varchanged_var_ht = function(){
		if(hotspotTemplates['nanmen']) {
			var i;
			for(i = 0; i < hotspotTemplates['nanmen'].length; i++) {
				if (hotspotTemplates['nanmen'][i]._image_1_14 && hotspotTemplates['nanmen'][i]._image_1_14.logicBlock_scaling) {
					hotspotTemplates['nanmen'][i]._image_1_14.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ximen_changenode = function(){
		if(hotspotTemplates['ximen']) {
			var i;
			for(i = 0; i < hotspotTemplates['ximen'].length; i++) {
				if (hotspotTemplates['ximen'][i]._image_1_15 && hotspotTemplates['ximen'][i]._image_1_15.logicBlock_scaling) {
					hotspotTemplates['ximen'][i]._image_1_15.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ximen_configloaded = function(){
		if(hotspotTemplates['ximen']) {
			var i;
			for(i = 0; i < hotspotTemplates['ximen'].length; i++) {
				if (hotspotTemplates['ximen'][i]._text_1_15 && hotspotTemplates['ximen'][i]._text_1_15.logicBlock_visible) {
					hotspotTemplates['ximen'][i]._text_1_15.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ximen_varchanged_var_ht = function(){
		if(hotspotTemplates['ximen']) {
			var i;
			for(i = 0; i < hotspotTemplates['ximen'].length; i++) {
				if (hotspotTemplates['ximen'][i]._image_1_15 && hotspotTemplates['ximen'][i]._image_1_15.logicBlock_scaling) {
					hotspotTemplates['ximen'][i]._image_1_15.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_jinru_changenode = function(){
		if(hotspotTemplates['jinru']) {
			var i;
			for(i = 0; i < hotspotTemplates['jinru'].length; i++) {
				if (hotspotTemplates['jinru'][i]._imagef14 && hotspotTemplates['jinru'][i]._imagef14.logicBlock_position) {
					hotspotTemplates['jinru'][i]._imagef14.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_jinru_varchanged_var1 = function(){
		if(hotspotTemplates['jinru']) {
			var i;
			for(i = 0; i < hotspotTemplates['jinru'].length; i++) {
				if (hotspotTemplates['jinru'][i]._imagef14 && hotspotTemplates['jinru'][i]._imagef14.logicBlock_position) {
					hotspotTemplates['jinru'][i]._imagef14.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_chumen_changenode = function(){
		if(hotspotTemplates['chumen']) {
			var i;
			for(i = 0; i < hotspotTemplates['chumen'].length; i++) {
				if (hotspotTemplates['chumen'][i]._imagef13 && hotspotTemplates['chumen'][i]._imagef13.logicBlock_position) {
					hotspotTemplates['chumen'][i]._imagef13.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_chumen_varchanged_var1 = function(){
		if(hotspotTemplates['chumen']) {
			var i;
			for(i = 0; i < hotspotTemplates['chumen'].length; i++) {
				if (hotspotTemplates['chumen'][i]._imagef13 && hotspotTemplates['chumen'][i]._imagef13.logicBlock_position) {
					hotspotTemplates['chumen'][i]._imagef13.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_jinyuanxing_changenode = function(){
		if(hotspotTemplates['jinyuanxing']) {
			var i;
			for(i = 0; i < hotspotTemplates['jinyuanxing'].length; i++) {
				if (hotspotTemplates['jinyuanxing'][i]._imagef12 && hotspotTemplates['jinyuanxing'][i]._imagef12.logicBlock_position) {
					hotspotTemplates['jinyuanxing'][i]._imagef12.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_jinyuanxing_varchanged_var1 = function(){
		if(hotspotTemplates['jinyuanxing']) {
			var i;
			for(i = 0; i < hotspotTemplates['jinyuanxing'].length; i++) {
				if (hotspotTemplates['jinyuanxing'][i]._imagef12 && hotspotTemplates['jinyuanxing'][i]._imagef12.logicBlock_position) {
					hotspotTemplates['jinyuanxing'][i]._imagef12.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_jinyuancao_changenode = function(){
		if(hotspotTemplates['jinyuancao']) {
			var i;
			for(i = 0; i < hotspotTemplates['jinyuancao'].length; i++) {
				if (hotspotTemplates['jinyuancao'][i]._imagef11 && hotspotTemplates['jinyuancao'][i]._imagef11.logicBlock_position) {
					hotspotTemplates['jinyuancao'][i]._imagef11.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_jinyuancao_varchanged_var1 = function(){
		if(hotspotTemplates['jinyuancao']) {
			var i;
			for(i = 0; i < hotspotTemplates['jinyuancao'].length; i++) {
				if (hotspotTemplates['jinyuancao'][i]._imagef11 && hotspotTemplates['jinyuancao'][i]._imagef11.logicBlock_position) {
					hotspotTemplates['jinyuancao'][i]._imagef11.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_jincheku_changenode = function(){
		if(hotspotTemplates['jincheku']) {
			var i;
			for(i = 0; i < hotspotTemplates['jincheku'].length; i++) {
				if (hotspotTemplates['jincheku'][i]._imagef10 && hotspotTemplates['jincheku'][i]._imagef10.logicBlock_position) {
					hotspotTemplates['jincheku'][i]._imagef10.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_jincheku_varchanged_var1 = function(){
		if(hotspotTemplates['jincheku']) {
			var i;
			for(i = 0; i < hotspotTemplates['jincheku'].length; i++) {
				if (hotspotTemplates['jincheku'][i]._imagef10 && hotspotTemplates['jincheku'][i]._imagef10.logicBlock_position) {
					hotspotTemplates['jincheku'][i]._imagef10.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_jinxiaoting_changenode = function(){
		if(hotspotTemplates['jinxiaoting']) {
			var i;
			for(i = 0; i < hotspotTemplates['jinxiaoting'].length; i++) {
				if (hotspotTemplates['jinxiaoting'][i]._imagef9 && hotspotTemplates['jinxiaoting'][i]._imagef9.logicBlock_position) {
					hotspotTemplates['jinxiaoting'][i]._imagef9.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_jinxiaoting_varchanged_var1 = function(){
		if(hotspotTemplates['jinxiaoting']) {
			var i;
			for(i = 0; i < hotspotTemplates['jinxiaoting'].length; i++) {
				if (hotspotTemplates['jinxiaoting'][i]._imagef9 && hotspotTemplates['jinxiaoting'][i]._imagef9.logicBlock_position) {
					hotspotTemplates['jinxiaoting'][i]._imagef9.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_jinxibu_changenode = function(){
		if(hotspotTemplates['jinxibu']) {
			var i;
			for(i = 0; i < hotspotTemplates['jinxibu'].length; i++) {
				if (hotspotTemplates['jinxibu'][i]._imagef8 && hotspotTemplates['jinxibu'][i]._imagef8.logicBlock_position) {
					hotspotTemplates['jinxibu'][i]._imagef8.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_jinxibu_varchanged_var1 = function(){
		if(hotspotTemplates['jinxibu']) {
			var i;
			for(i = 0; i < hotspotTemplates['jinxibu'].length; i++) {
				if (hotspotTemplates['jinxibu'][i]._imagef8 && hotspotTemplates['jinxibu'][i]._imagef8.logicBlock_position) {
					hotspotTemplates['jinxibu'][i]._imagef8.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_jinhuodong_changenode = function(){
		if(hotspotTemplates['jinhuodong']) {
			var i;
			for(i = 0; i < hotspotTemplates['jinhuodong'].length; i++) {
				if (hotspotTemplates['jinhuodong'][i]._imagef7 && hotspotTemplates['jinhuodong'][i]._imagef7.logicBlock_position) {
					hotspotTemplates['jinhuodong'][i]._imagef7.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_jinhuodong_varchanged_var1 = function(){
		if(hotspotTemplates['jinhuodong']) {
			var i;
			for(i = 0; i < hotspotTemplates['jinhuodong'].length; i++) {
				if (hotspotTemplates['jinhuodong'][i]._imagef7 && hotspotTemplates['jinhuodong'][i]._imagef7.logicBlock_position) {
					hotspotTemplates['jinhuodong'][i]._imagef7.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_jinjianshen_changenode = function(){
		if(hotspotTemplates['jinjianshen']) {
			var i;
			for(i = 0; i < hotspotTemplates['jinjianshen'].length; i++) {
				if (hotspotTemplates['jinjianshen'][i]._imagef6 && hotspotTemplates['jinjianshen'][i]._imagef6.logicBlock_position) {
					hotspotTemplates['jinjianshen'][i]._imagef6.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_jinjianshen_varchanged_var1 = function(){
		if(hotspotTemplates['jinjianshen']) {
			var i;
			for(i = 0; i < hotspotTemplates['jinjianshen'].length; i++) {
				if (hotspotTemplates['jinjianshen'][i]._imagef6 && hotspotTemplates['jinjianshen'][i]._imagef6.logicBlock_position) {
					hotspotTemplates['jinjianshen'][i]._imagef6.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_jinzhongxin_changenode = function(){
		if(hotspotTemplates['jinzhongxin']) {
			var i;
			for(i = 0; i < hotspotTemplates['jinzhongxin'].length; i++) {
				if (hotspotTemplates['jinzhongxin'][i]._imagef5 && hotspotTemplates['jinzhongxin'][i]._imagef5.logicBlock_position) {
					hotspotTemplates['jinzhongxin'][i]._imagef5.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_jinzhongxin_varchanged_var1 = function(){
		if(hotspotTemplates['jinzhongxin']) {
			var i;
			for(i = 0; i < hotspotTemplates['jinzhongxin'].length; i++) {
				if (hotspotTemplates['jinzhongxin'][i]._imagef5 && hotspotTemplates['jinzhongxin'][i]._imagef5.logicBlock_position) {
					hotspotTemplates['jinzhongxin'][i]._imagef5.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_jinxiuxi_changenode = function(){
		if(hotspotTemplates['jinxiuxi']) {
			var i;
			for(i = 0; i < hotspotTemplates['jinxiuxi'].length; i++) {
				if (hotspotTemplates['jinxiuxi'][i]._imagef4 && hotspotTemplates['jinxiuxi'][i]._imagef4.logicBlock_position) {
					hotspotTemplates['jinxiuxi'][i]._imagef4.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_jinxiuxi_varchanged_var1 = function(){
		if(hotspotTemplates['jinxiuxi']) {
			var i;
			for(i = 0; i < hotspotTemplates['jinxiuxi'].length; i++) {
				if (hotspotTemplates['jinxiuxi'][i]._imagef4 && hotspotTemplates['jinxiuxi'][i]._imagef4.logicBlock_position) {
					hotspotTemplates['jinxiuxi'][i]._imagef4.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_jinshequ_changenode = function(){
		if(hotspotTemplates['jinshequ']) {
			var i;
			for(i = 0; i < hotspotTemplates['jinshequ'].length; i++) {
				if (hotspotTemplates['jinshequ'][i]._imagef3 && hotspotTemplates['jinshequ'][i]._imagef3.logicBlock_position) {
					hotspotTemplates['jinshequ'][i]._imagef3.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_jinshequ_varchanged_var1 = function(){
		if(hotspotTemplates['jinshequ']) {
			var i;
			for(i = 0; i < hotspotTemplates['jinshequ'].length; i++) {
				if (hotspotTemplates['jinshequ'][i]._imagef3 && hotspotTemplates['jinshequ'][i]._imagef3.logicBlock_position) {
					hotspotTemplates['jinshequ'][i]._imagef3.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_jindongbu_changenode = function(){
		if(hotspotTemplates['jindongbu']) {
			var i;
			for(i = 0; i < hotspotTemplates['jindongbu'].length; i++) {
				if (hotspotTemplates['jindongbu'][i]._imagef2 && hotspotTemplates['jindongbu'][i]._imagef2.logicBlock_position) {
					hotspotTemplates['jindongbu'][i]._imagef2.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_jindongbu_varchanged_var1 = function(){
		if(hotspotTemplates['jindongbu']) {
			var i;
			for(i = 0; i < hotspotTemplates['jindongbu'].length; i++) {
				if (hotspotTemplates['jindongbu'][i]._imagef2 && hotspotTemplates['jindongbu'][i]._imagef2.logicBlock_position) {
					hotspotTemplates['jindongbu'][i]._imagef2.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_jinnanmen_changenode = function(){
		if(hotspotTemplates['jinnanmen']) {
			var i;
			for(i = 0; i < hotspotTemplates['jinnanmen'].length; i++) {
				if (hotspotTemplates['jinnanmen'][i]._imagef1 && hotspotTemplates['jinnanmen'][i]._imagef1.logicBlock_position) {
					hotspotTemplates['jinnanmen'][i]._imagef1.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_jinnanmen_varchanged_var1 = function(){
		if(hotspotTemplates['jinnanmen']) {
			var i;
			for(i = 0; i < hotspotTemplates['jinnanmen'].length; i++) {
				if (hotspotTemplates['jinnanmen'][i]._imagef1 && hotspotTemplates['jinnanmen'][i]._imagef1.logicBlock_position) {
					hotspotTemplates['jinnanmen'][i]._imagef1.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_jinximen_changenode = function(){
		if(hotspotTemplates['jinximen']) {
			var i;
			for(i = 0; i < hotspotTemplates['jinximen'].length; i++) {
				if (hotspotTemplates['jinximen'][i]._imagef0 && hotspotTemplates['jinximen'][i]._imagef0.logicBlock_position) {
					hotspotTemplates['jinximen'][i]._imagef0.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_jinximen_varchanged_var1 = function(){
		if(hotspotTemplates['jinximen']) {
			var i;
			for(i = 0; i < hotspotTemplates['jinximen'].length; i++) {
				if (hotspotTemplates['jinximen'][i]._imagef0 && hotspotTemplates['jinximen'][i]._imagef0.logicBlock_position) {
					hotspotTemplates['jinximen'][i]._imagef0.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_jinzoulang_changenode = function(){
		if(hotspotTemplates['jinzoulang']) {
			var i;
			for(i = 0; i < hotspotTemplates['jinzoulang'].length; i++) {
				if (hotspotTemplates['jinzoulang'][i]._imagef && hotspotTemplates['jinzoulang'][i]._imagef.logicBlock_position) {
					hotspotTemplates['jinzoulang'][i]._imagef.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_jinzoulang_varchanged_var1 = function(){
		if(hotspotTemplates['jinzoulang']) {
			var i;
			for(i = 0; i < hotspotTemplates['jinzoulang'].length; i++) {
				if (hotspotTemplates['jinzoulang'][i]._imagef && hotspotTemplates['jinzoulang'][i]._imagef.logicBlock_position) {
					hotspotTemplates['jinzoulang'][i]._imagef.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_wuren_changenode = function(){
		if(hotspotTemplates['wuren']) {
			var i;
			for(i = 0; i < hotspotTemplates['wuren'].length; i++) {
				if (hotspotTemplates['wuren'][i]._rectangle_25 && hotspotTemplates['wuren'][i]._rectangle_25.logicBlock_scaling) {
					hotspotTemplates['wuren'][i]._rectangle_25.logicBlock_scaling();
				}
				if (hotspotTemplates['wuren'][i]._rectangle_15 && hotspotTemplates['wuren'][i]._rectangle_15.logicBlock_scaling) {
					hotspotTemplates['wuren'][i]._rectangle_15.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_wuren_varchanged_var_ht = function(){
		if(hotspotTemplates['wuren']) {
			var i;
			for(i = 0; i < hotspotTemplates['wuren'].length; i++) {
				if (hotspotTemplates['wuren'][i]._rectangle_25 && hotspotTemplates['wuren'][i]._rectangle_25.logicBlock_scaling) {
					hotspotTemplates['wuren'][i]._rectangle_25.logicBlock_scaling();
				}
				if (hotspotTemplates['wuren'][i]._rectangle_15 && hotspotTemplates['wuren'][i]._rectangle_15.logicBlock_scaling) {
					hotspotTemplates['wuren'][i]._rectangle_15.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_kuaidi_changenode = function(){
		if(hotspotTemplates['kuaidi']) {
			var i;
			for(i = 0; i < hotspotTemplates['kuaidi'].length; i++) {
				if (hotspotTemplates['kuaidi'][i]._rectangle_24 && hotspotTemplates['kuaidi'][i]._rectangle_24.logicBlock_scaling) {
					hotspotTemplates['kuaidi'][i]._rectangle_24.logicBlock_scaling();
				}
				if (hotspotTemplates['kuaidi'][i]._rectangle_14 && hotspotTemplates['kuaidi'][i]._rectangle_14.logicBlock_scaling) {
					hotspotTemplates['kuaidi'][i]._rectangle_14.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_kuaidi_varchanged_var_ht = function(){
		if(hotspotTemplates['kuaidi']) {
			var i;
			for(i = 0; i < hotspotTemplates['kuaidi'].length; i++) {
				if (hotspotTemplates['kuaidi'][i]._rectangle_24 && hotspotTemplates['kuaidi'][i]._rectangle_24.logicBlock_scaling) {
					hotspotTemplates['kuaidi'][i]._rectangle_24.logicBlock_scaling();
				}
				if (hotspotTemplates['kuaidi'][i]._rectangle_14 && hotspotTemplates['kuaidi'][i]._rectangle_14.logicBlock_scaling) {
					hotspotTemplates['kuaidi'][i]._rectangle_14.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_chaoshi_changenode = function(){
		if(hotspotTemplates['chaoshi']) {
			var i;
			for(i = 0; i < hotspotTemplates['chaoshi'].length; i++) {
				if (hotspotTemplates['chaoshi'][i]._rectangle_23 && hotspotTemplates['chaoshi'][i]._rectangle_23.logicBlock_scaling) {
					hotspotTemplates['chaoshi'][i]._rectangle_23.logicBlock_scaling();
				}
				if (hotspotTemplates['chaoshi'][i]._rectangle_13 && hotspotTemplates['chaoshi'][i]._rectangle_13.logicBlock_scaling) {
					hotspotTemplates['chaoshi'][i]._rectangle_13.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_chaoshi_varchanged_var_ht = function(){
		if(hotspotTemplates['chaoshi']) {
			var i;
			for(i = 0; i < hotspotTemplates['chaoshi'].length; i++) {
				if (hotspotTemplates['chaoshi'][i]._rectangle_23 && hotspotTemplates['chaoshi'][i]._rectangle_23.logicBlock_scaling) {
					hotspotTemplates['chaoshi'][i]._rectangle_23.logicBlock_scaling();
				}
				if (hotspotTemplates['chaoshi'][i]._rectangle_13 && hotspotTemplates['chaoshi'][i]._rectangle_13.logicBlock_scaling) {
					hotspotTemplates['chaoshi'][i]._rectangle_13.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_congdian_changenode = function(){
		if(hotspotTemplates['congdian']) {
			var i;
			for(i = 0; i < hotspotTemplates['congdian'].length; i++) {
				if (hotspotTemplates['congdian'][i]._rectangle_22 && hotspotTemplates['congdian'][i]._rectangle_22.logicBlock_scaling) {
					hotspotTemplates['congdian'][i]._rectangle_22.logicBlock_scaling();
				}
				if (hotspotTemplates['congdian'][i]._rectangle_12 && hotspotTemplates['congdian'][i]._rectangle_12.logicBlock_scaling) {
					hotspotTemplates['congdian'][i]._rectangle_12.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_congdian_varchanged_var_ht = function(){
		if(hotspotTemplates['congdian']) {
			var i;
			for(i = 0; i < hotspotTemplates['congdian'].length; i++) {
				if (hotspotTemplates['congdian'][i]._rectangle_22 && hotspotTemplates['congdian'][i]._rectangle_22.logicBlock_scaling) {
					hotspotTemplates['congdian'][i]._rectangle_22.logicBlock_scaling();
				}
				if (hotspotTemplates['congdian'][i]._rectangle_12 && hotspotTemplates['congdian'][i]._rectangle_12.logicBlock_scaling) {
					hotspotTemplates['congdian'][i]._rectangle_12.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_dixia_changenode = function(){
		if(hotspotTemplates['dixia']) {
			var i;
			for(i = 0; i < hotspotTemplates['dixia'].length; i++) {
				if (hotspotTemplates['dixia'][i]._rectangle_21 && hotspotTemplates['dixia'][i]._rectangle_21.logicBlock_scaling) {
					hotspotTemplates['dixia'][i]._rectangle_21.logicBlock_scaling();
				}
				if (hotspotTemplates['dixia'][i]._rectangle_11 && hotspotTemplates['dixia'][i]._rectangle_11.logicBlock_scaling) {
					hotspotTemplates['dixia'][i]._rectangle_11.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_dixia_varchanged_var_ht = function(){
		if(hotspotTemplates['dixia']) {
			var i;
			for(i = 0; i < hotspotTemplates['dixia'].length; i++) {
				if (hotspotTemplates['dixia'][i]._rectangle_21 && hotspotTemplates['dixia'][i]._rectangle_21.logicBlock_scaling) {
					hotspotTemplates['dixia'][i]._rectangle_21.logicBlock_scaling();
				}
				if (hotspotTemplates['dixia'][i]._rectangle_11 && hotspotTemplates['dixia'][i]._rectangle_11.logicBlock_scaling) {
					hotspotTemplates['dixia'][i]._rectangle_11.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_wuye_changenode = function(){
		if(hotspotTemplates['wuye']) {
			var i;
			for(i = 0; i < hotspotTemplates['wuye'].length; i++) {
				if (hotspotTemplates['wuye'][i]._rectangle_20 && hotspotTemplates['wuye'][i]._rectangle_20.logicBlock_scaling) {
					hotspotTemplates['wuye'][i]._rectangle_20.logicBlock_scaling();
				}
				if (hotspotTemplates['wuye'][i]._rectangle_10 && hotspotTemplates['wuye'][i]._rectangle_10.logicBlock_scaling) {
					hotspotTemplates['wuye'][i]._rectangle_10.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_wuye_varchanged_var_ht = function(){
		if(hotspotTemplates['wuye']) {
			var i;
			for(i = 0; i < hotspotTemplates['wuye'].length; i++) {
				if (hotspotTemplates['wuye'][i]._rectangle_20 && hotspotTemplates['wuye'][i]._rectangle_20.logicBlock_scaling) {
					hotspotTemplates['wuye'][i]._rectangle_20.logicBlock_scaling();
				}
				if (hotspotTemplates['wuye'][i]._rectangle_10 && hotspotTemplates['wuye'][i]._rectangle_10.logicBlock_scaling) {
					hotspotTemplates['wuye'][i]._rectangle_10.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_laji_changenode = function(){
		if(hotspotTemplates['laji']) {
			var i;
			for(i = 0; i < hotspotTemplates['laji'].length; i++) {
				if (hotspotTemplates['laji'][i]._rectangle_2 && hotspotTemplates['laji'][i]._rectangle_2.logicBlock_scaling) {
					hotspotTemplates['laji'][i]._rectangle_2.logicBlock_scaling();
				}
				if (hotspotTemplates['laji'][i]._rectangle_1 && hotspotTemplates['laji'][i]._rectangle_1.logicBlock_scaling) {
					hotspotTemplates['laji'][i]._rectangle_1.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_laji_varchanged_var_ht = function(){
		if(hotspotTemplates['laji']) {
			var i;
			for(i = 0; i < hotspotTemplates['laji'].length; i++) {
				if (hotspotTemplates['laji'][i]._rectangle_2 && hotspotTemplates['laji'][i]._rectangle_2.logicBlock_scaling) {
					hotspotTemplates['laji'][i]._rectangle_2.logicBlock_scaling();
				}
				if (hotspotTemplates['laji'][i]._rectangle_1 && hotspotTemplates['laji'][i]._rectangle_1.logicBlock_scaling) {
					hotspotTemplates['laji'][i]._rectangle_1.logicBlock_scaling();
				}
			}
		}
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		if (me._timer_1.ggLastIsActive!=me._timer_1.ggIsActive()) {
			me._timer_1.ggLastIsActive=me._timer_1.ggIsActive();
			if (me._timer_1.ggLastIsActive) {
				player.setVariableValue('var_ht', true);
			} else {
				player.setVariableValue('var_ht', false);
			}
		}
		if (me._timer025.ggLastIsActive!=me._timer025.ggIsActive()) {
			me._timer025.ggLastIsActive=me._timer025.ggIsActive();
			if (me._timer025.ggLastIsActive) {
				player.setVariableValue('var1', player.getVariableValue('var1') + Number("1"));
				player.setVariableValue('var1', player.getVariableValue('var1') % Number("25"));
			} else {
			}
		}
		me._timer025.ggUpdateConditionTimer();
		var hs='';
		if (me._loadingbar.ggParameter) {
			hs+=parameterToTransform(me._loadingbar.ggParameter) + ' ';
		}
		hs+='scale(' + (1 * player.getPercentLoaded() + 0) + ',1.0) ';
		me._loadingbar.style[domTransform]=hs;
		if (me.elementMouseOver['thumbnail_show_button_show']) {
			if (
				(
					((player.getIsMobile() == false))
				)
			) {
				me._tt_thumbnail_open.style[domTransition]='none';
				me._tt_thumbnail_open.style.visibility=(Number(me._tt_thumbnail_open.style.opacity)>0||!me._tt_thumbnail_open.style.opacity)?'inherit':'hidden';
				me._tt_thumbnail_open.ggVisible=true;
			}
			me._thumbnail_show_button_show.style[domTransition]='none';
			me._thumbnail_show_button_show.style.opacity='1';
			me._thumbnail_show_button_show.style.visibility=me._thumbnail_show_button_show.ggVisible?'inherit':'hidden';
		}
		if (me.elementMouseOver['media_on']) {
			if (
				(
					((player.getIsMobile() == false))
				)
			) {
				me._yinyue.style[domTransition]='none';
				me._yinyue.style.visibility=(Number(me._yinyue.style.opacity)>0||!me._yinyue.style.opacity)?'inherit':'hidden';
				me._yinyue.ggVisible=true;
			}
			me._media_on.style[domTransition]='none';
			me._media_on.style.opacity='1';
			me._media_on.style.visibility=me._media_on.ggVisible?'inherit':'hidden';
		}
		if (me.elementMouseOver['media_off']) {
			if (
				(
					((player.getIsMobile() == false))
				)
			) {
				me._yinyue.style[domTransition]='none';
				me._yinyue.style.visibility=(Number(me._yinyue.style.opacity)>0||!me._yinyue.style.opacity)?'inherit':'hidden';
				me._yinyue.ggVisible=true;
			}
			me._media_off.style[domTransition]='none';
			me._media_off.style.opacity='1';
			me._media_off.style.visibility=me._media_off.ggVisible?'inherit':'hidden';
		}
		if (me.elementMouseOver['stop_rotate_image']) {
			if (
				(
					((player.getIsMobile() == false))
				)
			) {
				me._rotate.style[domTransition]='none';
				me._rotate.style.visibility=(Number(me._rotate.style.opacity)>0||!me._rotate.style.opacity)?'inherit':'hidden';
				me._rotate.ggVisible=true;
			}
			me._stop_rotate_image.style[domTransition]='none';
			me._stop_rotate_image.style.opacity='1';
			me._stop_rotate_image.style.visibility=me._stop_rotate_image.ggVisible?'inherit':'hidden';
		}
		if (me.elementMouseOver['start_rotate_image']) {
			if (
				(
					((player.getIsMobile() == false))
				)
			) {
				me._rotate.style[domTransition]='none';
				me._rotate.style.visibility=(Number(me._rotate.style.opacity)>0||!me._rotate.style.opacity)?'inherit':'hidden';
				me._rotate.ggVisible=true;
			}
			me._start_rotate_image.style[domTransition]='none';
			me._start_rotate_image.style.opacity='1';
			me._start_rotate_image.style.visibility=me._start_rotate_image.ggVisible?'inherit':'hidden';
		}
		if (me.elementMouseOver['button_image_normalscreen']) {
			if (
				(
					((player.getIsMobile() == false))
				)
			) {
				me._fullscreen_x.style[domTransition]='none';
				me._fullscreen_x.style.visibility=(Number(me._fullscreen_x.style.opacity)>0||!me._fullscreen_x.style.opacity)?'inherit':'hidden';
				me._fullscreen_x.ggVisible=true;
			}
			me._button_image_normalscreen.style[domTransition]='none';
			me._button_image_normalscreen.style.opacity='1';
			me._button_image_normalscreen.style.visibility=me._button_image_normalscreen.ggVisible?'inherit':'hidden';
		}
		if (me.elementMouseOver['button_image_fullscreen']) {
			if (
				(
					((player.getIsMobile() == false))
				)
			) {
				me._fullscreen_on.style[domTransition]='none';
				me._fullscreen_on.style.visibility=(Number(me._fullscreen_on.style.opacity)>0||!me._fullscreen_on.style.opacity)?'inherit':'hidden';
				me._fullscreen_on.ggVisible=true;
			}
			me._button_image_fullscreen.style[domTransition]='none';
			me._button_image_fullscreen.style.opacity='1';
			me._button_image_fullscreen.style.visibility=me._button_image_fullscreen.ggVisible?'inherit':'hidden';
		}
		if (me.elementMouseOver['ht_info_image']) {
			if (
				(
					((player.getIsMobile() == false))
				)
			) {
				me._tt_information.style[domTransition]='none';
				me._tt_information.style.visibility=(Number(me._tt_information.style.opacity)>0||!me._tt_information.style.opacity)?'inherit':'hidden';
				me._tt_information.ggVisible=true;
			}
			me._ht_info_image.style[domTransition]='none';
			me._ht_info_image.style.opacity='1';
			me._ht_info_image.style.visibility=me._ht_info_image.ggVisible?'inherit':'hidden';
		}
		if (me.elementMouseOver['map_button']) {
			if (
				(
					((player.getIsMobile() == false))
				)
			) {
				me._maptext.style[domTransition]='none';
				me._maptext.style.visibility=(Number(me._maptext.style.opacity)>0||!me._maptext.style.opacity)?'inherit':'hidden';
				me._maptext.ggVisible=true;
			}
			me._map_button.style[domTransition]='none';
			me._map_button.style.opacity='1';
			me._map_button.style.visibility=me._map_button.ggVisible?'inherit':'hidden';
		}
		var hs='';
		if (me._compass_2.ggParameter) {
			hs+=parameterToTransform(me._compass_2.ggParameter) + ' ';
		}
		hs+='rotate(' + (-1.0*(1 * player.getPanNorth() + 0)) + 'deg) ';
		me._compass_2.style[domTransform]=hs;
		if (me.elementMouseOver['zuozhe']) {
			player.setVariableValue('zuozhe', true);
		}
		if (me.elementMouseOver['zuozhe_telegram']) {
			player.setVariableValue('zuozhe', true);
		}
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinHotspotClass_help(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._help=document.createElement('div');
		el.ggId="help";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 265px;';
		hs+='position : absolute;';
		hs+='top : 164px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._help.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._help.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._help.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._help.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._help.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._help.ggUpdatePosition=function (useTransition) {
		}
		el=me._helpimg=document.createElement('div');
		els=me._helpimg__img=document.createElement('img');
		els.className='ggskin ggskin_helpimg';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="helpimg";
		el.ggDx=0;
		el.ggDy=-40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.29999;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._helpimg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._helpimg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('help') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._helpimg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._helpimg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._helpimg.style[domTransition]='';
				if (me._helpimg.ggCurrentLogicStateVisible == 0) {
					me._helpimg.style.visibility="hidden";
					me._helpimg.ggVisible=false;
				}
				else {
					me._helpimg.style.visibility=(Number(me._helpimg.style.opacity)>0||!me._helpimg.style.opacity)?'inherit':'hidden';
					me._helpimg.ggVisible=true;
				}
			}
		}
		me._helpimg.onclick=function (e) {
			player.setVariableValue('help', !player.getVariableValue('help'));
		}
		me._helpimg.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._help.appendChild(me._helpimg);
		el=me._bangzhuyidong=document.createElement('div');
		els=me._bangzhuyidong__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="bangzhuyidong";
		el.ggDx=10;
		el.ggDy=26;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 61px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 247px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #434343;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: bold;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u6b22\u8fce\uff01\u8fd9\u91cc\u662f\u4e00\u4e9b\u64cd\u4f5c\u5e2e\u52a9\uff1a<br\/>\u5355\u6307\u62d6\u52a8\u89c6\u89d2\uff0c\u53cc\u6307\u8fdb\u884c\u7f29\u653e<br\/>\u70b9\u51fb\u573a\u666f\u540d\u70ed\u70b9\u6309\u94ae\u6765\u8df3\u8f6c\u573a\u666f<br\/>\u70b9\u51fb\u6307\u5357\u9488\u4ee5\u8fdb\u5165\u5b8c\u6574\u9e1f\u77b0\u56fe<br\/>\u4e0b\u65b9\u5bfc\u89c8\u83dc\u5355\u53ef\u5feb\u901f\u6d4f\u89c8\u573a\u666f<br\/>PC\u7aef\u89c2\u770b\u4f53\u9a8c\u66f4\u4f73";
		el.appendChild(els);
		me._bangzhuyidong.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._bangzhuyidong.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._bangzhuyidong.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._bangzhuyidong.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._bangzhuyidong.style[domTransition]='opacity 300ms ease 0ms';
				if (me._bangzhuyidong.ggCurrentLogicStateVisible == 0) {
					me._bangzhuyidong.style.visibility=(Number(me._bangzhuyidong.style.opacity)>0||!me._bangzhuyidong.style.opacity)?'inherit':'hidden';
					me._bangzhuyidong.ggVisible=true;
				}
				else {
					me._bangzhuyidong.style.visibility="hidden";
					me._bangzhuyidong.ggVisible=false;
				}
			}
		}
		me._bangzhuyidong.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('help') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._bangzhuyidong.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._bangzhuyidong.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._bangzhuyidong.style[domTransition]='opacity 300ms ease 0ms';
				if (me._bangzhuyidong.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._bangzhuyidong.style.opacity == 0.0) { me._bangzhuyidong.style.visibility="hidden"; } }, 305);
					me._bangzhuyidong.style.opacity=0;
				}
				else {
					me._bangzhuyidong.style.visibility=me._bangzhuyidong.ggVisible?'inherit':'hidden';
					me._bangzhuyidong.style.opacity=1;
				}
			}
		}
		me._bangzhuyidong.onclick=function (e) {
			player.setVariableValue('help', !player.getVariableValue('help'));
		}
		me._bangzhuyidong.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._help.appendChild(me._bangzhuyidong);
		el=me._bangzhu=document.createElement('div');
		els=me._bangzhu__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="bangzhu";
		el.ggDx=10;
		el.ggDy=26;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 61px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 247px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #434343;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: bold;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u6b22\u8fce\uff01\u8fd9\u91cc\u662f\u4e00\u4e9b\u64cd\u4f5c\u5e2e\u52a9\uff1a<br\/>\u9f20\u6807\u62d6\u52a8\u89c6\u89d2\uff0c\u6eda\u8f6e\u8fdb\u884c\u7f29\u653e<br\/>\u70b9\u51fb\u573a\u666f\u540d\u70ed\u70b9\u6309\u94ae\u6765\u8df3\u8f6c\u573a\u666f<br\/>\u70b9\u51fb\u6307\u5357\u9488\u4ee5\u8fdb\u5165\u5b8c\u6574\u9e1f\u77b0\u56fe<br\/>\u4e0b\u65b9\u5bfc\u89c8\u83dc\u5355\u53ef\u5feb\u901f\u6d4f\u89c8\u573a\u666f<br\/>\u53cc\u51fb\u5f00\u542f\u6216\u5173\u95ed\u5168\u5c4f";
		el.appendChild(els);
		me._bangzhu.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._bangzhu.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._bangzhu.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._bangzhu.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._bangzhu.style[domTransition]='opacity 300ms ease 0ms';
				if (me._bangzhu.ggCurrentLogicStateVisible == 0) {
					me._bangzhu.style.visibility=(Number(me._bangzhu.style.opacity)>0||!me._bangzhu.style.opacity)?'inherit':'hidden';
					me._bangzhu.ggVisible=true;
				}
				else {
					me._bangzhu.style.visibility="hidden";
					me._bangzhu.ggVisible=false;
				}
			}
		}
		me._bangzhu.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('help') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._bangzhu.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._bangzhu.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._bangzhu.style[domTransition]='opacity 300ms ease 0ms';
				if (me._bangzhu.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._bangzhu.style.opacity == 0.0) { me._bangzhu.style.visibility="hidden"; } }, 305);
					me._bangzhu.style.opacity=0;
				}
				else {
					me._bangzhu.style.visibility=me._bangzhu.ggVisible?'inherit':'hidden';
					me._bangzhu.style.opacity=1;
				}
			}
		}
		me._bangzhu.onclick=function (e) {
			player.setVariableValue('help', !player.getVariableValue('help'));
		}
		me._bangzhu.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._help.appendChild(me._bangzhu);
		el=me._helpimgx=document.createElement('div');
		els=me._helpimgx__img=document.createElement('img');
		els.className='ggskin ggskin_helpimgx';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="helpimgX";
		el.ggDx=0;
		el.ggDy=-40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._helpimgx.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._helpimgx.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('help') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._helpimgx.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._helpimgx.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._helpimgx.style[domTransition]='';
				if (me._helpimgx.ggCurrentLogicStateVisible == 0) {
					me._helpimgx.style.visibility=(Number(me._helpimgx.style.opacity)>0||!me._helpimgx.style.opacity)?'inherit':'hidden';
					me._helpimgx.ggVisible=true;
				}
				else {
					me._helpimgx.style.visibility="hidden";
					me._helpimgx.ggVisible=false;
				}
			}
		}
		me._helpimgx.onclick=function (e) {
			player.setVariableValue('help', !player.getVariableValue('help'));
		}
		me._helpimgx.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._help.appendChild(me._helpimgx);
		me.ggUse3d=true;
		me.gg3dDistance=500;
		me.__div = me._help;
	};
	function SkinHotspotClass_cheku(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._cheku=document.createElement('div');
		el.ggId="cheku";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 300px;';
		hs+='position : absolute;';
		hs+='top : 323px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._cheku.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._cheku.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._cheku.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._cheku.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._cheku.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._cheku.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1_5=document.createElement('div');
		els=me._image_1_5__img=document.createElement('img');
		els.className='ggskin ggskin_image_1_5';
		hs='data:image/png;base64,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'+
			'5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1_5";
		el.ggDx=5;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 64px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 67px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_1_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_1_5.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_ht') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._image_1_5.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._image_1_5.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._image_1_5.style[domTransition]='' + cssPrefix + 'transform 750ms ease 0ms';
				if (me._image_1_5.ggCurrentLogicStateScaling == 0) {
					me._image_1_5.ggParameter.sx = 0.8;
					me._image_1_5.ggParameter.sy = 0.8;
					me._image_1_5.style[domTransform]=parameterToTransform(me._image_1_5.ggParameter);
				}
				else {
					me._image_1_5.ggParameter.sx = 1;
					me._image_1_5.ggParameter.sy = 1;
					me._image_1_5.style[domTransform]=parameterToTransform(me._image_1_5.ggParameter);
				}
			}
		}
		me._image_1_5.onclick=function (e) {
			player.openNext("{node3}","");
		}
		me._image_1_5.onmouseover=function (e) {
			me.elementMouseOver['image_1_5']=true;
		}
		me._image_1_5.onmouseout=function (e) {
			if (
				(
					((player.getIsMobile() == false))
				)
			) {
				me._text_1_5.style[domTransition]='none';
				me._text_1_5.style.visibility='hidden';
				me._text_1_5.ggVisible=false;
			}
			me.elementMouseOver['image_1_5']=false;
		}
		me._image_1_5.ontouchend=function (e) {
			me.elementMouseOver['image_1_5']=false;
		}
		me._image_1_5.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._cheku.appendChild(me._image_1_5);
		el=me._text_1_5=document.createElement('div');
		els=me._text_1_5__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1_5";
		el.ggDx=4;
		el.ggDy=51;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 59px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #d8d8d8;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		hs+='color: #000000;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="\u8f66\u5e93\u53e3";
		el.appendChild(els);
		me._text_1_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_1_5.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_1_5.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_1_5.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_1_5.style[domTransition]='';
				if (me._text_1_5.ggCurrentLogicStateVisible == 0) {
					me._text_1_5.style.visibility=(Number(me._text_1_5.style.opacity)>0||!me._text_1_5.style.opacity)?'inherit':'hidden';
					me._text_1_5.ggVisible=true;
				}
				else {
					me._text_1_5.style.visibility="hidden";
					me._text_1_5.ggVisible=false;
				}
			}
		}
		me._text_1_5.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((57-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._cheku.appendChild(me._text_1_5);
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['image_1_5']) {
					me._text_1_5.style[domTransition]='none';
					me._text_1_5.style.visibility=(Number(me._text_1_5.style.opacity)>0||!me._text_1_5.style.opacity)?'inherit':'hidden';
					me._text_1_5.ggVisible=true;
				}
			}
			me.hotspotTimerEvent();
		me.__div = me._cheku;
	};
	function SkinHotspotClass_yuanxing(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._yuanxing=document.createElement('div');
		el.ggId="yuanxing";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 300px;';
		hs+='position : absolute;';
		hs+='top : 323px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._yuanxing.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._yuanxing.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._yuanxing.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._yuanxing.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._yuanxing.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._yuanxing.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1_4=document.createElement('div');
		els=me._image_1_4__img=document.createElement('img');
		els.className='ggskin ggskin_image_1_4';
		hs='data:image/png;base64,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'+
			'5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1_4";
		el.ggDx=5;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 64px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 67px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_1_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_1_4.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_ht') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._image_1_4.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._image_1_4.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._image_1_4.style[domTransition]='' + cssPrefix + 'transform 750ms ease 0ms';
				if (me._image_1_4.ggCurrentLogicStateScaling == 0) {
					me._image_1_4.ggParameter.sx = 0.8;
					me._image_1_4.ggParameter.sy = 0.8;
					me._image_1_4.style[domTransform]=parameterToTransform(me._image_1_4.ggParameter);
				}
				else {
					me._image_1_4.ggParameter.sx = 1;
					me._image_1_4.ggParameter.sy = 1;
					me._image_1_4.style[domTransform]=parameterToTransform(me._image_1_4.ggParameter);
				}
			}
		}
		me._image_1_4.onclick=function (e) {
			player.openNext("{node15}","");
		}
		me._image_1_4.onmouseover=function (e) {
			me.elementMouseOver['image_1_4']=true;
		}
		me._image_1_4.onmouseout=function (e) {
			if (
				(
					((player.getIsMobile() == false))
				)
			) {
				me._text_1_4.style[domTransition]='none';
				me._text_1_4.style.visibility='hidden';
				me._text_1_4.ggVisible=false;
			}
			me.elementMouseOver['image_1_4']=false;
		}
		me._image_1_4.ontouchend=function (e) {
			me.elementMouseOver['image_1_4']=false;
		}
		me._image_1_4.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._yuanxing.appendChild(me._image_1_4);
		el=me._text_1_4=document.createElement('div');
		els=me._text_1_4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1_4";
		el.ggDx=4;
		el.ggDy=51;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 59px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #d8d8d8;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		hs+='color: #000000;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="\u5706\u5e7f\u573a";
		el.appendChild(els);
		me._text_1_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_1_4.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_1_4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_1_4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_1_4.style[domTransition]='';
				if (me._text_1_4.ggCurrentLogicStateVisible == 0) {
					me._text_1_4.style.visibility=(Number(me._text_1_4.style.opacity)>0||!me._text_1_4.style.opacity)?'inherit':'hidden';
					me._text_1_4.ggVisible=true;
				}
				else {
					me._text_1_4.style.visibility="hidden";
					me._text_1_4.ggVisible=false;
				}
			}
		}
		me._text_1_4.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((57-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._yuanxing.appendChild(me._text_1_4);
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['image_1_4']) {
					me._text_1_4.style[domTransition]='none';
					me._text_1_4.style.visibility=(Number(me._text_1_4.style.opacity)>0||!me._text_1_4.style.opacity)?'inherit':'hidden';
					me._text_1_4.ggVisible=true;
				}
			}
			me.hotspotTimerEvent();
		me.__div = me._yuanxing;
	};
	function SkinHotspotClass_yuancao(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._yuancao=document.createElement('div');
		el.ggId="yuancao";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 300px;';
		hs+='position : absolute;';
		hs+='top : 323px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._yuancao.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._yuancao.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._yuancao.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._yuancao.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._yuancao.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._yuancao.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1_3=document.createElement('div');
		els=me._image_1_3__img=document.createElement('img');
		els.className='ggskin ggskin_image_1_3';
		hs='data:image/png;base64,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'+
			'5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1_3";
		el.ggDx=5;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 64px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 67px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_1_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_1_3.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_ht') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._image_1_3.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._image_1_3.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._image_1_3.style[domTransition]='' + cssPrefix + 'transform 750ms ease 0ms';
				if (me._image_1_3.ggCurrentLogicStateScaling == 0) {
					me._image_1_3.ggParameter.sx = 0.8;
					me._image_1_3.ggParameter.sy = 0.8;
					me._image_1_3.style[domTransform]=parameterToTransform(me._image_1_3.ggParameter);
				}
				else {
					me._image_1_3.ggParameter.sx = 1;
					me._image_1_3.ggParameter.sy = 1;
					me._image_1_3.style[domTransform]=parameterToTransform(me._image_1_3.ggParameter);
				}
			}
		}
		me._image_1_3.onclick=function (e) {
			player.openNext("{node14}","");
		}
		me._image_1_3.onmouseover=function (e) {
			me.elementMouseOver['image_1_3']=true;
		}
		me._image_1_3.onmouseout=function (e) {
			if (
				(
					((player.getIsMobile() == false))
				)
			) {
				me._text_1_3.style[domTransition]='none';
				me._text_1_3.style.visibility='hidden';
				me._text_1_3.ggVisible=false;
			}
			me.elementMouseOver['image_1_3']=false;
		}
		me._image_1_3.ontouchend=function (e) {
			me.elementMouseOver['image_1_3']=false;
		}
		me._image_1_3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._yuancao.appendChild(me._image_1_3);
		el=me._text_1_3=document.createElement('div');
		els=me._text_1_3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1_3";
		el.ggDx=4;
		el.ggDy=51;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 59px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #d8d8d8;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		hs+='color: #000000;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="\u5706\u8349\u576a";
		el.appendChild(els);
		me._text_1_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_1_3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_1_3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_1_3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_1_3.style[domTransition]='';
				if (me._text_1_3.ggCurrentLogicStateVisible == 0) {
					me._text_1_3.style.visibility=(Number(me._text_1_3.style.opacity)>0||!me._text_1_3.style.opacity)?'inherit':'hidden';
					me._text_1_3.ggVisible=true;
				}
				else {
					me._text_1_3.style.visibility="hidden";
					me._text_1_3.ggVisible=false;
				}
			}
		}
		me._text_1_3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((57-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._yuancao.appendChild(me._text_1_3);
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['image_1_3']) {
					me._text_1_3.style[domTransition]='none';
					me._text_1_3.style.visibility=(Number(me._text_1_3.style.opacity)>0||!me._text_1_3.style.opacity)?'inherit':'hidden';
					me._text_1_3.ggVisible=true;
				}
			}
			me.hotspotTimerEvent();
		me.__div = me._yuancao;
	};
	function SkinHotspotClass_zoulang(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._zoulang=document.createElement('div');
		el.ggId="zoulang";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 300px;';
		hs+='position : absolute;';
		hs+='top : 323px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._zoulang.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._zoulang.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._zoulang.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._zoulang.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._zoulang.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._zoulang.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1_2=document.createElement('div');
		els=me._image_1_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_1_2';
		hs='data:image/png;base64,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'+
			'5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1_2";
		el.ggDx=5;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 64px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 67px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_1_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_1_2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_ht') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._image_1_2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._image_1_2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._image_1_2.style[domTransition]='' + cssPrefix + 'transform 750ms ease 0ms';
				if (me._image_1_2.ggCurrentLogicStateScaling == 0) {
					me._image_1_2.ggParameter.sx = 0.8;
					me._image_1_2.ggParameter.sy = 0.8;
					me._image_1_2.style[domTransform]=parameterToTransform(me._image_1_2.ggParameter);
				}
				else {
					me._image_1_2.ggParameter.sx = 1;
					me._image_1_2.ggParameter.sy = 1;
					me._image_1_2.style[domTransform]=parameterToTransform(me._image_1_2.ggParameter);
				}
			}
		}
		me._image_1_2.onclick=function (e) {
			player.openNext("{node13}","");
		}
		me._image_1_2.onmouseover=function (e) {
			me.elementMouseOver['image_1_2']=true;
		}
		me._image_1_2.onmouseout=function (e) {
			if (
				(
					((player.getIsMobile() == false))
				)
			) {
				me._text_1_2.style[domTransition]='none';
				me._text_1_2.style.visibility='hidden';
				me._text_1_2.ggVisible=false;
			}
			me.elementMouseOver['image_1_2']=false;
		}
		me._image_1_2.ontouchend=function (e) {
			me.elementMouseOver['image_1_2']=false;
		}
		me._image_1_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._zoulang.appendChild(me._image_1_2);
		el=me._text_1_2=document.createElement('div');
		els=me._text_1_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1_2";
		el.ggDx=4;
		el.ggDy=51;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 59px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #d8d8d8;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		hs+='color: #000000;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="\u5c0f\u8d70\u5eca";
		el.appendChild(els);
		me._text_1_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_1_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_1_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_1_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_1_2.style[domTransition]='';
				if (me._text_1_2.ggCurrentLogicStateVisible == 0) {
					me._text_1_2.style.visibility=(Number(me._text_1_2.style.opacity)>0||!me._text_1_2.style.opacity)?'inherit':'hidden';
					me._text_1_2.ggVisible=true;
				}
				else {
					me._text_1_2.style.visibility="hidden";
					me._text_1_2.ggVisible=false;
				}
			}
		}
		me._text_1_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((57-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._zoulang.appendChild(me._text_1_2);
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['image_1_2']) {
					me._text_1_2.style[domTransition]='none';
					me._text_1_2.style.visibility=(Number(me._text_1_2.style.opacity)>0||!me._text_1_2.style.opacity)?'inherit':'hidden';
					me._text_1_2.ggVisible=true;
				}
			}
			me.hotspotTimerEvent();
		me.__div = me._zoulang;
	};
	function SkinHotspotClass_beimen(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._beimen=document.createElement('div');
		el.ggId="beimen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 300px;';
		hs+='position : absolute;';
		hs+='top : 323px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._beimen.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._beimen.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._beimen.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._beimen.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._beimen.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._beimen.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1_1=document.createElement('div');
		els=me._image_1_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1_1';
		hs='data:image/png;base64,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'+
			'5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1_1";
		el.ggDx=5;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 64px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 67px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_1_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_1_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_ht') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._image_1_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._image_1_1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._image_1_1.style[domTransition]='' + cssPrefix + 'transform 750ms ease 0ms';
				if (me._image_1_1.ggCurrentLogicStateScaling == 0) {
					me._image_1_1.ggParameter.sx = 0.8;
					me._image_1_1.ggParameter.sy = 0.8;
					me._image_1_1.style[domTransform]=parameterToTransform(me._image_1_1.ggParameter);
				}
				else {
					me._image_1_1.ggParameter.sx = 1;
					me._image_1_1.ggParameter.sy = 1;
					me._image_1_1.style[domTransform]=parameterToTransform(me._image_1_1.ggParameter);
				}
			}
		}
		me._image_1_1.onclick=function (e) {
			player.openNext("{node2}","");
		}
		me._image_1_1.onmouseover=function (e) {
			me.elementMouseOver['image_1_1']=true;
		}
		me._image_1_1.onmouseout=function (e) {
			if (
				(
					((player.getIsMobile() == false))
				)
			) {
				me._text_1_1.style[domTransition]='none';
				me._text_1_1.style.visibility='hidden';
				me._text_1_1.ggVisible=false;
			}
			me.elementMouseOver['image_1_1']=false;
		}
		me._image_1_1.ontouchend=function (e) {
			me.elementMouseOver['image_1_1']=false;
		}
		me._image_1_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._beimen.appendChild(me._image_1_1);
		el=me._text_1_1=document.createElement('div');
		els=me._text_1_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1_1";
		el.ggDx=4;
		el.ggDy=51;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 59px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #d8d8d8;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		hs+='color: #000000;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="\u5317\u95e8\u5185";
		el.appendChild(els);
		me._text_1_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_1_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_1_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_1_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_1_1.style[domTransition]='';
				if (me._text_1_1.ggCurrentLogicStateVisible == 0) {
					me._text_1_1.style.visibility=(Number(me._text_1_1.style.opacity)>0||!me._text_1_1.style.opacity)?'inherit':'hidden';
					me._text_1_1.ggVisible=true;
				}
				else {
					me._text_1_1.style.visibility="hidden";
					me._text_1_1.ggVisible=false;
				}
			}
		}
		me._text_1_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((57-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._beimen.appendChild(me._text_1_1);
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['image_1_1']) {
					me._text_1_1.style[domTransition]='none';
					me._text_1_1.style.visibility=(Number(me._text_1_1.style.opacity)>0||!me._text_1_1.style.opacity)?'inherit':'hidden';
					me._text_1_1.ggVisible=true;
				}
			}
			me.hotspotTimerEvent();
		me.__div = me._beimen;
	};
	function SkinHotspotClass_zhengmen(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._zhengmen=document.createElement('div');
		el.ggId="zhengmen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 300px;';
		hs+='position : absolute;';
		hs+='top : 323px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._zhengmen.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._zhengmen.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._zhengmen.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._zhengmen.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._zhengmen.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._zhengmen.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs='data:image/png;base64,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'+
			'5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=5;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 64px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 67px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_ht') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._image_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._image_1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._image_1.style[domTransition]='' + cssPrefix + 'transform 750ms ease 0ms';
				if (me._image_1.ggCurrentLogicStateScaling == 0) {
					me._image_1.ggParameter.sx = 0.8;
					me._image_1.ggParameter.sy = 0.8;
					me._image_1.style[domTransform]=parameterToTransform(me._image_1.ggParameter);
				}
				else {
					me._image_1.ggParameter.sx = 1;
					me._image_1.ggParameter.sy = 1;
					me._image_1.style[domTransform]=parameterToTransform(me._image_1.ggParameter);
				}
			}
		}
		me._image_1.onclick=function (e) {
			player.openNext("{node16}","");
		}
		me._image_1.onmouseover=function (e) {
			me.elementMouseOver['image_1']=true;
		}
		me._image_1.onmouseout=function (e) {
			if (
				(
					((player.getIsMobile() == false))
				)
			) {
				me._text_1.style[domTransition]='none';
				me._text_1.style.visibility='hidden';
				me._text_1.ggVisible=false;
			}
			me.elementMouseOver['image_1']=false;
		}
		me._image_1.ontouchend=function (e) {
			me.elementMouseOver['image_1']=false;
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._zhengmen.appendChild(me._image_1);
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=4;
		el.ggDy=51;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 59px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #d8d8d8;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		hs+='color: #000000;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="\u6b63\u95e8";
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_1.style[domTransition]='';
				if (me._text_1.ggCurrentLogicStateVisible == 0) {
					me._text_1.style.visibility=(Number(me._text_1.style.opacity)>0||!me._text_1.style.opacity)?'inherit':'hidden';
					me._text_1.ggVisible=true;
				}
				else {
					me._text_1.style.visibility="hidden";
					me._text_1.ggVisible=false;
				}
			}
		}
		me._text_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((57-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._zhengmen.appendChild(me._text_1);
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['image_1']) {
					me._text_1.style[domTransition]='none';
					me._text_1.style.visibility=(Number(me._text_1.style.opacity)>0||!me._text_1.style.opacity)?'inherit':'hidden';
					me._text_1.ggVisible=true;
				}
			}
			me.hotspotTimerEvent();
		me.__div = me._zhengmen;
	};
	function SkinHotspotClass_xiaoting(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._xiaoting=document.createElement('div');
		el.ggId="xiaoting";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 300px;';
		hs+='position : absolute;';
		hs+='top : 323px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._xiaoting.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._xiaoting.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._xiaoting.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._xiaoting.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._xiaoting.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._xiaoting.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1_6=document.createElement('div');
		els=me._image_1_6__img=document.createElement('img');
		els.className='ggskin ggskin_image_1_6';
		hs='data:image/png;base64,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'+
			'5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1_6";
		el.ggDx=5;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 64px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 67px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_1_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_1_6.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_ht') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._image_1_6.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._image_1_6.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._image_1_6.style[domTransition]='' + cssPrefix + 'transform 750ms ease 0ms';
				if (me._image_1_6.ggCurrentLogicStateScaling == 0) {
					me._image_1_6.ggParameter.sx = 0.8;
					me._image_1_6.ggParameter.sy = 0.8;
					me._image_1_6.style[domTransform]=parameterToTransform(me._image_1_6.ggParameter);
				}
				else {
					me._image_1_6.ggParameter.sx = 1;
					me._image_1_6.ggParameter.sy = 1;
					me._image_1_6.style[domTransform]=parameterToTransform(me._image_1_6.ggParameter);
				}
			}
		}
		me._image_1_6.onclick=function (e) {
			player.openNext("{node11}","");
		}
		me._image_1_6.onmouseover=function (e) {
			me.elementMouseOver['image_1_6']=true;
		}
		me._image_1_6.onmouseout=function (e) {
			if (
				(
					((player.getIsMobile() == false))
				)
			) {
				me._text_1_6.style[domTransition]='none';
				me._text_1_6.style.visibility='hidden';
				me._text_1_6.ggVisible=false;
			}
			me.elementMouseOver['image_1_6']=false;
		}
		me._image_1_6.ontouchend=function (e) {
			me.elementMouseOver['image_1_6']=false;
		}
		me._image_1_6.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._xiaoting.appendChild(me._image_1_6);
		el=me._text_1_6=document.createElement('div');
		els=me._text_1_6__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1_6";
		el.ggDx=4;
		el.ggDy=51;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 59px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #d8d8d8;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		hs+='color: #000000;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="\u5c0f\u4ead";
		el.appendChild(els);
		me._text_1_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_1_6.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_1_6.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_1_6.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_1_6.style[domTransition]='';
				if (me._text_1_6.ggCurrentLogicStateVisible == 0) {
					me._text_1_6.style.visibility=(Number(me._text_1_6.style.opacity)>0||!me._text_1_6.style.opacity)?'inherit':'hidden';
					me._text_1_6.ggVisible=true;
				}
				else {
					me._text_1_6.style.visibility="hidden";
					me._text_1_6.ggVisible=false;
				}
			}
		}
		me._text_1_6.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((57-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._xiaoting.appendChild(me._text_1_6);
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['image_1_6']) {
					me._text_1_6.style[domTransition]='none';
					me._text_1_6.style.visibility=(Number(me._text_1_6.style.opacity)>0||!me._text_1_6.style.opacity)?'inherit':'hidden';
					me._text_1_6.ggVisible=true;
				}
			}
			me.hotspotTimerEvent();
		me.__div = me._xiaoting;
	};
	function SkinHotspotClass_xibu(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._xibu=document.createElement('div');
		el.ggId="xibu";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 300px;';
		hs+='position : absolute;';
		hs+='top : 323px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._xibu.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._xibu.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._xibu.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._xibu.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._xibu.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._xibu.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1_7=document.createElement('div');
		els=me._image_1_7__img=document.createElement('img');
		els.className='ggskin ggskin_image_1_7';
		hs='data:image/png;base64,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'+
			'5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1_7";
		el.ggDx=5;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 64px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 67px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_1_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_1_7.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_ht') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._image_1_7.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._image_1_7.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._image_1_7.style[domTransition]='' + cssPrefix + 'transform 750ms ease 0ms';
				if (me._image_1_7.ggCurrentLogicStateScaling == 0) {
					me._image_1_7.ggParameter.sx = 0.8;
					me._image_1_7.ggParameter.sy = 0.8;
					me._image_1_7.style[domTransform]=parameterToTransform(me._image_1_7.ggParameter);
				}
				else {
					me._image_1_7.ggParameter.sx = 1;
					me._image_1_7.ggParameter.sy = 1;
					me._image_1_7.style[domTransform]=parameterToTransform(me._image_1_7.ggParameter);
				}
			}
		}
		me._image_1_7.onclick=function (e) {
			player.openNext("{node8}","");
		}
		me._image_1_7.onmouseover=function (e) {
			me.elementMouseOver['image_1_7']=true;
		}
		me._image_1_7.onmouseout=function (e) {
			if (
				(
					((player.getIsMobile() == false))
				)
			) {
				me._text_1_7.style[domTransition]='none';
				me._text_1_7.style.visibility='hidden';
				me._text_1_7.ggVisible=false;
			}
			me.elementMouseOver['image_1_7']=false;
		}
		me._image_1_7.ontouchend=function (e) {
			me.elementMouseOver['image_1_7']=false;
		}
		me._image_1_7.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._xibu.appendChild(me._image_1_7);
		el=me._text_1_7=document.createElement('div');
		els=me._text_1_7__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1_7";
		el.ggDx=4;
		el.ggDy=51;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 59px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #d8d8d8;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		hs+='color: #000000;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="\u897f\u90e8\u9053\u8def";
		el.appendChild(els);
		me._text_1_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_1_7.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_1_7.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_1_7.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_1_7.style[domTransition]='';
				if (me._text_1_7.ggCurrentLogicStateVisible == 0) {
					me._text_1_7.style.visibility=(Number(me._text_1_7.style.opacity)>0||!me._text_1_7.style.opacity)?'inherit':'hidden';
					me._text_1_7.ggVisible=true;
				}
				else {
					me._text_1_7.style.visibility="hidden";
					me._text_1_7.ggVisible=false;
				}
			}
		}
		me._text_1_7.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((57-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._xibu.appendChild(me._text_1_7);
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['image_1_7']) {
					me._text_1_7.style[domTransition]='none';
					me._text_1_7.style.visibility=(Number(me._text_1_7.style.opacity)>0||!me._text_1_7.style.opacity)?'inherit':'hidden';
					me._text_1_7.ggVisible=true;
				}
			}
			me.hotspotTimerEvent();
		me.__div = me._xibu;
	};
	function SkinHotspotClass_xiuxi(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._xiuxi=document.createElement('div');
		el.ggId="xiuxi";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 300px;';
		hs+='position : absolute;';
		hs+='top : 323px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._xiuxi.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._xiuxi.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._xiuxi.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._xiuxi.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._xiuxi.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._xiuxi.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1_8=document.createElement('div');
		els=me._image_1_8__img=document.createElement('img');
		els.className='ggskin ggskin_image_1_8';
		hs='data:image/png;base64,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'+
			'5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1_8";
		el.ggDx=5;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 64px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 67px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_1_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_1_8.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_ht') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._image_1_8.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._image_1_8.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._image_1_8.style[domTransition]='' + cssPrefix + 'transform 750ms ease 0ms';
				if (me._image_1_8.ggCurrentLogicStateScaling == 0) {
					me._image_1_8.ggParameter.sx = 0.8;
					me._image_1_8.ggParameter.sy = 0.8;
					me._image_1_8.style[domTransform]=parameterToTransform(me._image_1_8.ggParameter);
				}
				else {
					me._image_1_8.ggParameter.sx = 1;
					me._image_1_8.ggParameter.sy = 1;
					me._image_1_8.style[domTransform]=parameterToTransform(me._image_1_8.ggParameter);
				}
			}
		}
		me._image_1_8.onclick=function (e) {
			player.openNext("{node1}","");
		}
		me._image_1_8.onmouseover=function (e) {
			me.elementMouseOver['image_1_8']=true;
		}
		me._image_1_8.onmouseout=function (e) {
			if (
				(
					((player.getIsMobile() == false))
				)
			) {
				me._text_1_8.style[domTransition]='none';
				me._text_1_8.style.visibility='hidden';
				me._text_1_8.ggVisible=false;
			}
			me.elementMouseOver['image_1_8']=false;
		}
		me._image_1_8.ontouchend=function (e) {
			me.elementMouseOver['image_1_8']=false;
		}
		me._image_1_8.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._xiuxi.appendChild(me._image_1_8);
		el=me._text_1_8=document.createElement('div');
		els=me._text_1_8__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1_8";
		el.ggDx=4;
		el.ggDy=51;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 59px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #d8d8d8;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		hs+='color: #000000;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="\u4f11\u606f\u533a";
		el.appendChild(els);
		me._text_1_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_1_8.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_1_8.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_1_8.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_1_8.style[domTransition]='';
				if (me._text_1_8.ggCurrentLogicStateVisible == 0) {
					me._text_1_8.style.visibility=(Number(me._text_1_8.style.opacity)>0||!me._text_1_8.style.opacity)?'inherit':'hidden';
					me._text_1_8.ggVisible=true;
				}
				else {
					me._text_1_8.style.visibility="hidden";
					me._text_1_8.ggVisible=false;
				}
			}
		}
		me._text_1_8.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((57-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._xiuxi.appendChild(me._text_1_8);
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['image_1_8']) {
					me._text_1_8.style[domTransition]='none';
					me._text_1_8.style.visibility=(Number(me._text_1_8.style.opacity)>0||!me._text_1_8.style.opacity)?'inherit':'hidden';
					me._text_1_8.ggVisible=true;
				}
			}
			me.hotspotTimerEvent();
		me.__div = me._xiuxi;
	};
	function SkinHotspotClass_zhongxin(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._zhongxin=document.createElement('div');
		el.ggId="zhongxin";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 300px;';
		hs+='position : absolute;';
		hs+='top : 323px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._zhongxin.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._zhongxin.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._zhongxin.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._zhongxin.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._zhongxin.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._zhongxin.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1_9=document.createElement('div');
		els=me._image_1_9__img=document.createElement('img');
		els.className='ggskin ggskin_image_1_9';
		hs='data:image/png;base64,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'+
			'5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1_9";
		el.ggDx=5;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 64px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 67px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_1_9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_1_9.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_ht') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._image_1_9.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._image_1_9.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._image_1_9.style[domTransition]='' + cssPrefix + 'transform 750ms ease 0ms';
				if (me._image_1_9.ggCurrentLogicStateScaling == 0) {
					me._image_1_9.ggParameter.sx = 0.8;
					me._image_1_9.ggParameter.sy = 0.8;
					me._image_1_9.style[domTransform]=parameterToTransform(me._image_1_9.ggParameter);
				}
				else {
					me._image_1_9.ggParameter.sx = 1;
					me._image_1_9.ggParameter.sy = 1;
					me._image_1_9.style[domTransform]=parameterToTransform(me._image_1_9.ggParameter);
				}
			}
		}
		me._image_1_9.onclick=function (e) {
			player.openNext("{node10}","");
		}
		me._image_1_9.onmouseover=function (e) {
			me.elementMouseOver['image_1_9']=true;
		}
		me._image_1_9.onmouseout=function (e) {
			if (
				(
					((player.getIsMobile() == false))
				)
			) {
				me._text_1_9.style[domTransition]='none';
				me._text_1_9.style.visibility='hidden';
				me._text_1_9.ggVisible=false;
			}
			me.elementMouseOver['image_1_9']=false;
		}
		me._image_1_9.ontouchend=function (e) {
			me.elementMouseOver['image_1_9']=false;
		}
		me._image_1_9.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._zhongxin.appendChild(me._image_1_9);
		el=me._text_1_9=document.createElement('div');
		els=me._text_1_9__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1_9";
		el.ggDx=4;
		el.ggDy=51;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 59px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #d8d8d8;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		hs+='color: #000000;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="\u5c0f\u533a\u4e2d\u5fc3";
		el.appendChild(els);
		me._text_1_9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_1_9.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_1_9.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_1_9.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_1_9.style[domTransition]='';
				if (me._text_1_9.ggCurrentLogicStateVisible == 0) {
					me._text_1_9.style.visibility=(Number(me._text_1_9.style.opacity)>0||!me._text_1_9.style.opacity)?'inherit':'hidden';
					me._text_1_9.ggVisible=true;
				}
				else {
					me._text_1_9.style.visibility="hidden";
					me._text_1_9.ggVisible=false;
				}
			}
		}
		me._text_1_9.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((57-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._zhongxin.appendChild(me._text_1_9);
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['image_1_9']) {
					me._text_1_9.style[domTransition]='none';
					me._text_1_9.style.visibility=(Number(me._text_1_9.style.opacity)>0||!me._text_1_9.style.opacity)?'inherit':'hidden';
					me._text_1_9.ggVisible=true;
				}
			}
			me.hotspotTimerEvent();
		me.__div = me._zhongxin;
	};
	function SkinHotspotClass_dongbu(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._dongbu=document.createElement('div');
		el.ggId="dongbu";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 300px;';
		hs+='position : absolute;';
		hs+='top : 323px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dongbu.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._dongbu.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._dongbu.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._dongbu.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._dongbu.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._dongbu.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1_10=document.createElement('div');
		els=me._image_1_10__img=document.createElement('img');
		els.className='ggskin ggskin_image_1_10';
		hs='data:image/png;base64,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'+
			'5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1_10";
		el.ggDx=5;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 64px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 67px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_1_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_1_10.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_ht') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._image_1_10.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._image_1_10.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._image_1_10.style[domTransition]='' + cssPrefix + 'transform 750ms ease 0ms';
				if (me._image_1_10.ggCurrentLogicStateScaling == 0) {
					me._image_1_10.ggParameter.sx = 0.8;
					me._image_1_10.ggParameter.sy = 0.8;
					me._image_1_10.style[domTransform]=parameterToTransform(me._image_1_10.ggParameter);
				}
				else {
					me._image_1_10.ggParameter.sx = 1;
					me._image_1_10.ggParameter.sy = 1;
					me._image_1_10.style[domTransform]=parameterToTransform(me._image_1_10.ggParameter);
				}
			}
		}
		me._image_1_10.onclick=function (e) {
			player.openNext("{node12}","");
		}
		me._image_1_10.onmouseover=function (e) {
			me.elementMouseOver['image_1_10']=true;
		}
		me._image_1_10.onmouseout=function (e) {
			if (
				(
					((player.getIsMobile() == false))
				)
			) {
				me._text_1_10.style[domTransition]='none';
				me._text_1_10.style.visibility='hidden';
				me._text_1_10.ggVisible=false;
			}
			me.elementMouseOver['image_1_10']=false;
		}
		me._image_1_10.ontouchend=function (e) {
			me.elementMouseOver['image_1_10']=false;
		}
		me._image_1_10.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._dongbu.appendChild(me._image_1_10);
		el=me._text_1_10=document.createElement('div');
		els=me._text_1_10__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1_10";
		el.ggDx=4;
		el.ggDy=51;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 59px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #d8d8d8;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		hs+='color: #000000;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="\u4e1c\u90e8\u9053\u8def";
		el.appendChild(els);
		me._text_1_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_1_10.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_1_10.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_1_10.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_1_10.style[domTransition]='';
				if (me._text_1_10.ggCurrentLogicStateVisible == 0) {
					me._text_1_10.style.visibility=(Number(me._text_1_10.style.opacity)>0||!me._text_1_10.style.opacity)?'inherit':'hidden';
					me._text_1_10.ggVisible=true;
				}
				else {
					me._text_1_10.style.visibility="hidden";
					me._text_1_10.ggVisible=false;
				}
			}
		}
		me._text_1_10.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((57-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._dongbu.appendChild(me._text_1_10);
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['image_1_10']) {
					me._text_1_10.style[domTransition]='none';
					me._text_1_10.style.visibility=(Number(me._text_1_10.style.opacity)>0||!me._text_1_10.style.opacity)?'inherit':'hidden';
					me._text_1_10.ggVisible=true;
				}
			}
			me.hotspotTimerEvent();
		me.__div = me._dongbu;
	};
	function SkinHotspotClass_shequ(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._shequ=document.createElement('div');
		el.ggId="shequ";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 300px;';
		hs+='position : absolute;';
		hs+='top : 323px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._shequ.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._shequ.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._shequ.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._shequ.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._shequ.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._shequ.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1_11=document.createElement('div');
		els=me._image_1_11__img=document.createElement('img');
		els.className='ggskin ggskin_image_1_11';
		hs='data:image/png;base64,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'+
			'5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1_11";
		el.ggDx=5;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 64px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 67px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_1_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_1_11.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_ht') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._image_1_11.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._image_1_11.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._image_1_11.style[domTransition]='' + cssPrefix + 'transform 750ms ease 0ms';
				if (me._image_1_11.ggCurrentLogicStateScaling == 0) {
					me._image_1_11.ggParameter.sx = 0.8;
					me._image_1_11.ggParameter.sy = 0.8;
					me._image_1_11.style[domTransform]=parameterToTransform(me._image_1_11.ggParameter);
				}
				else {
					me._image_1_11.ggParameter.sx = 1;
					me._image_1_11.ggParameter.sy = 1;
					me._image_1_11.style[domTransform]=parameterToTransform(me._image_1_11.ggParameter);
				}
			}
		}
		me._image_1_11.onclick=function (e) {
			player.openNext("{node7}","");
		}
		me._image_1_11.onmouseover=function (e) {
			me.elementMouseOver['image_1_11']=true;
		}
		me._image_1_11.onmouseout=function (e) {
			if (
				(
					((player.getIsMobile() == false))
				)
			) {
				me._text_1_11.style[domTransition]='none';
				me._text_1_11.style.visibility='hidden';
				me._text_1_11.ggVisible=false;
			}
			me.elementMouseOver['image_1_11']=false;
		}
		me._image_1_11.ontouchend=function (e) {
			me.elementMouseOver['image_1_11']=false;
		}
		me._image_1_11.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._shequ.appendChild(me._image_1_11);
		el=me._text_1_11=document.createElement('div');
		els=me._text_1_11__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1_11";
		el.ggDx=4;
		el.ggDy=51;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 59px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #d8d8d8;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		hs+='color: #000000;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="\u793e\u533a\u670d\u52a1\u5904";
		el.appendChild(els);
		me._text_1_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_1_11.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_1_11.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_1_11.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_1_11.style[domTransition]='';
				if (me._text_1_11.ggCurrentLogicStateVisible == 0) {
					me._text_1_11.style.visibility=(Number(me._text_1_11.style.opacity)>0||!me._text_1_11.style.opacity)?'inherit':'hidden';
					me._text_1_11.ggVisible=true;
				}
				else {
					me._text_1_11.style.visibility="hidden";
					me._text_1_11.ggVisible=false;
				}
			}
		}
		me._text_1_11.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((57-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._shequ.appendChild(me._text_1_11);
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['image_1_11']) {
					me._text_1_11.style[domTransition]='none';
					me._text_1_11.style.visibility=(Number(me._text_1_11.style.opacity)>0||!me._text_1_11.style.opacity)?'inherit':'hidden';
					me._text_1_11.ggVisible=true;
				}
			}
			me.hotspotTimerEvent();
		me.__div = me._shequ;
	};
	function SkinHotspotClass_jianshen(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._jianshen=document.createElement('div');
		el.ggId="jianshen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 300px;';
		hs+='position : absolute;';
		hs+='top : 323px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._jianshen.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._jianshen.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._jianshen.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._jianshen.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._jianshen.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._jianshen.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1_12=document.createElement('div');
		els=me._image_1_12__img=document.createElement('img');
		els.className='ggskin ggskin_image_1_12';
		hs='data:image/png;base64,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'+
			'5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1_12";
		el.ggDx=5;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 64px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 67px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_1_12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_1_12.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_ht') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._image_1_12.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._image_1_12.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._image_1_12.style[domTransition]='' + cssPrefix + 'transform 750ms ease 0ms';
				if (me._image_1_12.ggCurrentLogicStateScaling == 0) {
					me._image_1_12.ggParameter.sx = 0.8;
					me._image_1_12.ggParameter.sy = 0.8;
					me._image_1_12.style[domTransform]=parameterToTransform(me._image_1_12.ggParameter);
				}
				else {
					me._image_1_12.ggParameter.sx = 1;
					me._image_1_12.ggParameter.sy = 1;
					me._image_1_12.style[domTransform]=parameterToTransform(me._image_1_12.ggParameter);
				}
			}
		}
		me._image_1_12.onclick=function (e) {
			player.openNext("{node5}","");
		}
		me._image_1_12.onmouseover=function (e) {
			me.elementMouseOver['image_1_12']=true;
		}
		me._image_1_12.onmouseout=function (e) {
			if (
				(
					((player.getIsMobile() == false))
				)
			) {
				me._text_1_12.style[domTransition]='none';
				me._text_1_12.style.visibility='hidden';
				me._text_1_12.ggVisible=false;
			}
			me.elementMouseOver['image_1_12']=false;
		}
		me._image_1_12.ontouchend=function (e) {
			me.elementMouseOver['image_1_12']=false;
		}
		me._image_1_12.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._jianshen.appendChild(me._image_1_12);
		el=me._text_1_12=document.createElement('div');
		els=me._text_1_12__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1_12";
		el.ggDx=4;
		el.ggDy=51;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 59px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #d8d8d8;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		hs+='color: #000000;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="\u5065\u8eab\u573a";
		el.appendChild(els);
		me._text_1_12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_1_12.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_1_12.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_1_12.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_1_12.style[domTransition]='';
				if (me._text_1_12.ggCurrentLogicStateVisible == 0) {
					me._text_1_12.style.visibility=(Number(me._text_1_12.style.opacity)>0||!me._text_1_12.style.opacity)?'inherit':'hidden';
					me._text_1_12.ggVisible=true;
				}
				else {
					me._text_1_12.style.visibility="hidden";
					me._text_1_12.ggVisible=false;
				}
			}
		}
		me._text_1_12.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((57-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._jianshen.appendChild(me._text_1_12);
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['image_1_12']) {
					me._text_1_12.style[domTransition]='none';
					me._text_1_12.style.visibility=(Number(me._text_1_12.style.opacity)>0||!me._text_1_12.style.opacity)?'inherit':'hidden';
					me._text_1_12.ggVisible=true;
				}
			}
			me.hotspotTimerEvent();
		me.__div = me._jianshen;
	};
	function SkinHotspotClass_huodong(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._huodong=document.createElement('div');
		el.ggId="huodong";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 300px;';
		hs+='position : absolute;';
		hs+='top : 323px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._huodong.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._huodong.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._huodong.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._huodong.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._huodong.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._huodong.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1_13=document.createElement('div');
		els=me._image_1_13__img=document.createElement('img');
		els.className='ggskin ggskin_image_1_13';
		hs='data:image/png;base64,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'+
			'5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1_13";
		el.ggDx=5;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 64px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 67px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_1_13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_1_13.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_ht') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._image_1_13.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._image_1_13.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._image_1_13.style[domTransition]='' + cssPrefix + 'transform 750ms ease 0ms';
				if (me._image_1_13.ggCurrentLogicStateScaling == 0) {
					me._image_1_13.ggParameter.sx = 0.8;
					me._image_1_13.ggParameter.sy = 0.8;
					me._image_1_13.style[domTransform]=parameterToTransform(me._image_1_13.ggParameter);
				}
				else {
					me._image_1_13.ggParameter.sx = 1;
					me._image_1_13.ggParameter.sy = 1;
					me._image_1_13.style[domTransform]=parameterToTransform(me._image_1_13.ggParameter);
				}
			}
		}
		me._image_1_13.onclick=function (e) {
			player.openNext("{node4}","");
		}
		me._image_1_13.onmouseover=function (e) {
			me.elementMouseOver['image_1_13']=true;
		}
		me._image_1_13.onmouseout=function (e) {
			if (
				(
					((player.getIsMobile() == false))
				)
			) {
				me._text_1_13.style[domTransition]='none';
				me._text_1_13.style.visibility='hidden';
				me._text_1_13.ggVisible=false;
			}
			me.elementMouseOver['image_1_13']=false;
		}
		me._image_1_13.ontouchend=function (e) {
			me.elementMouseOver['image_1_13']=false;
		}
		me._image_1_13.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._huodong.appendChild(me._image_1_13);
		el=me._text_1_13=document.createElement('div');
		els=me._text_1_13__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1_13";
		el.ggDx=4;
		el.ggDy=51;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 59px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #d8d8d8;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		hs+='color: #000000;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="\u6d3b\u52a8\u5e7f\u573a";
		el.appendChild(els);
		me._text_1_13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_1_13.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_1_13.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_1_13.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_1_13.style[domTransition]='';
				if (me._text_1_13.ggCurrentLogicStateVisible == 0) {
					me._text_1_13.style.visibility=(Number(me._text_1_13.style.opacity)>0||!me._text_1_13.style.opacity)?'inherit':'hidden';
					me._text_1_13.ggVisible=true;
				}
				else {
					me._text_1_13.style.visibility="hidden";
					me._text_1_13.ggVisible=false;
				}
			}
		}
		me._text_1_13.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((57-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._huodong.appendChild(me._text_1_13);
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['image_1_13']) {
					me._text_1_13.style[domTransition]='none';
					me._text_1_13.style.visibility=(Number(me._text_1_13.style.opacity)>0||!me._text_1_13.style.opacity)?'inherit':'hidden';
					me._text_1_13.ggVisible=true;
				}
			}
			me.hotspotTimerEvent();
		me.__div = me._huodong;
	};
	function SkinHotspotClass_nanmen(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._nanmen=document.createElement('div');
		el.ggId="nanmen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 300px;';
		hs+='position : absolute;';
		hs+='top : 323px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._nanmen.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._nanmen.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._nanmen.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._nanmen.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._nanmen.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._nanmen.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1_14=document.createElement('div');
		els=me._image_1_14__img=document.createElement('img');
		els.className='ggskin ggskin_image_1_14';
		hs='data:image/png;base64,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'+
			'5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1_14";
		el.ggDx=5;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 64px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 67px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_1_14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_1_14.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_ht') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._image_1_14.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._image_1_14.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._image_1_14.style[domTransition]='' + cssPrefix + 'transform 750ms ease 0ms';
				if (me._image_1_14.ggCurrentLogicStateScaling == 0) {
					me._image_1_14.ggParameter.sx = 0.8;
					me._image_1_14.ggParameter.sy = 0.8;
					me._image_1_14.style[domTransform]=parameterToTransform(me._image_1_14.ggParameter);
				}
				else {
					me._image_1_14.ggParameter.sx = 1;
					me._image_1_14.ggParameter.sy = 1;
					me._image_1_14.style[domTransform]=parameterToTransform(me._image_1_14.ggParameter);
				}
			}
		}
		me._image_1_14.onclick=function (e) {
			player.openNext("{node6}","");
		}
		me._image_1_14.onmouseover=function (e) {
			me.elementMouseOver['image_1_14']=true;
		}
		me._image_1_14.onmouseout=function (e) {
			if (
				(
					((player.getIsMobile() == false))
				)
			) {
				me._text_1_14.style[domTransition]='none';
				me._text_1_14.style.visibility='hidden';
				me._text_1_14.ggVisible=false;
			}
			me.elementMouseOver['image_1_14']=false;
		}
		me._image_1_14.ontouchend=function (e) {
			me.elementMouseOver['image_1_14']=false;
		}
		me._image_1_14.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._nanmen.appendChild(me._image_1_14);
		el=me._text_1_14=document.createElement('div');
		els=me._text_1_14__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1_14";
		el.ggDx=4;
		el.ggDy=51;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 59px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #d8d8d8;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		hs+='color: #000000;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="\u5357\u95e8\u5185\u90e8";
		el.appendChild(els);
		me._text_1_14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_1_14.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_1_14.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_1_14.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_1_14.style[domTransition]='';
				if (me._text_1_14.ggCurrentLogicStateVisible == 0) {
					me._text_1_14.style.visibility=(Number(me._text_1_14.style.opacity)>0||!me._text_1_14.style.opacity)?'inherit':'hidden';
					me._text_1_14.ggVisible=true;
				}
				else {
					me._text_1_14.style.visibility="hidden";
					me._text_1_14.ggVisible=false;
				}
			}
		}
		me._text_1_14.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((57-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._nanmen.appendChild(me._text_1_14);
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['image_1_14']) {
					me._text_1_14.style[domTransition]='none';
					me._text_1_14.style.visibility=(Number(me._text_1_14.style.opacity)>0||!me._text_1_14.style.opacity)?'inherit':'hidden';
					me._text_1_14.ggVisible=true;
				}
			}
			me.hotspotTimerEvent();
		me.__div = me._nanmen;
	};
	function SkinHotspotClass_ximen(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ximen=document.createElement('div');
		el.ggId="ximen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 300px;';
		hs+='position : absolute;';
		hs+='top : 323px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ximen.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ximen.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ximen.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ximen.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ximen.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ximen.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1_15=document.createElement('div');
		els=me._image_1_15__img=document.createElement('img');
		els.className='ggskin ggskin_image_1_15';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF0AAABZCAYAAABc4CjVAAAGZElEQVR4nO2dQW8cRRBGX7IYdu0YsrLjkNhYIjJZKZALElLCNXdO+Uv8m0hIuXIHTlwsghxFBEVx5JhENk5sr1kt5lDbwjjMTHdX9UyPvU9aOYp2Znq+ramurumuvnB8fHyRKbUyFbwBpqI3wFT0Bniv6QaUMI+0rwd0gA8qvn8EjIFDYDj5myU5iT4PXAZmgTmD842At8A+8IaMfoQLDUcvPeDjyd9u4msNgVfAa+SJaIymRO8DS9hYdCjuCdiiIeuvW/TriAtJbdW+7AGb1Cx+XaL3gWvkI/Zp/gBeUJPbSS16B1hFRM+dEfA70ukmJaXoS8BKonOnZAux+mSkEv1T2mHdRewAz0jkbqxF7wBrNBOVWLMPPCGB8Jai9xD/fRYEd4wQ4U2jGyvRe4'+
			'iFzxicKzfMhbcQvIP48LMoOMh9rSL3aYJWdOfDc42/rZhD7tNEeI3oZ6nT9GEOsXg1mixjHZ1mF1gAPpr8u+iJ2gX+RNK7rxK2x4XBTzUnie1IryPZwRR0gRvI4OpyxPEHwHPgNySzmIKnSCwfRYzo88BnsRcsYRF5ekwe4QnbwGPsrV8V0YSK3gEG2Haci0j0s2x4ztNsAuvYWv4eInwwoaJbD+9vATcNz1fGGPgZ+QGseI48TUGEiG7pVrrAl4jfrptniPgWjIBHBKYKQqz8k6DmFLMI3KEZwUH6jK+xcZEzSFARhK/ofWwa2QXuEheVWLKEPGkWXEHSIN74in4tvC3v0EUs3Gw4rcRS+KB+zkd0Kyu/Q/MWfppVpDPXskCAMfmIbmHlX5Gf4I6bSD+jYQb40PfLVaLPo7fyZdLG4BbcRX+f3oFBlehaC3ChYe50'+
			'gNvKc8zh2aFWiX5J2ZBb5NNxVrGM3sjmfb5UJnof3YsJl0tpE9rRsVfWtSy1q7Vyy+H9YPJxrCBDcICNyceCJcRYYhNkfTzSvmWiez0qBXSxGXEOgHv8fxzs/s/54gfYiL+KLivZoyL7WCR6B11vfkNxrOMbwjq3+0gm8aHyuhZ+vVT0Ip8+q7ywdmbXgLho4jb/dUMxzKITvmrxQqHosa7lb6TBsT/aGBHtfuTxTI7VCq9xjdGiVx5Ycr7YY0Hc2j3F8Q7tOZK++y0SXRNbX1UcO8DmJUkfnbVrQuXKdEAK0TUdsNYtWJ0raa6/SHTN47WgONZyarV2WJ+MFNOkNU9Jm6dXezNdvNsAU9EbIDfR1zM9lykpRA+eB3ICq8SV9lyae6ic0FQk+p7ioiPFsbmIrrmHv6q+kMLS95XHW7iFB8rjNfdQOfGoSPQjxUU1j+'+
			'YY+A6d8OvonxjNPVRqV5Ta1YiuyUW7GP8hIlxo4ssqp665h8qZvEWWrl3UZDFJc4MwN2EluLbtlR1pkaVrl2q/wGbaxQbwLfJCY4V3R6w7yGs77YuLk2hXS1cabNnruj0CJtCcYhP4HP3LEIelqGUcoLN0r9UZZdHLgeLiIMtP2sYvyuO9op4y0aPX1Ex4gv6HqxOtlYOnWy4T3RUg06C1nDrRLhTYxzMAqRocaTvUTWTlQ+5YLAbz9gxVolusSnuErPPMlV1s+p/Xvl+sEv0QvW8fAj/RcIW4AsZI27RudIeA+/PJvVhY+xD4kbyEHyNtsljmuBXyZR/R36DLOjq2ge/Jw9XsIm2xMKgdAkfwvllGi2H9Rf51NZqEkpZdbFwKSAo4yMrBX/RDpIyeBUPgByRiqJvH2AkO0nkG56lCFu+mWqL+BenXIzn/bVkjYIhE'+
			'ZsGELlPvI0vVrVlDZvpa5WocriJGlDgV/EpNBRlAVk5fibmYB8vICmRthnJ78okqmOCBqnZjbL2XNeIzkD644jpXJ9epcj+7SIT1EvGzqeq8gKL6hSNW9BT+vQ2Y1GqMfTE9RtbWaN6at40RRlVJNbMBDpFf/TwIb1qb0aIY5lmsPHqSfcTCzYphWlUgPavlApPU27WabDRGGqedaJQTrShwDO0qUl9Gq0p5O/rIlIm21d8dISNY7TuEUlLuFNBDUgZtieWHSBicfFOSOjYiacM2DVGl/mKpa/cXt4lUbr5+hwb2O6p7n6NcxG9EbEdTO3p1kGRWnRtNDZHE2EvO6TZqJ+kjtWUs6oWdZoi8431L4ogkhBxEP4nbOPASUmPgffx/iCGy9OQIETnb7TFzE/1cMBW8AaaiN8BU9AaYit4A/wAnkY5BGULJfQAAAABJRU'+
			'5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1_15";
		el.ggDx=5;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 64px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 67px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_1_15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_1_15.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_ht') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._image_1_15.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._image_1_15.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._image_1_15.style[domTransition]='' + cssPrefix + 'transform 750ms ease 0ms';
				if (me._image_1_15.ggCurrentLogicStateScaling == 0) {
					me._image_1_15.ggParameter.sx = 0.8;
					me._image_1_15.ggParameter.sy = 0.8;
					me._image_1_15.style[domTransform]=parameterToTransform(me._image_1_15.ggParameter);
				}
				else {
					me._image_1_15.ggParameter.sx = 1;
					me._image_1_15.ggParameter.sy = 1;
					me._image_1_15.style[domTransform]=parameterToTransform(me._image_1_15.ggParameter);
				}
			}
		}
		me._image_1_15.onclick=function (e) {
			player.openNext("{node9}","");
		}
		me._image_1_15.onmouseover=function (e) {
			me.elementMouseOver['image_1_15']=true;
		}
		me._image_1_15.onmouseout=function (e) {
			if (
				(
					((player.getIsMobile() == false))
				)
			) {
				me._text_1_15.style[domTransition]='none';
				me._text_1_15.style.visibility='hidden';
				me._text_1_15.ggVisible=false;
			}
			me.elementMouseOver['image_1_15']=false;
		}
		me._image_1_15.ontouchend=function (e) {
			me.elementMouseOver['image_1_15']=false;
		}
		me._image_1_15.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ximen.appendChild(me._image_1_15);
		el=me._text_1_15=document.createElement('div');
		els=me._text_1_15__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1_15";
		el.ggDx=4;
		el.ggDy=51;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 59px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #d8d8d8;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		hs+='color: #000000;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="\u897f\u95e8\u5185\u90e8";
		el.appendChild(els);
		me._text_1_15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_1_15.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_1_15.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_1_15.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_1_15.style[domTransition]='';
				if (me._text_1_15.ggCurrentLogicStateVisible == 0) {
					me._text_1_15.style.visibility=(Number(me._text_1_15.style.opacity)>0||!me._text_1_15.style.opacity)?'inherit':'hidden';
					me._text_1_15.ggVisible=true;
				}
				else {
					me._text_1_15.style.visibility="hidden";
					me._text_1_15.ggVisible=false;
				}
			}
		}
		me._text_1_15.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((57-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ximen.appendChild(me._text_1_15);
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['image_1_15']) {
					me._text_1_15.style[domTransition]='none';
					me._text_1_15.style.visibility=(Number(me._text_1_15.style.opacity)>0||!me._text_1_15.style.opacity)?'inherit':'hidden';
					me._text_1_15.ggVisible=true;
				}
			}
			me.hotspotTimerEvent();
		me.__div = me._ximen;
	};
	function SkinHotspotClass_jinru(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._jinru=document.createElement('div');
		el.ggId="jinru";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 80px;';
		hs+='position : absolute;';
		hs+='top : 128px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._jinru.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._jinru.onclick=function (e) {
			player.openNext("{node2}","");
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._jinru.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._jinru.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._jinru.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._jinru.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_121=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 128px;';
		hs+='left : -64px;';
		hs+='position : absolute;';
		hs+='top : -64px;';
		hs+='visibility : inherit;';
		hs+='width : 128px;';
		hs+='pointer-events:auto;';
		hs+='overflow:hidden;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_121.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_121.ggUpdatePosition=function (useTransition) {
		}
		el=me._imagef14=document.createElement('div');
		els=me._imagef14__img=document.createElement('img');
		els.className='ggskin ggskin_imagef14';
		hs=basePath + 'images/imagef14.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Imagef";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 3200px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 128px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._imagef14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._imagef14.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('var1') == 1))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('var1') == 2))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getVariableValue('var1') == 3))
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				((player.getVariableValue('var1') == 4))
			)
			{
				newLogicStatePosition = 3;
			}
			else if (
				((player.getVariableValue('var1') == 5))
			)
			{
				newLogicStatePosition = 4;
			}
			else if (
				((player.getVariableValue('var1') == 6))
			)
			{
				newLogicStatePosition = 5;
			}
			else if (
				((player.getVariableValue('var1') == 7))
			)
			{
				newLogicStatePosition = 6;
			}
			else if (
				((player.getVariableValue('var1') == 8))
			)
			{
				newLogicStatePosition = 7;
			}
			else if (
				((player.getVariableValue('var1') == 9))
			)
			{
				newLogicStatePosition = 8;
			}
			else if (
				((player.getVariableValue('var1') == 10))
			)
			{
				newLogicStatePosition = 9;
			}
			else if (
				((player.getVariableValue('var1') == 11))
			)
			{
				newLogicStatePosition = 10;
			}
			else if (
				((player.getVariableValue('var1') == 12))
			)
			{
				newLogicStatePosition = 11;
			}
			else if (
				((player.getVariableValue('var1') == 13))
			)
			{
				newLogicStatePosition = 12;
			}
			else if (
				((player.getVariableValue('var1') == 14))
			)
			{
				newLogicStatePosition = 13;
			}
			else if (
				((player.getVariableValue('var1') == 15))
			)
			{
				newLogicStatePosition = 14;
			}
			else if (
				((player.getVariableValue('var1') == 16))
			)
			{
				newLogicStatePosition = 15;
			}
			else if (
				((player.getVariableValue('var1') == 17))
			)
			{
				newLogicStatePosition = 16;
			}
			else if (
				((player.getVariableValue('var1') == 18))
			)
			{
				newLogicStatePosition = 17;
			}
			else if (
				((player.getVariableValue('var1') == 19))
			)
			{
				newLogicStatePosition = 18;
			}
			else if (
				((player.getVariableValue('var1') == 20))
			)
			{
				newLogicStatePosition = 19;
			}
			else if (
				((player.getVariableValue('var1') == 21))
			)
			{
				newLogicStatePosition = 20;
			}
			else if (
				((player.getVariableValue('var1') == 22))
			)
			{
				newLogicStatePosition = 21;
			}
			else if (
				((player.getVariableValue('var1') == 23))
			)
			{
				newLogicStatePosition = 22;
			}
			else if (
				((player.getVariableValue('var1') == 24))
			)
			{
				newLogicStatePosition = 23;
			}
			else if (
				((player.getVariableValue('var1') == 0))
			)
			{
				newLogicStatePosition = 24;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._imagef14.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._imagef14.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._imagef14.style[domTransition]='left 0s, top 0s';
				if (me._imagef14.ggCurrentLogicStatePosition == 0) {
					me._imagef14.style.left='0px';
					me._imagef14.style.top='-128px';
				}
				else if (me._imagef14.ggCurrentLogicStatePosition == 1) {
					me._imagef14.style.left='0px';
					me._imagef14.style.top='-256px';
				}
				else if (me._imagef14.ggCurrentLogicStatePosition == 2) {
					me._imagef14.style.left='0px';
					me._imagef14.style.top='-384px';
				}
				else if (me._imagef14.ggCurrentLogicStatePosition == 3) {
					me._imagef14.style.left='0px';
					me._imagef14.style.top='-512px';
				}
				else if (me._imagef14.ggCurrentLogicStatePosition == 4) {
					me._imagef14.style.left='0px';
					me._imagef14.style.top='-640px';
				}
				else if (me._imagef14.ggCurrentLogicStatePosition == 5) {
					me._imagef14.style.left='0px';
					me._imagef14.style.top='-768px';
				}
				else if (me._imagef14.ggCurrentLogicStatePosition == 6) {
					me._imagef14.style.left='0px';
					me._imagef14.style.top='-896px';
				}
				else if (me._imagef14.ggCurrentLogicStatePosition == 7) {
					me._imagef14.style.left='0px';
					me._imagef14.style.top='-1024px';
				}
				else if (me._imagef14.ggCurrentLogicStatePosition == 8) {
					me._imagef14.style.left='0px';
					me._imagef14.style.top='-1152px';
				}
				else if (me._imagef14.ggCurrentLogicStatePosition == 9) {
					me._imagef14.style.left='0px';
					me._imagef14.style.top='-1280px';
				}
				else if (me._imagef14.ggCurrentLogicStatePosition == 10) {
					me._imagef14.style.left='0px';
					me._imagef14.style.top='-1408px';
				}
				else if (me._imagef14.ggCurrentLogicStatePosition == 11) {
					me._imagef14.style.left='0px';
					me._imagef14.style.top='-1536px';
				}
				else if (me._imagef14.ggCurrentLogicStatePosition == 12) {
					me._imagef14.style.left='0px';
					me._imagef14.style.top='-1664px';
				}
				else if (me._imagef14.ggCurrentLogicStatePosition == 13) {
					me._imagef14.style.left='0px';
					me._imagef14.style.top='-1792px';
				}
				else if (me._imagef14.ggCurrentLogicStatePosition == 14) {
					me._imagef14.style.left='0px';
					me._imagef14.style.top='-1920px';
				}
				else if (me._imagef14.ggCurrentLogicStatePosition == 15) {
					me._imagef14.style.left='0px';
					me._imagef14.style.top='-2048px';
				}
				else if (me._imagef14.ggCurrentLogicStatePosition == 16) {
					me._imagef14.style.left='0px';
					me._imagef14.style.top='-2176px';
				}
				else if (me._imagef14.ggCurrentLogicStatePosition == 17) {
					me._imagef14.style.left='0px';
					me._imagef14.style.top='-2304px';
				}
				else if (me._imagef14.ggCurrentLogicStatePosition == 18) {
					me._imagef14.style.left='0px';
					me._imagef14.style.top='-2432px';
				}
				else if (me._imagef14.ggCurrentLogicStatePosition == 19) {
					me._imagef14.style.left='0px';
					me._imagef14.style.top='-2560px';
				}
				else if (me._imagef14.ggCurrentLogicStatePosition == 20) {
					me._imagef14.style.left='0px';
					me._imagef14.style.top='-2688px';
				}
				else if (me._imagef14.ggCurrentLogicStatePosition == 21) {
					me._imagef14.style.left='0px';
					me._imagef14.style.top='-2816px';
				}
				else if (me._imagef14.ggCurrentLogicStatePosition == 22) {
					me._imagef14.style.left='0px';
					me._imagef14.style.top='-2944px';
				}
				else if (me._imagef14.ggCurrentLogicStatePosition == 23) {
					me._imagef14.style.left='0px';
					me._imagef14.style.top='-3072px';
				}
				else if (me._imagef14.ggCurrentLogicStatePosition == 24) {
					me._imagef14.style.left='0px';
					me._imagef14.style.top='0px';
				}
				else {
					me._imagef14.style.left='0px';
					me._imagef14.style.top='0px';
				}
			}
		}
		me._imagef14.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_121.appendChild(me._imagef14);
		me._jinru.appendChild(me._rectangle_121);
		el=me._ht_txtf14=document.createElement('div');
		els=me._ht_txtf14__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_txtf";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 39px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -80px;';
		hs+='visibility : inherit;';
		hs+='width : 154px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.470588);';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 32px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 6px 16px 6px 16px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u5317\u95e8\u5185\u90e8";
		el.appendChild(els);
		me._ht_txtf14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_txtf14.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((152-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._jinru.appendChild(me._ht_txtf14);
		me.__div = me._jinru;
	};
	function SkinHotspotClass_chumen(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._chumen=document.createElement('div');
		el.ggId="chumen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 80px;';
		hs+='position : absolute;';
		hs+='top : 128px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._chumen.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._chumen.onclick=function (e) {
			player.openNext("{node16}","");
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._chumen.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._chumen.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._chumen.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._chumen.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_120=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 128px;';
		hs+='left : -64px;';
		hs+='position : absolute;';
		hs+='top : -64px;';
		hs+='visibility : inherit;';
		hs+='width : 128px;';
		hs+='pointer-events:auto;';
		hs+='overflow:hidden;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_120.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_120.ggUpdatePosition=function (useTransition) {
		}
		el=me._imagef13=document.createElement('div');
		els=me._imagef13__img=document.createElement('img');
		els.className='ggskin ggskin_imagef13';
		hs=basePath + 'images/imagef13.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Imagef";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 3200px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 128px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._imagef13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._imagef13.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('var1') == 1))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('var1') == 2))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getVariableValue('var1') == 3))
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				((player.getVariableValue('var1') == 4))
			)
			{
				newLogicStatePosition = 3;
			}
			else if (
				((player.getVariableValue('var1') == 5))
			)
			{
				newLogicStatePosition = 4;
			}
			else if (
				((player.getVariableValue('var1') == 6))
			)
			{
				newLogicStatePosition = 5;
			}
			else if (
				((player.getVariableValue('var1') == 7))
			)
			{
				newLogicStatePosition = 6;
			}
			else if (
				((player.getVariableValue('var1') == 8))
			)
			{
				newLogicStatePosition = 7;
			}
			else if (
				((player.getVariableValue('var1') == 9))
			)
			{
				newLogicStatePosition = 8;
			}
			else if (
				((player.getVariableValue('var1') == 10))
			)
			{
				newLogicStatePosition = 9;
			}
			else if (
				((player.getVariableValue('var1') == 11))
			)
			{
				newLogicStatePosition = 10;
			}
			else if (
				((player.getVariableValue('var1') == 12))
			)
			{
				newLogicStatePosition = 11;
			}
			else if (
				((player.getVariableValue('var1') == 13))
			)
			{
				newLogicStatePosition = 12;
			}
			else if (
				((player.getVariableValue('var1') == 14))
			)
			{
				newLogicStatePosition = 13;
			}
			else if (
				((player.getVariableValue('var1') == 15))
			)
			{
				newLogicStatePosition = 14;
			}
			else if (
				((player.getVariableValue('var1') == 16))
			)
			{
				newLogicStatePosition = 15;
			}
			else if (
				((player.getVariableValue('var1') == 17))
			)
			{
				newLogicStatePosition = 16;
			}
			else if (
				((player.getVariableValue('var1') == 18))
			)
			{
				newLogicStatePosition = 17;
			}
			else if (
				((player.getVariableValue('var1') == 19))
			)
			{
				newLogicStatePosition = 18;
			}
			else if (
				((player.getVariableValue('var1') == 20))
			)
			{
				newLogicStatePosition = 19;
			}
			else if (
				((player.getVariableValue('var1') == 21))
			)
			{
				newLogicStatePosition = 20;
			}
			else if (
				((player.getVariableValue('var1') == 22))
			)
			{
				newLogicStatePosition = 21;
			}
			else if (
				((player.getVariableValue('var1') == 23))
			)
			{
				newLogicStatePosition = 22;
			}
			else if (
				((player.getVariableValue('var1') == 24))
			)
			{
				newLogicStatePosition = 23;
			}
			else if (
				((player.getVariableValue('var1') == 0))
			)
			{
				newLogicStatePosition = 24;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._imagef13.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._imagef13.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._imagef13.style[domTransition]='left 0s, top 0s';
				if (me._imagef13.ggCurrentLogicStatePosition == 0) {
					me._imagef13.style.left='0px';
					me._imagef13.style.top='-128px';
				}
				else if (me._imagef13.ggCurrentLogicStatePosition == 1) {
					me._imagef13.style.left='0px';
					me._imagef13.style.top='-256px';
				}
				else if (me._imagef13.ggCurrentLogicStatePosition == 2) {
					me._imagef13.style.left='0px';
					me._imagef13.style.top='-384px';
				}
				else if (me._imagef13.ggCurrentLogicStatePosition == 3) {
					me._imagef13.style.left='0px';
					me._imagef13.style.top='-512px';
				}
				else if (me._imagef13.ggCurrentLogicStatePosition == 4) {
					me._imagef13.style.left='0px';
					me._imagef13.style.top='-640px';
				}
				else if (me._imagef13.ggCurrentLogicStatePosition == 5) {
					me._imagef13.style.left='0px';
					me._imagef13.style.top='-768px';
				}
				else if (me._imagef13.ggCurrentLogicStatePosition == 6) {
					me._imagef13.style.left='0px';
					me._imagef13.style.top='-896px';
				}
				else if (me._imagef13.ggCurrentLogicStatePosition == 7) {
					me._imagef13.style.left='0px';
					me._imagef13.style.top='-1024px';
				}
				else if (me._imagef13.ggCurrentLogicStatePosition == 8) {
					me._imagef13.style.left='0px';
					me._imagef13.style.top='-1152px';
				}
				else if (me._imagef13.ggCurrentLogicStatePosition == 9) {
					me._imagef13.style.left='0px';
					me._imagef13.style.top='-1280px';
				}
				else if (me._imagef13.ggCurrentLogicStatePosition == 10) {
					me._imagef13.style.left='0px';
					me._imagef13.style.top='-1408px';
				}
				else if (me._imagef13.ggCurrentLogicStatePosition == 11) {
					me._imagef13.style.left='0px';
					me._imagef13.style.top='-1536px';
				}
				else if (me._imagef13.ggCurrentLogicStatePosition == 12) {
					me._imagef13.style.left='0px';
					me._imagef13.style.top='-1664px';
				}
				else if (me._imagef13.ggCurrentLogicStatePosition == 13) {
					me._imagef13.style.left='0px';
					me._imagef13.style.top='-1792px';
				}
				else if (me._imagef13.ggCurrentLogicStatePosition == 14) {
					me._imagef13.style.left='0px';
					me._imagef13.style.top='-1920px';
				}
				else if (me._imagef13.ggCurrentLogicStatePosition == 15) {
					me._imagef13.style.left='0px';
					me._imagef13.style.top='-2048px';
				}
				else if (me._imagef13.ggCurrentLogicStatePosition == 16) {
					me._imagef13.style.left='0px';
					me._imagef13.style.top='-2176px';
				}
				else if (me._imagef13.ggCurrentLogicStatePosition == 17) {
					me._imagef13.style.left='0px';
					me._imagef13.style.top='-2304px';
				}
				else if (me._imagef13.ggCurrentLogicStatePosition == 18) {
					me._imagef13.style.left='0px';
					me._imagef13.style.top='-2432px';
				}
				else if (me._imagef13.ggCurrentLogicStatePosition == 19) {
					me._imagef13.style.left='0px';
					me._imagef13.style.top='-2560px';
				}
				else if (me._imagef13.ggCurrentLogicStatePosition == 20) {
					me._imagef13.style.left='0px';
					me._imagef13.style.top='-2688px';
				}
				else if (me._imagef13.ggCurrentLogicStatePosition == 21) {
					me._imagef13.style.left='0px';
					me._imagef13.style.top='-2816px';
				}
				else if (me._imagef13.ggCurrentLogicStatePosition == 22) {
					me._imagef13.style.left='0px';
					me._imagef13.style.top='-2944px';
				}
				else if (me._imagef13.ggCurrentLogicStatePosition == 23) {
					me._imagef13.style.left='0px';
					me._imagef13.style.top='-3072px';
				}
				else if (me._imagef13.ggCurrentLogicStatePosition == 24) {
					me._imagef13.style.left='0px';
					me._imagef13.style.top='0px';
				}
				else {
					me._imagef13.style.left='0px';
					me._imagef13.style.top='0px';
				}
			}
		}
		me._imagef13.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_120.appendChild(me._imagef13);
		me._chumen.appendChild(me._rectangle_120);
		el=me._ht_txtf13=document.createElement('div');
		els=me._ht_txtf13__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_txtf";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 39px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -80px;';
		hs+='visibility : inherit;';
		hs+='width : 154px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.470588);';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 32px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 6px 16px 6px 16px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u6b63\u95e8";
		el.appendChild(els);
		me._ht_txtf13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_txtf13.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((152-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._chumen.appendChild(me._ht_txtf13);
		me.__div = me._chumen;
	};
	function SkinHotspotClass_jinyuanxing(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._jinyuanxing=document.createElement('div');
		el.ggId="jinyuanxing";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 80px;';
		hs+='position : absolute;';
		hs+='top : 128px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._jinyuanxing.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._jinyuanxing.onclick=function (e) {
			player.openNext("{node15}","");
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._jinyuanxing.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._jinyuanxing.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._jinyuanxing.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._jinyuanxing.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_119=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 128px;';
		hs+='left : -64px;';
		hs+='position : absolute;';
		hs+='top : -64px;';
		hs+='visibility : inherit;';
		hs+='width : 128px;';
		hs+='pointer-events:auto;';
		hs+='overflow:hidden;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_119.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_119.ggUpdatePosition=function (useTransition) {
		}
		el=me._imagef12=document.createElement('div');
		els=me._imagef12__img=document.createElement('img');
		els.className='ggskin ggskin_imagef12';
		hs=basePath + 'images/imagef12.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Imagef";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 3200px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 128px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._imagef12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._imagef12.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('var1') == 1))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('var1') == 2))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getVariableValue('var1') == 3))
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				((player.getVariableValue('var1') == 4))
			)
			{
				newLogicStatePosition = 3;
			}
			else if (
				((player.getVariableValue('var1') == 5))
			)
			{
				newLogicStatePosition = 4;
			}
			else if (
				((player.getVariableValue('var1') == 6))
			)
			{
				newLogicStatePosition = 5;
			}
			else if (
				((player.getVariableValue('var1') == 7))
			)
			{
				newLogicStatePosition = 6;
			}
			else if (
				((player.getVariableValue('var1') == 8))
			)
			{
				newLogicStatePosition = 7;
			}
			else if (
				((player.getVariableValue('var1') == 9))
			)
			{
				newLogicStatePosition = 8;
			}
			else if (
				((player.getVariableValue('var1') == 10))
			)
			{
				newLogicStatePosition = 9;
			}
			else if (
				((player.getVariableValue('var1') == 11))
			)
			{
				newLogicStatePosition = 10;
			}
			else if (
				((player.getVariableValue('var1') == 12))
			)
			{
				newLogicStatePosition = 11;
			}
			else if (
				((player.getVariableValue('var1') == 13))
			)
			{
				newLogicStatePosition = 12;
			}
			else if (
				((player.getVariableValue('var1') == 14))
			)
			{
				newLogicStatePosition = 13;
			}
			else if (
				((player.getVariableValue('var1') == 15))
			)
			{
				newLogicStatePosition = 14;
			}
			else if (
				((player.getVariableValue('var1') == 16))
			)
			{
				newLogicStatePosition = 15;
			}
			else if (
				((player.getVariableValue('var1') == 17))
			)
			{
				newLogicStatePosition = 16;
			}
			else if (
				((player.getVariableValue('var1') == 18))
			)
			{
				newLogicStatePosition = 17;
			}
			else if (
				((player.getVariableValue('var1') == 19))
			)
			{
				newLogicStatePosition = 18;
			}
			else if (
				((player.getVariableValue('var1') == 20))
			)
			{
				newLogicStatePosition = 19;
			}
			else if (
				((player.getVariableValue('var1') == 21))
			)
			{
				newLogicStatePosition = 20;
			}
			else if (
				((player.getVariableValue('var1') == 22))
			)
			{
				newLogicStatePosition = 21;
			}
			else if (
				((player.getVariableValue('var1') == 23))
			)
			{
				newLogicStatePosition = 22;
			}
			else if (
				((player.getVariableValue('var1') == 24))
			)
			{
				newLogicStatePosition = 23;
			}
			else if (
				((player.getVariableValue('var1') == 0))
			)
			{
				newLogicStatePosition = 24;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._imagef12.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._imagef12.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._imagef12.style[domTransition]='left 0s, top 0s';
				if (me._imagef12.ggCurrentLogicStatePosition == 0) {
					me._imagef12.style.left='0px';
					me._imagef12.style.top='-128px';
				}
				else if (me._imagef12.ggCurrentLogicStatePosition == 1) {
					me._imagef12.style.left='0px';
					me._imagef12.style.top='-256px';
				}
				else if (me._imagef12.ggCurrentLogicStatePosition == 2) {
					me._imagef12.style.left='0px';
					me._imagef12.style.top='-384px';
				}
				else if (me._imagef12.ggCurrentLogicStatePosition == 3) {
					me._imagef12.style.left='0px';
					me._imagef12.style.top='-512px';
				}
				else if (me._imagef12.ggCurrentLogicStatePosition == 4) {
					me._imagef12.style.left='0px';
					me._imagef12.style.top='-640px';
				}
				else if (me._imagef12.ggCurrentLogicStatePosition == 5) {
					me._imagef12.style.left='0px';
					me._imagef12.style.top='-768px';
				}
				else if (me._imagef12.ggCurrentLogicStatePosition == 6) {
					me._imagef12.style.left='0px';
					me._imagef12.style.top='-896px';
				}
				else if (me._imagef12.ggCurrentLogicStatePosition == 7) {
					me._imagef12.style.left='0px';
					me._imagef12.style.top='-1024px';
				}
				else if (me._imagef12.ggCurrentLogicStatePosition == 8) {
					me._imagef12.style.left='0px';
					me._imagef12.style.top='-1152px';
				}
				else if (me._imagef12.ggCurrentLogicStatePosition == 9) {
					me._imagef12.style.left='0px';
					me._imagef12.style.top='-1280px';
				}
				else if (me._imagef12.ggCurrentLogicStatePosition == 10) {
					me._imagef12.style.left='0px';
					me._imagef12.style.top='-1408px';
				}
				else if (me._imagef12.ggCurrentLogicStatePosition == 11) {
					me._imagef12.style.left='0px';
					me._imagef12.style.top='-1536px';
				}
				else if (me._imagef12.ggCurrentLogicStatePosition == 12) {
					me._imagef12.style.left='0px';
					me._imagef12.style.top='-1664px';
				}
				else if (me._imagef12.ggCurrentLogicStatePosition == 13) {
					me._imagef12.style.left='0px';
					me._imagef12.style.top='-1792px';
				}
				else if (me._imagef12.ggCurrentLogicStatePosition == 14) {
					me._imagef12.style.left='0px';
					me._imagef12.style.top='-1920px';
				}
				else if (me._imagef12.ggCurrentLogicStatePosition == 15) {
					me._imagef12.style.left='0px';
					me._imagef12.style.top='-2048px';
				}
				else if (me._imagef12.ggCurrentLogicStatePosition == 16) {
					me._imagef12.style.left='0px';
					me._imagef12.style.top='-2176px';
				}
				else if (me._imagef12.ggCurrentLogicStatePosition == 17) {
					me._imagef12.style.left='0px';
					me._imagef12.style.top='-2304px';
				}
				else if (me._imagef12.ggCurrentLogicStatePosition == 18) {
					me._imagef12.style.left='0px';
					me._imagef12.style.top='-2432px';
				}
				else if (me._imagef12.ggCurrentLogicStatePosition == 19) {
					me._imagef12.style.left='0px';
					me._imagef12.style.top='-2560px';
				}
				else if (me._imagef12.ggCurrentLogicStatePosition == 20) {
					me._imagef12.style.left='0px';
					me._imagef12.style.top='-2688px';
				}
				else if (me._imagef12.ggCurrentLogicStatePosition == 21) {
					me._imagef12.style.left='0px';
					me._imagef12.style.top='-2816px';
				}
				else if (me._imagef12.ggCurrentLogicStatePosition == 22) {
					me._imagef12.style.left='0px';
					me._imagef12.style.top='-2944px';
				}
				else if (me._imagef12.ggCurrentLogicStatePosition == 23) {
					me._imagef12.style.left='0px';
					me._imagef12.style.top='-3072px';
				}
				else if (me._imagef12.ggCurrentLogicStatePosition == 24) {
					me._imagef12.style.left='0px';
					me._imagef12.style.top='0px';
				}
				else {
					me._imagef12.style.left='0px';
					me._imagef12.style.top='0px';
				}
			}
		}
		me._imagef12.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_119.appendChild(me._imagef12);
		me._jinyuanxing.appendChild(me._rectangle_119);
		el=me._ht_txtf12=document.createElement('div');
		els=me._ht_txtf12__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_txtf";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 39px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -80px;';
		hs+='visibility : inherit;';
		hs+='width : 154px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.470588);';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 32px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 6px 16px 6px 16px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u5706\u5e7f\u573a";
		el.appendChild(els);
		me._ht_txtf12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_txtf12.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((152-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._jinyuanxing.appendChild(me._ht_txtf12);
		me.__div = me._jinyuanxing;
	};
	function SkinHotspotClass_jinyuancao(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._jinyuancao=document.createElement('div');
		el.ggId="jinyuancao";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 80px;';
		hs+='position : absolute;';
		hs+='top : 128px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._jinyuancao.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._jinyuancao.onclick=function (e) {
			player.openNext("{node14}","");
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._jinyuancao.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._jinyuancao.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._jinyuancao.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._jinyuancao.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_118=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 128px;';
		hs+='left : -64px;';
		hs+='position : absolute;';
		hs+='top : -64px;';
		hs+='visibility : inherit;';
		hs+='width : 128px;';
		hs+='pointer-events:auto;';
		hs+='overflow:hidden;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_118.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_118.ggUpdatePosition=function (useTransition) {
		}
		el=me._imagef11=document.createElement('div');
		els=me._imagef11__img=document.createElement('img');
		els.className='ggskin ggskin_imagef11';
		hs=basePath + 'images/imagef11.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Imagef";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 3200px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 128px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._imagef11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._imagef11.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('var1') == 1))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('var1') == 2))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getVariableValue('var1') == 3))
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				((player.getVariableValue('var1') == 4))
			)
			{
				newLogicStatePosition = 3;
			}
			else if (
				((player.getVariableValue('var1') == 5))
			)
			{
				newLogicStatePosition = 4;
			}
			else if (
				((player.getVariableValue('var1') == 6))
			)
			{
				newLogicStatePosition = 5;
			}
			else if (
				((player.getVariableValue('var1') == 7))
			)
			{
				newLogicStatePosition = 6;
			}
			else if (
				((player.getVariableValue('var1') == 8))
			)
			{
				newLogicStatePosition = 7;
			}
			else if (
				((player.getVariableValue('var1') == 9))
			)
			{
				newLogicStatePosition = 8;
			}
			else if (
				((player.getVariableValue('var1') == 10))
			)
			{
				newLogicStatePosition = 9;
			}
			else if (
				((player.getVariableValue('var1') == 11))
			)
			{
				newLogicStatePosition = 10;
			}
			else if (
				((player.getVariableValue('var1') == 12))
			)
			{
				newLogicStatePosition = 11;
			}
			else if (
				((player.getVariableValue('var1') == 13))
			)
			{
				newLogicStatePosition = 12;
			}
			else if (
				((player.getVariableValue('var1') == 14))
			)
			{
				newLogicStatePosition = 13;
			}
			else if (
				((player.getVariableValue('var1') == 15))
			)
			{
				newLogicStatePosition = 14;
			}
			else if (
				((player.getVariableValue('var1') == 16))
			)
			{
				newLogicStatePosition = 15;
			}
			else if (
				((player.getVariableValue('var1') == 17))
			)
			{
				newLogicStatePosition = 16;
			}
			else if (
				((player.getVariableValue('var1') == 18))
			)
			{
				newLogicStatePosition = 17;
			}
			else if (
				((player.getVariableValue('var1') == 19))
			)
			{
				newLogicStatePosition = 18;
			}
			else if (
				((player.getVariableValue('var1') == 20))
			)
			{
				newLogicStatePosition = 19;
			}
			else if (
				((player.getVariableValue('var1') == 21))
			)
			{
				newLogicStatePosition = 20;
			}
			else if (
				((player.getVariableValue('var1') == 22))
			)
			{
				newLogicStatePosition = 21;
			}
			else if (
				((player.getVariableValue('var1') == 23))
			)
			{
				newLogicStatePosition = 22;
			}
			else if (
				((player.getVariableValue('var1') == 24))
			)
			{
				newLogicStatePosition = 23;
			}
			else if (
				((player.getVariableValue('var1') == 0))
			)
			{
				newLogicStatePosition = 24;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._imagef11.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._imagef11.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._imagef11.style[domTransition]='left 0s, top 0s';
				if (me._imagef11.ggCurrentLogicStatePosition == 0) {
					me._imagef11.style.left='0px';
					me._imagef11.style.top='-128px';
				}
				else if (me._imagef11.ggCurrentLogicStatePosition == 1) {
					me._imagef11.style.left='0px';
					me._imagef11.style.top='-256px';
				}
				else if (me._imagef11.ggCurrentLogicStatePosition == 2) {
					me._imagef11.style.left='0px';
					me._imagef11.style.top='-384px';
				}
				else if (me._imagef11.ggCurrentLogicStatePosition == 3) {
					me._imagef11.style.left='0px';
					me._imagef11.style.top='-512px';
				}
				else if (me._imagef11.ggCurrentLogicStatePosition == 4) {
					me._imagef11.style.left='0px';
					me._imagef11.style.top='-640px';
				}
				else if (me._imagef11.ggCurrentLogicStatePosition == 5) {
					me._imagef11.style.left='0px';
					me._imagef11.style.top='-768px';
				}
				else if (me._imagef11.ggCurrentLogicStatePosition == 6) {
					me._imagef11.style.left='0px';
					me._imagef11.style.top='-896px';
				}
				else if (me._imagef11.ggCurrentLogicStatePosition == 7) {
					me._imagef11.style.left='0px';
					me._imagef11.style.top='-1024px';
				}
				else if (me._imagef11.ggCurrentLogicStatePosition == 8) {
					me._imagef11.style.left='0px';
					me._imagef11.style.top='-1152px';
				}
				else if (me._imagef11.ggCurrentLogicStatePosition == 9) {
					me._imagef11.style.left='0px';
					me._imagef11.style.top='-1280px';
				}
				else if (me._imagef11.ggCurrentLogicStatePosition == 10) {
					me._imagef11.style.left='0px';
					me._imagef11.style.top='-1408px';
				}
				else if (me._imagef11.ggCurrentLogicStatePosition == 11) {
					me._imagef11.style.left='0px';
					me._imagef11.style.top='-1536px';
				}
				else if (me._imagef11.ggCurrentLogicStatePosition == 12) {
					me._imagef11.style.left='0px';
					me._imagef11.style.top='-1664px';
				}
				else if (me._imagef11.ggCurrentLogicStatePosition == 13) {
					me._imagef11.style.left='0px';
					me._imagef11.style.top='-1792px';
				}
				else if (me._imagef11.ggCurrentLogicStatePosition == 14) {
					me._imagef11.style.left='0px';
					me._imagef11.style.top='-1920px';
				}
				else if (me._imagef11.ggCurrentLogicStatePosition == 15) {
					me._imagef11.style.left='0px';
					me._imagef11.style.top='-2048px';
				}
				else if (me._imagef11.ggCurrentLogicStatePosition == 16) {
					me._imagef11.style.left='0px';
					me._imagef11.style.top='-2176px';
				}
				else if (me._imagef11.ggCurrentLogicStatePosition == 17) {
					me._imagef11.style.left='0px';
					me._imagef11.style.top='-2304px';
				}
				else if (me._imagef11.ggCurrentLogicStatePosition == 18) {
					me._imagef11.style.left='0px';
					me._imagef11.style.top='-2432px';
				}
				else if (me._imagef11.ggCurrentLogicStatePosition == 19) {
					me._imagef11.style.left='0px';
					me._imagef11.style.top='-2560px';
				}
				else if (me._imagef11.ggCurrentLogicStatePosition == 20) {
					me._imagef11.style.left='0px';
					me._imagef11.style.top='-2688px';
				}
				else if (me._imagef11.ggCurrentLogicStatePosition == 21) {
					me._imagef11.style.left='0px';
					me._imagef11.style.top='-2816px';
				}
				else if (me._imagef11.ggCurrentLogicStatePosition == 22) {
					me._imagef11.style.left='0px';
					me._imagef11.style.top='-2944px';
				}
				else if (me._imagef11.ggCurrentLogicStatePosition == 23) {
					me._imagef11.style.left='0px';
					me._imagef11.style.top='-3072px';
				}
				else if (me._imagef11.ggCurrentLogicStatePosition == 24) {
					me._imagef11.style.left='0px';
					me._imagef11.style.top='0px';
				}
				else {
					me._imagef11.style.left='0px';
					me._imagef11.style.top='0px';
				}
			}
		}
		me._imagef11.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_118.appendChild(me._imagef11);
		me._jinyuancao.appendChild(me._rectangle_118);
		el=me._ht_txtf11=document.createElement('div');
		els=me._ht_txtf11__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_txtf";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 39px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -80px;';
		hs+='visibility : inherit;';
		hs+='width : 154px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.470588);';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 32px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 6px 16px 6px 16px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u5706\u8349\u576a";
		el.appendChild(els);
		me._ht_txtf11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_txtf11.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((152-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._jinyuancao.appendChild(me._ht_txtf11);
		me.__div = me._jinyuancao;
	};
	function SkinHotspotClass_jincheku(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._jincheku=document.createElement('div');
		el.ggId="jincheku";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 80px;';
		hs+='position : absolute;';
		hs+='top : 128px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._jincheku.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._jincheku.onclick=function (e) {
			player.openNext("{node3}","");
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._jincheku.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._jincheku.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._jincheku.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._jincheku.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_117=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 128px;';
		hs+='left : -64px;';
		hs+='position : absolute;';
		hs+='top : -64px;';
		hs+='visibility : inherit;';
		hs+='width : 128px;';
		hs+='pointer-events:auto;';
		hs+='overflow:hidden;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_117.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_117.ggUpdatePosition=function (useTransition) {
		}
		el=me._imagef10=document.createElement('div');
		els=me._imagef10__img=document.createElement('img');
		els.className='ggskin ggskin_imagef10';
		hs=basePath + 'images/imagef10.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Imagef";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 3200px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 128px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._imagef10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._imagef10.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('var1') == 1))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('var1') == 2))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getVariableValue('var1') == 3))
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				((player.getVariableValue('var1') == 4))
			)
			{
				newLogicStatePosition = 3;
			}
			else if (
				((player.getVariableValue('var1') == 5))
			)
			{
				newLogicStatePosition = 4;
			}
			else if (
				((player.getVariableValue('var1') == 6))
			)
			{
				newLogicStatePosition = 5;
			}
			else if (
				((player.getVariableValue('var1') == 7))
			)
			{
				newLogicStatePosition = 6;
			}
			else if (
				((player.getVariableValue('var1') == 8))
			)
			{
				newLogicStatePosition = 7;
			}
			else if (
				((player.getVariableValue('var1') == 9))
			)
			{
				newLogicStatePosition = 8;
			}
			else if (
				((player.getVariableValue('var1') == 10))
			)
			{
				newLogicStatePosition = 9;
			}
			else if (
				((player.getVariableValue('var1') == 11))
			)
			{
				newLogicStatePosition = 10;
			}
			else if (
				((player.getVariableValue('var1') == 12))
			)
			{
				newLogicStatePosition = 11;
			}
			else if (
				((player.getVariableValue('var1') == 13))
			)
			{
				newLogicStatePosition = 12;
			}
			else if (
				((player.getVariableValue('var1') == 14))
			)
			{
				newLogicStatePosition = 13;
			}
			else if (
				((player.getVariableValue('var1') == 15))
			)
			{
				newLogicStatePosition = 14;
			}
			else if (
				((player.getVariableValue('var1') == 16))
			)
			{
				newLogicStatePosition = 15;
			}
			else if (
				((player.getVariableValue('var1') == 17))
			)
			{
				newLogicStatePosition = 16;
			}
			else if (
				((player.getVariableValue('var1') == 18))
			)
			{
				newLogicStatePosition = 17;
			}
			else if (
				((player.getVariableValue('var1') == 19))
			)
			{
				newLogicStatePosition = 18;
			}
			else if (
				((player.getVariableValue('var1') == 20))
			)
			{
				newLogicStatePosition = 19;
			}
			else if (
				((player.getVariableValue('var1') == 21))
			)
			{
				newLogicStatePosition = 20;
			}
			else if (
				((player.getVariableValue('var1') == 22))
			)
			{
				newLogicStatePosition = 21;
			}
			else if (
				((player.getVariableValue('var1') == 23))
			)
			{
				newLogicStatePosition = 22;
			}
			else if (
				((player.getVariableValue('var1') == 24))
			)
			{
				newLogicStatePosition = 23;
			}
			else if (
				((player.getVariableValue('var1') == 0))
			)
			{
				newLogicStatePosition = 24;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._imagef10.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._imagef10.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._imagef10.style[domTransition]='left 0s, top 0s';
				if (me._imagef10.ggCurrentLogicStatePosition == 0) {
					me._imagef10.style.left='0px';
					me._imagef10.style.top='-128px';
				}
				else if (me._imagef10.ggCurrentLogicStatePosition == 1) {
					me._imagef10.style.left='0px';
					me._imagef10.style.top='-256px';
				}
				else if (me._imagef10.ggCurrentLogicStatePosition == 2) {
					me._imagef10.style.left='0px';
					me._imagef10.style.top='-384px';
				}
				else if (me._imagef10.ggCurrentLogicStatePosition == 3) {
					me._imagef10.style.left='0px';
					me._imagef10.style.top='-512px';
				}
				else if (me._imagef10.ggCurrentLogicStatePosition == 4) {
					me._imagef10.style.left='0px';
					me._imagef10.style.top='-640px';
				}
				else if (me._imagef10.ggCurrentLogicStatePosition == 5) {
					me._imagef10.style.left='0px';
					me._imagef10.style.top='-768px';
				}
				else if (me._imagef10.ggCurrentLogicStatePosition == 6) {
					me._imagef10.style.left='0px';
					me._imagef10.style.top='-896px';
				}
				else if (me._imagef10.ggCurrentLogicStatePosition == 7) {
					me._imagef10.style.left='0px';
					me._imagef10.style.top='-1024px';
				}
				else if (me._imagef10.ggCurrentLogicStatePosition == 8) {
					me._imagef10.style.left='0px';
					me._imagef10.style.top='-1152px';
				}
				else if (me._imagef10.ggCurrentLogicStatePosition == 9) {
					me._imagef10.style.left='0px';
					me._imagef10.style.top='-1280px';
				}
				else if (me._imagef10.ggCurrentLogicStatePosition == 10) {
					me._imagef10.style.left='0px';
					me._imagef10.style.top='-1408px';
				}
				else if (me._imagef10.ggCurrentLogicStatePosition == 11) {
					me._imagef10.style.left='0px';
					me._imagef10.style.top='-1536px';
				}
				else if (me._imagef10.ggCurrentLogicStatePosition == 12) {
					me._imagef10.style.left='0px';
					me._imagef10.style.top='-1664px';
				}
				else if (me._imagef10.ggCurrentLogicStatePosition == 13) {
					me._imagef10.style.left='0px';
					me._imagef10.style.top='-1792px';
				}
				else if (me._imagef10.ggCurrentLogicStatePosition == 14) {
					me._imagef10.style.left='0px';
					me._imagef10.style.top='-1920px';
				}
				else if (me._imagef10.ggCurrentLogicStatePosition == 15) {
					me._imagef10.style.left='0px';
					me._imagef10.style.top='-2048px';
				}
				else if (me._imagef10.ggCurrentLogicStatePosition == 16) {
					me._imagef10.style.left='0px';
					me._imagef10.style.top='-2176px';
				}
				else if (me._imagef10.ggCurrentLogicStatePosition == 17) {
					me._imagef10.style.left='0px';
					me._imagef10.style.top='-2304px';
				}
				else if (me._imagef10.ggCurrentLogicStatePosition == 18) {
					me._imagef10.style.left='0px';
					me._imagef10.style.top='-2432px';
				}
				else if (me._imagef10.ggCurrentLogicStatePosition == 19) {
					me._imagef10.style.left='0px';
					me._imagef10.style.top='-2560px';
				}
				else if (me._imagef10.ggCurrentLogicStatePosition == 20) {
					me._imagef10.style.left='0px';
					me._imagef10.style.top='-2688px';
				}
				else if (me._imagef10.ggCurrentLogicStatePosition == 21) {
					me._imagef10.style.left='0px';
					me._imagef10.style.top='-2816px';
				}
				else if (me._imagef10.ggCurrentLogicStatePosition == 22) {
					me._imagef10.style.left='0px';
					me._imagef10.style.top='-2944px';
				}
				else if (me._imagef10.ggCurrentLogicStatePosition == 23) {
					me._imagef10.style.left='0px';
					me._imagef10.style.top='-3072px';
				}
				else if (me._imagef10.ggCurrentLogicStatePosition == 24) {
					me._imagef10.style.left='0px';
					me._imagef10.style.top='0px';
				}
				else {
					me._imagef10.style.left='0px';
					me._imagef10.style.top='0px';
				}
			}
		}
		me._imagef10.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_117.appendChild(me._imagef10);
		me._jincheku.appendChild(me._rectangle_117);
		el=me._ht_txtf10=document.createElement('div');
		els=me._ht_txtf10__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_txtf";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 39px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -80px;';
		hs+='visibility : inherit;';
		hs+='width : 154px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.470588);';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 32px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 6px 16px 6px 16px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u8f66\u5e93\u53e3";
		el.appendChild(els);
		me._ht_txtf10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_txtf10.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((152-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._jincheku.appendChild(me._ht_txtf10);
		me.__div = me._jincheku;
	};
	function SkinHotspotClass_jinxiaoting(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._jinxiaoting=document.createElement('div');
		el.ggId="jinxiaoting";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 80px;';
		hs+='position : absolute;';
		hs+='top : 128px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._jinxiaoting.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._jinxiaoting.onclick=function (e) {
			player.openNext("{node11}","");
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._jinxiaoting.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._jinxiaoting.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._jinxiaoting.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._jinxiaoting.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_116=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 128px;';
		hs+='left : -64px;';
		hs+='position : absolute;';
		hs+='top : -64px;';
		hs+='visibility : inherit;';
		hs+='width : 128px;';
		hs+='pointer-events:auto;';
		hs+='overflow:hidden;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_116.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_116.ggUpdatePosition=function (useTransition) {
		}
		el=me._imagef9=document.createElement('div');
		els=me._imagef9__img=document.createElement('img');
		els.className='ggskin ggskin_imagef9';
		hs=basePath + 'images/imagef9.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Imagef";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 3200px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 128px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._imagef9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._imagef9.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('var1') == 1))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('var1') == 2))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getVariableValue('var1') == 3))
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				((player.getVariableValue('var1') == 4))
			)
			{
				newLogicStatePosition = 3;
			}
			else if (
				((player.getVariableValue('var1') == 5))
			)
			{
				newLogicStatePosition = 4;
			}
			else if (
				((player.getVariableValue('var1') == 6))
			)
			{
				newLogicStatePosition = 5;
			}
			else if (
				((player.getVariableValue('var1') == 7))
			)
			{
				newLogicStatePosition = 6;
			}
			else if (
				((player.getVariableValue('var1') == 8))
			)
			{
				newLogicStatePosition = 7;
			}
			else if (
				((player.getVariableValue('var1') == 9))
			)
			{
				newLogicStatePosition = 8;
			}
			else if (
				((player.getVariableValue('var1') == 10))
			)
			{
				newLogicStatePosition = 9;
			}
			else if (
				((player.getVariableValue('var1') == 11))
			)
			{
				newLogicStatePosition = 10;
			}
			else if (
				((player.getVariableValue('var1') == 12))
			)
			{
				newLogicStatePosition = 11;
			}
			else if (
				((player.getVariableValue('var1') == 13))
			)
			{
				newLogicStatePosition = 12;
			}
			else if (
				((player.getVariableValue('var1') == 14))
			)
			{
				newLogicStatePosition = 13;
			}
			else if (
				((player.getVariableValue('var1') == 15))
			)
			{
				newLogicStatePosition = 14;
			}
			else if (
				((player.getVariableValue('var1') == 16))
			)
			{
				newLogicStatePosition = 15;
			}
			else if (
				((player.getVariableValue('var1') == 17))
			)
			{
				newLogicStatePosition = 16;
			}
			else if (
				((player.getVariableValue('var1') == 18))
			)
			{
				newLogicStatePosition = 17;
			}
			else if (
				((player.getVariableValue('var1') == 19))
			)
			{
				newLogicStatePosition = 18;
			}
			else if (
				((player.getVariableValue('var1') == 20))
			)
			{
				newLogicStatePosition = 19;
			}
			else if (
				((player.getVariableValue('var1') == 21))
			)
			{
				newLogicStatePosition = 20;
			}
			else if (
				((player.getVariableValue('var1') == 22))
			)
			{
				newLogicStatePosition = 21;
			}
			else if (
				((player.getVariableValue('var1') == 23))
			)
			{
				newLogicStatePosition = 22;
			}
			else if (
				((player.getVariableValue('var1') == 24))
			)
			{
				newLogicStatePosition = 23;
			}
			else if (
				((player.getVariableValue('var1') == 0))
			)
			{
				newLogicStatePosition = 24;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._imagef9.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._imagef9.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._imagef9.style[domTransition]='left 0s, top 0s';
				if (me._imagef9.ggCurrentLogicStatePosition == 0) {
					me._imagef9.style.left='0px';
					me._imagef9.style.top='-128px';
				}
				else if (me._imagef9.ggCurrentLogicStatePosition == 1) {
					me._imagef9.style.left='0px';
					me._imagef9.style.top='-256px';
				}
				else if (me._imagef9.ggCurrentLogicStatePosition == 2) {
					me._imagef9.style.left='0px';
					me._imagef9.style.top='-384px';
				}
				else if (me._imagef9.ggCurrentLogicStatePosition == 3) {
					me._imagef9.style.left='0px';
					me._imagef9.style.top='-512px';
				}
				else if (me._imagef9.ggCurrentLogicStatePosition == 4) {
					me._imagef9.style.left='0px';
					me._imagef9.style.top='-640px';
				}
				else if (me._imagef9.ggCurrentLogicStatePosition == 5) {
					me._imagef9.style.left='0px';
					me._imagef9.style.top='-768px';
				}
				else if (me._imagef9.ggCurrentLogicStatePosition == 6) {
					me._imagef9.style.left='0px';
					me._imagef9.style.top='-896px';
				}
				else if (me._imagef9.ggCurrentLogicStatePosition == 7) {
					me._imagef9.style.left='0px';
					me._imagef9.style.top='-1024px';
				}
				else if (me._imagef9.ggCurrentLogicStatePosition == 8) {
					me._imagef9.style.left='0px';
					me._imagef9.style.top='-1152px';
				}
				else if (me._imagef9.ggCurrentLogicStatePosition == 9) {
					me._imagef9.style.left='0px';
					me._imagef9.style.top='-1280px';
				}
				else if (me._imagef9.ggCurrentLogicStatePosition == 10) {
					me._imagef9.style.left='0px';
					me._imagef9.style.top='-1408px';
				}
				else if (me._imagef9.ggCurrentLogicStatePosition == 11) {
					me._imagef9.style.left='0px';
					me._imagef9.style.top='-1536px';
				}
				else if (me._imagef9.ggCurrentLogicStatePosition == 12) {
					me._imagef9.style.left='0px';
					me._imagef9.style.top='-1664px';
				}
				else if (me._imagef9.ggCurrentLogicStatePosition == 13) {
					me._imagef9.style.left='0px';
					me._imagef9.style.top='-1792px';
				}
				else if (me._imagef9.ggCurrentLogicStatePosition == 14) {
					me._imagef9.style.left='0px';
					me._imagef9.style.top='-1920px';
				}
				else if (me._imagef9.ggCurrentLogicStatePosition == 15) {
					me._imagef9.style.left='0px';
					me._imagef9.style.top='-2048px';
				}
				else if (me._imagef9.ggCurrentLogicStatePosition == 16) {
					me._imagef9.style.left='0px';
					me._imagef9.style.top='-2176px';
				}
				else if (me._imagef9.ggCurrentLogicStatePosition == 17) {
					me._imagef9.style.left='0px';
					me._imagef9.style.top='-2304px';
				}
				else if (me._imagef9.ggCurrentLogicStatePosition == 18) {
					me._imagef9.style.left='0px';
					me._imagef9.style.top='-2432px';
				}
				else if (me._imagef9.ggCurrentLogicStatePosition == 19) {
					me._imagef9.style.left='0px';
					me._imagef9.style.top='-2560px';
				}
				else if (me._imagef9.ggCurrentLogicStatePosition == 20) {
					me._imagef9.style.left='0px';
					me._imagef9.style.top='-2688px';
				}
				else if (me._imagef9.ggCurrentLogicStatePosition == 21) {
					me._imagef9.style.left='0px';
					me._imagef9.style.top='-2816px';
				}
				else if (me._imagef9.ggCurrentLogicStatePosition == 22) {
					me._imagef9.style.left='0px';
					me._imagef9.style.top='-2944px';
				}
				else if (me._imagef9.ggCurrentLogicStatePosition == 23) {
					me._imagef9.style.left='0px';
					me._imagef9.style.top='-3072px';
				}
				else if (me._imagef9.ggCurrentLogicStatePosition == 24) {
					me._imagef9.style.left='0px';
					me._imagef9.style.top='0px';
				}
				else {
					me._imagef9.style.left='0px';
					me._imagef9.style.top='0px';
				}
			}
		}
		me._imagef9.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_116.appendChild(me._imagef9);
		me._jinxiaoting.appendChild(me._rectangle_116);
		el=me._ht_txtf9=document.createElement('div');
		els=me._ht_txtf9__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_txtf";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 39px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -80px;';
		hs+='visibility : inherit;';
		hs+='width : 154px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.470588);';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 32px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 6px 16px 6px 16px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u5c0f\u4ead";
		el.appendChild(els);
		me._ht_txtf9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_txtf9.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((152-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._jinxiaoting.appendChild(me._ht_txtf9);
		me.__div = me._jinxiaoting;
	};
	function SkinHotspotClass_jinxibu(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._jinxibu=document.createElement('div');
		el.ggId="jinxibu";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 80px;';
		hs+='position : absolute;';
		hs+='top : 128px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._jinxibu.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._jinxibu.onclick=function (e) {
			player.openNext("{node8}","");
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._jinxibu.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._jinxibu.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._jinxibu.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._jinxibu.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_115=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 128px;';
		hs+='left : -64px;';
		hs+='position : absolute;';
		hs+='top : -64px;';
		hs+='visibility : inherit;';
		hs+='width : 128px;';
		hs+='pointer-events:auto;';
		hs+='overflow:hidden;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_115.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_115.ggUpdatePosition=function (useTransition) {
		}
		el=me._imagef8=document.createElement('div');
		els=me._imagef8__img=document.createElement('img');
		els.className='ggskin ggskin_imagef8';
		hs=basePath + 'images/imagef8.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Imagef";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 3200px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 128px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._imagef8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._imagef8.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('var1') == 1))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('var1') == 2))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getVariableValue('var1') == 3))
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				((player.getVariableValue('var1') == 4))
			)
			{
				newLogicStatePosition = 3;
			}
			else if (
				((player.getVariableValue('var1') == 5))
			)
			{
				newLogicStatePosition = 4;
			}
			else if (
				((player.getVariableValue('var1') == 6))
			)
			{
				newLogicStatePosition = 5;
			}
			else if (
				((player.getVariableValue('var1') == 7))
			)
			{
				newLogicStatePosition = 6;
			}
			else if (
				((player.getVariableValue('var1') == 8))
			)
			{
				newLogicStatePosition = 7;
			}
			else if (
				((player.getVariableValue('var1') == 9))
			)
			{
				newLogicStatePosition = 8;
			}
			else if (
				((player.getVariableValue('var1') == 10))
			)
			{
				newLogicStatePosition = 9;
			}
			else if (
				((player.getVariableValue('var1') == 11))
			)
			{
				newLogicStatePosition = 10;
			}
			else if (
				((player.getVariableValue('var1') == 12))
			)
			{
				newLogicStatePosition = 11;
			}
			else if (
				((player.getVariableValue('var1') == 13))
			)
			{
				newLogicStatePosition = 12;
			}
			else if (
				((player.getVariableValue('var1') == 14))
			)
			{
				newLogicStatePosition = 13;
			}
			else if (
				((player.getVariableValue('var1') == 15))
			)
			{
				newLogicStatePosition = 14;
			}
			else if (
				((player.getVariableValue('var1') == 16))
			)
			{
				newLogicStatePosition = 15;
			}
			else if (
				((player.getVariableValue('var1') == 17))
			)
			{
				newLogicStatePosition = 16;
			}
			else if (
				((player.getVariableValue('var1') == 18))
			)
			{
				newLogicStatePosition = 17;
			}
			else if (
				((player.getVariableValue('var1') == 19))
			)
			{
				newLogicStatePosition = 18;
			}
			else if (
				((player.getVariableValue('var1') == 20))
			)
			{
				newLogicStatePosition = 19;
			}
			else if (
				((player.getVariableValue('var1') == 21))
			)
			{
				newLogicStatePosition = 20;
			}
			else if (
				((player.getVariableValue('var1') == 22))
			)
			{
				newLogicStatePosition = 21;
			}
			else if (
				((player.getVariableValue('var1') == 23))
			)
			{
				newLogicStatePosition = 22;
			}
			else if (
				((player.getVariableValue('var1') == 24))
			)
			{
				newLogicStatePosition = 23;
			}
			else if (
				((player.getVariableValue('var1') == 0))
			)
			{
				newLogicStatePosition = 24;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._imagef8.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._imagef8.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._imagef8.style[domTransition]='left 0s, top 0s';
				if (me._imagef8.ggCurrentLogicStatePosition == 0) {
					me._imagef8.style.left='0px';
					me._imagef8.style.top='-128px';
				}
				else if (me._imagef8.ggCurrentLogicStatePosition == 1) {
					me._imagef8.style.left='0px';
					me._imagef8.style.top='-256px';
				}
				else if (me._imagef8.ggCurrentLogicStatePosition == 2) {
					me._imagef8.style.left='0px';
					me._imagef8.style.top='-384px';
				}
				else if (me._imagef8.ggCurrentLogicStatePosition == 3) {
					me._imagef8.style.left='0px';
					me._imagef8.style.top='-512px';
				}
				else if (me._imagef8.ggCurrentLogicStatePosition == 4) {
					me._imagef8.style.left='0px';
					me._imagef8.style.top='-640px';
				}
				else if (me._imagef8.ggCurrentLogicStatePosition == 5) {
					me._imagef8.style.left='0px';
					me._imagef8.style.top='-768px';
				}
				else if (me._imagef8.ggCurrentLogicStatePosition == 6) {
					me._imagef8.style.left='0px';
					me._imagef8.style.top='-896px';
				}
				else if (me._imagef8.ggCurrentLogicStatePosition == 7) {
					me._imagef8.style.left='0px';
					me._imagef8.style.top='-1024px';
				}
				else if (me._imagef8.ggCurrentLogicStatePosition == 8) {
					me._imagef8.style.left='0px';
					me._imagef8.style.top='-1152px';
				}
				else if (me._imagef8.ggCurrentLogicStatePosition == 9) {
					me._imagef8.style.left='0px';
					me._imagef8.style.top='-1280px';
				}
				else if (me._imagef8.ggCurrentLogicStatePosition == 10) {
					me._imagef8.style.left='0px';
					me._imagef8.style.top='-1408px';
				}
				else if (me._imagef8.ggCurrentLogicStatePosition == 11) {
					me._imagef8.style.left='0px';
					me._imagef8.style.top='-1536px';
				}
				else if (me._imagef8.ggCurrentLogicStatePosition == 12) {
					me._imagef8.style.left='0px';
					me._imagef8.style.top='-1664px';
				}
				else if (me._imagef8.ggCurrentLogicStatePosition == 13) {
					me._imagef8.style.left='0px';
					me._imagef8.style.top='-1792px';
				}
				else if (me._imagef8.ggCurrentLogicStatePosition == 14) {
					me._imagef8.style.left='0px';
					me._imagef8.style.top='-1920px';
				}
				else if (me._imagef8.ggCurrentLogicStatePosition == 15) {
					me._imagef8.style.left='0px';
					me._imagef8.style.top='-2048px';
				}
				else if (me._imagef8.ggCurrentLogicStatePosition == 16) {
					me._imagef8.style.left='0px';
					me._imagef8.style.top='-2176px';
				}
				else if (me._imagef8.ggCurrentLogicStatePosition == 17) {
					me._imagef8.style.left='0px';
					me._imagef8.style.top='-2304px';
				}
				else if (me._imagef8.ggCurrentLogicStatePosition == 18) {
					me._imagef8.style.left='0px';
					me._imagef8.style.top='-2432px';
				}
				else if (me._imagef8.ggCurrentLogicStatePosition == 19) {
					me._imagef8.style.left='0px';
					me._imagef8.style.top='-2560px';
				}
				else if (me._imagef8.ggCurrentLogicStatePosition == 20) {
					me._imagef8.style.left='0px';
					me._imagef8.style.top='-2688px';
				}
				else if (me._imagef8.ggCurrentLogicStatePosition == 21) {
					me._imagef8.style.left='0px';
					me._imagef8.style.top='-2816px';
				}
				else if (me._imagef8.ggCurrentLogicStatePosition == 22) {
					me._imagef8.style.left='0px';
					me._imagef8.style.top='-2944px';
				}
				else if (me._imagef8.ggCurrentLogicStatePosition == 23) {
					me._imagef8.style.left='0px';
					me._imagef8.style.top='-3072px';
				}
				else if (me._imagef8.ggCurrentLogicStatePosition == 24) {
					me._imagef8.style.left='0px';
					me._imagef8.style.top='0px';
				}
				else {
					me._imagef8.style.left='0px';
					me._imagef8.style.top='0px';
				}
			}
		}
		me._imagef8.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_115.appendChild(me._imagef8);
		me._jinxibu.appendChild(me._rectangle_115);
		el=me._ht_txtf8=document.createElement('div');
		els=me._ht_txtf8__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_txtf";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 39px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -80px;';
		hs+='visibility : inherit;';
		hs+='width : 154px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.470588);';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 32px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 6px 16px 6px 16px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u897f\u90e8\u9053\u8def";
		el.appendChild(els);
		me._ht_txtf8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_txtf8.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((152-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._jinxibu.appendChild(me._ht_txtf8);
		me.__div = me._jinxibu;
	};
	function SkinHotspotClass_jinhuodong(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._jinhuodong=document.createElement('div');
		el.ggId="jinhuodong";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 80px;';
		hs+='position : absolute;';
		hs+='top : 128px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._jinhuodong.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._jinhuodong.onclick=function (e) {
			player.openNext("{node4}","");
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._jinhuodong.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._jinhuodong.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._jinhuodong.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._jinhuodong.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_114=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 128px;';
		hs+='left : -64px;';
		hs+='position : absolute;';
		hs+='top : -64px;';
		hs+='visibility : inherit;';
		hs+='width : 128px;';
		hs+='pointer-events:auto;';
		hs+='overflow:hidden;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_114.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_114.ggUpdatePosition=function (useTransition) {
		}
		el=me._imagef7=document.createElement('div');
		els=me._imagef7__img=document.createElement('img');
		els.className='ggskin ggskin_imagef7';
		hs=basePath + 'images/imagef7.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Imagef";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 3200px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 128px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._imagef7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._imagef7.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('var1') == 1))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('var1') == 2))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getVariableValue('var1') == 3))
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				((player.getVariableValue('var1') == 4))
			)
			{
				newLogicStatePosition = 3;
			}
			else if (
				((player.getVariableValue('var1') == 5))
			)
			{
				newLogicStatePosition = 4;
			}
			else if (
				((player.getVariableValue('var1') == 6))
			)
			{
				newLogicStatePosition = 5;
			}
			else if (
				((player.getVariableValue('var1') == 7))
			)
			{
				newLogicStatePosition = 6;
			}
			else if (
				((player.getVariableValue('var1') == 8))
			)
			{
				newLogicStatePosition = 7;
			}
			else if (
				((player.getVariableValue('var1') == 9))
			)
			{
				newLogicStatePosition = 8;
			}
			else if (
				((player.getVariableValue('var1') == 10))
			)
			{
				newLogicStatePosition = 9;
			}
			else if (
				((player.getVariableValue('var1') == 11))
			)
			{
				newLogicStatePosition = 10;
			}
			else if (
				((player.getVariableValue('var1') == 12))
			)
			{
				newLogicStatePosition = 11;
			}
			else if (
				((player.getVariableValue('var1') == 13))
			)
			{
				newLogicStatePosition = 12;
			}
			else if (
				((player.getVariableValue('var1') == 14))
			)
			{
				newLogicStatePosition = 13;
			}
			else if (
				((player.getVariableValue('var1') == 15))
			)
			{
				newLogicStatePosition = 14;
			}
			else if (
				((player.getVariableValue('var1') == 16))
			)
			{
				newLogicStatePosition = 15;
			}
			else if (
				((player.getVariableValue('var1') == 17))
			)
			{
				newLogicStatePosition = 16;
			}
			else if (
				((player.getVariableValue('var1') == 18))
			)
			{
				newLogicStatePosition = 17;
			}
			else if (
				((player.getVariableValue('var1') == 19))
			)
			{
				newLogicStatePosition = 18;
			}
			else if (
				((player.getVariableValue('var1') == 20))
			)
			{
				newLogicStatePosition = 19;
			}
			else if (
				((player.getVariableValue('var1') == 21))
			)
			{
				newLogicStatePosition = 20;
			}
			else if (
				((player.getVariableValue('var1') == 22))
			)
			{
				newLogicStatePosition = 21;
			}
			else if (
				((player.getVariableValue('var1') == 23))
			)
			{
				newLogicStatePosition = 22;
			}
			else if (
				((player.getVariableValue('var1') == 24))
			)
			{
				newLogicStatePosition = 23;
			}
			else if (
				((player.getVariableValue('var1') == 0))
			)
			{
				newLogicStatePosition = 24;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._imagef7.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._imagef7.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._imagef7.style[domTransition]='left 0s, top 0s';
				if (me._imagef7.ggCurrentLogicStatePosition == 0) {
					me._imagef7.style.left='0px';
					me._imagef7.style.top='-128px';
				}
				else if (me._imagef7.ggCurrentLogicStatePosition == 1) {
					me._imagef7.style.left='0px';
					me._imagef7.style.top='-256px';
				}
				else if (me._imagef7.ggCurrentLogicStatePosition == 2) {
					me._imagef7.style.left='0px';
					me._imagef7.style.top='-384px';
				}
				else if (me._imagef7.ggCurrentLogicStatePosition == 3) {
					me._imagef7.style.left='0px';
					me._imagef7.style.top='-512px';
				}
				else if (me._imagef7.ggCurrentLogicStatePosition == 4) {
					me._imagef7.style.left='0px';
					me._imagef7.style.top='-640px';
				}
				else if (me._imagef7.ggCurrentLogicStatePosition == 5) {
					me._imagef7.style.left='0px';
					me._imagef7.style.top='-768px';
				}
				else if (me._imagef7.ggCurrentLogicStatePosition == 6) {
					me._imagef7.style.left='0px';
					me._imagef7.style.top='-896px';
				}
				else if (me._imagef7.ggCurrentLogicStatePosition == 7) {
					me._imagef7.style.left='0px';
					me._imagef7.style.top='-1024px';
				}
				else if (me._imagef7.ggCurrentLogicStatePosition == 8) {
					me._imagef7.style.left='0px';
					me._imagef7.style.top='-1152px';
				}
				else if (me._imagef7.ggCurrentLogicStatePosition == 9) {
					me._imagef7.style.left='0px';
					me._imagef7.style.top='-1280px';
				}
				else if (me._imagef7.ggCurrentLogicStatePosition == 10) {
					me._imagef7.style.left='0px';
					me._imagef7.style.top='-1408px';
				}
				else if (me._imagef7.ggCurrentLogicStatePosition == 11) {
					me._imagef7.style.left='0px';
					me._imagef7.style.top='-1536px';
				}
				else if (me._imagef7.ggCurrentLogicStatePosition == 12) {
					me._imagef7.style.left='0px';
					me._imagef7.style.top='-1664px';
				}
				else if (me._imagef7.ggCurrentLogicStatePosition == 13) {
					me._imagef7.style.left='0px';
					me._imagef7.style.top='-1792px';
				}
				else if (me._imagef7.ggCurrentLogicStatePosition == 14) {
					me._imagef7.style.left='0px';
					me._imagef7.style.top='-1920px';
				}
				else if (me._imagef7.ggCurrentLogicStatePosition == 15) {
					me._imagef7.style.left='0px';
					me._imagef7.style.top='-2048px';
				}
				else if (me._imagef7.ggCurrentLogicStatePosition == 16) {
					me._imagef7.style.left='0px';
					me._imagef7.style.top='-2176px';
				}
				else if (me._imagef7.ggCurrentLogicStatePosition == 17) {
					me._imagef7.style.left='0px';
					me._imagef7.style.top='-2304px';
				}
				else if (me._imagef7.ggCurrentLogicStatePosition == 18) {
					me._imagef7.style.left='0px';
					me._imagef7.style.top='-2432px';
				}
				else if (me._imagef7.ggCurrentLogicStatePosition == 19) {
					me._imagef7.style.left='0px';
					me._imagef7.style.top='-2560px';
				}
				else if (me._imagef7.ggCurrentLogicStatePosition == 20) {
					me._imagef7.style.left='0px';
					me._imagef7.style.top='-2688px';
				}
				else if (me._imagef7.ggCurrentLogicStatePosition == 21) {
					me._imagef7.style.left='0px';
					me._imagef7.style.top='-2816px';
				}
				else if (me._imagef7.ggCurrentLogicStatePosition == 22) {
					me._imagef7.style.left='0px';
					me._imagef7.style.top='-2944px';
				}
				else if (me._imagef7.ggCurrentLogicStatePosition == 23) {
					me._imagef7.style.left='0px';
					me._imagef7.style.top='-3072px';
				}
				else if (me._imagef7.ggCurrentLogicStatePosition == 24) {
					me._imagef7.style.left='0px';
					me._imagef7.style.top='0px';
				}
				else {
					me._imagef7.style.left='0px';
					me._imagef7.style.top='0px';
				}
			}
		}
		me._imagef7.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_114.appendChild(me._imagef7);
		me._jinhuodong.appendChild(me._rectangle_114);
		el=me._ht_txtf7=document.createElement('div');
		els=me._ht_txtf7__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_txtf";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 39px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -80px;';
		hs+='visibility : inherit;';
		hs+='width : 154px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.470588);';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 32px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 6px 16px 6px 16px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u6d3b\u52a8\u5e7f\u573a";
		el.appendChild(els);
		me._ht_txtf7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_txtf7.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((152-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._jinhuodong.appendChild(me._ht_txtf7);
		me.__div = me._jinhuodong;
	};
	function SkinHotspotClass_jinjianshen(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._jinjianshen=document.createElement('div');
		el.ggId="jinjianshen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 80px;';
		hs+='position : absolute;';
		hs+='top : 128px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._jinjianshen.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._jinjianshen.onclick=function (e) {
			player.openNext("{node5}","");
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._jinjianshen.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._jinjianshen.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._jinjianshen.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._jinjianshen.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_113=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 128px;';
		hs+='left : -64px;';
		hs+='position : absolute;';
		hs+='top : -64px;';
		hs+='visibility : inherit;';
		hs+='width : 128px;';
		hs+='pointer-events:auto;';
		hs+='overflow:hidden;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_113.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_113.ggUpdatePosition=function (useTransition) {
		}
		el=me._imagef6=document.createElement('div');
		els=me._imagef6__img=document.createElement('img');
		els.className='ggskin ggskin_imagef6';
		hs=basePath + 'images/imagef6.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Imagef";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 3200px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 128px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._imagef6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._imagef6.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('var1') == 1))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('var1') == 2))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getVariableValue('var1') == 3))
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				((player.getVariableValue('var1') == 4))
			)
			{
				newLogicStatePosition = 3;
			}
			else if (
				((player.getVariableValue('var1') == 5))
			)
			{
				newLogicStatePosition = 4;
			}
			else if (
				((player.getVariableValue('var1') == 6))
			)
			{
				newLogicStatePosition = 5;
			}
			else if (
				((player.getVariableValue('var1') == 7))
			)
			{
				newLogicStatePosition = 6;
			}
			else if (
				((player.getVariableValue('var1') == 8))
			)
			{
				newLogicStatePosition = 7;
			}
			else if (
				((player.getVariableValue('var1') == 9))
			)
			{
				newLogicStatePosition = 8;
			}
			else if (
				((player.getVariableValue('var1') == 10))
			)
			{
				newLogicStatePosition = 9;
			}
			else if (
				((player.getVariableValue('var1') == 11))
			)
			{
				newLogicStatePosition = 10;
			}
			else if (
				((player.getVariableValue('var1') == 12))
			)
			{
				newLogicStatePosition = 11;
			}
			else if (
				((player.getVariableValue('var1') == 13))
			)
			{
				newLogicStatePosition = 12;
			}
			else if (
				((player.getVariableValue('var1') == 14))
			)
			{
				newLogicStatePosition = 13;
			}
			else if (
				((player.getVariableValue('var1') == 15))
			)
			{
				newLogicStatePosition = 14;
			}
			else if (
				((player.getVariableValue('var1') == 16))
			)
			{
				newLogicStatePosition = 15;
			}
			else if (
				((player.getVariableValue('var1') == 17))
			)
			{
				newLogicStatePosition = 16;
			}
			else if (
				((player.getVariableValue('var1') == 18))
			)
			{
				newLogicStatePosition = 17;
			}
			else if (
				((player.getVariableValue('var1') == 19))
			)
			{
				newLogicStatePosition = 18;
			}
			else if (
				((player.getVariableValue('var1') == 20))
			)
			{
				newLogicStatePosition = 19;
			}
			else if (
				((player.getVariableValue('var1') == 21))
			)
			{
				newLogicStatePosition = 20;
			}
			else if (
				((player.getVariableValue('var1') == 22))
			)
			{
				newLogicStatePosition = 21;
			}
			else if (
				((player.getVariableValue('var1') == 23))
			)
			{
				newLogicStatePosition = 22;
			}
			else if (
				((player.getVariableValue('var1') == 24))
			)
			{
				newLogicStatePosition = 23;
			}
			else if (
				((player.getVariableValue('var1') == 0))
			)
			{
				newLogicStatePosition = 24;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._imagef6.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._imagef6.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._imagef6.style[domTransition]='left 0s, top 0s';
				if (me._imagef6.ggCurrentLogicStatePosition == 0) {
					me._imagef6.style.left='0px';
					me._imagef6.style.top='-128px';
				}
				else if (me._imagef6.ggCurrentLogicStatePosition == 1) {
					me._imagef6.style.left='0px';
					me._imagef6.style.top='-256px';
				}
				else if (me._imagef6.ggCurrentLogicStatePosition == 2) {
					me._imagef6.style.left='0px';
					me._imagef6.style.top='-384px';
				}
				else if (me._imagef6.ggCurrentLogicStatePosition == 3) {
					me._imagef6.style.left='0px';
					me._imagef6.style.top='-512px';
				}
				else if (me._imagef6.ggCurrentLogicStatePosition == 4) {
					me._imagef6.style.left='0px';
					me._imagef6.style.top='-640px';
				}
				else if (me._imagef6.ggCurrentLogicStatePosition == 5) {
					me._imagef6.style.left='0px';
					me._imagef6.style.top='-768px';
				}
				else if (me._imagef6.ggCurrentLogicStatePosition == 6) {
					me._imagef6.style.left='0px';
					me._imagef6.style.top='-896px';
				}
				else if (me._imagef6.ggCurrentLogicStatePosition == 7) {
					me._imagef6.style.left='0px';
					me._imagef6.style.top='-1024px';
				}
				else if (me._imagef6.ggCurrentLogicStatePosition == 8) {
					me._imagef6.style.left='0px';
					me._imagef6.style.top='-1152px';
				}
				else if (me._imagef6.ggCurrentLogicStatePosition == 9) {
					me._imagef6.style.left='0px';
					me._imagef6.style.top='-1280px';
				}
				else if (me._imagef6.ggCurrentLogicStatePosition == 10) {
					me._imagef6.style.left='0px';
					me._imagef6.style.top='-1408px';
				}
				else if (me._imagef6.ggCurrentLogicStatePosition == 11) {
					me._imagef6.style.left='0px';
					me._imagef6.style.top='-1536px';
				}
				else if (me._imagef6.ggCurrentLogicStatePosition == 12) {
					me._imagef6.style.left='0px';
					me._imagef6.style.top='-1664px';
				}
				else if (me._imagef6.ggCurrentLogicStatePosition == 13) {
					me._imagef6.style.left='0px';
					me._imagef6.style.top='-1792px';
				}
				else if (me._imagef6.ggCurrentLogicStatePosition == 14) {
					me._imagef6.style.left='0px';
					me._imagef6.style.top='-1920px';
				}
				else if (me._imagef6.ggCurrentLogicStatePosition == 15) {
					me._imagef6.style.left='0px';
					me._imagef6.style.top='-2048px';
				}
				else if (me._imagef6.ggCurrentLogicStatePosition == 16) {
					me._imagef6.style.left='0px';
					me._imagef6.style.top='-2176px';
				}
				else if (me._imagef6.ggCurrentLogicStatePosition == 17) {
					me._imagef6.style.left='0px';
					me._imagef6.style.top='-2304px';
				}
				else if (me._imagef6.ggCurrentLogicStatePosition == 18) {
					me._imagef6.style.left='0px';
					me._imagef6.style.top='-2432px';
				}
				else if (me._imagef6.ggCurrentLogicStatePosition == 19) {
					me._imagef6.style.left='0px';
					me._imagef6.style.top='-2560px';
				}
				else if (me._imagef6.ggCurrentLogicStatePosition == 20) {
					me._imagef6.style.left='0px';
					me._imagef6.style.top='-2688px';
				}
				else if (me._imagef6.ggCurrentLogicStatePosition == 21) {
					me._imagef6.style.left='0px';
					me._imagef6.style.top='-2816px';
				}
				else if (me._imagef6.ggCurrentLogicStatePosition == 22) {
					me._imagef6.style.left='0px';
					me._imagef6.style.top='-2944px';
				}
				else if (me._imagef6.ggCurrentLogicStatePosition == 23) {
					me._imagef6.style.left='0px';
					me._imagef6.style.top='-3072px';
				}
				else if (me._imagef6.ggCurrentLogicStatePosition == 24) {
					me._imagef6.style.left='0px';
					me._imagef6.style.top='0px';
				}
				else {
					me._imagef6.style.left='0px';
					me._imagef6.style.top='0px';
				}
			}
		}
		me._imagef6.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_113.appendChild(me._imagef6);
		me._jinjianshen.appendChild(me._rectangle_113);
		el=me._ht_txtf6=document.createElement('div');
		els=me._ht_txtf6__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_txtf";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 39px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -80px;';
		hs+='visibility : inherit;';
		hs+='width : 154px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.470588);';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 32px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 6px 16px 6px 16px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u5065\u8eab\u573a";
		el.appendChild(els);
		me._ht_txtf6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_txtf6.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((152-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._jinjianshen.appendChild(me._ht_txtf6);
		me.__div = me._jinjianshen;
	};
	function SkinHotspotClass_jinzhongxin(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._jinzhongxin=document.createElement('div');
		el.ggId="jinzhongxin";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 80px;';
		hs+='position : absolute;';
		hs+='top : 128px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._jinzhongxin.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._jinzhongxin.onclick=function (e) {
			player.openNext("{node10}","");
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._jinzhongxin.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._jinzhongxin.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._jinzhongxin.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._jinzhongxin.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_112=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 128px;';
		hs+='left : -64px;';
		hs+='position : absolute;';
		hs+='top : -64px;';
		hs+='visibility : inherit;';
		hs+='width : 128px;';
		hs+='pointer-events:auto;';
		hs+='overflow:hidden;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_112.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_112.ggUpdatePosition=function (useTransition) {
		}
		el=me._imagef5=document.createElement('div');
		els=me._imagef5__img=document.createElement('img');
		els.className='ggskin ggskin_imagef5';
		hs=basePath + 'images/imagef5.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Imagef";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 3200px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 128px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._imagef5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._imagef5.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('var1') == 1))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('var1') == 2))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getVariableValue('var1') == 3))
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				((player.getVariableValue('var1') == 4))
			)
			{
				newLogicStatePosition = 3;
			}
			else if (
				((player.getVariableValue('var1') == 5))
			)
			{
				newLogicStatePosition = 4;
			}
			else if (
				((player.getVariableValue('var1') == 6))
			)
			{
				newLogicStatePosition = 5;
			}
			else if (
				((player.getVariableValue('var1') == 7))
			)
			{
				newLogicStatePosition = 6;
			}
			else if (
				((player.getVariableValue('var1') == 8))
			)
			{
				newLogicStatePosition = 7;
			}
			else if (
				((player.getVariableValue('var1') == 9))
			)
			{
				newLogicStatePosition = 8;
			}
			else if (
				((player.getVariableValue('var1') == 10))
			)
			{
				newLogicStatePosition = 9;
			}
			else if (
				((player.getVariableValue('var1') == 11))
			)
			{
				newLogicStatePosition = 10;
			}
			else if (
				((player.getVariableValue('var1') == 12))
			)
			{
				newLogicStatePosition = 11;
			}
			else if (
				((player.getVariableValue('var1') == 13))
			)
			{
				newLogicStatePosition = 12;
			}
			else if (
				((player.getVariableValue('var1') == 14))
			)
			{
				newLogicStatePosition = 13;
			}
			else if (
				((player.getVariableValue('var1') == 15))
			)
			{
				newLogicStatePosition = 14;
			}
			else if (
				((player.getVariableValue('var1') == 16))
			)
			{
				newLogicStatePosition = 15;
			}
			else if (
				((player.getVariableValue('var1') == 17))
			)
			{
				newLogicStatePosition = 16;
			}
			else if (
				((player.getVariableValue('var1') == 18))
			)
			{
				newLogicStatePosition = 17;
			}
			else if (
				((player.getVariableValue('var1') == 19))
			)
			{
				newLogicStatePosition = 18;
			}
			else if (
				((player.getVariableValue('var1') == 20))
			)
			{
				newLogicStatePosition = 19;
			}
			else if (
				((player.getVariableValue('var1') == 21))
			)
			{
				newLogicStatePosition = 20;
			}
			else if (
				((player.getVariableValue('var1') == 22))
			)
			{
				newLogicStatePosition = 21;
			}
			else if (
				((player.getVariableValue('var1') == 23))
			)
			{
				newLogicStatePosition = 22;
			}
			else if (
				((player.getVariableValue('var1') == 24))
			)
			{
				newLogicStatePosition = 23;
			}
			else if (
				((player.getVariableValue('var1') == 0))
			)
			{
				newLogicStatePosition = 24;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._imagef5.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._imagef5.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._imagef5.style[domTransition]='left 0s, top 0s';
				if (me._imagef5.ggCurrentLogicStatePosition == 0) {
					me._imagef5.style.left='0px';
					me._imagef5.style.top='-128px';
				}
				else if (me._imagef5.ggCurrentLogicStatePosition == 1) {
					me._imagef5.style.left='0px';
					me._imagef5.style.top='-256px';
				}
				else if (me._imagef5.ggCurrentLogicStatePosition == 2) {
					me._imagef5.style.left='0px';
					me._imagef5.style.top='-384px';
				}
				else if (me._imagef5.ggCurrentLogicStatePosition == 3) {
					me._imagef5.style.left='0px';
					me._imagef5.style.top='-512px';
				}
				else if (me._imagef5.ggCurrentLogicStatePosition == 4) {
					me._imagef5.style.left='0px';
					me._imagef5.style.top='-640px';
				}
				else if (me._imagef5.ggCurrentLogicStatePosition == 5) {
					me._imagef5.style.left='0px';
					me._imagef5.style.top='-768px';
				}
				else if (me._imagef5.ggCurrentLogicStatePosition == 6) {
					me._imagef5.style.left='0px';
					me._imagef5.style.top='-896px';
				}
				else if (me._imagef5.ggCurrentLogicStatePosition == 7) {
					me._imagef5.style.left='0px';
					me._imagef5.style.top='-1024px';
				}
				else if (me._imagef5.ggCurrentLogicStatePosition == 8) {
					me._imagef5.style.left='0px';
					me._imagef5.style.top='-1152px';
				}
				else if (me._imagef5.ggCurrentLogicStatePosition == 9) {
					me._imagef5.style.left='0px';
					me._imagef5.style.top='-1280px';
				}
				else if (me._imagef5.ggCurrentLogicStatePosition == 10) {
					me._imagef5.style.left='0px';
					me._imagef5.style.top='-1408px';
				}
				else if (me._imagef5.ggCurrentLogicStatePosition == 11) {
					me._imagef5.style.left='0px';
					me._imagef5.style.top='-1536px';
				}
				else if (me._imagef5.ggCurrentLogicStatePosition == 12) {
					me._imagef5.style.left='0px';
					me._imagef5.style.top='-1664px';
				}
				else if (me._imagef5.ggCurrentLogicStatePosition == 13) {
					me._imagef5.style.left='0px';
					me._imagef5.style.top='-1792px';
				}
				else if (me._imagef5.ggCurrentLogicStatePosition == 14) {
					me._imagef5.style.left='0px';
					me._imagef5.style.top='-1920px';
				}
				else if (me._imagef5.ggCurrentLogicStatePosition == 15) {
					me._imagef5.style.left='0px';
					me._imagef5.style.top='-2048px';
				}
				else if (me._imagef5.ggCurrentLogicStatePosition == 16) {
					me._imagef5.style.left='0px';
					me._imagef5.style.top='-2176px';
				}
				else if (me._imagef5.ggCurrentLogicStatePosition == 17) {
					me._imagef5.style.left='0px';
					me._imagef5.style.top='-2304px';
				}
				else if (me._imagef5.ggCurrentLogicStatePosition == 18) {
					me._imagef5.style.left='0px';
					me._imagef5.style.top='-2432px';
				}
				else if (me._imagef5.ggCurrentLogicStatePosition == 19) {
					me._imagef5.style.left='0px';
					me._imagef5.style.top='-2560px';
				}
				else if (me._imagef5.ggCurrentLogicStatePosition == 20) {
					me._imagef5.style.left='0px';
					me._imagef5.style.top='-2688px';
				}
				else if (me._imagef5.ggCurrentLogicStatePosition == 21) {
					me._imagef5.style.left='0px';
					me._imagef5.style.top='-2816px';
				}
				else if (me._imagef5.ggCurrentLogicStatePosition == 22) {
					me._imagef5.style.left='0px';
					me._imagef5.style.top='-2944px';
				}
				else if (me._imagef5.ggCurrentLogicStatePosition == 23) {
					me._imagef5.style.left='0px';
					me._imagef5.style.top='-3072px';
				}
				else if (me._imagef5.ggCurrentLogicStatePosition == 24) {
					me._imagef5.style.left='0px';
					me._imagef5.style.top='0px';
				}
				else {
					me._imagef5.style.left='0px';
					me._imagef5.style.top='0px';
				}
			}
		}
		me._imagef5.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_112.appendChild(me._imagef5);
		me._jinzhongxin.appendChild(me._rectangle_112);
		el=me._ht_txtf5=document.createElement('div');
		els=me._ht_txtf5__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_txtf";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 39px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -80px;';
		hs+='visibility : inherit;';
		hs+='width : 154px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.470588);';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 32px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 6px 16px 6px 16px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u5c0f\u533a\u4e2d\u5fc3";
		el.appendChild(els);
		me._ht_txtf5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_txtf5.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((152-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._jinzhongxin.appendChild(me._ht_txtf5);
		me.__div = me._jinzhongxin;
	};
	function SkinHotspotClass_jinxiuxi(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._jinxiuxi=document.createElement('div');
		el.ggId="jinxiuxi";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 80px;';
		hs+='position : absolute;';
		hs+='top : 128px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._jinxiuxi.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._jinxiuxi.onclick=function (e) {
			player.openNext("{node1}","");
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._jinxiuxi.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._jinxiuxi.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._jinxiuxi.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._jinxiuxi.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_111=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 128px;';
		hs+='left : -64px;';
		hs+='position : absolute;';
		hs+='top : -64px;';
		hs+='visibility : inherit;';
		hs+='width : 128px;';
		hs+='pointer-events:auto;';
		hs+='overflow:hidden;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_111.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_111.ggUpdatePosition=function (useTransition) {
		}
		el=me._imagef4=document.createElement('div');
		els=me._imagef4__img=document.createElement('img');
		els.className='ggskin ggskin_imagef4';
		hs=basePath + 'images/imagef4.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Imagef";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 3200px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 128px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._imagef4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._imagef4.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('var1') == 1))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('var1') == 2))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getVariableValue('var1') == 3))
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				((player.getVariableValue('var1') == 4))
			)
			{
				newLogicStatePosition = 3;
			}
			else if (
				((player.getVariableValue('var1') == 5))
			)
			{
				newLogicStatePosition = 4;
			}
			else if (
				((player.getVariableValue('var1') == 6))
			)
			{
				newLogicStatePosition = 5;
			}
			else if (
				((player.getVariableValue('var1') == 7))
			)
			{
				newLogicStatePosition = 6;
			}
			else if (
				((player.getVariableValue('var1') == 8))
			)
			{
				newLogicStatePosition = 7;
			}
			else if (
				((player.getVariableValue('var1') == 9))
			)
			{
				newLogicStatePosition = 8;
			}
			else if (
				((player.getVariableValue('var1') == 10))
			)
			{
				newLogicStatePosition = 9;
			}
			else if (
				((player.getVariableValue('var1') == 11))
			)
			{
				newLogicStatePosition = 10;
			}
			else if (
				((player.getVariableValue('var1') == 12))
			)
			{
				newLogicStatePosition = 11;
			}
			else if (
				((player.getVariableValue('var1') == 13))
			)
			{
				newLogicStatePosition = 12;
			}
			else if (
				((player.getVariableValue('var1') == 14))
			)
			{
				newLogicStatePosition = 13;
			}
			else if (
				((player.getVariableValue('var1') == 15))
			)
			{
				newLogicStatePosition = 14;
			}
			else if (
				((player.getVariableValue('var1') == 16))
			)
			{
				newLogicStatePosition = 15;
			}
			else if (
				((player.getVariableValue('var1') == 17))
			)
			{
				newLogicStatePosition = 16;
			}
			else if (
				((player.getVariableValue('var1') == 18))
			)
			{
				newLogicStatePosition = 17;
			}
			else if (
				((player.getVariableValue('var1') == 19))
			)
			{
				newLogicStatePosition = 18;
			}
			else if (
				((player.getVariableValue('var1') == 20))
			)
			{
				newLogicStatePosition = 19;
			}
			else if (
				((player.getVariableValue('var1') == 21))
			)
			{
				newLogicStatePosition = 20;
			}
			else if (
				((player.getVariableValue('var1') == 22))
			)
			{
				newLogicStatePosition = 21;
			}
			else if (
				((player.getVariableValue('var1') == 23))
			)
			{
				newLogicStatePosition = 22;
			}
			else if (
				((player.getVariableValue('var1') == 24))
			)
			{
				newLogicStatePosition = 23;
			}
			else if (
				((player.getVariableValue('var1') == 0))
			)
			{
				newLogicStatePosition = 24;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._imagef4.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._imagef4.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._imagef4.style[domTransition]='left 0s, top 0s';
				if (me._imagef4.ggCurrentLogicStatePosition == 0) {
					me._imagef4.style.left='0px';
					me._imagef4.style.top='-128px';
				}
				else if (me._imagef4.ggCurrentLogicStatePosition == 1) {
					me._imagef4.style.left='0px';
					me._imagef4.style.top='-256px';
				}
				else if (me._imagef4.ggCurrentLogicStatePosition == 2) {
					me._imagef4.style.left='0px';
					me._imagef4.style.top='-384px';
				}
				else if (me._imagef4.ggCurrentLogicStatePosition == 3) {
					me._imagef4.style.left='0px';
					me._imagef4.style.top='-512px';
				}
				else if (me._imagef4.ggCurrentLogicStatePosition == 4) {
					me._imagef4.style.left='0px';
					me._imagef4.style.top='-640px';
				}
				else if (me._imagef4.ggCurrentLogicStatePosition == 5) {
					me._imagef4.style.left='0px';
					me._imagef4.style.top='-768px';
				}
				else if (me._imagef4.ggCurrentLogicStatePosition == 6) {
					me._imagef4.style.left='0px';
					me._imagef4.style.top='-896px';
				}
				else if (me._imagef4.ggCurrentLogicStatePosition == 7) {
					me._imagef4.style.left='0px';
					me._imagef4.style.top='-1024px';
				}
				else if (me._imagef4.ggCurrentLogicStatePosition == 8) {
					me._imagef4.style.left='0px';
					me._imagef4.style.top='-1152px';
				}
				else if (me._imagef4.ggCurrentLogicStatePosition == 9) {
					me._imagef4.style.left='0px';
					me._imagef4.style.top='-1280px';
				}
				else if (me._imagef4.ggCurrentLogicStatePosition == 10) {
					me._imagef4.style.left='0px';
					me._imagef4.style.top='-1408px';
				}
				else if (me._imagef4.ggCurrentLogicStatePosition == 11) {
					me._imagef4.style.left='0px';
					me._imagef4.style.top='-1536px';
				}
				else if (me._imagef4.ggCurrentLogicStatePosition == 12) {
					me._imagef4.style.left='0px';
					me._imagef4.style.top='-1664px';
				}
				else if (me._imagef4.ggCurrentLogicStatePosition == 13) {
					me._imagef4.style.left='0px';
					me._imagef4.style.top='-1792px';
				}
				else if (me._imagef4.ggCurrentLogicStatePosition == 14) {
					me._imagef4.style.left='0px';
					me._imagef4.style.top='-1920px';
				}
				else if (me._imagef4.ggCurrentLogicStatePosition == 15) {
					me._imagef4.style.left='0px';
					me._imagef4.style.top='-2048px';
				}
				else if (me._imagef4.ggCurrentLogicStatePosition == 16) {
					me._imagef4.style.left='0px';
					me._imagef4.style.top='-2176px';
				}
				else if (me._imagef4.ggCurrentLogicStatePosition == 17) {
					me._imagef4.style.left='0px';
					me._imagef4.style.top='-2304px';
				}
				else if (me._imagef4.ggCurrentLogicStatePosition == 18) {
					me._imagef4.style.left='0px';
					me._imagef4.style.top='-2432px';
				}
				else if (me._imagef4.ggCurrentLogicStatePosition == 19) {
					me._imagef4.style.left='0px';
					me._imagef4.style.top='-2560px';
				}
				else if (me._imagef4.ggCurrentLogicStatePosition == 20) {
					me._imagef4.style.left='0px';
					me._imagef4.style.top='-2688px';
				}
				else if (me._imagef4.ggCurrentLogicStatePosition == 21) {
					me._imagef4.style.left='0px';
					me._imagef4.style.top='-2816px';
				}
				else if (me._imagef4.ggCurrentLogicStatePosition == 22) {
					me._imagef4.style.left='0px';
					me._imagef4.style.top='-2944px';
				}
				else if (me._imagef4.ggCurrentLogicStatePosition == 23) {
					me._imagef4.style.left='0px';
					me._imagef4.style.top='-3072px';
				}
				else if (me._imagef4.ggCurrentLogicStatePosition == 24) {
					me._imagef4.style.left='0px';
					me._imagef4.style.top='0px';
				}
				else {
					me._imagef4.style.left='0px';
					me._imagef4.style.top='0px';
				}
			}
		}
		me._imagef4.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_111.appendChild(me._imagef4);
		me._jinxiuxi.appendChild(me._rectangle_111);
		el=me._ht_txtf4=document.createElement('div');
		els=me._ht_txtf4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_txtf";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 39px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -80px;';
		hs+='visibility : inherit;';
		hs+='width : 154px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.470588);';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 32px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 6px 16px 6px 16px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u4f11\u606f\u533a";
		el.appendChild(els);
		me._ht_txtf4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_txtf4.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((152-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._jinxiuxi.appendChild(me._ht_txtf4);
		me.__div = me._jinxiuxi;
	};
	function SkinHotspotClass_jinshequ(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._jinshequ=document.createElement('div');
		el.ggId="jinshequ";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 80px;';
		hs+='position : absolute;';
		hs+='top : 128px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._jinshequ.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._jinshequ.onclick=function (e) {
			player.openNext("{node7}","");
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._jinshequ.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._jinshequ.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._jinshequ.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._jinshequ.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_110=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 128px;';
		hs+='left : -64px;';
		hs+='position : absolute;';
		hs+='top : -64px;';
		hs+='visibility : inherit;';
		hs+='width : 128px;';
		hs+='pointer-events:auto;';
		hs+='overflow:hidden;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_110.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_110.ggUpdatePosition=function (useTransition) {
		}
		el=me._imagef3=document.createElement('div');
		els=me._imagef3__img=document.createElement('img');
		els.className='ggskin ggskin_imagef3';
		hs=basePath + 'images/imagef3.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Imagef";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 3200px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 128px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._imagef3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._imagef3.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('var1') == 1))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('var1') == 2))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getVariableValue('var1') == 3))
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				((player.getVariableValue('var1') == 4))
			)
			{
				newLogicStatePosition = 3;
			}
			else if (
				((player.getVariableValue('var1') == 5))
			)
			{
				newLogicStatePosition = 4;
			}
			else if (
				((player.getVariableValue('var1') == 6))
			)
			{
				newLogicStatePosition = 5;
			}
			else if (
				((player.getVariableValue('var1') == 7))
			)
			{
				newLogicStatePosition = 6;
			}
			else if (
				((player.getVariableValue('var1') == 8))
			)
			{
				newLogicStatePosition = 7;
			}
			else if (
				((player.getVariableValue('var1') == 9))
			)
			{
				newLogicStatePosition = 8;
			}
			else if (
				((player.getVariableValue('var1') == 10))
			)
			{
				newLogicStatePosition = 9;
			}
			else if (
				((player.getVariableValue('var1') == 11))
			)
			{
				newLogicStatePosition = 10;
			}
			else if (
				((player.getVariableValue('var1') == 12))
			)
			{
				newLogicStatePosition = 11;
			}
			else if (
				((player.getVariableValue('var1') == 13))
			)
			{
				newLogicStatePosition = 12;
			}
			else if (
				((player.getVariableValue('var1') == 14))
			)
			{
				newLogicStatePosition = 13;
			}
			else if (
				((player.getVariableValue('var1') == 15))
			)
			{
				newLogicStatePosition = 14;
			}
			else if (
				((player.getVariableValue('var1') == 16))
			)
			{
				newLogicStatePosition = 15;
			}
			else if (
				((player.getVariableValue('var1') == 17))
			)
			{
				newLogicStatePosition = 16;
			}
			else if (
				((player.getVariableValue('var1') == 18))
			)
			{
				newLogicStatePosition = 17;
			}
			else if (
				((player.getVariableValue('var1') == 19))
			)
			{
				newLogicStatePosition = 18;
			}
			else if (
				((player.getVariableValue('var1') == 20))
			)
			{
				newLogicStatePosition = 19;
			}
			else if (
				((player.getVariableValue('var1') == 21))
			)
			{
				newLogicStatePosition = 20;
			}
			else if (
				((player.getVariableValue('var1') == 22))
			)
			{
				newLogicStatePosition = 21;
			}
			else if (
				((player.getVariableValue('var1') == 23))
			)
			{
				newLogicStatePosition = 22;
			}
			else if (
				((player.getVariableValue('var1') == 24))
			)
			{
				newLogicStatePosition = 23;
			}
			else if (
				((player.getVariableValue('var1') == 0))
			)
			{
				newLogicStatePosition = 24;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._imagef3.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._imagef3.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._imagef3.style[domTransition]='left 0s, top 0s';
				if (me._imagef3.ggCurrentLogicStatePosition == 0) {
					me._imagef3.style.left='0px';
					me._imagef3.style.top='-128px';
				}
				else if (me._imagef3.ggCurrentLogicStatePosition == 1) {
					me._imagef3.style.left='0px';
					me._imagef3.style.top='-256px';
				}
				else if (me._imagef3.ggCurrentLogicStatePosition == 2) {
					me._imagef3.style.left='0px';
					me._imagef3.style.top='-384px';
				}
				else if (me._imagef3.ggCurrentLogicStatePosition == 3) {
					me._imagef3.style.left='0px';
					me._imagef3.style.top='-512px';
				}
				else if (me._imagef3.ggCurrentLogicStatePosition == 4) {
					me._imagef3.style.left='0px';
					me._imagef3.style.top='-640px';
				}
				else if (me._imagef3.ggCurrentLogicStatePosition == 5) {
					me._imagef3.style.left='0px';
					me._imagef3.style.top='-768px';
				}
				else if (me._imagef3.ggCurrentLogicStatePosition == 6) {
					me._imagef3.style.left='0px';
					me._imagef3.style.top='-896px';
				}
				else if (me._imagef3.ggCurrentLogicStatePosition == 7) {
					me._imagef3.style.left='0px';
					me._imagef3.style.top='-1024px';
				}
				else if (me._imagef3.ggCurrentLogicStatePosition == 8) {
					me._imagef3.style.left='0px';
					me._imagef3.style.top='-1152px';
				}
				else if (me._imagef3.ggCurrentLogicStatePosition == 9) {
					me._imagef3.style.left='0px';
					me._imagef3.style.top='-1280px';
				}
				else if (me._imagef3.ggCurrentLogicStatePosition == 10) {
					me._imagef3.style.left='0px';
					me._imagef3.style.top='-1408px';
				}
				else if (me._imagef3.ggCurrentLogicStatePosition == 11) {
					me._imagef3.style.left='0px';
					me._imagef3.style.top='-1536px';
				}
				else if (me._imagef3.ggCurrentLogicStatePosition == 12) {
					me._imagef3.style.left='0px';
					me._imagef3.style.top='-1664px';
				}
				else if (me._imagef3.ggCurrentLogicStatePosition == 13) {
					me._imagef3.style.left='0px';
					me._imagef3.style.top='-1792px';
				}
				else if (me._imagef3.ggCurrentLogicStatePosition == 14) {
					me._imagef3.style.left='0px';
					me._imagef3.style.top='-1920px';
				}
				else if (me._imagef3.ggCurrentLogicStatePosition == 15) {
					me._imagef3.style.left='0px';
					me._imagef3.style.top='-2048px';
				}
				else if (me._imagef3.ggCurrentLogicStatePosition == 16) {
					me._imagef3.style.left='0px';
					me._imagef3.style.top='-2176px';
				}
				else if (me._imagef3.ggCurrentLogicStatePosition == 17) {
					me._imagef3.style.left='0px';
					me._imagef3.style.top='-2304px';
				}
				else if (me._imagef3.ggCurrentLogicStatePosition == 18) {
					me._imagef3.style.left='0px';
					me._imagef3.style.top='-2432px';
				}
				else if (me._imagef3.ggCurrentLogicStatePosition == 19) {
					me._imagef3.style.left='0px';
					me._imagef3.style.top='-2560px';
				}
				else if (me._imagef3.ggCurrentLogicStatePosition == 20) {
					me._imagef3.style.left='0px';
					me._imagef3.style.top='-2688px';
				}
				else if (me._imagef3.ggCurrentLogicStatePosition == 21) {
					me._imagef3.style.left='0px';
					me._imagef3.style.top='-2816px';
				}
				else if (me._imagef3.ggCurrentLogicStatePosition == 22) {
					me._imagef3.style.left='0px';
					me._imagef3.style.top='-2944px';
				}
				else if (me._imagef3.ggCurrentLogicStatePosition == 23) {
					me._imagef3.style.left='0px';
					me._imagef3.style.top='-3072px';
				}
				else if (me._imagef3.ggCurrentLogicStatePosition == 24) {
					me._imagef3.style.left='0px';
					me._imagef3.style.top='0px';
				}
				else {
					me._imagef3.style.left='0px';
					me._imagef3.style.top='0px';
				}
			}
		}
		me._imagef3.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_110.appendChild(me._imagef3);
		me._jinshequ.appendChild(me._rectangle_110);
		el=me._ht_txtf3=document.createElement('div');
		els=me._ht_txtf3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_txtf";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 39px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -80px;';
		hs+='visibility : inherit;';
		hs+='width : 154px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.470588);';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 32px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 6px 16px 6px 16px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u793e\u533a\u670d\u52a1\u5904";
		el.appendChild(els);
		me._ht_txtf3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_txtf3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((152-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._jinshequ.appendChild(me._ht_txtf3);
		me.__div = me._jinshequ;
	};
	function SkinHotspotClass_jindongbu(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._jindongbu=document.createElement('div');
		el.ggId="jindongbu";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 80px;';
		hs+='position : absolute;';
		hs+='top : 128px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._jindongbu.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._jindongbu.onclick=function (e) {
			player.openNext("{node12}","");
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._jindongbu.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._jindongbu.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._jindongbu.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._jindongbu.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_19=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 128px;';
		hs+='left : -64px;';
		hs+='position : absolute;';
		hs+='top : -64px;';
		hs+='visibility : inherit;';
		hs+='width : 128px;';
		hs+='pointer-events:auto;';
		hs+='overflow:hidden;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_19.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_19.ggUpdatePosition=function (useTransition) {
		}
		el=me._imagef2=document.createElement('div');
		els=me._imagef2__img=document.createElement('img');
		els.className='ggskin ggskin_imagef2';
		hs=basePath + 'images/imagef2.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Imagef";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 3200px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 128px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._imagef2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._imagef2.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('var1') == 1))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('var1') == 2))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getVariableValue('var1') == 3))
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				((player.getVariableValue('var1') == 4))
			)
			{
				newLogicStatePosition = 3;
			}
			else if (
				((player.getVariableValue('var1') == 5))
			)
			{
				newLogicStatePosition = 4;
			}
			else if (
				((player.getVariableValue('var1') == 6))
			)
			{
				newLogicStatePosition = 5;
			}
			else if (
				((player.getVariableValue('var1') == 7))
			)
			{
				newLogicStatePosition = 6;
			}
			else if (
				((player.getVariableValue('var1') == 8))
			)
			{
				newLogicStatePosition = 7;
			}
			else if (
				((player.getVariableValue('var1') == 9))
			)
			{
				newLogicStatePosition = 8;
			}
			else if (
				((player.getVariableValue('var1') == 10))
			)
			{
				newLogicStatePosition = 9;
			}
			else if (
				((player.getVariableValue('var1') == 11))
			)
			{
				newLogicStatePosition = 10;
			}
			else if (
				((player.getVariableValue('var1') == 12))
			)
			{
				newLogicStatePosition = 11;
			}
			else if (
				((player.getVariableValue('var1') == 13))
			)
			{
				newLogicStatePosition = 12;
			}
			else if (
				((player.getVariableValue('var1') == 14))
			)
			{
				newLogicStatePosition = 13;
			}
			else if (
				((player.getVariableValue('var1') == 15))
			)
			{
				newLogicStatePosition = 14;
			}
			else if (
				((player.getVariableValue('var1') == 16))
			)
			{
				newLogicStatePosition = 15;
			}
			else if (
				((player.getVariableValue('var1') == 17))
			)
			{
				newLogicStatePosition = 16;
			}
			else if (
				((player.getVariableValue('var1') == 18))
			)
			{
				newLogicStatePosition = 17;
			}
			else if (
				((player.getVariableValue('var1') == 19))
			)
			{
				newLogicStatePosition = 18;
			}
			else if (
				((player.getVariableValue('var1') == 20))
			)
			{
				newLogicStatePosition = 19;
			}
			else if (
				((player.getVariableValue('var1') == 21))
			)
			{
				newLogicStatePosition = 20;
			}
			else if (
				((player.getVariableValue('var1') == 22))
			)
			{
				newLogicStatePosition = 21;
			}
			else if (
				((player.getVariableValue('var1') == 23))
			)
			{
				newLogicStatePosition = 22;
			}
			else if (
				((player.getVariableValue('var1') == 24))
			)
			{
				newLogicStatePosition = 23;
			}
			else if (
				((player.getVariableValue('var1') == 0))
			)
			{
				newLogicStatePosition = 24;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._imagef2.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._imagef2.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._imagef2.style[domTransition]='left 0s, top 0s';
				if (me._imagef2.ggCurrentLogicStatePosition == 0) {
					me._imagef2.style.left='0px';
					me._imagef2.style.top='-128px';
				}
				else if (me._imagef2.ggCurrentLogicStatePosition == 1) {
					me._imagef2.style.left='0px';
					me._imagef2.style.top='-256px';
				}
				else if (me._imagef2.ggCurrentLogicStatePosition == 2) {
					me._imagef2.style.left='0px';
					me._imagef2.style.top='-384px';
				}
				else if (me._imagef2.ggCurrentLogicStatePosition == 3) {
					me._imagef2.style.left='0px';
					me._imagef2.style.top='-512px';
				}
				else if (me._imagef2.ggCurrentLogicStatePosition == 4) {
					me._imagef2.style.left='0px';
					me._imagef2.style.top='-640px';
				}
				else if (me._imagef2.ggCurrentLogicStatePosition == 5) {
					me._imagef2.style.left='0px';
					me._imagef2.style.top='-768px';
				}
				else if (me._imagef2.ggCurrentLogicStatePosition == 6) {
					me._imagef2.style.left='0px';
					me._imagef2.style.top='-896px';
				}
				else if (me._imagef2.ggCurrentLogicStatePosition == 7) {
					me._imagef2.style.left='0px';
					me._imagef2.style.top='-1024px';
				}
				else if (me._imagef2.ggCurrentLogicStatePosition == 8) {
					me._imagef2.style.left='0px';
					me._imagef2.style.top='-1152px';
				}
				else if (me._imagef2.ggCurrentLogicStatePosition == 9) {
					me._imagef2.style.left='0px';
					me._imagef2.style.top='-1280px';
				}
				else if (me._imagef2.ggCurrentLogicStatePosition == 10) {
					me._imagef2.style.left='0px';
					me._imagef2.style.top='-1408px';
				}
				else if (me._imagef2.ggCurrentLogicStatePosition == 11) {
					me._imagef2.style.left='0px';
					me._imagef2.style.top='-1536px';
				}
				else if (me._imagef2.ggCurrentLogicStatePosition == 12) {
					me._imagef2.style.left='0px';
					me._imagef2.style.top='-1664px';
				}
				else if (me._imagef2.ggCurrentLogicStatePosition == 13) {
					me._imagef2.style.left='0px';
					me._imagef2.style.top='-1792px';
				}
				else if (me._imagef2.ggCurrentLogicStatePosition == 14) {
					me._imagef2.style.left='0px';
					me._imagef2.style.top='-1920px';
				}
				else if (me._imagef2.ggCurrentLogicStatePosition == 15) {
					me._imagef2.style.left='0px';
					me._imagef2.style.top='-2048px';
				}
				else if (me._imagef2.ggCurrentLogicStatePosition == 16) {
					me._imagef2.style.left='0px';
					me._imagef2.style.top='-2176px';
				}
				else if (me._imagef2.ggCurrentLogicStatePosition == 17) {
					me._imagef2.style.left='0px';
					me._imagef2.style.top='-2304px';
				}
				else if (me._imagef2.ggCurrentLogicStatePosition == 18) {
					me._imagef2.style.left='0px';
					me._imagef2.style.top='-2432px';
				}
				else if (me._imagef2.ggCurrentLogicStatePosition == 19) {
					me._imagef2.style.left='0px';
					me._imagef2.style.top='-2560px';
				}
				else if (me._imagef2.ggCurrentLogicStatePosition == 20) {
					me._imagef2.style.left='0px';
					me._imagef2.style.top='-2688px';
				}
				else if (me._imagef2.ggCurrentLogicStatePosition == 21) {
					me._imagef2.style.left='0px';
					me._imagef2.style.top='-2816px';
				}
				else if (me._imagef2.ggCurrentLogicStatePosition == 22) {
					me._imagef2.style.left='0px';
					me._imagef2.style.top='-2944px';
				}
				else if (me._imagef2.ggCurrentLogicStatePosition == 23) {
					me._imagef2.style.left='0px';
					me._imagef2.style.top='-3072px';
				}
				else if (me._imagef2.ggCurrentLogicStatePosition == 24) {
					me._imagef2.style.left='0px';
					me._imagef2.style.top='0px';
				}
				else {
					me._imagef2.style.left='0px';
					me._imagef2.style.top='0px';
				}
			}
		}
		me._imagef2.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_19.appendChild(me._imagef2);
		me._jindongbu.appendChild(me._rectangle_19);
		el=me._ht_txtf2=document.createElement('div');
		els=me._ht_txtf2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_txtf";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 39px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -80px;';
		hs+='visibility : inherit;';
		hs+='width : 154px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.470588);';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 32px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 6px 16px 6px 16px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u4e1c\u90e8\u9053\u8def";
		el.appendChild(els);
		me._ht_txtf2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_txtf2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((152-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._jindongbu.appendChild(me._ht_txtf2);
		me.__div = me._jindongbu;
	};
	function SkinHotspotClass_jinnanmen(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._jinnanmen=document.createElement('div');
		el.ggId="jinnanmen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 80px;';
		hs+='position : absolute;';
		hs+='top : 128px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._jinnanmen.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._jinnanmen.onclick=function (e) {
			player.openNext("{node6}","");
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._jinnanmen.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._jinnanmen.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._jinnanmen.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._jinnanmen.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_18=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 128px;';
		hs+='left : -64px;';
		hs+='position : absolute;';
		hs+='top : -64px;';
		hs+='visibility : inherit;';
		hs+='width : 128px;';
		hs+='pointer-events:auto;';
		hs+='overflow:hidden;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_18.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_18.ggUpdatePosition=function (useTransition) {
		}
		el=me._imagef1=document.createElement('div');
		els=me._imagef1__img=document.createElement('img');
		els.className='ggskin ggskin_imagef1';
		hs=basePath + 'images/imagef1.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Imagef";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 3200px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 128px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._imagef1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._imagef1.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('var1') == 1))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('var1') == 2))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getVariableValue('var1') == 3))
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				((player.getVariableValue('var1') == 4))
			)
			{
				newLogicStatePosition = 3;
			}
			else if (
				((player.getVariableValue('var1') == 5))
			)
			{
				newLogicStatePosition = 4;
			}
			else if (
				((player.getVariableValue('var1') == 6))
			)
			{
				newLogicStatePosition = 5;
			}
			else if (
				((player.getVariableValue('var1') == 7))
			)
			{
				newLogicStatePosition = 6;
			}
			else if (
				((player.getVariableValue('var1') == 8))
			)
			{
				newLogicStatePosition = 7;
			}
			else if (
				((player.getVariableValue('var1') == 9))
			)
			{
				newLogicStatePosition = 8;
			}
			else if (
				((player.getVariableValue('var1') == 10))
			)
			{
				newLogicStatePosition = 9;
			}
			else if (
				((player.getVariableValue('var1') == 11))
			)
			{
				newLogicStatePosition = 10;
			}
			else if (
				((player.getVariableValue('var1') == 12))
			)
			{
				newLogicStatePosition = 11;
			}
			else if (
				((player.getVariableValue('var1') == 13))
			)
			{
				newLogicStatePosition = 12;
			}
			else if (
				((player.getVariableValue('var1') == 14))
			)
			{
				newLogicStatePosition = 13;
			}
			else if (
				((player.getVariableValue('var1') == 15))
			)
			{
				newLogicStatePosition = 14;
			}
			else if (
				((player.getVariableValue('var1') == 16))
			)
			{
				newLogicStatePosition = 15;
			}
			else if (
				((player.getVariableValue('var1') == 17))
			)
			{
				newLogicStatePosition = 16;
			}
			else if (
				((player.getVariableValue('var1') == 18))
			)
			{
				newLogicStatePosition = 17;
			}
			else if (
				((player.getVariableValue('var1') == 19))
			)
			{
				newLogicStatePosition = 18;
			}
			else if (
				((player.getVariableValue('var1') == 20))
			)
			{
				newLogicStatePosition = 19;
			}
			else if (
				((player.getVariableValue('var1') == 21))
			)
			{
				newLogicStatePosition = 20;
			}
			else if (
				((player.getVariableValue('var1') == 22))
			)
			{
				newLogicStatePosition = 21;
			}
			else if (
				((player.getVariableValue('var1') == 23))
			)
			{
				newLogicStatePosition = 22;
			}
			else if (
				((player.getVariableValue('var1') == 24))
			)
			{
				newLogicStatePosition = 23;
			}
			else if (
				((player.getVariableValue('var1') == 0))
			)
			{
				newLogicStatePosition = 24;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._imagef1.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._imagef1.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._imagef1.style[domTransition]='left 0s, top 0s';
				if (me._imagef1.ggCurrentLogicStatePosition == 0) {
					me._imagef1.style.left='0px';
					me._imagef1.style.top='-128px';
				}
				else if (me._imagef1.ggCurrentLogicStatePosition == 1) {
					me._imagef1.style.left='0px';
					me._imagef1.style.top='-256px';
				}
				else if (me._imagef1.ggCurrentLogicStatePosition == 2) {
					me._imagef1.style.left='0px';
					me._imagef1.style.top='-384px';
				}
				else if (me._imagef1.ggCurrentLogicStatePosition == 3) {
					me._imagef1.style.left='0px';
					me._imagef1.style.top='-512px';
				}
				else if (me._imagef1.ggCurrentLogicStatePosition == 4) {
					me._imagef1.style.left='0px';
					me._imagef1.style.top='-640px';
				}
				else if (me._imagef1.ggCurrentLogicStatePosition == 5) {
					me._imagef1.style.left='0px';
					me._imagef1.style.top='-768px';
				}
				else if (me._imagef1.ggCurrentLogicStatePosition == 6) {
					me._imagef1.style.left='0px';
					me._imagef1.style.top='-896px';
				}
				else if (me._imagef1.ggCurrentLogicStatePosition == 7) {
					me._imagef1.style.left='0px';
					me._imagef1.style.top='-1024px';
				}
				else if (me._imagef1.ggCurrentLogicStatePosition == 8) {
					me._imagef1.style.left='0px';
					me._imagef1.style.top='-1152px';
				}
				else if (me._imagef1.ggCurrentLogicStatePosition == 9) {
					me._imagef1.style.left='0px';
					me._imagef1.style.top='-1280px';
				}
				else if (me._imagef1.ggCurrentLogicStatePosition == 10) {
					me._imagef1.style.left='0px';
					me._imagef1.style.top='-1408px';
				}
				else if (me._imagef1.ggCurrentLogicStatePosition == 11) {
					me._imagef1.style.left='0px';
					me._imagef1.style.top='-1536px';
				}
				else if (me._imagef1.ggCurrentLogicStatePosition == 12) {
					me._imagef1.style.left='0px';
					me._imagef1.style.top='-1664px';
				}
				else if (me._imagef1.ggCurrentLogicStatePosition == 13) {
					me._imagef1.style.left='0px';
					me._imagef1.style.top='-1792px';
				}
				else if (me._imagef1.ggCurrentLogicStatePosition == 14) {
					me._imagef1.style.left='0px';
					me._imagef1.style.top='-1920px';
				}
				else if (me._imagef1.ggCurrentLogicStatePosition == 15) {
					me._imagef1.style.left='0px';
					me._imagef1.style.top='-2048px';
				}
				else if (me._imagef1.ggCurrentLogicStatePosition == 16) {
					me._imagef1.style.left='0px';
					me._imagef1.style.top='-2176px';
				}
				else if (me._imagef1.ggCurrentLogicStatePosition == 17) {
					me._imagef1.style.left='0px';
					me._imagef1.style.top='-2304px';
				}
				else if (me._imagef1.ggCurrentLogicStatePosition == 18) {
					me._imagef1.style.left='0px';
					me._imagef1.style.top='-2432px';
				}
				else if (me._imagef1.ggCurrentLogicStatePosition == 19) {
					me._imagef1.style.left='0px';
					me._imagef1.style.top='-2560px';
				}
				else if (me._imagef1.ggCurrentLogicStatePosition == 20) {
					me._imagef1.style.left='0px';
					me._imagef1.style.top='-2688px';
				}
				else if (me._imagef1.ggCurrentLogicStatePosition == 21) {
					me._imagef1.style.left='0px';
					me._imagef1.style.top='-2816px';
				}
				else if (me._imagef1.ggCurrentLogicStatePosition == 22) {
					me._imagef1.style.left='0px';
					me._imagef1.style.top='-2944px';
				}
				else if (me._imagef1.ggCurrentLogicStatePosition == 23) {
					me._imagef1.style.left='0px';
					me._imagef1.style.top='-3072px';
				}
				else if (me._imagef1.ggCurrentLogicStatePosition == 24) {
					me._imagef1.style.left='0px';
					me._imagef1.style.top='0px';
				}
				else {
					me._imagef1.style.left='0px';
					me._imagef1.style.top='0px';
				}
			}
		}
		me._imagef1.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_18.appendChild(me._imagef1);
		me._jinnanmen.appendChild(me._rectangle_18);
		el=me._ht_txtf1=document.createElement('div');
		els=me._ht_txtf1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_txtf";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 39px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -80px;';
		hs+='visibility : inherit;';
		hs+='width : 154px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.470588);';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 32px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 6px 16px 6px 16px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u5357\u95e8\u5185\u90e8";
		el.appendChild(els);
		me._ht_txtf1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_txtf1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((152-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._jinnanmen.appendChild(me._ht_txtf1);
		me.__div = me._jinnanmen;
	};
	function SkinHotspotClass_jinximen(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._jinximen=document.createElement('div');
		el.ggId="jinximen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 80px;';
		hs+='position : absolute;';
		hs+='top : 128px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._jinximen.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._jinximen.onclick=function (e) {
			player.openNext("{node9}","");
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._jinximen.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._jinximen.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._jinximen.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._jinximen.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_17=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 128px;';
		hs+='left : -64px;';
		hs+='position : absolute;';
		hs+='top : -64px;';
		hs+='visibility : inherit;';
		hs+='width : 128px;';
		hs+='pointer-events:auto;';
		hs+='overflow:hidden;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_17.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_17.ggUpdatePosition=function (useTransition) {
		}
		el=me._imagef0=document.createElement('div');
		els=me._imagef0__img=document.createElement('img');
		els.className='ggskin ggskin_imagef0';
		hs=basePath + 'images/imagef0.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Imagef";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 3200px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 128px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._imagef0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._imagef0.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('var1') == 1))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('var1') == 2))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getVariableValue('var1') == 3))
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				((player.getVariableValue('var1') == 4))
			)
			{
				newLogicStatePosition = 3;
			}
			else if (
				((player.getVariableValue('var1') == 5))
			)
			{
				newLogicStatePosition = 4;
			}
			else if (
				((player.getVariableValue('var1') == 6))
			)
			{
				newLogicStatePosition = 5;
			}
			else if (
				((player.getVariableValue('var1') == 7))
			)
			{
				newLogicStatePosition = 6;
			}
			else if (
				((player.getVariableValue('var1') == 8))
			)
			{
				newLogicStatePosition = 7;
			}
			else if (
				((player.getVariableValue('var1') == 9))
			)
			{
				newLogicStatePosition = 8;
			}
			else if (
				((player.getVariableValue('var1') == 10))
			)
			{
				newLogicStatePosition = 9;
			}
			else if (
				((player.getVariableValue('var1') == 11))
			)
			{
				newLogicStatePosition = 10;
			}
			else if (
				((player.getVariableValue('var1') == 12))
			)
			{
				newLogicStatePosition = 11;
			}
			else if (
				((player.getVariableValue('var1') == 13))
			)
			{
				newLogicStatePosition = 12;
			}
			else if (
				((player.getVariableValue('var1') == 14))
			)
			{
				newLogicStatePosition = 13;
			}
			else if (
				((player.getVariableValue('var1') == 15))
			)
			{
				newLogicStatePosition = 14;
			}
			else if (
				((player.getVariableValue('var1') == 16))
			)
			{
				newLogicStatePosition = 15;
			}
			else if (
				((player.getVariableValue('var1') == 17))
			)
			{
				newLogicStatePosition = 16;
			}
			else if (
				((player.getVariableValue('var1') == 18))
			)
			{
				newLogicStatePosition = 17;
			}
			else if (
				((player.getVariableValue('var1') == 19))
			)
			{
				newLogicStatePosition = 18;
			}
			else if (
				((player.getVariableValue('var1') == 20))
			)
			{
				newLogicStatePosition = 19;
			}
			else if (
				((player.getVariableValue('var1') == 21))
			)
			{
				newLogicStatePosition = 20;
			}
			else if (
				((player.getVariableValue('var1') == 22))
			)
			{
				newLogicStatePosition = 21;
			}
			else if (
				((player.getVariableValue('var1') == 23))
			)
			{
				newLogicStatePosition = 22;
			}
			else if (
				((player.getVariableValue('var1') == 24))
			)
			{
				newLogicStatePosition = 23;
			}
			else if (
				((player.getVariableValue('var1') == 0))
			)
			{
				newLogicStatePosition = 24;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._imagef0.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._imagef0.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._imagef0.style[domTransition]='left 0s, top 0s';
				if (me._imagef0.ggCurrentLogicStatePosition == 0) {
					me._imagef0.style.left='0px';
					me._imagef0.style.top='-128px';
				}
				else if (me._imagef0.ggCurrentLogicStatePosition == 1) {
					me._imagef0.style.left='0px';
					me._imagef0.style.top='-256px';
				}
				else if (me._imagef0.ggCurrentLogicStatePosition == 2) {
					me._imagef0.style.left='0px';
					me._imagef0.style.top='-384px';
				}
				else if (me._imagef0.ggCurrentLogicStatePosition == 3) {
					me._imagef0.style.left='0px';
					me._imagef0.style.top='-512px';
				}
				else if (me._imagef0.ggCurrentLogicStatePosition == 4) {
					me._imagef0.style.left='0px';
					me._imagef0.style.top='-640px';
				}
				else if (me._imagef0.ggCurrentLogicStatePosition == 5) {
					me._imagef0.style.left='0px';
					me._imagef0.style.top='-768px';
				}
				else if (me._imagef0.ggCurrentLogicStatePosition == 6) {
					me._imagef0.style.left='0px';
					me._imagef0.style.top='-896px';
				}
				else if (me._imagef0.ggCurrentLogicStatePosition == 7) {
					me._imagef0.style.left='0px';
					me._imagef0.style.top='-1024px';
				}
				else if (me._imagef0.ggCurrentLogicStatePosition == 8) {
					me._imagef0.style.left='0px';
					me._imagef0.style.top='-1152px';
				}
				else if (me._imagef0.ggCurrentLogicStatePosition == 9) {
					me._imagef0.style.left='0px';
					me._imagef0.style.top='-1280px';
				}
				else if (me._imagef0.ggCurrentLogicStatePosition == 10) {
					me._imagef0.style.left='0px';
					me._imagef0.style.top='-1408px';
				}
				else if (me._imagef0.ggCurrentLogicStatePosition == 11) {
					me._imagef0.style.left='0px';
					me._imagef0.style.top='-1536px';
				}
				else if (me._imagef0.ggCurrentLogicStatePosition == 12) {
					me._imagef0.style.left='0px';
					me._imagef0.style.top='-1664px';
				}
				else if (me._imagef0.ggCurrentLogicStatePosition == 13) {
					me._imagef0.style.left='0px';
					me._imagef0.style.top='-1792px';
				}
				else if (me._imagef0.ggCurrentLogicStatePosition == 14) {
					me._imagef0.style.left='0px';
					me._imagef0.style.top='-1920px';
				}
				else if (me._imagef0.ggCurrentLogicStatePosition == 15) {
					me._imagef0.style.left='0px';
					me._imagef0.style.top='-2048px';
				}
				else if (me._imagef0.ggCurrentLogicStatePosition == 16) {
					me._imagef0.style.left='0px';
					me._imagef0.style.top='-2176px';
				}
				else if (me._imagef0.ggCurrentLogicStatePosition == 17) {
					me._imagef0.style.left='0px';
					me._imagef0.style.top='-2304px';
				}
				else if (me._imagef0.ggCurrentLogicStatePosition == 18) {
					me._imagef0.style.left='0px';
					me._imagef0.style.top='-2432px';
				}
				else if (me._imagef0.ggCurrentLogicStatePosition == 19) {
					me._imagef0.style.left='0px';
					me._imagef0.style.top='-2560px';
				}
				else if (me._imagef0.ggCurrentLogicStatePosition == 20) {
					me._imagef0.style.left='0px';
					me._imagef0.style.top='-2688px';
				}
				else if (me._imagef0.ggCurrentLogicStatePosition == 21) {
					me._imagef0.style.left='0px';
					me._imagef0.style.top='-2816px';
				}
				else if (me._imagef0.ggCurrentLogicStatePosition == 22) {
					me._imagef0.style.left='0px';
					me._imagef0.style.top='-2944px';
				}
				else if (me._imagef0.ggCurrentLogicStatePosition == 23) {
					me._imagef0.style.left='0px';
					me._imagef0.style.top='-3072px';
				}
				else if (me._imagef0.ggCurrentLogicStatePosition == 24) {
					me._imagef0.style.left='0px';
					me._imagef0.style.top='0px';
				}
				else {
					me._imagef0.style.left='0px';
					me._imagef0.style.top='0px';
				}
			}
		}
		me._imagef0.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_17.appendChild(me._imagef0);
		me._jinximen.appendChild(me._rectangle_17);
		el=me._ht_txtf0=document.createElement('div');
		els=me._ht_txtf0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_txtf";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 39px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -80px;';
		hs+='visibility : inherit;';
		hs+='width : 154px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.470588);';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 32px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 6px 16px 6px 16px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u897f\u95e8\u5185\u90e8";
		el.appendChild(els);
		me._ht_txtf0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_txtf0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((152-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._jinximen.appendChild(me._ht_txtf0);
		me.__div = me._jinximen;
	};
	function SkinHotspotClass_jinzoulang(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._jinzoulang=document.createElement('div');
		el.ggId="jinzoulang";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 80px;';
		hs+='position : absolute;';
		hs+='top : 128px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._jinzoulang.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._jinzoulang.onclick=function (e) {
			player.openNext("{node13}","");
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._jinzoulang.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._jinzoulang.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._jinzoulang.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._jinzoulang.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_16=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 128px;';
		hs+='left : -64px;';
		hs+='position : absolute;';
		hs+='top : -64px;';
		hs+='visibility : inherit;';
		hs+='width : 128px;';
		hs+='pointer-events:auto;';
		hs+='overflow:hidden;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_16.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_16.ggUpdatePosition=function (useTransition) {
		}
		el=me._imagef=document.createElement('div');
		els=me._imagef__img=document.createElement('img');
		els.className='ggskin ggskin_imagef';
		hs=basePath + 'images/imagef.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Imagef";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 3200px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 128px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._imagef.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._imagef.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('var1') == 1))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('var1') == 2))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getVariableValue('var1') == 3))
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				((player.getVariableValue('var1') == 4))
			)
			{
				newLogicStatePosition = 3;
			}
			else if (
				((player.getVariableValue('var1') == 5))
			)
			{
				newLogicStatePosition = 4;
			}
			else if (
				((player.getVariableValue('var1') == 6))
			)
			{
				newLogicStatePosition = 5;
			}
			else if (
				((player.getVariableValue('var1') == 7))
			)
			{
				newLogicStatePosition = 6;
			}
			else if (
				((player.getVariableValue('var1') == 8))
			)
			{
				newLogicStatePosition = 7;
			}
			else if (
				((player.getVariableValue('var1') == 9))
			)
			{
				newLogicStatePosition = 8;
			}
			else if (
				((player.getVariableValue('var1') == 10))
			)
			{
				newLogicStatePosition = 9;
			}
			else if (
				((player.getVariableValue('var1') == 11))
			)
			{
				newLogicStatePosition = 10;
			}
			else if (
				((player.getVariableValue('var1') == 12))
			)
			{
				newLogicStatePosition = 11;
			}
			else if (
				((player.getVariableValue('var1') == 13))
			)
			{
				newLogicStatePosition = 12;
			}
			else if (
				((player.getVariableValue('var1') == 14))
			)
			{
				newLogicStatePosition = 13;
			}
			else if (
				((player.getVariableValue('var1') == 15))
			)
			{
				newLogicStatePosition = 14;
			}
			else if (
				((player.getVariableValue('var1') == 16))
			)
			{
				newLogicStatePosition = 15;
			}
			else if (
				((player.getVariableValue('var1') == 17))
			)
			{
				newLogicStatePosition = 16;
			}
			else if (
				((player.getVariableValue('var1') == 18))
			)
			{
				newLogicStatePosition = 17;
			}
			else if (
				((player.getVariableValue('var1') == 19))
			)
			{
				newLogicStatePosition = 18;
			}
			else if (
				((player.getVariableValue('var1') == 20))
			)
			{
				newLogicStatePosition = 19;
			}
			else if (
				((player.getVariableValue('var1') == 21))
			)
			{
				newLogicStatePosition = 20;
			}
			else if (
				((player.getVariableValue('var1') == 22))
			)
			{
				newLogicStatePosition = 21;
			}
			else if (
				((player.getVariableValue('var1') == 23))
			)
			{
				newLogicStatePosition = 22;
			}
			else if (
				((player.getVariableValue('var1') == 24))
			)
			{
				newLogicStatePosition = 23;
			}
			else if (
				((player.getVariableValue('var1') == 0))
			)
			{
				newLogicStatePosition = 24;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._imagef.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._imagef.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._imagef.style[domTransition]='left 0s, top 0s';
				if (me._imagef.ggCurrentLogicStatePosition == 0) {
					me._imagef.style.left='0px';
					me._imagef.style.top='-128px';
				}
				else if (me._imagef.ggCurrentLogicStatePosition == 1) {
					me._imagef.style.left='0px';
					me._imagef.style.top='-256px';
				}
				else if (me._imagef.ggCurrentLogicStatePosition == 2) {
					me._imagef.style.left='0px';
					me._imagef.style.top='-384px';
				}
				else if (me._imagef.ggCurrentLogicStatePosition == 3) {
					me._imagef.style.left='0px';
					me._imagef.style.top='-512px';
				}
				else if (me._imagef.ggCurrentLogicStatePosition == 4) {
					me._imagef.style.left='0px';
					me._imagef.style.top='-640px';
				}
				else if (me._imagef.ggCurrentLogicStatePosition == 5) {
					me._imagef.style.left='0px';
					me._imagef.style.top='-768px';
				}
				else if (me._imagef.ggCurrentLogicStatePosition == 6) {
					me._imagef.style.left='0px';
					me._imagef.style.top='-896px';
				}
				else if (me._imagef.ggCurrentLogicStatePosition == 7) {
					me._imagef.style.left='0px';
					me._imagef.style.top='-1024px';
				}
				else if (me._imagef.ggCurrentLogicStatePosition == 8) {
					me._imagef.style.left='0px';
					me._imagef.style.top='-1152px';
				}
				else if (me._imagef.ggCurrentLogicStatePosition == 9) {
					me._imagef.style.left='0px';
					me._imagef.style.top='-1280px';
				}
				else if (me._imagef.ggCurrentLogicStatePosition == 10) {
					me._imagef.style.left='0px';
					me._imagef.style.top='-1408px';
				}
				else if (me._imagef.ggCurrentLogicStatePosition == 11) {
					me._imagef.style.left='0px';
					me._imagef.style.top='-1536px';
				}
				else if (me._imagef.ggCurrentLogicStatePosition == 12) {
					me._imagef.style.left='0px';
					me._imagef.style.top='-1664px';
				}
				else if (me._imagef.ggCurrentLogicStatePosition == 13) {
					me._imagef.style.left='0px';
					me._imagef.style.top='-1792px';
				}
				else if (me._imagef.ggCurrentLogicStatePosition == 14) {
					me._imagef.style.left='0px';
					me._imagef.style.top='-1920px';
				}
				else if (me._imagef.ggCurrentLogicStatePosition == 15) {
					me._imagef.style.left='0px';
					me._imagef.style.top='-2048px';
				}
				else if (me._imagef.ggCurrentLogicStatePosition == 16) {
					me._imagef.style.left='0px';
					me._imagef.style.top='-2176px';
				}
				else if (me._imagef.ggCurrentLogicStatePosition == 17) {
					me._imagef.style.left='0px';
					me._imagef.style.top='-2304px';
				}
				else if (me._imagef.ggCurrentLogicStatePosition == 18) {
					me._imagef.style.left='0px';
					me._imagef.style.top='-2432px';
				}
				else if (me._imagef.ggCurrentLogicStatePosition == 19) {
					me._imagef.style.left='0px';
					me._imagef.style.top='-2560px';
				}
				else if (me._imagef.ggCurrentLogicStatePosition == 20) {
					me._imagef.style.left='0px';
					me._imagef.style.top='-2688px';
				}
				else if (me._imagef.ggCurrentLogicStatePosition == 21) {
					me._imagef.style.left='0px';
					me._imagef.style.top='-2816px';
				}
				else if (me._imagef.ggCurrentLogicStatePosition == 22) {
					me._imagef.style.left='0px';
					me._imagef.style.top='-2944px';
				}
				else if (me._imagef.ggCurrentLogicStatePosition == 23) {
					me._imagef.style.left='0px';
					me._imagef.style.top='-3072px';
				}
				else if (me._imagef.ggCurrentLogicStatePosition == 24) {
					me._imagef.style.left='0px';
					me._imagef.style.top='0px';
				}
				else {
					me._imagef.style.left='0px';
					me._imagef.style.top='0px';
				}
			}
		}
		me._imagef.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_16.appendChild(me._imagef);
		me._jinzoulang.appendChild(me._rectangle_16);
		el=me._ht_txtf=document.createElement('div');
		els=me._ht_txtf__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_txtf";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 39px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -80px;';
		hs+='visibility : inherit;';
		hs+='width : 154px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.470588);';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 32px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 6px 16px 6px 16px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u5c0f\u8d70\u5eca";
		el.appendChild(els);
		me._ht_txtf.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_txtf.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((152-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._jinzoulang.appendChild(me._ht_txtf);
		me.__div = me._jinzoulang;
	};
	function SkinHotspotClass__1(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__1=document.createElement('div');
		el.ggId="1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 115px;';
		hs+='position : absolute;';
		hs+='top : 77px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__1.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me.__1.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me.__1.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me.__1.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me.__1.ggUpdatePosition=function (useTransition) {
		}
		el=me._lou_1=document.createElement('div');
		els=me._lou_1__img=document.createElement('img');
		els.className='ggskin ggskin_lou_1';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACmElEQVRIiZWVTUhUURTHf3eeOq40B3IIMcRFC8HwAxeJ0SIXrqagoAGpli2shaK4aB0YY7rIRbWLECYoqJFAkJAIEQw/UHATiCAizWJMMJnRnrfFnMk7b+57TX+4cO555/z/536dp/AgW3XbnFYC14H7wFUgKv4fwFfgNfAZOCkkVB+/K+JTAeRR4DFwFzjnLUTwE3gDPBHREpEKn8Qo8BK4IfMNYFbBJoCGFqAPaAUeAReBB6ZIyQqM6iuASeAhcAxMhXESg6er6S4ViQB805nMZKi9Poc7InFVwBQwCPw2VxGyVN8D3BN7Kkz1aErvNvaq6HQtlQu1VC70quh0Su82hqkeFWIkp8dLZhO4BdQAG2GcREpvtzuoJBAHLsmIO6hkSm+3h3ESsoU1kh'+
			'soUAN0iT07fLqWdlBDQLOlkGYHNTR8upYGZsXXJRyBAucBFGx2qLoI0GkhL6CzQ9VFCocvuYECIYvvf1CS7yXLyUBDy4rezwDLAYTLK3o/I9e2KN9P4BBIi903Hmqrd9ETwJaFfMtFT4yH2urJvwkk9zBI4BewLnZrDnckpppWXXQcSALfZSRddDymmlblLbRKzrpw+ApA/kZkxR7IkR2LqYadeZ3uP+Ck+4CT7nmd7o+php0c2TFgQGKznN2mv7C95FrgI3DNiAtqFQV8Id9aDuDsJfs1uzvkO2XYskIbcuQ77luTHPyv5AzwqUxyJHbG9qFIwFA+Ap4Ce2WQ70nskYejVMCDJeA5oANitMQs+QWUCHgqeAHMBQjMSYwtF/AcsgnjwK8A74ELnpA98t1z0Y8cyus7i8AzwDV8rvgW/5XsK+Cp6BWQMuYp8dlii+C7'+
			'RQUYW3UZ+CD2TaSlBJGD/0/fhnUgYdhl4Q8khM/bJmq0DAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="lou 1";
		el.ggDx=0;
		el.ggDy=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 36px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._lou_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._lou_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__1.appendChild(me._lou_1);
		el=me.__1tt=document.createElement('div');
		els=me.__1tt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="1tt";
		el.ggDx=0;
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #474747;';
		hs+='border: 1px solid #ffffff;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="1\u53f7\u697c";
		el.appendChild(els);
		me.__1tt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__1tt.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((102-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me.__1.appendChild(me.__1tt);
		me.__div = me.__1;
	};
	function SkinHotspotClass__3(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__3=document.createElement('div');
		el.ggId="3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 115px;';
		hs+='position : absolute;';
		hs+='top : 77px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__3.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__3.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me.__3.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me.__3.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me.__3.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me.__3.ggUpdatePosition=function (useTransition) {
		}
		el=me._lou_3=document.createElement('div');
		els=me._lou_3__img=document.createElement('img');
		els.className='ggskin ggskin_lou_3';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACmElEQVRIiZWVTUhUURTHf3eeOq40B3IIMcRFC8HwAxeJ0SIXrqagoAGpli2shaK4aB0YY7rIRbWLECYoqJFAkJAIEQw/UHATiCAizWJMMJnRnrfFnMk7b+57TX+4cO555/z/536dp/AgW3XbnFYC14H7wFUgKv4fwFfgNfAZOCkkVB+/K+JTAeRR4DFwFzjnLUTwE3gDPBHREpEKn8Qo8BK4IfMNYFbBJoCGFqAPaAUeAReBB6ZIyQqM6iuASeAhcAxMhXESg6er6S4ViQB805nMZKi9Poc7InFVwBQwCPw2VxGyVN8D3BN7Kkz1aErvNvaq6HQtlQu1VC70quh0Su82hqkeFWIkp8dLZhO4BdQAG2GcREpvtzuoJBAHLsmIO6hkSm+3h3ESsoU1kh'+
			'soUAN0iT07fLqWdlBDQLOlkGYHNTR8upYGZsXXJRyBAucBFGx2qLoI0GkhL6CzQ9VFCocvuYECIYvvf1CS7yXLyUBDy4rezwDLAYTLK3o/I9e2KN9P4BBIi903Hmqrd9ETwJaFfMtFT4yH2urJvwkk9zBI4BewLnZrDnckpppWXXQcSALfZSRddDymmlblLbRKzrpw+ApA/kZkxR7IkR2LqYadeZ3uP+Ck+4CT7nmd7o+php0c2TFgQGKznN2mv7C95FrgI3DNiAtqFQV8Id9aDuDsJfs1uzvkO2XYskIbcuQ77luTHPyv5AzwqUxyJHbG9qFIwFA+Ap4Ce2WQ70nskYejVMCDJeA5oANitMQs+QWUCHgqeAHMBQjMSYwtF/AcsgnjwK8A74ELnpA98t1z0Y8cyus7i8AzwDV8rvgW/5XsK+Cp6BWQMuYp8dlii+C7'+
			'RQUYW3UZ+CD2TaSlBJGD/0/fhnUgYdhl4Q8khM/bJmq0DAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="lou 3";
		el.ggDx=0;
		el.ggDy=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 36px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._lou_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._lou_3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__3.appendChild(me._lou_3);
		el=me.__3tt=document.createElement('div');
		els=me.__3tt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="3tt";
		el.ggDx=0;
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #474747;';
		hs+='border: 1px solid #ffffff;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="3\u53f7\u697c";
		el.appendChild(els);
		me.__3tt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__3tt.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((102-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me.__3.appendChild(me.__3tt);
		me.__div = me.__3;
	};
	function SkinHotspotClass__3a(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__3a=document.createElement('div');
		el.ggId="3A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 115px;';
		hs+='position : absolute;';
		hs+='top : 77px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__3a.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__3a.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me.__3a.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me.__3a.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me.__3a.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me.__3a.ggUpdatePosition=function (useTransition) {
		}
		el=me._lou_3a=document.createElement('div');
		els=me._lou_3a__img=document.createElement('img');
		els.className='ggskin ggskin_lou_3a';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACmElEQVRIiZWVTUhUURTHf3eeOq40B3IIMcRFC8HwAxeJ0SIXrqagoAGpli2shaK4aB0YY7rIRbWLECYoqJFAkJAIEQw/UHATiCAizWJMMJnRnrfFnMk7b+57TX+4cO555/z/536dp/AgW3XbnFYC14H7wFUgKv4fwFfgNfAZOCkkVB+/K+JTAeRR4DFwFzjnLUTwE3gDPBHREpEKn8Qo8BK4IfMNYFbBJoCGFqAPaAUeAReBB6ZIyQqM6iuASeAhcAxMhXESg6er6S4ViQB805nMZKi9Poc7InFVwBQwCPw2VxGyVN8D3BN7Kkz1aErvNvaq6HQtlQu1VC70quh0Su82hqkeFWIkp8dLZhO4BdQAG2GcREpvtzuoJBAHLsmIO6hkSm+3h3ESsoU1kh'+
			'soUAN0iT07fLqWdlBDQLOlkGYHNTR8upYGZsXXJRyBAucBFGx2qLoI0GkhL6CzQ9VFCocvuYECIYvvf1CS7yXLyUBDy4rezwDLAYTLK3o/I9e2KN9P4BBIi903Hmqrd9ETwJaFfMtFT4yH2urJvwkk9zBI4BewLnZrDnckpppWXXQcSALfZSRddDymmlblLbRKzrpw+ApA/kZkxR7IkR2LqYadeZ3uP+Ck+4CT7nmd7o+php0c2TFgQGKznN2mv7C95FrgI3DNiAtqFQV8Id9aDuDsJfs1uzvkO2XYskIbcuQ77luTHPyv5AzwqUxyJHbG9qFIwFA+Ap4Ce2WQ70nskYejVMCDJeA5oANitMQs+QWUCHgqeAHMBQjMSYwtF/AcsgnjwK8A74ELnpA98t1z0Y8cyus7i8AzwDV8rvgW/5XsK+Cp6BWQMuYp8dlii+C7'+
			'RQUYW3UZ+CD2TaSlBJGD/0/fhnUgYdhl4Q8khM/bJmq0DAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="lou 3A";
		el.ggDx=0;
		el.ggDy=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 36px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._lou_3a.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._lou_3a.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__3a.appendChild(me._lou_3a);
		el=me.__3att=document.createElement('div');
		els=me.__3att__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="3Att";
		el.ggDx=0;
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #474747;';
		hs+='border: 1px solid #ffffff;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="3A\u53f7\u697c";
		el.appendChild(els);
		me.__3att.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__3att.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((102-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me.__3a.appendChild(me.__3att);
		me.__div = me.__3a;
	};
	function SkinHotspotClass__5(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__5=document.createElement('div');
		el.ggId="5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 115px;';
		hs+='position : absolute;';
		hs+='top : 77px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__5.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__5.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me.__5.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me.__5.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me.__5.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me.__5.ggUpdatePosition=function (useTransition) {
		}
		el=me._lou_5=document.createElement('div');
		els=me._lou_5__img=document.createElement('img');
		els.className='ggskin ggskin_lou_5';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACmElEQVRIiZWVTUhUURTHf3eeOq40B3IIMcRFC8HwAxeJ0SIXrqagoAGpli2shaK4aB0YY7rIRbWLECYoqJFAkJAIEQw/UHATiCAizWJMMJnRnrfFnMk7b+57TX+4cO555/z/536dp/AgW3XbnFYC14H7wFUgKv4fwFfgNfAZOCkkVB+/K+JTAeRR4DFwFzjnLUTwE3gDPBHREpEKn8Qo8BK4IfMNYFbBJoCGFqAPaAUeAReBB6ZIyQqM6iuASeAhcAxMhXESg6er6S4ViQB805nMZKi9Poc7InFVwBQwCPw2VxGyVN8D3BN7Kkz1aErvNvaq6HQtlQu1VC70quh0Su82hqkeFWIkp8dLZhO4BdQAG2GcREpvtzuoJBAHLsmIO6hkSm+3h3ESsoU1kh'+
			'soUAN0iT07fLqWdlBDQLOlkGYHNTR8upYGZsXXJRyBAucBFGx2qLoI0GkhL6CzQ9VFCocvuYECIYvvf1CS7yXLyUBDy4rezwDLAYTLK3o/I9e2KN9P4BBIi903Hmqrd9ETwJaFfMtFT4yH2urJvwkk9zBI4BewLnZrDnckpppWXXQcSALfZSRddDymmlblLbRKzrpw+ApA/kZkxR7IkR2LqYadeZ3uP+Ck+4CT7nmd7o+php0c2TFgQGKznN2mv7C95FrgI3DNiAtqFQV8Id9aDuDsJfs1uzvkO2XYskIbcuQ77luTHPyv5AzwqUxyJHbG9qFIwFA+Ap4Ce2WQ70nskYejVMCDJeA5oANitMQs+QWUCHgqeAHMBQjMSYwtF/AcsgnjwK8A74ELnpA98t1z0Y8cyus7i8AzwDV8rvgW/5XsK+Cp6BWQMuYp8dlii+C7'+
			'RQUYW3UZ+CD2TaSlBJGD/0/fhnUgYdhl4Q8khM/bJmq0DAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="lou 5";
		el.ggDx=0;
		el.ggDy=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 36px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._lou_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._lou_5.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__5.appendChild(me._lou_5);
		el=me.__5tt=document.createElement('div');
		els=me.__5tt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="5tt";
		el.ggDx=0;
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #474747;';
		hs+='border: 1px solid #ffffff;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="5\u53f7\u697c";
		el.appendChild(els);
		me.__5tt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__5tt.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((102-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me.__5.appendChild(me.__5tt);
		me.__div = me.__5;
	};
	function SkinHotspotClass__11(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__11=document.createElement('div');
		el.ggId="11";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 115px;';
		hs+='position : absolute;';
		hs+='top : 77px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__11.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__11.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me.__11.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me.__11.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me.__11.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me.__11.ggUpdatePosition=function (useTransition) {
		}
		el=me._lou_11=document.createElement('div');
		els=me._lou_11__img=document.createElement('img');
		els.className='ggskin ggskin_lou_11';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACmElEQVRIiZWVTUhUURTHf3eeOq40B3IIMcRFC8HwAxeJ0SIXrqagoAGpli2shaK4aB0YY7rIRbWLECYoqJFAkJAIEQw/UHATiCAizWJMMJnRnrfFnMk7b+57TX+4cO555/z/536dp/AgW3XbnFYC14H7wFUgKv4fwFfgNfAZOCkkVB+/K+JTAeRR4DFwFzjnLUTwE3gDPBHREpEKn8Qo8BK4IfMNYFbBJoCGFqAPaAUeAReBB6ZIyQqM6iuASeAhcAxMhXESg6er6S4ViQB805nMZKi9Poc7InFVwBQwCPw2VxGyVN8D3BN7Kkz1aErvNvaq6HQtlQu1VC70quh0Su82hqkeFWIkp8dLZhO4BdQAG2GcREpvtzuoJBAHLsmIO6hkSm+3h3ESsoU1kh'+
			'soUAN0iT07fLqWdlBDQLOlkGYHNTR8upYGZsXXJRyBAucBFGx2qLoI0GkhL6CzQ9VFCocvuYECIYvvf1CS7yXLyUBDy4rezwDLAYTLK3o/I9e2KN9P4BBIi903Hmqrd9ETwJaFfMtFT4yH2urJvwkk9zBI4BewLnZrDnckpppWXXQcSALfZSRddDymmlblLbRKzrpw+ApA/kZkxR7IkR2LqYadeZ3uP+Ck+4CT7nmd7o+php0c2TFgQGKznN2mv7C95FrgI3DNiAtqFQV8Id9aDuDsJfs1uzvkO2XYskIbcuQ77luTHPyv5AzwqUxyJHbG9qFIwFA+Ap4Ce2WQ70nskYejVMCDJeA5oANitMQs+QWUCHgqeAHMBQjMSYwtF/AcsgnjwK8A74ELnpA98t1z0Y8cyus7i8AzwDV8rvgW/5XsK+Cp6BWQMuYp8dlii+C7'+
			'RQUYW3UZ+CD2TaSlBJGD/0/fhnUgYdhl4Q8khM/bJmq0DAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="lou 11";
		el.ggDx=0;
		el.ggDy=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 36px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._lou_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._lou_11.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__11.appendChild(me._lou_11);
		el=me.__11tt=document.createElement('div');
		els=me.__11tt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="11tt";
		el.ggDx=0;
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #474747;';
		hs+='border: 1px solid #ffffff;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="11\u53f7\u697c";
		el.appendChild(els);
		me.__11tt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__11tt.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((102-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me.__11.appendChild(me.__11tt);
		me.__div = me.__11;
	};
	function SkinHotspotClass__15(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__15=document.createElement('div');
		el.ggId="15";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 115px;';
		hs+='position : absolute;';
		hs+='top : 77px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__15.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__15.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me.__15.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me.__15.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me.__15.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me.__15.ggUpdatePosition=function (useTransition) {
		}
		el=me._lou_15=document.createElement('div');
		els=me._lou_15__img=document.createElement('img');
		els.className='ggskin ggskin_lou_15';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACmElEQVRIiZWVTUhUURTHf3eeOq40B3IIMcRFC8HwAxeJ0SIXrqagoAGpli2shaK4aB0YY7rIRbWLECYoqJFAkJAIEQw/UHATiCAizWJMMJnRnrfFnMk7b+57TX+4cO555/z/536dp/AgW3XbnFYC14H7wFUgKv4fwFfgNfAZOCkkVB+/K+JTAeRR4DFwFzjnLUTwE3gDPBHREpEKn8Qo8BK4IfMNYFbBJoCGFqAPaAUeAReBB6ZIyQqM6iuASeAhcAxMhXESg6er6S4ViQB805nMZKi9Poc7InFVwBQwCPw2VxGyVN8D3BN7Kkz1aErvNvaq6HQtlQu1VC70quh0Su82hqkeFWIkp8dLZhO4BdQAG2GcREpvtzuoJBAHLsmIO6hkSm+3h3ESsoU1kh'+
			'soUAN0iT07fLqWdlBDQLOlkGYHNTR8upYGZsXXJRyBAucBFGx2qLoI0GkhL6CzQ9VFCocvuYECIYvvf1CS7yXLyUBDy4rezwDLAYTLK3o/I9e2KN9P4BBIi903Hmqrd9ETwJaFfMtFT4yH2urJvwkk9zBI4BewLnZrDnckpppWXXQcSALfZSRddDymmlblLbRKzrpw+ApA/kZkxR7IkR2LqYadeZ3uP+Ck+4CT7nmd7o+php0c2TFgQGKznN2mv7C95FrgI3DNiAtqFQV8Id9aDuDsJfs1uzvkO2XYskIbcuQ77luTHPyv5AzwqUxyJHbG9qFIwFA+Ap4Ce2WQ70nskYejVMCDJeA5oANitMQs+QWUCHgqeAHMBQjMSYwtF/AcsgnjwK8A74ELnpA98t1z0Y8cyus7i8AzwDV8rvgW/5XsK+Cp6BWQMuYp8dlii+C7'+
			'RQUYW3UZ+CD2TaSlBJGD/0/fhnUgYdhl4Q8khM/bJmq0DAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="lou 15";
		el.ggDx=0;
		el.ggDy=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 36px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._lou_15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._lou_15.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__15.appendChild(me._lou_15);
		el=me.__15tt=document.createElement('div');
		els=me.__15tt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="15tt";
		el.ggDx=0;
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #474747;';
		hs+='border: 1px solid #ffffff;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="15\u53f7\u697c";
		el.appendChild(els);
		me.__15tt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__15tt.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((102-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me.__15.appendChild(me.__15tt);
		me.__div = me.__15;
	};
	function SkinHotspotClass__17(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__17=document.createElement('div');
		el.ggId="17";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 115px;';
		hs+='position : absolute;';
		hs+='top : 77px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__17.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__17.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me.__17.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me.__17.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me.__17.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me.__17.ggUpdatePosition=function (useTransition) {
		}
		el=me._lou_17=document.createElement('div');
		els=me._lou_17__img=document.createElement('img');
		els.className='ggskin ggskin_lou_17';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACmElEQVRIiZWVTUhUURTHf3eeOq40B3IIMcRFC8HwAxeJ0SIXrqagoAGpli2shaK4aB0YY7rIRbWLECYoqJFAkJAIEQw/UHATiCAizWJMMJnRnrfFnMk7b+57TX+4cO555/z/536dp/AgW3XbnFYC14H7wFUgKv4fwFfgNfAZOCkkVB+/K+JTAeRR4DFwFzjnLUTwE3gDPBHREpEKn8Qo8BK4IfMNYFbBJoCGFqAPaAUeAReBB6ZIyQqM6iuASeAhcAxMhXESg6er6S4ViQB805nMZKi9Poc7InFVwBQwCPw2VxGyVN8D3BN7Kkz1aErvNvaq6HQtlQu1VC70quh0Su82hqkeFWIkp8dLZhO4BdQAG2GcREpvtzuoJBAHLsmIO6hkSm+3h3ESsoU1kh'+
			'soUAN0iT07fLqWdlBDQLOlkGYHNTR8upYGZsXXJRyBAucBFGx2qLoI0GkhL6CzQ9VFCocvuYECIYvvf1CS7yXLyUBDy4rezwDLAYTLK3o/I9e2KN9P4BBIi903Hmqrd9ETwJaFfMtFT4yH2urJvwkk9zBI4BewLnZrDnckpppWXXQcSALfZSRddDymmlblLbRKzrpw+ApA/kZkxR7IkR2LqYadeZ3uP+Ck+4CT7nmd7o+php0c2TFgQGKznN2mv7C95FrgI3DNiAtqFQV8Id9aDuDsJfs1uzvkO2XYskIbcuQ77luTHPyv5AzwqUxyJHbG9qFIwFA+Ap4Ce2WQ70nskYejVMCDJeA5oANitMQs+QWUCHgqeAHMBQjMSYwtF/AcsgnjwK8A74ELnpA98t1z0Y8cyus7i8AzwDV8rvgW/5XsK+Cp6BWQMuYp8dlii+C7'+
			'RQUYW3UZ+CD2TaSlBJGD/0/fhnUgYdhl4Q8khM/bJmq0DAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="lou 17";
		el.ggDx=0;
		el.ggDy=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 36px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._lou_17.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._lou_17.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__17.appendChild(me._lou_17);
		el=me.__17tt=document.createElement('div');
		els=me.__17tt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="17tt";
		el.ggDx=0;
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #474747;';
		hs+='border: 1px solid #ffffff;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="17\u53f7\u697c";
		el.appendChild(els);
		me.__17tt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__17tt.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((102-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me.__17.appendChild(me.__17tt);
		me.__div = me.__17;
	};
	function SkinHotspotClass__19(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__19=document.createElement('div');
		el.ggId="19";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 115px;';
		hs+='position : absolute;';
		hs+='top : 77px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__19.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__19.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me.__19.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me.__19.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me.__19.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me.__19.ggUpdatePosition=function (useTransition) {
		}
		el=me._lou_19=document.createElement('div');
		els=me._lou_19__img=document.createElement('img');
		els.className='ggskin ggskin_lou_19';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACmElEQVRIiZWVTUhUURTHf3eeOq40B3IIMcRFC8HwAxeJ0SIXrqagoAGpli2shaK4aB0YY7rIRbWLECYoqJFAkJAIEQw/UHATiCAizWJMMJnRnrfFnMk7b+57TX+4cO555/z/536dp/AgW3XbnFYC14H7wFUgKv4fwFfgNfAZOCkkVB+/K+JTAeRR4DFwFzjnLUTwE3gDPBHREpEKn8Qo8BK4IfMNYFbBJoCGFqAPaAUeAReBB6ZIyQqM6iuASeAhcAxMhXESg6er6S4ViQB805nMZKi9Poc7InFVwBQwCPw2VxGyVN8D3BN7Kkz1aErvNvaq6HQtlQu1VC70quh0Su82hqkeFWIkp8dLZhO4BdQAG2GcREpvtzuoJBAHLsmIO6hkSm+3h3ESsoU1kh'+
			'soUAN0iT07fLqWdlBDQLOlkGYHNTR8upYGZsXXJRyBAucBFGx2qLoI0GkhL6CzQ9VFCocvuYECIYvvf1CS7yXLyUBDy4rezwDLAYTLK3o/I9e2KN9P4BBIi903Hmqrd9ETwJaFfMtFT4yH2urJvwkk9zBI4BewLnZrDnckpppWXXQcSALfZSRddDymmlblLbRKzrpw+ApA/kZkxR7IkR2LqYadeZ3uP+Ck+4CT7nmd7o+php0c2TFgQGKznN2mv7C95FrgI3DNiAtqFQV8Id9aDuDsJfs1uzvkO2XYskIbcuQ77luTHPyv5AzwqUxyJHbG9qFIwFA+Ap4Ce2WQ70nskYejVMCDJeA5oANitMQs+QWUCHgqeAHMBQjMSYwtF/AcsgnjwK8A74ELnpA98t1z0Y8cyus7i8AzwDV8rvgW/5XsK+Cp6BWQMuYp8dlii+C7'+
			'RQUYW3UZ+CD2TaSlBJGD/0/fhnUgYdhl4Q8khM/bJmq0DAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="lou 19";
		el.ggDx=0;
		el.ggDy=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 36px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._lou_19.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._lou_19.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__19.appendChild(me._lou_19);
		el=me.__19tt=document.createElement('div');
		els=me.__19tt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="19tt";
		el.ggDx=0;
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #474747;';
		hs+='border: 1px solid #ffffff;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="19\u53f7\u697c";
		el.appendChild(els);
		me.__19tt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__19tt.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((102-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me.__19.appendChild(me.__19tt);
		me.__div = me.__19;
	};
	function SkinHotspotClass__13(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__13=document.createElement('div');
		el.ggId="13";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 115px;';
		hs+='position : absolute;';
		hs+='top : 77px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__13.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__13.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me.__13.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me.__13.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me.__13.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me.__13.ggUpdatePosition=function (useTransition) {
		}
		el=me._lou_13=document.createElement('div');
		els=me._lou_13__img=document.createElement('img');
		els.className='ggskin ggskin_lou_13';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACmElEQVRIiZWVTUhUURTHf3eeOq40B3IIMcRFC8HwAxeJ0SIXrqagoAGpli2shaK4aB0YY7rIRbWLECYoqJFAkJAIEQw/UHATiCAizWJMMJnRnrfFnMk7b+57TX+4cO555/z/536dp/AgW3XbnFYC14H7wFUgKv4fwFfgNfAZOCkkVB+/K+JTAeRR4DFwFzjnLUTwE3gDPBHREpEKn8Qo8BK4IfMNYFbBJoCGFqAPaAUeAReBB6ZIyQqM6iuASeAhcAxMhXESg6er6S4ViQB805nMZKi9Poc7InFVwBQwCPw2VxGyVN8D3BN7Kkz1aErvNvaq6HQtlQu1VC70quh0Su82hqkeFWIkp8dLZhO4BdQAG2GcREpvtzuoJBAHLsmIO6hkSm+3h3ESsoU1kh'+
			'soUAN0iT07fLqWdlBDQLOlkGYHNTR8upYGZsXXJRyBAucBFGx2qLoI0GkhL6CzQ9VFCocvuYECIYvvf1CS7yXLyUBDy4rezwDLAYTLK3o/I9e2KN9P4BBIi903Hmqrd9ETwJaFfMtFT4yH2urJvwkk9zBI4BewLnZrDnckpppWXXQcSALfZSRddDymmlblLbRKzrpw+ApA/kZkxR7IkR2LqYadeZ3uP+Ck+4CT7nmd7o+php0c2TFgQGKznN2mv7C95FrgI3DNiAtqFQV8Id9aDuDsJfs1uzvkO2XYskIbcuQ77luTHPyv5AzwqUxyJHbG9qFIwFA+Ap4Ce2WQ70nskYejVMCDJeA5oANitMQs+QWUCHgqeAHMBQjMSYwtF/AcsgnjwK8A74ELnpA98t1z0Y8cyus7i8AzwDV8rvgW/5XsK+Cp6BWQMuYp8dlii+C7'+
			'RQUYW3UZ+CD2TaSlBJGD/0/fhnUgYdhl4Q8khM/bJmq0DAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="lou 13";
		el.ggDx=0;
		el.ggDy=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 36px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._lou_13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._lou_13.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__13.appendChild(me._lou_13);
		el=me.__13tt=document.createElement('div');
		els=me.__13tt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="13tt";
		el.ggDx=0;
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #474747;';
		hs+='border: 1px solid #ffffff;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="13\u53f7\u697c";
		el.appendChild(els);
		me.__13tt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__13tt.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((102-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me.__13.appendChild(me.__13tt);
		me.__div = me.__13;
	};
	function SkinHotspotClass__9(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__9=document.createElement('div');
		el.ggId="9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 115px;';
		hs+='position : absolute;';
		hs+='top : 77px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__9.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__9.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me.__9.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me.__9.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me.__9.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me.__9.ggUpdatePosition=function (useTransition) {
		}
		el=me._lou_9=document.createElement('div');
		els=me._lou_9__img=document.createElement('img');
		els.className='ggskin ggskin_lou_9';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACmElEQVRIiZWVTUhUURTHf3eeOq40B3IIMcRFC8HwAxeJ0SIXrqagoAGpli2shaK4aB0YY7rIRbWLECYoqJFAkJAIEQw/UHATiCAizWJMMJnRnrfFnMk7b+57TX+4cO555/z/536dp/AgW3XbnFYC14H7wFUgKv4fwFfgNfAZOCkkVB+/K+JTAeRR4DFwFzjnLUTwE3gDPBHREpEKn8Qo8BK4IfMNYFbBJoCGFqAPaAUeAReBB6ZIyQqM6iuASeAhcAxMhXESg6er6S4ViQB805nMZKi9Poc7InFVwBQwCPw2VxGyVN8D3BN7Kkz1aErvNvaq6HQtlQu1VC70quh0Su82hqkeFWIkp8dLZhO4BdQAG2GcREpvtzuoJBAHLsmIO6hkSm+3h3ESsoU1kh'+
			'soUAN0iT07fLqWdlBDQLOlkGYHNTR8upYGZsXXJRyBAucBFGx2qLoI0GkhL6CzQ9VFCocvuYECIYvvf1CS7yXLyUBDy4rezwDLAYTLK3o/I9e2KN9P4BBIi903Hmqrd9ETwJaFfMtFT4yH2urJvwkk9zBI4BewLnZrDnckpppWXXQcSALfZSRddDymmlblLbRKzrpw+ApA/kZkxR7IkR2LqYadeZ3uP+Ck+4CT7nmd7o+php0c2TFgQGKznN2mv7C95FrgI3DNiAtqFQV8Id9aDuDsJfs1uzvkO2XYskIbcuQ77luTHPyv5AzwqUxyJHbG9qFIwFA+Ap4Ce2WQ70nskYejVMCDJeA5oANitMQs+QWUCHgqeAHMBQjMSYwtF/AcsgnjwK8A74ELnpA98t1z0Y8cyus7i8AzwDV8rvgW/5XsK+Cp6BWQMuYp8dlii+C7'+
			'RQUYW3UZ+CD2TaSlBJGD/0/fhnUgYdhl4Q8khM/bJmq0DAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="lou 9";
		el.ggDx=0;
		el.ggDy=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 36px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._lou_9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._lou_9.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__9.appendChild(me._lou_9);
		el=me.__9tt=document.createElement('div');
		els=me.__9tt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="9tt";
		el.ggDx=0;
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #474747;';
		hs+='border: 1px solid #ffffff;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="9\u53f7\u697c";
		el.appendChild(els);
		me.__9tt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__9tt.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((102-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me.__9.appendChild(me.__9tt);
		me.__div = me.__9;
	};
	function SkinHotspotClass__7(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__7=document.createElement('div');
		el.ggId="7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 115px;';
		hs+='position : absolute;';
		hs+='top : 77px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__7.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__7.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me.__7.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me.__7.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me.__7.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me.__7.ggUpdatePosition=function (useTransition) {
		}
		el=me._lou_7=document.createElement('div');
		els=me._lou_7__img=document.createElement('img');
		els.className='ggskin ggskin_lou_7';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACmElEQVRIiZWVTUhUURTHf3eeOq40B3IIMcRFC8HwAxeJ0SIXrqagoAGpli2shaK4aB0YY7rIRbWLECYoqJFAkJAIEQw/UHATiCAizWJMMJnRnrfFnMk7b+57TX+4cO555/z/536dp/AgW3XbnFYC14H7wFUgKv4fwFfgNfAZOCkkVB+/K+JTAeRR4DFwFzjnLUTwE3gDPBHREpEKn8Qo8BK4IfMNYFbBJoCGFqAPaAUeAReBB6ZIyQqM6iuASeAhcAxMhXESg6er6S4ViQB805nMZKi9Poc7InFVwBQwCPw2VxGyVN8D3BN7Kkz1aErvNvaq6HQtlQu1VC70quh0Su82hqkeFWIkp8dLZhO4BdQAG2GcREpvtzuoJBAHLsmIO6hkSm+3h3ESsoU1kh'+
			'soUAN0iT07fLqWdlBDQLOlkGYHNTR8upYGZsXXJRyBAucBFGx2qLoI0GkhL6CzQ9VFCocvuYECIYvvf1CS7yXLyUBDy4rezwDLAYTLK3o/I9e2KN9P4BBIi903Hmqrd9ETwJaFfMtFT4yH2urJvwkk9zBI4BewLnZrDnckpppWXXQcSALfZSRddDymmlblLbRKzrpw+ApA/kZkxR7IkR2LqYadeZ3uP+Ck+4CT7nmd7o+php0c2TFgQGKznN2mv7C95FrgI3DNiAtqFQV8Id9aDuDsJfs1uzvkO2XYskIbcuQ77luTHPyv5AzwqUxyJHbG9qFIwFA+Ap4Ce2WQ70nskYejVMCDJeA5oANitMQs+QWUCHgqeAHMBQjMSYwtF/AcsgnjwK8A74ELnpA98t1z0Y8cyus7i8AzwDV8rvgW/5XsK+Cp6BWQMuYp8dlii+C7'+
			'RQUYW3UZ+CD2TaSlBJGD/0/fhnUgYdhl4Q8khM/bJmq0DAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="lou 7";
		el.ggDx=0;
		el.ggDy=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 36px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._lou_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._lou_7.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__7.appendChild(me._lou_7);
		el=me.__7tt=document.createElement('div');
		els=me.__7tt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="7tt";
		el.ggDx=0;
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #474747;';
		hs+='border: 1px solid #ffffff;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="7\u53f7\u697c";
		el.appendChild(els);
		me.__7tt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__7tt.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((102-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me.__7.appendChild(me.__7tt);
		me.__div = me.__7;
	};
	function SkinHotspotClass__21(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__21=document.createElement('div');
		el.ggId="21";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 115px;';
		hs+='position : absolute;';
		hs+='top : 77px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__21.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__21.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me.__21.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me.__21.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me.__21.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me.__21.ggUpdatePosition=function (useTransition) {
		}
		el=me._lou_21=document.createElement('div');
		els=me._lou_21__img=document.createElement('img');
		els.className='ggskin ggskin_lou_21';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACmElEQVRIiZWVTUhUURTHf3eeOq40B3IIMcRFC8HwAxeJ0SIXrqagoAGpli2shaK4aB0YY7rIRbWLECYoqJFAkJAIEQw/UHATiCAizWJMMJnRnrfFnMk7b+57TX+4cO555/z/536dp/AgW3XbnFYC14H7wFUgKv4fwFfgNfAZOCkkVB+/K+JTAeRR4DFwFzjnLUTwE3gDPBHREpEKn8Qo8BK4IfMNYFbBJoCGFqAPaAUeAReBB6ZIyQqM6iuASeAhcAxMhXESg6er6S4ViQB805nMZKi9Poc7InFVwBQwCPw2VxGyVN8D3BN7Kkz1aErvNvaq6HQtlQu1VC70quh0Su82hqkeFWIkp8dLZhO4BdQAG2GcREpvtzuoJBAHLsmIO6hkSm+3h3ESsoU1kh'+
			'soUAN0iT07fLqWdlBDQLOlkGYHNTR8upYGZsXXJRyBAucBFGx2qLoI0GkhL6CzQ9VFCocvuYECIYvvf1CS7yXLyUBDy4rezwDLAYTLK3o/I9e2KN9P4BBIi903Hmqrd9ETwJaFfMtFT4yH2urJvwkk9zBI4BewLnZrDnckpppWXXQcSALfZSRddDymmlblLbRKzrpw+ApA/kZkxR7IkR2LqYadeZ3uP+Ck+4CT7nmd7o+php0c2TFgQGKznN2mv7C95FrgI3DNiAtqFQV8Id9aDuDsJfs1uzvkO2XYskIbcuQ77luTHPyv5AzwqUxyJHbG9qFIwFA+Ap4Ce2WQ70nskYejVMCDJeA5oANitMQs+QWUCHgqeAHMBQjMSYwtF/AcsgnjwK8A74ELnpA98t1z0Y8cyus7i8AzwDV8rvgW/5XsK+Cp6BWQMuYp8dlii+C7'+
			'RQUYW3UZ+CD2TaSlBJGD/0/fhnUgYdhl4Q8khM/bJmq0DAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="lou 21";
		el.ggDx=0;
		el.ggDy=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 36px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._lou_21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._lou_21.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__21.appendChild(me._lou_21);
		el=me.__21tt=document.createElement('div');
		els=me.__21tt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="21tt";
		el.ggDx=0;
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #474747;';
		hs+='border: 1px solid #ffffff;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="21\u53f7\u697c";
		el.appendChild(els);
		me.__21tt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__21tt.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((102-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me.__21.appendChild(me.__21tt);
		me.__div = me.__21;
	};
	function SkinHotspotClass__23(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__23=document.createElement('div');
		el.ggId="23";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 115px;';
		hs+='position : absolute;';
		hs+='top : 77px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__23.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__23.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me.__23.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me.__23.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me.__23.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me.__23.ggUpdatePosition=function (useTransition) {
		}
		el=me._lou_23=document.createElement('div');
		els=me._lou_23__img=document.createElement('img');
		els.className='ggskin ggskin_lou_23';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACmElEQVRIiZWVTUhUURTHf3eeOq40B3IIMcRFC8HwAxeJ0SIXrqagoAGpli2shaK4aB0YY7rIRbWLECYoqJFAkJAIEQw/UHATiCAizWJMMJnRnrfFnMk7b+57TX+4cO555/z/536dp/AgW3XbnFYC14H7wFUgKv4fwFfgNfAZOCkkVB+/K+JTAeRR4DFwFzjnLUTwE3gDPBHREpEKn8Qo8BK4IfMNYFbBJoCGFqAPaAUeAReBB6ZIyQqM6iuASeAhcAxMhXESg6er6S4ViQB805nMZKi9Poc7InFVwBQwCPw2VxGyVN8D3BN7Kkz1aErvNvaq6HQtlQu1VC70quh0Su82hqkeFWIkp8dLZhO4BdQAG2GcREpvtzuoJBAHLsmIO6hkSm+3h3ESsoU1kh'+
			'soUAN0iT07fLqWdlBDQLOlkGYHNTR8upYGZsXXJRyBAucBFGx2qLoI0GkhL6CzQ9VFCocvuYECIYvvf1CS7yXLyUBDy4rezwDLAYTLK3o/I9e2KN9P4BBIi903Hmqrd9ETwJaFfMtFT4yH2urJvwkk9zBI4BewLnZrDnckpppWXXQcSALfZSRddDymmlblLbRKzrpw+ApA/kZkxR7IkR2LqYadeZ3uP+Ck+4CT7nmd7o+php0c2TFgQGKznN2mv7C95FrgI3DNiAtqFQV8Id9aDuDsJfs1uzvkO2XYskIbcuQ77luTHPyv5AzwqUxyJHbG9qFIwFA+Ap4Ce2WQ70nskYejVMCDJeA5oANitMQs+QWUCHgqeAHMBQjMSYwtF/AcsgnjwK8A74ELnpA98t1z0Y8cyus7i8AzwDV8rvgW/5XsK+Cp6BWQMuYp8dlii+C7'+
			'RQUYW3UZ+CD2TaSlBJGD/0/fhnUgYdhl4Q8khM/bJmq0DAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="lou 23";
		el.ggDx=1;
		el.ggDy=-4;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 36px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._lou_23.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._lou_23.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__23.appendChild(me._lou_23);
		el=me.__23tt=document.createElement('div');
		els=me.__23tt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="23tt";
		el.ggDx=0;
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #474747;';
		hs+='border: 1px solid #ffffff;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="23\u53f7\u697c";
		el.appendChild(els);
		me.__23tt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__23tt.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((102-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me.__23.appendChild(me.__23tt);
		me.__div = me.__23;
	};
	function SkinHotspotClass_wuren(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._wuren=document.createElement('div');
		el.ggId="wuren";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 33px;';
		hs+='position : absolute;';
		hs+='top : -89px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._wuren.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._wuren.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._wuren.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._wuren.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._wuren.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._wuren.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_25=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 99px;';
		hs+='border-radius : 99px;';
		hs+='background : rgba(255,255,255,0.627451);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -24px;';
		hs+='position : absolute;';
		hs+='top : -25px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_25.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_25.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_ht') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_25.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_25.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_25.style[domTransition]='' + cssPrefix + 'transform 750ms ease 0ms';
				if (me._rectangle_25.ggCurrentLogicStateScaling == 0) {
					me._rectangle_25.ggParameter.sx = 0.75;
					me._rectangle_25.ggParameter.sy = 0.75;
					me._rectangle_25.style[domTransform]=parameterToTransform(me._rectangle_25.ggParameter);
				}
				else {
					me._rectangle_25.ggParameter.sx = 1;
					me._rectangle_25.ggParameter.sy = 1;
					me._rectangle_25.style[domTransform]=parameterToTransform(me._rectangle_25.ggParameter);
				}
			}
		}
		me._rectangle_25.ggUpdatePosition=function (useTransition) {
		}
		me._wuren.appendChild(me._rectangle_25);
		el=me._rectangle_15=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 99px;';
		hs+='border-radius : 99px;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 26px;';
		hs+='left : -12px;';
		hs+='position : absolute;';
		hs+='top : -13px;';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_15.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_ht') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_15.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_15.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_15.style[domTransition]='' + cssPrefix + 'transform 750ms ease 0ms';
				if (me._rectangle_15.ggCurrentLogicStateScaling == 0) {
					me._rectangle_15.ggParameter.sx = 1.25;
					me._rectangle_15.ggParameter.sy = 1.25;
					me._rectangle_15.style[domTransform]=parameterToTransform(me._rectangle_15.ggParameter);
				}
				else {
					me._rectangle_15.ggParameter.sx = 1;
					me._rectangle_15.ggParameter.sy = 1;
					me._rectangle_15.style[domTransform]=parameterToTransform(me._rectangle_15.ggParameter);
				}
			}
		}
		me._rectangle_15.ggUpdatePosition=function (useTransition) {
		}
		me._wuren.appendChild(me._rectangle_15);
		el=me._wurentt=document.createElement('div');
		els=me._wurentt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="wurentt";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -49px;';
		hs+='position : absolute;';
		hs+='top : -60px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #474747;';
		hs+='border: 1px solid #ffffff;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u65e0\u4eba\u552e\u8d27\u673a";
		el.appendChild(els);
		me._wurentt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._wurentt.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((102-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._wuren.appendChild(me._wurentt);
		me.__div = me._wuren;
	};
	function SkinHotspotClass_kuaidi(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._kuaidi=document.createElement('div');
		el.ggId="kuaidi";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 33px;';
		hs+='position : absolute;';
		hs+='top : -89px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._kuaidi.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._kuaidi.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._kuaidi.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._kuaidi.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._kuaidi.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._kuaidi.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_24=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 99px;';
		hs+='border-radius : 99px;';
		hs+='background : rgba(255,255,255,0.627451);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -24px;';
		hs+='position : absolute;';
		hs+='top : -25px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_24.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_24.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_ht') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_24.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_24.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_24.style[domTransition]='' + cssPrefix + 'transform 750ms ease 0ms';
				if (me._rectangle_24.ggCurrentLogicStateScaling == 0) {
					me._rectangle_24.ggParameter.sx = 0.75;
					me._rectangle_24.ggParameter.sy = 0.75;
					me._rectangle_24.style[domTransform]=parameterToTransform(me._rectangle_24.ggParameter);
				}
				else {
					me._rectangle_24.ggParameter.sx = 1;
					me._rectangle_24.ggParameter.sy = 1;
					me._rectangle_24.style[domTransform]=parameterToTransform(me._rectangle_24.ggParameter);
				}
			}
		}
		me._rectangle_24.ggUpdatePosition=function (useTransition) {
		}
		me._kuaidi.appendChild(me._rectangle_24);
		el=me._rectangle_14=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 99px;';
		hs+='border-radius : 99px;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 26px;';
		hs+='left : -12px;';
		hs+='position : absolute;';
		hs+='top : -13px;';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_14.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_ht') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_14.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_14.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_14.style[domTransition]='' + cssPrefix + 'transform 750ms ease 0ms';
				if (me._rectangle_14.ggCurrentLogicStateScaling == 0) {
					me._rectangle_14.ggParameter.sx = 1.25;
					me._rectangle_14.ggParameter.sy = 1.25;
					me._rectangle_14.style[domTransform]=parameterToTransform(me._rectangle_14.ggParameter);
				}
				else {
					me._rectangle_14.ggParameter.sx = 1;
					me._rectangle_14.ggParameter.sy = 1;
					me._rectangle_14.style[domTransform]=parameterToTransform(me._rectangle_14.ggParameter);
				}
			}
		}
		me._rectangle_14.ggUpdatePosition=function (useTransition) {
		}
		me._kuaidi.appendChild(me._rectangle_14);
		el=me._kuaiditt=document.createElement('div');
		els=me._kuaiditt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="kuaiditt";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -49px;';
		hs+='position : absolute;';
		hs+='top : -60px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #474747;';
		hs+='border: 1px solid #ffffff;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u5feb\u9012\u4ee3\u6536\u70b9";
		el.appendChild(els);
		me._kuaiditt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._kuaiditt.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((102-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._kuaidi.appendChild(me._kuaiditt);
		me.__div = me._kuaidi;
	};
	function SkinHotspotClass_chaoshi(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._chaoshi=document.createElement('div');
		el.ggId="chaoshi";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 33px;';
		hs+='position : absolute;';
		hs+='top : -89px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._chaoshi.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._chaoshi.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._chaoshi.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._chaoshi.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._chaoshi.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._chaoshi.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_23=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 99px;';
		hs+='border-radius : 99px;';
		hs+='background : rgba(255,255,255,0.627451);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -24px;';
		hs+='position : absolute;';
		hs+='top : -25px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_23.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_23.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_ht') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_23.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_23.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_23.style[domTransition]='' + cssPrefix + 'transform 750ms ease 0ms';
				if (me._rectangle_23.ggCurrentLogicStateScaling == 0) {
					me._rectangle_23.ggParameter.sx = 0.75;
					me._rectangle_23.ggParameter.sy = 0.75;
					me._rectangle_23.style[domTransform]=parameterToTransform(me._rectangle_23.ggParameter);
				}
				else {
					me._rectangle_23.ggParameter.sx = 1;
					me._rectangle_23.ggParameter.sy = 1;
					me._rectangle_23.style[domTransform]=parameterToTransform(me._rectangle_23.ggParameter);
				}
			}
		}
		me._rectangle_23.ggUpdatePosition=function (useTransition) {
		}
		me._chaoshi.appendChild(me._rectangle_23);
		el=me._rectangle_13=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 99px;';
		hs+='border-radius : 99px;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 26px;';
		hs+='left : -12px;';
		hs+='position : absolute;';
		hs+='top : -13px;';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_13.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_ht') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_13.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_13.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_13.style[domTransition]='' + cssPrefix + 'transform 750ms ease 0ms';
				if (me._rectangle_13.ggCurrentLogicStateScaling == 0) {
					me._rectangle_13.ggParameter.sx = 1.25;
					me._rectangle_13.ggParameter.sy = 1.25;
					me._rectangle_13.style[domTransform]=parameterToTransform(me._rectangle_13.ggParameter);
				}
				else {
					me._rectangle_13.ggParameter.sx = 1;
					me._rectangle_13.ggParameter.sy = 1;
					me._rectangle_13.style[domTransform]=parameterToTransform(me._rectangle_13.ggParameter);
				}
			}
		}
		me._rectangle_13.ggUpdatePosition=function (useTransition) {
		}
		me._chaoshi.appendChild(me._rectangle_13);
		el=me._chaoshitt=document.createElement('div');
		els=me._chaoshitt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="chaoshitt";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -49px;';
		hs+='position : absolute;';
		hs+='top : -60px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #474747;';
		hs+='border: 1px solid #ffffff;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u4fbf\u6c11\u8d85\u5e02";
		el.appendChild(els);
		me._chaoshitt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chaoshitt.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((102-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._chaoshi.appendChild(me._chaoshitt);
		me.__div = me._chaoshi;
	};
	function SkinHotspotClass_congdian(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._congdian=document.createElement('div');
		el.ggId="congdian";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 33px;';
		hs+='position : absolute;';
		hs+='top : -89px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._congdian.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._congdian.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._congdian.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._congdian.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._congdian.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._congdian.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_22=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 99px;';
		hs+='border-radius : 99px;';
		hs+='background : rgba(255,255,255,0.627451);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -24px;';
		hs+='position : absolute;';
		hs+='top : -25px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_22.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_22.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_ht') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_22.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_22.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_22.style[domTransition]='' + cssPrefix + 'transform 750ms ease 0ms';
				if (me._rectangle_22.ggCurrentLogicStateScaling == 0) {
					me._rectangle_22.ggParameter.sx = 0.75;
					me._rectangle_22.ggParameter.sy = 0.75;
					me._rectangle_22.style[domTransform]=parameterToTransform(me._rectangle_22.ggParameter);
				}
				else {
					me._rectangle_22.ggParameter.sx = 1;
					me._rectangle_22.ggParameter.sy = 1;
					me._rectangle_22.style[domTransform]=parameterToTransform(me._rectangle_22.ggParameter);
				}
			}
		}
		me._rectangle_22.ggUpdatePosition=function (useTransition) {
		}
		me._congdian.appendChild(me._rectangle_22);
		el=me._rectangle_12=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 99px;';
		hs+='border-radius : 99px;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 26px;';
		hs+='left : -12px;';
		hs+='position : absolute;';
		hs+='top : -13px;';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_12.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_ht') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_12.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_12.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_12.style[domTransition]='' + cssPrefix + 'transform 750ms ease 0ms';
				if (me._rectangle_12.ggCurrentLogicStateScaling == 0) {
					me._rectangle_12.ggParameter.sx = 1.25;
					me._rectangle_12.ggParameter.sy = 1.25;
					me._rectangle_12.style[domTransform]=parameterToTransform(me._rectangle_12.ggParameter);
				}
				else {
					me._rectangle_12.ggParameter.sx = 1;
					me._rectangle_12.ggParameter.sy = 1;
					me._rectangle_12.style[domTransform]=parameterToTransform(me._rectangle_12.ggParameter);
				}
			}
		}
		me._rectangle_12.ggUpdatePosition=function (useTransition) {
		}
		me._congdian.appendChild(me._rectangle_12);
		el=me._congdiantt=document.createElement('div');
		els=me._congdiantt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="congdiantt";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -49px;';
		hs+='position : absolute;';
		hs+='top : -60px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #474747;';
		hs+='border: 1px solid #ffffff;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u5145\u7535\u6869";
		el.appendChild(els);
		me._congdiantt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._congdiantt.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((102-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._congdian.appendChild(me._congdiantt);
		me.__div = me._congdian;
	};
	function SkinHotspotClass_dixia(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._dixia=document.createElement('div');
		el.ggId="dixia";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 33px;';
		hs+='position : absolute;';
		hs+='top : -89px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dixia.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._dixia.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._dixia.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._dixia.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._dixia.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._dixia.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_21=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 99px;';
		hs+='border-radius : 99px;';
		hs+='background : rgba(255,255,255,0.627451);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -24px;';
		hs+='position : absolute;';
		hs+='top : -25px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_21.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_ht') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_21.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_21.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_21.style[domTransition]='' + cssPrefix + 'transform 750ms ease 0ms';
				if (me._rectangle_21.ggCurrentLogicStateScaling == 0) {
					me._rectangle_21.ggParameter.sx = 0.75;
					me._rectangle_21.ggParameter.sy = 0.75;
					me._rectangle_21.style[domTransform]=parameterToTransform(me._rectangle_21.ggParameter);
				}
				else {
					me._rectangle_21.ggParameter.sx = 1;
					me._rectangle_21.ggParameter.sy = 1;
					me._rectangle_21.style[domTransform]=parameterToTransform(me._rectangle_21.ggParameter);
				}
			}
		}
		me._rectangle_21.ggUpdatePosition=function (useTransition) {
		}
		me._dixia.appendChild(me._rectangle_21);
		el=me._rectangle_11=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 99px;';
		hs+='border-radius : 99px;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 26px;';
		hs+='left : -12px;';
		hs+='position : absolute;';
		hs+='top : -13px;';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_11.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_ht') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_11.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_11.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_11.style[domTransition]='' + cssPrefix + 'transform 750ms ease 0ms';
				if (me._rectangle_11.ggCurrentLogicStateScaling == 0) {
					me._rectangle_11.ggParameter.sx = 1.25;
					me._rectangle_11.ggParameter.sy = 1.25;
					me._rectangle_11.style[domTransform]=parameterToTransform(me._rectangle_11.ggParameter);
				}
				else {
					me._rectangle_11.ggParameter.sx = 1;
					me._rectangle_11.ggParameter.sy = 1;
					me._rectangle_11.style[domTransform]=parameterToTransform(me._rectangle_11.ggParameter);
				}
			}
		}
		me._rectangle_11.ggUpdatePosition=function (useTransition) {
		}
		me._dixia.appendChild(me._rectangle_11);
		el=me._dixiatt=document.createElement('div');
		els=me._dixiatt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="dixiatt";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -49px;';
		hs+='position : absolute;';
		hs+='top : -60px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #474747;';
		hs+='border: 1px solid #ffffff;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u8f66\u5e93\u8fdb\u51fa\u53e3";
		el.appendChild(els);
		me._dixiatt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._dixiatt.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((102-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._dixia.appendChild(me._dixiatt);
		me.__div = me._dixia;
	};
	function SkinHotspotClass_wuye(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._wuye=document.createElement('div');
		el.ggId="wuye";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 33px;';
		hs+='position : absolute;';
		hs+='top : -89px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._wuye.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._wuye.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._wuye.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._wuye.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._wuye.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._wuye.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_20=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 99px;';
		hs+='border-radius : 99px;';
		hs+='background : rgba(255,255,255,0.627451);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -24px;';
		hs+='position : absolute;';
		hs+='top : -25px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_20.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_ht') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_20.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_20.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_20.style[domTransition]='' + cssPrefix + 'transform 750ms ease 0ms';
				if (me._rectangle_20.ggCurrentLogicStateScaling == 0) {
					me._rectangle_20.ggParameter.sx = 0.75;
					me._rectangle_20.ggParameter.sy = 0.75;
					me._rectangle_20.style[domTransform]=parameterToTransform(me._rectangle_20.ggParameter);
				}
				else {
					me._rectangle_20.ggParameter.sx = 1;
					me._rectangle_20.ggParameter.sy = 1;
					me._rectangle_20.style[domTransform]=parameterToTransform(me._rectangle_20.ggParameter);
				}
			}
		}
		me._rectangle_20.ggUpdatePosition=function (useTransition) {
		}
		me._wuye.appendChild(me._rectangle_20);
		el=me._rectangle_10=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 99px;';
		hs+='border-radius : 99px;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 26px;';
		hs+='left : -12px;';
		hs+='position : absolute;';
		hs+='top : -13px;';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_10.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_ht') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_10.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_10.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_10.style[domTransition]='' + cssPrefix + 'transform 750ms ease 0ms';
				if (me._rectangle_10.ggCurrentLogicStateScaling == 0) {
					me._rectangle_10.ggParameter.sx = 1.25;
					me._rectangle_10.ggParameter.sy = 1.25;
					me._rectangle_10.style[domTransform]=parameterToTransform(me._rectangle_10.ggParameter);
				}
				else {
					me._rectangle_10.ggParameter.sx = 1;
					me._rectangle_10.ggParameter.sy = 1;
					me._rectangle_10.style[domTransform]=parameterToTransform(me._rectangle_10.ggParameter);
				}
			}
		}
		me._rectangle_10.ggUpdatePosition=function (useTransition) {
		}
		me._wuye.appendChild(me._rectangle_10);
		el=me._wuyett=document.createElement('div');
		els=me._wuyett__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="wuyett";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -49px;';
		hs+='position : absolute;';
		hs+='top : -60px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #474747;';
		hs+='border: 1px solid #ffffff;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u5c0f\u533a\u7269\u4e1a";
		el.appendChild(els);
		me._wuyett.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._wuyett.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((102-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._wuye.appendChild(me._wuyett);
		me.__div = me._wuye;
	};
	function SkinHotspotClass_laji(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._laji=document.createElement('div');
		el.ggId="laji";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 33px;';
		hs+='position : absolute;';
		hs+='top : -89px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._laji.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._laji.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._laji.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._laji.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._laji.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._laji.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_2=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 99px;';
		hs+='border-radius : 99px;';
		hs+='background : rgba(255,255,255,0.627451);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -24px;';
		hs+='position : absolute;';
		hs+='top : -25px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_ht') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_2.style[domTransition]='' + cssPrefix + 'transform 750ms ease 0ms';
				if (me._rectangle_2.ggCurrentLogicStateScaling == 0) {
					me._rectangle_2.ggParameter.sx = 0.75;
					me._rectangle_2.ggParameter.sy = 0.75;
					me._rectangle_2.style[domTransform]=parameterToTransform(me._rectangle_2.ggParameter);
				}
				else {
					me._rectangle_2.ggParameter.sx = 1;
					me._rectangle_2.ggParameter.sy = 1;
					me._rectangle_2.style[domTransform]=parameterToTransform(me._rectangle_2.ggParameter);
				}
			}
		}
		me._rectangle_2.ggUpdatePosition=function (useTransition) {
		}
		me._laji.appendChild(me._rectangle_2);
		el=me._rectangle_1=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 99px;';
		hs+='border-radius : 99px;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 26px;';
		hs+='left : -12px;';
		hs+='position : absolute;';
		hs+='top : -13px;';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_ht') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_1.style[domTransition]='' + cssPrefix + 'transform 750ms ease 0ms';
				if (me._rectangle_1.ggCurrentLogicStateScaling == 0) {
					me._rectangle_1.ggParameter.sx = 1.25;
					me._rectangle_1.ggParameter.sy = 1.25;
					me._rectangle_1.style[domTransform]=parameterToTransform(me._rectangle_1.ggParameter);
				}
				else {
					me._rectangle_1.ggParameter.sx = 1;
					me._rectangle_1.ggParameter.sy = 1;
					me._rectangle_1.style[domTransform]=parameterToTransform(me._rectangle_1.ggParameter);
				}
			}
		}
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
		}
		me._laji.appendChild(me._rectangle_1);
		el=me._lajitt=document.createElement('div');
		els=me._lajitt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="lajitt";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -49px;';
		hs+='position : absolute;';
		hs+='top : -60px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #474747;';
		hs+='border: 1px solid #ffffff;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u5783\u573e\u5206\u7c7b\u7ad9";
		el.appendChild(els);
		me._lajitt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._lajitt.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((102-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._laji.appendChild(me._lajitt);
		me.__div = me._laji;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		if (hotspot.skinid=='help') {
			hotspot.skinid = 'help';
			hsinst = new SkinHotspotClass_help(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_help_changenode();;
			me.callChildLogicBlocksHotspot_help_configloaded();;
			me.callChildLogicBlocksHotspot_help_varchanged_help();;
		} else
		if (hotspot.skinid=='cheku') {
			hotspot.skinid = 'cheku';
			hsinst = new SkinHotspotClass_cheku(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_cheku_changenode();;
			me.callChildLogicBlocksHotspot_cheku_configloaded();;
			me.callChildLogicBlocksHotspot_cheku_varchanged_var_ht();;
		} else
		if (hotspot.skinid=='yuanxing') {
			hotspot.skinid = 'yuanxing';
			hsinst = new SkinHotspotClass_yuanxing(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_yuanxing_changenode();;
			me.callChildLogicBlocksHotspot_yuanxing_configloaded();;
			me.callChildLogicBlocksHotspot_yuanxing_varchanged_var_ht();;
		} else
		if (hotspot.skinid=='yuancao') {
			hotspot.skinid = 'yuancao';
			hsinst = new SkinHotspotClass_yuancao(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_yuancao_changenode();;
			me.callChildLogicBlocksHotspot_yuancao_configloaded();;
			me.callChildLogicBlocksHotspot_yuancao_varchanged_var_ht();;
		} else
		if (hotspot.skinid=='zoulang') {
			hotspot.skinid = 'zoulang';
			hsinst = new SkinHotspotClass_zoulang(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_zoulang_changenode();;
			me.callChildLogicBlocksHotspot_zoulang_configloaded();;
			me.callChildLogicBlocksHotspot_zoulang_varchanged_var_ht();;
		} else
		if (hotspot.skinid=='beimen') {
			hotspot.skinid = 'beimen';
			hsinst = new SkinHotspotClass_beimen(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_beimen_changenode();;
			me.callChildLogicBlocksHotspot_beimen_configloaded();;
			me.callChildLogicBlocksHotspot_beimen_varchanged_var_ht();;
		} else
		if (hotspot.skinid=='zhengmen') {
			hotspot.skinid = 'zhengmen';
			hsinst = new SkinHotspotClass_zhengmen(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_zhengmen_changenode();;
			me.callChildLogicBlocksHotspot_zhengmen_configloaded();;
			me.callChildLogicBlocksHotspot_zhengmen_varchanged_var_ht();;
		} else
		if (hotspot.skinid=='xiaoting') {
			hotspot.skinid = 'xiaoting';
			hsinst = new SkinHotspotClass_xiaoting(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_xiaoting_changenode();;
			me.callChildLogicBlocksHotspot_xiaoting_configloaded();;
			me.callChildLogicBlocksHotspot_xiaoting_varchanged_var_ht();;
		} else
		if (hotspot.skinid=='xibu') {
			hotspot.skinid = 'xibu';
			hsinst = new SkinHotspotClass_xibu(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_xibu_changenode();;
			me.callChildLogicBlocksHotspot_xibu_configloaded();;
			me.callChildLogicBlocksHotspot_xibu_varchanged_var_ht();;
		} else
		if (hotspot.skinid=='xiuxi') {
			hotspot.skinid = 'xiuxi';
			hsinst = new SkinHotspotClass_xiuxi(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_xiuxi_changenode();;
			me.callChildLogicBlocksHotspot_xiuxi_configloaded();;
			me.callChildLogicBlocksHotspot_xiuxi_varchanged_var_ht();;
		} else
		if (hotspot.skinid=='zhongxin') {
			hotspot.skinid = 'zhongxin';
			hsinst = new SkinHotspotClass_zhongxin(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_zhongxin_changenode();;
			me.callChildLogicBlocksHotspot_zhongxin_configloaded();;
			me.callChildLogicBlocksHotspot_zhongxin_varchanged_var_ht();;
		} else
		if (hotspot.skinid=='dongbu') {
			hotspot.skinid = 'dongbu';
			hsinst = new SkinHotspotClass_dongbu(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_dongbu_changenode();;
			me.callChildLogicBlocksHotspot_dongbu_configloaded();;
			me.callChildLogicBlocksHotspot_dongbu_varchanged_var_ht();;
		} else
		if (hotspot.skinid=='shequ') {
			hotspot.skinid = 'shequ';
			hsinst = new SkinHotspotClass_shequ(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_shequ_changenode();;
			me.callChildLogicBlocksHotspot_shequ_configloaded();;
			me.callChildLogicBlocksHotspot_shequ_varchanged_var_ht();;
		} else
		if (hotspot.skinid=='jianshen') {
			hotspot.skinid = 'jianshen';
			hsinst = new SkinHotspotClass_jianshen(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_jianshen_changenode();;
			me.callChildLogicBlocksHotspot_jianshen_configloaded();;
			me.callChildLogicBlocksHotspot_jianshen_varchanged_var_ht();;
		} else
		if (hotspot.skinid=='huodong') {
			hotspot.skinid = 'huodong';
			hsinst = new SkinHotspotClass_huodong(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_huodong_changenode();;
			me.callChildLogicBlocksHotspot_huodong_configloaded();;
			me.callChildLogicBlocksHotspot_huodong_varchanged_var_ht();;
		} else
		if (hotspot.skinid=='nanmen') {
			hotspot.skinid = 'nanmen';
			hsinst = new SkinHotspotClass_nanmen(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_nanmen_changenode();;
			me.callChildLogicBlocksHotspot_nanmen_configloaded();;
			me.callChildLogicBlocksHotspot_nanmen_varchanged_var_ht();;
		} else
		if (hotspot.skinid=='ximen') {
			hotspot.skinid = 'ximen';
			hsinst = new SkinHotspotClass_ximen(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ximen_changenode();;
			me.callChildLogicBlocksHotspot_ximen_configloaded();;
			me.callChildLogicBlocksHotspot_ximen_varchanged_var_ht();;
		} else
		if (hotspot.skinid=='jinru') {
			hotspot.skinid = 'jinru';
			hsinst = new SkinHotspotClass_jinru(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_jinru_changenode();;
			me.callChildLogicBlocksHotspot_jinru_varchanged_var1();;
		} else
		if (hotspot.skinid=='chumen') {
			hotspot.skinid = 'chumen';
			hsinst = new SkinHotspotClass_chumen(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_chumen_changenode();;
			me.callChildLogicBlocksHotspot_chumen_varchanged_var1();;
		} else
		if (hotspot.skinid=='jinyuanxing') {
			hotspot.skinid = 'jinyuanxing';
			hsinst = new SkinHotspotClass_jinyuanxing(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_jinyuanxing_changenode();;
			me.callChildLogicBlocksHotspot_jinyuanxing_varchanged_var1();;
		} else
		if (hotspot.skinid=='jinyuancao') {
			hotspot.skinid = 'jinyuancao';
			hsinst = new SkinHotspotClass_jinyuancao(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_jinyuancao_changenode();;
			me.callChildLogicBlocksHotspot_jinyuancao_varchanged_var1();;
		} else
		if (hotspot.skinid=='jincheku') {
			hotspot.skinid = 'jincheku';
			hsinst = new SkinHotspotClass_jincheku(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_jincheku_changenode();;
			me.callChildLogicBlocksHotspot_jincheku_varchanged_var1();;
		} else
		if (hotspot.skinid=='jinxiaoting') {
			hotspot.skinid = 'jinxiaoting';
			hsinst = new SkinHotspotClass_jinxiaoting(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_jinxiaoting_changenode();;
			me.callChildLogicBlocksHotspot_jinxiaoting_varchanged_var1();;
		} else
		if (hotspot.skinid=='jinxibu') {
			hotspot.skinid = 'jinxibu';
			hsinst = new SkinHotspotClass_jinxibu(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_jinxibu_changenode();;
			me.callChildLogicBlocksHotspot_jinxibu_varchanged_var1();;
		} else
		if (hotspot.skinid=='jinhuodong') {
			hotspot.skinid = 'jinhuodong';
			hsinst = new SkinHotspotClass_jinhuodong(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_jinhuodong_changenode();;
			me.callChildLogicBlocksHotspot_jinhuodong_varchanged_var1();;
		} else
		if (hotspot.skinid=='jinjianshen') {
			hotspot.skinid = 'jinjianshen';
			hsinst = new SkinHotspotClass_jinjianshen(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_jinjianshen_changenode();;
			me.callChildLogicBlocksHotspot_jinjianshen_varchanged_var1();;
		} else
		if (hotspot.skinid=='jinzhongxin') {
			hotspot.skinid = 'jinzhongxin';
			hsinst = new SkinHotspotClass_jinzhongxin(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_jinzhongxin_changenode();;
			me.callChildLogicBlocksHotspot_jinzhongxin_varchanged_var1();;
		} else
		if (hotspot.skinid=='jinxiuxi') {
			hotspot.skinid = 'jinxiuxi';
			hsinst = new SkinHotspotClass_jinxiuxi(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_jinxiuxi_changenode();;
			me.callChildLogicBlocksHotspot_jinxiuxi_varchanged_var1();;
		} else
		if (hotspot.skinid=='jinshequ') {
			hotspot.skinid = 'jinshequ';
			hsinst = new SkinHotspotClass_jinshequ(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_jinshequ_changenode();;
			me.callChildLogicBlocksHotspot_jinshequ_varchanged_var1();;
		} else
		if (hotspot.skinid=='jindongbu') {
			hotspot.skinid = 'jindongbu';
			hsinst = new SkinHotspotClass_jindongbu(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_jindongbu_changenode();;
			me.callChildLogicBlocksHotspot_jindongbu_varchanged_var1();;
		} else
		if (hotspot.skinid=='jinnanmen') {
			hotspot.skinid = 'jinnanmen';
			hsinst = new SkinHotspotClass_jinnanmen(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_jinnanmen_changenode();;
			me.callChildLogicBlocksHotspot_jinnanmen_varchanged_var1();;
		} else
		if (hotspot.skinid=='jinximen') {
			hotspot.skinid = 'jinximen';
			hsinst = new SkinHotspotClass_jinximen(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_jinximen_changenode();;
			me.callChildLogicBlocksHotspot_jinximen_varchanged_var1();;
		} else
		if (hotspot.skinid=='jinzoulang') {
			hotspot.skinid = 'jinzoulang';
			hsinst = new SkinHotspotClass_jinzoulang(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_jinzoulang_changenode();;
			me.callChildLogicBlocksHotspot_jinzoulang_varchanged_var1();;
		} else
		if (hotspot.skinid=='1') {
			hotspot.skinid = '1';
			hsinst = new SkinHotspotClass__1(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='3') {
			hotspot.skinid = '3';
			hsinst = new SkinHotspotClass__3(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='3A') {
			hotspot.skinid = '3A';
			hsinst = new SkinHotspotClass__3a(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='5') {
			hotspot.skinid = '5';
			hsinst = new SkinHotspotClass__5(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='11') {
			hotspot.skinid = '11';
			hsinst = new SkinHotspotClass__11(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='15') {
			hotspot.skinid = '15';
			hsinst = new SkinHotspotClass__15(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='17') {
			hotspot.skinid = '17';
			hsinst = new SkinHotspotClass__17(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='19') {
			hotspot.skinid = '19';
			hsinst = new SkinHotspotClass__19(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='13') {
			hotspot.skinid = '13';
			hsinst = new SkinHotspotClass__13(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='9') {
			hotspot.skinid = '9';
			hsinst = new SkinHotspotClass__9(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='7') {
			hotspot.skinid = '7';
			hsinst = new SkinHotspotClass__7(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='21') {
			hotspot.skinid = '21';
			hsinst = new SkinHotspotClass__21(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='23') {
			hotspot.skinid = '23';
			hsinst = new SkinHotspotClass__23(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='wuren') {
			hotspot.skinid = 'wuren';
			hsinst = new SkinHotspotClass_wuren(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_wuren_changenode();;
			me.callChildLogicBlocksHotspot_wuren_varchanged_var_ht();;
		} else
		if (hotspot.skinid=='kuaidi') {
			hotspot.skinid = 'kuaidi';
			hsinst = new SkinHotspotClass_kuaidi(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_kuaidi_changenode();;
			me.callChildLogicBlocksHotspot_kuaidi_varchanged_var_ht();;
		} else
		if (hotspot.skinid=='chaoshi') {
			hotspot.skinid = 'chaoshi';
			hsinst = new SkinHotspotClass_chaoshi(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_chaoshi_changenode();;
			me.callChildLogicBlocksHotspot_chaoshi_varchanged_var_ht();;
		} else
		if (hotspot.skinid=='congdian') {
			hotspot.skinid = 'congdian';
			hsinst = new SkinHotspotClass_congdian(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_congdian_changenode();;
			me.callChildLogicBlocksHotspot_congdian_varchanged_var_ht();;
		} else
		if (hotspot.skinid=='dixia') {
			hotspot.skinid = 'dixia';
			hsinst = new SkinHotspotClass_dixia(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_dixia_changenode();;
			me.callChildLogicBlocksHotspot_dixia_varchanged_var_ht();;
		} else
		if (hotspot.skinid=='wuye') {
			hotspot.skinid = 'wuye';
			hsinst = new SkinHotspotClass_wuye(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_wuye_changenode();;
			me.callChildLogicBlocksHotspot_wuye_varchanged_var_ht();;
		} else
		{
			hotspot.skinid = 'laji';
			hsinst = new SkinHotspotClass_laji(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_laji_changenode();;
			me.callChildLogicBlocksHotspot_laji_varchanged_var_ht();;
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		if(hotspotTemplates['help']) {
			var i;
			for(i = 0; i < hotspotTemplates['help'].length; i++) {
				hotspotTemplates['help'][i] = null;
			}
		}
		if(hotspotTemplates['cheku']) {
			var i;
			for(i = 0; i < hotspotTemplates['cheku'].length; i++) {
				hotspotTemplates['cheku'][i] = null;
			}
		}
		if(hotspotTemplates['yuanxing']) {
			var i;
			for(i = 0; i < hotspotTemplates['yuanxing'].length; i++) {
				hotspotTemplates['yuanxing'][i] = null;
			}
		}
		if(hotspotTemplates['yuancao']) {
			var i;
			for(i = 0; i < hotspotTemplates['yuancao'].length; i++) {
				hotspotTemplates['yuancao'][i] = null;
			}
		}
		if(hotspotTemplates['zoulang']) {
			var i;
			for(i = 0; i < hotspotTemplates['zoulang'].length; i++) {
				hotspotTemplates['zoulang'][i] = null;
			}
		}
		if(hotspotTemplates['beimen']) {
			var i;
			for(i = 0; i < hotspotTemplates['beimen'].length; i++) {
				hotspotTemplates['beimen'][i] = null;
			}
		}
		if(hotspotTemplates['zhengmen']) {
			var i;
			for(i = 0; i < hotspotTemplates['zhengmen'].length; i++) {
				hotspotTemplates['zhengmen'][i] = null;
			}
		}
		if(hotspotTemplates['xiaoting']) {
			var i;
			for(i = 0; i < hotspotTemplates['xiaoting'].length; i++) {
				hotspotTemplates['xiaoting'][i] = null;
			}
		}
		if(hotspotTemplates['xibu']) {
			var i;
			for(i = 0; i < hotspotTemplates['xibu'].length; i++) {
				hotspotTemplates['xibu'][i] = null;
			}
		}
		if(hotspotTemplates['xiuxi']) {
			var i;
			for(i = 0; i < hotspotTemplates['xiuxi'].length; i++) {
				hotspotTemplates['xiuxi'][i] = null;
			}
		}
		if(hotspotTemplates['zhongxin']) {
			var i;
			for(i = 0; i < hotspotTemplates['zhongxin'].length; i++) {
				hotspotTemplates['zhongxin'][i] = null;
			}
		}
		if(hotspotTemplates['dongbu']) {
			var i;
			for(i = 0; i < hotspotTemplates['dongbu'].length; i++) {
				hotspotTemplates['dongbu'][i] = null;
			}
		}
		if(hotspotTemplates['shequ']) {
			var i;
			for(i = 0; i < hotspotTemplates['shequ'].length; i++) {
				hotspotTemplates['shequ'][i] = null;
			}
		}
		if(hotspotTemplates['jianshen']) {
			var i;
			for(i = 0; i < hotspotTemplates['jianshen'].length; i++) {
				hotspotTemplates['jianshen'][i] = null;
			}
		}
		if(hotspotTemplates['huodong']) {
			var i;
			for(i = 0; i < hotspotTemplates['huodong'].length; i++) {
				hotspotTemplates['huodong'][i] = null;
			}
		}
		if(hotspotTemplates['nanmen']) {
			var i;
			for(i = 0; i < hotspotTemplates['nanmen'].length; i++) {
				hotspotTemplates['nanmen'][i] = null;
			}
		}
		if(hotspotTemplates['ximen']) {
			var i;
			for(i = 0; i < hotspotTemplates['ximen'].length; i++) {
				hotspotTemplates['ximen'][i] = null;
			}
		}
		if(hotspotTemplates['jinru']) {
			var i;
			for(i = 0; i < hotspotTemplates['jinru'].length; i++) {
				hotspotTemplates['jinru'][i] = null;
			}
		}
		if(hotspotTemplates['chumen']) {
			var i;
			for(i = 0; i < hotspotTemplates['chumen'].length; i++) {
				hotspotTemplates['chumen'][i] = null;
			}
		}
		if(hotspotTemplates['jinyuanxing']) {
			var i;
			for(i = 0; i < hotspotTemplates['jinyuanxing'].length; i++) {
				hotspotTemplates['jinyuanxing'][i] = null;
			}
		}
		if(hotspotTemplates['jinyuancao']) {
			var i;
			for(i = 0; i < hotspotTemplates['jinyuancao'].length; i++) {
				hotspotTemplates['jinyuancao'][i] = null;
			}
		}
		if(hotspotTemplates['jincheku']) {
			var i;
			for(i = 0; i < hotspotTemplates['jincheku'].length; i++) {
				hotspotTemplates['jincheku'][i] = null;
			}
		}
		if(hotspotTemplates['jinxiaoting']) {
			var i;
			for(i = 0; i < hotspotTemplates['jinxiaoting'].length; i++) {
				hotspotTemplates['jinxiaoting'][i] = null;
			}
		}
		if(hotspotTemplates['jinxibu']) {
			var i;
			for(i = 0; i < hotspotTemplates['jinxibu'].length; i++) {
				hotspotTemplates['jinxibu'][i] = null;
			}
		}
		if(hotspotTemplates['jinhuodong']) {
			var i;
			for(i = 0; i < hotspotTemplates['jinhuodong'].length; i++) {
				hotspotTemplates['jinhuodong'][i] = null;
			}
		}
		if(hotspotTemplates['jinjianshen']) {
			var i;
			for(i = 0; i < hotspotTemplates['jinjianshen'].length; i++) {
				hotspotTemplates['jinjianshen'][i] = null;
			}
		}
		if(hotspotTemplates['jinzhongxin']) {
			var i;
			for(i = 0; i < hotspotTemplates['jinzhongxin'].length; i++) {
				hotspotTemplates['jinzhongxin'][i] = null;
			}
		}
		if(hotspotTemplates['jinxiuxi']) {
			var i;
			for(i = 0; i < hotspotTemplates['jinxiuxi'].length; i++) {
				hotspotTemplates['jinxiuxi'][i] = null;
			}
		}
		if(hotspotTemplates['jinshequ']) {
			var i;
			for(i = 0; i < hotspotTemplates['jinshequ'].length; i++) {
				hotspotTemplates['jinshequ'][i] = null;
			}
		}
		if(hotspotTemplates['jindongbu']) {
			var i;
			for(i = 0; i < hotspotTemplates['jindongbu'].length; i++) {
				hotspotTemplates['jindongbu'][i] = null;
			}
		}
		if(hotspotTemplates['jinnanmen']) {
			var i;
			for(i = 0; i < hotspotTemplates['jinnanmen'].length; i++) {
				hotspotTemplates['jinnanmen'][i] = null;
			}
		}
		if(hotspotTemplates['jinximen']) {
			var i;
			for(i = 0; i < hotspotTemplates['jinximen'].length; i++) {
				hotspotTemplates['jinximen'][i] = null;
			}
		}
		if(hotspotTemplates['jinzoulang']) {
			var i;
			for(i = 0; i < hotspotTemplates['jinzoulang'].length; i++) {
				hotspotTemplates['jinzoulang'][i] = null;
			}
		}
		if(hotspotTemplates['1']) {
			var i;
			for(i = 0; i < hotspotTemplates['1'].length; i++) {
				hotspotTemplates['1'][i] = null;
			}
		}
		if(hotspotTemplates['3']) {
			var i;
			for(i = 0; i < hotspotTemplates['3'].length; i++) {
				hotspotTemplates['3'][i] = null;
			}
		}
		if(hotspotTemplates['3A']) {
			var i;
			for(i = 0; i < hotspotTemplates['3A'].length; i++) {
				hotspotTemplates['3A'][i] = null;
			}
		}
		if(hotspotTemplates['5']) {
			var i;
			for(i = 0; i < hotspotTemplates['5'].length; i++) {
				hotspotTemplates['5'][i] = null;
			}
		}
		if(hotspotTemplates['11']) {
			var i;
			for(i = 0; i < hotspotTemplates['11'].length; i++) {
				hotspotTemplates['11'][i] = null;
			}
		}
		if(hotspotTemplates['15']) {
			var i;
			for(i = 0; i < hotspotTemplates['15'].length; i++) {
				hotspotTemplates['15'][i] = null;
			}
		}
		if(hotspotTemplates['17']) {
			var i;
			for(i = 0; i < hotspotTemplates['17'].length; i++) {
				hotspotTemplates['17'][i] = null;
			}
		}
		if(hotspotTemplates['19']) {
			var i;
			for(i = 0; i < hotspotTemplates['19'].length; i++) {
				hotspotTemplates['19'][i] = null;
			}
		}
		if(hotspotTemplates['13']) {
			var i;
			for(i = 0; i < hotspotTemplates['13'].length; i++) {
				hotspotTemplates['13'][i] = null;
			}
		}
		if(hotspotTemplates['9']) {
			var i;
			for(i = 0; i < hotspotTemplates['9'].length; i++) {
				hotspotTemplates['9'][i] = null;
			}
		}
		if(hotspotTemplates['7']) {
			var i;
			for(i = 0; i < hotspotTemplates['7'].length; i++) {
				hotspotTemplates['7'][i] = null;
			}
		}
		if(hotspotTemplates['21']) {
			var i;
			for(i = 0; i < hotspotTemplates['21'].length; i++) {
				hotspotTemplates['21'][i] = null;
			}
		}
		if(hotspotTemplates['23']) {
			var i;
			for(i = 0; i < hotspotTemplates['23'].length; i++) {
				hotspotTemplates['23'][i] = null;
			}
		}
		if(hotspotTemplates['wuren']) {
			var i;
			for(i = 0; i < hotspotTemplates['wuren'].length; i++) {
				hotspotTemplates['wuren'][i] = null;
			}
		}
		if(hotspotTemplates['kuaidi']) {
			var i;
			for(i = 0; i < hotspotTemplates['kuaidi'].length; i++) {
				hotspotTemplates['kuaidi'][i] = null;
			}
		}
		if(hotspotTemplates['chaoshi']) {
			var i;
			for(i = 0; i < hotspotTemplates['chaoshi'].length; i++) {
				hotspotTemplates['chaoshi'][i] = null;
			}
		}
		if(hotspotTemplates['congdian']) {
			var i;
			for(i = 0; i < hotspotTemplates['congdian'].length; i++) {
				hotspotTemplates['congdian'][i] = null;
			}
		}
		if(hotspotTemplates['dixia']) {
			var i;
			for(i = 0; i < hotspotTemplates['dixia'].length; i++) {
				hotspotTemplates['dixia'][i] = null;
			}
		}
		if(hotspotTemplates['wuye']) {
			var i;
			for(i = 0; i < hotspotTemplates['wuye'].length; i++) {
				hotspotTemplates['wuye'][i] = null;
			}
		}
		if(hotspotTemplates['laji']) {
			var i;
			for(i = 0; i < hotspotTemplates['laji'].length; i++) {
				hotspotTemplates['laji'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	function SkinCloner_thumbnail_cloner_Class(nodeId, parentScope,ggParent,parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.__div=document.createElement('div');
		me.__div.setAttribute('style','position: absolute;width: 96px; height: 62px; visibility: inherit; overflow: visible;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.style.width=parameter.width;
		me.__div.style.height=parameter.height;
		me.__div.ggIsActive = function() {
			return player.getCurrentNode()==me.ggNodeId;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._thumbnail_nodeimage=document.createElement('div');
		els=me._thumbnail_nodeimage__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/thumbnail_nodeimage_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_nodeImage";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.62,sy:0.58 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 90px;';
		hs+='left : -24px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._thumbnail_nodeimage.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_nodeimage.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbnail_nodeimage);
		el=me._thumbnail_active=document.createElement('div');
		el.ggId="thumbnail_active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #d1d1d1;';
		hs+='cursor : pointer;';
		hs+='height : 51px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_active.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me._thumbnail_active.ggIsActive() == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((me.elementMouseOver['thumbnail_active'] == true))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._thumbnail_active.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._thumbnail_active.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._thumbnail_active.style[domTransition]='border-color 0s';
				if (me._thumbnail_active.ggCurrentLogicStateBorderColor == 0) {
					me._thumbnail_active.style.borderColor="rgba(255,255,255,1)";
				}
				else if (me._thumbnail_active.ggCurrentLogicStateBorderColor == 1) {
					me._thumbnail_active.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me._thumbnail_active.style.borderColor="rgba(209,209,209,1)";
				}
			}
		}
		me._thumbnail_active.onclick=function (e) {
			if (
				(
					((me._thumbnail_active.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
		}
		me._thumbnail_active.onmouseover=function (e) {
			me.elementMouseOver['thumbnail_active']=true;
			me._thumbnail_title.logicBlock_alpha();
			me._checkmark_tick.logicBlock_alpha();
			me._thumbnail_active.logicBlock_bordercolor();
		}
		me._thumbnail_active.onmouseout=function (e) {
			me.elementMouseOver['thumbnail_active']=false;
			me._thumbnail_title.logicBlock_alpha();
			me._checkmark_tick.logicBlock_alpha();
			me._thumbnail_active.logicBlock_bordercolor();
		}
		me._thumbnail_active.ontouchend=function (e) {
			me.elementMouseOver['thumbnail_active']=false;
			me._thumbnail_title.logicBlock_alpha();
			me._checkmark_tick.logicBlock_alpha();
			me._thumbnail_active.logicBlock_bordercolor();
		}
		me._thumbnail_active.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnail_title=document.createElement('div');
		els=me._thumbnail_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumbnail_title";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 51px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 2px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 85px;';
		hs+='height: 51px;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.392157);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.ggUserdata.title;
		el.appendChild(els);
		me._thumbnail_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_title.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['thumbnail_active'] == true)) && 
				((me.ggUserdata.title != "")) && 
				((player.getVariableValue('opt_thumbnail_menu_tooltip') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_title.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_title.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_title.style[domTransition]='opacity 500ms ease 0ms';
				if (me._thumbnail_title.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_title.style.visibility=me._thumbnail_title.ggVisible?'inherit':'hidden';
					me._thumbnail_title.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumbnail_title.style.opacity == 0.0) { me._thumbnail_title.style.visibility="hidden"; } }, 505);
					me._thumbnail_title.style.opacity=0;
				}
			}
		}
		me._thumbnail_title.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._thumbnail_active.appendChild(me._thumbnail_title);
		el=me._checkmark_tick=document.createElement('div');
		els=me._checkmark_tick__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOmE9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVTVkdWaWV3ZXJFeHRlbnNpb25zLzMuMC8iIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOmk9Imh0dHA6Ly9ucy'+
			'5hZG9iZS5jb20vQWRvYmVJbGx1c3RyYXRvci8xMC4wLyIgeG1sbnM6Z3JhcGg9Imh0dHA6Ly9ucy5hZG9iZS5jb20vR3JhcGhzLzEuMC8iIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgLTM3MjIgLTI2MDYgMzIgMzIiIHZpZXdCb3g9Ii0zNzIyIC0yNjA2IDMyIDMyIiB4bWxuczp4PSJodHRwOi8vbnMuYWRvYmUuY29tL0V4dGVuc2liaWxpdHkvMS4wLyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMzJweCIgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjMycHgiIHg9IjBweCIgeT0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8'+
			'ZyBpZD0iTGF5ZXJfMSIvPgogPGcgaWQ9IkViZW5lXzEiLz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPGc+CiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTM2OTUuNDczLTI1OTguMTQ2Yy0wLjUxOS0wLjUxOS0xLjM2MS0wLjUxOS0xLjg3OSwwbC04Ljc4Nyw4Ljc4N2wtMi4yOTEtMi4yNDMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNTI1LTAuNTEzLTEuMzY2LTAuNTA0LTEuODgsMC4wMmMtMC41MTMsMC41MjUtMC41MDQsMS4zNjcsMC4wMjEsMS44OGwzLjIzLDMuMTYzYzAuMjU5LDAuMjUzLDAuNTk0LDAuMzc5LDAuOTMsMC4zNzkmI3hkOyYjeGE7JiN4OTsmI3'+
			'g5OyYjeDk7JiN4OTtjMC4zNCwwLDAuNjgtMC4xMywwLjk0LTAuMzlsOS43MTctOS43MTdDLTM2OTQuOTU0LTI1OTYuNzg1LTM2OTQuOTU0LTI1OTcuNjI2LTM2OTUuNDczLTI1OTguMTQ2eiIvPgogICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0zNjk5Ljk2LTI1ODMuODM3aC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAuMzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MTgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5'+
			'NmgxNC43MThjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7bC0yLjM5MywyLjM5M1YtMjU4My44Mzd6Ii8+CiAgIDwvZz4KICAgPGcgb3BhY2l0eT0iMC40IiBhOmFkb2JlLWJsZW5kaW5nLW1vZGU9Im11bHRpcGx5Ij4KICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZmlsbD0ibm9uZSIgZD0iJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7TS0zNjk1LjQ3My0yNTk4LjE0NmMtMC41MTktMC41MTktMS4zNjEtMC41MTktMS44NzksMGwtOC43ODcsOC43ODdsLTIuMjkxLTIuMjQzYy0wLjUyNS0wLjUxMy'+
			'0xLjM2Ni0wLjUwNC0xLjg4LDAuMDImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNTEzLDAuNTI1LTAuNTA0LDEuMzY3LDAuMDIxLDEuODhsMy4yMywzLjE2M2MwLjI1OSwwLjI1MywwLjU5NCwwLjM3OSwwLjkzLDAuMzc5YzAuMzQsMCwwLjY4LTAuMTMsMC45NC0wLjM5bDkuNzE3LTkuNzE3JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Qy0zNjk0Ljk1NC0yNTk2Ljc4NS0zNjk0Ljk1NC0yNTk3LjYyNi0zNjk1LjQ3My0yNTk4LjE0NnoiIHN0cm9rZT0iIzFBMTcxQiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGE6YWRvYmUtYmxlbmRpbmct'+
			'bW9kZT0ibm9ybWFsIi8+CiAgICA8cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIGZpbGw9Im5vbmUiIGQ9IiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O00tMzY5OS45Ni0yNTgzLjgzN2gtMTIuMzI1di0xMi4zMjZoMTEuODIxbDIuMjUyLTIuMjUyYy0wLjE2Ni0wLjA4Ni0wLjM1Mi0wLjE0MS0wLjU1Mi0wLjE0MWgtMTQuNzE4JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djE0LjcxOWMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMTQuNzE4YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZ2LTEwLj'+
			'QwMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2wtMi4zOTMsMi4zOTNWLTI1ODMuODM3eiIgc3Ryb2tlPSIjMUExNzFCIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgYTphZG9iZS1ibGVuZGluZy1tb2RlPSJub3JtYWwiLz4KICAgPC9nPgogICA8Zz4KICAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMzY5NS40NzMtMjU5OC4xNDZjLTAuNTE5LTAuNTE5LTEuMzYxLTAuNTE5LTEuODc5LDBsLTguNzg3LDguNzg3bC0yLjI5MS0yLjI0MyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAy'+
			'Yy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxN0MtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTM2OTkuOTYtMjU4My44MzdoLTEyLjMyNXYtMTIuMzI2aDExLjgyMWwyLjI1Mi0yLjI1MmMtMC4xNjYtMC4wODYtMC4zNTItMC4xNDEtMC41NTItMC4xNDFoLTE0LjcxOC'+
			'YjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnYxNC43MTljMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2aDE0LjcxOGMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di0xMC40MDMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtsLTIuMzkzLDIuMzkzVi0yNTgzLjgzN3oiLz4KICAgPC9nPgogICA8Zz4KICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZmlsbD0ibm9uZSIgZD0iTS0zNjk1LjQ3My0yNTk4LjE0NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC41MTktMC41MTktMS4zNjEt'+
			'MC41MTktMS44NzksMGwtOC43ODcsOC43ODdsLTIuMjkxLTIuMjQzYy0wLjUyNS0wLjUxMy0xLjM2Ni0wLjUwNC0xLjg4LDAuMDImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNTEzLDAuNTI1LTAuNTA0LDEuMzY3LDAuMDIxLDEuODhsMy4yMywzLjE2M2MwLjI1OSwwLjI1MywwLjU5NCwwLjM3OSwwLjkzLDAuMzc5YzAuMzQsMCwwLjY4LTAuMTMsMC45NC0wLjM5bDkuNzE3LTkuNzE3JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Qy0zNjk0Ljk1NC0yNTk2Ljc4NS0zNjk0Ljk1NC0yNTk3LjYyNi0zNjk1LjQ3My0yNTk4LjE0NnoiIHN0cm9rZT0iIzFBMTcxQiIgc3Ryb2tlLW'+
			'xpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIwLjIiLz4KICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZmlsbD0ibm9uZSIgZD0iTS0zNjk5Ljk2LTI1ODMuODM3JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7aC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAuMzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MThjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgxNC43MThjMC42NjEsMCwxLjE5Ny0w'+
			'LjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzbC0yLjM5MywyLjM5M1YtMjU4My44Mzd6IiBzdHJva2U9IiMxQTE3MUIiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMC4yIi8+CiAgIDwvZz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._checkmark_tick__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="checkmark_tick";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 24px;';
		hs+='position : absolute;';
		hs+='right : -1px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._checkmark_tick.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._checkmark_tick.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._checkmark_tick.ggElementNodeId()) == true)) || 
				((me._checkmark_tick.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checkmark_tick.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checkmark_tick.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._checkmark_tick.style[domTransition]='opacity 500ms ease 0ms';
				if (me._checkmark_tick.ggCurrentLogicStateVisible == 0) {
					me._checkmark_tick.style.visibility=(Number(me._checkmark_tick.style.opacity)>0||!me._checkmark_tick.style.opacity)?'inherit':'hidden';
					me._checkmark_tick.ggVisible=true;
				}
				else {
					me._checkmark_tick.style.visibility="hidden";
					me._checkmark_tick.ggVisible=false;
				}
			}
		}
		me._checkmark_tick.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['thumbnail_active'] == true)) && 
				((me.ggUserdata.title != ""))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._checkmark_tick.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._checkmark_tick.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._checkmark_tick.style[domTransition]='opacity 500ms ease 0ms';
				if (me._checkmark_tick.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._checkmark_tick.style.opacity == 0.0) { me._checkmark_tick.style.visibility="hidden"; } }, 505);
					me._checkmark_tick.style.opacity=0;
				}
				else {
					me._checkmark_tick.style.visibility=me._checkmark_tick.ggVisible?'inherit':'hidden';
					me._checkmark_tick.style.opacity=1;
				}
			}
		}
		me._checkmark_tick.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_active.appendChild(me._checkmark_tick);
		me.__div.appendChild(me._thumbnail_active);
	};
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px;}'));
	document.head.appendChild(style);
	me._button_image_normalscreen.logicBlock_visible();
	me._button_image_fullscreen.logicBlock_visible();
	me._hide_controller_container.logicBlock_alpha();
	me._tt_thumbnail_open.logicBlock_text();
	me._stop_rotate_image.logicBlock_visible();
	me._start_rotate_image.logicBlock_visible();
	me._thumbnail_menu.logicBlock_alpha();
	me._screentint_info.logicBlock_visible();
	me._information.logicBlock_visible();
	me._informationbg.logicBlock_alpha();
	me._info_text_body.logicBlock_visible();
	me._info_text_body.logicBlock_alpha();
	me._info_title.logicBlock_visible();
	me._info_title.logicBlock_alpha();
	me._ht_info_close.logicBlock_alpha();
	me._zuozhe.logicBlock_alpha();
	me._zuozhe_telegram.logicBlock_alpha();
	me._tt_thumbnail_open.logicBlock_position();
	me._fullscreen_x.logicBlock_position();
	me._fullscreen_on.logicBlock_position();
	me._tt_information.logicBlock_position();
	me._thumbnail_menu.logicBlock_position();
	player.addListener('fullscreenenter', function(args) { me._button_image_normalscreen.logicBlock_visible();me._button_image_fullscreen.logicBlock_visible(); });
	player.addListener('fullscreenexit', function(args) { me._button_image_normalscreen.logicBlock_visible();me._button_image_fullscreen.logicBlock_visible(); });
	player.addListener('changenode', function(args) { me._hide_controller_container.logicBlock_alpha();me._tt_thumbnail_open.logicBlock_text();me._stop_rotate_image.logicBlock_visible();me._start_rotate_image.logicBlock_visible();me._thumbnail_menu.logicBlock_alpha();me._screentint_info.logicBlock_visible();me._information.logicBlock_visible();me._informationbg.logicBlock_alpha();me._info_text_body.logicBlock_visible();me._info_text_body.logicBlock_alpha();me._info_title.logicBlock_visible();me._info_title.logicBlock_alpha();me._ht_info_close.logicBlock_alpha();me._zuozhe.logicBlock_alpha();me._zuozhe_telegram.logicBlock_alpha(); });
	player.addListener('configloaded', function(args) { me._tt_thumbnail_open.logicBlock_position();me._fullscreen_x.logicBlock_position();me._fullscreen_on.logicBlock_position();me._tt_information.logicBlock_position();me._thumbnail_menu.logicBlock_position(); });
	player.addListener('autorotatechanged', function(args) { me._stop_rotate_image.logicBlock_visible();me._start_rotate_image.logicBlock_visible(); });
	player.addListener('hastouch', function(args) { me._tt_thumbnail_open.logicBlock_position();me._fullscreen_x.logicBlock_position();me._fullscreen_on.logicBlock_position();me._tt_information.logicBlock_position(); });
	player.addListener('varchanged_vis_auto_hide_controller', function(args) { me._hide_controller_container.logicBlock_alpha(); });
	player.addListener('varchanged_vis_info_popup', function(args) { me._screentint_info.logicBlock_visible();me._information.logicBlock_visible();me._informationbg.logicBlock_alpha();me._info_text_body.logicBlock_visible();me._info_text_body.logicBlock_alpha();me._info_title.logicBlock_visible();me._info_title.logicBlock_alpha();me._ht_info_close.logicBlock_alpha();me._zuozhe.logicBlock_alpha(); });
	player.addListener('varchanged_vis_thumbnail_menu', function(args) { me._tt_thumbnail_open.logicBlock_text();me._thumbnail_menu.logicBlock_alpha(); });
	player.addListener('varchanged_zuozhe', function(args) { me._zuozhe_telegram.logicBlock_alpha(); });
	player.addListener('changenode', function(args) { me._thumbnail_cloner.callChildLogicBlocks_changenode(); });
	player.addListener('mouseover', function(args) { me._thumbnail_cloner.callChildLogicBlocks_mouseover(); });
	player.addListener('mouseover', function(args) { me._thumbnail_cloner.callChildLogicBlocks_mouseover(); });
	player.addListener('changenode', function(args) { me._thumbnail_cloner.callChildLogicBlocks_active(); });
	player.addListener('changevisitednodes', function(args) { me._thumbnail_cloner.callChildLogicBlocks_changevisitednodes(); });
	player.addListener('activehotspotchanged', function(args) { me._thumbnail_cloner.callChildLogicBlocks_activehotspotchanged(); });
	player.addListener('varchanged_opt_thumbnail_menu_tooltip', function(args) { me._thumbnail_cloner.callChildLogicBlocks_varchanged_opt_thumbnail_menu_tooltip(); });
	player.addListener('changenode', function(args) { me.callChildLogicBlocksHotspot_help_changenode();me.callChildLogicBlocksHotspot_cheku_changenode();me.callChildLogicBlocksHotspot_yuanxing_changenode();me.callChildLogicBlocksHotspot_yuancao_changenode();me.callChildLogicBlocksHotspot_zoulang_changenode();me.callChildLogicBlocksHotspot_beimen_changenode();me.callChildLogicBlocksHotspot_zhengmen_changenode();me.callChildLogicBlocksHotspot_xiaoting_changenode();me.callChildLogicBlocksHotspot_xibu_changenode();me.callChildLogicBlocksHotspot_xiuxi_changenode();me.callChildLogicBlocksHotspot_zhongxin_changenode();me.callChildLogicBlocksHotspot_dongbu_changenode();me.callChildLogicBlocksHotspot_shequ_changenode();me.callChildLogicBlocksHotspot_jianshen_changenode();me.callChildLogicBlocksHotspot_huodong_changenode();me.callChildLogicBlocksHotspot_nanmen_changenode();me.callChildLogicBlocksHotspot_ximen_changenode();me.callChildLogicBlocksHotspot_jinru_changenode();me.callChildLogicBlocksHotspot_chumen_changenode();me.callChildLogicBlocksHotspot_jinyuanxing_changenode();me.callChildLogicBlocksHotspot_jinyuancao_changenode();me.callChildLogicBlocksHotspot_jincheku_changenode();me.callChildLogicBlocksHotspot_jinxiaoting_changenode();me.callChildLogicBlocksHotspot_jinxibu_changenode();me.callChildLogicBlocksHotspot_jinhuodong_changenode();me.callChildLogicBlocksHotspot_jinjianshen_changenode();me.callChildLogicBlocksHotspot_jinzhongxin_changenode();me.callChildLogicBlocksHotspot_jinxiuxi_changenode();me.callChildLogicBlocksHotspot_jinshequ_changenode();me.callChildLogicBlocksHotspot_jindongbu_changenode();me.callChildLogicBlocksHotspot_jinnanmen_changenode();me.callChildLogicBlocksHotspot_jinximen_changenode();me.callChildLogicBlocksHotspot_jinzoulang_changenode();me.callChildLogicBlocksHotspot_wuren_changenode();me.callChildLogicBlocksHotspot_kuaidi_changenode();me.callChildLogicBlocksHotspot_chaoshi_changenode();me.callChildLogicBlocksHotspot_congdian_changenode();me.callChildLogicBlocksHotspot_dixia_changenode();me.callChildLogicBlocksHotspot_wuye_changenode();me.callChildLogicBlocksHotspot_laji_changenode(); });
	player.addListener('configloaded', function(args) { me.callChildLogicBlocksHotspot_help_configloaded();me.callChildLogicBlocksHotspot_cheku_configloaded();me.callChildLogicBlocksHotspot_yuanxing_configloaded();me.callChildLogicBlocksHotspot_yuancao_configloaded();me.callChildLogicBlocksHotspot_zoulang_configloaded();me.callChildLogicBlocksHotspot_beimen_configloaded();me.callChildLogicBlocksHotspot_zhengmen_configloaded();me.callChildLogicBlocksHotspot_xiaoting_configloaded();me.callChildLogicBlocksHotspot_xibu_configloaded();me.callChildLogicBlocksHotspot_xiuxi_configloaded();me.callChildLogicBlocksHotspot_zhongxin_configloaded();me.callChildLogicBlocksHotspot_dongbu_configloaded();me.callChildLogicBlocksHotspot_shequ_configloaded();me.callChildLogicBlocksHotspot_jianshen_configloaded();me.callChildLogicBlocksHotspot_huodong_configloaded();me.callChildLogicBlocksHotspot_nanmen_configloaded();me.callChildLogicBlocksHotspot_ximen_configloaded(); });
	player.addListener('varchanged_help', function(args) { me.callChildLogicBlocksHotspot_help_varchanged_help(); });
	player.addListener('varchanged_var_ht', function(args) { me.callChildLogicBlocksHotspot_cheku_varchanged_var_ht();me.callChildLogicBlocksHotspot_yuanxing_varchanged_var_ht();me.callChildLogicBlocksHotspot_yuancao_varchanged_var_ht();me.callChildLogicBlocksHotspot_zoulang_varchanged_var_ht();me.callChildLogicBlocksHotspot_beimen_varchanged_var_ht();me.callChildLogicBlocksHotspot_zhengmen_varchanged_var_ht();me.callChildLogicBlocksHotspot_xiaoting_varchanged_var_ht();me.callChildLogicBlocksHotspot_xibu_varchanged_var_ht();me.callChildLogicBlocksHotspot_xiuxi_varchanged_var_ht();me.callChildLogicBlocksHotspot_zhongxin_varchanged_var_ht();me.callChildLogicBlocksHotspot_dongbu_varchanged_var_ht();me.callChildLogicBlocksHotspot_shequ_varchanged_var_ht();me.callChildLogicBlocksHotspot_jianshen_varchanged_var_ht();me.callChildLogicBlocksHotspot_huodong_varchanged_var_ht();me.callChildLogicBlocksHotspot_nanmen_varchanged_var_ht();me.callChildLogicBlocksHotspot_ximen_varchanged_var_ht();me.callChildLogicBlocksHotspot_wuren_varchanged_var_ht();me.callChildLogicBlocksHotspot_kuaidi_varchanged_var_ht();me.callChildLogicBlocksHotspot_chaoshi_varchanged_var_ht();me.callChildLogicBlocksHotspot_congdian_varchanged_var_ht();me.callChildLogicBlocksHotspot_dixia_varchanged_var_ht();me.callChildLogicBlocksHotspot_wuye_varchanged_var_ht();me.callChildLogicBlocksHotspot_laji_varchanged_var_ht(); });
	player.addListener('varchanged_var1', function(args) { me.callChildLogicBlocksHotspot_jinru_varchanged_var1();me.callChildLogicBlocksHotspot_chumen_varchanged_var1();me.callChildLogicBlocksHotspot_jinyuanxing_varchanged_var1();me.callChildLogicBlocksHotspot_jinyuancao_varchanged_var1();me.callChildLogicBlocksHotspot_jincheku_varchanged_var1();me.callChildLogicBlocksHotspot_jinxiaoting_varchanged_var1();me.callChildLogicBlocksHotspot_jinxibu_varchanged_var1();me.callChildLogicBlocksHotspot_jinhuodong_varchanged_var1();me.callChildLogicBlocksHotspot_jinjianshen_varchanged_var1();me.callChildLogicBlocksHotspot_jinzhongxin_varchanged_var1();me.callChildLogicBlocksHotspot_jinxiuxi_varchanged_var1();me.callChildLogicBlocksHotspot_jinshequ_varchanged_var1();me.callChildLogicBlocksHotspot_jindongbu_varchanged_var1();me.callChildLogicBlocksHotspot_jinnanmen_varchanged_var1();me.callChildLogicBlocksHotspot_jinximen_varchanged_var1();me.callChildLogicBlocksHotspot_jinzoulang_varchanged_var1(); });
	player.addListener('hotspotsremoved', function(args) { me.removeSkinHotspots(); });
	me.skinTimerEvent();
};