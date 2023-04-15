locals {
  bucket = "fullstackjosh-dot-com"
  domain = "fullstackjosh"
  genericTLD = "com"
}

terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
      configuration_aliases = [
        aws.apsoutheast2,
        aws.useast1,
      ]
    }
  }
}

resource aws_s3_bucket SiteBucket {
  provider = aws.apsoutheast2

  bucket = "${var.environment}-${local.bucket}"
}

resource aws_s3_bucket_cors_configuration SiteBucketCors {
  provider = aws.apsoutheast2

  bucket = aws_s3_bucket.SiteBucket.id

  cors_rule {
    allowed_headers = ["Authorization", "Content-Length"]
    allowed_methods = ["GET"]
    allowed_origins = ["https://${local.domain}.${local.genericTLD}"]
    expose_headers  = []
    max_age_seconds = 3000
  }
}

resource aws_s3_bucket_website_configuration SiteBucketConfig {
  provider = aws.apsoutheast2

  bucket = aws_s3_bucket.SiteBucket.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "index.html"
  }
}

resource aws_s3_bucket_acl SiteBucketAcl {
  provider = aws.apsoutheast2

  bucket = aws_s3_bucket.SiteBucket.id

  acl = "public-read"
}

resource aws_cloudfront_origin_access_identity SiteIdentity {
  provider = aws.apsoutheast2
}

resource aws_s3_bucket_policy SiteBucketPolicy {
  provider = aws.apsoutheast2

  bucket = aws_s3_bucket.SiteBucket.id

  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "${aws_cloudfront_origin_access_identity.SiteIdentity.iam_arn}"
      },
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::${var.environment}-${local.bucket}/*"
    }
  ]
}
EOF
}

data aws_acm_certificate SiteCertificate {
  provider = aws.useast1

  domain = "${local.domain}.${local.genericTLD}"
  statuses = ["ISSUED"]
}

resource aws_cloudfront_distribution SiteDistribution {
  provider = aws.apsoutheast2

  enabled = true
  is_ipv6_enabled = true
  default_root_object = "index.html"
  aliases = ["${local.domain}.${local.genericTLD}"]

  origin {
    domain_name = aws_s3_bucket.SiteBucket.bucket_regional_domain_name
    origin_id = "${var.environment}-${local.bucket}"

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.SiteIdentity.cloudfront_access_identity_path
    }
  }

  custom_error_response {
    error_caching_min_ttl = 0
    error_code = 403
    response_code = 200
    response_page_path = "/index.html"
  }

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "${var.environment}-${local.bucket}"

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 31536000
    default_ttl            = 31536000
    max_ttl                = 31536000
    compress               = true
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn = data.aws_acm_certificate.SiteCertificate.arn
    ssl_support_method = "sni-only"
    minimum_protocol_version = "TLSv1.1_2016"
  }
}
