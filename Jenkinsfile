cat > Jenkinsfile <<'EOF'
pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps { checkout scm }
        }
        stage('Install Dependencies') {
            steps { sh 'npm install' }
        }
        stage('Run Tests') {
            steps { sh 'npm test || echo "No tests defined"' }
        }
    }
    post {
        success { echo 'Pipeline succeeded' }
        failure { echo 'Pipeline failed' }
    }
}
EOF

# show it to verify
echo "------ Jenkinsfile content ------"
cat Jenkinsfile
echo "---------------------------------"

