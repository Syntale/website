variable "repository_name" {
  description = "Name of the repository"
  type        = string
}

variable "iam_role" {
  type        = string
  description = "Self-hosted runner EC2 instance role"
}

variable "lifecycle_policy" {
  type        = string
  description = "the lifecycle policy to be applied to the ECR repository"
}

variable "aws_account_id" {
  description = "Target AWS Account ID"
  type        = string
}