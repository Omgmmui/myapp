pipeline {
    agent any

    stages {

        stage('Check Environment') {
            steps {
                sh 'echo Running as:'
                sh 'whoami'
                sh 'docker --version'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t my-node-app .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh 'docker stop my-node-app || true'
                sh 'docker rm my-node-app || true'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker run -d -p 3000:3000 --name my-node-app my-node-app'
            }
        }
    }
}
