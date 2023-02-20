REM @echo off
REM package.json�Ɠ����t�H���_������s����邱�Ƃ�z�肵�Ă���
setlocal
REM Docker�ɂ��DB�T�[�o�N��
call docker\start_docker.bat

REM DB�T�[�o�ɃX�L�[�}�t�@�C������K�p
REM call�Ŏ��s���Ȃ���npx���s�I�����bat���I�����Ă��܂�
set SCHEMA_PATH=./prisma
call npx prisma db push --schema=%SCHEMA_PATH%/schema.prisma
call npx prisma db push --schema=%SCHEMA_PATH%/schema_append.prisma
endlocal