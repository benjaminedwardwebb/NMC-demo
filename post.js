function() {
	/* TOOLTIP ON MOUSE HOVER 2 */
	var me = this;
	/*
	** Define events for mouse move
	**/

	this.mapEngine.map.events.register('mousemove', this.mapEngine.map, function (e) {

		if (!_.isEmpty(me.currentFeatureOver)) {

			var modelItem = me.mapEngine.model.findWhere({
				id: me.currentFeatureOver.id
			});

			$('#popupObj')
				.css('top', e.pageY -50)
				.css('left', e.pageX + 5)
				.html(
					modelItem.id + '(' + modelItem.attributes.data.value + ')'
				);

		}
	});

	this.mapEngine.map.events.register('movestart', this.mapEngine.map, function (e) {
		$('#popupObj').fadeIn(500);
	});

	this.mapEngine.map.events.register('moveend', this.mapEngine.map, function (e) {
		$('#popupObj').fadeOut(500);
	});    

} 
