/**
 * @license
 * FSN App
 * Copyright (C) 2017  Pedro Rodrigues <prodrigues1990@gmail.com>
 *
 * This file is part of FSN App.
 *
 * FSN App is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, version 2 of the License.
 *
 * FSN App is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with FSN App.  If not, see <http://www.gnu.org/licenses/>.
 */
registerGoogleMapsPrototypes = function() {
  /**
   * @param {double} degree - decimal degree, 0-359
   */
  google.maps.toRad = function(degree) {
    return degree * Math.PI / 180;
  }
  /**
   * @param {double} - radians
   */
  google.maps.toDeg = function(radian) {
    return radian * 180 / Math.PI;
  }

  /**
   *
   */
  google.maps.getNorth = function() {
    return 0;
  }
  /**
   *
   */
  google.maps.getNorthEast = function() {
    return 45;
  }
  /**
   *
   */
  google.maps.getEast = function() {
    return 90;
  }
  /**
   *
   */
  google.maps.getSouthEast = function() {
    return 135;
  }
  /**
   *
   */
  google.maps.getSouth = function() {
    return 180;
  }
  /**
   *
   */
  google.maps.getSouthWest = function() {
    return 225;
  }
  /**
   *
   */
  google.maps.getWest = function() {
    return 270;
  }
  /**
   *
   */
  google.maps.getNorthWest = function() {
    return 315;
  }


  /**
   * LatLng JSON stringify for the GEOJson spec
   */
  google.maps.LatLng.prototype.toJSON = function() {
    return JSON.stringify({
      'type': 'Point',
      'coordinates': [
        this.lng(),
        this.lat()
      ]
    });
  }

  /**
   * Moves all corners inwards by the given distance
   *
   * @param {int} distance - meters to shrink
   */
  google.maps.LatLngBounds.prototype.shrink = function(distance) {
    return new google.maps.LatLngBounds(
      google.maps.geometry.spherical.computeOffset(
        this.getNorthEast(),
        distance,
        google.maps.getSouthWest()
      ),
      google.maps.geometry.spherical.computeOffset(
        this.getSouthWest(),
        distance,
        google.maps.getNorthEast()
      )
    );
  }

  /**
   * Moves all corners outwards by the given distance
   *
   * === LatLngBounds.prototype.shrink(-distance)
   *
   * @param {int} distance - meters to inflate
   */
  google.maps.LatLngBounds.prototype.inflate = function(distance) {
    return this.shrink(-distance);
  }

}
