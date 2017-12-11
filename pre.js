function(){
	    
	    /*
		 *     *
		 *         * Load the map definition from a GeoJSON file
		 *             *
		 *                 * It's only rendered in the map those features
		 *                 contained in the resultset.
		 *                     *
		 *                         */
	    
	    var getResource = this.dashboard.getWebAppPath() + '/plugin/pentaho-cdf-dd/api/resources';
	    var mapDef = '${solution:resources/geojson/neighborhoods-2012-geojson.js}';

	    this.shapeResolver = 'geoJSON';
	    this.setAddInOptions('ShapeResolver', 'geoJSON', {
			        url: getResource + mapDef, //BA server does not recognize the .geojson extension
			        idPropertyName: 'PRI_NEIGH' //GeoJSON feature property that will be used to index the feature
			    });
	    
	    /*
		 *     *
		 *         * The NMC needs to know what columns in the resultset define
		 *             * the id, that will be matched with the mapDefinition,
		 *             and
		 *                 * what column represent the value used to match the
		 *                 color.
		 *                     *
		 *                         * There are two ways to do that.
		 *                             *   1 - Have two columns the in resultset
		 *                             called id and fill.
		 *                                 *   2 - Use the visualRoles to set
		 *                                 which columns (base 0) represent the
		 *                                 id and fill values.
		 *                                     *
		 *                                         */
	    
	    this.visualRoles = {
			        id: 0,
			        fill: 1
			    };
	    
	    /*
		 *     *
		 *         * Define a customized fillColor function.
		 *             * Any feature attribute can be changed or created by this
		 *             way.
		 *                 *
		 *                     */
	    
	    this.attributeMapping.fill = function(context, seriesRoot, mapping, row) {
			        
			        var value = row[mapping.fill];
			        
			        if (_.isNumber(value) && value < 25) {
						          return "green";
						        }else{
									          return "red";
									        }
			        
			    };

	    /*
		 *     *
		 *         * Configure a handler for shape mouseover
		 *             *
		 *                 */
	    
	    this.off("shape:mouseover").on("shape:mouseover", function(e){
			       
			        $('#popupObj').show();
			        this.currentFeatureOver = e;
			        
			    });

	    this.off("shape:mouseout").on("shape:mouseout", function(e){
			       
			        $('#popupObj').hide();
			        this.currentFeatureOver = null;
			        
			    });
	    
	    /*
		 *     *
		 *         * If defined a click event, change the cursor
		 *             *
		 *                 */
	    
	    this.styleMap = {
			            shapes: {
							                cursor: "default"
							            }
			    };  

} 
 
