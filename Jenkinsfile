#! /usr/bin/env groovy

pipeline {

  agent {
    docker {
      image 'node'
      args '-u root'
    }
  }

  stages {
    stage('Install') {
      steps {
        echo 'Installing...'
        sh 'npm install'
      }
    }

    stage('Build') {
      steps {
        echo 'Building...'
        sh 'npm run build'
      }
    }
  }
}