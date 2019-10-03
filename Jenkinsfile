node{
    def git_last_hash = ""
    stage('pull source project'){
        sh 'ls'
        git credentialsId: 'username-password-gitlab-bom43531', url: 'https://gitlab.com/brombom43531/letvote.git'        
    }

    stage('run unit test'){
        echo "todo"
        git_last_hash = sh(returnStdout: true, script: 'git rev-parse HEAD | cut -c1-8').trim()
    }

    stage('Analyze Code'){
        echo "todo"
    }

    stage('Pack Project'){
        echo "todo"
    }

    stage('run e2e test'){
        echo "todo"
    }

    stage('deploy'){
        echo "todo"
    }
}