pipeline {
    agent any
    tools {
        maven 'Maven3'
    }
    options {
        timestamps()
        timeout(time: 15, unit: 'MINUTES')
        buildDiscarder(logRotator(numToKeepStr: '10'))
    }
    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                sh 'mvn -B clean package -DskipTests'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
                sh 'mvn -B test'
            }
            post {
                always {
                    junit '**/target/surefire-reports/*.xml',
                    allowEmptyResults: true,
                }
            }
        }
        
        stage('Archive') {
            steps {
                echo 'Archiving...'
                archiveArtifacts artifacts: '**/target/*.jar', 
                fingerprint: true
            }
        }
    }
    post {
        success {
            echo 'BUILD SUCCESS'
        }
        failure {
            echo 'BUILD FAILURE'
        }
        cleanup {
            cleanWs()
        }
    }
}