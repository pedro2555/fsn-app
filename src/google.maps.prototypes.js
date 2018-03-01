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
}
