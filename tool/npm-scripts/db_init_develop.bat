@echo off
REM package.jsonと同じフォルダから実行されることを想定している
setlocal
REM DockerによりDBサーバ起動
call docker\start_docker.bat

REM DBサーバにスキーマファイル情報を適用
REM callで実行しないとnpx実行終了後にbatも終了してしまう
set SCHEMA_PATH=./prisma
call npx prisma db push --schema=%SCHEMA_PATH%/schema.prisma
call npx prisma db push --schema=%SCHEMA_PATH%/schema_append.prisma
endlocal