#! /usr/bin/env groovy

pipeline {
  agent any

  stages {
    stage('Clone repository') {
      steps {
        git 'https://github.com/adampaulsackfield/portfolio.git'
      }
    }

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

    stage('Copy to nginx directory') {
      steps {
        sh 'cp -r build/* /var/www/adamsackfield.uk/html'
      }
    }
  }
}