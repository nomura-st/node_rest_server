REM package.jsonと同じフォルダから実行されることを想定している
REM callで実行しないとnpx実行終了後にbatも終了してしまう
setlocal
set SCHEMA_PATH=./prisma/dev
call npx prisma db push --schema=%SCHEMA_PATH%/schema.prisma
call npx prisma db push --schema=%SCHEMA_PATH%/schema_append.prisma
endlocal