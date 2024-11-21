terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 3.0.1"
    }
  }
}

# Configure the docker provider
provider "docker" {
}

# Create a docker image resource
# -> docker pull syntale/website:latest
resource "docker_image" "website" {
  name         = "syntale/website"
  build {
    context = "."
    tag     = ["syntale/website"]
    label = {
      author : "Sun Beam <sunbeamprojects9@gmail.com>"
    }
  }
}

# Create a docker container resource
resource "docker_container" "website" {
  name    = "syntale-website"
  image   = docker_image.website.image_id

  ports {
    external = 8080
    internal = 80
  }
}