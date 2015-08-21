angular.module('contatooh').factory('InterceptorService', InterceptorService);

function InterceptorService($location, $q){
	var intercetor = {
		responseError: function(response){
			if (response.status == 401)
				$location.path('/auth');

			return $q.reject(response);
		}
	}

	return intercetor;
}