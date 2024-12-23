# Teste - Sistema de Listagem das Unidades de Saúde

Este projeto é uma aplicação Angular construída para listar unidades de saúde do SUS utilizando a API do [Dados Abertos SUS](https://apidadosabertos.saude.gov.br/v1/cnes/estabelecimentos).

Observação: Não consegui utilizar a URL disponibilizada (ERRO 404), alterei para https://apidadosabertos.saude.gov.br/cnes/estabelecimentos (Esse endereço era o único que estava sendo acessável diretamente pelo link no navegador). No entanto, apesar da instalação e configuração das extensões (CORS Everywhere e CORS Unblock) continuei recebendo erro de CORS e não consegui renderizar o código no navegador. Por conta disso, também não consegui seguir com a estilização dos componentes.

## Funcionalidades

1. **Listagem de Estabelecimentos**:
   - Exibe uma lista com informações sobre as unidades de saúde.
   - Possui filtros para filtrar por CNES, Nome Fantasia e CNPJ.
   - A lista é exibida com os seguintes dados: CNES, razão social, nome fantasia, CNPJ, telefone e e-mail.
   - Permite visualizar mais detalhes de cada estabelecimento ao clicar no botão "Visualizar".

2. **Visualização de Detalhes**:
   - Exibe os detalhes de uma unidade.
   - Mostra a localização do estabelecimento no mapa.

3. **Cadastro de Estabelecimento**:
   - Permite o cadastro de novos estabelecimentos de saúde utilizando um formulário.

