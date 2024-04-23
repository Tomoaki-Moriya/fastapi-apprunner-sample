# fastapi-apprunner-sample

This is a sample application for running FastAPI on AWS AppRunner.

# Getting started

## Local

```
uvicorn main:app
```

## Docker

### Build

```
docker build -t fastapi-apprunner-sample .
```

### Run

```
docker run -p 80:80 fastapi-apprunner-sample
```
