pipeline {
  environment {
    registry = "lakshitsainiceligo/nodeweb"
    registryCredential = 'dockerhub'
    dockerImage = ''
  }
  agent any
  tools {nodejs "nodejs"}
  @Library('shared_lib_demo') _
  stages {
    stage('Cloning Git') {
      steps {
        git 'https://github.com/lakshitsaini/nodeweb.git'
      }
    }
    stage('shared-lib-test'){
      steps{
        echo 'say Hello'
        sayHello 'saini'
      }
    }
    stage('Build') {
       steps {
         echo 'Building stage...'
       }
    }
    stage('Unit Testing') {
      steps {
        echo 'Generating code coverage...'
      }
    }
    stage('Static code analysis') {
      steps {
        echo 'SCA TPL Scan...'
      }
    }
    stage('Initializing docker') {
        steps{
            script{
                def dockerHome = tool 'docker'
                env.PATH = "${dockerHome}/bin:${env.PATH}"
            }
        }
    }
    stage('Building docker image') {
      steps{
        script {
          dockerImage = docker.build registry + ":$BUILD_NUMBER"
        }
      }
    }
    stage('Container vulnerability scan') {
      steps {
        echo 'CV Scan....'
      }
    }
    stage('Docker publish to dev repo') {
      steps{
         script {
            docker.withRegistry('https://registry.hub.docker.com', registryCredential ) {
            dockerImage.push("${env.BUILD_NUMBER}")            
            dockerImage.push("latest")  
          }
        }
      }
    }
    stage('Remove Unused docker image') {
      steps{
        sh "docker rmi $registry:$BUILD_NUMBER"
      }
    }
  }
}
