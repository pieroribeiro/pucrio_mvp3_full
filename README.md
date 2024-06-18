# PUCRIO - MVP3 - FRONTEND ADVANCED
Repositório referente ao MVP da disciplina Desenvolvimento Fullstack Avançado

## Sobre o projeto

Este MPV foi concebido para demonstrar a arquitetura Frontend em React, consumindo as configurações, notícias e textos descritivos através de arquivos JSON, que simulam requisições para APIs.

O objetivo deste modelo é demonstrar a construção do projeto em React, utilizando componentes reutilizáveis com parâmetros (props) e estados (state), simulando um portal de notícias.

### - Figma do Projeto:
https://www.figma.com/design/ILojfHYUpH5xRmcsiiqqqV/PUCRio---MVP3?node-id=0-1&t=3h3058c9QpcDbaAm-0

### - Instalação:

#### ✅ Download do Repositório:
```
git clone git@github.com:pieroribeiro/pucrio_mvp3_full.git
cd pucrio_mvp3_full/
```

#### ✅ Construir a Imagem Docker, execute o comando na raíz do projeto (onde se encontra o arquivo Dockerfile):
```
docker build -t pucriomvp3full .
```

#### ✅ Executar o container Docker contruído anteriormente:
```
docker run -d -p 8000:80 pucriomvp3full
```

#### ✅ Verifique se o container Docker está em execução:
```
docker ps -a
```
ou
```
docker stats
```

#### ✅ Executar o projeto:
Para execução do projeto, basta acessar a url abaixo no Browser:

[Portal de Notícias](http://localhost:8000)


### ✅ - Para cancelar a execução do container Docker, executar o seguinte comando na raíz deste repositório:
```
docker stop [CONTAINER_ID]
docker remove [CONTAINER_ID]
```
