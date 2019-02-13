# Favs

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

##ExemploAngular
Uma aplicação em Angular consumindo uma API REST

Para executar este modelo deve-se baixar e executar o codigo que contem a API Rest de Serviços: https://github.com/MaviaLima/Servicos24Help.git

#ATENÇÃO
Deve-se realizar alguns cadastros para que se construa uma massa de dados. Caso na execução do Angular ocorra um erro de CORS (CORS header ‘Access-Control-Allow-Origin’ missing). Ex.: 'Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at https://localhost:8080' o que me salvou foi a extensão chrome: [chrome.google.com/webstore/detail/allow-control-allow-origin/…. As extensões de navegador tem menos restrições para realizarem requisições Para o GoogleChrome deve-se incluir e habilitar esta extensão.

#EndPoints REST:
Lista de Serviços - GET /rest/servicos

Para salvar o servico - POST /rest/servico
