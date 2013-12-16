L.Google=L.Class.extend({includes:L.Mixin.Events,options:{minZoom:0,maxZoom:18,tileSize:256,subdomains:"abc",errorTileUrl:"",attribution:"",opacity:1,continuousWorld:!1,noWrap:!1},initialize:function(e,t){L.Util.setOptions(this,t),this._ready=void 0!=google.maps.Map,this._ready||L.Google.asyncWait.push(this),this._type=e||"SATELLITE"},onAdd:function(e,t){this._map=e,this._insertAtTheBottom=t,this._initContainer(),this._initMapObject(),e.on("viewreset",this._resetCallback,this),this._limitedUpdate=L.Util.limitExecByInterval(this._update,150,this),e.on("move",this._update,this),e.on("zoomanim",function(e){var t=e.center,i=new google.maps.LatLng(t.lat,t.lng);this._google.setCenter(i),this._google.setZoom(e.zoom)},this),e._controlCorners.bottomright.style.marginBottom="1em",this._reset(),this._update()},onRemove:function(e){this._map._container.removeChild(this._container),this._map.off("viewreset",this._resetCallback,this),this._map.off("move",this._update,this),e._controlCorners.bottomright.style.marginBottom="0em"},getAttribution:function(){return this.options.attribution},setOpacity:function(e){this.options.opacity=e,1>e&&L.DomUtil.setOpacity(this._container,e)},setElementSize:function(e,t){e.style.width=t.x+"px",e.style.height=t.y+"px"},_initContainer:function(){var e=this._map._container,t=e.firstChild;this._container||(this._container=L.DomUtil.create("div","leaflet-google-layer leaflet-top leaflet-left"),this._container.id="_GMapContainer_"+L.Util.stamp(this),this._container.style.zIndex="auto"),e.insertBefore(this._container,t),this.setOpacity(this.options.opacity),this.setElementSize(this._container,this._map.getSize())},_initMapObject:function(){if(this._ready){this._google_center=new google.maps.LatLng(0,0);var e=new google.maps.Map(this._container,{center:this._google_center,zoom:0,tilt:0,mapTypeId:google.maps.MapTypeId[this._type],disableDefaultUI:!0,keyboardShortcuts:!1,draggable:!1,disableDoubleClickZoom:!0,scrollwheel:!1,streetViewControl:!1}),t=this;this._reposition=google.maps.event.addListenerOnce(e,"center_changed",function(){t.onReposition()}),e.backgroundColor="#ff0000",this._google=e}},_resetCallback:function(e){this._reset(e.hard)},_reset:function(){this._initContainer()},_update:function(e){if(this._google){this._resize();var t=e&&e.latlng?e.latlng:this._map.getCenter(),i=new google.maps.LatLng(t.lat,t.lng);this._google.setCenter(i),this._google.setZoom(this._map.getZoom())}},_resize:function(){var e=this._map.getSize();(this._container.style.width!=e.x||this._container.style.height!=e.y)&&(this.setElementSize(this._container,e),this.onReposition())},onReposition:function(){this._google&&google.maps.event.trigger(this._google,"resize")}}),L.Google.asyncWait=[],L.Google.asyncInitialize=function(){var e;for(e=0;e<L.Google.asyncWait.length;e++){var t=L.Google.asyncWait[e];t._ready=!0,t._container&&(t._initMapObject(),t._update())}L.Google.asyncWait=[]};