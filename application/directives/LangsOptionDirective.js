"use strict";


export default function LangsOptionDirective( ){

    return {

        restrict: 'A',
        template: '',
        scope: {
            'langs': '='
        },
        controller: [ '$scope' , function ( $scope ){
            if ($scope.$parent.currentLang){

                $scope.currentLang = $scope.$parent.currentLang;
            }
            else{
                $scope.currentLang =  $scope.langs[0];

            }

            $scope.changeLanguage = function ( newLanguage ){

                //console.log(newLanguage);
                $scope.$parent.updateTranslations( newLanguage );

            };

        } ],
        link: function ( scope, element, attrs, controller, transcludeFn ){

            let options = '';

            scope.langs.forEach( (lang) => {
                options += `<option>${lang}</option>`;
            } );

            element.html( options );

            new SelectFx(
                document.querySelector('#langs'),{
                    onChange: scope.changeLanguage
                }
            );

        }//link

    }//LangsListDirective {}

}//LangsListDirective ()