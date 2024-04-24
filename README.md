# fastapi-apprunner-sample

This is a sample application for running FastAPI on AWS AppRunner.

# Getting started

## Build

```
docker build -t fastapi-apprunner-sample .
```

## Run

```
docker run -p 80:80 fastapi-apprunner-sample
```

# Deploy

```
aws ecr get-login-password --region <your_region> --profile <your_profile_name> | docker login --username AWS --password-stdin <your_account_id>.dkr.ecr.<your_region>.amazonaws.com
```

```
docker tag fastapi-apprunner-sample:latest <your_account_id>.dkr.ecr.<your_region>.amazonaws.com/fastapi-apprunner-sample:latest
```

```
docker push <your_account_id>.dkr.ecr.<your_region>.amazonaws.com/fastapi-apprunner-sample:latest
```
