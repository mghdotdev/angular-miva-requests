/**
 * AngularJS module for making requests to to Miva's various "APIs":
 * 1) Clientside API (/json.mvc)
 * 2) Custom Page Template API (AJAX)
 */

import 'angular';

var ngModule = angular.module('MivaRequests', []);
ngModule.config(function( $sceDelegateProvider ) {
	$sceDelegateProvider.resourceUrlWhitelist([
		'self'
	]);
});
ngModule.factory('MivaRequests', ['$http', function( $http ) {

	var self = this;

	// ---------------------------------------------------------------------------------------------------- //

	self.pageConfig = {
		method: 'GET',
		url: undefined,
		params: {},
		headers: {
			'Content-Type': 'application/json'
		},
		cache: true
	};

	self.clientsideConfig = {
		method: 'GET',
		url: undefined,
		params: {
			Session_Type: 'runtime',
			Store_Code: undefined,
			Function: undefined
		},
		headers: {
			'Content-Type': 'application/json'
		},
		cache: true
	};

	// ---------------------------------------------------------------------------------------------------- //

	self.page = function( verb, params, method, data ) {

		if ( verb === undefined ) {
			throw new Error( 'Missing `verb` parameter.' );
		}
		if ( self.pageConfig.url === undefined ) {
			throw new Error( 'Missing `url` dependency.' );
		}

		var config = angular.copy( self.pageConfig );
		config.method = ( typeof method == 'string' ) ? method : config.method;
		config.data = data;
		config.params['Verb'] = verb;
		config.params = angular.extend( config.params, params );

		return $http( config ).then(
			function( response ) {
				if ( response && response.data ) {
					return response.data;
				}
			},
			function( httpError ) {
				throw httpError.status + ' : ' + httpError.data;
			}
		);

	};

	self.clientside = function( func, params, method, data ) {

		if ( func === undefined ) {
			throw new Error( 'Missing `func` parameter.' );
		}
		if ( self.clientsideConfig.params.Store_Code === undefined ) {
			throw new Error( 'Missing `Store_Code` dependency.' );
		}

		var config = angular.copy( self.clientsideConfig );
		config.method = ( typeof method == 'string' ) ? method : config.method;
		config.data = data;
		config.params['Function'] = func;
		config.params = angular.extend( config.params, params );

		return $http( config ).then(
			function( response ) {
				if ( response && response.data ) {
					if ( response && response.data ) {
						return response.data;
					}
				}
			},
			function( httpError ) {
				throw httpError.status + ' : ' + httpError.data;
			}
		);

	};

	self.init = function( endpoint, options ) {

		// validate parameters
		if ( typeof endpoint != 'string' ) {

			throw new TypeError( '[MivaRequests] - "endpoint" is not a string' );

		}
		if ( typeof options != 'object' ) {

			throw new TypeError( '[MivaRequests] - "options" is not an object' );

		}

		// initialize endpoints - determined by first parameter `endpoint`
		if ( endpoint == 'page' ) {
			
			if ( options.pageUrl === undefined ) {
				throw new Error( '[MivaRequests] - Missing `pageUrl` option' );
			}

			self.pageConfig.url = options.pageUrl;

		}
		else if ( endpoint == 'clientside' ) {

			if ( options.moduleRoot === undefined ) {
				throw new Error( '[MivaRequests] - Missing `moduleRoot` option' );
			}
			if ( options.storeCode === undefined ) {
				throw new Error( '[MivaRequests] - Missing `storeCode` option' );
			}

			self.clientsideConfig.url = options.moduleRoot + 'json.mvc';
			self.clientsideConfig.params.Store_Code = options.storeCode;

		}

	};

	// ---------------------------------------------------------------------------------------------------- //

	return self;

}]);

export default ngModule;