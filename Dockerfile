# M1Macでのビルドのために--platform=linux/amd64を追加
FROM --platform=linux/amd64 python:3.11-slim-buster

WORKDIR /app

COPY ./src /app

RUN pip install --upgrade pip && pip install -r requirements.txt

EXPOSE 80

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "80"]