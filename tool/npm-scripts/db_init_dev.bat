REM @echo off
REM package.jsonと同じフォルダから実行されることを想定している
REM callで実行しないとnpx実行終了後にbatも終了してしまう
setlocal
REM 静的型チェックなど用に本番と同じClientのみ生成
set SCHEMA_PATH=./prisma
call npx prisma generate --schema=%SCHEMA_PATH%/schema.prisma
call npx prisma generate --schema=%SCHEMA_PATH%/schema_append.prisma

REM デバッグ接続用のSQLite DB
set SCHEMA_PATH=./prisma/dev
call npx prisma db push --schema=%SCHEMA_PATH%/schema.prisma
call npx prisma db push --schema=%SCHEMA_PATH%/schema_append.prisma
endlocal