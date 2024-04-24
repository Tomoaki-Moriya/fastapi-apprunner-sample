#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { AppRunnerStack } from "../lib/apprunner-stack";
import { AppRunnerEcrStack } from "../lib/apprunner-ecr-stack";
import { AppRunnerRoleStack } from "../lib/apprunner-role-stack";

const app = new cdk.App();
new AppRunnerEcrStack(app, "AppRunnerEcrStack", {});
new AppRunnerRoleStack(app, "AppRunnerRoleStack", {});
new AppRunnerStack(app, "AppRunnerStack", {});
