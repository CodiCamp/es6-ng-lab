/**
 * List data from mock up json file
 */

ItemsListController.$inject = ['getJsonService'];

export default function ItemsListController(getJsonService) {

    var viewModel = this;
    viewModel.items = {};

    activate();

    ////////////////

    function activate() {

        getJsonService.parseJson('items.json')
            .then(function(result) {

                if(result.status == 200) {

                    viewModel.items = result.data.data.results;

                } else {

                    console.log('something went wrong');
                    // alternatively ngNotify can be used
                }
            })
            .catch(function(e){
                console.log('an error occurred ' + e.data.description);
                // alternatively ngNotify can be used
            });
    }
}

