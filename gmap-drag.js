MapDraggableMarker = function(options) {
    this.element = options.element;
    this.lat = options.lat;
    this.lng = options.lng;
    this.zoom = options.zoom;
    this.coordsLenght = options.coordsLenght;
    this.elementLat = options.elementLat;
    this.elementLng = options.elementLng;

    this.map = new google.maps.Map(this.element, {
        zoom: this.zoom,
        center: new google.maps.LatLng(this.lat, this.lng),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    this.marker = new google.maps.Marker({
        position: new google.maps.LatLng(this.lat, this.lng),
        draggable: true
    });
}

MapDraggableMarker.prototype.addListenerToMarker = function() {
    let self = this;

    google.maps.event.addListener(this.marker, 'dragend', function(evt) {
        self.elementLat.val(evt.latLng.lat().toFixed(self.coordsLenght));
        self.elementLng.val(evt.latLng.lng().toFixed(self.coordsLenght));
    });
}

MapDraggableMarker.prototype.init = function() {
    this.addListenerToMarker();
    this.map.setCenter(this.marker.position);
    this.marker.setMap(this.map);
}