# Configuração do ambiente utilizando docker

## Configurando nginx proxy

Para usarmos o docker no ambiente de desenvolvimento com múltiplos projetos rodando simultaneamente e em hosts diferentes precisamos configurar um proxy no nginx para que ele possa redirecionar uma url requisitada para o projeto correto.

Para fazer isso vamos usar o nginx-proxy que faz esse processo automaticamente.

Antes de iniciar o processo de configuração precisamos nos certificar que nenhum serviço está rodando na porta 80 da nossa máquina.

```
docker pull jwilder/nginx-proxy:alpine
docker network create nginx-proxy-network
docker run -d -p 80:80 --name nginx-proxy --net nginx-proxy-network -v /var/run/docker.sock:/tmp/docker.sock:ro jwilder/nginx-proxy:alpine
```

Com isso o serviço de proxy do nginx será inicializado e estará pronto para realizar o processo de redirecionamento dos domínios de desenvolvimento (\*.local) para o seu respectivo container docker.

## Configure o arquivo de hosts locais

Adicione as entradas no seu arquivo /etc/hosts com o virtual host: `api.takebook.local` e `app.takebook.local` (Ambas apontando para o endereço `127.0.0.1`)

## Configure as variáveis de ambiente do Administrativo

-   As variáveis de ambiente necessárias estão no arquivo `.env.example`

## Inicie os serviços do Takebook Administrativo

1. Acesse a pasta raiz do projeto "Takebook Administrativo" e rode o comando `docker-compose up --build -d`

2. Conecte o projeto ao nginx-proxy executando: `docker network connect takebook-administrativo_default nginx-proxy`

3. Espere o container começar a "ouvir" na porta 3000.

4. Acesse o projeto pela url "http://app.takebook.local"

5. Caso não funcione, tente acessar o projeto através da url "http://localhost:3000"
PS: Em caso funcione pela url do localhost mas não pela url do dominio, reinicie o container do nginx proxy

## Configure as variáveis de ambiente da API

-   As variáveis de ambiente necessárias estão no arquivo `.env.example`

## Inicie os serviços da API

1. Acesse a pasta raiz do projeto "Takebook API" e rode o comando `docker-compose up --build -d`
2. Conecte o projeto ao nginx-proxy executando: `docker network connect takebook-api_default nginx-proxy`
3. Espere o container terminar de carregar.
4. Rode as migrations através do comando `docker-compose run --rm api php artisan migrate --seed`

5. Acesse o projeto pela url "http://api.takebook.local"

6. Caso não funcione, tente acessar o projeto através da url "http://localhost:8000"

PS: Caso as chamadas à API retornem status 400, é muito provável que a api não conseguiu se comunicar com o redis, tente alterando o host no .env
