terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
    }
  }
}

provider "aws" {
  region = "ap-southeast-2"
  alias = "apsoutheast2"
}

provider "aws" {
  region = "us-east-1"
  alias = "useast1"
}

module "static-site" {
  source = "./../../modules/static-site"
  environment = "prod"

  providers = {
    aws.apsoutheast2 = aws.apsoutheast2
    aws.useast1 = aws.useast1
  }
}
