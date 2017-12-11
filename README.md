# ESRI Shapefile Dashboard in Pentaho
This repository demos Pentaho's ability to utilize ESRI shapefile data by
providing a step-by-step guide and example code for a Chicago Data Heat Map.

To do this, we use the CTools' Dashboard component, NewMapComponent.
NewMapComponent takes either GeoJSON or KML files as input, so as an additional
first step we use PDI & open-source tools to convert the ESRI shapefile into
GeoJSON.

## Prerequisites
This guide uses the following software:
 - Pentaho Server 8.0
 - Pentaho Data Integration 8.0
 - GDAL 2.2.1

And the following data from [Chicago Data Portal](https://data.cityofchicago.org/):
 - Neighborhoods Shapefile [https://data.cityofchicago.org/Facilities-Geographic-Boundaries/Boundaries-Neighborhoods/9wp7-iasj/data](https://data.cityofchicago.org/Facilities-Geographic-Boundaries/Boundaries-Neighborhoods/9wp7-iasj/data)
 - some data w/ Community Area Name or Community Area ID

The data is already downloaded to the `/resources/esri` and `/resources/csv`
directories.

Please see the following linkes for installation instructions:
 - pentaho help server 8.0
 - pentaho help pdi 8.0
 - GDAL 4 windows https://sandbox.idre.ucla.edu/sandbox/tutorials/installing-gdal-for-windows
 - GDAL 4 mac ??
 - GDAL 4 linux

## Convert ESRI to GeoJSON
There's more than 1 way to convert ESRI to GeoJSON, but here we use the GDAL
suite's `ogr2ogr` command line tool. If you have a large volume of shapefile
data, you may want to look at alternative conversion tools appropriate for your
environment.

A brief example of using `ogr2ogr` to convert ESRI to GeoJSON can be found [on
GitHub](https://gist.github.com/benbalter/5858851).

The PDI transformation `ESRI-to-GeoJSON.ktr` takes as parameters the path to the
source shapefile and target geojson. By default these point to the included
files in the `/resources` directories.

[image of ktr]

The transformation simply calls the `ogr2ogr` command with the proper inputs and
options, and the GDAL libraries handle the conversion.

## Extract ID Property for Data
...

## Create Dashboard with NewMapComponent

## Load GeoJSON Map & Integrate Data
javascript to load GeoJSON shapes


## Add Dashboard Features
tooltip
